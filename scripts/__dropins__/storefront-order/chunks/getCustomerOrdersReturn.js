/*! Copyright 2024 Adobe
All Rights Reserved. */
import{h as e}from"./network-error.js";import{R,P as E,a as _,G as T,O as s,t as o}from"./transform-customer-orders-returns.js";import{f as c}from"./fetch-graphql.js";const u=`
query GET_CUSTOMER_ORDERS_RETURN($pageSize: Int) {
 customer {
  returns(pageSize: $pageSize) {
    page_info {
      page_size
      total_pages
      current_page
    }
    ...OrderReturns
  }
 }
}
${R}
${E}
${_}
${T}
${s}
`,G=async(t=10)=>await c(u,{method:"GET",cache:"force-cache",variables:{pageSize:t}}).then(r=>{var a;return o((a=r==null?void 0:r.data)==null?void 0:a.customer.returns)}).catch(e);export{G as g};
