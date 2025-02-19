/*! Copyright 2025 Adobe
All Rights Reserved. */
import{merge as nn,Initializer as vn}from"@dropins/tools/lib.js";import{events as Z}from"@dropins/tools/event-bus.js";import{h as un}from"./network-error.js";import{PRODUCT_DETAILS_FRAGMENT as cn,PRICE_DETAILS_FRAGMENT as _n,GIFT_CARD_DETAILS_FRAGMENT as ln,ORDER_ITEM_DETAILS_FRAGMENT as sn,BUNDLE_ORDER_ITEM_DETAILS_FRAGMENT as pn,ORDER_SUMMARY_FRAGMENT as gn,ADDRESS_FRAGMENT as yn,RETURNS_FRAGMENT as an,ORDER_ITEM_FRAGMENT as fn}from"../fragments.js";import{f as Rn,h as tn}from"./fetch-graphql.js";const hn=n=>n||0,Sn=n=>{var i,u,c,_,l,g,a,y,f;return{__typename:(n==null?void 0:n.__typename)||"",uid:(n==null?void 0:n.uid)||"",onlyXLeftInStock:(n==null?void 0:n.only_x_left_in_stock)??0,stockStatus:(n==null?void 0:n.stock_status)??"",priceRange:{maximumPrice:{regularPrice:{currency:((c=(u=(i=n==null?void 0:n.price_range)==null?void 0:i.maximum_price)==null?void 0:u.regular_price)==null?void 0:c.currency)??"",value:((g=(l=(_=n==null?void 0:n.price_range)==null?void 0:_.maximum_price)==null?void 0:l.regular_price)==null?void 0:g.value)??0}}},canonicalUrl:(n==null?void 0:n.canonical_url)??"",urlKey:(n==null?void 0:n.url_key)||"",id:(n==null?void 0:n.uid)??"",name:(n==null?void 0:n.name)||"",sku:(n==null?void 0:n.sku)||"",image:((a=n==null?void 0:n.image)==null?void 0:a.url)||"",productType:(n==null?void 0:n.__typename)||"",thumbnail:{label:((y=n==null?void 0:n.thumbnail)==null?void 0:y.label)||"",url:((f=n==null?void 0:n.thumbnail)==null?void 0:f.url)||""}}},An=n=>{if(!n||!("selected_options"in n))return;const i={};for(const u of n.selected_options)i[u.label]=u.value;return i},Nn=n=>{const i=n==null?void 0:n.map(c=>({uid:c.uid,label:c.label,values:c.values.map(_=>_.product_name).join(", ")})),u={};return i==null||i.forEach(c=>{u[c.label]=c.values}),Object.keys(u).length>0?u:null},xn=n=>(n==null?void 0:n.length)>0?{count:n.length,result:n.map(i=>i.title).join(", ")}:null,Mn=n=>({quantityCanceled:(n==null?void 0:n.quantity_canceled)??0,quantityInvoiced:(n==null?void 0:n.quantity_invoiced)??0,quantityOrdered:(n==null?void 0:n.quantity_ordered)??0,quantityRefunded:(n==null?void 0:n.quantity_refunded)??0,quantityReturned:(n==null?void 0:n.quantity_returned)??0,quantityShipped:(n==null?void 0:n.quantity_shipped)??0,quantityReturnRequested:(n==null?void 0:n.quantity_return_requested)??0}),en=n=>({firstName:(n==null?void 0:n.firstname)??"",lastName:(n==null?void 0:n.lastname)??"",middleName:(n==null?void 0:n.middlename)??""}),r=n=>{const{firstName:i,lastName:u,middleName:c}=en(n);return{firstName:i,lastName:u,middleName:c,city:(n==null?void 0:n.city)??"",company:(n==null?void 0:n.company)??"",country:(n==null?void 0:n.country)??"",countryCode:(n==null?void 0:n.country_code)??"",fax:(n==null?void 0:n.fax)??"",postCode:(n==null?void 0:n.postcode)??"",prefix:(n==null?void 0:n.prefix)??"",region:(n==null?void 0:n.region)??"",regionId:(n==null?void 0:n.region_id)??"",street:(n==null?void 0:n.street)??[],suffix:(n==null?void 0:n.suffix)??"",telephone:(n==null?void 0:n.telephone)??"",vatId:(n==null?void 0:n.vat_id)??"",customAttributes:(n==null?void 0:n.custom_attributes)??[]}},qn=n=>{const i={value:0,currency:"USD"};return{grandTotal:(n==null?void 0:n.grand_total)??i,totalGiftCard:(n==null?void 0:n.total_giftcard)??i,subtotalExclTax:(n==null?void 0:n.subtotal_excl_tax)??i,subtotalInclTax:(n==null?void 0:n.subtotal_incl_tax)??i,taxes:(n==null?void 0:n.taxes)??[],totalTax:(n==null?void 0:n.total_tax)??i,totalShipping:(n==null?void 0:n.total_shipping)??i,discounts:(n==null?void 0:n.discounts)??[]}},d=n=>{const i={value:0,currency:"USD"},u=(n==null?void 0:n.prices)??{};return{price:(u==null?void 0:u.price)??i,priceIncludingTax:(u==null?void 0:u.price_including_tax)??i,originalPrice:(u==null?void 0:u.original_price)??i,originalPriceIncludingTax:(u==null?void 0:u.original_price_including_tax)??i,discounts:(u==null?void 0:u.discounts)??[]}},wn=(n,i,u)=>{const c=n==null?void 0:n.price,_=n==null?void 0:n.priceIncludingTax,l=n==null?void 0:n.originalPrice,g=u?l==null?void 0:l.value:_==null?void 0:_.value,a={originalPrice:l,baseOriginalPrice:{value:g,currency:l==null?void 0:l.currency},baseDiscountedPrice:{value:_==null?void 0:_.value,currency:_==null?void 0:_.currency},baseExcludingTax:{value:c==null?void 0:c.value,currency:c==null?void 0:c.currency}},y={originalPrice:l,baseOriginalPrice:{value:l==null?void 0:l.value,currency:_==null?void 0:_.currency},baseDiscountedPrice:{value:i==null?void 0:i.value,currency:c==null?void 0:c.currency},baseExcludingTax:{value:c==null?void 0:c.value,currency:c==null?void 0:c.currency}},f={singleItemPrice:{value:u?l.value:_.value,currency:_.currency},baseOriginalPrice:{value:g,currency:_.currency},baseDiscountedPrice:{value:_.value,currency:_.currency}};return{includeAndExcludeTax:a,excludeTax:y,includeTax:f}},On=n=>{var i,u,c,_,l;return{senderName:((i=n.gift_card)==null?void 0:i.sender_name)||"",senderEmail:((u=n.gift_card)==null?void 0:u.sender_email)||"",recipientEmail:((c=n.gift_card)==null?void 0:c.recipient_email)||"",recipientName:((_=n.gift_card)==null?void 0:_.recipient_name)||"",message:((l=n.gift_card)==null?void 0:l.message)||""}},Gn=n=>{var i,u,c,_;return{label:((u=(i=n==null?void 0:n.product)==null?void 0:i.thumbnail)==null?void 0:u.label)||"",url:((_=(c=n==null?void 0:n.product)==null?void 0:c.thumbnail)==null?void 0:_.url)||""}};function Fn(n){return{currency:(n==null?void 0:n.currency)??"USD",value:(n==null?void 0:n.value)??0}}function En(n){var i,u,c;return{senderName:((i=n==null?void 0:n.gift_message)==null?void 0:i.from)??"",recipientName:((u=n==null?void 0:n.gift_message)==null?void 0:u.to)??"",message:((c=n==null?void 0:n.gift_message)==null?void 0:c.message)??""}}const bn=n=>{var E,b,T,q,w,N,x,p,t,h,S,O,G,M,A,F,e,$,C,B,L,z,W,Y,Q,K,j,P,V,X,H;const{quantityCanceled:i,quantityInvoiced:u,quantityOrdered:c,quantityRefunded:_,quantityReturned:l,quantityShipped:g,quantityReturnRequested:a}=Mn(n),y=d(n),f=((E=n==null?void 0:n.prices)==null?void 0:E.original_price.value)*(n==null?void 0:n.quantity_ordered)>((b=n==null?void 0:n.prices)==null?void 0:b.price.value)*(n==null?void 0:n.quantity_ordered),R=hn(n==null?void 0:n.quantity_ordered),s={value:((T=n==null?void 0:n.product_sale_price)==null?void 0:T.value)||0,currency:(q=n==null?void 0:n.product_sale_price)==null?void 0:q.currency};return{giftMessage:En(n),giftWrappingPrice:Fn((w=n==null?void 0:n.product)==null?void 0:w.gift_wrapping_price),productGiftWrapping:[{design:((N=n==null?void 0:n.gift_wrapping)==null?void 0:N.design)??"",uid:(x=n==null?void 0:n.gift_wrapping)==null?void 0:x.uid,selected:((p=n.gift_wrapping)==null?void 0:p.uid)===((t=n==null?void 0:n.gift_wrapping)==null?void 0:t.uid),image:{url:((S=(h=n==null?void 0:n.gift_wrapping)==null?void 0:h.image)==null?void 0:S.url)??"",label:((G=(O=n==null?void 0:n.gift_wrapping)==null?void 0:O.image)==null?void 0:G.label)??""},price:{currency:((A=(M=n==null?void 0:n.gift_wrapping)==null?void 0:M.price)==null?void 0:A.currency)??"USD",value:((e=(F=n==null?void 0:n.gift_wrapping)==null?void 0:F.price)==null?void 0:e.value)??0}}],selectedOptions:(n==null?void 0:n.selected_options)??[],productSalePrice:n==null?void 0:n.product_sale_price,status:(n==null?void 0:n.status)??"",type:n==null?void 0:n.__typename,eligibleForReturn:(n==null?void 0:n.eligible_for_return)??!1,productSku:(n==null?void 0:n.product_sku)??"",productName:(n==null?void 0:n.product_name)??"",productUrlKey:(n==null?void 0:n.product_url_key)??"",quantityCanceled:i,quantityInvoiced:u,quantityOrdered:c,quantityRefunded:_,quantityReturned:l,quantityShipped:g,quantityReturnRequested:a,id:n==null?void 0:n.id,discounted:f,total:{value:(($=n==null?void 0:n.product_sale_price)==null?void 0:$.value)*(n==null?void 0:n.quantity_ordered)||0,currency:((C=n==null?void 0:n.product_sale_price)==null?void 0:C.currency)||""},totalInclTax:{value:((B=n==null?void 0:n.product_sale_price)==null?void 0:B.value)*(n==null?void 0:n.quantity_ordered)||0,currency:(L=n==null?void 0:n.product_sale_price)==null?void 0:L.currency},price:s,prices:d(n),itemPrices:y,taxCalculations:wn(y,s,f),priceInclTax:{value:((z=n==null?void 0:n.product_sale_price)==null?void 0:z.value)??0,currency:(W=n==null?void 0:n.product_sale_price)==null?void 0:W.currency},totalQuantity:R,regularPrice:{value:(j=(K=(Q=(Y=n==null?void 0:n.product)==null?void 0:Y.price_range)==null?void 0:Q.maximum_price)==null?void 0:K.regular_price)==null?void 0:j.value,currency:(H=(X=(V=(P=n==null?void 0:n.product)==null?void 0:P.price_range)==null?void 0:V.maximum_price)==null?void 0:X.regular_price)==null?void 0:H.currency},product:Sn(n==null?void 0:n.product),thumbnail:Gn(n),giftCard:(n==null?void 0:n.__typename)==="GiftCardOrderItem"?On(n):void 0,configurableOptions:An(n),bundleOptions:n.__typename==="BundleOrderItem"?Nn(n.bundle_options):null,downloadableLinks:n.__typename==="DownloadableOrderItem"?xn(n==null?void 0:n.downloadable_links):null}},m=n=>n==null?void 0:n.filter(i=>i.__typename).map(i=>bn(i)),kn=n=>{var i,u,c,_,l;return{token:(n==null?void 0:n.token)??"",email:(n==null?void 0:n.email)??"",status:(n==null?void 0:n.status)??"",number:(n==null?void 0:n.number)??"",id:(n==null?void 0:n.id)??"",carrier:n.carrier??"",coupons:(n==null?void 0:n.applied_coupons)??[],orderDate:(n==null?void 0:n.order_date)??"",isVirtual:(n==null?void 0:n.is_virtual)??!1,availableActions:(n==null?void 0:n.available_actions)??[],orderStatusChangeDate:(n==null?void 0:n.order_status_change_date)??"",shippingMethod:(n==null?void 0:n.shipping_method)??"",giftWrappingOrder:{price:{value:((u=(i=n==null?void 0:n.gift_wrapping)==null?void 0:i.price)==null?void 0:u.value)??0,currency:((_=(c=n==null?void 0:n.gift_wrapping)==null?void 0:c.price)==null?void 0:_.currency)??"USD"},uid:((l=n==null?void 0:n.gift_wrapping)==null?void 0:l.uid)??""}}},Un=n=>{var u,c,_,l,g,a,y,f,R,s,E,b,T;const i=(u=n==null?void 0:n.total)==null?void 0:u.gift_options;return{giftWrappingForItems:{value:((c=i==null?void 0:i.gift_wrapping_for_items)==null?void 0:c.value)??0,currency:((_=i==null?void 0:i.gift_wrapping_for_items)==null?void 0:_.currency)??"USD"},giftWrappingForItemsInclTax:{value:((l=i==null?void 0:i.gift_wrapping_for_items_incl_tax)==null?void 0:l.value)??0,currency:((g=i==null?void 0:i.gift_wrapping_for_items_incl_tax)==null?void 0:g.currency)??"USD"},giftWrappingForOrder:{value:((a=i==null?void 0:i.gift_wrapping_for_order)==null?void 0:a.value)??0,currency:((y=i==null?void 0:i.gift_wrapping_for_order)==null?void 0:y.currency)??"USD"},giftWrappingForOrderInclTax:{value:((f=i==null?void 0:i.gift_wrapping_for_order_incl_tax)==null?void 0:f.value)??0,currency:((R=i==null?void 0:i.gift_wrapping_for_order_incl_tax)==null?void 0:R.currency)??"USD"},printedCard:{value:((s=i==null?void 0:i.printed_card)==null?void 0:s.value)??0,currency:((E=i==null?void 0:i.printed_card)==null?void 0:E.currency)??"USD"},printedCardInclTax:{value:((b=i==null?void 0:i.printed_card_incl_tax)==null?void 0:b.value)??0,currency:((T=i==null?void 0:i.printed_card_incl_tax)==null?void 0:T.currency)??"USD"}}},$n=(n=[])=>n?n==null?void 0:n.map(i=>{var u,c;return{code:(i==null?void 0:i.code)??"",appliedBalance:{value:((u=i.applied_balance)==null?void 0:u.value)??0,currency:((c=i.applied_balance)==null?void 0:c.currency)??"USD"}}}):[],D=(n,i)=>{var M,A,F,e,$,C,B,L,z,W,Y,Q,K,j,P,V,X,H,o,J,I;console.log("orderData :>> ",n);const u=kn(n),c=r(n==null?void 0:n.billing_address),_=r(n==null?void 0:n.shipping_address),l=(M=n.shipments)==null?void 0:M.map(k=>({...k,items:k.items.map(v=>({id:v.id,productName:v.product_name,productSku:v.product_sku,quantityShipped:v.quantity_shipped,orderItem:bn(v.order_item)}))})),g=$n(n==null?void 0:n.applied_gift_cards),a=m(n.items),y=((A=Bn(n==null?void 0:n.returns))==null?void 0:A.ordersReturn)??[],f=i?y.filter(k=>k.returnNumber===i):y,R=m(n.items_eligible_for_return),s=qn(n==null?void 0:n.total),E=(F=n==null?void 0:n.payment_methods)==null?void 0:F[0],b=n==null?void 0:n.shipping_method,T=a==null?void 0:a.reduce((k,v)=>k+(v==null?void 0:v.totalQuantity),0),q={amount:((e=s==null?void 0:s.totalShipping)==null?void 0:e.value)??0,currency:(($=s==null?void 0:s.totalShipping)==null?void 0:$.currency)||"",code:(u==null?void 0:u.shippingMethod)??""},w=[{code:(E==null?void 0:E.type)??"",name:(E==null?void 0:E.name)??""}],N=s==null?void 0:s.subtotalExclTax,x=s==null?void 0:s.subtotalInclTax,p=Un(n),t=En(n),h=(n==null?void 0:n.printed_card_included)??!1,S=(n==null?void 0:n.gift_receipt_included)??!1,O=[{design:((C=n==null?void 0:n.gift_wrapping)==null?void 0:C.design)??"",uid:(B=n==null?void 0:n.gift_wrapping)==null?void 0:B.uid,selected:((L=n.gift_wrapping)==null?void 0:L.uid)===((z=n==null?void 0:n.gift_wrapping)==null?void 0:z.uid),image:{url:((Y=(W=n==null?void 0:n.gift_wrapping)==null?void 0:W.image)==null?void 0:Y.url)??"",label:((K=(Q=n==null?void 0:n.gift_wrapping)==null?void 0:Q.image)==null?void 0:K.label)??""},price:{currency:((P=(j=n==null?void 0:n.gift_wrapping)==null?void 0:j.price)==null?void 0:P.currency)??"USD",value:((X=(V=n==null?void 0:n.gift_wrapping)==null?void 0:V.price)==null?void 0:X.value)??0}}],G={...u,...s,giftMessage:t,cartGiftWrapping:O,printedCardIncluded:h,giftReceiptIncluded:S,appliedGiftCards:g,totalGiftOptions:p,subtotalExclTax:N,subtotalInclTax:x,billingAddress:c,shippingAddress:_,shipments:l,items:a,returns:f,itemsEligibleForReturn:R,totalQuantity:T,shippingMethod:b,shipping:q,payments:w};return nn(G,(I=(J=(o=(H=U==null?void 0:U.getConfig())==null?void 0:H.models)==null?void 0:o.OrderDataModel)==null?void 0:J.transformer)==null?void 0:I.call(J,n))},Cn=(n,i,u)=>{var c,_,l,g,a,y,f;if((g=(l=(_=(c=i==null?void 0:i.data)==null?void 0:c.customer)==null?void 0:_.orders)==null?void 0:l.items)!=null&&g.length&&n==="orderData"){const R=(f=(y=(a=i==null?void 0:i.data)==null?void 0:a.customer)==null?void 0:y.orders)==null?void 0:f.items[0];return D(R,u)}return null},Bn=n=>{var l,g,a,y,f;if(!((l=n==null?void 0:n.items)!=null&&l.length))return null;const i=n==null?void 0:n.items,u=n==null?void 0:n.page_info,_={ordersReturn:[...i].sort((R,s)=>+s.number-+R.number).map(R=>{var N,x;const{order:s,status:E,number:b,created_at:T}=R,q=((x=(N=R==null?void 0:R.shipping)==null?void 0:N.tracking)==null?void 0:x.map(p=>{const{status:t,carrier:h,tracking_number:S}=p;return{status:t,carrier:h,trackingNumber:S}}))??[],w=R.items.map(p=>{var A;const t=p==null?void 0:p.quantity,h=p==null?void 0:p.status,S=p==null?void 0:p.request_quantity,O=p==null?void 0:p.uid,G=p==null?void 0:p.order_item,M=((A=m([G]))==null?void 0:A.reduce((F,e)=>e,{}))??{};return{uid:O,quantity:t,status:h,requestQuantity:S,...M}});return{createdReturnAt:T,returnStatus:E,token:s==null?void 0:s.token,orderNumber:s==null?void 0:s.number,returnNumber:b,items:w,tracking:q}}),...u?{pageInfo:{pageSize:u.page_size,totalPages:u.total_pages,currentPage:u.current_page}}:{}};return nn(_,(f=(y=(a=(g=U==null?void 0:U.getConfig())==null?void 0:g.models)==null?void 0:a.CustomerOrdersReturnModel)==null?void 0:y.transformer)==null?void 0:f.call(y,{...i,...u}))},Zn=(n,i)=>{var c,_;if(!((c=n==null?void 0:n.data)!=null&&c.guestOrder))return null;const u=(_=n==null?void 0:n.data)==null?void 0:_.guestOrder;return D(u,i)},Ln=(n,i)=>{var c,_;if(!((c=n==null?void 0:n.data)!=null&&c.guestOrderByToken))return null;const u=(_=n==null?void 0:n.data)==null?void 0:_.guestOrderByToken;return D(u,i)},zn=`
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
  ${cn}
  ${_n}
  ${ln}
  ${sn}
  ${pn}
  ${gn}
  ${yn}
  ${an}
  ${fn}
`,Wn=async({orderId:n,returnRef:i,queryType:u,returnsPageSize:c=50})=>await Rn(zn,{method:"GET",cache:"force-cache",variables:{orderNumber:n,pageSize:c}}).then(_=>Cn(u??"orderData",_,i)).catch(un),Yn=`
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
  ${cn}
  ${_n}
  ${ln}
  ${sn}
  ${pn}
  ${gn}
  ${yn}
  ${an}
  ${fn}
`,Qn=async(n,i)=>await Rn(Yn,{method:"GET",cache:"no-cache",variables:{token:n}}).then(u=>{var c;return(c=u.errors)!=null&&c.length&&u.errors[0].message==="Please login to view the order."?tn(u.errors):Ln(u,i)}).catch(un),Kn="orderData",jn=async n=>{var g;const i=typeof(n==null?void 0:n.orderRef)=="string"?n==null?void 0:n.orderRef:"",u=typeof(n==null?void 0:n.returnRef)=="string"?n==null?void 0:n.returnRef:"",c=i&&typeof(n==null?void 0:n.orderRef)=="string"&&((g=n==null?void 0:n.orderRef)==null?void 0:g.length)>20,_=(n==null?void 0:n.orderData)??null;if(_){Z.emit("order/data",{..._,returnNumber:u});return}if(!i)return;const l=c?await Qn(i,u):await Wn({orderId:i,returnRef:u,queryType:Kn});l?Z.emit("order/data",{...l,returnNumber:u}):Z.emit("order/error",{source:"order",type:"network",error:"The data was not received."})},Tn=new vn({init:async n=>{const i={};Tn.config.setConfig({...i,...n}),jn(n??{}).catch(console.error)},listeners:()=>[]}),U=Tn.config;export{D as a,Zn as b,Qn as c,U as d,Wn as g,Tn as i,Bn as t};
