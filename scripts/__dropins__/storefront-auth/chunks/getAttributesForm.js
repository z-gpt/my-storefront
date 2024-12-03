/*! Copyright 2024 Adobe
All Rights Reserved. */
import{f as a,d as o,h as s}from"./getStoreConfig.js";import{t as i}from"./transform-attributes-form.js";const n=`
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
`,m=async t=>await a(n,{method:"GET",cache:"force-cache",variables:{formCode:t}}).then(r=>{var e;return(e=r.errors)!=null&&e.length?o(r.errors):i(r)}).catch(s);export{m as g};
