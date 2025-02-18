/*! Copyright 2025 Adobe
All Rights Reserved. */
import{merge as K,Initializer as un}from"@dropins/tools/lib.js";import{events as C}from"@dropins/tools/event-bus.js";import{h as j}from"./network-error.js";import{PRODUCT_DETAILS_FRAGMENT as V,PRICE_DETAILS_FRAGMENT as X,GIFT_CARD_DETAILS_FRAGMENT as H,ORDER_ITEM_DETAILS_FRAGMENT as J,BUNDLE_ORDER_ITEM_DETAILS_FRAGMENT as Z,ORDER_SUMMARY_FRAGMENT as m,ADDRESS_FRAGMENT as D,RETURNS_FRAGMENT as r,ORDER_ITEM_FRAGMENT as o,APPLIED_GIFT_CARDS_FRAGMENT as _n}from"../fragments.js";import{f as I,h as cn}from"./fetch-graphql.js";const ln=n=>n||0,an=n=>{var u,i,_,c,l,t,p,y,R;return{__typename:(n==null?void 0:n.__typename)||"",uid:(n==null?void 0:n.uid)||"",onlyXLeftInStock:(n==null?void 0:n.only_x_left_in_stock)??0,stockStatus:(n==null?void 0:n.stock_status)??"",priceRange:{maximumPrice:{regularPrice:{currency:((_=(i=(u=n==null?void 0:n.price_range)==null?void 0:u.maximum_price)==null?void 0:i.regular_price)==null?void 0:_.currency)??"",value:((t=(l=(c=n==null?void 0:n.price_range)==null?void 0:c.maximum_price)==null?void 0:l.regular_price)==null?void 0:t.value)??0}}},canonicalUrl:(n==null?void 0:n.canonical_url)??"",urlKey:(n==null?void 0:n.url_key)||"",id:(n==null?void 0:n.uid)??"",name:(n==null?void 0:n.name)||"",sku:(n==null?void 0:n.sku)||"",image:((p=n==null?void 0:n.image)==null?void 0:p.url)||"",productType:(n==null?void 0:n.__typename)||"",thumbnail:{label:((y=n==null?void 0:n.thumbnail)==null?void 0:y.label)||"",url:((R=n==null?void 0:n.thumbnail)==null?void 0:R.url)||""}}},sn=n=>{if(!n||!("selected_options"in n))return;const u={};for(const i of n.selected_options)u[i.label]=i.value;return u},tn=n=>{const u=n==null?void 0:n.map(_=>({uid:_.uid,label:_.label,values:_.values.map(c=>c.product_name).join(", ")})),i={};return u==null||u.forEach(_=>{i[_.label]=_.values}),Object.keys(i).length>0?i:null},yn=n=>(n==null?void 0:n.length)>0?{count:n.length,result:n.map(u=>u.title).join(", ")}:null,pn=n=>({quantityCanceled:(n==null?void 0:n.quantity_canceled)??0,quantityInvoiced:(n==null?void 0:n.quantity_invoiced)??0,quantityOrdered:(n==null?void 0:n.quantity_ordered)??0,quantityRefunded:(n==null?void 0:n.quantity_refunded)??0,quantityReturned:(n==null?void 0:n.quantity_returned)??0,quantityShipped:(n==null?void 0:n.quantity_shipped)??0,quantityReturnRequested:(n==null?void 0:n.quantity_return_requested)??0}),Rn=n=>({firstName:(n==null?void 0:n.firstname)??"",lastName:(n==null?void 0:n.lastname)??"",middleName:(n==null?void 0:n.middlename)??""}),W=n=>{const{firstName:u,lastName:i,middleName:_}=Rn(n);return{firstName:u,lastName:i,middleName:_,city:(n==null?void 0:n.city)??"",company:(n==null?void 0:n.company)??"",country:(n==null?void 0:n.country)??"",countryCode:(n==null?void 0:n.country_code)??"",fax:(n==null?void 0:n.fax)??"",postCode:(n==null?void 0:n.postcode)??"",prefix:(n==null?void 0:n.prefix)??"",region:(n==null?void 0:n.region)??"",regionId:(n==null?void 0:n.region_id)??"",street:(n==null?void 0:n.street)??[],suffix:(n==null?void 0:n.suffix)??"",telephone:(n==null?void 0:n.telephone)??"",vatId:(n==null?void 0:n.vat_id)??"",customAttributes:(n==null?void 0:n.custom_attributes)??[]}},gn=n=>{const u={value:0,currency:"USD"};return{grandTotal:(n==null?void 0:n.grand_total)??u,totalGiftCard:(n==null?void 0:n.total_giftcard)??u,subtotalExclTax:(n==null?void 0:n.subtotal_excl_tax)??u,subtotalInclTax:(n==null?void 0:n.subtotal_incl_tax)??u,taxes:(n==null?void 0:n.taxes)??[],totalTax:(n==null?void 0:n.total_tax)??u,totalShipping:(n==null?void 0:n.total_shipping)??u,discounts:(n==null?void 0:n.discounts)??[]}},P=n=>{const u={value:0,currency:"USD"},i=(n==null?void 0:n.prices)??{};return{price:(i==null?void 0:i.price)??u,priceIncludingTax:(i==null?void 0:i.price_including_tax)??u,originalPrice:(i==null?void 0:i.original_price)??u,originalPriceIncludingTax:(i==null?void 0:i.original_price_including_tax)??u,discounts:(i==null?void 0:i.discounts)??[]}},En=(n,u,i)=>{const _=n==null?void 0:n.price,c=n==null?void 0:n.priceIncludingTax,l=n==null?void 0:n.originalPrice,t=i?l==null?void 0:l.value:c==null?void 0:c.value,p={originalPrice:l,baseOriginalPrice:{value:t,currency:l==null?void 0:l.currency},baseDiscountedPrice:{value:c==null?void 0:c.value,currency:c==null?void 0:c.currency},baseExcludingTax:{value:_==null?void 0:_.value,currency:_==null?void 0:_.currency}},y={originalPrice:l,baseOriginalPrice:{value:l==null?void 0:l.value,currency:c==null?void 0:c.currency},baseDiscountedPrice:{value:u==null?void 0:u.value,currency:_==null?void 0:_.currency},baseExcludingTax:{value:_==null?void 0:_.value,currency:_==null?void 0:_.currency}},R={singleItemPrice:{value:i?l.value:c.value,currency:c.currency},baseOriginalPrice:{value:t,currency:c.currency},baseDiscountedPrice:{value:c.value,currency:c.currency}};return{includeAndExcludeTax:p,excludeTax:y,includeTax:R}},Tn=n=>{var u,i,_,c,l;return{senderName:((u=n.gift_card)==null?void 0:u.sender_name)||"",senderEmail:((i=n.gift_card)==null?void 0:i.sender_email)||"",recipientEmail:((_=n.gift_card)==null?void 0:_.recipient_email)||"",recipientName:((c=n.gift_card)==null?void 0:c.recipient_name)||"",message:((l=n.gift_card)==null?void 0:l.message)||""}},bn=n=>{var u,i,_,c;return{label:((i=(u=n==null?void 0:n.product)==null?void 0:u.thumbnail)==null?void 0:i.label)||"",url:((c=(_=n==null?void 0:n.product)==null?void 0:_.thumbnail)==null?void 0:c.url)||""}},d=n=>{var E,b,v,F,k,x,M,s,S,f,h,q,G,O,N,w,e,$,A,T,z,Y,Q;const{quantityCanceled:u,quantityInvoiced:i,quantityOrdered:_,quantityRefunded:c,quantityReturned:l,quantityShipped:t,quantityReturnRequested:p}=pn(n),y=P(n),R=((E=n==null?void 0:n.prices)==null?void 0:E.original_price.value)*(n==null?void 0:n.quantity_ordered)>((b=n==null?void 0:n.prices)==null?void 0:b.price.value)*(n==null?void 0:n.quantity_ordered),g=ln(n==null?void 0:n.quantity_ordered),a={value:((v=n==null?void 0:n.product_sale_price)==null?void 0:v.value)||0,currency:(F=n==null?void 0:n.product_sale_price)==null?void 0:F.currency};return{giftWrappingItem:{price:{value:((x=(k=n.gift_wrapping)==null?void 0:k.price)==null?void 0:x.value)||0,currency:((s=(M=n.gift_wrapping)==null?void 0:M.price)==null?void 0:s.currency)||"USD"},uid:((S=n.gift_wrapping)==null?void 0:S.uid)||""},selectedOptions:(n==null?void 0:n.selected_options)??[],productSalePrice:n==null?void 0:n.product_sale_price,status:(n==null?void 0:n.status)??"",type:n==null?void 0:n.__typename,eligibleForReturn:(n==null?void 0:n.eligible_for_return)??!1,productSku:(n==null?void 0:n.product_sku)??"",productName:(n==null?void 0:n.product_name)??"",productUrlKey:(n==null?void 0:n.product_url_key)??"",quantityCanceled:u,quantityInvoiced:i,quantityOrdered:_,quantityRefunded:c,quantityReturned:l,quantityShipped:t,quantityReturnRequested:p,id:n==null?void 0:n.id,discounted:R,total:{value:((f=n==null?void 0:n.product_sale_price)==null?void 0:f.value)*(n==null?void 0:n.quantity_ordered)||0,currency:((h=n==null?void 0:n.product_sale_price)==null?void 0:h.currency)||""},totalInclTax:{value:((q=n==null?void 0:n.product_sale_price)==null?void 0:q.value)*(n==null?void 0:n.quantity_ordered)||0,currency:(G=n==null?void 0:n.product_sale_price)==null?void 0:G.currency},price:a,prices:P(n),itemPrices:y,taxCalculations:En(y,a,R),priceInclTax:{value:((O=n==null?void 0:n.product_sale_price)==null?void 0:O.value)??0,currency:(N=n==null?void 0:n.product_sale_price)==null?void 0:N.currency},totalQuantity:g,regularPrice:{value:(A=($=(e=(w=n==null?void 0:n.product)==null?void 0:w.price_range)==null?void 0:e.maximum_price)==null?void 0:$.regular_price)==null?void 0:A.value,currency:(Q=(Y=(z=(T=n==null?void 0:n.product)==null?void 0:T.price_range)==null?void 0:z.maximum_price)==null?void 0:Y.regular_price)==null?void 0:Q.currency},product:an(n==null?void 0:n.product),thumbnail:bn(n),giftCard:(n==null?void 0:n.__typename)==="GiftCardOrderItem"?Tn(n):void 0,configurableOptions:sn(n),bundleOptions:n.__typename==="BundleOrderItem"?tn(n.bundle_options):null,downloadableLinks:n.__typename==="DownloadableOrderItem"?yn(n==null?void 0:n.downloadable_links):null}},L=n=>n==null?void 0:n.filter(u=>u.__typename).map(u=>d(u)),vn=n=>{var u,i,_,c,l;return{token:(n==null?void 0:n.token)??"",email:(n==null?void 0:n.email)??"",status:(n==null?void 0:n.status)??"",number:(n==null?void 0:n.number)??"",id:(n==null?void 0:n.id)??"",carrier:n.carrier??"",coupons:(n==null?void 0:n.applied_coupons)??[],orderDate:(n==null?void 0:n.order_date)??"",isVirtual:(n==null?void 0:n.is_virtual)??!1,availableActions:(n==null?void 0:n.available_actions)??[],orderStatusChangeDate:(n==null?void 0:n.order_status_change_date)??"",shippingMethod:(n==null?void 0:n.shipping_method)??"",giftWrappingOrder:{price:{value:((i=(u=n==null?void 0:n.gift_wrapping)==null?void 0:u.price)==null?void 0:i.value)??0,currency:((c=(_=n==null?void 0:n.gift_wrapping)==null?void 0:_.price)==null?void 0:c.currency)??"USD"},uid:((l=n==null?void 0:n.gift_wrapping)==null?void 0:l.uid)??""}}},fn=n=>{var i,_,c,l,t,p,y,R,g,a,E,b,v;const u=(i=n==null?void 0:n.total)==null?void 0:i.gift_options;return{giftWrappingForItems:{value:((_=u==null?void 0:u.gift_wrapping_for_items)==null?void 0:_.value)??0,currency:((c=u==null?void 0:u.gift_wrapping_for_items)==null?void 0:c.currency)??"USD"},giftWrappingForItemsInclTax:{value:((l=u==null?void 0:u.gift_wrapping_for_items_incl_tax)==null?void 0:l.value)??0,currency:((t=u==null?void 0:u.gift_wrapping_for_items_incl_tax)==null?void 0:t.currency)??"USD"},giftWrappingForOrder:{value:((p=u==null?void 0:u.gift_wrapping_for_order)==null?void 0:p.value)??0,currency:((y=u==null?void 0:u.gift_wrapping_for_order)==null?void 0:y.currency)??"USD"},giftWrappingForOrderInclTax:{value:((R=u==null?void 0:u.gift_wrapping_for_order_incl_tax)==null?void 0:R.value)??0,currency:((g=u==null?void 0:u.gift_wrapping_for_order_incl_tax)==null?void 0:g.currency)??"USD"},printedCard:{value:((a=u==null?void 0:u.printed_card)==null?void 0:a.value)??0,currency:((E=u==null?void 0:u.printed_card)==null?void 0:E.currency)??"USD"},printedCardInclTax:{value:((b=u==null?void 0:u.printed_card_incl_tax)==null?void 0:b.value)??0,currency:((v=u==null?void 0:u.printed_card_incl_tax)==null?void 0:v.currency)??"USD"}}},hn=(n=[])=>n?n==null?void 0:n.map(u=>{var i,_;return{code:(u==null?void 0:u.code)??"",appliedBalance:{value:((i=u.applied_balance)==null?void 0:i.value)??0,currency:((_=u.applied_balance)==null?void 0:_.currency)??"USD"}}}):[],B=(n,u)=>{var f,h,q,G,O,N,w,e,$;const i=vn(n),_=W(n==null?void 0:n.billing_address),c=W(n==null?void 0:n.shipping_address),l=(f=n.shipments)==null?void 0:f.map(A=>({...A,items:A.items.map(T=>({id:T.id,productName:T.product_name,productSku:T.product_sku,quantityShipped:T.quantity_shipped,orderItem:d(T.order_item)}))})),t=hn(n==null?void 0:n.applied_gift_cards),p=L(n.items),y=((h=An(n==null?void 0:n.returns))==null?void 0:h.ordersReturn)??[],R=u?y.filter(A=>A.returnNumber===u):y,g=L(n.items_eligible_for_return),a=gn(n==null?void 0:n.total),E=(q=n==null?void 0:n.payment_methods)==null?void 0:q[0],b=n==null?void 0:n.shipping_method,v=p==null?void 0:p.reduce((A,T)=>A+(T==null?void 0:T.totalQuantity),0),F={amount:((G=a==null?void 0:a.totalShipping)==null?void 0:G.value)??0,currency:((O=a==null?void 0:a.totalShipping)==null?void 0:O.currency)||"",code:(i==null?void 0:i.shippingMethod)??""},k=[{code:(E==null?void 0:E.type)??"",name:(E==null?void 0:E.name)??""}],x=a==null?void 0:a.subtotalExclTax,M=a==null?void 0:a.subtotalInclTax,s=fn(n),S={...i,...a,appliedGiftCards:t,totalGiftOptions:s,subtotalExclTax:x,subtotalInclTax:M,billingAddress:_,shippingAddress:c,shipments:l,items:p,returns:R,itemsEligibleForReturn:g,totalQuantity:v,shippingMethod:b,shipping:F,payments:k};return K(S,($=(e=(w=(N=U==null?void 0:U.getConfig())==null?void 0:N.models)==null?void 0:w.OrderDataModel)==null?void 0:e.transformer)==null?void 0:$.call(e,n))},en=(n,u,i)=>{var _,c,l,t,p,y,R;if((t=(l=(c=(_=u==null?void 0:u.data)==null?void 0:_.customer)==null?void 0:c.orders)==null?void 0:l.items)!=null&&t.length&&n==="orderData"){const g=(R=(y=(p=u==null?void 0:u.data)==null?void 0:p.customer)==null?void 0:y.orders)==null?void 0:R.items[0];return B(g,i)}return null},An=n=>{var l,t,p,y,R;if(!((l=n==null?void 0:n.items)!=null&&l.length))return null;const u=n==null?void 0:n.items,i=n==null?void 0:n.page_info,c={ordersReturn:[...u].sort((g,a)=>+a.number-+g.number).map(g=>{var x,M;const{order:a,status:E,number:b,created_at:v}=g,F=((M=(x=g==null?void 0:g.shipping)==null?void 0:x.tracking)==null?void 0:M.map(s=>{const{status:S,carrier:f,tracking_number:h}=s;return{status:S,carrier:f,trackingNumber:h}}))??[],k=g.items.map(s=>{var N;const S=s==null?void 0:s.quantity,f=s==null?void 0:s.status,h=s==null?void 0:s.request_quantity,q=s==null?void 0:s.uid,G=s==null?void 0:s.order_item,O=((N=L([G]))==null?void 0:N.reduce((w,e)=>e,{}))??{};return{uid:q,quantity:S,status:f,requestQuantity:h,...O}});return{createdReturnAt:v,returnStatus:E,token:a==null?void 0:a.token,orderNumber:a==null?void 0:a.number,returnNumber:b,items:k,tracking:F}}),...i?{pageInfo:{pageSize:i.page_size,totalPages:i.total_pages,currentPage:i.current_page}}:{}};return K(c,(R=(y=(p=(t=U==null?void 0:U.getConfig())==null?void 0:t.models)==null?void 0:p.CustomerOrdersReturnModel)==null?void 0:y.transformer)==null?void 0:R.call(y,{...u,...i}))},Cn=(n,u)=>{var _,c;if(!((_=n==null?void 0:n.data)!=null&&_.guestOrder))return null;const i=(c=n==null?void 0:n.data)==null?void 0:c.guestOrder;return B(i,u)},Sn=(n,u)=>{var _,c;if(!((_=n==null?void 0:n.data)!=null&&_.guestOrderByToken))return null;const i=(c=n==null?void 0:n.data)==null?void 0:c.guestOrderByToken;return B(i,u)},Nn=`
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
  ${V}
  ${X}
  ${H}
  ${J}
  ${Z}
  ${m}
  ${D}
  ${r}
  ${o}
  ${_n}
`,xn=async({orderId:n,returnRef:u,queryType:i,returnsPageSize:_=50})=>await I(Nn,{method:"GET",cache:"force-cache",variables:{orderNumber:n,pageSize:_}}).then(c=>en(i??"orderData",c,u)).catch(j),Mn=`
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
  ${V}
  ${X}
  ${H}
  ${J}
  ${Z}
  ${m}
  ${D}
  ${r}
  ${o}
`,qn=async(n,u)=>await I(Mn,{method:"GET",cache:"no-cache",variables:{token:n}}).then(i=>{var _;return(_=i.errors)!=null&&_.length&&i.errors[0].message==="Please login to view the order."?cn(i.errors):Sn(i,u)}).catch(j),Gn="orderData",On=async n=>{var t;const u=typeof(n==null?void 0:n.orderRef)=="string"?n==null?void 0:n.orderRef:"",i=typeof(n==null?void 0:n.returnRef)=="string"?n==null?void 0:n.returnRef:"",_=u&&typeof(n==null?void 0:n.orderRef)=="string"&&((t=n==null?void 0:n.orderRef)==null?void 0:t.length)>20,c=(n==null?void 0:n.orderData)??null;if(c){C.emit("order/data",{...c,returnNumber:i});return}if(!u)return;const l=_?await qn(u,i):await xn({orderId:u,returnRef:i,queryType:Gn});l?C.emit("order/data",{...l,returnNumber:i}):C.emit("order/error",{source:"order",type:"network",error:"The data was not received."})},nn=new un({init:async n=>{const u={};nn.config.setConfig({...u,...n}),On(n??{}).catch(console.error)},listeners:()=>[]}),U=nn.config;export{B as a,Cn as b,qn as c,U as d,xn as g,nn as i,An as t};
