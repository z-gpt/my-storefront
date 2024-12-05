/*! Copyright 2024 Adobe
All Rights Reserved. */
import{a as x,f as k,h as C}from"./network-error.js";import"@dropins/tools/recaptcha.js";import{events as y}from"@dropins/tools/event-bus.js";import{merge as U}from"@dropins/tools/lib.js";import{c as R}from"./initialize.js";import{CUSTOMER_INFORMATION_FRAGMENT as v}from"../fragments.js";import{p as E,E as h,a as D,C as w}from"./getStoreConfig.js";import{s as S}from"./setReCaptchaToken.js";const F=t=>{var f,e,i,a,r,o,u,s,T,g,N,c,d;const m={email:((e=(f=t==null?void 0:t.data)==null?void 0:f.customer)==null?void 0:e.email)??"",firstName:((a=(i=t==null?void 0:t.data)==null?void 0:i.customer)==null?void 0:a.firstname)??"",lastName:((o=(r=t==null?void 0:t.data)==null?void 0:r.customer)==null?void 0:o.lastname)??"",isSubscribed:((s=(u=t==null?void 0:t.data)==null?void 0:u.customer)==null?void 0:s.is_subscribed)??!1};return U(m,(d=(c=(N=(g=(T=R)==null?void 0:T.getConfig())==null?void 0:g.models)==null?void 0:N.CustomerModel)==null?void 0:c.transformer)==null?void 0:d.call(c,t.data))},K=`
  query GET_CUSTOMER_DATA {
    customer {
      ...CustomerInformation
    }
  }
  ${v}
`,H=async t=>{if(t){const{authHeaderConfig:m}=R.getConfig();x(m.header,m.tokenPrefix?`${m.tokenPrefix} ${t}`:t)}return await k(K,{method:"GET",cache:"force-cache"}).then(m=>F(m)).catch(C)},Q=`
  mutation GET_CUSTOMER_TOKEN($email: String!, $password: String!) {
    generateCustomerToken(email: $email, password: $password) {
      token
    }
  }
`,X=async({email:t,password:m,translations:f,onErrorCallback:e,handleSetInLineAlertProps:i})=>{var g,N,c,d,$,O,G;await S();const a=await k(Q,{method:"POST",variables:{email:t,password:m}}).catch(C);if(!((N=(g=a==null?void 0:a.data)==null?void 0:g.generateCustomerToken)!=null&&N.token)){const _=f.customerTokenErrorMessage,M=a!=null&&a.errors?a.errors[0].message:_;return e==null||e(M),i==null||i({type:"error",text:M}),E((c=h)==null?void 0:c.SIGN_IN,{}),{errorMessage:M,userName:""}}const r=($=(d=a==null?void 0:a.data)==null?void 0:d.generateCustomerToken)==null?void 0:$.token,o=await H(r),u=o==null?void 0:o.firstName,s=o==null?void 0:o.email;if(!u||!s){const _=f.customerTokenErrorMessage;return e==null||e(_),i==null||i({type:"error",text:_}),E((O=h)==null?void 0:O.SIGN_IN,{}),{errorMessage:_,userName:""}}const T=await D();return document.cookie=`${w.auth_dropin_firstname}=${u}; path=/; ${T}; `,document.cookie=`${w.auth_dropin_user_token}=${r}; path=/; ${T}; `,y.emit("authenticated",!!r),E((G=h)==null?void 0:G.SIGN_IN,{email:s}),{errorMessage:"",userName:u}};export{X as a,H as g};
