/*! Copyright 2024 Adobe
All Rights Reserved. */
import{c as ie,r as ue}from"./chunks/requestGuestOrderCancel.js";import{f as i,h as y}from"./chunks/fetch-graphql.js";import{g as me,r as pe,s as ce,a as _e,b as Oe}from"./chunks/fetch-graphql.js";import{g as De}from"./chunks/getAttributesForm.js";import{R as I}from"./chunks/requestGuestReturn.js";import{g as Ee,r as Te}from"./chunks/requestGuestReturn.js";import{t as A}from"./chunks/getGuestOrder.js";import{g as ye,a as Ce}from"./chunks/getGuestOrder.js";import{g as ge}from"./chunks/getCustomerOrdersReturn.js";import{h as u}from"./chunks/network-error.js";import{P as l,a as m,G as p,O as c,B as _,R as C,b as G,c as $}from"./chunks/transform-customer-orders-returns.js";import{O,A as R}from"./chunks/getGuestOrder.graphql.js";import{g as Ae}from"./chunks/getStoreConfig.js";import{Initializer as N}from"@dropins/tools/lib.js";import{events as d}from"@dropins/tools/event-bus.js";import{r as $e}from"./chunks/reorderItems.js";import{a as S}from"./chunks/convertCase.js";import"@dropins/tools/fetch-graphql.js";import"./chunks/transform-attributes-form.js";const v=`
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
${R}
${C}
`,L=(e,r)=>({id:e,totalQuantity:r.totalQuantity,possibleOnepageCheckout:!0,items:r.items.map(t=>{var a,s,o,n,D,h;return{canApplyMsrp:!0,formattedPrice:"",id:t.id,quantity:t.totalQuantity,product:{canonicalUrl:((a=t.product)==null?void 0:a.canonicalUrl)??"",mainImageUrl:((s=t.product)==null?void 0:s.image)??"",name:((o=t.product)==null?void 0:o.name)??"",productId:0,productType:(n=t.product)==null?void 0:n.productType,sku:((D=t.product)==null?void 0:D.sku)??""},prices:{price:{value:t.price.value,currency:t.price.currency}},configurableOptions:((h=t.selectedOptions)==null?void 0:h.map(E=>({optionLabel:E.label,valueLabel:E.value})))||[]}})}),k=e=>{var a,s,o;const r=e.coupons[0],t=(a=e.payments)==null?void 0:a[0];return{appliedCouponCode:(r==null?void 0:r.code)??"",email:e.email,grandTotal:e.grandTotal.value,orderId:e.number,orderType:"checkout",otherTax:0,salesTax:e.totalTax.value,shipping:{shippingMethod:((s=e.shipping)==null?void 0:s.code)??"",shippingAmount:((o=e.shipping)==null?void 0:o.amount)??0},subtotalExcludingTax:e.subtotal.value,subtotalIncludingTax:0,payments:t?[{paymentMethodCode:(t==null?void 0:t.code)||"",paymentMethodName:(t==null?void 0:t.name)||"",total:e.grandTotal.value}]:[]}},w=e=>{var t,a;const r=(a=(t=e==null?void 0:e.data)==null?void 0:t.placeOrder)==null?void 0:a.orderV2;return r?G(r):null},x=async({orderId:e,returnRef:r,queryType:t,returnsPageSize:a=50})=>await i(v,{method:"GET",cache:"force-cache",variables:{orderNumber:e,pageSize:a}}).then(s=>$(t??"orderData",s,r)).catch(u),B=`
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
${R}
${C}
`,P=async(e,r)=>await i(B,{method:"GET",cache:"no-cache",variables:{token:e}}).then(t=>A(t,r)).catch(u),M="orderData",U=async e=>{var n;const r=typeof(e==null?void 0:e.orderRef)=="string"?e==null?void 0:e.orderRef:"",t=typeof(e==null?void 0:e.returnRef)=="string"?e==null?void 0:e.returnRef:"",a=r&&typeof(e==null?void 0:e.orderRef)=="string"&&((n=e==null?void 0:e.orderRef)==null?void 0:n.length)>20,s=(e==null?void 0:e.orderData)??null;if(s){d.emit("order/data",{...s,returnNumber:t});return}if(!r)return;const o=a?await P(r,t):await x({orderId:r,returnRef:t,queryType:M});o?d.emit("order/data",{...o,returnNumber:t}):d.emit("order/error",{source:"order",type:"network",error:"The data was not received."})},f=new N({init:async e=>{const r={};f.config.setConfig({...r,...e}),U(e).catch(console.error)},listeners:()=>[]}),ae=f.config,T={SHOPPING_CART_CONTEXT:"shoppingCartContext",ORDER_CONTEXT:"orderContext"},F={PLACE_ORDER:"place-order"};function g(){return window.adobeDataLayer=window.adobeDataLayer||[],window.adobeDataLayer}function b(e,r){const t=g();t.push({[e]:null}),t.push({[e]:r})}function q(e,r){g().push(a=>{const s=a.getState?a.getState():{};a.push({event:e,eventInfo:{...s,...r}})})}function Q(e,r){const t=k(r),a=L(e,r);b(T.ORDER_CONTEXT,{...t}),b(T.SHOPPING_CART_CONTEXT,{...a}),q(F.PLACE_ORDER)}const z=`
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
  ${R}
`,se=async e=>{if(!e)throw new Error("No cart ID found");return i(z,{variables:{cartId:e}}).then(r=>{var a;(a=r.errors)!=null&&a.length&&y(r.errors);const t=w(r);return t&&(d.emit("order/placed",t),d.emit("cart/reset",void 0),Q(e,t)),t}).catch(u)},Y=`
mutation REQUEST_RETURN_ORDER($input: RequestReturnInput!) {
  requestReturn(input: $input) {
    return {
      ...OrderReturn
    }
  }
}
${I}`,oe=async e=>{const r=S(e,"snakeCase",{});return await i(Y,{method:"POST",variables:{input:r}}).then(t=>{var o;if((o=t.errors)!=null&&o.length)return y(t.errors);const{created_at:a,...s}=t.data.requestReturn.return;return{...s,createdAt:a}}).catch(u)};export{ie as cancelOrder,ae as config,i as fetchGraphQl,De as getAttributesForm,Ee as getAttributesList,me as getConfig,ye as getCustomer,ge as getCustomerOrdersReturn,Ce as getGuestOrder,x as getOrderDetailsById,Ae as getStoreConfig,P as guestOrderByToken,f as initialize,se as placeOrder,pe as removeFetchGraphQlHeader,$e as reorderItems,ue as requestGuestOrderCancel,Te as requestGuestReturn,oe as requestReturn,ce as setEndpoint,_e as setFetchGraphQlHeader,Oe as setFetchGraphQlHeaders};
