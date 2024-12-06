/*! Copyright 2024 Adobe
All Rights Reserved. */
import{useState as l,useEffect as d}from"@dropins/tools/preact-hooks.js";import{G as C}from"./getGuestOrder.graphql.js";import{events as a}from"@dropins/tools/event-bus.js";import{f as u,h as O}from"./fetch-graphql.js";import{b as _}from"./transform-customer-orders-returns.js";import{useText as h}from"@dropins/tools/i18n.js";const p=`
  mutation CONFIRM_CANCEL_ORDER_MUTATION(
      $orderId: ID!,
      $confirmationKey: String!
    ) {
    confirmCancelOrder(input: {
      order_id: $orderId,
      confirmation_key: $confirmationKey
    }) {
      order {
        ...guestOrderData
      }
      errorV2 {
        message
        code
      }
    }
  }
${C}
`,R=async(t,s)=>u(p,{variables:{orderId:t,confirmationKey:s}}).then(async({errors:i,data:r})=>{var n,c,m,f;const o=[...(n=r==null?void 0:r.confirmCancelOrder)!=null&&n.errorV2?[(c=r==null?void 0:r.confirmCancelOrder)==null?void 0:c.errorV2]:[],...i??[]];let e=null;return(m=r==null?void 0:r.confirmCancelOrder)!=null&&m.order&&(e=_((f=r==null?void 0:r.confirmCancelOrder)==null?void 0:f.order),a.emit("order/data",e)),o.length>0?O(o):e}),D=({enableOrderCancellation:t})=>{const s=h({orderCancelled:"Order.OrderStatusContent.orderCanceled.message"}),[i,r]=l({text:"",status:void 0});return d(()=>{if(!t)return;const o=new URLSearchParams(window.location.search),e=o.get("order_id"),n=o.get("confirmation_key");e&&n&&R(e,n).then(()=>{r({text:s.orderCancelled,status:"success"})}).catch(c=>{r({text:c.message,status:"warning"})})},[t,s.orderCancelled]),{confirmOrderCancellation:i}};export{D as u};
