/*! Copyright 2024 Adobe
All Rights Reserved. */
import{t as u,k as i,f as _,l as p}from"./removeCustomerAddress.js";const f=(e,r="en-US",s={})=>{const t={...{day:"2-digit",month:"2-digit",year:"numeric"},...s},a=new Date(e);return isNaN(a.getTime())?"Invalid Date":new Intl.DateTimeFormat(r,t).format(a)},g=e=>{var d,c;if(!((c=(d=e.data)==null?void 0:d.customer)!=null&&c.orders))return null;const{items:r,page_info:s,total_count:n,date_of_first_order:t}=e.data.customer.orders,{returns:a}=e.data.customer;return{items:r.map(o=>{const l={...o,returns:a==null?void 0:a.items.filter(m=>m.order.id===o.id),order_date:f(o.order_date),shipping_address:u(o.shipping_address),billing_address:u(o.billing_address)};return i(l,"camelCase",{})}),pageInfo:i(s,"camelCase",{}),totalCount:i(n,"camelCase",{}),dateOfFirstOrder:i(t,"camelCase",{})}},y=`
fragment AddressesList on OrderAddress {
  city
  company
  country_code
  fax
  firstname
  lastname
  middlename
  postcode
  prefix
  region
  region_id
  street
  suffix
  telephone
  vat_id
}`,O=`
fragment OrderSummary on OrderTotal {
  __typename
  grand_total {
    value
    currency
  }
  subtotal {
    currency
    value
  }
  taxes {
    amount {
      currency
      value
    }
    rate
    title
  }
  total_tax {
    currency
    value
  }
  total_shipping {
    currency
    value
  }
  discounts {
    amount {
      currency
      value
    }
    label
  }
}`,S=`
  query GET_CUSTOMER_ORDERS_LIST($currentPage: Int, $pageSize: Int, $filter: CustomerOrdersFilterInput, $sort: CustomerOrderSortInput) {
  customer {
    returns {
      items {
        uid
        number
        order {
          id
        }
      }
    }
    orders(currentPage: $currentPage, pageSize: $pageSize, filter: $filter, sort: $sort) {
      page_info {
        page_size
        total_pages
        current_page
      }
      date_of_first_order
      total_count
      items {
        token
        email
        shipping_method
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
        shipments {
        id
        number
        tracking {
          title
          number
          carrier
          }
        }
        number
        id
        order_date
        carrier
        status
        items {
          status
          product_name
          id
          quantity_ordered
          quantity_shipped
          quantity_invoiced
          product {
            sku
            url_key
            small_image {
              url
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
${y}
${O}
`,h={sort_direction:"DESC",sort_field:"CREATED_AT"},E=async(e,r,s)=>{const n=r.includes("viewAll")?{}:{order_date:JSON.parse(r)};return await _(S,{method:"GET",cache:"no-cache",variables:{pageSize:e,currentPage:s,filter:n,sort:h}}).then(t=>(console.log("response.errors",t.errors),g(t))).catch(p)};export{E as g};
