/*! Copyright 2024 Adobe
All Rights Reserved. */
import{h as n}from"./network-error.js";import{f as s,h as o}from"./fetch-graphql.js";import{t as E}from"./transform-attributes-form.js";import{a as R}from"./convertCase.js";const T=`
  query GET_ATTRIBUTES_LIST($entityType: AttributeEntityTypeEnum!) {
    attributesList(entityType: $entityType) {
      items {
        ... on CustomerAttributeMetadata {
          multiline_count
          sort_order
          validate_rules {
            name
            value
          }
        }
        ... on ReturnItemAttributeMetadata {
          sort_order
        }
        code
        label
        default_value
        frontend_input
        is_unique
        is_required
        options {
          is_default
          label
          value
        }
      }
      errors {
        type
        message
      }
    }
  }
`,y=async a=>await s(T,{method:"GET",cache:"force-cache",variables:{entityType:a}}).then(e=>{var t,r,u;return(t=e.errors)!=null&&t.length?o(e.errors):E((u=(r=e==null?void 0:e.data)==null?void 0:r.attributesList)==null?void 0:u.items)}).catch(n),c=`
  fragment OrderReturn on Return {
    __typename
    uid
    status
    number
    created_at
  }
`,_=`
mutation REQUEST_RETURN_ORDER($input: RequestReturnInput!) {
  requestReturn(input: $input) {
    return {
      ...OrderReturn
    }
  }
}
${c}`,f=async a=>{const e=R(a,"snakeCase",{});return await s(_,{method:"POST",variables:{input:e}}).then(t=>{var i;if((i=t.errors)!=null&&i.length)return o(t.errors);const{created_at:r,...u}=t.data.requestReturn.return;return{...u,createdAt:r}}).catch(n)},l=`
mutation REQUEST_RETURN_GUEST_ORDER($input: RequestGuestReturnInput!) {
  requestGuestReturn(input: $input) {
    return {
      ...OrderReturn
    }
  }
}
${c}`,U=async a=>{const e=R(a,"snakeCase",{});return console.log("input",e),await s(l,{method:"POST",variables:{input:e}}).then(t=>{var r,u;return console.log("response",t),console.log(" response.data.requestGuestReturn.return",(u=(r=t==null?void 0:t.data)==null?void 0:r.requestGuestReturn)==null?void 0:u.return),null}).catch(n)};export{U as a,y as g,f as r};
