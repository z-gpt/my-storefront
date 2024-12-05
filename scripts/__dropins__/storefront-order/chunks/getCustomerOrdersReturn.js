/*! Copyright 2024 Adobe
All Rights Reserved. */
import{h as R}from"./network-error.js";import{R as E,P as o,a as _,G as s,O as T,t as c}from"./transform-customer-orders-returns.js";import{f as n}from"./fetch-graphql.js";const u=`
query GET_CUSTOMER_ORDERS_RETURN($currentPage: Int) {
 customer {
  returns(currentPage: $currentPage, pageSize: $pageSize) {
    page_info {
      page_size
      total_pages
      current_page
    }
    ...OrderReturns
  }
 }
}
${E}
${o}
${_}
${s}
${T}
`,S=async(a=10,e)=>(console.log("currentPage",e),await n(u,{method:"GET",cache:"force-cache",variables:{pageSize:a,currentPage:e}}).then(r=>{var t;return console.log("response",r),c((t=r==null?void 0:r.data)==null?void 0:t.customer.returns)}).catch(R));export{S as g};
