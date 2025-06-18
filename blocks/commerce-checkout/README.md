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

In your checkout block:

1. Locate the payment methods container render: `CheckoutProvider.render(PaymentMethods, {...})`
2. Add `adyen_cc` as a new payment method in the `slots > Methods` path

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

#### ❌ Don't Do This (Won't Work):

```javascript
ctx.appendChild($container);
new Card(checkout).mount($container); // ← Container not in DOM yet!
```

#### ✅ Do This (Correct):

```javascript
ctx.appendChild($container);
ctx.onRender(() => {
  new Card(checkout).mount($container); // ← Container is now in DOM
});
```

## Verification

After completing both parts, test the integration by navigating to `/checkout` and confirming that Adyen appears as an available payment method.
