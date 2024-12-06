/*! Copyright 2024 Adobe
All Rights Reserved. */
import{h as O}from"./network-error.js";import{f as u,h as E}from"./fetch-graphql.js";import{R as f}from"./fragments.js";import{G as a}from"./getGuestOrder.graphql.js";import{events as _}from"@dropins/tools/event-bus.js";import{b as I}from"./transform-customer-orders-returns.js";const d=`
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
`,D=async o=>await u(d,{method:"POST",variables:{orderNumber:o}}).then(e=>{var i,n,m,c,s,R;if((i=e.errors)!=null&&i.length)return E(e.errors);const t=!!((c=(m=(n=e==null?void 0:e.data)==null?void 0:n.reorderItems)==null?void 0:m.cart)!=null&&c.itemsV2.items.length),r=((R=(s=e==null?void 0:e.data)==null?void 0:s.reorderItems)==null?void 0:R.userInputErrors)??[];return{success:t,userInputErrors:r}}).catch(O),N=`
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
${f}`,M=async(o,e)=>(sessionStorage.setItem("212121212121",JSON.stringify({orderId:o,confirmationKey:e})),await u(N,{method:"POST",variables:{orderId:o,confirmationKey:e}}).then(t=>{var r;return(r=t.errors)!=null&&r.length?(sessionStorage.setItem("111111111",JSON.stringify(t.errors)),E(t.errors)):t.data}).catch(O)),T=`
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
`,$=async(o,e)=>u(T,{variables:{orderId:o,confirmationKey:e}}).then(async({errors:t,data:r})=>{var m,c,s,R;const i=[...(m=r==null?void 0:r.confirmCancelOrder)!=null&&m.errorV2?[(c=r==null?void 0:r.confirmCancelOrder)==null?void 0:c.errorV2]:[],...t??[]];let n=null;return(s=r==null?void 0:r.confirmCancelOrder)!=null&&s.order&&(n=I((R=r==null?void 0:r.confirmCancelOrder)==null?void 0:R.order),_.emit("order/data",n)),i.length>0?E(i):n});export{M as a,$ as c,D as r};
