/*! Copyright 2024 Adobe
All Rights Reserved. */
import{f as h,k as o,l as m}from"./removeCustomerAddress.js";const u=r=>{var a,t,c,e,i,_;return{baseMediaUrl:(t=(a=r==null?void 0:r.data)==null?void 0:a.storeConfig)==null?void 0:t.base_media_url,minLength:+((e=(c=r==null?void 0:r.data)==null?void 0:c.storeConfig)==null?void 0:e.minimum_password_length)||3,requiredCharacterClasses:+((_=(i=r==null?void 0:r.data)==null?void 0:i.storeConfig)==null?void 0:_.required_character_classes_number)||0}},d=`
  query GET_STORE_CONFIG {
    storeConfig {
      base_media_url
      autocomplete_on_storefront
      minimum_password_length
      required_character_classes_number
    }
  }
`,f=async()=>await h(d,{method:"GET",cache:"force-cache"}).then(r=>{var a;return(a=r.errors)!=null&&a.length?o(r.errors):u(r)}).catch(m);export{f as g};
