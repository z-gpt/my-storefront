/*! Copyright 2024 Adobe
All Rights Reserved. */
import{t as p,m as n,f as S,l as h}from"./removeCustomerAddress.js";const T=(t,r="en-US",a={})=>{const e={...{day:"2-digit",month:"2-digit",year:"numeric"},...a},o=new Date(t);return isNaN(o.getTime())?"Invalid Date":new Intl.DateTimeFormat(r,e).format(o)},E=t=>{var d,c,u,m,l,_,f;if(!((c=(d=t.data)==null?void 0:d.customer)!=null&&c.orders))return null;const{page_info:r,total_count:a,date_of_first_order:i}=t.data.customer.orders,e=((m=(u=t==null?void 0:t.data)==null?void 0:u.customer)==null?void 0:m.returns)??[];return{items:(((f=(_=(l=t==null?void 0:t.data)==null?void 0:l.customer)==null?void 0:_.orders)==null?void 0:f.items)??[]).map(s=>{var g;const y={...s,returns:(g=e==null?void 0:e.items)==null?void 0:g.filter(O=>O.order.id===s.id),order_date:T(s.order_date),shipping_address:p(s.shipping_address),billing_address:p(s.billing_address)};return n(y,"camelCase",{})}),pageInfo:n(r,"camelCase",{}),totalCount:n(a,"camelCase",{}),dateOfFirstOrder:n(i,"camelCase",{})}},C=`
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
}`,R=`
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
}`,v=`
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
${C}
${R}
`,D={sort_direction:"DESC",sort_field:"CREATED_AT"},b=async(t,r,a)=>{const i=r.includes("viewAll")?{}:{order_date:JSON.parse(r)};return await S(v,{method:"GET",cache:"no-cache",variables:{pageSize:t,currentPage:a,filter:i,sort:D}}).then(e=>E(e)).catch(h)};export{b as g};
