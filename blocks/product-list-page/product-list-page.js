/* eslint-disable import/no-unresolved */
import { ProductListingPage } from '@dropins/storefront-search/containers/ProductListingPage.js';
import { render as provider } from '@dropins/storefront-search/render.js';
import { readBlockConfig } from '../../scripts/aem.js';
import { getConfigValue, getHeaders } from '../../scripts/configs.js';
import { rootLink } from '../../scripts/scripts.js';

// Initializer
import('../../scripts/initializers/search.js');

async function getStoreDetails() {
  // PLP Config
  const plpConfig = {
    pageSize: 8,
    perPageConfig: {
      pageSizeOptions: '12, 24, 36',
      defaultPageSizeOption: '12',
    },
    minQueryLength: '2',
    currencySymbol: '$',
    currencyRate: '1',
    displayOutOfStock: true,
    allowAllProducts: false,
    imageCarousel: false,
    optimizeImages: true,
    imageBaseWidth: 200,
    listview: false,
    currentCategoryUrlPath: null,
    displayMode: '',
    addToCart: async (...args) => {
      const { addProductsToCart } = await import('../../scripts/__dropins__/storefront-cart/api.js');
      await addProductsToCart([{
        sku: args[0],
        options: args[1],
        quantity: args[2],
      }]);
    },
    route: {
      route: rootLink('/search'),
      query: 'q',
    },
  };

  // Get Config Values
  const environmentId = getConfigValue('headers.cs.Magento-Environment-Id');
  const apiKey = getConfigValue('headers.cs.x-api-key');
  const apiUrl = getConfigValue('commerce-endpoint');
  const websiteCode = getConfigValue('headers.cs.Magento-Website-Code');
  const storeCode = getConfigValue('headers.cs.Magento-Store-Code');
  const storeViewCode = getConfigValue('headers.cs.Magento-Store-View-Code');
  const customerGroup = getConfigValue('headers.cs.Magento-Customer-Group');
  const configHeaders = getHeaders('cs');

  // Store Config
  const storeConfig = {
    type: 'eds',
    environmentId,
    environmentType: getConfigValue('commerce-endpoint').includes('sandbox') ? 'testing' : '',
    apiKey,
    apiUrl,
    websiteCode,
    storeCode,
    storeViewCode,
    customerGroup,
    route: ({ sku, urlKey }) => {
      const a = new URL(window.location.origin);
      a.pathname = rootLink(`/products/${urlKey}/${sku}`);
      return a.toString();
    },
    defaultHeaders: {
      'Content-Type': 'application/json',
      ...configHeaders,
    },
    config: plpConfig,
  };
  return storeConfig;
}

export default async function decorate(block) {
  const storeConfig = await getStoreDetails();
  const { urlpath, category, type } = readBlockConfig(block);
  block.textContent = '';

  // for non search pages
  if (type !== 'search') {
    storeConfig.categoryName = document.querySelector('.default-content-wrapper > h1')?.innerText;
    storeConfig.currentCategoryId = category;
    storeConfig.currentCategoryUrlPath = urlpath;

    // Enable enrichment
    block.dataset.category = category;
  }

  const widget = document.createElement('div');
  widget.id = 'plp-widget-container';
  block.appendChild(widget);

  const rootElement = document.getElementById('plp-widget-container');

  if (rootElement) {
    provider.render(ProductListingPage, { storeConfig })(
      rootElement,
    );
  } else {
    console.warn('Root element #plp-widget-container not found.');
  }
}
