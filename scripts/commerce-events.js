import { getConfigValue } from './configs.js';

async function getMagentoStorefrontEvents(callback) {
  return new Promise((resolve) => {
    if (window.magentoStorefrontEvents) {
      if (callback) {
        callback(window.magentoStorefrontEvents);
      }
      resolve(window.magentoStorefrontEvents);
      return;
    }

    const eventHandler = ({ data }) => {
      if (data === 'magento-storefront-events-sdk') {
        window.removeEventListener('message', eventHandler);
        if (callback) {
          callback(window.magentoStorefrontEvents);
        }
        resolve(window.magentoStorefrontEvents);
      }
    };
    window.addEventListener('message', eventHandler);
  });
}

let eventsSDKInitialized = false;
export default async function init() {
  if (eventsSDKInitialized) {
    return;
  }
  eventsSDKInitialized = true;

  // Load events SDK and collector
  import('./commerce-events-sdk.js');
  import('./commerce-events-collector.js');

  const config = {
    environmentId: await getConfigValue('commerce-environment-id'),
    environment: await getConfigValue('commerce-environment'),
    storeUrl: await getConfigValue('commerce-store-url'),
    websiteId: await getConfigValue('commerce-website-id'),
    websiteCode: await getConfigValue('commerce-website-code'),
    storeId: await getConfigValue('commerce-store-id'),
    storeCode: await getConfigValue('commerce-store-code'),
    storeViewId: await getConfigValue('commerce-store-view-id'),
    storeViewCode: await getConfigValue('commerce-store-view-code'),
    websiteName: await getConfigValue('commerce-website-name'),
    storeName: await getConfigValue('commerce-store-name'),
    storeViewName: await getConfigValue('commerce-store-view-name'),
    baseCurrencyCode: await getConfigValue('commerce-base-currency-code'),
    storeViewCurrencyCode: await getConfigValue('commerce-base-currency-code'),
    storefrontTemplate: 'Franklin',
  };

  getMagentoStorefrontEvents((mse) => {
    mse.context.setStorefrontInstance(config);
    mse.context.setEventForwarding({
      commerce: true,
      aep: false,
    });
  });
}
