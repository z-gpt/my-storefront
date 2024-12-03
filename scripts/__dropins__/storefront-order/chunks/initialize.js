/*! Copyright 2024 Adobe
All Rights Reserved. */
import{merge as U,Initializer as na}from"@dropins/tools/lib.js";import{events as G}from"@dropins/tools/event-bus.js";import{f as Q,h as Y}from"./fetch-graphql.js";import{a as ea,h as K}from"./convertCase.js";const j=`
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
  }
`,H=`
  fragment ProductDetails on ProductInterface {
    __typename
    canonical_url
    url_key
    uid
    name
    sku
    only_x_left_in_stock
    stock_status
    thumbnail {
      label
      url
    }
    price_range {
      maximum_price {
        regular_price {
          currency
          value
        }
      }
    }
  }
`,J=`
  fragment PriceDetails on OrderItemInterface {
    prices {
      price_including_tax {
        value
        currency
      }
      original_price {
        value
        currency
      }
      original_price_including_tax {
        value
        currency
      }
      price {
        value
        currency
      }
    }
  }
`,V=`
  fragment GiftCardDetails on GiftCardOrderItem {
    ...PriceDetails
    gift_message {
      message
    }
    gift_card {
      recipient_name
      recipient_email
      sender_name
      sender_email
      message
    }
  }
`,W=`
  fragment OrderItemDetails on OrderItemInterface {
    __typename
    status
    product_sku
    eligible_for_return
    product_name
    product_url_key
    id
    quantity_ordered
    quantity_shipped
    quantity_canceled
    quantity_invoiced
    quantity_refunded
    quantity_return_requested
    product_sale_price {
      value
      currency
    }
    selected_options {
      label
      value
    }
    product {
      ...ProductDetails
    }
    ...PriceDetails
  }
`,X=`
  fragment BundleOrderItemDetails on BundleOrderItem {
    ...PriceDetails
    bundle_options {
      uid
      label
      values {
        uid
        product_name
      }
    }
  }
`,Z=`
  fragment OrderSummary on OrderTotal {
    grand_total {
      value
      currency
    }
    total_giftcard {
      currency
      value
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
  }
`,I=`
  fragment OrderReturns on Returns {
  __typename
   items {
    number
    status
    created_at
    shipping {
      tracking {
        status {
          text
          type
        }
        carrier {
          uid
          label
        }
        tracking_number
      }
    }
    order {
      number
      token
    }
    items {
     uid
     quantity
     status
     request_quantity
      order_item {
        ...OrderItemDetails
        ... on GiftCardOrderItem {
          ...GiftCardDetails
          product {
            ...ProductDetails
          }
        }
      }
    }
   }
  }
`,ia=`
  query ORDER_BY_NUMBER($orderNumber: String!, $pageSize: Int) {
    customer {
      orders(filter: { number: { eq: $orderNumber } }) {
        items {
          email
          available_actions
          status
          number
          id
          order_date
          order_status_change_date
          carrier
          shipping_method
          is_virtual
          returns(pageSize: $pageSize) {
            ...OrderReturns
          }
          items_eligible_for_return {
            ...OrderItemDetails
            ... on BundleOrderItem {
              ...BundleOrderItemDetails
            }
            ... on GiftCardOrderItem {
              ...GiftCardDetails
              product {
                ...ProductDetails
              }
            }
            ... on DownloadableOrderItem {
              product_name
              downloadable_links {
                sort_order
                title
              }
            }
          }
          applied_coupons {
            code
          }
          shipments {
            id
            number
            tracking {
              title
              number
              carrier
            }
            comments {
              message
              timestamp
            }
            items {
              id
              product_sku
              product_name
              quantity_shipped
              order_item {
                ...OrderItemDetails
                ... on GiftCardOrderItem {
                  ...GiftCardDetails
                  product {
                    ...ProductDetails
                  }
                }
              }
            }
          }
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
          items {
            ...OrderItemDetails
            ... on BundleOrderItem {
              ...BundleOrderItemDetails
            }
            ... on GiftCardOrderItem {
              ...GiftCardDetails
              product {
                ...ProductDetails
              }
            }
            ... on DownloadableOrderItem {
              product_name
              downloadable_links {
                sort_order
                title
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
  ${H}
  ${J}
  ${V}
  ${W}
  ${X}
  ${Z}
  ${j}
  ${I}
`,ua=a=>{var l,s,r,d,p;if(!((l=a==null?void 0:a.items)!=null&&l.length))return null;const t=a==null?void 0:a.items,n=a==null?void 0:a.page_info,i={ordersReturn:[...t].sort((c,_)=>+_.number-+c.number).map(c=>{var O,f;const{order:_,status:h,number:R,created_at:q}=c,D=((f=(O=c==null?void 0:c.shipping)==null?void 0:O.tracking)==null?void 0:f.map(u=>{const{status:y,carrier:o,tracking_number:g}=u;return{status:y,carrier:o,trackingNumber:g}}))??[],v=c.items.map(u=>{var E;const y=u==null?void 0:u.quantity,o=u==null?void 0:u.status,g=u==null?void 0:u.request_quantity,b=u==null?void 0:u.uid,T=u==null?void 0:u.order_item,m=((E=aa([T]))==null?void 0:E.reduce((N,C)=>C,{}))??{};return{uid:b,quantity:y,status:o,requestQuantity:g,...m}});return{createdReturnAt:q,returnStatus:h,token:_==null?void 0:_.token,orderNumber:_==null?void 0:_.number,returnNumber:R,items:v,tracking:D}}),...n?{pageInfo:{pageSize:n.page_size,totalPages:n.total_pages,currentPage:n.current_page}}:{}};return U(i,(p=(d=(r=(s=k==null?void 0:k.getConfig())==null?void 0:s.models)==null?void 0:r.CustomerOrdersReturnModel)==null?void 0:d.transformer)==null?void 0:p.call(d,{...t,...n}))},sa=a=>a||0,la=a=>{var t,n,e;return{...a,canonicalUrl:(a==null?void 0:a.canonical_url)||"",urlKey:(a==null?void 0:a.url_key)||"",id:(a==null?void 0:a.uid)||"",name:(a==null?void 0:a.name)||"",sku:(a==null?void 0:a.sku)||"",image:((t=a==null?void 0:a.image)==null?void 0:t.url)||"",productType:(a==null?void 0:a.__typename)||"",thumbnail:{label:((n=a==null?void 0:a.thumbnail)==null?void 0:n.label)||"",url:((e=a==null?void 0:a.thumbnail)==null?void 0:e.url)||""}}},ra=a=>{if(!a||!("selected_options"in a))return;const t={};for(const n of a.selected_options)t[n.label]=n.value;return t},ca=a=>{const t=a==null?void 0:a.map(e=>({uid:e.uid,label:e.label,values:e.values.map(i=>i.product_name).join(", ")})),n={};return t==null||t.forEach(e=>{n[e.label]=e.values}),Object.keys(n).length>0?n:null},_a=a=>(a==null?void 0:a.length)>0?{count:a.length,result:a.map(t=>t.title).join(", ")}:null,da=a=>({quantityCanceled:(a==null?void 0:a.quantity_canceled)??0,quantityInvoiced:(a==null?void 0:a.quantity_invoiced)??0,quantityOrdered:(a==null?void 0:a.quantity_ordered)??0,quantityRefunded:(a==null?void 0:a.quantity_refunded)??0,quantityReturned:(a==null?void 0:a.quantity_returned)??0,quantityShipped:(a==null?void 0:a.quantity_shipped)??0,quantityReturnRequested:(a==null?void 0:a.quantity_return_requested)??0}),aa=a=>a==null?void 0:a.filter(t=>t.__typename).map(t=>{var p,c,_,h,R,q,D,v,O,f,u,y,o,g,b,T,m,E,N,C,B,A,$,P,w,x,M,L,F,z;const{quantityCanceled:n,quantityInvoiced:e,quantityOrdered:i,quantityRefunded:l,quantityReturned:s,quantityShipped:r,quantityReturnRequested:d}=da(t);return{type:t==null?void 0:t.__typename,eligibleForReturn:t==null?void 0:t.eligible_for_return,productSku:t==null?void 0:t.product_sku,productName:t.product_name,productUrlKey:t.product_url_key,quantityCanceled:n,quantityInvoiced:e,quantityOrdered:i,quantityRefunded:l,quantityReturned:s,quantityShipped:r,quantityReturnRequested:d,id:t==null?void 0:t.id,discounted:((h=(_=(c=(p=t==null?void 0:t.product)==null?void 0:p.price_range)==null?void 0:c.maximum_price)==null?void 0:_.regular_price)==null?void 0:h.value)*(t==null?void 0:t.quantity_ordered)!==((R=t==null?void 0:t.product_sale_price)==null?void 0:R.value)*(t==null?void 0:t.quantity_ordered),total:{value:((q=t==null?void 0:t.product_sale_price)==null?void 0:q.value)*(t==null?void 0:t.quantity_ordered)||0,currency:((D=t==null?void 0:t.product_sale_price)==null?void 0:D.currency)||""},totalInclTax:{value:((v=t==null?void 0:t.product_sale_price)==null?void 0:v.value)*(t==null?void 0:t.quantity_ordered)||0,currency:(O=t==null?void 0:t.product_sale_price)==null?void 0:O.currency},price:{value:((f=t==null?void 0:t.product_sale_price)==null?void 0:f.value)||0,currency:(u=t==null?void 0:t.product_sale_price)==null?void 0:u.currency},priceInclTax:{value:((y=t==null?void 0:t.product_sale_price)==null?void 0:y.value)||0,currency:(o=t==null?void 0:t.product_sale_price)==null?void 0:o.currency},totalQuantity:sa(t==null?void 0:t.quantity_ordered),regularPrice:{value:(m=(T=(b=(g=t==null?void 0:t.product)==null?void 0:g.price_range)==null?void 0:b.maximum_price)==null?void 0:T.regular_price)==null?void 0:m.value,currency:(B=(C=(N=(E=t==null?void 0:t.product)==null?void 0:E.price_range)==null?void 0:N.maximum_price)==null?void 0:C.regular_price)==null?void 0:B.currency},product:la(t==null?void 0:t.product),thumbnail:{label:(($=(A=t==null?void 0:t.product)==null?void 0:A.thumbnail)==null?void 0:$.label)||"",url:((w=(P=t==null?void 0:t.product)==null?void 0:P.thumbnail)==null?void 0:w.url)||""},giftCard:(t==null?void 0:t.__typename)==="GiftCardOrderItem"?{senderName:((x=t.gift_card)==null?void 0:x.sender_name)||"",senderEmail:((M=t.gift_card)==null?void 0:M.sender_email)||"",recipientEmail:((L=t.gift_card)==null?void 0:L.recipient_email)||"",recipientName:((F=t.gift_card)==null?void 0:F.recipient_name)||"",message:((z=t.gift_card)==null?void 0:z.message)||""}:void 0,configurableOptions:ra(t),bundleOptions:t.__typename==="BundleOrderItem"?ca(t.bundle_options):null,itemPrices:t.prices,downloadableLinks:t.__typename==="DownloadableOrderItem"?_a(t==null?void 0:t.downloadable_links):null}}),S=(a,t)=>{var h,R,q,D,v,O,f,u,y,o;const n=aa(a.items),e=((h=ua(a==null?void 0:a.returns))==null?void 0:h.ordersReturn)??[],i=t?e.filter(g=>g.returnNumber===t):e,{total:l,...s}=ea({...a,items:n,returns:i},"camelCase",{applied_coupons:"coupons",__typename:"__typename",firstname:"firstName",middlename:"middleName",lastname:"lastName",postcode:"postCode",payment_methods:"payments"}),r=(R=a==null?void 0:a.payment_methods)==null?void 0:R[0],d=(r==null?void 0:r.type)||"",p=(r==null?void 0:r.name)||"",c=(q=s==null?void 0:s.items)==null?void 0:q.reduce((g,b)=>g+(b==null?void 0:b.totalQuantity),0),_={...l,...s,totalQuantity:c,shipping:{amount:((D=s==null?void 0:s.total)==null?void 0:D.totalShipping.value)??0,currency:((O=(v=s.total)==null?void 0:v.totalShipping)==null?void 0:O.currency)||"",code:s.shippingMethod??""},payments:[{code:d,name:p}]};return U(_,(o=(y=(u=(f=k==null?void 0:k.getConfig())==null?void 0:f.models)==null?void 0:u.OrderDataModel)==null?void 0:y.transformer)==null?void 0:o.call(y,a))},ya=(a,t,n)=>{var e,i,l,s,r,d,p;if((s=(l=(i=(e=t==null?void 0:t.data)==null?void 0:e.customer)==null?void 0:i.orders)==null?void 0:l.items)!=null&&s.length&&a==="orderData"){const c=(p=(d=(r=t==null?void 0:t.data)==null?void 0:r.customer)==null?void 0:d.orders)==null?void 0:p.items[0];return S(c,n)}return null},va=(a,t)=>{var e,i;if(!((e=a==null?void 0:a.data)!=null&&e.guestOrder))return null;const n=(i=a==null?void 0:a.data)==null?void 0:i.guestOrder;return S(n,t)},pa=(a,t)=>{var e,i;if(!((e=a==null?void 0:a.data)!=null&&e.guestOrderByToken))return null;const n=(i=a==null?void 0:a.data)==null?void 0:i.guestOrderByToken;return S(n,t)},ga=async({orderId:a,returnRef:t,queryType:n,returnsPageSize:e=50})=>await Q(ia,{method:"GET",cache:"force-cache",variables:{orderNumber:a,pageSize:e}}).then(i=>{var l;return(l=i.errors)!=null&&l.length?Y(i.errors):ya(n??"orderData",i,t)}).catch(K),oa=`
  query ORDER_BY_TOKEN($token: String!) {
    guestOrderByToken(input: { token: $token }) {
      email
      id
      number
      order_date
      order_status_change_date
      status
      token
      carrier
      shipping_method
      printed_card_included
      gift_receipt_included
      available_actions
      is_virtual
      items_eligible_for_return {
        ...OrderItemDetails
      }
      returns(pageSize: 50) {
        ...OrderReturns
      }
      payment_methods {
        name
        type
      }
      applied_coupons {
        code
      }
      shipments {
        id
        tracking {
          title
          number
          carrier
        }
        comments {
          message
          timestamp
        }
        items {
          id
          product_sku
          product_name
          order_item {
            ...OrderItemDetails
            ... on GiftCardOrderItem {
              ...GiftCardDetails
              product {
                ...ProductDetails
              }
            }
          }
        }
      }
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
      items {
        ...OrderItemDetails
        ... on BundleOrderItem {
          ...BundleOrderItemDetails
        }
        ... on GiftCardOrderItem {
          ...GiftCardDetails
          product {
            ...ProductDetails
          }
        }
        ... on DownloadableOrderItem {
          product_name
          downloadable_links {
            sort_order
            title
          }
        }
      }
      total {
        ...OrderSummary
      }
    }
  }
  ${H}
  ${J}
  ${V}
  ${W}
  ${X}
  ${Z}
  ${j}
  ${I}
`,Oa=async(a,t)=>await Q(oa,{method:"GET",cache:"no-cache",variables:{token:a}}).then(n=>{var e;return(e=n.errors)!=null&&e.length?Y(n.errors):pa(n,t)}).catch(K),fa="orderData",ba=async a=>{var s;const t=typeof(a==null?void 0:a.orderRef)=="string"?a==null?void 0:a.orderRef:"",n=typeof(a==null?void 0:a.returnRef)=="string"?a==null?void 0:a.returnRef:"",e=t&&typeof(a==null?void 0:a.orderRef)=="string"&&((s=a==null?void 0:a.orderRef)==null?void 0:s.length)>20,i=(a==null?void 0:a.orderData)??null;if(i){G.emit("order/data",{...i,returnNumber:n});return}if(!t)return;const l=e?await Oa(t,n):await ga({orderId:t,returnRef:n,queryType:fa});l?G.emit("order/data",{...l,returnNumber:n}):G.emit("order/error",{source:"order",type:"network",error:"The data was not received."})},ta=new na({init:async a=>{const t={};ta.config.setConfig({...t,...a}),ba(a).catch(console.error)},listeners:()=>[]}),k=ta.config;export{j as A,X as B,V as G,W as O,H as P,I as R,Oa as a,J as b,k as c,Z as d,S as e,va as f,ga as g,ta as i,ua as t};
