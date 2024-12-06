/*! Copyright 2024 Adobe
All Rights Reserved. */
import{h as u}from"./network-error.js";import{f as s,h as i}from"./fetch-graphql.js";import{t as o}from"./transform-attributes-form.js";import{a as R}from"./convertCase.js";const c=`
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
`,h=async n=>await s(c,{method:"GET",cache:"force-cache",variables:{entityType:n}}).then(t=>{var e,r,a;return(e=t.errors)!=null&&e.length?i(t.errors):o((a=(r=t==null?void 0:t.data)==null?void 0:r.attributesList)==null?void 0:a.items)}).catch(u),m=`
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
${m}`,p=async n=>{const t=R(n,"snakeCase",{});return await s(_,{method:"POST",variables:{input:t}}).then(e=>{console.log("response",e);const{created_at:r,...a}=e.data.requestGuestReturn.return;return{...a,createdAt:r}}).catch(u)};export{m as R,h as g,p as r};
