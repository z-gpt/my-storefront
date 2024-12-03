/*! Copyright 2024 Adobe
All Rights Reserved. */
import{f as o,h as a}from"./network-error.js";import{t as s}from"./transform-attributes-form.js";import{h as i}from"./getStoreConfig.js";const n=`
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
`,c=async e=>await o(n,{method:"GET",cache:"force-cache",variables:{formCode:e}}).then(r=>{var t;return(t=r.errors)!=null&&t.length?i(r.errors):s(r)}).catch(a);export{c as g};
