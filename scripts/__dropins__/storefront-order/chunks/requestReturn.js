import{h as n}from"./network-error.js";import{f as u,h as s}from"./fetch-graphql.js";import{t as c}from"./transform-attributes-form.js";import{a as m}from"./convertCase.js";const l=`
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
`,E=async r=>await u(l,{method:"GET",cache:"force-cache",variables:{entityType:r}}).then(e=>{var t;return(t=e.errors)!=null&&t.length?s(e.errors):c(e.data.attributesList.items??[])}).catch(n),T=`
mutation REQUEST_RETURN_ORDER($input: RequestReturnInput!) {
  requestReturn(input: $input) {
    return {
      uid
      status
      number
    }
  }
}
`,p=async r=>{const e=m(r,"snakeCase",{});return await u(T,{method:"POST",variables:{input:e}}).then(t=>{var a;if((a=t.errors)!=null&&a.length)return s(t.errors);const{created_at:i,...o}=t.data.requestReturn.return;return{...o,createdAt:i}}).catch(n)};export{E as g,p as r};
