/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

// Drop-in Tools
import { events } from '@dropins/elsie/event-bus.js';

// Drop-in Providers
import { render as provider } from '@dropins/storefront-checkout/render.js';

// Drop-in Containers
import Checkout from '@dropins/storefront-checkout/containers/Checkout.js';

export default async function decorate(block) {
  // Listen for order confirmation and redirect to order confirmation page
  events.on('checkout/order', (data) => {
    window.location.replace(`/order-confirmation?orderRef=${data.masked_order_id}`);
  });

  return provider.render(Checkout, {
    slots: {
      PaymentMethods: async (context) => {
        context.addPaymentMethodHandler('checkmo', {
          render: (ctx, element) => {
            if (element) {
              // clear the element first
              element.innerHTML = '';
            }

            // Optionally, create and render some custom content here.
            // const $content = document.createElement('div');
            // $content.innerText = 'Custom Check / Money order handler';
            // ctx.appendHTMLElement($content);
          },
        });
      },
    },
  })(block);
}
