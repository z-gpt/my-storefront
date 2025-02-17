/*! Copyright 2025 Adobe
All Rights Reserved. */
import{s as _}from"./state.js";import{C as h,t as T}from"./refreshCart.js";import"@dropins/tools/event-bus.js";import{f as A,h as E}from"./resetCart.js";import{CART_FRAGMENT as I}from"../fragments.js";const f=`
  mutation GET_ESTIMATED_TOTALS_MUTATION(
    $cartId: String!
    $address: EstimateAddressInput!,
    $shipping_method: ShippingMethodInput,
    ${h}
  ) {
    estimateTotals(
      input: {
        cart_id: $cartId
        address: $address
        shipping_method: $shipping_method
      }
    )  {
      cart {
       ...CART_FRAGMENT
      }
    }
    }

  ${I}
  `,$=async o=>{var e,a;const r=_.cartId;if(!r)throw new Error("No cart ID found");if(!o)throw new Error("No address parameter found");const{countryCode:s,postcode:n,region:t}=o,c=(e=o.shipping_method)==null?void 0:e.carrier_code,p=(a=o.shipping_method)==null?void 0:a.method_code;return A(f,{variables:{cartId:r,address:{country_code:s||"US",postcode:n,region:(t==null?void 0:t.id)!==void 0?{region_id:t.id}:{region:(t==null?void 0:t.region)??""}},shipping_method:{carrier_code:c||"",method_code:p||""}}}).then(({errors:d,data:m})=>{if(d)return E(d);const i=m.estimateTotals;return i?T(i.cart):null})};export{$ as g};
