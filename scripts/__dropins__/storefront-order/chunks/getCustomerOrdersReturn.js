/*! Copyright 2024 Adobe
All Rights Reserved. */
import{h as o}from"./network-error.js";import{R,P as E,a as s,G as c,O as _,t as n}from"./transform-customer-orders-returns.js";import{f as T}from"./fetch-graphql.js";const g=`
query GET_CUSTOMER_ORDERS_RETURN($currentPage: Int, $pageSize: Int) {
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
${R}
${E}
${s}
${c}
${_}
`,S=async(e=10,t)=>(console.log("pageSize",e),console.log("///////"),console.log("currentPage",t),await T(g,{method:"GET",cache:"force-cache",variables:{pageSize:e,currentPage:t}}).then(r=>{var a;return console.log("response",r),n((a=r==null?void 0:r.data)==null?void 0:a.customer.returns)}).catch(o));export{S as g};
