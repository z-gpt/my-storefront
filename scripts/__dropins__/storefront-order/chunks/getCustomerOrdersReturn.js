/*! Copyright 2024 Adobe
All Rights Reserved. */
import{h as t}from"./network-error.js";import{R,P as E,a as _,G as T,O as o,t as s}from"./transform-customer-orders-returns.js";import{f as c}from"./fetch-graphql.js";const n=`
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
${o}
`,G=async(e=10)=>await c(n,{method:"GET",cache:"force-cache",variables:{pageSize:e}}).then(r=>{var a;return console.log("response",r),s((a=r==null?void 0:r.data)==null?void 0:a.customer.returns)}).catch(t);export{G as g};
