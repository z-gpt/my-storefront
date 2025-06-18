/*! Copyright 2025 Adobe
All Rights Reserved. */
import{a as L}from"./chunks/initialize.js";import{c as et,g as rt,d as at,i as ot}from"./chunks/initialize.js";import{f as m,h}from"./chunks/fetch-graphql.js";import{g as ct,r as st,s as ut,a as it,b as lt}from"./chunks/fetch-graphql.js";import{h as O}from"./chunks/network-error.js";import{events as l}from"@dropins/tools/event-bus.js";import{PLACE_ORDER_FRAGMENT as _,PRODUCT_DETAILS_FRAGMENT as g,PRICE_DETAILS_FRAGMENT as R,GIFT_CARD_DETAILS_FRAGMENT as A,ORDER_ITEM_DETAILS_FRAGMENT as f,BUNDLE_ORDER_ITEM_DETAILS_FRAGMENT as x,ORDER_SUMMARY_FRAGMENT as D,ADDRESS_FRAGMENT as y,ORDER_ITEM_FRAGMENT as C,GIFT_WRAPPING_FRAGMENT as M,GIFT_MESSAGE_FRAGMENT as $,APPLIED_GIFT_CARDS_FRAGMENT as b}from"./fragments.js";import{c as dt,r as Et}from"./chunks/requestGuestOrderCancel.js";import{g as mt}from"./chunks/getAttributesForm.js";import{g as Ot,a as _t,r as gt}from"./chunks/requestGuestReturn.js";import{g as At,a as ft}from"./chunks/getGuestOrder.js";import{g as Dt}from"./chunks/getCustomerOrdersReturn.js";import{g as Ct}from"./chunks/getStoreConfig.js";import{a as $t,c as bt,r as Nt}from"./chunks/confirmCancelOrder.js";import"@dropins/tools/lib.js";import"@dropins/tools/fetch-graphql.js";import"./chunks/transform-attributes-form.js";const N=(e,r)=>e+r.amount.value,F=(e,r)=>({id:e,totalQuantity:r.totalQuantity,possibleOnepageCheckout:!0,items:r.items.map(t=>{var a,o,n,c,s,u,i,p;return{canApplyMsrp:!0,formattedPrice:"",id:t.id,quantity:t.totalQuantity,product:{canonicalUrl:(a=t.product)==null?void 0:a.canonicalUrl,mainImageUrl:((o=t.product)==null?void 0:o.image)??"",name:((n=t.product)==null?void 0:n.name)??"",productId:0,productType:(c=t.product)==null?void 0:c.productType,sku:((s=t.product)==null?void 0:s.sku)??"",topLevelSku:(u=t.product)==null?void 0:u.sku},prices:{price:{value:t.price.value,currency:t.price.currency,regularPrice:((i=t.regularPrice)==null?void 0:i.value)??t.price.value}},configurableOptions:((p=t.selectedOptions)==null?void 0:p.map(d=>({optionLabel:d.label,valueLabel:d.value})))||[]}}),prices:{subtotalExcludingTax:{value:r.subtotalExclTax.value,currency:r.subtotalExclTax.currency},subtotalIncludingTax:{value:r.subtotalInclTax.value,currency:r.subtotalInclTax.currency}},discountAmount:r.discounts.reduce(N,0)}),S=e=>{var a,o,n;const r=e.coupons[0],t=(a=e.payments)==null?void 0:a[0];return{appliedCouponCode:(r==null?void 0:r.code)??"",email:e.email,grandTotal:e.grandTotal.value,orderId:e.number,orderType:"checkout",otherTax:0,salesTax:e.totalTax.value,shipping:{shippingMethod:((o=e.shipping)==null?void 0:o.code)??"",shippingAmount:((n=e.shipping)==null?void 0:n.amount)??0},subtotalExcludingTax:e.subtotalExclTax.value,subtotalIncludingTax:e.subtotalInclTax.value,payments:t?[{paymentMethodCode:(t==null?void 0:t.code)||"",paymentMethodName:(t==null?void 0:t.name)||"",total:e.grandTotal.value,orderId:e.number}]:[],discountAmount:e.discounts.reduce(N,0),taxAmount:e.totalTax.value}},v=e=>{var t,a;const r=(a=(t=e==null?void 0:e.data)==null?void 0:t.placeOrder)==null?void 0:a.orderV2;return r?L(r):null},E={SHOPPING_CART_CONTEXT:"shoppingCartContext",ORDER_CONTEXT:"orderContext"},w={PLACE_ORDER:"place-order"};function G(){return window.adobeDataLayer=window.adobeDataLayer||[],window.adobeDataLayer}function T(e,r){const t=G();t.push({[e]:null}),t.push({[e]:r})}function U(e){G().push(t=>{const a=t.getState?t.getState():{};t.push({event:e,eventInfo:{...a}})})}function P(e,r){const t=S(r),a=F(e,r);T(E.ORDER_CONTEXT,{...t}),T(E.SHOPPING_CART_CONTEXT,{...a}),U(w.PLACE_ORDER)}class k extends Error{constructor(r){super(r),this.name="PlaceOrderError"}}const I=e=>{const r=e.map(t=>t.message).join(" ");throw new k(r)},Q=`
  mutation PLACE_ORDER_MUTATION($cartId: String!) {
    placeOrder(input: { cart_id: $cartId }) {
      ${_}
    }
  }
  ${g}
  ${R}
  ${A}
  ${f}
  ${x}
  ${D}
  ${y}
  ${C}
  ${M}
  ${$}
  ${b}
`,J=async e=>{if(!e)throw new Error("No cart ID found");return m(Q,{variables:{cartId:e}}).then(r=>{var a,o,n,c,s;(a=r.errors)!=null&&a.length&&h(r.errors),(c=(n=(o=r.data)==null?void 0:o.placeOrder)==null?void 0:n.errors)!=null&&c.length&&I((s=r.data.placeOrder)==null?void 0:s.errors);const t=v(r);return t&&(l.emit("order/placed",t),l.emit("cart/reset",void 0),P(e,t)),t}).catch(O)},H=`
  mutation setPaymentMethodAndPlaceOrder($cartId: String!, $paymentMethod: PaymentMethodInput!) {
    setPaymentMethodOnCart(
      input: {
        cart_id: $cartId
        payment_method: $paymentMethod
      }
    ) {
      cart {
        selected_payment_method {
          code
          title
        }
      }
    }
    placeOrder(input: { cart_id: $cartId }) {
      ${_}
    }
  }
  ${g}
  ${R}
  ${A}
  ${f}
  ${x}
  ${D}
  ${y}
  ${C}
  ${M}
  ${$}
  ${b}
`,K=async(e,r)=>{if(!e)throw new Error("No cart ID found");if(!r)throw new Error("No payment method found");return m(H,{variables:{cartId:e,paymentMethod:r}}).then(t=>{var o,n,c,s,u,i;(o=t.errors)!=null&&o.length&&h(t.errors),(s=(c=(n=t.data)==null?void 0:n.placeOrder)==null?void 0:c.errors)!=null&&s.length&&I((u=t.data.placeOrder)==null?void 0:u.errors);const a=v({data:{placeOrder:(i=t.data)==null?void 0:i.placeOrder}});return a&&(l.emit("order/placed",a),l.emit("cart/reset",void 0),P(e,a)),a}).catch(O)};export{dt as cancelOrder,et as config,$t as confirmCancelOrder,bt as confirmGuestReturn,m as fetchGraphQl,mt as getAttributesForm,Ot as getAttributesList,ct as getConfig,At as getCustomer,Dt as getCustomerOrdersReturn,ft as getGuestOrder,rt as getOrderDetailsById,Ct as getStoreConfig,at as guestOrderByToken,ot as initialize,J as placeOrder,st as removeFetchGraphQlHeader,Nt as reorderItems,Et as requestGuestOrderCancel,_t as requestGuestReturn,gt as requestReturn,ut as setEndpoint,it as setFetchGraphQlHeader,lt as setFetchGraphQlHeaders,K as setPaymentMethodAndPlaceOrder};
