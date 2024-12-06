/*! Copyright 2024 Adobe
All Rights Reserved. */
import{h as f}from"./network-error.js";import{f as s,h as E}from"./fetch-graphql.js";import{R as O}from"./fragments.js";import{G as a}from"./getGuestOrder.graphql.js";import{events as _}from"@dropins/tools/event-bus.js";import{b as d}from"./transform-customer-orders-returns.js";const I=`
mutation REORDER_ITEMS_MUTATION($orderNumber: String!) {
  reorderItems(orderNumber: $orderNumber) {
    cart {
      itemsV2 {
        items {
          uid
        }
      }
    }
    userInputErrors{
      code
      message
      path
    }
  }
}
`,y=async n=>await s(I,{method:"POST",variables:{orderNumber:n}}).then(e=>{var i,t,c,m,R,u;if((i=e.errors)!=null&&i.length)return E(e.errors);const o=!!((m=(c=(t=e==null?void 0:e.data)==null?void 0:t.reorderItems)==null?void 0:c.cart)!=null&&m.itemsV2.items.length),r=((u=(R=e==null?void 0:e.data)==null?void 0:R.reorderItems)==null?void 0:u.userInputErrors)??[];return{success:o,userInputErrors:r}}).catch(f),T=`
mutation CONFIRM_RETURN_GUEST_ORDER(
  $orderId: ID!,
  $confirmationKey: String!
  ) {
  confirmReturn(input: {
      order_id: $orderId,
      confirmation_key: $confirmationKey
    }) {
    return {
      ...OrderReturn
    }
  }
}
${O}`,S=async(n,e)=>await s(T,{method:"POST",variables:{orderId:n,confirmationKey:e}}).then(o=>{var r;return(r=o.errors)!=null&&r.length?E(o.errors):o.data}).catch(f),l=`
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
${a}
`,U=async(n,e)=>s(l,{variables:{orderId:n,confirmationKey:e}}).then(async({errors:o,data:r})=>{var c,m,R,u;const i=[...(c=r==null?void 0:r.confirmCancelOrder)!=null&&c.errorV2?[(m=r==null?void 0:r.confirmCancelOrder)==null?void 0:m.errorV2]:[],...o??[]];let t=null;return(R=r==null?void 0:r.confirmCancelOrder)!=null&&R.order&&(t=d((u=r==null?void 0:r.confirmCancelOrder)==null?void 0:u.order),_.emit("order/data",t)),i.length>0?E(i):t});export{S as a,U as c,y as r};
