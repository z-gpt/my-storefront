/*! Copyright 2024 Adobe
All Rights Reserved. */
import{merge as d,Initializer as yn}from"@dropins/tools/lib.js";import{events as L}from"@dropins/tools/event-bus.js";import{h as nn}from"./network-error.js";import{PRODUCT_DETAILS_FRAGMENT as _n,PRICE_DETAILS_FRAGMENT as un,GIFT_CARD_DETAILS_FRAGMENT as cn,ORDER_ITEM_DETAILS_FRAGMENT as ln,BUNDLE_ORDER_ITEM_DETAILS_FRAGMENT as sn,ORDER_SUMMARY_FRAGMENT as an,ADDRESS_FRAGMENT as pn,RETURNS_FRAGMENT as Rn}from"../fragments.js";import{f as tn,h as gn}from"./fetch-graphql.js";const An=n=>n||0,hn=n=>{var i,_,u,c,R,a,E,t,T;return{...n,onlyXLeftInStock:(n==null?void 0:n.only_x_left_in_stock)??0,stockStatus:(n==null?void 0:n.stock_status)??"",priceRange:{maximumPrice:{regularPrice:{currency:((u=(_=(i=n==null?void 0:n.price_range)==null?void 0:i.maximum_price)==null?void 0:_.regular_price)==null?void 0:u.currency)??"",value:((a=(R=(c=n==null?void 0:n.price_range)==null?void 0:c.maximum_price)==null?void 0:R.regular_price)==null?void 0:a.value)??0}}},canonicalUrl:(n==null?void 0:n.canonical_url)??"",urlKey:(n==null?void 0:n.url_key)||"",id:(n==null?void 0:n.uid)||"",name:(n==null?void 0:n.name)||"",sku:(n==null?void 0:n.sku)||"",image:((E=n==null?void 0:n.image)==null?void 0:E.url)||"",productType:(n==null?void 0:n.__typename)||"",thumbnail:{label:((t=n==null?void 0:n.thumbnail)==null?void 0:t.label)||"",url:((T=n==null?void 0:n.thumbnail)==null?void 0:T.url)||""}}},bn=n=>{if(!n||!("selected_options"in n))return;const i={};for(const _ of n.selected_options)i[_.label]=_.value;return i},On=n=>{const i=n==null?void 0:n.map(u=>({uid:u.uid,label:u.label,values:u.values.map(c=>c.product_name).join(", ")})),_={};return i==null||i.forEach(u=>{_[u.label]=u.values}),Object.keys(_).length>0?_:null},Nn=n=>(n==null?void 0:n.length)>0?{count:n.length,result:n.map(i=>i.title).join(", ")}:null,fn=n=>({quantityCanceled:(n==null?void 0:n.quantity_canceled)??0,quantityInvoiced:(n==null?void 0:n.quantity_invoiced)??0,quantityOrdered:(n==null?void 0:n.quantity_ordered)??0,quantityRefunded:(n==null?void 0:n.quantity_refunded)??0,quantityReturned:(n==null?void 0:n.quantity_returned)??0,quantityShipped:(n==null?void 0:n.quantity_shipped)??0,quantityReturnRequested:(n==null?void 0:n.quantity_return_requested)??0}),r=n=>({city:(n==null?void 0:n.city)??"",company:(n==null?void 0:n.company)??"",countryCode:(n==null?void 0:n.country_code)??"",fax:(n==null?void 0:n.fax)??"",firstName:(n==null?void 0:n.firstname)??"",lastName:(n==null?void 0:n.lastname)??"",middleName:(n==null?void 0:n.middlename)??"",postCode:(n==null?void 0:n.postcode)??"",prefix:(n==null?void 0:n.prefix)??"",region:(n==null?void 0:n.region)??"",regionId:(n==null?void 0:n.region_id)??"",street:(n==null?void 0:n.street)??[],suffix:(n==null?void 0:n.suffix)??"",telephone:(n==null?void 0:n.telephone)??"",vatId:(n==null?void 0:n.vat_id)??""}),Sn=n=>{const i={value:0,currency:""};return{grandTotal:(n==null?void 0:n.grand_total)??i,totalGiftcard:(n==null?void 0:n.total_giftcard)??i,subtotalExclTax:(n==null?void 0:n.subtotal_excl_tax)??i,subtotalInclTax:(n==null?void 0:n.subtotal_incl_tax)??i,taxes:(n==null?void 0:n.taxes)??[],totalTax:(n==null?void 0:n.total_tax)??i,totalShipping:(n==null?void 0:n.total_shipping)??i,discounts:(n==null?void 0:n.discounts)??[]}},En=n=>{var t,T,s,p,G,F,q,k,v,N,f,l,A,h,b,S,O,M,g,y,C,U,w,P,z,Y,Q,j,K,V,X,H,J,W,Z,D,e,m,o,I;const{quantityCanceled:i,quantityInvoiced:_,quantityOrdered:u,quantityRefunded:c,quantityReturned:R,quantityShipped:a,quantityReturnRequested:E}=fn(n);return{selectedOptions:(n==null?void 0:n.selected_options)??[],productSalePrice:n==null?void 0:n.product_sale_price,status:(n==null?void 0:n.status)??"",type:n==null?void 0:n.__typename,eligibleForReturn:(n==null?void 0:n.eligible_for_return)??!1,productSku:(n==null?void 0:n.product_sku)??"",productName:(n==null?void 0:n.product_name)??"",productUrlKey:(n==null?void 0:n.product_url_key)??"",quantityCanceled:i,quantityInvoiced:_,quantityOrdered:u,quantityRefunded:c,quantityReturned:R,quantityShipped:a,quantityReturnRequested:E,id:n==null?void 0:n.id,discounted:((p=(s=(T=(t=n==null?void 0:n.product)==null?void 0:t.price_range)==null?void 0:T.maximum_price)==null?void 0:s.regular_price)==null?void 0:p.value)*(n==null?void 0:n.quantity_ordered)!==((G=n==null?void 0:n.product_sale_price)==null?void 0:G.value)*(n==null?void 0:n.quantity_ordered),total:{value:((F=n==null?void 0:n.product_sale_price)==null?void 0:F.value)*(n==null?void 0:n.quantity_ordered)||0,currency:((q=n==null?void 0:n.product_sale_price)==null?void 0:q.currency)||""},totalInclTax:{value:((k=n==null?void 0:n.product_sale_price)==null?void 0:k.value)*(n==null?void 0:n.quantity_ordered)||0,currency:(v=n==null?void 0:n.product_sale_price)==null?void 0:v.currency},price:{value:((N=n==null?void 0:n.product_sale_price)==null?void 0:N.value)||0,currency:(f=n==null?void 0:n.product_sale_price)==null?void 0:f.currency},prices:{price:(l=n==null?void 0:n.prices)==null?void 0:l.price,priceIncludingTax:(A=n==null?void 0:n.prices)==null?void 0:A.price_including_tax,originalPrice:(h=n==null?void 0:n.prices)==null?void 0:h.original_price,originalPriceIncludingTax:(b=n==null?void 0:n.prices)==null?void 0:b.original_price_including_tax,discounts:(S=n==null?void 0:n.prices)==null?void 0:S.discounts},itemPrices:{price:(O=n==null?void 0:n.prices)==null?void 0:O.price,priceIncludingTax:(M=n==null?void 0:n.prices)==null?void 0:M.price_including_tax,originalPrice:(g=n==null?void 0:n.prices)==null?void 0:g.original_price,originalPriceIncludingTax:(y=n==null?void 0:n.prices)==null?void 0:y.original_price_including_tax,discounts:(C=n==null?void 0:n.prices)==null?void 0:C.discounts},priceInclTax:{value:((U=n==null?void 0:n.product_sale_price)==null?void 0:U.value)||0,currency:(w=n==null?void 0:n.product_sale_price)==null?void 0:w.currency},totalQuantity:An(n==null?void 0:n.quantity_ordered),regularPrice:{value:(Q=(Y=(z=(P=n==null?void 0:n.product)==null?void 0:P.price_range)==null?void 0:z.maximum_price)==null?void 0:Y.regular_price)==null?void 0:Q.value,currency:(X=(V=(K=(j=n==null?void 0:n.product)==null?void 0:j.price_range)==null?void 0:K.maximum_price)==null?void 0:V.regular_price)==null?void 0:X.currency},product:hn(n==null?void 0:n.product),thumbnail:{label:((J=(H=n==null?void 0:n.product)==null?void 0:H.thumbnail)==null?void 0:J.label)||"",url:((Z=(W=n==null?void 0:n.product)==null?void 0:W.thumbnail)==null?void 0:Z.url)||""},giftCard:(n==null?void 0:n.__typename)==="GiftCardOrderItem"?{senderName:((D=n.gift_card)==null?void 0:D.sender_name)||"",senderEmail:((e=n.gift_card)==null?void 0:e.sender_email)||"",recipientEmail:((m=n.gift_card)==null?void 0:m.recipient_email)||"",recipientName:((o=n.gift_card)==null?void 0:o.recipient_name)||"",message:((I=n.gift_card)==null?void 0:I.message)||""}:void 0,configurableOptions:bn(n),bundleOptions:n.__typename==="BundleOrderItem"?On(n.bundle_options):null,downloadableLinks:n.__typename==="DownloadableOrderItem"?Nn(n==null?void 0:n.downloadable_links):null}},B=n=>n==null?void 0:n.filter(i=>i.__typename).map(i=>En(i)),Mn=n=>({token:(n==null?void 0:n.token)??"",email:(n==null?void 0:n.email)??"",status:(n==null?void 0:n.status)??"",number:(n==null?void 0:n.number)??"",id:(n==null?void 0:n.id)??"",carrier:n.carrier??"",coupons:(n==null?void 0:n.applied_coupons)??[],orderDate:(n==null?void 0:n.order_date)??"",isVirtual:(n==null?void 0:n.is_virtual)??!1,availableActions:(n==null?void 0:n.available_actions)??[],orderStatusChangeDate:(n==null?void 0:n.order_status_change_date)??"",shippingMethod:(n==null?void 0:n.shipping_method)??""}),$=(n,i)=>{var N,f,l,A,h,b,S,O,M;const _=Mn(n),u=r(n==null?void 0:n.billing_address),c=r(n==null?void 0:n.shipping_address),R=(N=n.shipments)==null?void 0:N.map(g=>({...g,items:g.items.map(y=>({id:y.id,productName:y.product_name,productSku:y.product_sku,quantityShipped:y.quantity_shipped,orderItem:En(y.order_item)}))})),a=B(n.items),E=((f=Fn(n==null?void 0:n.returns))==null?void 0:f.ordersReturn)??[],t=i?E.filter(g=>g.returnNumber===i):E,T=B(n.items_eligible_for_return),s=Sn(n==null?void 0:n.total),p=(l=n==null?void 0:n.payment_methods)==null?void 0:l[0],G=n==null?void 0:n.shipping_method,F=a==null?void 0:a.reduce((g,y)=>g+(y==null?void 0:y.totalQuantity),0),q={amount:((A=s==null?void 0:s.totalShipping)==null?void 0:A.value)??0,currency:((h=s==null?void 0:s.totalShipping)==null?void 0:h.currency)||"",code:(_==null?void 0:_.shippingMethod)??""},k=[{code:(p==null?void 0:p.type)??"",name:(p==null?void 0:p.name)??""}],v={..._,...s,billingAddress:u,shippingAddress:c,shipments:R,items:a,returns:t,itemsEligibleForReturn:T,totalQuantity:F,shippingMethod:G,shipping:q,payments:k};return d(v,(M=(O=(S=(b=x==null?void 0:x.getConfig())==null?void 0:b.models)==null?void 0:S.OrderDataModel)==null?void 0:O.transformer)==null?void 0:M.call(O,n))},Gn=(n,i,_)=>{var u,c,R,a,E,t,T;if((a=(R=(c=(u=i==null?void 0:i.data)==null?void 0:u.customer)==null?void 0:c.orders)==null?void 0:R.items)!=null&&a.length&&n==="orderData"){const s=(T=(t=(E=i==null?void 0:i.data)==null?void 0:E.customer)==null?void 0:t.orders)==null?void 0:T.items[0];return $(s,_)}return null},Fn=n=>{var R,a,E,t,T;if(!((R=n==null?void 0:n.items)!=null&&R.length))return null;const i=n==null?void 0:n.items,_=n==null?void 0:n.page_info,c={ordersReturn:[...i].sort((s,p)=>+p.number-+s.number).map(s=>{var N,f;const{order:p,status:G,number:F,created_at:q}=s,k=((f=(N=s==null?void 0:s.shipping)==null?void 0:N.tracking)==null?void 0:f.map(l=>{const{status:A,carrier:h,tracking_number:b}=l;return{status:A,carrier:h,trackingNumber:b}}))??[],v=s.items.map(l=>{var g;const A=l==null?void 0:l.quantity,h=l==null?void 0:l.status,b=l==null?void 0:l.request_quantity,S=l==null?void 0:l.uid,O=l==null?void 0:l.order_item,M=((g=B([O]))==null?void 0:g.reduce((y,C)=>C,{}))??{};return{uid:S,quantity:A,status:h,requestQuantity:b,...M}});return{createdReturnAt:q,returnStatus:G,token:p==null?void 0:p.token,orderNumber:p==null?void 0:p.number,returnNumber:F,items:v,tracking:k}}),..._?{pageInfo:{pageSize:_.page_size,totalPages:_.total_pages,currentPage:_.current_page}}:{}};return d(c,(T=(t=(E=(a=x==null?void 0:x.getConfig())==null?void 0:a.models)==null?void 0:E.CustomerOrdersReturnModel)==null?void 0:t.transformer)==null?void 0:T.call(t,{...i,..._}))},Yn=(n,i)=>{var u,c;if(!((u=n==null?void 0:n.data)!=null&&u.guestOrder))return null;const _=(c=n==null?void 0:n.data)==null?void 0:c.guestOrder;return $(_,i)},qn=(n,i)=>{var u,c;if(!((u=n==null?void 0:n.data)!=null&&u.guestOrderByToken))return null;const _=(c=n==null?void 0:n.data)==null?void 0:c.guestOrderByToken;return $(_,i)},kn=`
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
  ${_n}
  ${un}
  ${cn}
  ${ln}
  ${sn}
  ${an}
  ${pn}
  ${Rn}
`,vn=async({orderId:n,returnRef:i,queryType:_,returnsPageSize:u=50})=>await tn(kn,{method:"GET",cache:"force-cache",variables:{orderNumber:n,pageSize:u}}).then(c=>Gn(_??"orderData",c,i)).catch(nn),xn=`
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
  ${_n}
  ${un}
  ${cn}
  ${ln}
  ${sn}
  ${an}
  ${pn}
  ${Rn}
`,Cn=async(n,i)=>await tn(xn,{method:"GET",cache:"no-cache",variables:{token:n}}).then(_=>{var u;return(u=_.errors)!=null&&u.length&&_.errors[0].message==="Please login to view the order."?gn(_.errors):qn(_,i)}).catch(nn),Ln="orderData",Bn=async n=>{var a;const i=typeof(n==null?void 0:n.orderRef)=="string"?n==null?void 0:n.orderRef:"",_=typeof(n==null?void 0:n.returnRef)=="string"?n==null?void 0:n.returnRef:"",u=i&&typeof(n==null?void 0:n.orderRef)=="string"&&((a=n==null?void 0:n.orderRef)==null?void 0:a.length)>20,c=(n==null?void 0:n.orderData)??null;if(c){L.emit("order/data",{...c,returnNumber:_});return}if(!i)return;const R=u?await Cn(i,_):await vn({orderId:i,returnRef:_,queryType:Ln});R?L.emit("order/data",{...R,returnNumber:_}):L.emit("order/error",{source:"order",type:"network",error:"The data was not received."})},Tn=new yn({init:async n=>{const i={};Tn.config.setConfig({...i,...n}),n&&Object.keys(n).length!==0&&Bn(n).catch(console.error)},listeners:()=>[]}),x=Tn.config;export{$ as a,Yn as b,Cn as c,x as d,vn as g,Tn as i,Fn as t};
