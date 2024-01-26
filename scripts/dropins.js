// Drop-in Tools
import { events } from '@dropins/elsie/event-bus.js';
import * as mesh from '@dropins/elsie/fetch-graphql.js';
import { initializers } from '@dropins/elsie/initializer.js';

// Drop-ins
import * as cart from '@dropins/storefront-cart/api.js';
import * as product from '@dropins/storefront-pdp/api.js';
import * as checkout from '@dropins/storefront-checkout/api.js';
import * as orderConfirmation from '@dropins/storefront-order-confirmation/api.js';

// Libs
import { getConfigValue } from './configs.js';

export default async function initializeDropins() {
  // Set Commerce Mesh endpoint
  mesh.setEndpoint(await getConfigValue('commerce-core-endpoint'));

  // Initializers
  initializers.register(product.initialize, {});
  initializers.register(cart.initialize, {});
  initializers.register(checkout.initialize, {});
  initializers.register(orderConfirmation.initialize, {});

  // Mount Drop-ins
  if (document.readyState === 'complete') {
    initializers.mount();
  } else {
    window.addEventListener('load', initializers.mount);
  }

  events.enableLogger(true);
}
