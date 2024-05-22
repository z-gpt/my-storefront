/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { events } from '@dropins/tools/event-bus.js';
import { initializers } from '@dropins/tools/initializer.js';
import * as productApi from '@dropins/storefront-pdp/api.js';
import { render as productRenderer } from '@dropins/storefront-pdp/render.js';
import ProductDetails from '@dropins/storefront-pdp/containers/ProductDetails.js';

// Libs
import { getProduct, getSkuFromUrl } from '../../scripts/commerce.js';
import { getConfigValue } from '../../scripts/configs.js';

// Error Handling (404)
async function errorGettingProduct(code = 404) {
  const htmlText = await fetch(`/${code}.html`).then((response) => {
    if (response.ok) {
      return response.text();
    }
    throw new Error(`Error getting ${code} page`);
  });
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlText, 'text/html');
  document.body.innerHTML = doc.body.innerHTML;
  document.head.innerHTML = doc.head.innerHTML;
}

async function addToCart({
  sku, quantity, optionsUIDs, product,
}) {
  const { cartApi } = await import('../../../scripts/minicart/api.js');

  return cartApi.addToCart(sku, optionsUIDs, quantity, product);
}

export default async function decorate(block) {
  // Initialize Drop-ins
  initializers.register(productApi.initialize, {});

  // Set Fetch Endpoint (Service)
  productApi.setEndpoint(await getConfigValue('commerce-endpoint'));

  // Set Fetch Headers (Service)
  productApi.setFetchGraphQlHeaders({
    'Content-Type': 'application/json',
    'Magento-Environment-Id': await getConfigValue('commerce-environment-id'),
    'Magento-Website-Code': await getConfigValue('commerce-website-code'),
    'Magento-Store-View-Code': await getConfigValue('commerce-store-view-code'),
    'Magento-Store-Code': await getConfigValue('commerce-store-code'),
    'Magento-Customer-Group': await getConfigValue('commerce-customer-group'),
    'x-api-key': await getConfigValue('commerce-x-api-key'),
  });

  if (!window.getProductPromise) {
    window.getProductPromise = getProduct(this.props.sku);
  }
  const product = await window.getProductPromise;

  if (!product) {
    await errorGettingProduct();
    return Promise.reject();
  }

  events.on('eds/lcp', () => {
    if (!product) {
      return;
    }
    // Set Data Collection Context
    window.adobeDataLayer.push((dl) => {
      dl.push({
        productContext: {
          productId: parseInt(product.externalId, 10) || 0,
          ...product,
        },
      });
      // TODO: Remove eventInfo once collector is updated
      dl.push({ event: 'product-page-view', eventInfo: { ...dl.getState() } });
    });
  }, { eager: true });

  // Render Containers
  return new Promise((resolve) => {
    setTimeout(async () => {
      try {
        await productRenderer.render(ProductDetails, {
          initialData: product,
          sku: getSkuFromUrl(),
          carousel: {
            controls: 'dots', // 'thumbnailsColumn', 'thumbnailsRow', 'dots'
            mobile: true,
          },
          slots: {
            Actions: (ctx) => {
              // Add to Cart Button
              ctx.appendButton((next, state) => {
                const adding = state.get('adding');
                return {
                  text: adding ? 'Adding to Cart' : 'Add to Cart',
                  icon: 'Cart',
                  variant: 'primary',
                  disabled: adding || !next.data?.inStock || !next.valid,
                  onClick: async () => {
                    try {
                      state.set('adding', true);
                      await addToCart({
                        sku: next.values?.sku,
                        quantity: next.values?.quantity,
                        optionsUIDs: next.values?.optionsUIDs,
                        product: next.data,
                      });
                    } catch (error) {
                      console.error('Could not add to cart: ', error);
                    } finally {
                      state.set('adding', false);
                    }
                  },
                };
              });
            },
          },
        })(block);
      } catch (e) {
        console.error(e);
        await errorGettingProduct();
      } finally {
        resolve();
      }
    }, 0);
  });
  // TODO: ACDL
}
