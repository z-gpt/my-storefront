/*! Copyright 2025 Adobe
All Rights Reserved. */
import{merge as m,Initializer as Rn}from"@dropins/tools/lib.js";import{events as C}from"@dropins/tools/event-bus.js";import{h as o}from"./network-error.js";import{PRODUCT_DETAILS_FRAGMENT as r,PRICE_DETAILS_FRAGMENT as I,GIFT_CARD_DETAILS_FRAGMENT as d,ORDER_ITEM_DETAILS_FRAGMENT as nn,BUNDLE_ORDER_ITEM_DETAILS_FRAGMENT as un,ORDER_SUMMARY_FRAGMENT as cn,ADDRESS_FRAGMENT as _n,RETURNS_FRAGMENT as ln,ORDER_ITEM_FRAGMENT as an}from"../fragments.js";import{f as sn,h as tn}from"./fetch-graphql.js";const fn=n=>n||0,En=n=>{var i,u,c,_,l,p,y,g,R;return{__typename:(n==null?void 0:n.__typename)||"",uid:(n==null?void 0:n.uid)||"",onlyXLeftInStock:(n==null?void 0:n.only_x_left_in_stock)??0,stockStatus:(n==null?void 0:n.stock_status)??"",priceRange:{maximumPrice:{regularPrice:{currency:((c=(u=(i=n==null?void 0:n.price_range)==null?void 0:i.maximum_price)==null?void 0:u.regular_price)==null?void 0:c.currency)??"",value:((p=(l=(_=n==null?void 0:n.price_range)==null?void 0:_.maximum_price)==null?void 0:l.regular_price)==null?void 0:p.value)??0}}},canonicalUrl:(n==null?void 0:n.canonical_url)??"",urlKey:(n==null?void 0:n.url_key)||"",id:(n==null?void 0:n.uid)??"",name:(n==null?void 0:n.name)||"",sku:(n==null?void 0:n.sku)||"",image:((y=n==null?void 0:n.image)==null?void 0:y.url)||"",productType:(n==null?void 0:n.__typename)||"",thumbnail:{label:((g=n==null?void 0:n.thumbnail)==null?void 0:g.label)||"",url:((R=n==null?void 0:n.thumbnail)==null?void 0:R.url)||""}}},bn=n=>{if(!n||!("selected_options"in n))return;const i={};for(const u of n.selected_options)i[u.label]=u.value;return i},Tn=n=>{const i=n==null?void 0:n.map(c=>({uid:c.uid,label:c.label,values:c.values.map(_=>_.product_name).join(", ")})),u={};return i==null||i.forEach(c=>{u[c.label]=c.values}),Object.keys(u).length>0?u:null},vn=n=>(n==null?void 0:n.length)>0?{count:n.length,result:n.map(i=>i.title).join(", ")}:null,hn=n=>({quantityCanceled:(n==null?void 0:n.quantity_canceled)??0,quantityInvoiced:(n==null?void 0:n.quantity_invoiced)??0,quantityOrdered:(n==null?void 0:n.quantity_ordered)??0,quantityRefunded:(n==null?void 0:n.quantity_refunded)??0,quantityReturned:(n==null?void 0:n.quantity_returned)??0,quantityShipped:(n==null?void 0:n.quantity_shipped)??0,quantityReturnRequested:(n==null?void 0:n.quantity_return_requested)??0}),Sn=n=>({firstName:(n==null?void 0:n.firstname)??"",lastName:(n==null?void 0:n.lastname)??"",middleName:(n==null?void 0:n.middlename)??""}),Z=n=>{const{firstName:i,lastName:u,middleName:c}=Sn(n);return{firstName:i,lastName:u,middleName:c,city:(n==null?void 0:n.city)??"",company:(n==null?void 0:n.company)??"",country:(n==null?void 0:n.country)??"",countryCode:(n==null?void 0:n.country_code)??"",fax:(n==null?void 0:n.fax)??"",postCode:(n==null?void 0:n.postcode)??"",prefix:(n==null?void 0:n.prefix)??"",region:(n==null?void 0:n.region)??"",regionId:(n==null?void 0:n.region_id)??"",street:(n==null?void 0:n.street)??[],suffix:(n==null?void 0:n.suffix)??"",telephone:(n==null?void 0:n.telephone)??"",vatId:(n==null?void 0:n.vat_id)??"",customAttributes:(n==null?void 0:n.custom_attributes)??[]}},An=n=>{const i={value:0,currency:"USD"};return{grandTotal:(n==null?void 0:n.grand_total)??i,totalGiftCard:(n==null?void 0:n.total_giftcard)??i,subtotalExclTax:(n==null?void 0:n.subtotal_excl_tax)??i,subtotalInclTax:(n==null?void 0:n.subtotal_incl_tax)??i,taxes:(n==null?void 0:n.taxes)??[],totalTax:(n==null?void 0:n.total_tax)??i,totalShipping:(n==null?void 0:n.total_shipping)??i,discounts:(n==null?void 0:n.discounts)??[]}},D=n=>{const i={value:0,currency:"USD"},u=(n==null?void 0:n.prices)??{};return{price:(u==null?void 0:u.price)??i,priceIncludingTax:(u==null?void 0:u.price_including_tax)??i,originalPrice:(u==null?void 0:u.original_price)??i,originalPriceIncludingTax:(u==null?void 0:u.original_price_including_tax)??i,discounts:(u==null?void 0:u.discounts)??[]}},Nn=(n,i,u)=>{const c=n==null?void 0:n.price,_=n==null?void 0:n.priceIncludingTax,l=n==null?void 0:n.originalPrice,p=u?l==null?void 0:l.value:_==null?void 0:_.value,y={originalPrice:l,baseOriginalPrice:{value:p,currency:l==null?void 0:l.currency},baseDiscountedPrice:{value:_==null?void 0:_.value,currency:_==null?void 0:_.currency},baseExcludingTax:{value:c==null?void 0:c.value,currency:c==null?void 0:c.currency}},g={originalPrice:l,baseOriginalPrice:{value:l==null?void 0:l.value,currency:_==null?void 0:_.currency},baseDiscountedPrice:{value:i==null?void 0:i.value,currency:c==null?void 0:c.currency},baseExcludingTax:{value:c==null?void 0:c.value,currency:c==null?void 0:c.currency}},R={singleItemPrice:{value:u?l.value:_.value,currency:_.currency},baseOriginalPrice:{value:p,currency:_.currency},baseDiscountedPrice:{value:_.value,currency:_.currency}};return{includeAndExcludeTax:y,excludeTax:g,includeTax:R}},en=n=>{var i,u,c,_,l;return{senderName:((i=n.gift_card)==null?void 0:i.sender_name)||"",senderEmail:((u=n.gift_card)==null?void 0:u.sender_email)||"",recipientEmail:((c=n.gift_card)==null?void 0:c.recipient_email)||"",recipientName:((_=n.gift_card)==null?void 0:_.recipient_name)||"",message:((l=n.gift_card)==null?void 0:l.message)||""}},xn=n=>{var i,u,c,_;return{label:((u=(i=n==null?void 0:n.product)==null?void 0:i.thumbnail)==null?void 0:u.label)||"",url:((_=(c=n==null?void 0:n.product)==null?void 0:c.thumbnail)==null?void 0:_.url)||""}};function Mn(n){return{currency:(n==null?void 0:n.currency)??"USD",value:(n==null?void 0:n.value)??0}}function pn(n){var i,u,c;return{senderName:((i=n==null?void 0:n.gift_message)==null?void 0:i.from)??"",recipientName:((u=n==null?void 0:n.gift_message)==null?void 0:u.to)??"",message:((c=n==null?void 0:n.gift_message)==null?void 0:c.message)??""}}const gn=n=>{var f,b,T,F,k,x,M,s,N,v,h,q,O,G,e,w,S,$,A,E,z,Y,W,Q,K,j,P,V,X,H,J;const{quantityCanceled:i,quantityInvoiced:u,quantityOrdered:c,quantityRefunded:_,quantityReturned:l,quantityShipped:p,quantityReturnRequested:y}=hn(n),g=D(n),R=((f=n==null?void 0:n.prices)==null?void 0:f.original_price.value)*(n==null?void 0:n.quantity_ordered)>((b=n==null?void 0:n.prices)==null?void 0:b.price.value)*(n==null?void 0:n.quantity_ordered),t=fn(n==null?void 0:n.quantity_ordered),a={value:((T=n==null?void 0:n.product_sale_price)==null?void 0:T.value)||0,currency:(F=n==null?void 0:n.product_sale_price)==null?void 0:F.currency};return{giftMessage:pn(n),giftWrappingPrice:Mn((k=n==null?void 0:n.product)==null?void 0:k.gift_wrapping_price),productGiftWrapping:[{design:((x=n==null?void 0:n.gift_wrapping)==null?void 0:x.design)??"",uid:(M=n==null?void 0:n.gift_wrapping)==null?void 0:M.uid,selected:((s=n.gift_wrapping)==null?void 0:s.uid)===((N=n==null?void 0:n.gift_wrapping)==null?void 0:N.uid),image:{url:((h=(v=n==null?void 0:n.gift_wrapping)==null?void 0:v.image)==null?void 0:h.url)??"",label:((O=(q=n==null?void 0:n.gift_wrapping)==null?void 0:q.image)==null?void 0:O.label)??""},price:{currency:((e=(G=n==null?void 0:n.gift_wrapping)==null?void 0:G.price)==null?void 0:e.currency)??"USD",value:((S=(w=n==null?void 0:n.gift_wrapping)==null?void 0:w.price)==null?void 0:S.value)??0}}],selectedOptions:(n==null?void 0:n.selected_options)??[],productSalePrice:n==null?void 0:n.product_sale_price,status:(n==null?void 0:n.status)??"",type:n==null?void 0:n.__typename,eligibleForReturn:(n==null?void 0:n.eligible_for_return)??!1,productSku:(n==null?void 0:n.product_sku)??"",productName:(n==null?void 0:n.product_name)??"",productUrlKey:(n==null?void 0:n.product_url_key)??"",quantityCanceled:i,quantityInvoiced:u,quantityOrdered:c,quantityRefunded:_,quantityReturned:l,quantityShipped:p,quantityReturnRequested:y,id:n==null?void 0:n.id,discounted:R,total:{value:(($=n==null?void 0:n.product_sale_price)==null?void 0:$.value)*(n==null?void 0:n.quantity_ordered)||0,currency:((A=n==null?void 0:n.product_sale_price)==null?void 0:A.currency)||""},totalInclTax:{value:((E=n==null?void 0:n.product_sale_price)==null?void 0:E.value)*(n==null?void 0:n.quantity_ordered)||0,currency:(z=n==null?void 0:n.product_sale_price)==null?void 0:z.currency},price:a,prices:D(n),itemPrices:g,taxCalculations:Nn(g,a,R),priceInclTax:{value:((Y=n==null?void 0:n.product_sale_price)==null?void 0:Y.value)??0,currency:(W=n==null?void 0:n.product_sale_price)==null?void 0:W.currency},totalQuantity:t,regularPrice:{value:(P=(j=(K=(Q=n==null?void 0:n.product)==null?void 0:Q.price_range)==null?void 0:K.maximum_price)==null?void 0:j.regular_price)==null?void 0:P.value,currency:(J=(H=(X=(V=n==null?void 0:n.product)==null?void 0:V.price_range)==null?void 0:X.maximum_price)==null?void 0:H.regular_price)==null?void 0:J.currency},product:En(n==null?void 0:n.product),thumbnail:xn(n),giftCard:(n==null?void 0:n.__typename)==="GiftCardOrderItem"?en(n):void 0,configurableOptions:bn(n),bundleOptions:n.__typename==="BundleOrderItem"?Tn(n.bundle_options):null,downloadableLinks:n.__typename==="DownloadableOrderItem"?vn(n==null?void 0:n.downloadable_links):null}},B=n=>n==null?void 0:n.filter(i=>i.__typename).map(i=>gn(i)),qn=n=>{var i,u,c,_,l;return{giftMessage:pn(n),token:(n==null?void 0:n.token)??"",email:(n==null?void 0:n.email)??"",status:(n==null?void 0:n.status)??"",number:(n==null?void 0:n.number)??"",id:(n==null?void 0:n.id)??"",carrier:n.carrier??"",coupons:(n==null?void 0:n.applied_coupons)??[],orderDate:(n==null?void 0:n.order_date)??"",isVirtual:(n==null?void 0:n.is_virtual)??!1,availableActions:(n==null?void 0:n.available_actions)??[],orderStatusChangeDate:(n==null?void 0:n.order_status_change_date)??"",shippingMethod:(n==null?void 0:n.shipping_method)??"",giftWrappingOrder:{price:{value:((u=(i=n==null?void 0:n.gift_wrapping)==null?void 0:i.price)==null?void 0:u.value)??0,currency:((_=(c=n==null?void 0:n.gift_wrapping)==null?void 0:c.price)==null?void 0:_.currency)??"USD"},uid:((l=n==null?void 0:n.gift_wrapping)==null?void 0:l.uid)??""}}},On=n=>{var u,c,_,l,p,y,g,R,t,a,f,b,T;const i=(u=n==null?void 0:n.total)==null?void 0:u.gift_options;return{giftWrappingForItems:{value:((c=i==null?void 0:i.gift_wrapping_for_items)==null?void 0:c.value)??0,currency:((_=i==null?void 0:i.gift_wrapping_for_items)==null?void 0:_.currency)??"USD"},giftWrappingForItemsInclTax:{value:((l=i==null?void 0:i.gift_wrapping_for_items_incl_tax)==null?void 0:l.value)??0,currency:((p=i==null?void 0:i.gift_wrapping_for_items_incl_tax)==null?void 0:p.currency)??"USD"},giftWrappingForOrder:{value:((y=i==null?void 0:i.gift_wrapping_for_order)==null?void 0:y.value)??0,currency:((g=i==null?void 0:i.gift_wrapping_for_order)==null?void 0:g.currency)??"USD"},giftWrappingForOrderInclTax:{value:((R=i==null?void 0:i.gift_wrapping_for_order_incl_tax)==null?void 0:R.value)??0,currency:((t=i==null?void 0:i.gift_wrapping_for_order_incl_tax)==null?void 0:t.currency)??"USD"},printedCard:{value:((a=i==null?void 0:i.printed_card)==null?void 0:a.value)??0,currency:((f=i==null?void 0:i.printed_card)==null?void 0:f.currency)??"USD"},printedCardInclTax:{value:((b=i==null?void 0:i.printed_card_incl_tax)==null?void 0:b.value)??0,currency:((T=i==null?void 0:i.printed_card_incl_tax)==null?void 0:T.currency)??"USD"}}},Gn=(n=[])=>n?n==null?void 0:n.map(i=>{var u,c;return{code:(i==null?void 0:i.code)??"",appliedBalance:{value:((u=i.applied_balance)==null?void 0:u.value)??0,currency:((c=i.applied_balance)==null?void 0:c.currency)??"USD"}}}):[],L=(n,i)=>{var v,h,q,O,G,e,w,S,$;console.log("orderData :>> ",n);const u=qn(n),c=Z(n==null?void 0:n.billing_address),_=Z(n==null?void 0:n.shipping_address),l=(v=n.shipments)==null?void 0:v.map(A=>({...A,items:A.items.map(E=>({id:E.id,productName:E.product_name,productSku:E.product_sku,quantityShipped:E.quantity_shipped,orderItem:gn(E.order_item)}))})),p=Gn(n==null?void 0:n.applied_gift_cards),y=B(n.items),g=((h=kn(n==null?void 0:n.returns))==null?void 0:h.ordersReturn)??[],R=i?g.filter(A=>A.returnNumber===i):g,t=B(n.items_eligible_for_return),a=An(n==null?void 0:n.total),f=(q=n==null?void 0:n.payment_methods)==null?void 0:q[0],b=n==null?void 0:n.shipping_method,T=y==null?void 0:y.reduce((A,E)=>A+(E==null?void 0:E.totalQuantity),0),F={amount:((O=a==null?void 0:a.totalShipping)==null?void 0:O.value)??0,currency:((G=a==null?void 0:a.totalShipping)==null?void 0:G.currency)||"",code:(u==null?void 0:u.shippingMethod)??""},k=[{code:(f==null?void 0:f.type)??"",name:(f==null?void 0:f.name)??""}],x=a==null?void 0:a.subtotalExclTax,M=a==null?void 0:a.subtotalInclTax,s=On(n),N={...u,...a,appliedGiftCards:p,totalGiftOptions:s,subtotalExclTax:x,subtotalInclTax:M,billingAddress:c,shippingAddress:_,shipments:l,items:y,returns:R,itemsEligibleForReturn:t,totalQuantity:T,shippingMethod:b,shipping:F,payments:k};return m(N,($=(S=(w=(e=U==null?void 0:U.getConfig())==null?void 0:e.models)==null?void 0:w.OrderDataModel)==null?void 0:S.transformer)==null?void 0:$.call(S,n))},Fn=(n,i,u)=>{var c,_,l,p,y,g,R;if((p=(l=(_=(c=i==null?void 0:i.data)==null?void 0:c.customer)==null?void 0:_.orders)==null?void 0:l.items)!=null&&p.length&&n==="orderData"){const t=(R=(g=(y=i==null?void 0:i.data)==null?void 0:y.customer)==null?void 0:g.orders)==null?void 0:R.items[0];return L(t,u)}return null},kn=n=>{var l,p,y,g,R;if(!((l=n==null?void 0:n.items)!=null&&l.length))return null;const i=n==null?void 0:n.items,u=n==null?void 0:n.page_info,_={ordersReturn:[...i].sort((t,a)=>+a.number-+t.number).map(t=>{var x,M;const{order:a,status:f,number:b,created_at:T}=t,F=((M=(x=t==null?void 0:t.shipping)==null?void 0:x.tracking)==null?void 0:M.map(s=>{const{status:N,carrier:v,tracking_number:h}=s;return{status:N,carrier:v,trackingNumber:h}}))??[],k=t.items.map(s=>{var e;const N=s==null?void 0:s.quantity,v=s==null?void 0:s.status,h=s==null?void 0:s.request_quantity,q=s==null?void 0:s.uid,O=s==null?void 0:s.order_item,G=((e=B([O]))==null?void 0:e.reduce((w,S)=>S,{}))??{};return{uid:q,quantity:N,status:v,requestQuantity:h,...G}});return{createdReturnAt:T,returnStatus:f,token:a==null?void 0:a.token,orderNumber:a==null?void 0:a.number,returnNumber:b,items:k,tracking:F}}),...u?{pageInfo:{pageSize:u.page_size,totalPages:u.total_pages,currentPage:u.current_page}}:{}};return m(_,(R=(g=(y=(p=U==null?void 0:U.getConfig())==null?void 0:p.models)==null?void 0:y.CustomerOrdersReturnModel)==null?void 0:g.transformer)==null?void 0:R.call(g,{...i,...u}))},Pn=(n,i)=>{var c,_;if(!((c=n==null?void 0:n.data)!=null&&c.guestOrder))return null;const u=(_=n==null?void 0:n.data)==null?void 0:_.guestOrder;return L(u,i)},wn=(n,i)=>{var c,_;if(!((c=n==null?void 0:n.data)!=null&&c.guestOrderByToken))return null;const u=(_=n==null?void 0:n.data)==null?void 0:_.guestOrderByToken;return L(u,i)},Un=`
  query ORDER_BY_NUMBER($orderNumber: String!, $pageSize: Int) {
    customer {
      orders(filter: { number: { eq: $orderNumber } }) {
        items {
          gift_receipt_included
          printed_card_included
          gift_wrapping {
            uid
            design
            image {
              url
            }
            price {
              value
              currency
            }
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
          gift_message {
            from
            to
            message
          }
          applied_gift_cards {
            code
            applied_balance {
              value
              currency
            }
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
  ${cn}
  ${_n}
  ${ln}
  ${an}
`,$n=async({orderId:n,returnRef:i,queryType:u,returnsPageSize:c=50})=>await sn(Un,{method:"GET",cache:"force-cache",variables:{orderNumber:n,pageSize:c}}).then(_=>Fn(u??"orderData",_,i)).catch(o),Cn=`
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
      gift_message {
        from
        to
        message
      }
      applied_gift_cards {
        code
        applied_balance {
          value
          currency
        }
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
  ${cn}
  ${_n}
  ${ln}
  ${an}
`,Bn=async(n,i)=>await sn(Cn,{method:"GET",cache:"no-cache",variables:{token:n}}).then(u=>{var c;return(c=u.errors)!=null&&c.length&&u.errors[0].message==="Please login to view the order."?tn(u.errors):wn(u,i)}).catch(o),Ln="orderData",zn=async n=>{var p;const i=typeof(n==null?void 0:n.orderRef)=="string"?n==null?void 0:n.orderRef:"",u=typeof(n==null?void 0:n.returnRef)=="string"?n==null?void 0:n.returnRef:"",c=i&&typeof(n==null?void 0:n.orderRef)=="string"&&((p=n==null?void 0:n.orderRef)==null?void 0:p.length)>20,_=(n==null?void 0:n.orderData)??null;if(_){C.emit("order/data",{..._,returnNumber:u});return}if(!i)return;const l=c?await Bn(i,u):await $n({orderId:i,returnRef:u,queryType:Ln});l?C.emit("order/data",{...l,returnNumber:u}):C.emit("order/error",{source:"order",type:"network",error:"The data was not received."})},yn=new Rn({init:async n=>{const i={};yn.config.setConfig({...i,...n}),zn(n??{}).catch(console.error)},listeners:()=>[]}),U=yn.config;export{L as a,Pn as b,Bn as c,U as d,$n as g,yn as i,kn as t};
