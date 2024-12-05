/*! Copyright 2024 Adobe
All Rights Reserved. */
import{n as N,f as c,k as l,l as C,m as $}from"./removeCustomerAddress.js";const v=t=>{var a,u,r,i,d,f,h,_,e,E,o,S,T,w,P,g,O,A,U,b,n;const m=(r=(u=(a=t==null?void 0:t.data)==null?void 0:a.customer)==null?void 0:u.custom_attributes)==null?void 0:r.reduce((M,R)=>(M[N(R.code)]=R.value??"",M),{});return{email:((d=(i=t==null?void 0:t.data)==null?void 0:i.customer)==null?void 0:d.email)||"",firstName:((h=(f=t==null?void 0:t.data)==null?void 0:f.customer)==null?void 0:h.firstname)||"",lastName:((e=(_=t==null?void 0:t.data)==null?void 0:_.customer)==null?void 0:e.lastname)||"",middleName:((o=(E=t==null?void 0:t.data)==null?void 0:E.customer)==null?void 0:o.middlename)||"",gender:((T=(S=t==null?void 0:t.data)==null?void 0:S.customer)==null?void 0:T.gender)||"1",dateOfBirth:((P=(w=t==null?void 0:t.data)==null?void 0:w.customer)==null?void 0:P.date_of_birth)||"",prefix:((O=(g=t==null?void 0:t.data)==null?void 0:g.customer)==null?void 0:O.prefix)||"",suffix:((U=(A=t==null?void 0:t.data)==null?void 0:A.customer)==null?void 0:U.suffix)||"",createdAt:((n=(b=t==null?void 0:t.data)==null?void 0:b.customer)==null?void 0:n.created_at)||"",...m}},x=`
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
`,G=`
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
${x}`,B=async()=>await c(G,{method:"GET",cache:"no-cache"}).then(t=>{var m;return(m=t.errors)!=null&&m.length?l(t.errors):v(t)}).catch(C),I=`
  mutation CHANGE_CUSTOMER_PASSWORD($currentPassword: String!, $newPassword: String!) {
    changeCustomerPassword(currentPassword: $currentPassword, newPassword: $newPassword) {
      email
    }
  }
`,k=async({currentPassword:t,newPassword:m})=>await c(I,{method:"POST",variables:{currentPassword:t,newPassword:m}}).then(a=>{var u,r,i;return(u=a.errors)!=null&&u.length?l(a.errors):((i=(r=a==null?void 0:a.data)==null?void 0:r.changeCustomerPassword)==null?void 0:i.email)||""}).catch(C),y=`
  mutation UPDATE_CUSTOMER_EMAIL($email: String! $password: String!) {
    updateCustomerEmail(email:$email password:$password) {
      customer {
       email
      }
    }
  }
`,F=async({email:t,password:m})=>await c(y,{method:"POST",variables:{email:t,password:m}}).then(a=>{var u,r,i,d;return(u=a.errors)!=null&&u.length?l(a.errors):((d=(i=(r=a==null?void 0:a.data)==null?void 0:r.updateCustomerEmail)==null?void 0:i.customer)==null?void 0:d.email)||""}).catch(C),D=`
  mutation UPDATE_CUSTOMER_V2($input: CustomerUpdateInput!) {
    updateCustomerV2(input:$input) {
      customer {
       email
      }
    }
  }
`,L=async t=>await c(D,{method:"POST",variables:{input:$(t,"snakeCase",{firstName:"firstname",lastName:"lastname",middleName:"middlename",custom_attributesV2:"custom_attributes"})}}).then(m=>{var a,u,r,i;return(a=m.errors)!=null&&a.length?l(m.errors):((i=(r=(u=m==null?void 0:m.data)==null?void 0:u.updateCustomerV2)==null?void 0:r.customer)==null?void 0:i.email)||""}).catch(C);export{F as a,L as b,B as g,k as u};
