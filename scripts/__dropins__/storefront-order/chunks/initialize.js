/*! Copyright 2025 Adobe
All Rights Reserved. */
import{merge as m,Initializer as gn}from"@dropins/tools/lib.js";import{events as L}from"@dropins/tools/event-bus.js";import{h as o}from"./network-error.js";import{PRODUCT_DETAILS_FRAGMENT as r,PRICE_DETAILS_FRAGMENT as I,GIFT_CARD_DETAILS_FRAGMENT as d,ORDER_ITEM_DETAILS_FRAGMENT as nn,BUNDLE_ORDER_ITEM_DETAILS_FRAGMENT as un,ORDER_SUMMARY_FRAGMENT as _n,ADDRESS_FRAGMENT as cn,RETURNS_FRAGMENT as ln,ORDER_ITEM_FRAGMENT as an,APPLIED_GIFT_CARDS_FRAGMENT as Rn}from"../fragments.js";import{f as sn,h as tn}from"./fetch-graphql.js";const En=n=>n||0,Tn=n=>{var u,i,_,c,l,y,g,p,R;return{__typename:(n==null?void 0:n.__typename)||"",uid:(n==null?void 0:n.uid)||"",onlyXLeftInStock:(n==null?void 0:n.only_x_left_in_stock)??0,stockStatus:(n==null?void 0:n.stock_status)??"",priceRange:{maximumPrice:{regularPrice:{currency:((_=(i=(u=n==null?void 0:n.price_range)==null?void 0:u.maximum_price)==null?void 0:i.regular_price)==null?void 0:_.currency)??"",value:((y=(l=(c=n==null?void 0:n.price_range)==null?void 0:c.maximum_price)==null?void 0:l.regular_price)==null?void 0:y.value)??0}}},canonicalUrl:(n==null?void 0:n.canonical_url)??"",urlKey:(n==null?void 0:n.url_key)||"",id:(n==null?void 0:n.uid)??"",name:(n==null?void 0:n.name)||"",sku:(n==null?void 0:n.sku)||"",image:((g=n==null?void 0:n.image)==null?void 0:g.url)||"",productType:(n==null?void 0:n.__typename)||"",thumbnail:{label:((p=n==null?void 0:n.thumbnail)==null?void 0:p.label)||"",url:((R=n==null?void 0:n.thumbnail)==null?void 0:R.url)||""}}},bn=n=>{if(!n||!("selected_options"in n))return;const u={};for(const i of n.selected_options)u[i.label]=i.value;return u},fn=n=>{const u=n==null?void 0:n.map(_=>({uid:_.uid,label:_.label,values:_.values.map(c=>c.product_name).join(", ")})),i={};return u==null||u.forEach(_=>{i[_.label]=_.values}),Object.keys(i).length>0?i:null},vn=n=>(n==null?void 0:n.length)>0?{count:n.length,result:n.map(u=>u.title).join(", ")}:null,hn=n=>({quantityCanceled:(n==null?void 0:n.quantity_canceled)??0,quantityInvoiced:(n==null?void 0:n.quantity_invoiced)??0,quantityOrdered:(n==null?void 0:n.quantity_ordered)??0,quantityRefunded:(n==null?void 0:n.quantity_refunded)??0,quantityReturned:(n==null?void 0:n.quantity_returned)??0,quantityShipped:(n==null?void 0:n.quantity_shipped)??0,quantityReturnRequested:(n==null?void 0:n.quantity_return_requested)??0}),An=n=>({firstName:(n==null?void 0:n.firstname)??"",lastName:(n==null?void 0:n.lastname)??"",middleName:(n==null?void 0:n.middlename)??""}),Z=n=>{const{firstName:u,lastName:i,middleName:_}=An(n);return{firstName:u,lastName:i,middleName:_,city:(n==null?void 0:n.city)??"",company:(n==null?void 0:n.company)??"",country:(n==null?void 0:n.country)??"",countryCode:(n==null?void 0:n.country_code)??"",fax:(n==null?void 0:n.fax)??"",postCode:(n==null?void 0:n.postcode)??"",prefix:(n==null?void 0:n.prefix)??"",region:(n==null?void 0:n.region)??"",regionId:(n==null?void 0:n.region_id)??"",street:(n==null?void 0:n.street)??[],suffix:(n==null?void 0:n.suffix)??"",telephone:(n==null?void 0:n.telephone)??"",vatId:(n==null?void 0:n.vat_id)??"",customAttributes:(n==null?void 0:n.custom_attributes)??[]}},Sn=n=>{const u={value:0,currency:"USD"};return{grandTotal:(n==null?void 0:n.grand_total)??u,totalGiftCard:(n==null?void 0:n.total_giftcard)??u,subtotalExclTax:(n==null?void 0:n.subtotal_excl_tax)??u,subtotalInclTax:(n==null?void 0:n.subtotal_incl_tax)??u,taxes:(n==null?void 0:n.taxes)??[],totalTax:(n==null?void 0:n.total_tax)??u,totalShipping:(n==null?void 0:n.total_shipping)??u,discounts:(n==null?void 0:n.discounts)??[]}},D=n=>{const u={value:0,currency:"USD"},i=(n==null?void 0:n.prices)??{};return{price:(i==null?void 0:i.price)??u,priceIncludingTax:(i==null?void 0:i.price_including_tax)??u,originalPrice:(i==null?void 0:i.original_price)??u,originalPriceIncludingTax:(i==null?void 0:i.original_price_including_tax)??u,discounts:(i==null?void 0:i.discounts)??[]}},Nn=(n,u,i)=>{const _=n==null?void 0:n.price,c=n==null?void 0:n.priceIncludingTax,l=n==null?void 0:n.originalPrice,y=i?l==null?void 0:l.value:c==null?void 0:c.value,g={originalPrice:l,baseOriginalPrice:{value:y,currency:l==null?void 0:l.currency},baseDiscountedPrice:{value:c==null?void 0:c.value,currency:c==null?void 0:c.currency},baseExcludingTax:{value:_==null?void 0:_.value,currency:_==null?void 0:_.currency}},p={originalPrice:l,baseOriginalPrice:{value:l==null?void 0:l.value,currency:c==null?void 0:c.currency},baseDiscountedPrice:{value:u==null?void 0:u.value,currency:_==null?void 0:_.currency},baseExcludingTax:{value:_==null?void 0:_.value,currency:_==null?void 0:_.currency}},R={singleItemPrice:{value:i?l.value:c.value,currency:c.currency},baseOriginalPrice:{value:y,currency:c.currency},baseDiscountedPrice:{value:c.value,currency:c.currency}};return{includeAndExcludeTax:g,excludeTax:p,includeTax:R}},xn=n=>{var u,i,_,c,l;return{senderName:((u=n.gift_card)==null?void 0:u.sender_name)||"",senderEmail:((i=n.gift_card)==null?void 0:i.sender_email)||"",recipientEmail:((_=n.gift_card)==null?void 0:_.recipient_email)||"",recipientName:((c=n.gift_card)==null?void 0:c.recipient_name)||"",message:((l=n.gift_card)==null?void 0:l.message)||""}},Mn=n=>{var u,i,_,c;return{label:((i=(u=n==null?void 0:n.product)==null?void 0:u.thumbnail)==null?void 0:i.label)||"",url:((c=(_=n==null?void 0:n.product)==null?void 0:_.thumbnail)==null?void 0:c.url)||""}};function Gn(n){return{currency:(n==null?void 0:n.currency)??"USD",value:(n==null?void 0:n.value)??0}}const yn=n=>{var E,b,f,k,w,M,G,s,N,v,h,q,O,F,x,U,A,C,S,T,z,Y,W,P,Q,K,j,V,X,H,J;const{quantityCanceled:u,quantityInvoiced:i,quantityOrdered:_,quantityRefunded:c,quantityReturned:l,quantityShipped:y,quantityReturnRequested:g}=hn(n),p=D(n),R=((E=n==null?void 0:n.prices)==null?void 0:E.original_price.value)*(n==null?void 0:n.quantity_ordered)>((b=n==null?void 0:n.prices)==null?void 0:b.price.value)*(n==null?void 0:n.quantity_ordered),t=En(n==null?void 0:n.quantity_ordered),a={value:((f=n==null?void 0:n.product_sale_price)==null?void 0:f.value)||0,currency:(k=n==null?void 0:n.product_sale_price)==null?void 0:k.currency};return{giftWrappingPrice:Gn((w=n==null?void 0:n.product)==null?void 0:w.gift_wrapping_price),productGiftWrapping:[{design:((M=n==null?void 0:n.gift_wrapping)==null?void 0:M.design)??"",uid:(G=n==null?void 0:n.gift_wrapping)==null?void 0:G.uid,selected:((s=n.gift_wrapping)==null?void 0:s.uid)===((N=n==null?void 0:n.gift_wrapping)==null?void 0:N.uid),image:{url:((h=(v=n==null?void 0:n.gift_wrapping)==null?void 0:v.image)==null?void 0:h.url)??"",label:((O=(q=n==null?void 0:n.gift_wrapping)==null?void 0:q.image)==null?void 0:O.label)??""},price:{currency:((x=(F=n==null?void 0:n.gift_wrapping)==null?void 0:F.price)==null?void 0:x.currency)??"USD",value:((A=(U=n==null?void 0:n.gift_wrapping)==null?void 0:U.price)==null?void 0:A.value)??0}}],selectedOptions:(n==null?void 0:n.selected_options)??[],productSalePrice:n==null?void 0:n.product_sale_price,status:(n==null?void 0:n.status)??"",type:n==null?void 0:n.__typename,eligibleForReturn:(n==null?void 0:n.eligible_for_return)??!1,productSku:(n==null?void 0:n.product_sku)??"",productName:(n==null?void 0:n.product_name)??"",productUrlKey:(n==null?void 0:n.product_url_key)??"",quantityCanceled:u,quantityInvoiced:i,quantityOrdered:_,quantityRefunded:c,quantityReturned:l,quantityShipped:y,quantityReturnRequested:g,id:n==null?void 0:n.id,discounted:R,total:{value:((C=n==null?void 0:n.product_sale_price)==null?void 0:C.value)*(n==null?void 0:n.quantity_ordered)||0,currency:((S=n==null?void 0:n.product_sale_price)==null?void 0:S.currency)||""},totalInclTax:{value:((T=n==null?void 0:n.product_sale_price)==null?void 0:T.value)*(n==null?void 0:n.quantity_ordered)||0,currency:(z=n==null?void 0:n.product_sale_price)==null?void 0:z.currency},price:a,prices:D(n),itemPrices:p,taxCalculations:Nn(p,a,R),priceInclTax:{value:((Y=n==null?void 0:n.product_sale_price)==null?void 0:Y.value)??0,currency:(W=n==null?void 0:n.product_sale_price)==null?void 0:W.currency},totalQuantity:t,regularPrice:{value:(j=(K=(Q=(P=n==null?void 0:n.product)==null?void 0:P.price_range)==null?void 0:Q.maximum_price)==null?void 0:K.regular_price)==null?void 0:j.value,currency:(J=(H=(X=(V=n==null?void 0:n.product)==null?void 0:V.price_range)==null?void 0:X.maximum_price)==null?void 0:H.regular_price)==null?void 0:J.currency},product:Tn(n==null?void 0:n.product),thumbnail:Mn(n),giftCard:(n==null?void 0:n.__typename)==="GiftCardOrderItem"?xn(n):void 0,configurableOptions:bn(n),bundleOptions:n.__typename==="BundleOrderItem"?fn(n.bundle_options):null,downloadableLinks:n.__typename==="DownloadableOrderItem"?vn(n==null?void 0:n.downloadable_links):null}},B=n=>n==null?void 0:n.filter(u=>u.__typename).map(u=>yn(u)),qn=n=>{var u,i,_,c,l;return{token:(n==null?void 0:n.token)??"",email:(n==null?void 0:n.email)??"",status:(n==null?void 0:n.status)??"",number:(n==null?void 0:n.number)??"",id:(n==null?void 0:n.id)??"",carrier:n.carrier??"",coupons:(n==null?void 0:n.applied_coupons)??[],orderDate:(n==null?void 0:n.order_date)??"",isVirtual:(n==null?void 0:n.is_virtual)??!1,availableActions:(n==null?void 0:n.available_actions)??[],orderStatusChangeDate:(n==null?void 0:n.order_status_change_date)??"",shippingMethod:(n==null?void 0:n.shipping_method)??"",giftWrappingOrder:{price:{value:((i=(u=n==null?void 0:n.gift_wrapping)==null?void 0:u.price)==null?void 0:i.value)??0,currency:((c=(_=n==null?void 0:n.gift_wrapping)==null?void 0:_.price)==null?void 0:c.currency)??"USD"},uid:((l=n==null?void 0:n.gift_wrapping)==null?void 0:l.uid)??""}}},On=n=>{var i,_,c,l,y,g,p,R,t,a,E,b,f;const u=(i=n==null?void 0:n.total)==null?void 0:i.gift_options;return{giftWrappingForItems:{value:((_=u==null?void 0:u.gift_wrapping_for_items)==null?void 0:_.value)??0,currency:((c=u==null?void 0:u.gift_wrapping_for_items)==null?void 0:c.currency)??"USD"},giftWrappingForItemsInclTax:{value:((l=u==null?void 0:u.gift_wrapping_for_items_incl_tax)==null?void 0:l.value)??0,currency:((y=u==null?void 0:u.gift_wrapping_for_items_incl_tax)==null?void 0:y.currency)??"USD"},giftWrappingForOrder:{value:((g=u==null?void 0:u.gift_wrapping_for_order)==null?void 0:g.value)??0,currency:((p=u==null?void 0:u.gift_wrapping_for_order)==null?void 0:p.currency)??"USD"},giftWrappingForOrderInclTax:{value:((R=u==null?void 0:u.gift_wrapping_for_order_incl_tax)==null?void 0:R.value)??0,currency:((t=u==null?void 0:u.gift_wrapping_for_order_incl_tax)==null?void 0:t.currency)??"USD"},printedCard:{value:((a=u==null?void 0:u.printed_card)==null?void 0:a.value)??0,currency:((E=u==null?void 0:u.printed_card)==null?void 0:E.currency)??"USD"},printedCardInclTax:{value:((b=u==null?void 0:u.printed_card_incl_tax)==null?void 0:b.value)??0,currency:((f=u==null?void 0:u.printed_card_incl_tax)==null?void 0:f.currency)??"USD"}}},Fn=(n=[])=>n?n==null?void 0:n.map(u=>{var i,_;return{code:(u==null?void 0:u.code)??"",appliedBalance:{value:((i=u.applied_balance)==null?void 0:i.value)??0,currency:((_=u.applied_balance)==null?void 0:_.currency)??"USD"}}}):[],e=(n,u)=>{var v,h,q,O,F,x,U,A,C;console.log("orderData :>> ",n);const i=qn(n),_=Z(n==null?void 0:n.billing_address),c=Z(n==null?void 0:n.shipping_address),l=(v=n.shipments)==null?void 0:v.map(S=>({...S,items:S.items.map(T=>({id:T.id,productName:T.product_name,productSku:T.product_sku,quantityShipped:T.quantity_shipped,orderItem:yn(T.order_item)}))})),y=Fn(n==null?void 0:n.applied_gift_cards),g=B(n.items),p=((h=wn(n==null?void 0:n.returns))==null?void 0:h.ordersReturn)??[],R=u?p.filter(S=>S.returnNumber===u):p,t=B(n.items_eligible_for_return),a=Sn(n==null?void 0:n.total),E=(q=n==null?void 0:n.payment_methods)==null?void 0:q[0],b=n==null?void 0:n.shipping_method,f=g==null?void 0:g.reduce((S,T)=>S+(T==null?void 0:T.totalQuantity),0),k={amount:((O=a==null?void 0:a.totalShipping)==null?void 0:O.value)??0,currency:((F=a==null?void 0:a.totalShipping)==null?void 0:F.currency)||"",code:(i==null?void 0:i.shippingMethod)??""},w=[{code:(E==null?void 0:E.type)??"",name:(E==null?void 0:E.name)??""}],M=a==null?void 0:a.subtotalExclTax,G=a==null?void 0:a.subtotalInclTax,s=On(n),N={...i,...a,appliedGiftCards:y,totalGiftOptions:s,subtotalExclTax:M,subtotalInclTax:G,billingAddress:_,shippingAddress:c,shipments:l,items:g,returns:R,itemsEligibleForReturn:t,totalQuantity:f,shippingMethod:b,shipping:k,payments:w};return m(N,(C=(A=(U=(x=$==null?void 0:$.getConfig())==null?void 0:x.models)==null?void 0:U.OrderDataModel)==null?void 0:A.transformer)==null?void 0:C.call(A,n))},kn=(n,u,i)=>{var _,c,l,y,g,p,R;if((y=(l=(c=(_=u==null?void 0:u.data)==null?void 0:_.customer)==null?void 0:c.orders)==null?void 0:l.items)!=null&&y.length&&n==="orderData"){const t=(R=(p=(g=u==null?void 0:u.data)==null?void 0:g.customer)==null?void 0:p.orders)==null?void 0:R.items[0];return e(t,i)}return null},wn=n=>{var l,y,g,p,R;if(!((l=n==null?void 0:n.items)!=null&&l.length))return null;const u=n==null?void 0:n.items,i=n==null?void 0:n.page_info,c={ordersReturn:[...u].sort((t,a)=>+a.number-+t.number).map(t=>{var M,G;const{order:a,status:E,number:b,created_at:f}=t,k=((G=(M=t==null?void 0:t.shipping)==null?void 0:M.tracking)==null?void 0:G.map(s=>{const{status:N,carrier:v,tracking_number:h}=s;return{status:N,carrier:v,trackingNumber:h}}))??[],w=t.items.map(s=>{var x;const N=s==null?void 0:s.quantity,v=s==null?void 0:s.status,h=s==null?void 0:s.request_quantity,q=s==null?void 0:s.uid,O=s==null?void 0:s.order_item,F=((x=B([O]))==null?void 0:x.reduce((U,A)=>A,{}))??{};return{uid:q,quantity:N,status:v,requestQuantity:h,...F}});return{createdReturnAt:f,returnStatus:E,token:a==null?void 0:a.token,orderNumber:a==null?void 0:a.number,returnNumber:b,items:w,tracking:k}}),...i?{pageInfo:{pageSize:i.page_size,totalPages:i.total_pages,currentPage:i.current_page}}:{}};return m(c,(R=(p=(g=(y=$==null?void 0:$.getConfig())==null?void 0:y.models)==null?void 0:g.CustomerOrdersReturnModel)==null?void 0:p.transformer)==null?void 0:R.call(p,{...u,...i}))},jn=(n,u)=>{var _,c;if(!((_=n==null?void 0:n.data)!=null&&_.guestOrder))return null;const i=(c=n==null?void 0:n.data)==null?void 0:c.guestOrder;return e(i,u)},Un=(n,u)=>{var _,c;if(!((_=n==null?void 0:n.data)!=null&&_.guestOrderByToken))return null;const i=(c=n==null?void 0:n.data)==null?void 0:c.guestOrderByToken;return e(i,u)},$n=`
  query ORDER_BY_NUMBER($orderNumber: String!, $pageSize: Int) {
    customer {
      orders(filter: { number: { eq: $orderNumber } }) {
        items {
          gift_receipt_included
          printed_card_included
          gift_wrapping {
            price {
              currency
              value
            }
            uid
          }
          gift_message {
            to
            from
            message
          }
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
          applied_gift_cards {
            ...APPLIED_GIFT_CARDS_FRAGMENT
          }
          returns(pageSize: $pageSize) {
            ...RETURNS_FRAGMENT
          }
          items_eligible_for_return {
            ...ORDER_ITEM_FRAGMENT
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
            ...ORDER_ITEM_FRAGMENT
          }
          total {
            ...ORDER_SUMMARY_FRAGMENT
          }
        }
      }
    }
  }
  ${r}
  ${I}
  ${d}
  ${nn}
  ${un}
  ${_n}
  ${cn}
  ${ln}
  ${an}
  ${Rn}
`,Cn=async({orderId:n,returnRef:u,queryType:i,returnsPageSize:_=50})=>await sn($n,{method:"GET",cache:"force-cache",variables:{orderNumber:n,pageSize:_}}).then(c=>kn(i??"orderData",c,u)).catch(o),Ln=`
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
        ...ORDER_ITEM_FRAGMENT
      }
      total {
        ...ORDER_SUMMARY_FRAGMENT
      }
    }
  }
  ${r}
  ${I}
  ${d}
  ${nn}
  ${un}
  ${_n}
  ${cn}
  ${ln}
  ${an}
`,Bn=async(n,u)=>await sn(Ln,{method:"GET",cache:"no-cache",variables:{token:n}}).then(i=>{var _;return(_=i.errors)!=null&&_.length&&i.errors[0].message==="Please login to view the order."?tn(i.errors):Un(i,u)}).catch(o),en="orderData",zn=async n=>{var y;const u=typeof(n==null?void 0:n.orderRef)=="string"?n==null?void 0:n.orderRef:"",i=typeof(n==null?void 0:n.returnRef)=="string"?n==null?void 0:n.returnRef:"",_=u&&typeof(n==null?void 0:n.orderRef)=="string"&&((y=n==null?void 0:n.orderRef)==null?void 0:y.length)>20,c=(n==null?void 0:n.orderData)??null;if(c){L.emit("order/data",{...c,returnNumber:i});return}if(!u)return;const l=_?await Bn(u,i):await Cn({orderId:u,returnRef:i,queryType:en});l?L.emit("order/data",{...l,returnNumber:i}):L.emit("order/error",{source:"order",type:"network",error:"The data was not received."})},pn=new gn({init:async n=>{const u={};pn.config.setConfig({...u,...n}),zn(n??{}).catch(console.error)},listeners:()=>[]}),$=pn.config;export{e as a,jn as b,Bn as c,$ as d,Cn as g,pn as i,wn as t};
