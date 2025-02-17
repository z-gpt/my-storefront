/*! Copyright 2025 Adobe
All Rights Reserved. */
import{s as m}from"./state.js";import{C as i,t as p}from"./refreshCart.js";import{events as n}from"@dropins/tools/event-bus.js";import{f as T,h as _}from"./resetCart.js";import{a as I}from"./acdl.js";import{CART_FRAGMENT as u}from"../fragments.js";const C=`
  mutation UPDATE_PRODUCTS_FROM_CART_MUTATION(
      $cartId: String!, 
      $cartItems: [CartItemUpdateInput!]!,
      ${i}
    ) {
    updateCartItems(
      input: {
        cart_id: $cartId
        cart_items: $cartItems
      }
    ) {
      cart {
        ...CART_FRAGMENT
      }

    }
  }

  ${u}
`,E=async o=>{const s=m.cartId;if(!s)throw Error("Cart ID is not set");return T(C,{variables:{cartId:s,cartItems:o.map(({uid:e,quantity:t,giftOptions:a})=>({cart_item_uid:e,quantity:t,...a}))}}).then(({errors:e,data:t})=>{var c;const a=[...((c=t==null?void 0:t.addProductsToCart)==null?void 0:c.user_errors)??[],...e??[]];if(a.length>0)return _(a);const r=p(t.updateCartItems.cart);return n.emit("cart/updated",r),n.emit("cart/data",r),r&&I(r,o,m.locale??"en-US"),r})};export{E as u};
