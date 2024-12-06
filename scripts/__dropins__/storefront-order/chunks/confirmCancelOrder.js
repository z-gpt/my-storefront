/*! Copyright 2024 Adobe
All Rights Reserved. */
import{h as O}from"./network-error.js";import{f as s,h as E}from"./fetch-graphql.js";import{R as f}from"./fragments.js";import{G as _}from"./getGuestOrder.graphql.js";import{events as a}from"@dropins/tools/event-bus.js";import{b as I}from"./transform-customer-orders-returns.js";const T=`
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
`,S=async o=>await s(T,{method:"POST",variables:{orderNumber:o}}).then(e=>{var i,n,m,c,u,R;if((i=e.errors)!=null&&i.length)return E(e.errors);const t=!!((c=(m=(n=e==null?void 0:e.data)==null?void 0:n.reorderItems)==null?void 0:m.cart)!=null&&c.itemsV2.items.length),r=((R=(u=e==null?void 0:e.data)==null?void 0:u.reorderItems)==null?void 0:R.userInputErrors)??[];return{success:t,userInputErrors:r}}).catch(O),l=`
mutation CONFIRM_RETURN_GUEST_ORDER($input: ConfirmReturnInput!) {
  confirmReturn(input: $input) {
    return {
      ...OrderReturn
    }
  }
}
${f}`,$=async(o,e)=>await s(l,{method:"POST",variables:{input:{orderId:o,confirmationKey:e}}}).then(t=>{var r;return(r=t.errors)!=null&&r.length?E(t.errors):t.data}).catch(O),d=`
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
${_}
`,g=async(o,e)=>s(d,{variables:{orderId:o,confirmationKey:e}}).then(async({errors:t,data:r})=>{var m,c,u,R;const i=[...(m=r==null?void 0:r.confirmCancelOrder)!=null&&m.errorV2?[(c=r==null?void 0:r.confirmCancelOrder)==null?void 0:c.errorV2]:[],...t??[]];let n=null;return(u=r==null?void 0:r.confirmCancelOrder)!=null&&u.order&&(n=I((R=r==null?void 0:r.confirmCancelOrder)==null?void 0:R.order),a.emit("order/data",n)),i.length>0?E(i):n});export{$ as a,g as c,S as r};
