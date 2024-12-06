/*! Copyright 2024 Adobe
All Rights Reserved. */
import{c as oe,r as ne}from"./chunks/requestGuestOrderCancel.js";import{f as i,h as y}from"./chunks/fetch-graphql.js";import{g as ie,r as ue,s as le,a as me,b as pe}from"./chunks/fetch-graphql.js";import{g as _e}from"./chunks/getAttributesForm.js";import{g as he,a as De,r as Re}from"./chunks/requestGuestReturn.js";import{t as g}from"./chunks/getGuestOrder.js";import{g as Te,a as be}from"./chunks/getGuestOrder.js";import{g as Ce}from"./chunks/getCustomerOrdersReturn.js";import{h as u}from"./chunks/network-error.js";import{P as l,a as m,G as p,O as c,B as _,R as C,b as G,c as A}from"./chunks/transform-customer-orders-returns.js";import{O,A as h}from"./chunks/getGuestOrder.graphql.js";import{g as fe}from"./chunks/getStoreConfig.js";import{Initializer as $}from"@dropins/tools/lib.js";import{events as d}from"@dropins/tools/event-bus.js";import{r as Ge}from"./chunks/reorderItems.js";import"@dropins/tools/fetch-graphql.js";import"./chunks/transform-attributes-form.js";import"./chunks/convertCase.js";const N=`
query ORDER_BY_NUMBER($orderNumber: String!, $pageSize: Int) {
 customer {
    orders(
      filter: { number: { eq: $orderNumber } }
    ) {
      items {
        email
        available_actions
        status
        number
        id
        order_date
        order_status_change_date
        carrier
        shipping_method
        is_virtual
        returns(pageSize: $pageSize) {
          ...OrderReturns
        }
        items_eligible_for_return {
          ...OrderItemDetails
          ... on BundleOrderItem {
            ...BundleOrderItemDetails
          }
          ... on GiftCardOrderItem {
            ...GiftCardDetails
            product {
              ...ProductDetails
            }
          }
          ... on DownloadableOrderItem {
            product_name
            downloadable_links {
              sort_order
              title
            }
          }
        }
        applied_coupons {
          code
        }
        shipments {
          id
          number
          tracking {
            title
            number
            carrier
          }
          comments {
            message
            timestamp
          }
          items {
            id
            product_sku
            product_name
            quantity_shipped
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
        payment_methods {
          name
          type
        }
        shipping_address {
          ...AddressesList
        }
        billing_address {
          ...AddressesList
        }
        items {
          ...OrderItemDetails
          ... on BundleOrderItem {
            ...BundleOrderItemDetails
          }
          ... on GiftCardOrderItem {
            ...GiftCardDetails
            product {
              ...ProductDetails
            }
          }
          ... on DownloadableOrderItem {
            product_name
            downloadable_links {
              sort_order
              title
            }
          }
        }
        total {
          ...OrderSummary
        }
      }
    }
  }
}
${l}
${m}
${p}
${c}
${_}
${O}
${h}
${C}
`,S=(e,r)=>({id:e,totalQuantity:r.totalQuantity,possibleOnepageCheckout:!0,items:r.items.map(t=>{var a,s,o,n,D,R;return{canApplyMsrp:!0,formattedPrice:"",id:t.id,quantity:t.totalQuantity,product:{canonicalUrl:((a=t.product)==null?void 0:a.canonicalUrl)??"",mainImageUrl:((s=t.product)==null?void 0:s.image)??"",name:((o=t.product)==null?void 0:o.name)??"",productId:0,productType:(n=t.product)==null?void 0:n.productType,sku:((D=t.product)==null?void 0:D.sku)??""},prices:{price:{value:t.price.value,currency:t.price.currency}},configurableOptions:((R=t.selectedOptions)==null?void 0:R.map(E=>({optionLabel:E.label,valueLabel:E.value})))||[]}})}),v=e=>{var a,s,o;const r=e.coupons[0],t=(a=e.payments)==null?void 0:a[0];return{appliedCouponCode:(r==null?void 0:r.code)??"",email:e.email,grandTotal:e.grandTotal.value,orderId:e.number,orderType:"checkout",otherTax:0,salesTax:e.totalTax.value,shipping:{shippingMethod:((s=e.shipping)==null?void 0:s.code)??"",shippingAmount:((o=e.shipping)==null?void 0:o.amount)??0},subtotalExcludingTax:e.subtotal.value,subtotalIncludingTax:0,payments:t?[{paymentMethodCode:(t==null?void 0:t.code)||"",paymentMethodName:(t==null?void 0:t.name)||"",total:e.grandTotal.value}]:[]}},L=e=>{var t,a;const r=(a=(t=e==null?void 0:e.data)==null?void 0:t.placeOrder)==null?void 0:a.orderV2;return r?G(r):null},w=async({orderId:e,returnRef:r,queryType:t,returnsPageSize:a=50})=>await i(N,{method:"GET",cache:"force-cache",variables:{orderNumber:e,pageSize:a}}).then(s=>A(t??"orderData",s,r)).catch(u),k=`
query ORDER_BY_TOKEN($token: String!) {
  guestOrderByToken(input: { token: $token }) {
    email
    id
    number
    order_date
    order_status_change_date
    status
    token
    carrier
    shipping_method
    printed_card_included
    gift_receipt_included
    available_actions
    is_virtual
    items_eligible_for_return {
      ...OrderItemDetails
    }
    returns(pageSize: 50) {
      ...OrderReturns
    }
    payment_methods {
      name
      type
    }
    applied_coupons {
      code
    }
    shipments {
      id
      tracking {
        title
        number
        carrier
      }
      comments {
        message
        timestamp
      }
      items {
        id
        product_sku
        product_name
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
    payment_methods {
      name
      type
    }
    shipping_address {
      ...AddressesList
    }
    billing_address {
      ...AddressesList
    }
    items {
      ...OrderItemDetails
      ... on BundleOrderItem {
        ...BundleOrderItemDetails
      }
      ... on GiftCardOrderItem {
        ...GiftCardDetails
        product {
          ...ProductDetails
        }
      }
      ... on DownloadableOrderItem {
        product_name
        downloadable_links {
          sort_order
          title
        }
      }
    }
    total {
      ...OrderSummary
    }
  }
}
${l}
${m}
${p}
${c}
${_}
${O}
${h}
${C}
`,x=async(e,r)=>await i(k,{method:"GET",cache:"no-cache",variables:{token:e}}).then(t=>g(t,r)).catch(u),B="orderData",M=async e=>{var n;const r=typeof(e==null?void 0:e.orderRef)=="string"?e==null?void 0:e.orderRef:"",t=typeof(e==null?void 0:e.returnRef)=="string"?e==null?void 0:e.returnRef:"",a=r&&typeof(e==null?void 0:e.orderRef)=="string"&&((n=e==null?void 0:e.orderRef)==null?void 0:n.length)>20,s=(e==null?void 0:e.orderData)??null;if(s){d.emit("order/data",{...s,returnNumber:t});return}if(!r)return;const o=a?await x(r,t):await w({orderId:r,returnRef:t,queryType:B});o?d.emit("order/data",{...o,returnNumber:t}):d.emit("order/error",{source:"order",type:"network",error:"The data was not received."})},I=new $({init:async e=>{const r={};I.config.setConfig({...r,...e}),M(e).catch(console.error)},listeners:()=>[]}),ee=I.config,T={SHOPPING_CART_CONTEXT:"shoppingCartContext",ORDER_CONTEXT:"orderContext"},P={PLACE_ORDER:"place-order"};function f(){return window.adobeDataLayer=window.adobeDataLayer||[],window.adobeDataLayer}function b(e,r){const t=f();t.push({[e]:null}),t.push({[e]:r})}function U(e,r){f().push(a=>{const s=a.getState?a.getState():{};a.push({event:e,eventInfo:{...s,...r}})})}function F(e,r){const t=v(r),a=S(e,r);b(T.ORDER_CONTEXT,{...t}),b(T.SHOPPING_CART_CONTEXT,{...a}),U(P.PLACE_ORDER)}const q=`
  mutation PLACE_ORDER_MUTATION($cartId: String!) {
    placeOrder(input: { cart_id: $cartId }) {
      errors {
        code
        message
      }
      orderV2 {
        email
        available_actions
        status
        number
        id
        order_date
        carrier
        shipping_method
        is_virtual
        applied_coupons {
          code
        }
        shipments {
          id
          number
          tracking {
            title
            number
            carrier
          }
          comments {
            message
            timestamp
          }
          items {
            id
            product_sku
            product_name
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
        payment_methods {
          name
          type
        }
        shipping_address {
          ...AddressesList
        }
        billing_address {
          ...AddressesList
        }
        items {
          ...OrderItemDetails
          ... on BundleOrderItem {
            ...BundleOrderItemDetails
          }
          ... on GiftCardOrderItem {
            ...GiftCardDetails
            product {
              ...ProductDetails
            }
          }
          ... on DownloadableOrderItem {
            product_name
            downloadable_links {
              sort_order
              title
            }
          }
        }
        total {
          ...OrderSummary
        }
      }
    }
  }
  ${l}
  ${m}
  ${p}
  ${c}
  ${_}
  ${O}
  ${h}
`,te=async e=>{if(!e)throw new Error("No cart ID found");return i(q,{variables:{cartId:e}}).then(r=>{var a;(a=r.errors)!=null&&a.length&&y(r.errors);const t=L(r);return t&&(d.emit("order/placed",t),d.emit("cart/reset",void 0),F(e,t)),t}).catch(u)},z=`
mutation CONFIRM_RETURN_GUEST_ORDER($input: ConfirmReturnInput!) {
  confirmReturn(input: $input) {
    return {
      __typename
      status
      uid
      number
      created_at
    }
  }
}`,re=async e=>await i(z,{method:"POST",variables:{input:e}}).then(r=>{var t;return(t=r.errors)!=null&&t.length?y(r.errors):r.data}).catch(u);export{oe as cancelOrder,ee as config,re as confirmReturn,i as fetchGraphQl,_e as getAttributesForm,he as getAttributesList,ie as getConfig,Te as getCustomer,Ce as getCustomerOrdersReturn,be as getGuestOrder,w as getOrderDetailsById,fe as getStoreConfig,x as guestOrderByToken,I as initialize,te as placeOrder,ue as removeFetchGraphQlHeader,Ge as reorderItems,ne as requestGuestOrderCancel,De as requestGuestReturn,Re as requestReturn,le as setEndpoint,me as setFetchGraphQlHeader,pe as setFetchGraphQlHeaders};
