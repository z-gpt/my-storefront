/********************************************************************
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2025 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 *******************************************************************/
export declare const PLACE_ORDER_FRAGMENT = "\n  errors {\n    code\n    message\n  }\n  orderV2 {\n    printed_card_included\n    gift_receipt_included\n    gift_wrapping {\n      ...GIFT_WRAPPING_FRAGMENT\n    }\n    gift_message {\n      ...GIFT_MESSAGE_FRAGMENT\n    }\n    applied_gift_cards {\n      ...APPLIED_GIFT_CARDS_FRAGMENT\n    }\n    email\n    available_actions\n    status\n    number\n    token\n    id\n    order_date\n    carrier\n    shipping_method\n    is_virtual\n    applied_coupons {\n      code\n    }\n    shipments {\n      id\n      number\n      tracking {\n        title\n        number\n        carrier\n      }\n      comments {\n        message\n        timestamp\n      }\n      items {\n        id\n        product_sku\n        product_name\n        order_item {\n          ...ORDER_ITEM_DETAILS_FRAGMENT\n          ... on GiftCardOrderItem {\n            ...GIFT_CARD_DETAILS_FRAGMENT\n            product {\n              ...PRODUCT_DETAILS_FRAGMENT\n            }\n          }\n        }\n      }\n    }\n    payment_methods {\n      name\n      type\n    }\n    shipping_address {\n      ...ADDRESS_FRAGMENT\n    }\n    billing_address {\n      ...ADDRESS_FRAGMENT\n    }\n    items {\n      ...ORDER_ITEM_FRAGMENT\n    }\n    total {\n      ...ORDER_SUMMARY_FRAGMENT\n    }\n  }\n";
//# sourceMappingURL=PlaceOrderFragment.graphql.d.ts.map