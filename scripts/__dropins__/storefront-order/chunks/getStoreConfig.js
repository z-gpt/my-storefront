/*! Copyright 2024 Adobe
All Rights Reserved. */
import{f as i,h as s}from"./fetch-graphql.js";function a(r){return r?{baseMediaUrl:r.base_media_url,orderCancellationEnabled:r.order_cancellation_enabled,orderCancellationReasons:r.order_cancellation_reasons,shoppingCartDisplayPrice:r.shopping_cart_display_price,shoppingOrdersDisplaySubtotal:r.shopping_cart_display_subtotal,shoppingOrdersDisplayShipping:r.shopping_cart_display_shipping,shoppingOrdersDisplayGrandTotal:r.shopping_cart_display_grand_total,shoppingOrdersDisplayTaxGiftWrapping:r.shopping_cart_display_tax_gift_wrapping,shoppingOrdersDisplayFullSummary:r.shopping_cart_display_full_summary,shoppingOrdersDisplayZeroTax:r.shopping_cart_display_zero_tax}:null}const _=`
query STORE_CONFIG_QUERY {
  storeConfig {
    order_cancellation_enabled
    order_cancellation_reasons {
        description
    }
    base_media_url
    shopping_cart_display_price
    shopping_cart_display_shipping
    shopping_cart_display_subtotal
    shopping_cart_display_grand_total
    shopping_cart_display_tax_gift_wrapping
    shopping_cart_display_full_summary
    shopping_cart_display_zero_tax
  }
}
`,o=async()=>i(_,{method:"GET",cache:"force-cache"}).then(({errors:r,data:p})=>r?s(r):a(p.storeConfig));export{o as g};
