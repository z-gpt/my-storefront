/* eslint-disable import/no-extraneous-dependencies */

// TODO: Pending MiniCart Container from Drop-ins

// Drop-in Tools
import * as mesh from '@dropins/elsie/fetch-graphql.js';
import { initializers } from '@dropins/elsie/initializer.js';

// Drop-in APIs
import * as cart from '@dropins/storefront-cart/api.js';

// Drop-in Providers
// import { render as provider } from '@dropins/storefront-cart/render.js';

// Drop-in Containers
// import Cart from '@dropins/storefront-cart/containers/Cart.js';

// Libs
import { getConfigValue } from './configs.js';

// Set Commerce Endpoints
mesh.setEndpoint(await getConfigValue('commerce-core-endpoint'));

// Register Initializers
initializers.register(cart.initialize);

// export default async function renderMiniCart(element) {
//   // Render Containers
//   return provider.render(Cart, {
//     routeEmptyCartCTA: () => '/',
//   })(element);
// }
