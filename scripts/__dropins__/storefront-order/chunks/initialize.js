/*! Copyright 2025 Adobe
All Rights Reserved. */
import{merge as D,Initializer as pn}from"@dropins/tools/lib.js";import{events as L}from"@dropins/tools/event-bus.js";import{h as m}from"./network-error.js";import{PRODUCT_DETAILS_FRAGMENT as o,PRICE_DETAILS_FRAGMENT as r,GIFT_CARD_DETAILS_FRAGMENT as I,ORDER_ITEM_DETAILS_FRAGMENT as d,BUNDLE_ORDER_ITEM_DETAILS_FRAGMENT as nn,ORDER_SUMMARY_FRAGMENT as un,ADDRESS_FRAGMENT as _n,RETURNS_FRAGMENT as cn,ORDER_ITEM_FRAGMENT as ln,APPLIED_GIFT_CARDS_FRAGMENT as gn}from"../fragments.js";import{f as an,h as tn}from"./fetch-graphql.js";const Rn=n=>n||0,En=n=>{var u,i,_,c,l,y,g,p,t;return{__typename:(n==null?void 0:n.__typename)||"",uid:(n==null?void 0:n.uid)||"",onlyXLeftInStock:(n==null?void 0:n.only_x_left_in_stock)??0,stockStatus:(n==null?void 0:n.stock_status)??"",priceRange:{maximumPrice:{regularPrice:{currency:((_=(i=(u=n==null?void 0:n.price_range)==null?void 0:u.maximum_price)==null?void 0:i.regular_price)==null?void 0:_.currency)??"",value:((y=(l=(c=n==null?void 0:n.price_range)==null?void 0:c.maximum_price)==null?void 0:l.regular_price)==null?void 0:y.value)??0}}},canonicalUrl:(n==null?void 0:n.canonical_url)??"",urlKey:(n==null?void 0:n.url_key)||"",id:(n==null?void 0:n.uid)??"",name:(n==null?void 0:n.name)||"",sku:(n==null?void 0:n.sku)||"",image:((g=n==null?void 0:n.image)==null?void 0:g.url)||"",productType:(n==null?void 0:n.__typename)||"",thumbnail:{label:((p=n==null?void 0:n.thumbnail)==null?void 0:p.label)||"",url:((t=n==null?void 0:n.thumbnail)==null?void 0:t.url)||""}}},Tn=n=>{if(!n||!("selected_options"in n))return;const u={};for(const i of n.selected_options)u[i.label]=i.value;return u},bn=n=>{const u=n==null?void 0:n.map(_=>({uid:_.uid,label:_.label,values:_.values.map(c=>c.product_name).join(", ")})),i={};return u==null||u.forEach(_=>{i[_.label]=_.values}),Object.keys(i).length>0?i:null},fn=n=>(n==null?void 0:n.length)>0?{count:n.length,result:n.map(u=>u.title).join(", ")}:null,vn=n=>({quantityCanceled:(n==null?void 0:n.quantity_canceled)??0,quantityInvoiced:(n==null?void 0:n.quantity_invoiced)??0,quantityOrdered:(n==null?void 0:n.quantity_ordered)??0,quantityRefunded:(n==null?void 0:n.quantity_refunded)??0,quantityReturned:(n==null?void 0:n.quantity_returned)??0,quantityShipped:(n==null?void 0:n.quantity_shipped)??0,quantityReturnRequested:(n==null?void 0:n.quantity_return_requested)??0}),hn=n=>({firstName:(n==null?void 0:n.firstname)??"",lastName:(n==null?void 0:n.lastname)??"",middleName:(n==null?void 0:n.middlename)??""}),J=n=>{const{firstName:u,lastName:i,middleName:_}=hn(n);return{firstName:u,lastName:i,middleName:_,city:(n==null?void 0:n.city)??"",company:(n==null?void 0:n.company)??"",country:(n==null?void 0:n.country)??"",countryCode:(n==null?void 0:n.country_code)??"",fax:(n==null?void 0:n.fax)??"",postCode:(n==null?void 0:n.postcode)??"",prefix:(n==null?void 0:n.prefix)??"",region:(n==null?void 0:n.region)??"",regionId:(n==null?void 0:n.region_id)??"",street:(n==null?void 0:n.street)??[],suffix:(n==null?void 0:n.suffix)??"",telephone:(n==null?void 0:n.telephone)??"",vatId:(n==null?void 0:n.vat_id)??"",customAttributes:(n==null?void 0:n.custom_attributes)??[]}},An=n=>{const u={value:0,currency:"USD"};return{grandTotal:(n==null?void 0:n.grand_total)??u,totalGiftCard:(n==null?void 0:n.total_giftcard)??u,subtotalExclTax:(n==null?void 0:n.subtotal_excl_tax)??u,subtotalInclTax:(n==null?void 0:n.subtotal_incl_tax)??u,taxes:(n==null?void 0:n.taxes)??[],totalTax:(n==null?void 0:n.total_tax)??u,totalShipping:(n==null?void 0:n.total_shipping)??u,discounts:(n==null?void 0:n.discounts)??[]}},Z=n=>{const u={value:0,currency:"USD"},i=(n==null?void 0:n.prices)??{};return{price:(i==null?void 0:i.price)??u,priceIncludingTax:(i==null?void 0:i.price_including_tax)??u,originalPrice:(i==null?void 0:i.original_price)??u,originalPriceIncludingTax:(i==null?void 0:i.original_price_including_tax)??u,discounts:(i==null?void 0:i.discounts)??[]}},Sn=(n,u,i)=>{const _=n==null?void 0:n.price,c=n==null?void 0:n.priceIncludingTax,l=n==null?void 0:n.originalPrice,y=i?l==null?void 0:l.value:c==null?void 0:c.value,g={originalPrice:l,baseOriginalPrice:{value:y,currency:l==null?void 0:l.currency},baseDiscountedPrice:{value:c==null?void 0:c.value,currency:c==null?void 0:c.currency},baseExcludingTax:{value:_==null?void 0:_.value,currency:_==null?void 0:_.currency}},p={originalPrice:l,baseOriginalPrice:{value:l==null?void 0:l.value,currency:c==null?void 0:c.currency},baseDiscountedPrice:{value:u==null?void 0:u.value,currency:_==null?void 0:_.currency},baseExcludingTax:{value:_==null?void 0:_.value,currency:_==null?void 0:_.currency}},t={singleItemPrice:{value:i?l.value:c.value,currency:c.currency},baseOriginalPrice:{value:y,currency:c.currency},baseDiscountedPrice:{value:c.value,currency:c.currency}};return{includeAndExcludeTax:g,excludeTax:p,includeTax:t}},Nn=n=>{var u,i,_,c,l;return{senderName:((u=n.gift_card)==null?void 0:u.sender_name)||"",senderEmail:((i=n.gift_card)==null?void 0:i.sender_email)||"",recipientEmail:((_=n.gift_card)==null?void 0:_.recipient_email)||"",recipientName:((c=n.gift_card)==null?void 0:c.recipient_name)||"",message:((l=n.gift_card)==null?void 0:l.message)||""}},xn=n=>{var u,i,_,c;return{label:((i=(u=n==null?void 0:n.product)==null?void 0:u.thumbnail)==null?void 0:i.label)||"",url:((c=(_=n==null?void 0:n.product)==null?void 0:_.thumbnail)==null?void 0:c.url)||""}},sn=n=>{var E,b,f,k,w,M,G,s,N,v,h,q,O,F,x,U,A,C,S,T,z,Y,Q,W,P,K,j,V,X,H;const{quantityCanceled:u,quantityInvoiced:i,quantityOrdered:_,quantityRefunded:c,quantityReturned:l,quantityShipped:y,quantityReturnRequested:g}=vn(n),p=Z(n),t=((E=n==null?void 0:n.prices)==null?void 0:E.original_price.value)*(n==null?void 0:n.quantity_ordered)>((b=n==null?void 0:n.prices)==null?void 0:b.price.value)*(n==null?void 0:n.quantity_ordered),R=Rn(n==null?void 0:n.quantity_ordered),a={value:((f=n==null?void 0:n.product_sale_price)==null?void 0:f.value)||0,currency:(k=n==null?void 0:n.product_sale_price)==null?void 0:k.currency};return{productGiftWrapping:[{design:((w=n==null?void 0:n.gift_wrapping)==null?void 0:w.design)??"",uid:(M=n==null?void 0:n.gift_wrapping)==null?void 0:M.uid,selected:((G=n.gift_wrapping)==null?void 0:G.uid)===((s=n==null?void 0:n.gift_wrapping)==null?void 0:s.uid),image:{url:((v=(N=n==null?void 0:n.gift_wrapping)==null?void 0:N.image)==null?void 0:v.url)??"",label:((q=(h=n==null?void 0:n.gift_wrapping)==null?void 0:h.image)==null?void 0:q.label)??""},price:{currency:((F=(O=n==null?void 0:n.gift_wrapping)==null?void 0:O.price)==null?void 0:F.currency)??"USD",value:((U=(x=n==null?void 0:n.gift_wrapping)==null?void 0:x.price)==null?void 0:U.value)??0}}],selectedOptions:(n==null?void 0:n.selected_options)??[],productSalePrice:n==null?void 0:n.product_sale_price,status:(n==null?void 0:n.status)??"",type:n==null?void 0:n.__typename,eligibleForReturn:(n==null?void 0:n.eligible_for_return)??!1,productSku:(n==null?void 0:n.product_sku)??"",productName:(n==null?void 0:n.product_name)??"",productUrlKey:(n==null?void 0:n.product_url_key)??"",quantityCanceled:u,quantityInvoiced:i,quantityOrdered:_,quantityRefunded:c,quantityReturned:l,quantityShipped:y,quantityReturnRequested:g,id:n==null?void 0:n.id,discounted:t,total:{value:((A=n==null?void 0:n.product_sale_price)==null?void 0:A.value)*(n==null?void 0:n.quantity_ordered)||0,currency:((C=n==null?void 0:n.product_sale_price)==null?void 0:C.currency)||""},totalInclTax:{value:((S=n==null?void 0:n.product_sale_price)==null?void 0:S.value)*(n==null?void 0:n.quantity_ordered)||0,currency:(T=n==null?void 0:n.product_sale_price)==null?void 0:T.currency},price:a,prices:Z(n),itemPrices:p,taxCalculations:Sn(p,a,t),priceInclTax:{value:((z=n==null?void 0:n.product_sale_price)==null?void 0:z.value)??0,currency:(Y=n==null?void 0:n.product_sale_price)==null?void 0:Y.currency},totalQuantity:R,regularPrice:{value:(K=(P=(W=(Q=n==null?void 0:n.product)==null?void 0:Q.price_range)==null?void 0:W.maximum_price)==null?void 0:P.regular_price)==null?void 0:K.value,currency:(H=(X=(V=(j=n==null?void 0:n.product)==null?void 0:j.price_range)==null?void 0:V.maximum_price)==null?void 0:X.regular_price)==null?void 0:H.currency},product:En(n==null?void 0:n.product),thumbnail:xn(n),giftCard:(n==null?void 0:n.__typename)==="GiftCardOrderItem"?Nn(n):void 0,configurableOptions:Tn(n),bundleOptions:n.__typename==="BundleOrderItem"?bn(n.bundle_options):null,downloadableLinks:n.__typename==="DownloadableOrderItem"?fn(n==null?void 0:n.downloadable_links):null}},B=n=>n==null?void 0:n.filter(u=>u.__typename).map(u=>sn(u)),Mn=n=>{var u,i,_,c,l;return{token:(n==null?void 0:n.token)??"",email:(n==null?void 0:n.email)??"",status:(n==null?void 0:n.status)??"",number:(n==null?void 0:n.number)??"",id:(n==null?void 0:n.id)??"",carrier:n.carrier??"",coupons:(n==null?void 0:n.applied_coupons)??[],orderDate:(n==null?void 0:n.order_date)??"",isVirtual:(n==null?void 0:n.is_virtual)??!1,availableActions:(n==null?void 0:n.available_actions)??[],orderStatusChangeDate:(n==null?void 0:n.order_status_change_date)??"",shippingMethod:(n==null?void 0:n.shipping_method)??"",giftWrappingOrder:{price:{value:((i=(u=n==null?void 0:n.gift_wrapping)==null?void 0:u.price)==null?void 0:i.value)??0,currency:((c=(_=n==null?void 0:n.gift_wrapping)==null?void 0:_.price)==null?void 0:c.currency)??"USD"},uid:((l=n==null?void 0:n.gift_wrapping)==null?void 0:l.uid)??""}}},Gn=n=>{var i,_,c,l,y,g,p,t,R,a,E,b,f;const u=(i=n==null?void 0:n.total)==null?void 0:i.gift_options;return{giftWrappingForItems:{value:((_=u==null?void 0:u.gift_wrapping_for_items)==null?void 0:_.value)??0,currency:((c=u==null?void 0:u.gift_wrapping_for_items)==null?void 0:c.currency)??"USD"},giftWrappingForItemsInclTax:{value:((l=u==null?void 0:u.gift_wrapping_for_items_incl_tax)==null?void 0:l.value)??0,currency:((y=u==null?void 0:u.gift_wrapping_for_items_incl_tax)==null?void 0:y.currency)??"USD"},giftWrappingForOrder:{value:((g=u==null?void 0:u.gift_wrapping_for_order)==null?void 0:g.value)??0,currency:((p=u==null?void 0:u.gift_wrapping_for_order)==null?void 0:p.currency)??"USD"},giftWrappingForOrderInclTax:{value:((t=u==null?void 0:u.gift_wrapping_for_order_incl_tax)==null?void 0:t.value)??0,currency:((R=u==null?void 0:u.gift_wrapping_for_order_incl_tax)==null?void 0:R.currency)??"USD"},printedCard:{value:((a=u==null?void 0:u.printed_card)==null?void 0:a.value)??0,currency:((E=u==null?void 0:u.printed_card)==null?void 0:E.currency)??"USD"},printedCardInclTax:{value:((b=u==null?void 0:u.printed_card_incl_tax)==null?void 0:b.value)??0,currency:((f=u==null?void 0:u.printed_card_incl_tax)==null?void 0:f.currency)??"USD"}}},qn=(n=[])=>n?n==null?void 0:n.map(u=>{var i,_;return{code:(u==null?void 0:u.code)??"",appliedBalance:{value:((i=u.applied_balance)==null?void 0:i.value)??0,currency:((_=u.applied_balance)==null?void 0:_.currency)??"USD"}}}):[],e=(n,u)=>{var v,h,q,O,F,x,U,A,C;console.log("orderData :>> ",n);const i=Mn(n),_=J(n==null?void 0:n.billing_address),c=J(n==null?void 0:n.shipping_address),l=(v=n.shipments)==null?void 0:v.map(S=>({...S,items:S.items.map(T=>({id:T.id,productName:T.product_name,productSku:T.product_sku,quantityShipped:T.quantity_shipped,orderItem:sn(T.order_item)}))})),y=qn(n==null?void 0:n.applied_gift_cards),g=B(n.items),p=((h=Fn(n==null?void 0:n.returns))==null?void 0:h.ordersReturn)??[],t=u?p.filter(S=>S.returnNumber===u):p,R=B(n.items_eligible_for_return),a=An(n==null?void 0:n.total),E=(q=n==null?void 0:n.payment_methods)==null?void 0:q[0],b=n==null?void 0:n.shipping_method,f=g==null?void 0:g.reduce((S,T)=>S+(T==null?void 0:T.totalQuantity),0),k={amount:((O=a==null?void 0:a.totalShipping)==null?void 0:O.value)??0,currency:((F=a==null?void 0:a.totalShipping)==null?void 0:F.currency)||"",code:(i==null?void 0:i.shippingMethod)??""},w=[{code:(E==null?void 0:E.type)??"",name:(E==null?void 0:E.name)??""}],M=a==null?void 0:a.subtotalExclTax,G=a==null?void 0:a.subtotalInclTax,s=Gn(n),N={...i,...a,appliedGiftCards:y,totalGiftOptions:s,subtotalExclTax:M,subtotalInclTax:G,billingAddress:_,shippingAddress:c,shipments:l,items:g,returns:t,itemsEligibleForReturn:R,totalQuantity:f,shippingMethod:b,shipping:k,payments:w};return D(N,(C=(A=(U=(x=$==null?void 0:$.getConfig())==null?void 0:x.models)==null?void 0:U.OrderDataModel)==null?void 0:A.transformer)==null?void 0:C.call(A,n))},On=(n,u,i)=>{var _,c,l,y,g,p,t;if((y=(l=(c=(_=u==null?void 0:u.data)==null?void 0:_.customer)==null?void 0:c.orders)==null?void 0:l.items)!=null&&y.length&&n==="orderData"){const R=(t=(p=(g=u==null?void 0:u.data)==null?void 0:g.customer)==null?void 0:p.orders)==null?void 0:t.items[0];return e(R,i)}return null},Fn=n=>{var l,y,g,p,t;if(!((l=n==null?void 0:n.items)!=null&&l.length))return null;const u=n==null?void 0:n.items,i=n==null?void 0:n.page_info,c={ordersReturn:[...u].sort((R,a)=>+a.number-+R.number).map(R=>{var M,G;const{order:a,status:E,number:b,created_at:f}=R,k=((G=(M=R==null?void 0:R.shipping)==null?void 0:M.tracking)==null?void 0:G.map(s=>{const{status:N,carrier:v,tracking_number:h}=s;return{status:N,carrier:v,trackingNumber:h}}))??[],w=R.items.map(s=>{var x;const N=s==null?void 0:s.quantity,v=s==null?void 0:s.status,h=s==null?void 0:s.request_quantity,q=s==null?void 0:s.uid,O=s==null?void 0:s.order_item,F=((x=B([O]))==null?void 0:x.reduce((U,A)=>A,{}))??{};return{uid:q,quantity:N,status:v,requestQuantity:h,...F}});return{createdReturnAt:f,returnStatus:E,token:a==null?void 0:a.token,orderNumber:a==null?void 0:a.number,returnNumber:b,items:w,tracking:k}}),...i?{pageInfo:{pageSize:i.page_size,totalPages:i.total_pages,currentPage:i.current_page}}:{}};return D(c,(t=(p=(g=(y=$==null?void 0:$.getConfig())==null?void 0:y.models)==null?void 0:g.CustomerOrdersReturnModel)==null?void 0:p.transformer)==null?void 0:t.call(p,{...u,...i}))},Pn=(n,u)=>{var _,c;if(!((_=n==null?void 0:n.data)!=null&&_.guestOrder))return null;const i=(c=n==null?void 0:n.data)==null?void 0:c.guestOrder;return e(i,u)},kn=(n,u)=>{var _,c;if(!((_=n==null?void 0:n.data)!=null&&_.guestOrderByToken))return null;const i=(c=n==null?void 0:n.data)==null?void 0:c.guestOrderByToken;return e(i,u)},wn=`
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
  ${o}
  ${r}
  ${I}
  ${d}
  ${nn}
  ${un}
  ${_n}
  ${cn}
  ${ln}
  ${gn}
`,Un=async({orderId:n,returnRef:u,queryType:i,returnsPageSize:_=50})=>await an(wn,{method:"GET",cache:"force-cache",variables:{orderNumber:n,pageSize:_}}).then(c=>On(i??"orderData",c,u)).catch(m),$n=`
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
  ${o}
  ${r}
  ${I}
  ${d}
  ${nn}
  ${un}
  ${_n}
  ${cn}
  ${ln}
`,Cn=async(n,u)=>await an($n,{method:"GET",cache:"no-cache",variables:{token:n}}).then(i=>{var _;return(_=i.errors)!=null&&_.length&&i.errors[0].message==="Please login to view the order."?tn(i.errors):kn(i,u)}).catch(m),Ln="orderData",Bn=async n=>{var y;const u=typeof(n==null?void 0:n.orderRef)=="string"?n==null?void 0:n.orderRef:"",i=typeof(n==null?void 0:n.returnRef)=="string"?n==null?void 0:n.returnRef:"",_=u&&typeof(n==null?void 0:n.orderRef)=="string"&&((y=n==null?void 0:n.orderRef)==null?void 0:y.length)>20,c=(n==null?void 0:n.orderData)??null;if(c){L.emit("order/data",{...c,returnNumber:i});return}if(!u)return;const l=_?await Cn(u,i):await Un({orderId:u,returnRef:i,queryType:Ln});l?L.emit("order/data",{...l,returnNumber:i}):L.emit("order/error",{source:"order",type:"network",error:"The data was not received."})},yn=new pn({init:async n=>{const u={};yn.config.setConfig({...u,...n}),Bn(n??{}).catch(console.error)},listeners:()=>[]}),$=yn.config;export{e as a,Pn as b,Cn as c,$ as d,Un as g,yn as i,Fn as t};
