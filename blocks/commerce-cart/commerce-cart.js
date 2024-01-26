/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

// Drop-in Tools
import * as mesh from '@dropins/elsie/fetch-graphql.js';
import { initializers } from '@dropins/elsie/initializer.js';

// Drop-in APIs
import * as cart from '@dropins/storefront-cart/api.js';

// Drop-in Providers
import { render as provider } from '@dropins/storefront-cart/render.js';

// Drop-in Containers
import Cart from '@dropins/storefront-cart/containers/Cart.js';

// Libs
import { getConfigValue } from '../../scripts/configs.js';

export default async function decorate(block) {
  // Set Commerce Endpoints
  mesh.setEndpoint(await getConfigValue('commerce-core-endpoint'));

  // Register Initializers
  initializers.register(cart.initialize);

  // Temporary link to Checkout
  const goToCheckoutLink = document.createElement('a');
  goToCheckoutLink.href = '/checkout';
  goToCheckoutLink.innerText = 'Checkout';
  goToCheckoutLink.style = 'background: black; color: white; display: block; margin-top: 1rem; float: right; padding: 1rem; text-decoration: none;';

  block.appendChild(goToCheckoutLink);

  // Render Containers
  return provider.render(Cart, {
    routeEmptyCartCTA: () => '/',
    routeProduct: (product) => `/products/${product.url.urlKey}/${product.sku}`,
  })(block);
}
