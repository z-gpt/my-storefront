/*! Copyright 2025 Adobe
All Rights Reserved. */
import{s as c}from"./state.js";import{C as T,t as A}from"./refreshCart.js";import{events as e}from"@dropins/tools/event-bus.js";import{f as _,h as i}from"./resetCart.js";import{CART_FRAGMENT as u}from"../fragments.js";const m=`
mutation APPLY_COUPONS_TO_CART_MUTATION(
    $cartId: String!, 
    $couponCodes: [String!]!, 
    $type: ApplyCouponsStrategy!,
    ${T}
  ) {
   applyCouponsToCart(
    input: {
      cart_id: $cartId
      coupon_codes: $couponCodes 
      type: $type
    }
  ) {
    cart {
      ...CART_FRAGMENT
    }

  }
}
${u}
`;var P=(r=>(r.APPEND="APPEND",r.REPLACE="REPLACE",r))(P||{});const l=async(r,n)=>{const a=c.cartId;if(!a)throw Error("Cart ID is not set");return _(m,{variables:{cartId:a,couponCodes:r,type:n}}).then(({errors:C,data:t})=>{var p;const s=[...((p=t==null?void 0:t.applyCouponsToCart)==null?void 0:p.user_errors)??[],...C??[]];if(s.length>0)return i(s);const o=A(t.applyCouponsToCart.cart);return e.emit("cart/updated",o),e.emit("cart/data",o),o})};export{P as A,l as a};
