"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_CUSTOMER_ORDERS_RETURN = exports.RETURNS_FRAGMENT = void 0;
const graphql_1 = require("../../getOrderDetailsById/graphql");
exports.RETURNS_FRAGMENT = `
  fragment OrderReturns on Returns {
  __typename
   items {
    number
    shipping {
      tracking {
        status {
          text
          type
        }
        carrier {
          uid
          label
        }
        tracking_number
      }
    }
    order {
      number
      token
    }
    items {
     uid
     quantity
     status
     request_quantity
      order_item {
        ...OrderItemDetails
        ... on GiftCardOrderItem {
          ...GiftCardDetails
          product {
            ...ProductDetails
          }
        }
      }
    }
   }
  }
${graphql_1.PRODUCT_DETAILS_FRAGMENT}
${graphql_1.PRICE_DETAILS_FRAGMENT}
${graphql_1.GIFT_CARD_DETAILS_FRAGMENT}
${graphql_1.ORDER_ITEM_DETAILS_FRAGMENT}
`;
exports.GET_CUSTOMER_ORDERS_RETURN = `
query GET_CUSTOMER_ORDERS_RETURN {
 customer {
  returns {
  page_info {
    page_size
    total_pages
    current_page
  }
  ...OrderReturns
  }
 }
}
${exports.RETURNS_FRAGMENT}`;
