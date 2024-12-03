/*! Copyright 2024 Adobe
All Rights Reserved. */
import{n as G,f as d,l,m as e,k as M}from"./removeCustomerAddress.js";const $=t=>{var r,m,u,c,i,_,h,C,f,o,E,n,g,T,S,w,O,P,b,A,R;const a=(u=(m=(r=t==null?void 0:t.data)==null?void 0:r.customer)==null?void 0:m.custom_attributes)==null?void 0:u.reduce((U,N)=>(U[G(N.code)]=N.value??"",U),{});return{email:((i=(c=t==null?void 0:t.data)==null?void 0:c.customer)==null?void 0:i.email)||"",firstName:((h=(_=t==null?void 0:t.data)==null?void 0:_.customer)==null?void 0:h.firstname)||"",lastName:((f=(C=t==null?void 0:t.data)==null?void 0:C.customer)==null?void 0:f.lastname)||"",middleName:((E=(o=t==null?void 0:t.data)==null?void 0:o.customer)==null?void 0:E.middlename)||"",gender:((g=(n=t==null?void 0:t.data)==null?void 0:n.customer)==null?void 0:g.gender)||"1",dateOfBirth:((S=(T=t==null?void 0:t.data)==null?void 0:T.customer)==null?void 0:S.date_of_birth)||"",prefix:((O=(w=t==null?void 0:t.data)==null?void 0:w.customer)==null?void 0:O.prefix)||"",suffix:((b=(P=t==null?void 0:t.data)==null?void 0:P.customer)==null?void 0:b.suffix)||"",createdAt:((R=(A=t==null?void 0:t.data)==null?void 0:A.customer)==null?void 0:R.created_at)||"",...a}},I=t=>{var a,r,m,u;return{minLength:+((r=(a=t==null?void 0:t.data)==null?void 0:a.storeConfig)==null?void 0:r.minimum_password_length)||3,requiredCharacterClasses:+((u=(m=t==null?void 0:t.data)==null?void 0:m.storeConfig)==null?void 0:u.required_character_classes_number)||0}},y=`
  fragment BasicCustomerInfo on Customer {
    date_of_birth
    email
    firstname
    gender
    lastname
    middlename
    prefix
    suffix
    created_at
  }
`,v=`
  query GET_CUSTOMER {
  customer {
    ...BasicCustomerInfo
      custom_attributes {
    ... on AttributeValue {
        code
        value
      }
      code
     }
    }
  }
${y}`,B=async()=>await d(v,{method:"GET",cache:"no-cache"}).then(t=>{var a;return(a=t.errors)!=null&&a.length?l(t.errors):$(t)}).catch(e),x=`
  mutation CHANGE_CUSTOMER_PASSWORD($currentPassword: String!, $newPassword: String!) {
    changeCustomerPassword(currentPassword: $currentPassword, newPassword: $newPassword) {
      email
    }
  }
`,L=async({currentPassword:t,newPassword:a})=>await d(x,{method:"POST",variables:{currentPassword:t,newPassword:a}}).then(r=>{var m,u,c;return(m=r.errors)!=null&&m.length?l(r.errors):((c=(u=r==null?void 0:r.data)==null?void 0:u.changeCustomerPassword)==null?void 0:c.email)||""}).catch(e),D=`
  query GET_STORE_CONFIG {
    storeConfig {
      autocomplete_on_storefront
      minimum_password_length
      required_character_classes_number
    }
  }
`,k=async()=>await d(D,{method:"GET",cache:"force-cache"}).then(t=>{var a;return(a=t.errors)!=null&&a.length?l(t.errors):I(t)}).catch(e),q=`
  mutation UPDATE_CUSTOMER_EMAIL($email: String! $password: String!) {
    updateCustomerEmail(email:$email password:$password) {
      customer {
       email
      }
    }
  }
`,H=async({email:t,password:a})=>await d(q,{method:"POST",variables:{email:t,password:a}}).then(r=>{var m,u,c,i;return(m=r.errors)!=null&&m.length?l(r.errors):((i=(c=(u=r==null?void 0:r.data)==null?void 0:u.updateCustomerEmail)==null?void 0:c.customer)==null?void 0:i.email)||""}).catch(e),F=`
  mutation UPDATE_CUSTOMER_V2($input: CustomerUpdateInput!) {
    updateCustomerV2(input:$input) {
      customer {
       email
      }
    }
  }
`,W=async t=>await d(F,{method:"POST",variables:{input:M(t,"snakeCase",{firstName:"firstname",lastName:"lastname",middleName:"middlename",custom_attributesV2:"custom_attributes"})}}).then(a=>{var r,m,u,c;return(r=a.errors)!=null&&r.length?l(a.errors):((c=(u=(m=a==null?void 0:a.data)==null?void 0:m.updateCustomerV2)==null?void 0:u.customer)==null?void 0:c.email)||""}).catch(e);export{k as a,H as b,W as c,B as g,L as u};
