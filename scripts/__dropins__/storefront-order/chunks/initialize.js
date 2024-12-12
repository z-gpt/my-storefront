/*! Copyright 2024 Adobe
All Rights Reserved. */
import{merge as D,Initializer as tn}from"@dropins/tools/lib.js";import{events as x}from"@dropins/tools/event-bus.js";import{h as m}from"./network-error.js";import{PRODUCT_DETAILS_FRAGMENT as o,PRICE_DETAILS_FRAGMENT as I,GIFT_CARD_DETAILS_FRAGMENT as r,ORDER_ITEM_DETAILS_FRAGMENT as d,BUNDLE_ORDER_ITEM_DETAILS_FRAGMENT as nn,ORDER_SUMMARY_FRAGMENT as _n,ADDRESS_FRAGMENT as un,RETURNS_FRAGMENT as cn}from"../fragments.js";import{f as ln,h as pn}from"./fetch-graphql.js";const Rn=n=>n||0,En=n=>{var i,_,u,c,p,s,E,R,T;return{...n,onlyXLeftInStock:(n==null?void 0:n.only_x_left_in_stock)??0,stockStatus:(n==null?void 0:n.stock_status)??"",priceRange:{maximumPrice:{regularPrice:{currency:((u=(_=(i=n==null?void 0:n.price_range)==null?void 0:i.maximum_price)==null?void 0:_.regular_price)==null?void 0:u.currency)??"",value:((s=(p=(c=n==null?void 0:n.price_range)==null?void 0:c.maximum_price)==null?void 0:p.regular_price)==null?void 0:s.value)??0}}},canonicalUrl:(n==null?void 0:n.canonical_url)??"",urlKey:(n==null?void 0:n.url_key)||"",id:(n==null?void 0:n.uid)||"",name:(n==null?void 0:n.name)||"",sku:(n==null?void 0:n.sku)||"",image:((E=n==null?void 0:n.image)==null?void 0:E.url)||"",productType:(n==null?void 0:n.__typename)||"",thumbnail:{label:((R=n==null?void 0:n.thumbnail)==null?void 0:R.label)||"",url:((T=n==null?void 0:n.thumbnail)==null?void 0:T.url)||""}}},Tn=n=>{if(!n||!("selected_options"in n))return;const i={};for(const _ of n.selected_options)i[_.label]=_.value;return i},yn=n=>{const i=n==null?void 0:n.map(u=>({uid:u.uid,label:u.label,values:u.values.map(c=>c.product_name).join(", ")})),_={};return i==null||i.forEach(u=>{_[u.label]=u.values}),Object.keys(_).length>0?_:null},gn=n=>(n==null?void 0:n.length)>0?{count:n.length,result:n.map(i=>i.title).join(", ")}:null,An=n=>({quantityCanceled:(n==null?void 0:n.quantity_canceled)??0,quantityInvoiced:(n==null?void 0:n.quantity_invoiced)??0,quantityOrdered:(n==null?void 0:n.quantity_ordered)??0,quantityRefunded:(n==null?void 0:n.quantity_refunded)??0,quantityReturned:(n==null?void 0:n.quantity_returned)??0,quantityShipped:(n==null?void 0:n.quantity_shipped)??0,quantityReturnRequested:(n==null?void 0:n.quantity_return_requested)??0}),Z=n=>({city:(n==null?void 0:n.city)??"",company:(n==null?void 0:n.company)??"",countryCode:(n==null?void 0:n.country_code)??"",fax:(n==null?void 0:n.fax)??"",firstName:(n==null?void 0:n.firstname)??"",lastName:(n==null?void 0:n.lastname)??"",middleName:(n==null?void 0:n.middlename)??"",postCode:(n==null?void 0:n.postcode)??"",prefix:(n==null?void 0:n.prefix)??"",region:(n==null?void 0:n.region)??"",regionId:(n==null?void 0:n.region_id)??"",street:(n==null?void 0:n.street)??[],suffix:(n==null?void 0:n.suffix)??"",telephone:(n==null?void 0:n.telephone)??"",vatId:(n==null?void 0:n.vat_id)??""}),hn=n=>{const i={value:0,currency:""};return{grandTotal:(n==null?void 0:n.grand_total)??i,totalGiftcard:(n==null?void 0:n.total_giftcard)??i,subtotalExclTax:(n==null?void 0:n.subtotal_excl_tax)??i,subtotalInclTax:(n==null?void 0:n.subtotal_incl_tax)??i,taxes:(n==null?void 0:n.taxes)??[],totalTax:(n==null?void 0:n.total_tax)??i,totalShipping:(n==null?void 0:n.total_shipping)??i,discounts:(n==null?void 0:n.discounts)??[]}},an=n=>{var R,T,a,t,G,F,q,k,v,N,f,l,A,h,b,S,O,M,g,y,L,U,w,P,z,e,Y,Q,j,K,V,X,H,J,W;const{quantityCanceled:i,quantityInvoiced:_,quantityOrdered:u,quantityRefunded:c,quantityReturned:p,quantityShipped:s,quantityReturnRequested:E}=An(n);return{selectedOptions:(n==null?void 0:n.selected_options)??[],productSalePrice:n==null?void 0:n.product_sale_price,status:(n==null?void 0:n.status)??"",type:n==null?void 0:n.__typename,eligibleForReturn:(n==null?void 0:n.eligible_for_return)??!1,productSku:(n==null?void 0:n.product_sku)??"",productName:(n==null?void 0:n.product_name)??"",productUrlKey:(n==null?void 0:n.product_url_key)??"",quantityCanceled:i,quantityInvoiced:_,quantityOrdered:u,quantityRefunded:c,quantityReturned:p,quantityShipped:s,quantityReturnRequested:E,id:n==null?void 0:n.id,discounted:((t=(a=(T=(R=n==null?void 0:n.product)==null?void 0:R.price_range)==null?void 0:T.maximum_price)==null?void 0:a.regular_price)==null?void 0:t.value)*(n==null?void 0:n.quantity_ordered)!==((G=n==null?void 0:n.product_sale_price)==null?void 0:G.value)*(n==null?void 0:n.quantity_ordered),total:{value:((F=n==null?void 0:n.product_sale_price)==null?void 0:F.value)*(n==null?void 0:n.quantity_ordered)||0,currency:((q=n==null?void 0:n.product_sale_price)==null?void 0:q.currency)||""},totalInclTax:{value:((k=n==null?void 0:n.product_sale_price)==null?void 0:k.value)*(n==null?void 0:n.quantity_ordered)||0,currency:(v=n==null?void 0:n.product_sale_price)==null?void 0:v.currency},price:{value:((N=n==null?void 0:n.product_sale_price)==null?void 0:N.value)||0,currency:(f=n==null?void 0:n.product_sale_price)==null?void 0:f.currency},prices:{price:(l=n==null?void 0:n.prices)==null?void 0:l.price,priceIncludingTax:(A=n==null?void 0:n.prices)==null?void 0:A.price_including_tax,originalPrice:(h=n==null?void 0:n.prices)==null?void 0:h.original_price,originalPriceIncludingTax:(b=n==null?void 0:n.prices)==null?void 0:b.original_price_including_tax,discounts:(S=n==null?void 0:n.prices)==null?void 0:S.discounts},priceInclTax:{value:((O=n==null?void 0:n.product_sale_price)==null?void 0:O.value)||0,currency:(M=n==null?void 0:n.product_sale_price)==null?void 0:M.currency},totalQuantity:Rn(n==null?void 0:n.quantity_ordered),regularPrice:{value:(U=(L=(y=(g=n==null?void 0:n.product)==null?void 0:g.price_range)==null?void 0:y.maximum_price)==null?void 0:L.regular_price)==null?void 0:U.value,currency:(e=(z=(P=(w=n==null?void 0:n.product)==null?void 0:w.price_range)==null?void 0:P.maximum_price)==null?void 0:z.regular_price)==null?void 0:e.currency},product:En(n==null?void 0:n.product),thumbnail:{label:((Q=(Y=n==null?void 0:n.product)==null?void 0:Y.thumbnail)==null?void 0:Q.label)||"",url:((K=(j=n==null?void 0:n.product)==null?void 0:j.thumbnail)==null?void 0:K.url)||""},giftCard:(n==null?void 0:n.__typename)==="GiftCardOrderItem"?{senderName:((V=n.gift_card)==null?void 0:V.sender_name)||"",senderEmail:((X=n.gift_card)==null?void 0:X.sender_email)||"",recipientEmail:((H=n.gift_card)==null?void 0:H.recipient_email)||"",recipientName:((J=n.gift_card)==null?void 0:J.recipient_name)||"",message:((W=n.gift_card)==null?void 0:W.message)||""}:void 0,configurableOptions:Tn(n),bundleOptions:n.__typename==="BundleOrderItem"?yn(n.bundle_options):null,downloadableLinks:n.__typename==="DownloadableOrderItem"?gn(n==null?void 0:n.downloadable_links):null}},B=n=>n==null?void 0:n.filter(i=>i.__typename).map(i=>an(i)),bn=n=>({token:(n==null?void 0:n.token)??"",email:(n==null?void 0:n.email)??"",status:(n==null?void 0:n.status)??"",number:(n==null?void 0:n.number)??"",id:(n==null?void 0:n.id)??"",carrier:n.carrier??"",coupons:(n==null?void 0:n.applied_coupons)??[],orderDate:(n==null?void 0:n.order_date)??"",isVirtual:(n==null?void 0:n.is_virtual)??!1,availableActions:(n==null?void 0:n.available_actions)??[],orderStatusChangeDate:(n==null?void 0:n.order_status_change_date)??"",shippingMethod:(n==null?void 0:n.shipping_method)??""}),$=(n,i)=>{var N,f,l,A,h,b,S,O,M;const _=bn(n),u=Z(n==null?void 0:n.billing_address),c=Z(n==null?void 0:n.shipping_address),p=(N=n.shipments)==null?void 0:N.map(g=>({...g,items:g.items.map(y=>({id:y.id,productName:y.product_name,productSku:y.product_sku,quantityShipped:y.quantity_shipped,orderItem:an(y.order_item)}))})),s=B(n.items),E=((f=Nn(n==null?void 0:n.returns))==null?void 0:f.ordersReturn)??[],R=i?E.filter(g=>g.returnNumber===i):E,T=B(n.items_eligible_for_return),a=hn(n==null?void 0:n.total),t=(l=n==null?void 0:n.payment_methods)==null?void 0:l[0],G=n==null?void 0:n.shipping_method,F=s==null?void 0:s.reduce((g,y)=>g+(y==null?void 0:y.totalQuantity),0),q={amount:((A=a==null?void 0:a.totalShipping)==null?void 0:A.value)??0,currency:((h=a==null?void 0:a.totalShipping)==null?void 0:h.currency)||"",code:(_==null?void 0:_.shippingMethod)??""},k=[{code:(t==null?void 0:t.type)??"",name:(t==null?void 0:t.name)??""}],v={..._,...a,billingAddress:u,shippingAddress:c,shipments:p,items:s,returns:R,itemsEligibleForReturn:T,totalQuantity:F,shippingMethod:G,shipping:q,payments:k};return D(v,(M=(O=(S=(b=C==null?void 0:C.getConfig())==null?void 0:b.models)==null?void 0:S.OrderDataModel)==null?void 0:O.transformer)==null?void 0:M.call(O,n))},On=(n,i,_)=>{var u,c,p,s,E,R,T;if((s=(p=(c=(u=i==null?void 0:i.data)==null?void 0:u.customer)==null?void 0:c.orders)==null?void 0:p.items)!=null&&s.length&&n==="orderData"){const a=(T=(R=(E=i==null?void 0:i.data)==null?void 0:E.customer)==null?void 0:R.orders)==null?void 0:T.items[0];return $(a,_)}return null},Nn=n=>{var p,s,E,R,T;if(!((p=n==null?void 0:n.items)!=null&&p.length))return null;const i=n==null?void 0:n.items,_=n==null?void 0:n.page_info,c={ordersReturn:[...i].sort((a,t)=>+t.number-+a.number).map(a=>{var N,f;const{order:t,status:G,number:F,created_at:q}=a,k=((f=(N=a==null?void 0:a.shipping)==null?void 0:N.tracking)==null?void 0:f.map(l=>{const{status:A,carrier:h,tracking_number:b}=l;return{status:A,carrier:h,trackingNumber:b}}))??[],v=a.items.map(l=>{var g;const A=l==null?void 0:l.quantity,h=l==null?void 0:l.status,b=l==null?void 0:l.request_quantity,S=l==null?void 0:l.uid,O=l==null?void 0:l.order_item,M=((g=B([O]))==null?void 0:g.reduce((y,L)=>L,{}))??{};return{uid:S,quantity:A,status:h,requestQuantity:b,...M}});return{createdReturnAt:q,returnStatus:G,token:t==null?void 0:t.token,orderNumber:t==null?void 0:t.number,returnNumber:F,items:v,tracking:k}}),..._?{pageInfo:{pageSize:_.page_size,totalPages:_.total_pages,currentPage:_.current_page}}:{}};return D(c,(T=(R=(E=(s=C==null?void 0:C.getConfig())==null?void 0:s.models)==null?void 0:E.CustomerOrdersReturnModel)==null?void 0:R.transformer)==null?void 0:T.call(R,{...i,..._}))},$n=(n,i)=>{var u,c;if(!((u=n==null?void 0:n.data)!=null&&u.guestOrder))return null;const _=(c=n==null?void 0:n.data)==null?void 0:c.guestOrder;return $(_,i)},fn=(n,i)=>{var u,c;if(!((u=n==null?void 0:n.data)!=null&&u.guestOrderByToken))return null;const _=(c=n==null?void 0:n.data)==null?void 0:c.guestOrderByToken;return $(_,i)},Sn=`
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
            ...RETURNS_FRAGMENT
          }
          items_eligible_for_return {
            ...ORDER_ITEM_DETAILS_FRAGMENT
            ... on BundleOrderItem {
              ...BUNDLE_ORDER_ITEM_DETAILS_FRAGMENT
            }
            ... on GiftCardOrderItem {
              ...GIFT_CARD_DETAILS_FRAGMENT
              product {
                ...PRODUCT_DETAILS_FRAGMENT
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
                ...ORDER_ITEM_DETAILS_FRAGMENT
                ... on GiftCardOrderItem {
                  ...GIFT_CARD_DETAILS_FRAGMENT
                  product {
                    ...PRODUCT_DETAILS_FRAGMENT
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
            ...ADDRESS_FRAGMENT
          }
          billing_address {
            ...ADDRESS_FRAGMENT
          }
          items {
            ...ORDER_ITEM_DETAILS_FRAGMENT
            ... on BundleOrderItem {
              ...BUNDLE_ORDER_ITEM_DETAILS_FRAGMENT
            }
            ... on GiftCardOrderItem {
              ...GIFT_CARD_DETAILS_FRAGMENT
              product {
                ...PRODUCT_DETAILS_FRAGMENT
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
            ...ORDER_SUMMARY_FRAGMENT
          }
        }
      }
    }
  }
  ${o}
  ${I}
  ${r}
  ${d}
  ${nn}
  ${_n}
  ${un}
  ${cn}
`,Mn=async({orderId:n,returnRef:i,queryType:_,returnsPageSize:u=50})=>await ln(Sn,{method:"GET",cache:"force-cache",variables:{orderNumber:n,pageSize:u}}).then(c=>On(_??"orderData",c,i)).catch(m),Gn=`
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
        ...ORDER_ITEM_DETAILS_FRAGMENT
      }
      returns(pageSize: 50) {
        ...RETURNS_FRAGMENT
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
            ...ORDER_ITEM_DETAILS_FRAGMENT
            ... on GiftCardOrderItem {
              ...GIFT_CARD_DETAILS_FRAGMENT
              product {
                ...PRODUCT_DETAILS_FRAGMENT
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
        ...ADDRESS_FRAGMENT
      }
      billing_address {
        ...ADDRESS_FRAGMENT
      }
      items {
        ...ORDER_ITEM_DETAILS_FRAGMENT
        ... on BundleOrderItem {
          ...BUNDLE_ORDER_ITEM_DETAILS_FRAGMENT
        }
        ... on GiftCardOrderItem {
          ...GIFT_CARD_DETAILS_FRAGMENT
          product {
            ...PRODUCT_DETAILS_FRAGMENT
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
        ...ORDER_SUMMARY_FRAGMENT
      }
    }
  }
  ${o}
  ${I}
  ${r}
  ${d}
  ${nn}
  ${_n}
  ${un}
  ${cn}
`,Fn=async(n,i)=>await ln(Gn,{method:"GET",cache:"no-cache",variables:{token:n}}).then(_=>{var u;return(u=_.errors)!=null&&u.length&&_.errors[0].message==="Please login to view the order."?pn(_.errors):fn(_,i)}).catch(m),qn="orderData",kn=async n=>{var s;const i=typeof(n==null?void 0:n.orderRef)=="string"?n==null?void 0:n.orderRef:"",_=typeof(n==null?void 0:n.returnRef)=="string"?n==null?void 0:n.returnRef:"",u=i&&typeof(n==null?void 0:n.orderRef)=="string"&&((s=n==null?void 0:n.orderRef)==null?void 0:s.length)>20,c=(n==null?void 0:n.orderData)??null;if(c){x.emit("order/data",{...c,returnNumber:_});return}if(!i)return;const p=u?await Fn(i,_):await Mn({orderId:i,returnRef:_,queryType:qn});p?x.emit("order/data",{...p,returnNumber:_}):x.emit("order/error",{source:"order",type:"network",error:"The data was not received."})},sn=new tn({init:async n=>{const i={};sn.config.setConfig({...i,...n}),n&&Object.keys(n).length!==0&&kn(n).catch(console.error)},listeners:()=>[]}),C=sn.config;export{$ as a,$n as b,Fn as c,C as d,Mn as g,sn as i,Nn as t};
