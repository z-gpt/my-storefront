/*! Copyright 2024 Adobe
All Rights Reserved. */
import{h as o}from"./network-error.js";import{f as s,h as u}from"./fetch-graphql.js";import{t as n}from"./transform-attributes-form.js";import"@dropins/tools/event-bus.js";import{a as l}from"./convertCase.js";const m=`
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
`,_=async e=>await s(m,{method:"GET",cache:"force-cache",variables:{entityType:e}}).then(t=>{var r,a,i;return(r=t.errors)!=null&&r.length?u(t.errors):n((i=(a=t==null?void 0:t.data)==null?void 0:a.attributesList)==null?void 0:i.items)}).catch(o),f=async e=>{const t=l(e,"snakeCase",{});console.log("input",t)};export{_ as g,f as r};
