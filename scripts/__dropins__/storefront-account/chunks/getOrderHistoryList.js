/*! Copyright 2024 Adobe
All Rights Reserved. */
import{t as u,m as i,f as _,l as p}from"./removeCustomerAddress.js";const f=(e,t="en-US",a={})=>{const s={...{day:"2-digit",month:"2-digit",year:"numeric"},...a},r=new Date(e);return isNaN(r.getTime())?"Invalid Date":new Intl.DateTimeFormat(t,s).format(r)},g=e=>{var d,c;if(!((c=(d=e.data)==null?void 0:d.customer)!=null&&c.orders))return null;const{items:t,page_info:a,total_count:o,date_of_first_order:s}=e.data.customer.orders,{returns:r}=e.data.customer;return{items:t.map(n=>{const l={...n,returns:r==null?void 0:r.items.filter(m=>m.order.id===n.id),order_date:f(n.order_date),shipping_address:u(n.shipping_address),billing_address:u(n.billing_address)};return i(l,"camelCase",{})}),pageInfo:i(a,"camelCase",{}),totalCount:i(o,"camelCase",{}),dateOfFirstOrder:i(s,"camelCase",{})}},y=`
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
`,h={sort_direction:"DESC",sort_field:"CREATED_AT"},E=async(e,t,a)=>{const o=t.includes("viewAll")?{}:{order_date:JSON.parse(t)};return await _(S,{method:"GET",cache:"no-cache",variables:{pageSize:e,currentPage:a,filter:o,sort:h}}).then(s=>g(s)).catch(p)};export{E as g};
