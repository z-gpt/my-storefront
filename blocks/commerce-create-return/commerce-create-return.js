/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { render as orderRenderer } from "@dropins/storefront-order/render.js";
import { CreateReturn } from "@dropins/storefront-order/containers/CreateReturn.js";

// Initialize
import "../../scripts/initializers/order.js";

export default async function decorate(block) {
  await orderRenderer.render(CreateReturn, {
    orderData: {
      grandTotal: {
        value: 844.23,
        currency: "USD",
      },
      totalGiftcard: {
        currency: "USD",
        value: 0,
      },
      subtotal: {
        currency: "USD",
        value: 872,
      },
      taxes: [
        {
          amount: {
            currency: "USD",
            value: 56.63,
          },
          rate: 8.25,
          title: "US-CA-*-Rate 1",
        },
      ],
      totalTax: {
        currency: "USD",
        value: 56.63,
      },
      totalShipping: {
        currency: "USD",
        value: 90,
      },
      discounts: [
        {
          amount: {
            currency: "USD",
            value: 174.4,
          },
          label: "Discount",
        },
      ],
      email: "main_email_test_777@mail.com",
      availableActions: ["RETURN", "REORDER"],
      status: "Complete",
      number: "000001937",
      id: "MTk0Ng==",
      orderDate: "2024-10-29 20:41:18",
      orderStatusChangeDate: "2024-11-06",
      carrier: "Flat Rate",
      shippingMethod: "Flat Rate - Fixed",
      isVirtual: false,
      returns: [
        {
          createdReturnAt: "2024-11-07 13:27:27",
          returnStatus: "PENDING",
          token:
            "0:3:UHQFeBIGPo/KDP9BVyyh8gMNNtSuKVSdxPWd51jZ3Ul4tnXhQPBLZu2FiI2IHCD2IxZLa+bBd4yYZ9azvAMvS0PzfulsXMB8",
          orderNumber: "000001937",
          returnNumber: "000000149",
          items: [
            {
              uid: "MTc5",
              quantity: 0,
              status: "PENDING",
              requestQuantity: 1,
              type: "OrderItem",
              eligibleForReturn: true,
              productSku: "MH05-XS-Red",
              productName: "Hollister Backyard Sweatshirt",
              productUrlKey: "hollister-backyard-sweatshirt",
              quantityCanceled: 0,
              quantityInvoiced: 1,
              quantityOrdered: 1,
              quantityRefunded: 0,
              quantityReturned: 0,
              quantityShipped: 1,
              id: "NDEzOQ==",
              discounted: false,
              total: {
                value: 52,
                currency: "USD",
              },
              totalInclTax: {
                value: 52,
                currency: "USD",
              },
              price: {
                value: 52,
                currency: "USD",
              },
              priceInclTax: {
                value: 52,
                currency: "USD",
              },
              totalQuantity: 1,
              regularPrice: {
                value: 52,
                currency: "USD",
              },
              product: {
                __typename: "ConfigurableProduct",
                canonicalUrl: "",
                urlKey: "hollister-backyard-sweatshirt",
                uid: "Mzk0",
                name: "Hollister Backyard Sweatshirt",
                sku: "MH05",
                onlyXLeftInStock: null,
                stockStatus: "IN_STOCK",
                thumbnail: {
                  label: "Hollister Backyard Sweatshirt",
                  url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                },
                priceRange: {
                  maximumPrice: {
                    regularPrice: {
                      currency: "USD",
                      value: 52,
                    },
                  },
                },
                id: "Mzk0",
                image: "",
                productType: "ConfigurableProduct",
              },
              thumbnail: {
                label: "Hollister Backyard Sweatshirt",
                url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
              },
              configurableOptions: {
                Color: "Red",
                Size: "XS",
              },
              bundleOptions: null,
              itemPrices: {
                priceIncludingTax: {
                  value: 56.29,
                  currency: "USD",
                },
                originalPrice: {
                  value: 52,
                  currency: "USD",
                },
                originalPriceIncludingTax: {
                  value: 56.29,
                  currency: "USD",
                },
                price: {
                  value: 52,
                  currency: "USD",
                },
              },
              downloadableLinks: null,
            },
          ],
          tracking: [],
        },
        {
          createdReturnAt: "2024-11-07 11:16:12",
          returnStatus: "AUTHORIZED",
          token:
            "0:3:4S3XPZQbf+LtLSEFc37mkLSgNf9ZhYkrxt/gziII3g3vXABrlrl6sUCBnLMEVkYUCi9kvhNAhcoN6BjSJ2avLkBEYIoVIFSw",
          orderNumber: "000001937",
          returnNumber: "000000146",
          items: [
            {
              uid: "MTc2",
              quantity: 1,
              status: "AUTHORIZED",
              requestQuantity: 2,
              type: "OrderItem",
              eligibleForReturn: true,
              productSku: "MH05-XS-Green",
              productName: "Hollister Backyard Sweatshirt",
              productUrlKey: "hollister-backyard-sweatshirt",
              quantityCanceled: 0,
              quantityInvoiced: 4,
              quantityOrdered: 4,
              quantityRefunded: 0,
              quantityReturned: 0,
              quantityShipped: 4,
              id: "NDE2MA==",
              discounted: false,
              total: {
                value: 208,
                currency: "USD",
              },
              totalInclTax: {
                value: 208,
                currency: "USD",
              },
              price: {
                value: 52,
                currency: "USD",
              },
              priceInclTax: {
                value: 52,
                currency: "USD",
              },
              totalQuantity: 4,
              regularPrice: {
                value: 52,
                currency: "USD",
              },
              product: {
                __typename: "ConfigurableProduct",
                canonicalUrl: "",
                urlKey: "hollister-backyard-sweatshirt",
                uid: "Mzk0",
                name: "Hollister Backyard Sweatshirt",
                sku: "MH05",
                onlyXLeftInStock: null,
                stockStatus: "IN_STOCK",
                thumbnail: {
                  label: "Hollister Backyard Sweatshirt",
                  url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                },
                priceRange: {
                  maximumPrice: {
                    regularPrice: {
                      currency: "USD",
                      value: 52,
                    },
                  },
                },
                id: "Mzk0",
                image: "",
                productType: "ConfigurableProduct",
              },
              thumbnail: {
                label: "Hollister Backyard Sweatshirt",
                url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
              },
              configurableOptions: {
                Size: "XS",
                Color: "Green",
              },
              bundleOptions: null,
              itemPrices: {
                priceIncludingTax: {
                  value: 56.29,
                  currency: "USD",
                },
                originalPrice: {
                  value: 52,
                  currency: "USD",
                },
                originalPriceIncludingTax: {
                  value: 56.29,
                  currency: "USD",
                },
                price: {
                  value: 52,
                  currency: "USD",
                },
              },
              downloadableLinks: null,
            },
          ],
          tracking: [],
        },
        {
          createdReturnAt: "2024-11-07 11:09:12",
          returnStatus: "PENDING",
          token:
            "0:3:FAG/psoki25Dx9qDGD6IjkkhQKfFoUBejfuBAK/MksnQ38ePAziphMQjQnlNNRTZxXK+/oYg9Xw/rt8U6pX2zbk9hG4mVjr0",
          orderNumber: "000001937",
          returnNumber: "000000143",
          items: [
            {
              uid: "MTcz",
              quantity: 0,
              status: "PENDING",
              requestQuantity: 2,
              type: "OrderItem",
              eligibleForReturn: true,
              productSku: "24-MB03",
              productName: "Crown Summit Backpack",
              productUrlKey: "crown-summit-backpack",
              quantityCanceled: 0,
              quantityInvoiced: 7,
              quantityOrdered: 7,
              quantityRefunded: 0,
              quantityReturned: 0,
              quantityShipped: 7,
              id: "NDEzNg==",
              discounted: false,
              total: {
                value: 266,
                currency: "USD",
              },
              totalInclTax: {
                value: 266,
                currency: "USD",
              },
              price: {
                value: 38,
                currency: "USD",
              },
              priceInclTax: {
                value: 38,
                currency: "USD",
              },
              totalQuantity: 7,
              regularPrice: {
                value: 38,
                currency: "USD",
              },
              product: {
                __typename: "SimpleProduct",
                canonicalUrl: "",
                urlKey: "crown-summit-backpack",
                uid: "Nw==",
                name: "Crown Summit Backpack",
                sku: "24-MB03",
                onlyXLeftInStock: null,
                stockStatus: "IN_STOCK",
                thumbnail: {
                  label: "Image",
                  url: "https://mcstaging.aemshop.net/media/catalog/product/m/b/mb03-black-0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                },
                priceRange: {
                  maximumPrice: {
                    regularPrice: {
                      currency: "USD",
                      value: 38,
                    },
                  },
                },
                id: "Nw==",
                image: "",
                productType: "SimpleProduct",
              },
              thumbnail: {
                label: "Image",
                url: "https://mcstaging.aemshop.net/media/catalog/product/m/b/mb03-black-0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
              },
              configurableOptions: {},
              bundleOptions: null,
              itemPrices: {
                priceIncludingTax: {
                  value: 41.14,
                  currency: "USD",
                },
                originalPrice: {
                  value: 38,
                  currency: "USD",
                },
                originalPriceIncludingTax: {
                  value: 41.135,
                  currency: "USD",
                },
                price: {
                  value: 38,
                  currency: "USD",
                },
              },
              downloadableLinks: null,
            },
          ],
          tracking: [],
        },
        {
          createdReturnAt: "2024-11-07 11:08:09",
          returnStatus: "PENDING",
          token:
            "0:3:6VTqzMGrGmlN8qjPS3w4+JJxIbUrl+rpPRy7z2P+GE9lIW93ezgrh4wl4sF4L6DHjIRqLWGhxB7pY2IgyolZb10Wv75lLWmD",
          orderNumber: "000001937",
          returnNumber: "000000140",
          items: [
            {
              uid: "MTcw",
              quantity: 0,
              status: "PENDING",
              requestQuantity: 5,
              type: "OrderItem",
              eligibleForReturn: true,
              productSku: "24-MB03",
              productName: "Crown Summit Backpack",
              productUrlKey: "crown-summit-backpack",
              quantityCanceled: 0,
              quantityInvoiced: 7,
              quantityOrdered: 7,
              quantityRefunded: 0,
              quantityReturned: 0,
              quantityShipped: 7,
              id: "NDEzNg==",
              discounted: false,
              total: {
                value: 266,
                currency: "USD",
              },
              totalInclTax: {
                value: 266,
                currency: "USD",
              },
              price: {
                value: 38,
                currency: "USD",
              },
              priceInclTax: {
                value: 38,
                currency: "USD",
              },
              totalQuantity: 7,
              regularPrice: {
                value: 38,
                currency: "USD",
              },
              product: {
                __typename: "SimpleProduct",
                canonicalUrl: "",
                urlKey: "crown-summit-backpack",
                uid: "Nw==",
                name: "Crown Summit Backpack",
                sku: "24-MB03",
                onlyXLeftInStock: null,
                stockStatus: "IN_STOCK",
                thumbnail: {
                  label: "Image",
                  url: "https://mcstaging.aemshop.net/media/catalog/product/m/b/mb03-black-0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                },
                priceRange: {
                  maximumPrice: {
                    regularPrice: {
                      currency: "USD",
                      value: 38,
                    },
                  },
                },
                id: "Nw==",
                image: "",
                productType: "SimpleProduct",
              },
              thumbnail: {
                label: "Image",
                url: "https://mcstaging.aemshop.net/media/catalog/product/m/b/mb03-black-0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
              },
              configurableOptions: {},
              bundleOptions: null,
              itemPrices: {
                priceIncludingTax: {
                  value: 41.14,
                  currency: "USD",
                },
                originalPrice: {
                  value: 38,
                  currency: "USD",
                },
                originalPriceIncludingTax: {
                  value: 41.135,
                  currency: "USD",
                },
                price: {
                  value: 38,
                  currency: "USD",
                },
              },
              downloadableLinks: null,
            },
          ],
          tracking: [],
        },
        {
          createdReturnAt: "2024-11-07 01:09:11",
          returnStatus: "CLOSED",
          token:
            "0:3:CWfZLeuXHSmU0T24WZXZLSs8UgFA8w6M88f/Ma8OBEYDWcWnnRsPvUBC8y+F7cJyloea7oP6qHKPDw56S2yEfwuW194J14Cg",
          orderNumber: "000001937",
          returnNumber: "000000137",
          items: [
            {
              uid: "MTY3",
              quantity: 0,
              status: "PENDING",
              requestQuantity: 3,
              type: "OrderItem",
              eligibleForReturn: true,
              productSku: "MH05-XS-Green",
              productName: "Hollister Backyard Sweatshirt",
              productUrlKey: "hollister-backyard-sweatshirt",
              quantityCanceled: 0,
              quantityInvoiced: 4,
              quantityOrdered: 4,
              quantityRefunded: 0,
              quantityReturned: 0,
              quantityShipped: 4,
              id: "NDE2MA==",
              discounted: false,
              total: {
                value: 208,
                currency: "USD",
              },
              totalInclTax: {
                value: 208,
                currency: "USD",
              },
              price: {
                value: 52,
                currency: "USD",
              },
              priceInclTax: {
                value: 52,
                currency: "USD",
              },
              totalQuantity: 4,
              regularPrice: {
                value: 52,
                currency: "USD",
              },
              product: {
                __typename: "ConfigurableProduct",
                canonicalUrl: "",
                urlKey: "hollister-backyard-sweatshirt",
                uid: "Mzk0",
                name: "Hollister Backyard Sweatshirt",
                sku: "MH05",
                onlyXLeftInStock: null,
                stockStatus: "IN_STOCK",
                thumbnail: {
                  label: "Hollister Backyard Sweatshirt",
                  url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                },
                priceRange: {
                  maximumPrice: {
                    regularPrice: {
                      currency: "USD",
                      value: 52,
                    },
                  },
                },
                id: "Mzk0",
                image: "",
                productType: "ConfigurableProduct",
              },
              thumbnail: {
                label: "Hollister Backyard Sweatshirt",
                url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
              },
              configurableOptions: {
                Size: "XS",
                Color: "Green",
              },
              bundleOptions: null,
              itemPrices: {
                priceIncludingTax: {
                  value: 56.29,
                  currency: "USD",
                },
                originalPrice: {
                  value: 52,
                  currency: "USD",
                },
                originalPriceIncludingTax: {
                  value: 56.29,
                  currency: "USD",
                },
                price: {
                  value: 52,
                  currency: "USD",
                },
              },
              downloadableLinks: null,
            },
          ],
          tracking: [],
        },
        {
          createdReturnAt: "2024-11-07 00:03:26",
          returnStatus: "CLOSED",
          token:
            "0:3:UYipC3qYA63BvcWv+ThLB8aSdhr5nbLn6p/OdYpwZIn37RHPpzs4i7pgWOOBtMjW4S01+NS5xespIEG6WEYUTUZs2Xk7xLE8",
          orderNumber: "000001937",
          returnNumber: "000000134",
          items: [
            {
              uid: "MTY0",
              quantity: 0,
              status: "PENDING",
              requestQuantity: 1,
              type: "OrderItem",
              eligibleForReturn: true,
              productSku: "MH05-XS-Green",
              productName: "Hollister Backyard Sweatshirt",
              productUrlKey: "hollister-backyard-sweatshirt",
              quantityCanceled: 0,
              quantityInvoiced: 4,
              quantityOrdered: 4,
              quantityRefunded: 0,
              quantityReturned: 0,
              quantityShipped: 4,
              id: "NDE2MA==",
              discounted: false,
              total: {
                value: 208,
                currency: "USD",
              },
              totalInclTax: {
                value: 208,
                currency: "USD",
              },
              price: {
                value: 52,
                currency: "USD",
              },
              priceInclTax: {
                value: 52,
                currency: "USD",
              },
              totalQuantity: 4,
              regularPrice: {
                value: 52,
                currency: "USD",
              },
              product: {
                __typename: "ConfigurableProduct",
                canonicalUrl: "",
                urlKey: "hollister-backyard-sweatshirt",
                uid: "Mzk0",
                name: "Hollister Backyard Sweatshirt",
                sku: "MH05",
                onlyXLeftInStock: null,
                stockStatus: "IN_STOCK",
                thumbnail: {
                  label: "Hollister Backyard Sweatshirt",
                  url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                },
                priceRange: {
                  maximumPrice: {
                    regularPrice: {
                      currency: "USD",
                      value: 52,
                    },
                  },
                },
                id: "Mzk0",
                image: "",
                productType: "ConfigurableProduct",
              },
              thumbnail: {
                label: "Hollister Backyard Sweatshirt",
                url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
              },
              configurableOptions: {
                Size: "XS",
                Color: "Green",
              },
              bundleOptions: null,
              itemPrices: {
                priceIncludingTax: {
                  value: 56.29,
                  currency: "USD",
                },
                originalPrice: {
                  value: 52,
                  currency: "USD",
                },
                originalPriceIncludingTax: {
                  value: 56.29,
                  currency: "USD",
                },
                price: {
                  value: 52,
                  currency: "USD",
                },
              },
              downloadableLinks: null,
            },
          ],
          tracking: [],
        },
        {
          createdReturnAt: "2024-11-06 23:50:15",
          returnStatus: "CLOSED",
          token:
            "0:3:w67grW/P2tX8v3iUG5J21AJ5CyzuHzOPUEZwnwJ9cmBevZCz+6OyZqUDQmEb/SHNeb9auhW8OTlCJOYzC3CUzqAYKcyIllsL",
          orderNumber: "000001937",
          returnNumber: "000000131",
          items: [
            {
              uid: "MTYx",
              quantity: 0,
              status: "PENDING",
              requestQuantity: 1,
              type: "BundleOrderItem",
              eligibleForReturn: true,
              productSku: "24-WG080-24-WG081-blue-24-WG084-24-WG085-24-WG088",
              productName: "Sprite Yoga Companion Kit",
              productUrlKey: "sprite-yoga-companion-kit",
              quantityCanceled: 0,
              quantityInvoiced: 1,
              quantityOrdered: 1,
              quantityRefunded: 0,
              quantityReturned: 0,
              quantityShipped: 1,
              id: "NDE0NQ==",
              discounted: true,
              total: {
                value: 61,
                currency: "USD",
              },
              totalInclTax: {
                value: 61,
                currency: "USD",
              },
              price: {
                value: 61,
                currency: "USD",
              },
              priceInclTax: {
                value: 61,
                currency: "USD",
              },
              totalQuantity: 1,
              regularPrice: {
                value: 77,
                currency: "USD",
              },
              product: {
                __typename: "BundleProduct",
                canonicalUrl: "",
                urlKey: "sprite-yoga-companion-kit",
                uid: "MTU0",
                name: "Sprite Yoga Companion Kit",
                sku: "24-WG080",
                onlyXLeftInStock: null,
                stockStatus: "IN_STOCK",
                thumbnail: {
                  label: "Sprite Yoga Companion Kit",
                  url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-kit-2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                },
                priceRange: {
                  maximumPrice: {
                    regularPrice: {
                      currency: "USD",
                      value: 77,
                    },
                  },
                },
                id: "MTU0",
                image: "",
                productType: "BundleProduct",
              },
              thumbnail: {
                label: "Sprite Yoga Companion Kit",
                url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-kit-2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
              },
              configurableOptions: {},
              bundleOptions: null,
              itemPrices: {
                priceIncludingTax: {
                  value: 64.87,
                  currency: "USD",
                },
                originalPrice: {
                  value: 61,
                  currency: "USD",
                },
                originalPriceIncludingTax: {
                  value: 61,
                  currency: "USD",
                },
                price: {
                  value: 61,
                  currency: "USD",
                },
              },
              downloadableLinks: null,
            },
          ],
          tracking: [],
        },
        {
          createdReturnAt: "2024-11-06 23:39:21",
          returnStatus: "CLOSED",
          token:
            "0:3:mKzEtv3sjpYk4mBditNgPqm55WgTe61zQzhi2EXnKz+47wiGMyXRpgHv5SHD60lS87ucc33V0y3hTnQmSOdWxcrPmrkMeA8K",
          orderNumber: "000001937",
          returnNumber: "000000128",
          items: [
            {
              uid: "MTU4",
              quantity: 0,
              status: "PENDING",
              requestQuantity: 1,
              type: "OrderItem",
              eligibleForReturn: true,
              productSku: "MH05-XS-Red",
              productName: "Hollister Backyard Sweatshirt",
              productUrlKey: "hollister-backyard-sweatshirt",
              quantityCanceled: 0,
              quantityInvoiced: 1,
              quantityOrdered: 1,
              quantityRefunded: 0,
              quantityReturned: 0,
              quantityShipped: 1,
              id: "NDEzOQ==",
              discounted: false,
              total: {
                value: 52,
                currency: "USD",
              },
              totalInclTax: {
                value: 52,
                currency: "USD",
              },
              price: {
                value: 52,
                currency: "USD",
              },
              priceInclTax: {
                value: 52,
                currency: "USD",
              },
              totalQuantity: 1,
              regularPrice: {
                value: 52,
                currency: "USD",
              },
              product: {
                __typename: "ConfigurableProduct",
                canonicalUrl: "",
                urlKey: "hollister-backyard-sweatshirt",
                uid: "Mzk0",
                name: "Hollister Backyard Sweatshirt",
                sku: "MH05",
                onlyXLeftInStock: null,
                stockStatus: "IN_STOCK",
                thumbnail: {
                  label: "Hollister Backyard Sweatshirt",
                  url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                },
                priceRange: {
                  maximumPrice: {
                    regularPrice: {
                      currency: "USD",
                      value: 52,
                    },
                  },
                },
                id: "Mzk0",
                image: "",
                productType: "ConfigurableProduct",
              },
              thumbnail: {
                label: "Hollister Backyard Sweatshirt",
                url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
              },
              configurableOptions: {
                Color: "Red",
                Size: "XS",
              },
              bundleOptions: null,
              itemPrices: {
                priceIncludingTax: {
                  value: 56.29,
                  currency: "USD",
                },
                originalPrice: {
                  value: 52,
                  currency: "USD",
                },
                originalPriceIncludingTax: {
                  value: 56.29,
                  currency: "USD",
                },
                price: {
                  value: 52,
                  currency: "USD",
                },
              },
              downloadableLinks: null,
            },
          ],
          tracking: [],
        },
        {
          createdReturnAt: "2024-11-06 23:13:51",
          returnStatus: "CLOSED",
          token:
            "0:3:rr8CkPMjB2+PD9mt+U/xEtvfbAY5HQTkHTR+hFbOMibbogvHg/N1Rl3X+2gcbROqRarmjzhlhevrTbYqFgkzl85HK9dkSk+x",
          orderNumber: "000001937",
          returnNumber: "000000125",
          items: [
            {
              uid: "MTU1",
              quantity: 0,
              status: "PENDING",
              requestQuantity: 5,
              type: "OrderItem",
              eligibleForReturn: true,
              productSku: "24-MB03",
              productName: "Crown Summit Backpack",
              productUrlKey: "crown-summit-backpack",
              quantityCanceled: 0,
              quantityInvoiced: 7,
              quantityOrdered: 7,
              quantityRefunded: 0,
              quantityReturned: 0,
              quantityShipped: 7,
              id: "NDEzNg==",
              discounted: false,
              total: {
                value: 266,
                currency: "USD",
              },
              totalInclTax: {
                value: 266,
                currency: "USD",
              },
              price: {
                value: 38,
                currency: "USD",
              },
              priceInclTax: {
                value: 38,
                currency: "USD",
              },
              totalQuantity: 7,
              regularPrice: {
                value: 38,
                currency: "USD",
              },
              product: {
                __typename: "SimpleProduct",
                canonicalUrl: "",
                urlKey: "crown-summit-backpack",
                uid: "Nw==",
                name: "Crown Summit Backpack",
                sku: "24-MB03",
                onlyXLeftInStock: null,
                stockStatus: "IN_STOCK",
                thumbnail: {
                  label: "Image",
                  url: "https://mcstaging.aemshop.net/media/catalog/product/m/b/mb03-black-0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                },
                priceRange: {
                  maximumPrice: {
                    regularPrice: {
                      currency: "USD",
                      value: 38,
                    },
                  },
                },
                id: "Nw==",
                image: "",
                productType: "SimpleProduct",
              },
              thumbnail: {
                label: "Image",
                url: "https://mcstaging.aemshop.net/media/catalog/product/m/b/mb03-black-0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
              },
              configurableOptions: {},
              bundleOptions: null,
              itemPrices: {
                priceIncludingTax: {
                  value: 41.14,
                  currency: "USD",
                },
                originalPrice: {
                  value: 38,
                  currency: "USD",
                },
                originalPriceIncludingTax: {
                  value: 41.135,
                  currency: "USD",
                },
                price: {
                  value: 38,
                  currency: "USD",
                },
              },
              downloadableLinks: null,
            },
          ],
          tracking: [],
        },
        {
          createdReturnAt: "2024-11-06 23:13:20",
          returnStatus: "CLOSED",
          token:
            "0:3:aN4CPEN/+KJxTKHMPTKjLR/ro9fAxqfzAQDL8BlcwQCKZ//3v9BKzVgg3mR3gPHgx4fXtJjwvSRa07o75uq9A51/fGRW/MzT",
          orderNumber: "000001937",
          returnNumber: "000000122",
          items: [
            {
              uid: "MTUy",
              quantity: 0,
              status: "PENDING",
              requestQuantity: 2,
              type: "OrderItem",
              eligibleForReturn: true,
              productSku: "24-MB03",
              productName: "Crown Summit Backpack",
              productUrlKey: "crown-summit-backpack",
              quantityCanceled: 0,
              quantityInvoiced: 7,
              quantityOrdered: 7,
              quantityRefunded: 0,
              quantityReturned: 0,
              quantityShipped: 7,
              id: "NDEzNg==",
              discounted: false,
              total: {
                value: 266,
                currency: "USD",
              },
              totalInclTax: {
                value: 266,
                currency: "USD",
              },
              price: {
                value: 38,
                currency: "USD",
              },
              priceInclTax: {
                value: 38,
                currency: "USD",
              },
              totalQuantity: 7,
              regularPrice: {
                value: 38,
                currency: "USD",
              },
              product: {
                __typename: "SimpleProduct",
                canonicalUrl: "",
                urlKey: "crown-summit-backpack",
                uid: "Nw==",
                name: "Crown Summit Backpack",
                sku: "24-MB03",
                onlyXLeftInStock: null,
                stockStatus: "IN_STOCK",
                thumbnail: {
                  label: "Image",
                  url: "https://mcstaging.aemshop.net/media/catalog/product/m/b/mb03-black-0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                },
                priceRange: {
                  maximumPrice: {
                    regularPrice: {
                      currency: "USD",
                      value: 38,
                    },
                  },
                },
                id: "Nw==",
                image: "",
                productType: "SimpleProduct",
              },
              thumbnail: {
                label: "Image",
                url: "https://mcstaging.aemshop.net/media/catalog/product/m/b/mb03-black-0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
              },
              configurableOptions: {},
              bundleOptions: null,
              itemPrices: {
                priceIncludingTax: {
                  value: 41.14,
                  currency: "USD",
                },
                originalPrice: {
                  value: 38,
                  currency: "USD",
                },
                originalPriceIncludingTax: {
                  value: 41.135,
                  currency: "USD",
                },
                price: {
                  value: 38,
                  currency: "USD",
                },
              },
              downloadableLinks: null,
            },
            {
              uid: "MTQ5",
              quantity: 0,
              status: "PENDING",
              requestQuantity: 1,
              type: "BundleOrderItem",
              eligibleForReturn: true,
              productSku: "24-WG080-24-WG083-blue-24-WG084-24-WG087-24-WG088",
              productName: "Sprite Yoga Companion Kit",
              productUrlKey: "sprite-yoga-companion-kit",
              quantityCanceled: 0,
              quantityInvoiced: 1,
              quantityOrdered: 1,
              quantityRefunded: 0,
              quantityReturned: 0,
              quantityShipped: 1,
              id: "NDE3Mg==",
              discounted: false,
              total: {
                value: 77,
                currency: "USD",
              },
              totalInclTax: {
                value: 77,
                currency: "USD",
              },
              price: {
                value: 77,
                currency: "USD",
              },
              priceInclTax: {
                value: 77,
                currency: "USD",
              },
              totalQuantity: 1,
              regularPrice: {
                value: 77,
                currency: "USD",
              },
              product: {
                __typename: "BundleProduct",
                canonicalUrl: "",
                urlKey: "sprite-yoga-companion-kit",
                uid: "MTU0",
                name: "Sprite Yoga Companion Kit",
                sku: "24-WG080",
                onlyXLeftInStock: null,
                stockStatus: "IN_STOCK",
                thumbnail: {
                  label: "Sprite Yoga Companion Kit",
                  url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-kit-2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                },
                priceRange: {
                  maximumPrice: {
                    regularPrice: {
                      currency: "USD",
                      value: 77,
                    },
                  },
                },
                id: "MTU0",
                image: "",
                productType: "BundleProduct",
              },
              thumbnail: {
                label: "Sprite Yoga Companion Kit",
                url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-kit-2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
              },
              configurableOptions: {},
              bundleOptions: null,
              itemPrices: {
                priceIncludingTax: {
                  value: 83.36,
                  currency: "USD",
                },
                originalPrice: {
                  value: 77,
                  currency: "USD",
                },
                originalPriceIncludingTax: {
                  value: 77,
                  currency: "USD",
                },
                price: {
                  value: 77,
                  currency: "USD",
                },
              },
              downloadableLinks: null,
            },
          ],
          tracking: [],
        },
        {
          createdReturnAt: "2024-11-06 23:08:18",
          returnStatus: "CLOSED",
          token:
            "0:3:wJMtltn6hYo6Uuxp9MuYs3pBvcxNlFActAY0+dsstH7pR3bsLZ3vEaj5b70Akem8hfN5J9Pw+pXzeMBiYO9UlaCtN8io5Eua",
          orderNumber: "000001937",
          returnNumber: "000000119",
          items: [
            {
              uid: "MTQ2",
              quantity: 0,
              status: "PENDING",
              requestQuantity: 1,
              type: "BundleOrderItem",
              eligibleForReturn: true,
              productSku: "24-WG080-24-WG083-blue-24-WG084-24-WG087-24-WG088",
              productName: "Sprite Yoga Companion Kit",
              productUrlKey: "sprite-yoga-companion-kit",
              quantityCanceled: 0,
              quantityInvoiced: 1,
              quantityOrdered: 1,
              quantityRefunded: 0,
              quantityReturned: 0,
              quantityShipped: 1,
              id: "NDE3Mg==",
              discounted: false,
              total: {
                value: 77,
                currency: "USD",
              },
              totalInclTax: {
                value: 77,
                currency: "USD",
              },
              price: {
                value: 77,
                currency: "USD",
              },
              priceInclTax: {
                value: 77,
                currency: "USD",
              },
              totalQuantity: 1,
              regularPrice: {
                value: 77,
                currency: "USD",
              },
              product: {
                __typename: "BundleProduct",
                canonicalUrl: "",
                urlKey: "sprite-yoga-companion-kit",
                uid: "MTU0",
                name: "Sprite Yoga Companion Kit",
                sku: "24-WG080",
                onlyXLeftInStock: null,
                stockStatus: "IN_STOCK",
                thumbnail: {
                  label: "Sprite Yoga Companion Kit",
                  url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-kit-2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                },
                priceRange: {
                  maximumPrice: {
                    regularPrice: {
                      currency: "USD",
                      value: 77,
                    },
                  },
                },
                id: "MTU0",
                image: "",
                productType: "BundleProduct",
              },
              thumbnail: {
                label: "Sprite Yoga Companion Kit",
                url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-kit-2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
              },
              configurableOptions: {},
              bundleOptions: null,
              itemPrices: {
                priceIncludingTax: {
                  value: 83.36,
                  currency: "USD",
                },
                originalPrice: {
                  value: 77,
                  currency: "USD",
                },
                originalPriceIncludingTax: {
                  value: 77,
                  currency: "USD",
                },
                price: {
                  value: 77,
                  currency: "USD",
                },
              },
              downloadableLinks: null,
            },
          ],
          tracking: [],
        },
        {
          createdReturnAt: "2024-11-06 23:07:00",
          returnStatus: "CLOSED",
          token:
            "0:3:ZOakzaHodi6tAwHKHiqC33IYbmlT/qVm/BYg8gOS+trlVUuXSXMWBHhYU0ZnU863Hs+aHzQn+aWqGlX0ORXbP0jGeBXKt1F2",
          orderNumber: "000001937",
          returnNumber: "000000116",
          items: [
            {
              uid: "MTQz",
              quantity: 0,
              status: "PENDING",
              requestQuantity: 1,
              type: "OrderItem",
              eligibleForReturn: true,
              productSku: "MH05-XS-Red",
              productName: "Hollister Backyard Sweatshirt",
              productUrlKey: "hollister-backyard-sweatshirt",
              quantityCanceled: 0,
              quantityInvoiced: 1,
              quantityOrdered: 1,
              quantityRefunded: 0,
              quantityReturned: 0,
              quantityShipped: 1,
              id: "NDEzOQ==",
              discounted: false,
              total: {
                value: 52,
                currency: "USD",
              },
              totalInclTax: {
                value: 52,
                currency: "USD",
              },
              price: {
                value: 52,
                currency: "USD",
              },
              priceInclTax: {
                value: 52,
                currency: "USD",
              },
              totalQuantity: 1,
              regularPrice: {
                value: 52,
                currency: "USD",
              },
              product: {
                __typename: "ConfigurableProduct",
                canonicalUrl: "",
                urlKey: "hollister-backyard-sweatshirt",
                uid: "Mzk0",
                name: "Hollister Backyard Sweatshirt",
                sku: "MH05",
                onlyXLeftInStock: null,
                stockStatus: "IN_STOCK",
                thumbnail: {
                  label: "Hollister Backyard Sweatshirt",
                  url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                },
                priceRange: {
                  maximumPrice: {
                    regularPrice: {
                      currency: "USD",
                      value: 52,
                    },
                  },
                },
                id: "Mzk0",
                image: "",
                productType: "ConfigurableProduct",
              },
              thumbnail: {
                label: "Hollister Backyard Sweatshirt",
                url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
              },
              configurableOptions: {
                Color: "Red",
                Size: "XS",
              },
              bundleOptions: null,
              itemPrices: {
                priceIncludingTax: {
                  value: 56.29,
                  currency: "USD",
                },
                originalPrice: {
                  value: 52,
                  currency: "USD",
                },
                originalPriceIncludingTax: {
                  value: 56.29,
                  currency: "USD",
                },
                price: {
                  value: 52,
                  currency: "USD",
                },
              },
              downloadableLinks: null,
            },
          ],
          tracking: [],
        },
        {
          createdReturnAt: "2024-11-06 23:00:31",
          returnStatus: "CLOSED",
          token:
            "0:3:8qFPtTT30NoUu8884QuRdznBkdVcFH053i094MCmaDj6R/GsvEmynNeOHuvHFK6lIurIVHU8hbB6ZNR41LWqDnQZhsR5ic00",
          orderNumber: "000001937",
          returnNumber: "000000113",
          items: [
            {
              uid: "MTQw",
              quantity: 0,
              status: "PENDING",
              requestQuantity: 4,
              type: "OrderItem",
              eligibleForReturn: true,
              productSku: "24-MB03",
              productName: "Crown Summit Backpack",
              productUrlKey: "crown-summit-backpack",
              quantityCanceled: 0,
              quantityInvoiced: 7,
              quantityOrdered: 7,
              quantityRefunded: 0,
              quantityReturned: 0,
              quantityShipped: 7,
              id: "NDEzNg==",
              discounted: false,
              total: {
                value: 266,
                currency: "USD",
              },
              totalInclTax: {
                value: 266,
                currency: "USD",
              },
              price: {
                value: 38,
                currency: "USD",
              },
              priceInclTax: {
                value: 38,
                currency: "USD",
              },
              totalQuantity: 7,
              regularPrice: {
                value: 38,
                currency: "USD",
              },
              product: {
                __typename: "SimpleProduct",
                canonicalUrl: "",
                urlKey: "crown-summit-backpack",
                uid: "Nw==",
                name: "Crown Summit Backpack",
                sku: "24-MB03",
                onlyXLeftInStock: null,
                stockStatus: "IN_STOCK",
                thumbnail: {
                  label: "Image",
                  url: "https://mcstaging.aemshop.net/media/catalog/product/m/b/mb03-black-0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                },
                priceRange: {
                  maximumPrice: {
                    regularPrice: {
                      currency: "USD",
                      value: 38,
                    },
                  },
                },
                id: "Nw==",
                image: "",
                productType: "SimpleProduct",
              },
              thumbnail: {
                label: "Image",
                url: "https://mcstaging.aemshop.net/media/catalog/product/m/b/mb03-black-0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
              },
              configurableOptions: {},
              bundleOptions: null,
              itemPrices: {
                priceIncludingTax: {
                  value: 41.14,
                  currency: "USD",
                },
                originalPrice: {
                  value: 38,
                  currency: "USD",
                },
                originalPriceIncludingTax: {
                  value: 41.135,
                  currency: "USD",
                },
                price: {
                  value: 38,
                  currency: "USD",
                },
              },
              downloadableLinks: null,
            },
          ],
          tracking: [],
        },
        {
          createdReturnAt: "2024-11-06 23:00:04",
          returnStatus: "CLOSED",
          token:
            "0:3:X6uUolpTfj9GCmYGiaZJquT3aKgmasafnnyk5MLlq2W+NcDTud+yW8xDl1cRHQR0WlpPhSGjuIjM2aNF+z7KdV/ADzW0/UNz",
          orderNumber: "000001937",
          returnNumber: "000000110",
          items: [
            {
              uid: "MTM3",
              quantity: 0,
              status: "PENDING",
              requestQuantity: 3,
              type: "OrderItem",
              eligibleForReturn: true,
              productSku: "24-MB03",
              productName: "Crown Summit Backpack",
              productUrlKey: "crown-summit-backpack",
              quantityCanceled: 0,
              quantityInvoiced: 7,
              quantityOrdered: 7,
              quantityRefunded: 0,
              quantityReturned: 0,
              quantityShipped: 7,
              id: "NDEzNg==",
              discounted: false,
              total: {
                value: 266,
                currency: "USD",
              },
              totalInclTax: {
                value: 266,
                currency: "USD",
              },
              price: {
                value: 38,
                currency: "USD",
              },
              priceInclTax: {
                value: 38,
                currency: "USD",
              },
              totalQuantity: 7,
              regularPrice: {
                value: 38,
                currency: "USD",
              },
              product: {
                __typename: "SimpleProduct",
                canonicalUrl: "",
                urlKey: "crown-summit-backpack",
                uid: "Nw==",
                name: "Crown Summit Backpack",
                sku: "24-MB03",
                onlyXLeftInStock: null,
                stockStatus: "IN_STOCK",
                thumbnail: {
                  label: "Image",
                  url: "https://mcstaging.aemshop.net/media/catalog/product/m/b/mb03-black-0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                },
                priceRange: {
                  maximumPrice: {
                    regularPrice: {
                      currency: "USD",
                      value: 38,
                    },
                  },
                },
                id: "Nw==",
                image: "",
                productType: "SimpleProduct",
              },
              thumbnail: {
                label: "Image",
                url: "https://mcstaging.aemshop.net/media/catalog/product/m/b/mb03-black-0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
              },
              configurableOptions: {},
              bundleOptions: null,
              itemPrices: {
                priceIncludingTax: {
                  value: 41.14,
                  currency: "USD",
                },
                originalPrice: {
                  value: 38,
                  currency: "USD",
                },
                originalPriceIncludingTax: {
                  value: 41.135,
                  currency: "USD",
                },
                price: {
                  value: 38,
                  currency: "USD",
                },
              },
              downloadableLinks: null,
            },
          ],
          tracking: [],
        },
        {
          createdReturnAt: "2024-11-06 22:50:32",
          returnStatus: "CLOSED",
          token:
            "0:3:pqidXD/eNYkq2M0yh97h/Cu8bVHftaqC4W5JpIuZs8itPs9WrMiF6ZEMH3PvnwBZwZVWCN4XB4XkDZ9W/MScy60E1bMNW2gC",
          orderNumber: "000001937",
          returnNumber: "000000107",
          items: [
            {
              uid: "MTMx",
              quantity: 0,
              status: "PENDING",
              requestQuantity: 1,
              type: "OrderItem",
              eligibleForReturn: true,
              productSku: "MH05-XS-Green",
              productName: "Hollister Backyard Sweatshirt",
              productUrlKey: "hollister-backyard-sweatshirt",
              quantityCanceled: 0,
              quantityInvoiced: 4,
              quantityOrdered: 4,
              quantityRefunded: 0,
              quantityReturned: 0,
              quantityShipped: 4,
              id: "NDE2MA==",
              discounted: false,
              total: {
                value: 208,
                currency: "USD",
              },
              totalInclTax: {
                value: 208,
                currency: "USD",
              },
              price: {
                value: 52,
                currency: "USD",
              },
              priceInclTax: {
                value: 52,
                currency: "USD",
              },
              totalQuantity: 4,
              regularPrice: {
                value: 52,
                currency: "USD",
              },
              product: {
                __typename: "ConfigurableProduct",
                canonicalUrl: "",
                urlKey: "hollister-backyard-sweatshirt",
                uid: "Mzk0",
                name: "Hollister Backyard Sweatshirt",
                sku: "MH05",
                onlyXLeftInStock: null,
                stockStatus: "IN_STOCK",
                thumbnail: {
                  label: "Hollister Backyard Sweatshirt",
                  url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                },
                priceRange: {
                  maximumPrice: {
                    regularPrice: {
                      currency: "USD",
                      value: 52,
                    },
                  },
                },
                id: "Mzk0",
                image: "",
                productType: "ConfigurableProduct",
              },
              thumbnail: {
                label: "Hollister Backyard Sweatshirt",
                url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
              },
              configurableOptions: {
                Size: "XS",
                Color: "Green",
              },
              bundleOptions: null,
              itemPrices: {
                priceIncludingTax: {
                  value: 56.29,
                  currency: "USD",
                },
                originalPrice: {
                  value: 52,
                  currency: "USD",
                },
                originalPriceIncludingTax: {
                  value: 56.29,
                  currency: "USD",
                },
                price: {
                  value: 52,
                  currency: "USD",
                },
              },
              downloadableLinks: null,
            },
            {
              uid: "MTM0",
              quantity: 0,
              status: "PENDING",
              requestQuantity: 1,
              type: "OrderItem",
              eligibleForReturn: true,
              productSku: "MH05-XL-Red",
              productName: "Hollister Backyard Sweatshirt",
              productUrlKey: "hollister-backyard-sweatshirt",
              quantityCanceled: 0,
              quantityInvoiced: 4,
              quantityOrdered: 4,
              quantityRefunded: 0,
              quantityReturned: 0,
              quantityShipped: 4,
              id: "NDE2Ng==",
              discounted: false,
              total: {
                value: 208,
                currency: "USD",
              },
              totalInclTax: {
                value: 208,
                currency: "USD",
              },
              price: {
                value: 52,
                currency: "USD",
              },
              priceInclTax: {
                value: 52,
                currency: "USD",
              },
              totalQuantity: 4,
              regularPrice: {
                value: 52,
                currency: "USD",
              },
              product: {
                __typename: "ConfigurableProduct",
                canonicalUrl: "",
                urlKey: "hollister-backyard-sweatshirt",
                uid: "Mzk0",
                name: "Hollister Backyard Sweatshirt",
                sku: "MH05",
                onlyXLeftInStock: null,
                stockStatus: "IN_STOCK",
                thumbnail: {
                  label: "Hollister Backyard Sweatshirt",
                  url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                },
                priceRange: {
                  maximumPrice: {
                    regularPrice: {
                      currency: "USD",
                      value: 52,
                    },
                  },
                },
                id: "Mzk0",
                image: "",
                productType: "ConfigurableProduct",
              },
              thumbnail: {
                label: "Hollister Backyard Sweatshirt",
                url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
              },
              configurableOptions: {
                Size: "XL",
                Color: "Red",
              },
              bundleOptions: null,
              itemPrices: {
                priceIncludingTax: {
                  value: 56.29,
                  currency: "USD",
                },
                originalPrice: {
                  value: 52,
                  currency: "USD",
                },
                originalPriceIncludingTax: {
                  value: 56.29,
                  currency: "USD",
                },
                price: {
                  value: 52,
                  currency: "USD",
                },
              },
              downloadableLinks: null,
            },
          ],
          tracking: [],
        },
        {
          createdReturnAt: "2024-11-06 22:50:09",
          returnStatus: "CLOSED",
          token:
            "0:3:BteFDEy5sqaLhLvNFEH3F8OS1HVB7+k7r/IFf5i6MBn2vCUp5YU4BXKRBKAkm/4dScoIQqA/0rZWEPmz4qeAFRCjZ7vn7gRZ",
          orderNumber: "000001937",
          returnNumber: "000000104",
          items: [
            {
              uid: "MTI1",
              quantity: 0,
              status: "PENDING",
              requestQuantity: 1,
              type: "BundleOrderItem",
              eligibleForReturn: true,
              productSku: "24-WG080-24-WG081-blue-24-WG084-24-WG085-24-WG088",
              productName: "Sprite Yoga Companion Kit",
              productUrlKey: "sprite-yoga-companion-kit",
              quantityCanceled: 0,
              quantityInvoiced: 1,
              quantityOrdered: 1,
              quantityRefunded: 0,
              quantityReturned: 0,
              quantityShipped: 1,
              id: "NDE0NQ==",
              discounted: true,
              total: {
                value: 61,
                currency: "USD",
              },
              totalInclTax: {
                value: 61,
                currency: "USD",
              },
              price: {
                value: 61,
                currency: "USD",
              },
              priceInclTax: {
                value: 61,
                currency: "USD",
              },
              totalQuantity: 1,
              regularPrice: {
                value: 77,
                currency: "USD",
              },
              product: {
                __typename: "BundleProduct",
                canonicalUrl: "",
                urlKey: "sprite-yoga-companion-kit",
                uid: "MTU0",
                name: "Sprite Yoga Companion Kit",
                sku: "24-WG080",
                onlyXLeftInStock: null,
                stockStatus: "IN_STOCK",
                thumbnail: {
                  label: "Sprite Yoga Companion Kit",
                  url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-kit-2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                },
                priceRange: {
                  maximumPrice: {
                    regularPrice: {
                      currency: "USD",
                      value: 77,
                    },
                  },
                },
                id: "MTU0",
                image: "",
                productType: "BundleProduct",
              },
              thumbnail: {
                label: "Sprite Yoga Companion Kit",
                url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-kit-2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
              },
              configurableOptions: {},
              bundleOptions: null,
              itemPrices: {
                priceIncludingTax: {
                  value: 64.87,
                  currency: "USD",
                },
                originalPrice: {
                  value: 61,
                  currency: "USD",
                },
                originalPriceIncludingTax: {
                  value: 61,
                  currency: "USD",
                },
                price: {
                  value: 61,
                  currency: "USD",
                },
              },
              downloadableLinks: null,
            },
            {
              uid: "MTI4",
              quantity: 0,
              status: "PENDING",
              requestQuantity: 1,
              type: "OrderItem",
              eligibleForReturn: true,
              productSku: "MH05-XS-Green",
              productName: "Hollister Backyard Sweatshirt",
              productUrlKey: "hollister-backyard-sweatshirt",
              quantityCanceled: 0,
              quantityInvoiced: 4,
              quantityOrdered: 4,
              quantityRefunded: 0,
              quantityReturned: 0,
              quantityShipped: 4,
              id: "NDE2MA==",
              discounted: false,
              total: {
                value: 208,
                currency: "USD",
              },
              totalInclTax: {
                value: 208,
                currency: "USD",
              },
              price: {
                value: 52,
                currency: "USD",
              },
              priceInclTax: {
                value: 52,
                currency: "USD",
              },
              totalQuantity: 4,
              regularPrice: {
                value: 52,
                currency: "USD",
              },
              product: {
                __typename: "ConfigurableProduct",
                canonicalUrl: "",
                urlKey: "hollister-backyard-sweatshirt",
                uid: "Mzk0",
                name: "Hollister Backyard Sweatshirt",
                sku: "MH05",
                onlyXLeftInStock: null,
                stockStatus: "IN_STOCK",
                thumbnail: {
                  label: "Hollister Backyard Sweatshirt",
                  url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                },
                priceRange: {
                  maximumPrice: {
                    regularPrice: {
                      currency: "USD",
                      value: 52,
                    },
                  },
                },
                id: "Mzk0",
                image: "",
                productType: "ConfigurableProduct",
              },
              thumbnail: {
                label: "Hollister Backyard Sweatshirt",
                url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
              },
              configurableOptions: {
                Size: "XS",
                Color: "Green",
              },
              bundleOptions: null,
              itemPrices: {
                priceIncludingTax: {
                  value: 56.29,
                  currency: "USD",
                },
                originalPrice: {
                  value: 52,
                  currency: "USD",
                },
                originalPriceIncludingTax: {
                  value: 56.29,
                  currency: "USD",
                },
                price: {
                  value: 52,
                  currency: "USD",
                },
              },
              downloadableLinks: null,
            },
          ],
          tracking: [],
        },
        {
          createdReturnAt: "2024-11-06 22:21:05",
          returnStatus: "CLOSED",
          token:
            "0:3:LEeHO1I1FhV6+PoNuNUJsl56804kOQm9Sli+9e99kPizSLjt7Ykt9Whv+NkwEQynZD4H1l4agsgoY9vRDcjHeBwo/Ctsq7ND",
          orderNumber: "000001937",
          returnNumber: "000000101",
          items: [
            {
              uid: "MTIy",
              quantity: 0,
              status: "PENDING",
              requestQuantity: 3,
              type: "OrderItem",
              eligibleForReturn: true,
              productSku: "24-MB03",
              productName: "Crown Summit Backpack",
              productUrlKey: "crown-summit-backpack",
              quantityCanceled: 0,
              quantityInvoiced: 7,
              quantityOrdered: 7,
              quantityRefunded: 0,
              quantityReturned: 0,
              quantityShipped: 7,
              id: "NDEzNg==",
              discounted: false,
              total: {
                value: 266,
                currency: "USD",
              },
              totalInclTax: {
                value: 266,
                currency: "USD",
              },
              price: {
                value: 38,
                currency: "USD",
              },
              priceInclTax: {
                value: 38,
                currency: "USD",
              },
              totalQuantity: 7,
              regularPrice: {
                value: 38,
                currency: "USD",
              },
              product: {
                __typename: "SimpleProduct",
                canonicalUrl: "",
                urlKey: "crown-summit-backpack",
                uid: "Nw==",
                name: "Crown Summit Backpack",
                sku: "24-MB03",
                onlyXLeftInStock: null,
                stockStatus: "IN_STOCK",
                thumbnail: {
                  label: "Image",
                  url: "https://mcstaging.aemshop.net/media/catalog/product/m/b/mb03-black-0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                },
                priceRange: {
                  maximumPrice: {
                    regularPrice: {
                      currency: "USD",
                      value: 38,
                    },
                  },
                },
                id: "Nw==",
                image: "",
                productType: "SimpleProduct",
              },
              thumbnail: {
                label: "Image",
                url: "https://mcstaging.aemshop.net/media/catalog/product/m/b/mb03-black-0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
              },
              configurableOptions: {},
              bundleOptions: null,
              itemPrices: {
                priceIncludingTax: {
                  value: 41.14,
                  currency: "USD",
                },
                originalPrice: {
                  value: 38,
                  currency: "USD",
                },
                originalPriceIncludingTax: {
                  value: 41.135,
                  currency: "USD",
                },
                price: {
                  value: 38,
                  currency: "USD",
                },
              },
              downloadableLinks: null,
            },
          ],
          tracking: [],
        },
        {
          createdReturnAt: "2024-11-06 21:19:25",
          returnStatus: "CLOSED",
          token:
            "0:3:7xr+pQKMRtOEMZuoj4qZKzwXuCxpohz2XOTUBXIelqN66GiXqkutAH/RHxH9hPKpSLoCsbSiwMJ/+lSUK52j2lSFtGa5PLG6",
          orderNumber: "000001937",
          returnNumber: "000000098",
          items: [
            {
              uid: "MTE5",
              quantity: 0,
              status: "PENDING",
              requestQuantity: 1,
              type: "BundleOrderItem",
              eligibleForReturn: true,
              productSku: "24-WG080-24-WG083-blue-24-WG084-24-WG087-24-WG088",
              productName: "Sprite Yoga Companion Kit",
              productUrlKey: "sprite-yoga-companion-kit",
              quantityCanceled: 0,
              quantityInvoiced: 1,
              quantityOrdered: 1,
              quantityRefunded: 0,
              quantityReturned: 0,
              quantityShipped: 1,
              id: "NDE3Mg==",
              discounted: false,
              total: {
                value: 77,
                currency: "USD",
              },
              totalInclTax: {
                value: 77,
                currency: "USD",
              },
              price: {
                value: 77,
                currency: "USD",
              },
              priceInclTax: {
                value: 77,
                currency: "USD",
              },
              totalQuantity: 1,
              regularPrice: {
                value: 77,
                currency: "USD",
              },
              product: {
                __typename: "BundleProduct",
                canonicalUrl: "",
                urlKey: "sprite-yoga-companion-kit",
                uid: "MTU0",
                name: "Sprite Yoga Companion Kit",
                sku: "24-WG080",
                onlyXLeftInStock: null,
                stockStatus: "IN_STOCK",
                thumbnail: {
                  label: "Sprite Yoga Companion Kit",
                  url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-kit-2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                },
                priceRange: {
                  maximumPrice: {
                    regularPrice: {
                      currency: "USD",
                      value: 77,
                    },
                  },
                },
                id: "MTU0",
                image: "",
                productType: "BundleProduct",
              },
              thumbnail: {
                label: "Sprite Yoga Companion Kit",
                url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-kit-2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
              },
              configurableOptions: {},
              bundleOptions: null,
              itemPrices: {
                priceIncludingTax: {
                  value: 83.36,
                  currency: "USD",
                },
                originalPrice: {
                  value: 77,
                  currency: "USD",
                },
                originalPriceIncludingTax: {
                  value: 77,
                  currency: "USD",
                },
                price: {
                  value: 77,
                  currency: "USD",
                },
              },
              downloadableLinks: null,
            },
          ],
          tracking: [],
        },
        {
          createdReturnAt: "2024-11-06 12:44:53",
          returnStatus: "CLOSED",
          token:
            "0:3:SE162Wa4V43g6FLc/5ts8YAwfdaecoc8DmMUyCzmLj6E1JMrIpLlv4+zRRsRxwjGw4I329VcK3U5852c47SJRddK/hJYXQuF",
          orderNumber: "000001937",
          returnNumber: "000000092",
          items: [
            {
              uid: "MTEw",
              quantity: 0,
              status: "PENDING",
              requestQuantity: 3,
              type: "OrderItem",
              eligibleForReturn: true,
              productSku: "24-MB03",
              productName: "Crown Summit Backpack",
              productUrlKey: "crown-summit-backpack",
              quantityCanceled: 0,
              quantityInvoiced: 7,
              quantityOrdered: 7,
              quantityRefunded: 0,
              quantityReturned: 0,
              quantityShipped: 7,
              id: "NDEzNg==",
              discounted: false,
              total: {
                value: 266,
                currency: "USD",
              },
              totalInclTax: {
                value: 266,
                currency: "USD",
              },
              price: {
                value: 38,
                currency: "USD",
              },
              priceInclTax: {
                value: 38,
                currency: "USD",
              },
              totalQuantity: 7,
              regularPrice: {
                value: 38,
                currency: "USD",
              },
              product: {
                __typename: "SimpleProduct",
                canonicalUrl: "",
                urlKey: "crown-summit-backpack",
                uid: "Nw==",
                name: "Crown Summit Backpack",
                sku: "24-MB03",
                onlyXLeftInStock: null,
                stockStatus: "IN_STOCK",
                thumbnail: {
                  label: "Image",
                  url: "https://mcstaging.aemshop.net/media/catalog/product/m/b/mb03-black-0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                },
                priceRange: {
                  maximumPrice: {
                    regularPrice: {
                      currency: "USD",
                      value: 38,
                    },
                  },
                },
                id: "Nw==",
                image: "",
                productType: "SimpleProduct",
              },
              thumbnail: {
                label: "Image",
                url: "https://mcstaging.aemshop.net/media/catalog/product/m/b/mb03-black-0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
              },
              configurableOptions: {},
              bundleOptions: null,
              itemPrices: {
                priceIncludingTax: {
                  value: 41.14,
                  currency: "USD",
                },
                originalPrice: {
                  value: 38,
                  currency: "USD",
                },
                originalPriceIncludingTax: {
                  value: 41.135,
                  currency: "USD",
                },
                price: {
                  value: 38,
                  currency: "USD",
                },
              },
              downloadableLinks: null,
            },
            {
              uid: "MTEz",
              quantity: 0,
              status: "PENDING",
              requestQuantity: 1,
              type: "OrderItem",
              eligibleForReturn: true,
              productSku: "MH05-XS-Red",
              productName: "Hollister Backyard Sweatshirt",
              productUrlKey: "hollister-backyard-sweatshirt",
              quantityCanceled: 0,
              quantityInvoiced: 1,
              quantityOrdered: 1,
              quantityRefunded: 0,
              quantityReturned: 0,
              quantityShipped: 1,
              id: "NDEzOQ==",
              discounted: false,
              total: {
                value: 52,
                currency: "USD",
              },
              totalInclTax: {
                value: 52,
                currency: "USD",
              },
              price: {
                value: 52,
                currency: "USD",
              },
              priceInclTax: {
                value: 52,
                currency: "USD",
              },
              totalQuantity: 1,
              regularPrice: {
                value: 52,
                currency: "USD",
              },
              product: {
                __typename: "ConfigurableProduct",
                canonicalUrl: "",
                urlKey: "hollister-backyard-sweatshirt",
                uid: "Mzk0",
                name: "Hollister Backyard Sweatshirt",
                sku: "MH05",
                onlyXLeftInStock: null,
                stockStatus: "IN_STOCK",
                thumbnail: {
                  label: "Hollister Backyard Sweatshirt",
                  url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                },
                priceRange: {
                  maximumPrice: {
                    regularPrice: {
                      currency: "USD",
                      value: 52,
                    },
                  },
                },
                id: "Mzk0",
                image: "",
                productType: "ConfigurableProduct",
              },
              thumbnail: {
                label: "Hollister Backyard Sweatshirt",
                url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
              },
              configurableOptions: {
                Color: "Red",
                Size: "XS",
              },
              bundleOptions: null,
              itemPrices: {
                priceIncludingTax: {
                  value: 56.29,
                  currency: "USD",
                },
                originalPrice: {
                  value: 52,
                  currency: "USD",
                },
                originalPriceIncludingTax: {
                  value: 56.29,
                  currency: "USD",
                },
                price: {
                  value: 52,
                  currency: "USD",
                },
              },
              downloadableLinks: null,
            },
          ],
          tracking: [],
        },
        {
          createdReturnAt: "2024-11-06 12:27:41",
          returnStatus: "CLOSED",
          token:
            "0:3:X73l+mYwNi++n88Fo8xOAFg1yU4QZyNWDwHN5JpI8G+D4TDo9xlMNnwRqFO7QKMzINBefyXLiTWdVLrDCVFVF6Ty2XzkjGxZ",
          orderNumber: "000001937",
          returnNumber: "000000089",
          items: [
            {
              uid: "MTA0",
              quantity: 0,
              status: "PENDING",
              requestQuantity: 1,
              type: "OrderItem",
              eligibleForReturn: true,
              productSku: "24-MB03",
              productName: "Crown Summit Backpack",
              productUrlKey: "crown-summit-backpack",
              quantityCanceled: 0,
              quantityInvoiced: 7,
              quantityOrdered: 7,
              quantityRefunded: 0,
              quantityReturned: 0,
              quantityShipped: 7,
              id: "NDEzNg==",
              discounted: false,
              total: {
                value: 266,
                currency: "USD",
              },
              totalInclTax: {
                value: 266,
                currency: "USD",
              },
              price: {
                value: 38,
                currency: "USD",
              },
              priceInclTax: {
                value: 38,
                currency: "USD",
              },
              totalQuantity: 7,
              regularPrice: {
                value: 38,
                currency: "USD",
              },
              product: {
                __typename: "SimpleProduct",
                canonicalUrl: "",
                urlKey: "crown-summit-backpack",
                uid: "Nw==",
                name: "Crown Summit Backpack",
                sku: "24-MB03",
                onlyXLeftInStock: null,
                stockStatus: "IN_STOCK",
                thumbnail: {
                  label: "Image",
                  url: "https://mcstaging.aemshop.net/media/catalog/product/m/b/mb03-black-0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                },
                priceRange: {
                  maximumPrice: {
                    regularPrice: {
                      currency: "USD",
                      value: 38,
                    },
                  },
                },
                id: "Nw==",
                image: "",
                productType: "SimpleProduct",
              },
              thumbnail: {
                label: "Image",
                url: "https://mcstaging.aemshop.net/media/catalog/product/m/b/mb03-black-0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
              },
              configurableOptions: {},
              bundleOptions: null,
              itemPrices: {
                priceIncludingTax: {
                  value: 41.14,
                  currency: "USD",
                },
                originalPrice: {
                  value: 38,
                  currency: "USD",
                },
                originalPriceIncludingTax: {
                  value: 41.135,
                  currency: "USD",
                },
                price: {
                  value: 38,
                  currency: "USD",
                },
              },
              downloadableLinks: null,
            },
            {
              uid: "MTA3",
              quantity: 0,
              status: "PENDING",
              requestQuantity: 1,
              type: "OrderItem",
              eligibleForReturn: true,
              productSku: "MH05-XS-Red",
              productName: "Hollister Backyard Sweatshirt",
              productUrlKey: "hollister-backyard-sweatshirt",
              quantityCanceled: 0,
              quantityInvoiced: 1,
              quantityOrdered: 1,
              quantityRefunded: 0,
              quantityReturned: 0,
              quantityShipped: 1,
              id: "NDEzOQ==",
              discounted: false,
              total: {
                value: 52,
                currency: "USD",
              },
              totalInclTax: {
                value: 52,
                currency: "USD",
              },
              price: {
                value: 52,
                currency: "USD",
              },
              priceInclTax: {
                value: 52,
                currency: "USD",
              },
              totalQuantity: 1,
              regularPrice: {
                value: 52,
                currency: "USD",
              },
              product: {
                __typename: "ConfigurableProduct",
                canonicalUrl: "",
                urlKey: "hollister-backyard-sweatshirt",
                uid: "Mzk0",
                name: "Hollister Backyard Sweatshirt",
                sku: "MH05",
                onlyXLeftInStock: null,
                stockStatus: "IN_STOCK",
                thumbnail: {
                  label: "Hollister Backyard Sweatshirt",
                  url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                },
                priceRange: {
                  maximumPrice: {
                    regularPrice: {
                      currency: "USD",
                      value: 52,
                    },
                  },
                },
                id: "Mzk0",
                image: "",
                productType: "ConfigurableProduct",
              },
              thumbnail: {
                label: "Hollister Backyard Sweatshirt",
                url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
              },
              configurableOptions: {
                Color: "Red",
                Size: "XS",
              },
              bundleOptions: null,
              itemPrices: {
                priceIncludingTax: {
                  value: 56.29,
                  currency: "USD",
                },
                originalPrice: {
                  value: 52,
                  currency: "USD",
                },
                originalPriceIncludingTax: {
                  value: 56.29,
                  currency: "USD",
                },
                price: {
                  value: 52,
                  currency: "USD",
                },
              },
              downloadableLinks: null,
            },
          ],
          tracking: [],
        },
        {
          createdReturnAt: "2024-11-06 08:51:41",
          returnStatus: "CLOSED",
          token:
            "0:3:VOLpGelGiek9KML4vUOmH6hPZ2wJhIj17m2YfxFHKQ6B0gcFR9DLB4/6r1QPij5W+ZQh/c5VWeI81MKAqfADNhL5YT1vIjtH",
          orderNumber: "000001937",
          returnNumber: "000000083",
          items: [
            {
              uid: "OTI=",
              quantity: 0,
              status: "PENDING",
              requestQuantity: 1,
              type: "OrderItem",
              eligibleForReturn: true,
              productSku: "24-MB03",
              productName: "Crown Summit Backpack",
              productUrlKey: "crown-summit-backpack",
              quantityCanceled: 0,
              quantityInvoiced: 7,
              quantityOrdered: 7,
              quantityRefunded: 0,
              quantityReturned: 0,
              quantityShipped: 7,
              id: "NDEzNg==",
              discounted: false,
              total: {
                value: 266,
                currency: "USD",
              },
              totalInclTax: {
                value: 266,
                currency: "USD",
              },
              price: {
                value: 38,
                currency: "USD",
              },
              priceInclTax: {
                value: 38,
                currency: "USD",
              },
              totalQuantity: 7,
              regularPrice: {
                value: 38,
                currency: "USD",
              },
              product: {
                __typename: "SimpleProduct",
                canonicalUrl: "",
                urlKey: "crown-summit-backpack",
                uid: "Nw==",
                name: "Crown Summit Backpack",
                sku: "24-MB03",
                onlyXLeftInStock: null,
                stockStatus: "IN_STOCK",
                thumbnail: {
                  label: "Image",
                  url: "https://mcstaging.aemshop.net/media/catalog/product/m/b/mb03-black-0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                },
                priceRange: {
                  maximumPrice: {
                    regularPrice: {
                      currency: "USD",
                      value: 38,
                    },
                  },
                },
                id: "Nw==",
                image: "",
                productType: "SimpleProduct",
              },
              thumbnail: {
                label: "Image",
                url: "https://mcstaging.aemshop.net/media/catalog/product/m/b/mb03-black-0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
              },
              configurableOptions: {},
              bundleOptions: null,
              itemPrices: {
                priceIncludingTax: {
                  value: 41.14,
                  currency: "USD",
                },
                originalPrice: {
                  value: 38,
                  currency: "USD",
                },
                originalPriceIncludingTax: {
                  value: 41.135,
                  currency: "USD",
                },
                price: {
                  value: 38,
                  currency: "USD",
                },
              },
              downloadableLinks: null,
            },
            {
              uid: "OTU=",
              quantity: 0,
              status: "PENDING",
              requestQuantity: 1,
              type: "OrderItem",
              eligibleForReturn: true,
              productSku: "MH05-XS-Red",
              productName: "Hollister Backyard Sweatshirt",
              productUrlKey: "hollister-backyard-sweatshirt",
              quantityCanceled: 0,
              quantityInvoiced: 1,
              quantityOrdered: 1,
              quantityRefunded: 0,
              quantityReturned: 0,
              quantityShipped: 1,
              id: "NDEzOQ==",
              discounted: false,
              total: {
                value: 52,
                currency: "USD",
              },
              totalInclTax: {
                value: 52,
                currency: "USD",
              },
              price: {
                value: 52,
                currency: "USD",
              },
              priceInclTax: {
                value: 52,
                currency: "USD",
              },
              totalQuantity: 1,
              regularPrice: {
                value: 52,
                currency: "USD",
              },
              product: {
                __typename: "ConfigurableProduct",
                canonicalUrl: "",
                urlKey: "hollister-backyard-sweatshirt",
                uid: "Mzk0",
                name: "Hollister Backyard Sweatshirt",
                sku: "MH05",
                onlyXLeftInStock: null,
                stockStatus: "IN_STOCK",
                thumbnail: {
                  label: "Hollister Backyard Sweatshirt",
                  url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                },
                priceRange: {
                  maximumPrice: {
                    regularPrice: {
                      currency: "USD",
                      value: 52,
                    },
                  },
                },
                id: "Mzk0",
                image: "",
                productType: "ConfigurableProduct",
              },
              thumbnail: {
                label: "Hollister Backyard Sweatshirt",
                url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
              },
              configurableOptions: {
                Color: "Red",
                Size: "XS",
              },
              bundleOptions: null,
              itemPrices: {
                priceIncludingTax: {
                  value: 56.29,
                  currency: "USD",
                },
                originalPrice: {
                  value: 52,
                  currency: "USD",
                },
                originalPriceIncludingTax: {
                  value: 56.29,
                  currency: "USD",
                },
                price: {
                  value: 52,
                  currency: "USD",
                },
              },
              downloadableLinks: null,
            },
            {
              uid: "OTg=",
              quantity: 0,
              status: "PENDING",
              requestQuantity: 1,
              type: "BundleOrderItem",
              eligibleForReturn: true,
              productSku: "24-WG080-24-WG081-blue-24-WG084-24-WG085-24-WG088",
              productName: "Sprite Yoga Companion Kit",
              productUrlKey: "sprite-yoga-companion-kit",
              quantityCanceled: 0,
              quantityInvoiced: 1,
              quantityOrdered: 1,
              quantityRefunded: 0,
              quantityReturned: 0,
              quantityShipped: 1,
              id: "NDE0NQ==",
              discounted: true,
              total: {
                value: 61,
                currency: "USD",
              },
              totalInclTax: {
                value: 61,
                currency: "USD",
              },
              price: {
                value: 61,
                currency: "USD",
              },
              priceInclTax: {
                value: 61,
                currency: "USD",
              },
              totalQuantity: 1,
              regularPrice: {
                value: 77,
                currency: "USD",
              },
              product: {
                __typename: "BundleProduct",
                canonicalUrl: "",
                urlKey: "sprite-yoga-companion-kit",
                uid: "MTU0",
                name: "Sprite Yoga Companion Kit",
                sku: "24-WG080",
                onlyXLeftInStock: null,
                stockStatus: "IN_STOCK",
                thumbnail: {
                  label: "Sprite Yoga Companion Kit",
                  url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-kit-2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                },
                priceRange: {
                  maximumPrice: {
                    regularPrice: {
                      currency: "USD",
                      value: 77,
                    },
                  },
                },
                id: "MTU0",
                image: "",
                productType: "BundleProduct",
              },
              thumbnail: {
                label: "Sprite Yoga Companion Kit",
                url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-kit-2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
              },
              configurableOptions: {},
              bundleOptions: null,
              itemPrices: {
                priceIncludingTax: {
                  value: 64.87,
                  currency: "USD",
                },
                originalPrice: {
                  value: 61,
                  currency: "USD",
                },
                originalPriceIncludingTax: {
                  value: 61,
                  currency: "USD",
                },
                price: {
                  value: 61,
                  currency: "USD",
                },
              },
              downloadableLinks: null,
            },
          ],
          tracking: [],
        },
        {
          createdReturnAt: "2024-11-05 23:34:19",
          returnStatus: "CLOSED",
          token:
            "0:3:TZKLMyuMk5nZuCrpYlD2C5HcACwqZR3QQmRd1e2vGLFVksjxp4SyKcgMaZpCzxZUXROwRnly5Zp68KgvS5NEi8HWxDl1gzk3",
          orderNumber: "000001937",
          returnNumber: "000000080",
          items: [
            {
              uid: "ODk=",
              quantity: 0,
              status: "PENDING",
              requestQuantity: 1,
              type: "OrderItem",
              eligibleForReturn: true,
              productSku: "24-MB03",
              productName: "Crown Summit Backpack",
              productUrlKey: "crown-summit-backpack",
              quantityCanceled: 0,
              quantityInvoiced: 7,
              quantityOrdered: 7,
              quantityRefunded: 0,
              quantityReturned: 0,
              quantityShipped: 7,
              id: "NDEzNg==",
              discounted: false,
              total: {
                value: 266,
                currency: "USD",
              },
              totalInclTax: {
                value: 266,
                currency: "USD",
              },
              price: {
                value: 38,
                currency: "USD",
              },
              priceInclTax: {
                value: 38,
                currency: "USD",
              },
              totalQuantity: 7,
              regularPrice: {
                value: 38,
                currency: "USD",
              },
              product: {
                __typename: "SimpleProduct",
                canonicalUrl: "",
                urlKey: "crown-summit-backpack",
                uid: "Nw==",
                name: "Crown Summit Backpack",
                sku: "24-MB03",
                onlyXLeftInStock: null,
                stockStatus: "IN_STOCK",
                thumbnail: {
                  label: "Image",
                  url: "https://mcstaging.aemshop.net/media/catalog/product/m/b/mb03-black-0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                },
                priceRange: {
                  maximumPrice: {
                    regularPrice: {
                      currency: "USD",
                      value: 38,
                    },
                  },
                },
                id: "Nw==",
                image: "",
                productType: "SimpleProduct",
              },
              thumbnail: {
                label: "Image",
                url: "https://mcstaging.aemshop.net/media/catalog/product/m/b/mb03-black-0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
              },
              configurableOptions: {},
              bundleOptions: null,
              itemPrices: {
                priceIncludingTax: {
                  value: 41.14,
                  currency: "USD",
                },
                originalPrice: {
                  value: 38,
                  currency: "USD",
                },
                originalPriceIncludingTax: {
                  value: 41.135,
                  currency: "USD",
                },
                price: {
                  value: 38,
                  currency: "USD",
                },
              },
              downloadableLinks: null,
            },
          ],
          tracking: [],
        },
      ],
      itemsEligibleForReturn: [
        {
          type: "OrderItem",
          eligibleForReturn: true,
          productSku: "24-MB03",
          productName: "Crown Summit Backpack",
          productUrlKey: "crown-summit-backpack",
          quantityCanceled: 0,
          quantityInvoiced: 7,
          quantityOrdered: 7,
          quantityRefunded: 0,
          quantityReturned: 0,
          quantityShipped: 7,
          id: "NDEzNg==",
          discounted: false,
          total: {
            value: 266,
            currency: "USD",
          },
          totalInclTax: {
            value: 266,
            currency: "USD",
          },
          price: {
            value: 38,
            currency: "USD",
          },
          priceInclTax: {
            value: 38,
            currency: "USD",
          },
          totalQuantity: 7,
          regularPrice: {
            value: 38,
            currency: "USD",
          },
          product: {
            __typename: "SimpleProduct",
            canonicalUrl: "",
            urlKey: "crown-summit-backpack",
            uid: "Nw==",
            name: "Crown Summit Backpack",
            sku: "24-MB03",
            onlyXLeftInStock: null,
            stockStatus: "IN_STOCK",
            thumbnail: {
              label: "Image",
              url: "https://mcstaging.aemshop.net/media/catalog/product/m/b/mb03-black-0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
            },
            priceRange: {
              maximumPrice: {
                regularPrice: {
                  currency: "USD",
                  value: 38,
                },
              },
            },
            id: "Nw==",
            image: "",
            productType: "SimpleProduct",
          },
          thumbnail: {
            label: "Image",
            url: "https://mcstaging.aemshop.net/media/catalog/product/m/b/mb03-black-0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
          },
          configurableOptions: {},
          bundleOptions: null,
          itemPrices: {
            priceIncludingTax: {
              value: 41.14,
              currency: "USD",
            },
            originalPrice: {
              value: 38,
              currency: "USD",
            },
            originalPriceIncludingTax: {
              value: 41.135,
              currency: "USD",
            },
            price: {
              value: 38,
              currency: "USD",
            },
          },
          downloadableLinks: null,
        },
        {
          type: "OrderItem",
          eligibleForReturn: true,
          productSku: "MH05-XS-Red",
          productName: "Hollister Backyard Sweatshirt",
          productUrlKey: "hollister-backyard-sweatshirt",
          quantityCanceled: 0,
          quantityInvoiced: 1,
          quantityOrdered: 1,
          quantityRefunded: 0,
          quantityReturned: 0,
          quantityShipped: 1,
          id: "NDEzOQ==",
          discounted: false,
          total: {
            value: 52,
            currency: "USD",
          },
          totalInclTax: {
            value: 52,
            currency: "USD",
          },
          price: {
            value: 52,
            currency: "USD",
          },
          priceInclTax: {
            value: 52,
            currency: "USD",
          },
          totalQuantity: 1,
          regularPrice: {
            value: 52,
            currency: "USD",
          },
          product: {
            __typename: "ConfigurableProduct",
            canonicalUrl: "",
            urlKey: "hollister-backyard-sweatshirt",
            uid: "Mzk0",
            name: "Hollister Backyard Sweatshirt",
            sku: "MH05",
            onlyXLeftInStock: null,
            stockStatus: "IN_STOCK",
            thumbnail: {
              label: "Hollister Backyard Sweatshirt",
              url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
            },
            priceRange: {
              maximumPrice: {
                regularPrice: {
                  currency: "USD",
                  value: 52,
                },
              },
            },
            id: "Mzk0",
            image: "",
            productType: "ConfigurableProduct",
          },
          thumbnail: {
            label: "Hollister Backyard Sweatshirt",
            url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
          },
          configurableOptions: {
            Color: "Red",
            Size: "XS",
          },
          bundleOptions: null,
          itemPrices: {
            priceIncludingTax: {
              value: 56.29,
              currency: "USD",
            },
            originalPrice: {
              value: 52,
              currency: "USD",
            },
            originalPriceIncludingTax: {
              value: 56.29,
              currency: "USD",
            },
            price: {
              value: 52,
              currency: "USD",
            },
          },
          downloadableLinks: null,
        },
        {
          type: "BundleOrderItem",
          eligibleForReturn: true,
          productSku: "24-WG080-24-WG081-blue-24-WG084-24-WG085-24-WG088",
          productName: "Sprite Yoga Companion Kit",
          productUrlKey: "sprite-yoga-companion-kit",
          quantityCanceled: 0,
          quantityInvoiced: 1,
          quantityOrdered: 1,
          quantityRefunded: 0,
          quantityReturned: 0,
          quantityShipped: 1,
          id: "NDE0NQ==",
          discounted: true,
          total: {
            value: 61,
            currency: "USD",
          },
          totalInclTax: {
            value: 61,
            currency: "USD",
          },
          price: {
            value: 61,
            currency: "USD",
          },
          priceInclTax: {
            value: 61,
            currency: "USD",
          },
          totalQuantity: 1,
          regularPrice: {
            value: 77,
            currency: "USD",
          },
          product: {
            __typename: "BundleProduct",
            canonicalUrl: "",
            urlKey: "sprite-yoga-companion-kit",
            uid: "MTU0",
            name: "Sprite Yoga Companion Kit",
            sku: "24-WG080",
            onlyXLeftInStock: null,
            stockStatus: "IN_STOCK",
            thumbnail: {
              label: "Sprite Yoga Companion Kit",
              url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-kit-2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
            },
            priceRange: {
              maximumPrice: {
                regularPrice: {
                  currency: "USD",
                  value: 77,
                },
              },
            },
            id: "MTU0",
            image: "",
            productType: "BundleProduct",
          },
          thumbnail: {
            label: "Sprite Yoga Companion Kit",
            url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-kit-2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
          },
          configurableOptions: {},
          bundleOptions: {
            "Sprite Stasis Ball": "Sprite Stasis Ball 55 cm",
            "Sprite Foam Yoga Brick": "Sprite Foam Yoga Brick",
            "Sprite Yoga Strap": "Sprite Yoga Strap 6 foot",
            "Sprite Foam Roller": "Sprite Foam Roller",
          },
          itemPrices: {
            priceIncludingTax: {
              value: 64.87,
              currency: "USD",
            },
            originalPrice: {
              value: 61,
              currency: "USD",
            },
            originalPriceIncludingTax: {
              value: 61,
              currency: "USD",
            },
            price: {
              value: 61,
              currency: "USD",
            },
          },
          downloadableLinks: null,
        },
        {
          type: "OrderItem",
          eligibleForReturn: true,
          productSku: "MH05-XS-Green",
          productName: "Hollister Backyard Sweatshirt",
          productUrlKey: "hollister-backyard-sweatshirt",
          quantityCanceled: 0,
          quantityInvoiced: 4,
          quantityOrdered: 4,
          quantityRefunded: 0,
          quantityReturned: 0,
          quantityShipped: 4,
          id: "NDE2MA==",
          discounted: false,
          total: {
            value: 208,
            currency: "USD",
          },
          totalInclTax: {
            value: 208,
            currency: "USD",
          },
          price: {
            value: 52,
            currency: "USD",
          },
          priceInclTax: {
            value: 52,
            currency: "USD",
          },
          totalQuantity: 4,
          regularPrice: {
            value: 52,
            currency: "USD",
          },
          product: {
            __typename: "ConfigurableProduct",
            canonicalUrl: "",
            urlKey: "hollister-backyard-sweatshirt",
            uid: "Mzk0",
            name: "Hollister Backyard Sweatshirt",
            sku: "MH05",
            onlyXLeftInStock: null,
            stockStatus: "IN_STOCK",
            thumbnail: {
              label: "Hollister Backyard Sweatshirt",
              url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
            },
            priceRange: {
              maximumPrice: {
                regularPrice: {
                  currency: "USD",
                  value: 52,
                },
              },
            },
            id: "Mzk0",
            image: "",
            productType: "ConfigurableProduct",
          },
          thumbnail: {
            label: "Hollister Backyard Sweatshirt",
            url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
          },
          configurableOptions: {
            Size: "XS",
            Color: "Green",
          },
          bundleOptions: null,
          itemPrices: {
            priceIncludingTax: {
              value: 56.29,
              currency: "USD",
            },
            originalPrice: {
              value: 52,
              currency: "USD",
            },
            originalPriceIncludingTax: {
              value: 56.29,
              currency: "USD",
            },
            price: {
              value: 52,
              currency: "USD",
            },
          },
          downloadableLinks: null,
        },
        {
          type: "OrderItem",
          eligibleForReturn: true,
          productSku: "MH05-XL-Red",
          productName: "Hollister Backyard Sweatshirt",
          productUrlKey: "hollister-backyard-sweatshirt",
          quantityCanceled: 0,
          quantityInvoiced: 4,
          quantityOrdered: 4,
          quantityRefunded: 0,
          quantityReturned: 0,
          quantityShipped: 4,
          id: "NDE2Ng==",
          discounted: false,
          total: {
            value: 208,
            currency: "USD",
          },
          totalInclTax: {
            value: 208,
            currency: "USD",
          },
          price: {
            value: 52,
            currency: "USD",
          },
          priceInclTax: {
            value: 52,
            currency: "USD",
          },
          totalQuantity: 4,
          regularPrice: {
            value: 52,
            currency: "USD",
          },
          product: {
            __typename: "ConfigurableProduct",
            canonicalUrl: "",
            urlKey: "hollister-backyard-sweatshirt",
            uid: "Mzk0",
            name: "Hollister Backyard Sweatshirt",
            sku: "MH05",
            onlyXLeftInStock: null,
            stockStatus: "IN_STOCK",
            thumbnail: {
              label: "Hollister Backyard Sweatshirt",
              url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
            },
            priceRange: {
              maximumPrice: {
                regularPrice: {
                  currency: "USD",
                  value: 52,
                },
              },
            },
            id: "Mzk0",
            image: "",
            productType: "ConfigurableProduct",
          },
          thumbnail: {
            label: "Hollister Backyard Sweatshirt",
            url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
          },
          configurableOptions: {
            Size: "XL",
            Color: "Red",
          },
          bundleOptions: null,
          itemPrices: {
            priceIncludingTax: {
              value: 56.29,
              currency: "USD",
            },
            originalPrice: {
              value: 52,
              currency: "USD",
            },
            originalPriceIncludingTax: {
              value: 56.29,
              currency: "USD",
            },
            price: {
              value: 52,
              currency: "USD",
            },
          },
          downloadableLinks: null,
        },
        {
          type: "BundleOrderItem",
          eligibleForReturn: true,
          productSku: "24-WG080-24-WG083-blue-24-WG084-24-WG087-24-WG088",
          productName: "Sprite Yoga Companion Kit",
          productUrlKey: "sprite-yoga-companion-kit",
          quantityCanceled: 0,
          quantityInvoiced: 1,
          quantityOrdered: 1,
          quantityRefunded: 0,
          quantityReturned: 0,
          quantityShipped: 1,
          id: "NDE3Mg==",
          discounted: false,
          total: {
            value: 77,
            currency: "USD",
          },
          totalInclTax: {
            value: 77,
            currency: "USD",
          },
          price: {
            value: 77,
            currency: "USD",
          },
          priceInclTax: {
            value: 77,
            currency: "USD",
          },
          totalQuantity: 1,
          regularPrice: {
            value: 77,
            currency: "USD",
          },
          product: {
            __typename: "BundleProduct",
            canonicalUrl: "",
            urlKey: "sprite-yoga-companion-kit",
            uid: "MTU0",
            name: "Sprite Yoga Companion Kit",
            sku: "24-WG080",
            onlyXLeftInStock: null,
            stockStatus: "IN_STOCK",
            thumbnail: {
              label: "Sprite Yoga Companion Kit",
              url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-kit-2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
            },
            priceRange: {
              maximumPrice: {
                regularPrice: {
                  currency: "USD",
                  value: 77,
                },
              },
            },
            id: "MTU0",
            image: "",
            productType: "BundleProduct",
          },
          thumbnail: {
            label: "Sprite Yoga Companion Kit",
            url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-kit-2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
          },
          configurableOptions: {},
          bundleOptions: {
            "Sprite Foam Yoga Brick": "Sprite Foam Yoga Brick",
            "Sprite Foam Roller": "Sprite Foam Roller",
            "Sprite Stasis Ball": "Sprite Stasis Ball 75 cm",
            "Sprite Yoga Strap": "Sprite Yoga Strap 10 foot",
          },
          itemPrices: {
            priceIncludingTax: {
              value: 83.36,
              currency: "USD",
            },
            originalPrice: {
              value: 77,
              currency: "USD",
            },
            originalPriceIncludingTax: {
              value: 77,
              currency: "USD",
            },
            price: {
              value: 77,
              currency: "USD",
            },
          },
          downloadableLinks: null,
        },
      ],
      coupons: [],
      shipments: [
        {
          id: "MDAwMDAwMTM0",
          number: "000000134",
          tracking: [],
          comments: [],
          items: [
            {
              id: "MzA1",
              productSku: "24-MB03",
              productName: "Crown Summit Backpack",
              orderItem: {
                __typename: "OrderItem",
                status: "Shipped",
                productSku: "24-MB03",
                eligibleForReturn: true,
                productName: "Crown Summit Backpack",
                productUrlKey: "crown-summit-backpack",
                id: "NDEzNg==",
                quantityOrdered: 7,
                quantityShipped: 7,
                quantityCanceled: 0,
                quantityInvoiced: 7,
                quantityRefunded: 0,
                productSalePrice: {
                  value: 38,
                  currency: "USD",
                },
                selectedOptions: [],
                product: {
                  __typename: "SimpleProduct",
                  canonicalUrl: null,
                  urlKey: "crown-summit-backpack",
                  uid: "Nw==",
                  name: "Crown Summit Backpack",
                  sku: "24-MB03",
                  onlyXLeftInStock: null,
                  stockStatus: "IN_STOCK",
                  thumbnail: {
                    label: "Image",
                    url: "https://mcstaging.aemshop.net/media/catalog/product/m/b/mb03-black-0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                  },
                  priceRange: {
                    maximumPrice: {
                      regularPrice: {
                        currency: "USD",
                        value: 38,
                      },
                    },
                  },
                },
                prices: {
                  priceIncludingTax: {
                    value: 41.14,
                    currency: "USD",
                  },
                  originalPrice: {
                    value: 38,
                    currency: "USD",
                  },
                  originalPriceIncludingTax: {
                    value: 41.135,
                    currency: "USD",
                  },
                  price: {
                    value: 38,
                    currency: "USD",
                  },
                },
              },
            },
            {
              id: "MzA4",
              productSku: "MH05-XS-Red",
              productName: "Hollister Backyard Sweatshirt",
              orderItem: {
                __typename: "OrderItem",
                status: "Shipped",
                productSku: "MH05-XS-Red",
                eligibleForReturn: true,
                productName: "Hollister Backyard Sweatshirt",
                productUrlKey: "hollister-backyard-sweatshirt",
                id: "NDEzOQ==",
                quantityOrdered: 1,
                quantityShipped: 1,
                quantityCanceled: 0,
                quantityInvoiced: 1,
                quantityRefunded: 0,
                productSalePrice: {
                  value: 52,
                  currency: "USD",
                },
                selectedOptions: [
                  {
                    label: "Color",
                    value: "Red",
                  },
                  {
                    label: "Size",
                    value: "XS",
                  },
                ],
                product: {
                  __typename: "ConfigurableProduct",
                  canonicalUrl: null,
                  urlKey: "hollister-backyard-sweatshirt",
                  uid: "Mzk0",
                  name: "Hollister Backyard Sweatshirt",
                  sku: "MH05",
                  onlyXLeftInStock: null,
                  stockStatus: "IN_STOCK",
                  thumbnail: {
                    label: "Hollister Backyard Sweatshirt",
                    url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                  },
                  priceRange: {
                    maximumPrice: {
                      regularPrice: {
                        currency: "USD",
                        value: 52,
                      },
                    },
                  },
                },
                prices: {
                  priceIncludingTax: {
                    value: 56.29,
                    currency: "USD",
                  },
                  originalPrice: {
                    value: 52,
                    currency: "USD",
                  },
                  originalPriceIncludingTax: {
                    value: 56.29,
                    currency: "USD",
                  },
                  price: {
                    value: 52,
                    currency: "USD",
                  },
                },
              },
            },
            {
              id: "MzEx",
              productSku: "24-WG080-24-WG081-blue-24-WG084-24-WG085-24-WG088",
              productName: "Sprite Yoga Companion Kit",
              orderItem: {
                __typename: "BundleOrderItem",
                status: "Shipped",
                productSku: "24-WG080-24-WG081-blue-24-WG084-24-WG085-24-WG088",
                eligibleForReturn: true,
                productName: "Sprite Yoga Companion Kit",
                productUrlKey: "sprite-yoga-companion-kit",
                id: "NDE0NQ==",
                quantityOrdered: 1,
                quantityShipped: 1,
                quantityCanceled: 0,
                quantityInvoiced: 1,
                quantityRefunded: 0,
                productSalePrice: {
                  value: 61,
                  currency: "USD",
                },
                selectedOptions: [],
                product: {
                  __typename: "BundleProduct",
                  canonicalUrl: null,
                  urlKey: "sprite-yoga-companion-kit",
                  uid: "MTU0",
                  name: "Sprite Yoga Companion Kit",
                  sku: "24-WG080",
                  onlyXLeftInStock: null,
                  stockStatus: "IN_STOCK",
                  thumbnail: {
                    label: "Sprite Yoga Companion Kit",
                    url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-kit-2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                  },
                  priceRange: {
                    maximumPrice: {
                      regularPrice: {
                        currency: "USD",
                        value: 77,
                      },
                    },
                  },
                },
                prices: {
                  priceIncludingTax: {
                    value: 64.87,
                    currency: "USD",
                  },
                  originalPrice: {
                    value: 61,
                    currency: "USD",
                  },
                  originalPriceIncludingTax: {
                    value: 61,
                    currency: "USD",
                  },
                  price: {
                    value: 61,
                    currency: "USD",
                  },
                },
              },
            },
            {
              id: "MzE0",
              productSku: "MH05-XS-Green",
              productName: "Hollister Backyard Sweatshirt",
              orderItem: {
                __typename: "OrderItem",
                status: "Shipped",
                productSku: "MH05-XS-Green",
                eligibleForReturn: true,
                productName: "Hollister Backyard Sweatshirt",
                productUrlKey: "hollister-backyard-sweatshirt",
                id: "NDE2MA==",
                quantityOrdered: 4,
                quantityShipped: 4,
                quantityCanceled: 0,
                quantityInvoiced: 4,
                quantityRefunded: 0,
                productSalePrice: {
                  value: 52,
                  currency: "USD",
                },
                selectedOptions: [
                  {
                    label: "Size",
                    value: "XS",
                  },
                  {
                    label: "Color",
                    value: "Green",
                  },
                ],
                product: {
                  __typename: "ConfigurableProduct",
                  canonicalUrl: null,
                  urlKey: "hollister-backyard-sweatshirt",
                  uid: "Mzk0",
                  name: "Hollister Backyard Sweatshirt",
                  sku: "MH05",
                  onlyXLeftInStock: null,
                  stockStatus: "IN_STOCK",
                  thumbnail: {
                    label: "Hollister Backyard Sweatshirt",
                    url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                  },
                  priceRange: {
                    maximumPrice: {
                      regularPrice: {
                        currency: "USD",
                        value: 52,
                      },
                    },
                  },
                },
                prices: {
                  priceIncludingTax: {
                    value: 56.29,
                    currency: "USD",
                  },
                  originalPrice: {
                    value: 52,
                    currency: "USD",
                  },
                  originalPriceIncludingTax: {
                    value: 56.29,
                    currency: "USD",
                  },
                  price: {
                    value: 52,
                    currency: "USD",
                  },
                },
              },
            },
            {
              id: "MzE3",
              productSku: "MH05-XL-Red",
              productName: "Hollister Backyard Sweatshirt",
              orderItem: {
                __typename: "OrderItem",
                status: "Shipped",
                productSku: "MH05-XL-Red",
                eligibleForReturn: true,
                productName: "Hollister Backyard Sweatshirt",
                productUrlKey: "hollister-backyard-sweatshirt",
                id: "NDE2Ng==",
                quantityOrdered: 4,
                quantityShipped: 4,
                quantityCanceled: 0,
                quantityInvoiced: 4,
                quantityRefunded: 0,
                productSalePrice: {
                  value: 52,
                  currency: "USD",
                },
                selectedOptions: [
                  {
                    label: "Size",
                    value: "XL",
                  },
                  {
                    label: "Color",
                    value: "Red",
                  },
                ],
                product: {
                  __typename: "ConfigurableProduct",
                  canonicalUrl: null,
                  urlKey: "hollister-backyard-sweatshirt",
                  uid: "Mzk0",
                  name: "Hollister Backyard Sweatshirt",
                  sku: "MH05",
                  onlyXLeftInStock: null,
                  stockStatus: "IN_STOCK",
                  thumbnail: {
                    label: "Hollister Backyard Sweatshirt",
                    url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                  },
                  priceRange: {
                    maximumPrice: {
                      regularPrice: {
                        currency: "USD",
                        value: 52,
                      },
                    },
                  },
                },
                prices: {
                  priceIncludingTax: {
                    value: 56.29,
                    currency: "USD",
                  },
                  originalPrice: {
                    value: 52,
                    currency: "USD",
                  },
                  originalPriceIncludingTax: {
                    value: 56.29,
                    currency: "USD",
                  },
                  price: {
                    value: 52,
                    currency: "USD",
                  },
                },
              },
            },
            {
              id: "MzIw",
              productSku: "24-WG080-24-WG083-blue-24-WG084-24-WG087-24-WG088",
              productName: "Sprite Yoga Companion Kit",
              orderItem: {
                __typename: "BundleOrderItem",
                status: "Shipped",
                productSku: "24-WG080-24-WG083-blue-24-WG084-24-WG087-24-WG088",
                eligibleForReturn: true,
                productName: "Sprite Yoga Companion Kit",
                productUrlKey: "sprite-yoga-companion-kit",
                id: "NDE3Mg==",
                quantityOrdered: 1,
                quantityShipped: 1,
                quantityCanceled: 0,
                quantityInvoiced: 1,
                quantityRefunded: 0,
                productSalePrice: {
                  value: 77,
                  currency: "USD",
                },
                selectedOptions: [],
                product: {
                  __typename: "BundleProduct",
                  canonicalUrl: null,
                  urlKey: "sprite-yoga-companion-kit",
                  uid: "MTU0",
                  name: "Sprite Yoga Companion Kit",
                  sku: "24-WG080",
                  onlyXLeftInStock: null,
                  stockStatus: "IN_STOCK",
                  thumbnail: {
                    label: "Sprite Yoga Companion Kit",
                    url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-kit-2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
                  },
                  priceRange: {
                    maximumPrice: {
                      regularPrice: {
                        currency: "USD",
                        value: 77,
                      },
                    },
                  },
                },
                prices: {
                  priceIncludingTax: {
                    value: 83.36,
                    currency: "USD",
                  },
                  originalPrice: {
                    value: 77,
                    currency: "USD",
                  },
                  originalPriceIncludingTax: {
                    value: 77,
                    currency: "USD",
                  },
                  price: {
                    value: 77,
                    currency: "USD",
                  },
                },
              },
            },
          ],
        },
      ],
      payments: [
        {
          code: "checkmo",
          name: "Check / Money order",
        },
      ],
      shippingAddress: {
        city: "San Francisco",
        company: null,
        countryCode: "US",
        fax: null,
        firstName: "John",
        lastName: "Doe",
        middleName: null,
        postCode: "94107",
        prefix: null,
        region: "California",
        regionId: "34",
        street: ["Street 1", "Street 2"],
        suffix: null,
        telephone: "1234567890",
        vatId: "US123",
      },
      billingAddress: {
        city: "San Francisco",
        company: null,
        countryCode: "US",
        fax: null,
        firstName: "John",
        lastName: "Doe",
        middleName: null,
        postCode: "94107",
        prefix: null,
        region: "California",
        regionId: "34",
        street: ["Street 1", "Street 2"],
        suffix: null,
        telephone: "1234567890",
        vatId: "US123",
      },
      items: [
        {
          type: "OrderItem",
          eligibleForReturn: true,
          productSku: "24-MB03",
          productName: "Crown Summit Backpack",
          productUrlKey: "crown-summit-backpack",
          quantityCanceled: 0,
          quantityInvoiced: 7,
          quantityOrdered: 7,
          quantityRefunded: 0,
          quantityReturned: 0,
          quantityShipped: 7,
          id: "NDEzNg==",
          discounted: false,
          total: {
            value: 266,
            currency: "USD",
          },
          totalInclTax: {
            value: 266,
            currency: "USD",
          },
          price: {
            value: 38,
            currency: "USD",
          },
          priceInclTax: {
            value: 38,
            currency: "USD",
          },
          totalQuantity: 7,
          regularPrice: {
            value: 38,
            currency: "USD",
          },
          product: {
            __typename: "SimpleProduct",
            canonicalUrl: "",
            urlKey: "crown-summit-backpack",
            uid: "Nw==",
            name: "Crown Summit Backpack",
            sku: "24-MB03",
            onlyXLeftInStock: null,
            stockStatus: "IN_STOCK",
            thumbnail: {
              label: "Image",
              url: "https://mcstaging.aemshop.net/media/catalog/product/m/b/mb03-black-0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
            },
            priceRange: {
              maximumPrice: {
                regularPrice: {
                  currency: "USD",
                  value: 38,
                },
              },
            },
            id: "Nw==",
            image: "",
            productType: "SimpleProduct",
          },
          thumbnail: {
            label: "Image",
            url: "https://mcstaging.aemshop.net/media/catalog/product/m/b/mb03-black-0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
          },
          configurableOptions: {},
          bundleOptions: null,
          itemPrices: {
            priceIncludingTax: {
              value: 41.14,
              currency: "USD",
            },
            originalPrice: {
              value: 38,
              currency: "USD",
            },
            originalPriceIncludingTax: {
              value: 41.135,
              currency: "USD",
            },
            price: {
              value: 38,
              currency: "USD",
            },
          },
          downloadableLinks: null,
        },
        {
          type: "OrderItem",
          eligibleForReturn: true,
          productSku: "MH05-XS-Red",
          productName: "Hollister Backyard Sweatshirt",
          productUrlKey: "hollister-backyard-sweatshirt",
          quantityCanceled: 0,
          quantityInvoiced: 1,
          quantityOrdered: 1,
          quantityRefunded: 0,
          quantityReturned: 0,
          quantityShipped: 1,
          id: "NDEzOQ==",
          discounted: false,
          total: {
            value: 52,
            currency: "USD",
          },
          totalInclTax: {
            value: 52,
            currency: "USD",
          },
          price: {
            value: 52,
            currency: "USD",
          },
          priceInclTax: {
            value: 52,
            currency: "USD",
          },
          totalQuantity: 1,
          regularPrice: {
            value: 52,
            currency: "USD",
          },
          product: {
            __typename: "ConfigurableProduct",
            canonicalUrl: "",
            urlKey: "hollister-backyard-sweatshirt",
            uid: "Mzk0",
            name: "Hollister Backyard Sweatshirt",
            sku: "MH05",
            onlyXLeftInStock: null,
            stockStatus: "IN_STOCK",
            thumbnail: {
              label: "Hollister Backyard Sweatshirt",
              url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
            },
            priceRange: {
              maximumPrice: {
                regularPrice: {
                  currency: "USD",
                  value: 52,
                },
              },
            },
            id: "Mzk0",
            image: "",
            productType: "ConfigurableProduct",
          },
          thumbnail: {
            label: "Hollister Backyard Sweatshirt",
            url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
          },
          configurableOptions: {
            Color: "Red",
            Size: "XS",
          },
          bundleOptions: null,
          itemPrices: {
            priceIncludingTax: {
              value: 56.29,
              currency: "USD",
            },
            originalPrice: {
              value: 52,
              currency: "USD",
            },
            originalPriceIncludingTax: {
              value: 56.29,
              currency: "USD",
            },
            price: {
              value: 52,
              currency: "USD",
            },
          },
          downloadableLinks: null,
        },
        {
          type: "BundleOrderItem",
          eligibleForReturn: true,
          productSku: "24-WG080-24-WG081-blue-24-WG084-24-WG085-24-WG088",
          productName: "Sprite Yoga Companion Kit",
          productUrlKey: "sprite-yoga-companion-kit",
          quantityCanceled: 0,
          quantityInvoiced: 1,
          quantityOrdered: 1,
          quantityRefunded: 0,
          quantityReturned: 0,
          quantityShipped: 1,
          id: "NDE0NQ==",
          discounted: true,
          total: {
            value: 61,
            currency: "USD",
          },
          totalInclTax: {
            value: 61,
            currency: "USD",
          },
          price: {
            value: 61,
            currency: "USD",
          },
          priceInclTax: {
            value: 61,
            currency: "USD",
          },
          totalQuantity: 1,
          regularPrice: {
            value: 77,
            currency: "USD",
          },
          product: {
            __typename: "BundleProduct",
            canonicalUrl: "",
            urlKey: "sprite-yoga-companion-kit",
            uid: "MTU0",
            name: "Sprite Yoga Companion Kit",
            sku: "24-WG080",
            onlyXLeftInStock: null,
            stockStatus: "IN_STOCK",
            thumbnail: {
              label: "Sprite Yoga Companion Kit",
              url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-kit-2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
            },
            priceRange: {
              maximumPrice: {
                regularPrice: {
                  currency: "USD",
                  value: 77,
                },
              },
            },
            id: "MTU0",
            image: "",
            productType: "BundleProduct",
          },
          thumbnail: {
            label: "Sprite Yoga Companion Kit",
            url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-kit-2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
          },
          configurableOptions: {},
          bundleOptions: {
            "Sprite Stasis Ball": "Sprite Stasis Ball 55 cm",
            "Sprite Foam Yoga Brick": "Sprite Foam Yoga Brick",
            "Sprite Yoga Strap": "Sprite Yoga Strap 6 foot",
            "Sprite Foam Roller": "Sprite Foam Roller",
          },
          itemPrices: {
            priceIncludingTax: {
              value: 64.87,
              currency: "USD",
            },
            originalPrice: {
              value: 61,
              currency: "USD",
            },
            originalPriceIncludingTax: {
              value: 61,
              currency: "USD",
            },
            price: {
              value: 61,
              currency: "USD",
            },
          },
          downloadableLinks: null,
        },
        {
          type: "OrderItem",
          eligibleForReturn: true,
          productSku: "MH05-XS-Green",
          productName: "Hollister Backyard Sweatshirt",
          productUrlKey: "hollister-backyard-sweatshirt",
          quantityCanceled: 0,
          quantityInvoiced: 4,
          quantityOrdered: 4,
          quantityRefunded: 0,
          quantityReturned: 0,
          quantityShipped: 4,
          id: "NDE2MA==",
          discounted: false,
          total: {
            value: 208,
            currency: "USD",
          },
          totalInclTax: {
            value: 208,
            currency: "USD",
          },
          price: {
            value: 52,
            currency: "USD",
          },
          priceInclTax: {
            value: 52,
            currency: "USD",
          },
          totalQuantity: 4,
          regularPrice: {
            value: 52,
            currency: "USD",
          },
          product: {
            __typename: "ConfigurableProduct",
            canonicalUrl: "",
            urlKey: "hollister-backyard-sweatshirt",
            uid: "Mzk0",
            name: "Hollister Backyard Sweatshirt",
            sku: "MH05",
            onlyXLeftInStock: null,
            stockStatus: "IN_STOCK",
            thumbnail: {
              label: "Hollister Backyard Sweatshirt",
              url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
            },
            priceRange: {
              maximumPrice: {
                regularPrice: {
                  currency: "USD",
                  value: 52,
                },
              },
            },
            id: "Mzk0",
            image: "",
            productType: "ConfigurableProduct",
          },
          thumbnail: {
            label: "Hollister Backyard Sweatshirt",
            url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
          },
          configurableOptions: {
            Size: "XS",
            Color: "Green",
          },
          bundleOptions: null,
          itemPrices: {
            priceIncludingTax: {
              value: 56.29,
              currency: "USD",
            },
            originalPrice: {
              value: 52,
              currency: "USD",
            },
            originalPriceIncludingTax: {
              value: 56.29,
              currency: "USD",
            },
            price: {
              value: 52,
              currency: "USD",
            },
          },
          downloadableLinks: null,
        },
        {
          type: "OrderItem",
          eligibleForReturn: true,
          productSku: "MH05-XL-Red",
          productName: "Hollister Backyard Sweatshirt",
          productUrlKey: "hollister-backyard-sweatshirt",
          quantityCanceled: 0,
          quantityInvoiced: 4,
          quantityOrdered: 4,
          quantityRefunded: 0,
          quantityReturned: 0,
          quantityShipped: 4,
          id: "NDE2Ng==",
          discounted: false,
          total: {
            value: 208,
            currency: "USD",
          },
          totalInclTax: {
            value: 208,
            currency: "USD",
          },
          price: {
            value: 52,
            currency: "USD",
          },
          priceInclTax: {
            value: 52,
            currency: "USD",
          },
          totalQuantity: 4,
          regularPrice: {
            value: 52,
            currency: "USD",
          },
          product: {
            __typename: "ConfigurableProduct",
            canonicalUrl: "",
            urlKey: "hollister-backyard-sweatshirt",
            uid: "Mzk0",
            name: "Hollister Backyard Sweatshirt",
            sku: "MH05",
            onlyXLeftInStock: null,
            stockStatus: "IN_STOCK",
            thumbnail: {
              label: "Hollister Backyard Sweatshirt",
              url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
            },
            priceRange: {
              maximumPrice: {
                regularPrice: {
                  currency: "USD",
                  value: 52,
                },
              },
            },
            id: "Mzk0",
            image: "",
            productType: "ConfigurableProduct",
          },
          thumbnail: {
            label: "Hollister Backyard Sweatshirt",
            url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
          },
          configurableOptions: {
            Size: "XL",
            Color: "Red",
          },
          bundleOptions: null,
          itemPrices: {
            priceIncludingTax: {
              value: 56.29,
              currency: "USD",
            },
            originalPrice: {
              value: 52,
              currency: "USD",
            },
            originalPriceIncludingTax: {
              value: 56.29,
              currency: "USD",
            },
            price: {
              value: 52,
              currency: "USD",
            },
          },
          downloadableLinks: null,
        },
        {
          type: "BundleOrderItem",
          eligibleForReturn: true,
          productSku: "24-WG080-24-WG083-blue-24-WG084-24-WG087-24-WG088",
          productName: "Sprite Yoga Companion Kit",
          productUrlKey: "sprite-yoga-companion-kit",
          quantityCanceled: 0,
          quantityInvoiced: 1,
          quantityOrdered: 1,
          quantityRefunded: 0,
          quantityReturned: 0,
          quantityShipped: 1,
          id: "NDE3Mg==",
          discounted: false,
          total: {
            value: 77,
            currency: "USD",
          },
          totalInclTax: {
            value: 77,
            currency: "USD",
          },
          price: {
            value: 77,
            currency: "USD",
          },
          priceInclTax: {
            value: 77,
            currency: "USD",
          },
          totalQuantity: 1,
          regularPrice: {
            value: 77,
            currency: "USD",
          },
          product: {
            __typename: "BundleProduct",
            canonicalUrl: "",
            urlKey: "sprite-yoga-companion-kit",
            uid: "MTU0",
            name: "Sprite Yoga Companion Kit",
            sku: "24-WG080",
            onlyXLeftInStock: null,
            stockStatus: "IN_STOCK",
            thumbnail: {
              label: "Sprite Yoga Companion Kit",
              url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-kit-2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
            },
            priceRange: {
              maximumPrice: {
                regularPrice: {
                  currency: "USD",
                  value: 77,
                },
              },
            },
            id: "MTU0",
            image: "",
            productType: "BundleProduct",
          },
          thumbnail: {
            label: "Sprite Yoga Companion Kit",
            url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-kit-2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
          },
          configurableOptions: {},
          bundleOptions: {
            "Sprite Foam Yoga Brick": "Sprite Foam Yoga Brick",
            "Sprite Foam Roller": "Sprite Foam Roller",
            "Sprite Stasis Ball": "Sprite Stasis Ball 75 cm",
            "Sprite Yoga Strap": "Sprite Yoga Strap 10 foot",
          },
          itemPrices: {
            priceIncludingTax: {
              value: 83.36,
              currency: "USD",
            },
            originalPrice: {
              value: 77,
              currency: "USD",
            },
            originalPriceIncludingTax: {
              value: 77,
              currency: "USD",
            },
            price: {
              value: 77,
              currency: "USD",
            },
          },
          downloadableLinks: null,
        },
      ],
      itemsEligibleForReturn2: [
        {
          type: "OrderItem",
          eligibleForReturn: true,
          productSku: "24-MB03",
          productName: "Crown Summit Backpack",
          productUrlKey: "crown-summit-backpack",
          quantityCanceled: 0,
          quantityInvoiced: 7,
          quantityOrdered: 7,
          quantityRefunded: 0,
          quantityReturned: 0,
          quantityShipped: 7,
          id: "NDEzNg==",
          discounted: false,
          total: {
            value: 266,
            currency: "USD",
          },
          totalInclTax: {
            value: 266,
            currency: "USD",
          },
          price: {
            value: 38,
            currency: "USD",
          },
          priceInclTax: {
            value: 38,
            currency: "USD",
          },
          totalQuantity: 7,
          regularPrice: {
            value: 38,
            currency: "USD",
          },
          product: {
            __typename: "SimpleProduct",
            canonicalUrl: "",
            urlKey: "crown-summit-backpack",
            uid: "Nw==",
            name: "Crown Summit Backpack",
            sku: "24-MB03",
            onlyXLeftInStock: null,
            stockStatus: "IN_STOCK",
            thumbnail: {
              label: "Image",
              url: "https://mcstaging.aemshop.net/media/catalog/product/m/b/mb03-black-0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
            },
            priceRange: {
              maximumPrice: {
                regularPrice: {
                  currency: "USD",
                  value: 38,
                },
              },
            },
            id: "Nw==",
            image: "",
            productType: "SimpleProduct",
          },
          thumbnail: {
            label: "Image",
            url: "https://mcstaging.aemshop.net/media/catalog/product/m/b/mb03-black-0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
          },
          configurableOptions: {},
          bundleOptions: null,
          itemPrices: {
            priceIncludingTax: {
              value: 41.14,
              currency: "USD",
            },
            originalPrice: {
              value: 38,
              currency: "USD",
            },
            originalPriceIncludingTax: {
              value: 41.135,
              currency: "USD",
            },
            price: {
              value: 38,
              currency: "USD",
            },
          },
          downloadableLinks: null,
        },
        {
          type: "OrderItem",
          eligibleForReturn: true,
          productSku: "MH05-XS-Red",
          productName: "Hollister Backyard Sweatshirt",
          productUrlKey: "hollister-backyard-sweatshirt",
          quantityCanceled: 0,
          quantityInvoiced: 1,
          quantityOrdered: 1,
          quantityRefunded: 0,
          quantityReturned: 0,
          quantityShipped: 1,
          id: "NDEzOQ==",
          discounted: false,
          total: {
            value: 52,
            currency: "USD",
          },
          totalInclTax: {
            value: 52,
            currency: "USD",
          },
          price: {
            value: 52,
            currency: "USD",
          },
          priceInclTax: {
            value: 52,
            currency: "USD",
          },
          totalQuantity: 1,
          regularPrice: {
            value: 52,
            currency: "USD",
          },
          product: {
            __typename: "ConfigurableProduct",
            canonicalUrl: "",
            urlKey: "hollister-backyard-sweatshirt",
            uid: "Mzk0",
            name: "Hollister Backyard Sweatshirt",
            sku: "MH05",
            onlyXLeftInStock: null,
            stockStatus: "IN_STOCK",
            thumbnail: {
              label: "Hollister Backyard Sweatshirt",
              url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
            },
            priceRange: {
              maximumPrice: {
                regularPrice: {
                  currency: "USD",
                  value: 52,
                },
              },
            },
            id: "Mzk0",
            image: "",
            productType: "ConfigurableProduct",
          },
          thumbnail: {
            label: "Hollister Backyard Sweatshirt",
            url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
          },
          configurableOptions: {
            Color: "Red",
            Size: "XS",
          },
          bundleOptions: null,
          itemPrices: {
            priceIncludingTax: {
              value: 56.29,
              currency: "USD",
            },
            originalPrice: {
              value: 52,
              currency: "USD",
            },
            originalPriceIncludingTax: {
              value: 56.29,
              currency: "USD",
            },
            price: {
              value: 52,
              currency: "USD",
            },
          },
          downloadableLinks: null,
        },
        {
          type: "OrderItem",
          eligibleForReturn: true,
          productSku: "MH05-XS-Red",
          productName: "Hollister Backyard Sweatshirt-XS-Red",
          productUrlKey: "hollister-backyard-sweatshirt-xs-red",
          quantityCanceled: 0,
          quantityInvoiced: 1,
          quantityOrdered: 1,
          quantityRefunded: 0,
          quantityReturned: 0,
          quantityShipped: 0,
          id: "NDE0Mg==",
          discounted: true,
          total: {
            value: 0,
            currency: "USD",
          },
          totalInclTax: {
            value: 0,
            currency: "USD",
          },
          price: {
            value: 0,
            currency: "USD",
          },
          priceInclTax: {
            value: 0,
            currency: "USD",
          },
          totalQuantity: 1,
          regularPrice: {
            value: 52,
            currency: "USD",
          },
          product: {
            __typename: "SimpleProduct",
            canonicalUrl: "",
            urlKey: "hollister-backyard-sweatshirt-xs-red",
            uid: "MzUy",
            name: "Hollister Backyard Sweatshirt-XS-Red",
            sku: "MH05-XS-Red",
            onlyXLeftInStock: null,
            stockStatus: "IN_STOCK",
            thumbnail: {
              label: "Hollister Backyard Sweatshirt-XS-Red",
              url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-red_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
            },
            priceRange: {
              maximumPrice: {
                regularPrice: {
                  currency: "USD",
                  value: 52,
                },
              },
            },
            id: "MzUy",
            image: "",
            productType: "SimpleProduct",
          },
          thumbnail: {
            label: "Hollister Backyard Sweatshirt-XS-Red",
            url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-red_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
          },
          configurableOptions: {},
          bundleOptions: null,
          itemPrices: {
            priceIncludingTax: {
              value: 0,
              currency: "USD",
            },
            originalPrice: {
              value: 0,
              currency: "USD",
            },
            originalPriceIncludingTax: {
              value: 0,
              currency: "USD",
            },
            price: {
              value: 0,
              currency: "USD",
            },
          },
          downloadableLinks: null,
        },
        {
          type: "BundleOrderItem",
          eligibleForReturn: true,
          productSku: "24-WG080-24-WG081-blue-24-WG084-24-WG085-24-WG088",
          productName: "Sprite Yoga Companion Kit",
          productUrlKey: "sprite-yoga-companion-kit",
          quantityCanceled: 0,
          quantityInvoiced: 1,
          quantityOrdered: 1,
          quantityRefunded: 0,
          quantityReturned: 0,
          quantityShipped: 1,
          id: "NDE0NQ==",
          discounted: true,
          total: {
            value: 61,
            currency: "USD",
          },
          totalInclTax: {
            value: 61,
            currency: "USD",
          },
          price: {
            value: 61,
            currency: "USD",
          },
          priceInclTax: {
            value: 61,
            currency: "USD",
          },
          totalQuantity: 1,
          regularPrice: {
            value: 77,
            currency: "USD",
          },
          product: {
            __typename: "BundleProduct",
            canonicalUrl: "",
            urlKey: "sprite-yoga-companion-kit",
            uid: "MTU0",
            name: "Sprite Yoga Companion Kit",
            sku: "24-WG080",
            onlyXLeftInStock: null,
            stockStatus: "IN_STOCK",
            thumbnail: {
              label: "Sprite Yoga Companion Kit",
              url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-kit-2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
            },
            priceRange: {
              maximumPrice: {
                regularPrice: {
                  currency: "USD",
                  value: 77,
                },
              },
            },
            id: "MTU0",
            image: "",
            productType: "BundleProduct",
          },
          thumbnail: {
            label: "Sprite Yoga Companion Kit",
            url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-kit-2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
          },
          configurableOptions: {},
          bundleOptions: {
            "Sprite Stasis Ball": "",
            "Sprite Foam Yoga Brick": "",
            "Sprite Yoga Strap": "",
            "Sprite Foam Roller": "",
          },
          itemPrices: {
            priceIncludingTax: {
              value: 64.87,
              currency: "USD",
            },
            originalPrice: {
              value: 61,
              currency: "USD",
            },
            originalPriceIncludingTax: {
              value: 61,
              currency: "USD",
            },
            price: {
              value: 61,
              currency: "USD",
            },
          },
          downloadableLinks: null,
        },
        {
          type: "OrderItem",
          eligibleForReturn: true,
          productSku: "24-WG081-blue",
          productName: "Sprite Stasis Ball 55 cm",
          productUrlKey: "sprite-stasis-ball-55-cm-blue",
          quantityCanceled: 0,
          quantityInvoiced: 1,
          quantityOrdered: 1,
          quantityRefunded: 0,
          quantityReturned: 0,
          quantityShipped: 0,
          id: "NDE0OA==",
          discounted: false,
          total: {
            value: 23,
            currency: "USD",
          },
          totalInclTax: {
            value: 23,
            currency: "USD",
          },
          price: {
            value: 23,
            currency: "USD",
          },
          priceInclTax: {
            value: 23,
            currency: "USD",
          },
          totalQuantity: 1,
          regularPrice: {
            value: 23,
            currency: "USD",
          },
          product: {
            __typename: "SimpleProduct",
            canonicalUrl: "",
            urlKey: "sprite-stasis-ball-55-cm-blue",
            uid: "NzY=",
            name: "Sprite Stasis Ball 55 cm",
            sku: "24-WG081-blue",
            onlyXLeftInStock: null,
            stockStatus: "IN_STOCK",
            thumbnail: {
              label: "Sprite Stasis Ball 55 cm",
              url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-stability-ball.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
            },
            priceRange: {
              maximumPrice: {
                regularPrice: {
                  currency: "USD",
                  value: 23,
                },
              },
            },
            id: "NzY=",
            image: "",
            productType: "SimpleProduct",
          },
          thumbnail: {
            label: "Sprite Stasis Ball 55 cm",
            url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-stability-ball.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
          },
          configurableOptions: {},
          bundleOptions: null,
          itemPrices: {
            priceIncludingTax: {
              value: 24.89,
              currency: "USD",
            },
            originalPrice: {
              value: 23,
              currency: "USD",
            },
            originalPriceIncludingTax: {
              value: 24.8975,
              currency: "USD",
            },
            price: {
              value: 23,
              currency: "USD",
            },
          },
          downloadableLinks: null,
        },
        {
          type: "OrderItem",
          eligibleForReturn: true,
          productSku: "24-WG084",
          productName: "Sprite Foam Yoga Brick",
          productUrlKey: "sprite-foam-yoga-brick",
          quantityCanceled: 0,
          quantityInvoiced: 1,
          quantityOrdered: 1,
          quantityRefunded: 0,
          quantityReturned: 0,
          quantityShipped: 0,
          id: "NDE1MQ==",
          discounted: false,
          total: {
            value: 5,
            currency: "USD",
          },
          totalInclTax: {
            value: 5,
            currency: "USD",
          },
          price: {
            value: 5,
            currency: "USD",
          },
          priceInclTax: {
            value: 5,
            currency: "USD",
          },
          totalQuantity: 1,
          regularPrice: {
            value: 5,
            currency: "USD",
          },
          product: {
            __typename: "SimpleProduct",
            canonicalUrl: "",
            urlKey: "sprite-foam-yoga-brick",
            uid: "NjE=",
            name: "Sprite Foam Yoga Brick",
            sku: "24-WG084",
            onlyXLeftInStock: null,
            stockStatus: "IN_STOCK",
            thumbnail: {
              label: "Sprite Foam Yoga Brick",
              url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-brick.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
            },
            priceRange: {
              maximumPrice: {
                regularPrice: {
                  currency: "USD",
                  value: 5,
                },
              },
            },
            id: "NjE=",
            image: "",
            productType: "SimpleProduct",
          },
          thumbnail: {
            label: "Sprite Foam Yoga Brick",
            url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-brick.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
          },
          configurableOptions: {},
          bundleOptions: null,
          itemPrices: {
            priceIncludingTax: {
              value: 5.42,
              currency: "USD",
            },
            originalPrice: {
              value: 5,
              currency: "USD",
            },
            originalPriceIncludingTax: {
              value: 5.4125,
              currency: "USD",
            },
            price: {
              value: 5,
              currency: "USD",
            },
          },
          downloadableLinks: null,
        },
        {
          type: "OrderItem",
          eligibleForReturn: true,
          productSku: "24-WG085",
          productName: "Sprite Yoga Strap 6 foot",
          productUrlKey: "sprite-yoga-strap-6-foot",
          quantityCanceled: 0,
          quantityInvoiced: 1,
          quantityOrdered: 1,
          quantityRefunded: 0,
          quantityReturned: 0,
          quantityShipped: 0,
          id: "NDE1NA==",
          discounted: false,
          total: {
            value: 14,
            currency: "USD",
          },
          totalInclTax: {
            value: 14,
            currency: "USD",
          },
          price: {
            value: 14,
            currency: "USD",
          },
          priceInclTax: {
            value: 14,
            currency: "USD",
          },
          totalQuantity: 1,
          regularPrice: {
            value: 14,
            currency: "USD",
          },
          product: {
            __typename: "SimpleProduct",
            canonicalUrl: "",
            urlKey: "sprite-yoga-strap-6-foot",
            uid: "OTc=",
            name: "Sprite Yoga Strap 6 foot",
            sku: "24-WG085",
            onlyXLeftInStock: null,
            stockStatus: "IN_STOCK",
            thumbnail: {
              label: "Sprite Yoga Strap 6 foot",
              url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-strap.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
            },
            priceRange: {
              maximumPrice: {
                regularPrice: {
                  currency: "USD",
                  value: 14,
                },
              },
            },
            id: "OTc=",
            image: "",
            productType: "SimpleProduct",
          },
          thumbnail: {
            label: "Sprite Yoga Strap 6 foot",
            url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-strap.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
          },
          configurableOptions: {},
          bundleOptions: null,
          itemPrices: {
            priceIncludingTax: {
              value: 14,
              currency: "USD",
            },
            originalPrice: {
              value: 14,
              currency: "USD",
            },
            originalPriceIncludingTax: {
              value: 14,
              currency: "USD",
            },
            price: {
              value: 14,
              currency: "USD",
            },
          },
          downloadableLinks: null,
        },
        {
          type: "OrderItem",
          eligibleForReturn: true,
          productSku: "24-WG088",
          productName: "Sprite Foam Roller",
          productUrlKey: "sprite-foam-roller",
          quantityCanceled: 0,
          quantityInvoiced: 1,
          quantityOrdered: 1,
          quantityRefunded: 0,
          quantityReturned: 0,
          quantityShipped: 0,
          id: "NDE1Nw==",
          discounted: false,
          total: {
            value: 19,
            currency: "USD",
          },
          totalInclTax: {
            value: 19,
            currency: "USD",
          },
          price: {
            value: 19,
            currency: "USD",
          },
          priceInclTax: {
            value: 19,
            currency: "USD",
          },
          totalQuantity: 1,
          regularPrice: {
            value: 19,
            currency: "USD",
          },
          product: {
            __typename: "SimpleProduct",
            canonicalUrl: "",
            urlKey: "sprite-foam-roller",
            uid: "NjQ=",
            name: "Sprite Foam Roller",
            sku: "24-WG088",
            onlyXLeftInStock: null,
            stockStatus: "IN_STOCK",
            thumbnail: {
              label: "Sprite Foam Roller",
              url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-foam-roller.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
            },
            priceRange: {
              maximumPrice: {
                regularPrice: {
                  currency: "USD",
                  value: 19,
                },
              },
            },
            id: "NjQ=",
            image: "",
            productType: "SimpleProduct",
          },
          thumbnail: {
            label: "Sprite Foam Roller",
            url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-foam-roller.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
          },
          configurableOptions: {},
          bundleOptions: null,
          itemPrices: {
            priceIncludingTax: {
              value: 20.56,
              currency: "USD",
            },
            originalPrice: {
              value: 19,
              currency: "USD",
            },
            originalPriceIncludingTax: {
              value: 20.5675,
              currency: "USD",
            },
            price: {
              value: 19,
              currency: "USD",
            },
          },
          downloadableLinks: null,
        },
        {
          type: "OrderItem",
          eligibleForReturn: true,
          productSku: "MH05-XS-Green",
          productName: "Hollister Backyard Sweatshirt",
          productUrlKey: "hollister-backyard-sweatshirt",
          quantityCanceled: 0,
          quantityInvoiced: 4,
          quantityOrdered: 4,
          quantityRefunded: 0,
          quantityReturned: 0,
          quantityShipped: 4,
          id: "NDE2MA==",
          discounted: false,
          total: {
            value: 208,
            currency: "USD",
          },
          totalInclTax: {
            value: 208,
            currency: "USD",
          },
          price: {
            value: 52,
            currency: "USD",
          },
          priceInclTax: {
            value: 52,
            currency: "USD",
          },
          totalQuantity: 4,
          regularPrice: {
            value: 52,
            currency: "USD",
          },
          product: {
            __typename: "ConfigurableProduct",
            canonicalUrl: "",
            urlKey: "hollister-backyard-sweatshirt",
            uid: "Mzk0",
            name: "Hollister Backyard Sweatshirt",
            sku: "MH05",
            onlyXLeftInStock: null,
            stockStatus: "IN_STOCK",
            thumbnail: {
              label: "Hollister Backyard Sweatshirt",
              url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
            },
            priceRange: {
              maximumPrice: {
                regularPrice: {
                  currency: "USD",
                  value: 52,
                },
              },
            },
            id: "Mzk0",
            image: "",
            productType: "ConfigurableProduct",
          },
          thumbnail: {
            label: "Hollister Backyard Sweatshirt",
            url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
          },
          configurableOptions: {
            Size: "XS",
            Color: "Green",
          },
          bundleOptions: null,
          itemPrices: {
            priceIncludingTax: {
              value: 56.29,
              currency: "USD",
            },
            originalPrice: {
              value: 52,
              currency: "USD",
            },
            originalPriceIncludingTax: {
              value: 56.29,
              currency: "USD",
            },
            price: {
              value: 52,
              currency: "USD",
            },
          },
          downloadableLinks: null,
        },
        {
          type: "OrderItem",
          eligibleForReturn: true,
          productSku: "MH05-XS-Green",
          productName: "Hollister Backyard Sweatshirt-XS-Green",
          productUrlKey: "hollister-backyard-sweatshirt-xs-green",
          quantityCanceled: 0,
          quantityInvoiced: 4,
          quantityOrdered: 4,
          quantityRefunded: 0,
          quantityReturned: 0,
          quantityShipped: 0,
          id: "NDE2Mw==",
          discounted: true,
          total: {
            value: 0,
            currency: "USD",
          },
          totalInclTax: {
            value: 0,
            currency: "USD",
          },
          price: {
            value: 0,
            currency: "USD",
          },
          priceInclTax: {
            value: 0,
            currency: "USD",
          },
          totalQuantity: 4,
          regularPrice: {
            value: 52,
            currency: "USD",
          },
          product: {
            __typename: "SimpleProduct",
            canonicalUrl: "",
            urlKey: "hollister-backyard-sweatshirt-xs-green",
            uid: "MzQ5",
            name: "Hollister Backyard Sweatshirt-XS-Green",
            sku: "MH05-XS-Green",
            onlyXLeftInStock: null,
            stockStatus: "IN_STOCK",
            thumbnail: {
              label: "Hollister Backyard Sweatshirt-XS-Green",
              url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-green_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
            },
            priceRange: {
              maximumPrice: {
                regularPrice: {
                  currency: "USD",
                  value: 52,
                },
              },
            },
            id: "MzQ5",
            image: "",
            productType: "SimpleProduct",
          },
          thumbnail: {
            label: "Hollister Backyard Sweatshirt-XS-Green",
            url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-green_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
          },
          configurableOptions: {},
          bundleOptions: null,
          itemPrices: {
            priceIncludingTax: {
              value: 0,
              currency: "USD",
            },
            originalPrice: {
              value: 0,
              currency: "USD",
            },
            originalPriceIncludingTax: {
              value: 0,
              currency: "USD",
            },
            price: {
              value: 0,
              currency: "USD",
            },
          },
          downloadableLinks: null,
        },
        {
          type: "OrderItem",
          eligibleForReturn: true,
          productSku: "MH05-XL-Red",
          productName: "Hollister Backyard Sweatshirt",
          productUrlKey: "hollister-backyard-sweatshirt",
          quantityCanceled: 0,
          quantityInvoiced: 4,
          quantityOrdered: 4,
          quantityRefunded: 0,
          quantityReturned: 0,
          quantityShipped: 4,
          id: "NDE2Ng==",
          discounted: false,
          total: {
            value: 208,
            currency: "USD",
          },
          totalInclTax: {
            value: 208,
            currency: "USD",
          },
          price: {
            value: 52,
            currency: "USD",
          },
          priceInclTax: {
            value: 52,
            currency: "USD",
          },
          totalQuantity: 4,
          regularPrice: {
            value: 52,
            currency: "USD",
          },
          product: {
            __typename: "ConfigurableProduct",
            canonicalUrl: "",
            urlKey: "hollister-backyard-sweatshirt",
            uid: "Mzk0",
            name: "Hollister Backyard Sweatshirt",
            sku: "MH05",
            onlyXLeftInStock: null,
            stockStatus: "IN_STOCK",
            thumbnail: {
              label: "Hollister Backyard Sweatshirt",
              url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
            },
            priceRange: {
              maximumPrice: {
                regularPrice: {
                  currency: "USD",
                  value: 52,
                },
              },
            },
            id: "Mzk0",
            image: "",
            productType: "ConfigurableProduct",
          },
          thumbnail: {
            label: "Hollister Backyard Sweatshirt",
            url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-white_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
          },
          configurableOptions: {
            Size: "XL",
            Color: "Red",
          },
          bundleOptions: null,
          itemPrices: {
            priceIncludingTax: {
              value: 56.29,
              currency: "USD",
            },
            originalPrice: {
              value: 52,
              currency: "USD",
            },
            originalPriceIncludingTax: {
              value: 56.29,
              currency: "USD",
            },
            price: {
              value: 52,
              currency: "USD",
            },
          },
          downloadableLinks: null,
        },
        {
          type: "OrderItem",
          eligibleForReturn: true,
          productSku: "MH05-XL-Red",
          productName: "Hollister Backyard Sweatshirt-XL-Red",
          productUrlKey: "hollister-backyard-sweatshirt-xl-red",
          quantityCanceled: 0,
          quantityInvoiced: 4,
          quantityOrdered: 4,
          quantityRefunded: 0,
          quantityReturned: 0,
          quantityShipped: 0,
          id: "NDE2OQ==",
          discounted: true,
          total: {
            value: 0,
            currency: "USD",
          },
          totalInclTax: {
            value: 0,
            currency: "USD",
          },
          price: {
            value: 0,
            currency: "USD",
          },
          priceInclTax: {
            value: 0,
            currency: "USD",
          },
          totalQuantity: 4,
          regularPrice: {
            value: 52,
            currency: "USD",
          },
          product: {
            __typename: "SimpleProduct",
            canonicalUrl: "",
            urlKey: "hollister-backyard-sweatshirt-xl-red",
            uid: "Mzg4",
            name: "Hollister Backyard Sweatshirt-XL-Red",
            sku: "MH05-XL-Red",
            onlyXLeftInStock: null,
            stockStatus: "IN_STOCK",
            thumbnail: {
              label: "Hollister Backyard Sweatshirt-XL-Red",
              url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-red_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
            },
            priceRange: {
              maximumPrice: {
                regularPrice: {
                  currency: "USD",
                  value: 52,
                },
              },
            },
            id: "Mzg4",
            image: "",
            productType: "SimpleProduct",
          },
          thumbnail: {
            label: "Hollister Backyard Sweatshirt-XL-Red",
            url: "https://mcstaging.aemshop.net/media/catalog/product/m/h/mh05-red_main_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
          },
          configurableOptions: {},
          bundleOptions: null,
          itemPrices: {
            priceIncludingTax: {
              value: 0,
              currency: "USD",
            },
            originalPrice: {
              value: 0,
              currency: "USD",
            },
            originalPriceIncludingTax: {
              value: 0,
              currency: "USD",
            },
            price: {
              value: 0,
              currency: "USD",
            },
          },
          downloadableLinks: null,
        },
        {
          type: "BundleOrderItem",
          eligibleForReturn: true,
          productSku: "24-WG080-24-WG083-blue-24-WG084-24-WG087-24-WG088",
          productName: "Sprite Yoga Companion Kit",
          productUrlKey: "sprite-yoga-companion-kit",
          quantityCanceled: 0,
          quantityInvoiced: 1,
          quantityOrdered: 1,
          quantityRefunded: 0,
          quantityReturned: 0,
          quantityShipped: 1,
          id: "NDE3Mg==",
          discounted: false,
          total: {
            value: 77,
            currency: "USD",
          },
          totalInclTax: {
            value: 77,
            currency: "USD",
          },
          price: {
            value: 77,
            currency: "USD",
          },
          priceInclTax: {
            value: 77,
            currency: "USD",
          },
          totalQuantity: 1,
          regularPrice: {
            value: 77,
            currency: "USD",
          },
          product: {
            __typename: "BundleProduct",
            canonicalUrl: "",
            urlKey: "sprite-yoga-companion-kit",
            uid: "MTU0",
            name: "Sprite Yoga Companion Kit",
            sku: "24-WG080",
            onlyXLeftInStock: null,
            stockStatus: "IN_STOCK",
            thumbnail: {
              label: "Sprite Yoga Companion Kit",
              url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-kit-2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
            },
            priceRange: {
              maximumPrice: {
                regularPrice: {
                  currency: "USD",
                  value: 77,
                },
              },
            },
            id: "MTU0",
            image: "",
            productType: "BundleProduct",
          },
          thumbnail: {
            label: "Sprite Yoga Companion Kit",
            url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-kit-2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
          },
          configurableOptions: {},
          bundleOptions: {
            "Sprite Foam Yoga Brick": "",
            "Sprite Foam Roller": "",
            "Sprite Stasis Ball": "",
            "Sprite Yoga Strap": "",
          },
          itemPrices: {
            priceIncludingTax: {
              value: 83.36,
              currency: "USD",
            },
            originalPrice: {
              value: 77,
              currency: "USD",
            },
            originalPriceIncludingTax: {
              value: 77,
              currency: "USD",
            },
            price: {
              value: 77,
              currency: "USD",
            },
          },
          downloadableLinks: null,
        },
        {
          type: "OrderItem",
          eligibleForReturn: true,
          productSku: "24-WG083-blue",
          productName: "Sprite Stasis Ball 75 cm",
          productUrlKey: "sprite-stasis-ball-75-cm-blue",
          quantityCanceled: 0,
          quantityInvoiced: 1,
          quantityOrdered: 1,
          quantityRefunded: 0,
          quantityReturned: 0,
          quantityShipped: 0,
          id: "NDE3NQ==",
          discounted: false,
          total: {
            value: 32,
            currency: "USD",
          },
          totalInclTax: {
            value: 32,
            currency: "USD",
          },
          price: {
            value: 32,
            currency: "USD",
          },
          priceInclTax: {
            value: 32,
            currency: "USD",
          },
          totalQuantity: 1,
          regularPrice: {
            value: 32,
            currency: "USD",
          },
          product: {
            __typename: "SimpleProduct",
            canonicalUrl: "",
            urlKey: "sprite-stasis-ball-75-cm-blue",
            uid: "OTQ=",
            name: "Sprite Stasis Ball 75 cm",
            sku: "24-WG083-blue",
            onlyXLeftInStock: null,
            stockStatus: "IN_STOCK",
            thumbnail: {
              label: "Sprite Stasis Ball 75 cm",
              url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-stability-ball.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
            },
            priceRange: {
              maximumPrice: {
                regularPrice: {
                  currency: "USD",
                  value: 32,
                },
              },
            },
            id: "OTQ=",
            image: "",
            productType: "SimpleProduct",
          },
          thumbnail: {
            label: "Sprite Stasis Ball 75 cm",
            url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-stability-ball.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
          },
          configurableOptions: {},
          bundleOptions: null,
          itemPrices: {
            priceIncludingTax: {
              value: 34.64,
              currency: "USD",
            },
            originalPrice: {
              value: 32,
              currency: "USD",
            },
            originalPriceIncludingTax: {
              value: 34.64,
              currency: "USD",
            },
            price: {
              value: 32,
              currency: "USD",
            },
          },
          downloadableLinks: null,
        },
        {
          type: "OrderItem",
          eligibleForReturn: true,
          productSku: "24-WG084",
          productName: "Sprite Foam Yoga Brick",
          productUrlKey: "sprite-foam-yoga-brick",
          quantityCanceled: 0,
          quantityInvoiced: 1,
          quantityOrdered: 1,
          quantityRefunded: 0,
          quantityReturned: 0,
          quantityShipped: 0,
          id: "NDE3OA==",
          discounted: false,
          total: {
            value: 5,
            currency: "USD",
          },
          totalInclTax: {
            value: 5,
            currency: "USD",
          },
          price: {
            value: 5,
            currency: "USD",
          },
          priceInclTax: {
            value: 5,
            currency: "USD",
          },
          totalQuantity: 1,
          regularPrice: {
            value: 5,
            currency: "USD",
          },
          product: {
            __typename: "SimpleProduct",
            canonicalUrl: "",
            urlKey: "sprite-foam-yoga-brick",
            uid: "NjE=",
            name: "Sprite Foam Yoga Brick",
            sku: "24-WG084",
            onlyXLeftInStock: null,
            stockStatus: "IN_STOCK",
            thumbnail: {
              label: "Sprite Foam Yoga Brick",
              url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-brick.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
            },
            priceRange: {
              maximumPrice: {
                regularPrice: {
                  currency: "USD",
                  value: 5,
                },
              },
            },
            id: "NjE=",
            image: "",
            productType: "SimpleProduct",
          },
          thumbnail: {
            label: "Sprite Foam Yoga Brick",
            url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-brick.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
          },
          configurableOptions: {},
          bundleOptions: null,
          itemPrices: {
            priceIncludingTax: {
              value: 5.42,
              currency: "USD",
            },
            originalPrice: {
              value: 5,
              currency: "USD",
            },
            originalPriceIncludingTax: {
              value: 5.4125,
              currency: "USD",
            },
            price: {
              value: 5,
              currency: "USD",
            },
          },
          downloadableLinks: null,
        },
        {
          type: "OrderItem",
          eligibleForReturn: true,
          productSku: "24-WG087",
          productName: "Sprite Yoga Strap 10 foot",
          productUrlKey: "sprite-yoga-strap-10-foot",
          quantityCanceled: 0,
          quantityInvoiced: 1,
          quantityOrdered: 1,
          quantityRefunded: 0,
          quantityReturned: 0,
          quantityShipped: 0,
          id: "NDE4MQ==",
          discounted: false,
          total: {
            value: 21,
            currency: "USD",
          },
          totalInclTax: {
            value: 21,
            currency: "USD",
          },
          price: {
            value: 21,
            currency: "USD",
          },
          priceInclTax: {
            value: 21,
            currency: "USD",
          },
          totalQuantity: 1,
          regularPrice: {
            value: 21,
            currency: "USD",
          },
          product: {
            __typename: "SimpleProduct",
            canonicalUrl: "",
            urlKey: "sprite-yoga-strap-10-foot",
            uid: "MTAz",
            name: "Sprite Yoga Strap 10 foot",
            sku: "24-WG087",
            onlyXLeftInStock: null,
            stockStatus: "IN_STOCK",
            thumbnail: {
              label: "Sprite Yoga Strap 10 foot",
              url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-strap.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
            },
            priceRange: {
              maximumPrice: {
                regularPrice: {
                  currency: "USD",
                  value: 21,
                },
              },
            },
            id: "MTAz",
            image: "",
            productType: "SimpleProduct",
          },
          thumbnail: {
            label: "Sprite Yoga Strap 10 foot",
            url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-yoga-strap.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
          },
          configurableOptions: {},
          bundleOptions: null,
          itemPrices: {
            priceIncludingTax: {
              value: 22.73,
              currency: "USD",
            },
            originalPrice: {
              value: 21,
              currency: "USD",
            },
            originalPriceIncludingTax: {
              value: 22.7325,
              currency: "USD",
            },
            price: {
              value: 21,
              currency: "USD",
            },
          },
          downloadableLinks: null,
        },
        {
          type: "OrderItem",
          eligibleForReturn: true,
          productSku: "24-WG088",
          productName: "Sprite Foam Roller",
          productUrlKey: "sprite-foam-roller",
          quantityCanceled: 0,
          quantityInvoiced: 1,
          quantityOrdered: 1,
          quantityRefunded: 0,
          quantityReturned: 0,
          quantityShipped: 0,
          id: "NDE4NA==",
          discounted: false,
          total: {
            value: 19,
            currency: "USD",
          },
          totalInclTax: {
            value: 19,
            currency: "USD",
          },
          price: {
            value: 19,
            currency: "USD",
          },
          priceInclTax: {
            value: 19,
            currency: "USD",
          },
          totalQuantity: 1,
          regularPrice: {
            value: 19,
            currency: "USD",
          },
          product: {
            __typename: "SimpleProduct",
            canonicalUrl: "",
            urlKey: "sprite-foam-roller",
            uid: "NjQ=",
            name: "Sprite Foam Roller",
            sku: "24-WG088",
            onlyXLeftInStock: null,
            stockStatus: "IN_STOCK",
            thumbnail: {
              label: "Sprite Foam Roller",
              url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-foam-roller.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
            },
            priceRange: {
              maximumPrice: {
                regularPrice: {
                  currency: "USD",
                  value: 19,
                },
              },
            },
            id: "NjQ=",
            image: "",
            productType: "SimpleProduct",
          },
          thumbnail: {
            label: "Sprite Foam Roller",
            url: "https://mcstaging.aemshop.net/media/catalog/product/l/u/luma-foam-roller.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
          },
          configurableOptions: {},
          bundleOptions: null,
          itemPrices: {
            priceIncludingTax: {
              value: 20.57,
              currency: "USD",
            },
            originalPrice: {
              value: 19,
              currency: "USD",
            },
            originalPriceIncludingTax: {
              value: 20.5675,
              currency: "USD",
            },
            price: {
              value: 19,
              currency: "USD",
            },
          },
          downloadableLinks: null,
        },
      ],
      totalQuantity: 18,
      shipping: {
        amount: 0,
        currency: "",
        code: "Flat Rate - Fixed",
      },
      returnNumber: "",
    },
    isOrderReturns: true,
  })(block);
}
