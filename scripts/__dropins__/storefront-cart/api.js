/*! Copyright 2025 Adobe
All Rights Reserved. */
import{s as o,g as l}from"./chunks/state.js";import{C as T,t as f,c as g}from"./chunks/refreshCart.js";import{g as $,b as Q,d as H,e as k,i as z,a as V,r as L}from"./chunks/refreshCart.js";import{events as C}from"@dropins/tools/event-bus.js";import{f as m,h}from"./chunks/resetCart.js";import{g as q,r as B,c as J,s as K,a as W,b as X}from"./chunks/resetCart.js";import{CART_FRAGMENT as A}from"./fragments.js";import{b as I,a as _,c as E}from"./chunks/acdl.js";import{u as Z}from"./chunks/updateProductsFromCart.js";import{g as rt,b as at,a as et}from"./chunks/getEstimateShipping.js";import{g as ot}from"./chunks/getEstimatedTotals.js";import{A as it,a as ct}from"./chunks/applyCouponsToCart.js";import{s as Ct}from"./chunks/setGiftOptionsOnCart.js";import"@dropins/tools/lib.js";import"@dropins/tools/fetch-graphql.js";const G=`
  mutation ADD_PRODUCTS_TO_CART_MUTATION(
      $cartId: String!, 
      $cartItems: [CartItemInput!]!,
      ${T}
    ) {
    addProductsToCart(
      cartId: $cartId
      cartItems: $cartItems
    ) {
      cart {
        ...CART_FRAGMENT
      }
      user_errors {
        code
        message
      }
    }
  }
    
  ${A}
`,y=async a=>{let r=!1;const n=o.cartId||await R().then(s=>(r=!0,s));return m(G,{variables:{cartId:n,cartItems:a.map(({sku:s,parentSku:e,quantity:i,optionsUIDs:t,enteredOptions:c})=>({sku:s,parent_sku:e,quantity:i,selected_options:t,entered_options:c}))}}).then(({errors:s,data:e})=>{var c;const i=[...((c=e==null?void 0:e.addProductsToCart)==null?void 0:c.user_errors)??[],...s??[]];if(i.length>0)return h(i);const t=f(e.addProductsToCart.cart);if(C.emit("cart/updated",t),C.emit("cart/data",t),t){const p=t.items.filter(d=>a.some(({sku:u})=>u===d.topLevelSku));r?I(t,p,o.locale??"en-US"):_(t,p,o.locale??"en-US")}return t})},S=`
    mutation CREATE_GUEST_CART_MUTATION {
        createGuestCart {
          cart {
            id
          }
        }
    }
`,R=async()=>{const{disableGuestCart:a}=g.getConfig();if(a)throw new Error("Guest cart is disabled");return await m(S).then(({data:r})=>{const n=r.createGuestCart.cart.id;return o.cartId=n,n})},F=()=>{const a=o.locale??"en-US",r=l();r&&E(r,a)};export{it as ApplyCouponsStrategy,y as addProductsToCart,ct as applyCouponsToCart,g as config,R as createGuestCart,m as fetchGraphQl,$ as getCartData,l as getCartDataFromCache,q as getConfig,rt as getCountries,Q as getCustomerCartPayload,at as getEstimateShipping,ot as getEstimatedTotals,H as getGuestCartPayload,et as getRegions,k as getStoreConfig,z as initialize,V as initializeCart,F as publishShoppingCartViewEvent,L as refreshCart,B as removeFetchGraphQlHeader,J as resetCart,K as setEndpoint,W as setFetchGraphQlHeader,X as setFetchGraphQlHeaders,Ct as setGiftOptionsOnCart,Z as updateProductsFromCart};
