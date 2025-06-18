# Adyen Integration Guide

## Part 1: Commerce Instance Setup (PaaS)

### Step 1: Install Adyen Extension

```bash
composer require adyen/module-payment
```

### Step 2: Configure Payment Method

1. Navigate to your Commerce admin panel
2. Configure the Adyen payment method settings
3. Verify installation by visiting `/checkout` - Adyen should appear in the payment methods list

## Part 2: Boilerplate Implementation

> **Note**: This integration has been tested with Adyen version 9.18.1

### Step 1: Install Adyen Checkout Components

Install the recommended Adyen Checkout dropin version v2.0.0 following the [official Adyen documentation](https://docs.adyen.com/online-payments/build-your-integration/sessions-flow/?platform=Web&integration=Drop-in&version=6.16.0#install-adyen-web).

### Step 2: Setup Adyen Web Package

1. Install the Adyen Web Node package
2. Since `node_modules` is not exported, move the package to the `scripts` folder
3. Update `head.html` with the following alias for imports:

   ```html
   "@adyen/adyen-web/": "/scripts/@adyen/adyen-web/"
   ```

### Step 3: Import Adyen Components

In your `commerce-checkout.js` file, add:

```javascript
import { AdyenCheckout, Dropin } from '@adyen/adyen-web/auto/auto.js';
```

### Step 4: Load Adyen Styles

1. Import the `loadCSS` function from `aem.js` script
2. Load the Adyen CSS file:

   ```javascript
   loadCSS('/scripts/@adyen/adyen-web/styles/adyen.css');
   ```

### Step 5: Verify Integration

1. Navigate to `/checkout`
2. Check the browser console for the `checkout/initialized` event
3. Verify that `adyen_cc` appears in the `availablePaymentMethods` object

### Step 6: Configure Payment Methods

In your checkout block, locate the `CheckoutProvider.render(PaymentMethods, {...})` call and add the Adyen payment method (`adyen_cc`) to the slots structure:

```javascript
CheckoutProvider.render(PaymentMethods, {
  slots: {
    Methods: {
      adyen_cc: {
        autoSync: false,
        render: async (ctx) => {
          // Adyen implementation goes here
          // (see Step 8 for the complete pattern)
        },
      },
      // ... other payment methods
    },
  },
})
```

**Key points:**

- **Path**: `slots > Methods > adyen_cc > render`
- **autoSync: false**: Prevents automatic form synchronization since Adyen handles its own state
- **render function**: Where you implement the Adyen Card component (detailed in Step 8)

### Step 7: Setup Adyen Session and Configuration

1. **Create a Session**: Follow the [Adyen documentation to create a session](https://docs.adyen.com/online-payments/build-your-integration/sessions-flow/?platform=Web&integration=Drop-in&version=6.16.0#create-payment-session):
   - If needed, install `@adyen/api-library` package
   - Move it to the `scripts` folder
   - Update `head.html` with the alias: `"@adyen/api-library"`

2. **Create Global Configuration**: Follow the [Adyen documentation to set up a global configuration object](https://docs.adyen.com/online-payments/build-your-integration/sessions-flow/?platform=Web&integration=Drop-in&version=6.16.0#id552021099)

### Step 8: Important - 3rd Party Component Integration Pattern

When integrating 3rd party components like Adyen within dropin slots, you **must** follow this specific pattern:

```javascript
"adyen_cc": {
  render: async (ctx) => {
    // 1. Create the container element
    const $container = document.createElement('div');
    
    // 2. Add container to slot (this is asynchronous/queued)
    ctx.appendChild($container);
    
    // 3. Use onRender to wait for DOM update before mounting 3rd party component
    ctx.onRender(async () => {
      // 4. Now mount the 3rd party component to the DOM-connected element
      const checkout = await AdyenCheckout(config);
      new Card(checkout, options).mount($container);
    });
  }
}
```

#### Why This Pattern is Required

- **Slot methods are asynchronous**: `ctx.appendChild()`, `ctx.replaceWith()`, etc. don't immediately update the DOM - they queue changes
- **3rd party components need DOM-connected elements**: Adyen (and most other components) require mounting to elements that are already in the document
- **`ctx.onRender()` ensures proper timing**: This callback runs after the slot's DOM has been updated
- **Framework handles cleanup automatically**: When users switch payment methods, the slot system automatically cleans up and re-renders

#### ❌ Don't Do This (Won't Work)

```javascript
ctx.appendChild($container);
new Card(checkout).mount($container); // ← Container not in DOM yet!
```

#### ✅ Do This (Correct)

```javascript
ctx.appendChild($container);
ctx.onRender(() => {
  new Card(checkout).mount($container); // ← Container is now in DOM
});
```

### Step 9: Handle Async Payment Processing

Adyen uses an asynchronous callback pattern that requires special handling to integrate with the synchronous `handlePlaceOrder` flow. You need to create a Promise bridge:

```javascript
// In handlePlaceOrder function
if (code === 'adyen_cc') {
  // Create a promise that resolves/rejects based on the onSubmit callback
  await new Promise((resolve, reject) => {
    // Store the resolve/reject functions so onSubmit can call them
    adyenCard._orderPromise = { resolve, reject };
    
    adyenCard.submit();
  });
  return;
}

// In the Adyen onSubmit callback
onSubmit: async (state, component) => {
  try {
    // ... payment processing logic ...
    
    // Resolve the promise in handlePlaceOrder
    adyenCard._orderPromise.resolve();
  } catch (error) {
    console.error('adyen error', error);
    component.setStatus('ready');
    
    // Reject the promise in handlePlaceOrder
    adyenCard._orderPromise.reject(error);
  }
}
```

#### Why This Promise Bridge is Required

**The Problem**: Adyen's payment flow is fundamentally different from other payment methods:

- **Other payment methods**: Synchronous flow where `handlePlaceOrder` can `await` the payment directly
- **Adyen payment method**: Asynchronous callback flow where `adyenCard.submit()` returns immediately, but the actual payment processing happens later in the `onSubmit` callback

**Without the Promise bridge**:

```javascript
// This doesn't work properly:
adyenCard.submit(); // Returns immediately
return; // handlePlaceOrder exits immediately
// ... later, onSubmit callback runs but handlePlaceOrder is long gone
```

**Result**:

- ❌ Spinner gets removed too early
- ❌ Errors don't bubble up to the main error handler
- ❌ Inconsistent user experience

**With the Promise bridge**:

```javascript
// This works correctly:
await new Promise((resolve, reject) => {
  adyenCard._orderPromise = { resolve, reject };
  adyenCard.submit();
});
// handlePlaceOrder waits here until onSubmit calls resolve/reject
```

**Result**:

- ✅ Spinner stays visible during payment processing
- ✅ Errors bubble up to the main error handler
- ✅ Consistent user experience with other payment methods
- ✅ Proper async flow coordination

### Step 10: Implement the onSubmit Callback

The `onSubmit` callback is where the actual payment processing happens. Here's the complete sample implementation you need:

```javascript
const checkout = await AdyenCheckout({
  ...globalConfiguration,
  onSubmit: async (state, component) => {
    const additionalData = {
      stateData: JSON.stringify(state.data),
    };
    try {
      const paymentMethod = {
        code: 'adyen_cc',
        adyen_additional_data_cc: additionalData,
      };

      await orderApi.setPaymentMethodAndPlaceOrder(ctx.cartId, paymentMethod);

      // Resolve the promise in handlePlaceOrder
      adyenCard._orderPromise.resolve();
    } catch (error) {
      component.setStatus('error');

      // Reject the promise in handlePlaceOrder
      adyenCard._orderPromise.reject(error);
    }
  },
});

// Mount the Adyen Card component
adyenCard = new Card(checkout, { showPayButton: false }).mount($adyenCardContainer);
```

#### What This Implementation Does

1. **Extract Payment Data**: `state.data` contains the encrypted card information from Adyen
2. **Prepare Backend Payload**: Format the data as `adyen_additional_data_cc` for your Commerce backend
3. **Process Payment**: Call `orderApi.setPaymentMethodAndPlaceOrder()` to set payment method and place the order
4. **Handle Success**: Resolve the Promise bridge to signal completion to `handlePlaceOrder`
5. **Handle Errors**: Set component status to 'error', reject the Promise bridge to trigger error handling
6. **Mount Component**: Create and mount the Adyen Card component with `showPayButton: false` to hide the Adyen submit button in favor of the checkout place order button

## Verification

After completing both parts, test the integration by navigating to `/checkout` and confirming that Adyen appears as an available payment method. Fill out the payment form with either fake or real card details, click "Place Order", and check the browser console. You should see either success logs when the promise resolves, or error logs like "adyen error" and "On submit error" when the promise rejects.
