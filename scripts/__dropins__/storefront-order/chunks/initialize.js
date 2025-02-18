/*! Copyright 2025 Adobe
All Rights Reserved. */
import{merge as m,Initializer as Rn}from"@dropins/tools/lib.js";import{events as C}from"@dropins/tools/event-bus.js";import{h as o}from"./network-error.js";import{PRODUCT_DETAILS_FRAGMENT as r,PRICE_DETAILS_FRAGMENT as I,GIFT_CARD_DETAILS_FRAGMENT as d,ORDER_ITEM_DETAILS_FRAGMENT as nn,BUNDLE_ORDER_ITEM_DETAILS_FRAGMENT as un,ORDER_SUMMARY_FRAGMENT as _n,ADDRESS_FRAGMENT as cn,RETURNS_FRAGMENT as ln,ORDER_ITEM_FRAGMENT as an,APPLIED_GIFT_CARDS_FRAGMENT as En,GIFT_MESSAGE_FRAGMENT as tn}from"../fragments.js";import{f as sn,h as Tn}from"./fetch-graphql.js";const fn=n=>n||0,bn=n=>{var i,u,_,c,l,y,g,p,R;return{__typename:(n==null?void 0:n.__typename)||"",uid:(n==null?void 0:n.uid)||"",onlyXLeftInStock:(n==null?void 0:n.only_x_left_in_stock)??0,stockStatus:(n==null?void 0:n.stock_status)??"",priceRange:{maximumPrice:{regularPrice:{currency:((_=(u=(i=n==null?void 0:n.price_range)==null?void 0:i.maximum_price)==null?void 0:u.regular_price)==null?void 0:_.currency)??"",value:((y=(l=(c=n==null?void 0:n.price_range)==null?void 0:c.maximum_price)==null?void 0:l.regular_price)==null?void 0:y.value)??0}}},canonicalUrl:(n==null?void 0:n.canonical_url)??"",urlKey:(n==null?void 0:n.url_key)||"",id:(n==null?void 0:n.uid)??"",name:(n==null?void 0:n.name)||"",sku:(n==null?void 0:n.sku)||"",image:((g=n==null?void 0:n.image)==null?void 0:g.url)||"",productType:(n==null?void 0:n.__typename)||"",thumbnail:{label:((p=n==null?void 0:n.thumbnail)==null?void 0:p.label)||"",url:((R=n==null?void 0:n.thumbnail)==null?void 0:R.url)||""}}},vn=n=>{if(!n||!("selected_options"in n))return;const i={};for(const u of n.selected_options)i[u.label]=u.value;return i},hn=n=>{const i=n==null?void 0:n.map(_=>({uid:_.uid,label:_.label,values:_.values.map(c=>c.product_name).join(", ")})),u={};return i==null||i.forEach(_=>{u[_.label]=_.values}),Object.keys(u).length>0?u:null},An=n=>(n==null?void 0:n.length)>0?{count:n.length,result:n.map(i=>i.title).join(", ")}:null,Sn=n=>({quantityCanceled:(n==null?void 0:n.quantity_canceled)??0,quantityInvoiced:(n==null?void 0:n.quantity_invoiced)??0,quantityOrdered:(n==null?void 0:n.quantity_ordered)??0,quantityRefunded:(n==null?void 0:n.quantity_refunded)??0,quantityReturned:(n==null?void 0:n.quantity_returned)??0,quantityShipped:(n==null?void 0:n.quantity_shipped)??0,quantityReturnRequested:(n==null?void 0:n.quantity_return_requested)??0}),Nn=n=>({firstName:(n==null?void 0:n.firstname)??"",lastName:(n==null?void 0:n.lastname)??"",middleName:(n==null?void 0:n.middlename)??""}),Z=n=>{const{firstName:i,lastName:u,middleName:_}=Nn(n);return{firstName:i,lastName:u,middleName:_,city:(n==null?void 0:n.city)??"",company:(n==null?void 0:n.company)??"",country:(n==null?void 0:n.country)??"",countryCode:(n==null?void 0:n.country_code)??"",fax:(n==null?void 0:n.fax)??"",postCode:(n==null?void 0:n.postcode)??"",prefix:(n==null?void 0:n.prefix)??"",region:(n==null?void 0:n.region)??"",regionId:(n==null?void 0:n.region_id)??"",street:(n==null?void 0:n.street)??[],suffix:(n==null?void 0:n.suffix)??"",telephone:(n==null?void 0:n.telephone)??"",vatId:(n==null?void 0:n.vat_id)??"",customAttributes:(n==null?void 0:n.custom_attributes)??[]}},Mn=n=>{const i={value:0,currency:"USD"};return{grandTotal:(n==null?void 0:n.grand_total)??i,totalGiftCard:(n==null?void 0:n.total_giftcard)??i,subtotalExclTax:(n==null?void 0:n.subtotal_excl_tax)??i,subtotalInclTax:(n==null?void 0:n.subtotal_incl_tax)??i,taxes:(n==null?void 0:n.taxes)??[],totalTax:(n==null?void 0:n.total_tax)??i,totalShipping:(n==null?void 0:n.total_shipping)??i,discounts:(n==null?void 0:n.discounts)??[]}},D=n=>{const i={value:0,currency:"USD"},u=(n==null?void 0:n.prices)??{};return{price:(u==null?void 0:u.price)??i,priceIncludingTax:(u==null?void 0:u.price_including_tax)??i,originalPrice:(u==null?void 0:u.original_price)??i,originalPriceIncludingTax:(u==null?void 0:u.original_price_including_tax)??i,discounts:(u==null?void 0:u.discounts)??[]}},Gn=(n,i,u)=>{const _=n==null?void 0:n.price,c=n==null?void 0:n.priceIncludingTax,l=n==null?void 0:n.originalPrice,y=u?l==null?void 0:l.value:c==null?void 0:c.value,g={originalPrice:l,baseOriginalPrice:{value:y,currency:l==null?void 0:l.currency},baseDiscountedPrice:{value:c==null?void 0:c.value,currency:c==null?void 0:c.currency},baseExcludingTax:{value:_==null?void 0:_.value,currency:_==null?void 0:_.currency}},p={originalPrice:l,baseOriginalPrice:{value:l==null?void 0:l.value,currency:c==null?void 0:c.currency},baseDiscountedPrice:{value:i==null?void 0:i.value,currency:_==null?void 0:_.currency},baseExcludingTax:{value:_==null?void 0:_.value,currency:_==null?void 0:_.currency}},R={singleItemPrice:{value:u?l.value:c.value,currency:c.currency},baseOriginalPrice:{value:y,currency:c.currency},baseDiscountedPrice:{value:c.value,currency:c.currency}};return{includeAndExcludeTax:g,excludeTax:p,includeTax:R}},xn=n=>{var i,u,_,c,l;return{senderName:((i=n.gift_card)==null?void 0:i.sender_name)||"",senderEmail:((u=n.gift_card)==null?void 0:u.sender_email)||"",recipientEmail:((_=n.gift_card)==null?void 0:_.recipient_email)||"",recipientName:((c=n.gift_card)==null?void 0:c.recipient_name)||"",message:((l=n.gift_card)==null?void 0:l.message)||""}},Fn=n=>{var i,u,_,c;return{label:((u=(i=n==null?void 0:n.product)==null?void 0:i.thumbnail)==null?void 0:u.label)||"",url:((c=(_=n==null?void 0:n.product)==null?void 0:_.thumbnail)==null?void 0:c.url)||""}};function qn(n){return{currency:(n==null?void 0:n.currency)??"USD",value:(n==null?void 0:n.value)??0}}function yn(n){var i,u,_;return{senderName:((i=n==null?void 0:n.gift_message)==null?void 0:i.from)??"",recipientName:((u=n==null?void 0:n.gift_message)==null?void 0:u.to)??"",message:((_=n==null?void 0:n.gift_message)==null?void 0:_.message)??""}}const pn=n=>{var t,f,b,k,w,G,x,s,N,v,h,F,q,O,M,e,A,$,S,T,z,Y,W,P,Q,K,j,V,X,H,J;const{quantityCanceled:i,quantityInvoiced:u,quantityOrdered:_,quantityRefunded:c,quantityReturned:l,quantityShipped:y,quantityReturnRequested:g}=Sn(n),p=D(n),R=((t=n==null?void 0:n.prices)==null?void 0:t.original_price.value)*(n==null?void 0:n.quantity_ordered)>((f=n==null?void 0:n.prices)==null?void 0:f.price.value)*(n==null?void 0:n.quantity_ordered),E=fn(n==null?void 0:n.quantity_ordered),a={value:((b=n==null?void 0:n.product_sale_price)==null?void 0:b.value)||0,currency:(k=n==null?void 0:n.product_sale_price)==null?void 0:k.currency};return{giftMessage:yn(n),giftWrappingPrice:qn((w=n==null?void 0:n.product)==null?void 0:w.gift_wrapping_price),productGiftWrapping:[{design:((G=n==null?void 0:n.gift_wrapping)==null?void 0:G.design)??"",uid:(x=n==null?void 0:n.gift_wrapping)==null?void 0:x.uid,selected:((s=n.gift_wrapping)==null?void 0:s.uid)===((N=n==null?void 0:n.gift_wrapping)==null?void 0:N.uid),image:{url:((h=(v=n==null?void 0:n.gift_wrapping)==null?void 0:v.image)==null?void 0:h.url)??"",label:((q=(F=n==null?void 0:n.gift_wrapping)==null?void 0:F.image)==null?void 0:q.label)??""},price:{currency:((M=(O=n==null?void 0:n.gift_wrapping)==null?void 0:O.price)==null?void 0:M.currency)??"USD",value:((A=(e=n==null?void 0:n.gift_wrapping)==null?void 0:e.price)==null?void 0:A.value)??0}}],selectedOptions:(n==null?void 0:n.selected_options)??[],productSalePrice:n==null?void 0:n.product_sale_price,status:(n==null?void 0:n.status)??"",type:n==null?void 0:n.__typename,eligibleForReturn:(n==null?void 0:n.eligible_for_return)??!1,productSku:(n==null?void 0:n.product_sku)??"",productName:(n==null?void 0:n.product_name)??"",productUrlKey:(n==null?void 0:n.product_url_key)??"",quantityCanceled:i,quantityInvoiced:u,quantityOrdered:_,quantityRefunded:c,quantityReturned:l,quantityShipped:y,quantityReturnRequested:g,id:n==null?void 0:n.id,discounted:R,total:{value:(($=n==null?void 0:n.product_sale_price)==null?void 0:$.value)*(n==null?void 0:n.quantity_ordered)||0,currency:((S=n==null?void 0:n.product_sale_price)==null?void 0:S.currency)||""},totalInclTax:{value:((T=n==null?void 0:n.product_sale_price)==null?void 0:T.value)*(n==null?void 0:n.quantity_ordered)||0,currency:(z=n==null?void 0:n.product_sale_price)==null?void 0:z.currency},price:a,prices:D(n),itemPrices:p,taxCalculations:Gn(p,a,R),priceInclTax:{value:((Y=n==null?void 0:n.product_sale_price)==null?void 0:Y.value)??0,currency:(W=n==null?void 0:n.product_sale_price)==null?void 0:W.currency},totalQuantity:E,regularPrice:{value:(j=(K=(Q=(P=n==null?void 0:n.product)==null?void 0:P.price_range)==null?void 0:Q.maximum_price)==null?void 0:K.regular_price)==null?void 0:j.value,currency:(J=(H=(X=(V=n==null?void 0:n.product)==null?void 0:V.price_range)==null?void 0:X.maximum_price)==null?void 0:H.regular_price)==null?void 0:J.currency},product:bn(n==null?void 0:n.product),thumbnail:Fn(n),giftCard:(n==null?void 0:n.__typename)==="GiftCardOrderItem"?xn(n):void 0,configurableOptions:vn(n),bundleOptions:n.__typename==="BundleOrderItem"?hn(n.bundle_options):null,downloadableLinks:n.__typename==="DownloadableOrderItem"?An(n==null?void 0:n.downloadable_links):null}},L=n=>n==null?void 0:n.filter(i=>i.__typename).map(i=>pn(i)),On=n=>{var i,u,_,c,l;return{giftMessage:yn(n),token:(n==null?void 0:n.token)??"",email:(n==null?void 0:n.email)??"",status:(n==null?void 0:n.status)??"",number:(n==null?void 0:n.number)??"",id:(n==null?void 0:n.id)??"",carrier:n.carrier??"",coupons:(n==null?void 0:n.applied_coupons)??[],orderDate:(n==null?void 0:n.order_date)??"",isVirtual:(n==null?void 0:n.is_virtual)??!1,availableActions:(n==null?void 0:n.available_actions)??[],orderStatusChangeDate:(n==null?void 0:n.order_status_change_date)??"",shippingMethod:(n==null?void 0:n.shipping_method)??"",giftWrappingOrder:{price:{value:((u=(i=n==null?void 0:n.gift_wrapping)==null?void 0:i.price)==null?void 0:u.value)??0,currency:((c=(_=n==null?void 0:n.gift_wrapping)==null?void 0:_.price)==null?void 0:c.currency)??"USD"},uid:((l=n==null?void 0:n.gift_wrapping)==null?void 0:l.uid)??""}}},kn=n=>{var u,_,c,l,y,g,p,R,E,a,t,f,b;const i=(u=n==null?void 0:n.total)==null?void 0:u.gift_options;return{giftWrappingForItems:{value:((_=i==null?void 0:i.gift_wrapping_for_items)==null?void 0:_.value)??0,currency:((c=i==null?void 0:i.gift_wrapping_for_items)==null?void 0:c.currency)??"USD"},giftWrappingForItemsInclTax:{value:((l=i==null?void 0:i.gift_wrapping_for_items_incl_tax)==null?void 0:l.value)??0,currency:((y=i==null?void 0:i.gift_wrapping_for_items_incl_tax)==null?void 0:y.currency)??"USD"},giftWrappingForOrder:{value:((g=i==null?void 0:i.gift_wrapping_for_order)==null?void 0:g.value)??0,currency:((p=i==null?void 0:i.gift_wrapping_for_order)==null?void 0:p.currency)??"USD"},giftWrappingForOrderInclTax:{value:((R=i==null?void 0:i.gift_wrapping_for_order_incl_tax)==null?void 0:R.value)??0,currency:((E=i==null?void 0:i.gift_wrapping_for_order_incl_tax)==null?void 0:E.currency)??"USD"},printedCard:{value:((a=i==null?void 0:i.printed_card)==null?void 0:a.value)??0,currency:((t=i==null?void 0:i.printed_card)==null?void 0:t.currency)??"USD"},printedCardInclTax:{value:((f=i==null?void 0:i.printed_card_incl_tax)==null?void 0:f.value)??0,currency:((b=i==null?void 0:i.printed_card_incl_tax)==null?void 0:b.currency)??"USD"}}},wn=(n=[])=>n?n==null?void 0:n.map(i=>{var u,_;return{code:(i==null?void 0:i.code)??"",appliedBalance:{value:((u=i.applied_balance)==null?void 0:u.value)??0,currency:((_=i.applied_balance)==null?void 0:_.currency)??"USD"}}}):[],B=(n,i)=>{var v,h,F,q,O,M,e,A,$;console.log("orderData :>> ",n);const u=On(n),_=Z(n==null?void 0:n.billing_address),c=Z(n==null?void 0:n.shipping_address),l=(v=n.shipments)==null?void 0:v.map(S=>({...S,items:S.items.map(T=>({id:T.id,productName:T.product_name,productSku:T.product_sku,quantityShipped:T.quantity_shipped,orderItem:pn(T.order_item)}))})),y=wn(n==null?void 0:n.applied_gift_cards),g=L(n.items),p=((h=Un(n==null?void 0:n.returns))==null?void 0:h.ordersReturn)??[],R=i?p.filter(S=>S.returnNumber===i):p,E=L(n.items_eligible_for_return),a=Mn(n==null?void 0:n.total),t=(F=n==null?void 0:n.payment_methods)==null?void 0:F[0],f=n==null?void 0:n.shipping_method,b=g==null?void 0:g.reduce((S,T)=>S+(T==null?void 0:T.totalQuantity),0),k={amount:((q=a==null?void 0:a.totalShipping)==null?void 0:q.value)??0,currency:((O=a==null?void 0:a.totalShipping)==null?void 0:O.currency)||"",code:(u==null?void 0:u.shippingMethod)??""},w=[{code:(t==null?void 0:t.type)??"",name:(t==null?void 0:t.name)??""}],G=a==null?void 0:a.subtotalExclTax,x=a==null?void 0:a.subtotalInclTax,s=kn(n),N={...u,...a,appliedGiftCards:y,totalGiftOptions:s,subtotalExclTax:G,subtotalInclTax:x,billingAddress:_,shippingAddress:c,shipments:l,items:g,returns:R,itemsEligibleForReturn:E,totalQuantity:b,shippingMethod:f,shipping:k,payments:w};return m(N,($=(A=(e=(M=U==null?void 0:U.getConfig())==null?void 0:M.models)==null?void 0:e.OrderDataModel)==null?void 0:A.transformer)==null?void 0:$.call(A,n))},en=(n,i,u)=>{var _,c,l,y,g,p,R;if((y=(l=(c=(_=i==null?void 0:i.data)==null?void 0:_.customer)==null?void 0:c.orders)==null?void 0:l.items)!=null&&y.length&&n==="orderData"){const E=(R=(p=(g=i==null?void 0:i.data)==null?void 0:g.customer)==null?void 0:p.orders)==null?void 0:R.items[0];return B(E,u)}return null},Un=n=>{var l,y,g,p,R;if(!((l=n==null?void 0:n.items)!=null&&l.length))return null;const i=n==null?void 0:n.items,u=n==null?void 0:n.page_info,c={ordersReturn:[...i].sort((E,a)=>+a.number-+E.number).map(E=>{var G,x;const{order:a,status:t,number:f,created_at:b}=E,k=((x=(G=E==null?void 0:E.shipping)==null?void 0:G.tracking)==null?void 0:x.map(s=>{const{status:N,carrier:v,tracking_number:h}=s;return{status:N,carrier:v,trackingNumber:h}}))??[],w=E.items.map(s=>{var M;const N=s==null?void 0:s.quantity,v=s==null?void 0:s.status,h=s==null?void 0:s.request_quantity,F=s==null?void 0:s.uid,q=s==null?void 0:s.order_item,O=((M=L([q]))==null?void 0:M.reduce((e,A)=>A,{}))??{};return{uid:F,quantity:N,status:v,requestQuantity:h,...O}});return{createdReturnAt:b,returnStatus:t,token:a==null?void 0:a.token,orderNumber:a==null?void 0:a.number,returnNumber:f,items:w,tracking:k}}),...u?{pageInfo:{pageSize:u.page_size,totalPages:u.total_pages,currentPage:u.current_page}}:{}};return m(c,(R=(p=(g=(y=U==null?void 0:U.getConfig())==null?void 0:y.models)==null?void 0:g.CustomerOrdersReturnModel)==null?void 0:p.transformer)==null?void 0:R.call(p,{...i,...u}))},Xn=(n,i)=>{var _,c;if(!((_=n==null?void 0:n.data)!=null&&_.guestOrder))return null;const u=(c=n==null?void 0:n.data)==null?void 0:c.guestOrder;return B(u,i)},$n=(n,i)=>{var _,c;if(!((_=n==null?void 0:n.data)!=null&&_.guestOrderByToken))return null;const u=(c=n==null?void 0:n.data)==null?void 0:c.guestOrderByToken;return B(u,i)},Cn=`
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
            ...GIFT_MESSAGE_FRAGMENT
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
  ${En}
  ${tn}
`,Ln=async({orderId:n,returnRef:i,queryType:u,returnsPageSize:_=50})=>await sn(Cn,{method:"GET",cache:"force-cache",variables:{orderNumber:n,pageSize:_}}).then(c=>en(u??"orderData",c,i)).catch(o),Bn=`
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
`,zn=async(n,i)=>await sn(Bn,{method:"GET",cache:"no-cache",variables:{token:n}}).then(u=>{var _;return(_=u.errors)!=null&&_.length&&u.errors[0].message==="Please login to view the order."?Tn(u.errors):$n(u,i)}).catch(o),Yn="orderData",Wn=async n=>{var y;const i=typeof(n==null?void 0:n.orderRef)=="string"?n==null?void 0:n.orderRef:"",u=typeof(n==null?void 0:n.returnRef)=="string"?n==null?void 0:n.returnRef:"",_=i&&typeof(n==null?void 0:n.orderRef)=="string"&&((y=n==null?void 0:n.orderRef)==null?void 0:y.length)>20,c=(n==null?void 0:n.orderData)??null;if(c){C.emit("order/data",{...c,returnNumber:u});return}if(!i)return;const l=_?await zn(i,u):await Ln({orderId:i,returnRef:u,queryType:Yn});l?C.emit("order/data",{...l,returnNumber:u}):C.emit("order/error",{source:"order",type:"network",error:"The data was not received."})},gn=new Rn({init:async n=>{const i={};gn.config.setConfig({...i,...n}),Wn(n??{}).catch(console.error)},listeners:()=>[]}),U=gn.config;export{B as a,Xn as b,zn as c,U as d,Ln as g,gn as i,Un as t};
