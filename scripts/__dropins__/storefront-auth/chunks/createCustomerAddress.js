/*! Copyright 2024 Adobe
All Rights Reserved. */
import{CUSTOMER_INFORMATION_FRAGMENT as g}from"../fragments.js";import{f as m,h as u}from"./network-error.js";import{s as I}from"./setReCaptchaToken.js";import"@dropins/tools/event-bus.js";import"@dropins/tools/recaptcha.js";import{merge as U}from"@dropins/tools/lib.js";import{c as F}from"./initialize.js";import{t as N}from"./transform-attributes-form.js";import{h as $}from"./getStoreConfig.js";const v=`
  mutation CREATE_CUSTOMER($input: CustomerInput!) {
    createCustomer(input: $input) {
      customer {
        ...CustomerInformation
      }
    }
  }
  ${g}
`,y=`
  mutation CREATE_CUSTOMER_V2($input: CustomerCreateInput!) {
    createCustomerV2(input: $input) {
      customer {
        ...CustomerInformation
      }
    }
  }
  ${g}
`,V=(r,e)=>{var i,a,c,n,C,l,f,E,_,T,R,h,A,b,S,d,p,M,s,O;let o;if(e){const{data:t}=r;o={firstName:((a=(i=t==null?void 0:t.createCustomerV2)==null?void 0:i.customer)==null?void 0:a.firstname)??"",lastName:((n=(c=t==null?void 0:t.createCustomerV2)==null?void 0:c.customer)==null?void 0:n.lastname)??"",email:((l=(C=t==null?void 0:t.createCustomerV2)==null?void 0:C.customer)==null?void 0:l.email)??"",isSubscribed:((E=(f=t==null?void 0:t.createCustomerV2)==null?void 0:f.customer)==null?void 0:E.is_subscribed)??!1,customAttributes:((_=t==null?void 0:t.createCustomerV2)==null?void 0:_.custom_attributes)??[],errors:(r==null?void 0:r.errors)??[]}}else{const{data:t}=r;o={firstName:((R=(T=t==null?void 0:t.createCustomer)==null?void 0:T.customer)==null?void 0:R.firstname)??"",lastName:((A=(h=t==null?void 0:t.createCustomer)==null?void 0:h.customer)==null?void 0:A.lastname)??"",email:((S=(b=t==null?void 0:t.createCustomer)==null?void 0:b.customer)==null?void 0:S.email)??"",isSubscribed:((p=(d=t==null?void 0:t.createCustomer)==null?void 0:d.customer)==null?void 0:p.is_subscribed)??!1,errors:(r==null?void 0:r.errors)??[]}}return U(o,(O=(s=(M=F.getConfig().models)==null?void 0:M.CustomerModel)==null?void 0:s.transformer)==null?void 0:O.call(s,r))},H=async(r,e)=>{await I();const o=await m(e?y:v,{method:"POST",variables:{input:{...r}}}).catch(u);return V(o,e)},w=`
  query GET_ATTRIBUTES_FORM($formCode: String!) {
    attributesForm(formCode: $formCode) {
      items {
        code
        default_value
        entity_type
        frontend_class
        frontend_input
        is_required
        is_unique
        label
        options {
          is_default
          label
          value
        }
        ... on CustomerAttributeMetadata {
          multiline_count
          sort_order
          validate_rules {
            name
            value
          }
        }
      }
      errors {
        type
        message
      }
    }
  }
`,J=async r=>await m(w,{method:"GET",cache:"force-cache",variables:{formCode:r}}).then(e=>{var o;return(o=e.errors)!=null&&o.length?$(e.errors):N(e)}).catch(u),G=`
  mutation CREATE_CUSTOMER_ADDRESS($input: CustomerAddressInput!) {
    createCustomerAddress(input: $input) {
      firstname
    }
  }
`,K=async r=>await m(G,{method:"POST",variables:{input:r}}).then(e=>{var o;return(o=e.errors)!=null&&o.length?$(e.errors):e.data.createCustomerAddress.firstname||""}).catch(u);export{K as a,H as c,J as g};
