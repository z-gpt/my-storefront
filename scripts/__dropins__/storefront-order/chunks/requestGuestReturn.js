/*! Copyright 2024 Adobe
All Rights Reserved. */
import{h as s}from"./network-error.js";import{f as i,h as o}from"./fetch-graphql.js";import{t as E}from"./transform-attributes-form.js";import{a as R}from"./convertCase.js";const _=`
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
`,f=async u=>await i(_,{method:"GET",cache:"force-cache",variables:{entityType:u}}).then(e=>{var t,r,a;return(t=e.errors)!=null&&t.length?o(e.errors):E((a=(r=e==null?void 0:e.data)==null?void 0:r.attributesList)==null?void 0:a.items)}).catch(s),c=`
  fragment OrderReturn on Return {
    __typename
    uid
    status
    number
    created_at
  }
`,T=`
mutation REQUEST_RETURN_ORDER($input: RequestReturnInput!) {
  requestReturn(input: $input) {
    return {
      ...OrderReturn
    }
  }
}
${c}`,y=async u=>{const e=R(u,"snakeCase",{});return await i(T,{method:"POST",variables:{input:e}}).then(t=>{var n;if((n=t.errors)!=null&&n.length)return o(t.errors);const{created_at:r,...a}=t.data.requestReturn.return;return{...a,createdAt:r}}).catch(s)},d=`
mutation REQUEST_RETURN_GUEST_ORDER($input: RequestGuestReturnInput!) {
  requestGuestReturn(input: $input) {
    return {
      ...OrderReturn
    }
  }
}
${c}`,U=async u=>{const e=R(u,"snakeCase",{});return await i(d,{method:"POST",variables:{input:e}}).then(t=>{var n;if((n=t.errors)!=null&&n.length)return o(t.errors);const{created_at:r,...a}=t.data.requestGuestReturn.return;return{...a,createdAt:r}}).catch(s)};export{U as a,f as g,y as r};
