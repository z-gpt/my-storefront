/*! Copyright 2024 Adobe
All Rights Reserved. */
import{h as s}from"./network-error.js";import{f as i,h as o}from"./fetch-graphql.js";import{t as R}from"./transform-attributes-form.js";import{a as c}from"./convertCase.js";import"@dropins/tools/event-bus.js";const m=`
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
`,y=async r=>await i(m,{method:"GET",cache:"force-cache",variables:{entityType:r}}).then(t=>{var e,a,n;return(e=t.errors)!=null&&e.length?o(t.errors):R((n=(a=t==null?void 0:t.data)==null?void 0:a.attributesList)==null?void 0:n.items)}).catch(s),T=`
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
${T}`,f=async r=>{const t=c(r,"snakeCase",{});return await i(_,{method:"POST",variables:{input:t}}).then(e=>{var u;if((u=e.errors)!=null&&u.length)return o(e.errors);const{created_at:a,...n}=e.data.requestReturn.return;return{...n,createdAt:a}}).catch(s)},b=async r=>{const t=c(r,"snakeCase",{});return console.log("input",t),alert("This is a test")};export{b as a,y as g,f as r};
