/*! Copyright 2024 Adobe
All Rights Reserved. */
import{h as O}from"./network-error.js";import{f as s,h as E}from"./fetch-graphql.js";import{R as f}from"./fragments.js";import{G as a}from"./getGuestOrder.graphql.js";import{events as _}from"@dropins/tools/event-bus.js";import{b as l}from"./transform-customer-orders-returns.js";const I=`
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
`,S=async i=>await s(I,{method:"POST",variables:{orderNumber:i}}).then(e=>{var t,o,c,m,u,R;if((t=e.errors)!=null&&t.length)return E(e.errors);const n=!!((m=(c=(o=e==null?void 0:e.data)==null?void 0:o.reorderItems)==null?void 0:c.cart)!=null&&m.itemsV2.items.length),r=((R=(u=e==null?void 0:e.data)==null?void 0:u.reorderItems)==null?void 0:R.userInputErrors)??[];return{success:n,userInputErrors:r}}).catch(O),T=`
mutation CONFIRM_RETURN_GUEST_ORDER($input: ConfirmReturnInput!) {
  confirmReturn(input: $input) {
    return {
      ...OrderReturn
    }
  }
}
${f}`,$=async(i,e)=>{const n={orderId:i,confirmationKey:e};return alert(n),await s(T,{method:"POST",variables:{input:n}}).then(r=>{var t;return(t=r.errors)!=null&&t.length?E(r.errors):r.data}).catch(O)},d=`
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
`,g=async(i,e)=>s(d,{variables:{orderId:i,confirmationKey:e}}).then(async({errors:n,data:r})=>{var c,m,u,R;const t=[...(c=r==null?void 0:r.confirmCancelOrder)!=null&&c.errorV2?[(m=r==null?void 0:r.confirmCancelOrder)==null?void 0:m.errorV2]:[],...n??[]];let o=null;return(u=r==null?void 0:r.confirmCancelOrder)!=null&&u.order&&(o=l((R=r==null?void 0:r.confirmCancelOrder)==null?void 0:R.order),_.emit("order/data",o)),t.length>0?E(t):o});export{$ as a,g as c,S as r};
