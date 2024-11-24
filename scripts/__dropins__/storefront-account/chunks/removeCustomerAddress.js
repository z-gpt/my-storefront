import{events as C}from"@dropins/tools/event-bus.js";import{FetchGraphQL as S}from"@dropins/tools/fetch-graphql.js";const b=t=>t.replace(/_([a-z])/g,(r,e)=>e.toUpperCase()),T=t=>t.replace(/([A-Z])/g,r=>`_${r.toLowerCase()}`),h=(t,r,e)=>{const n=["string","boolean","number"],o=r==="camelCase"?b:T;return Array.isArray(t)?t.map(i=>n.includes(typeof i)||i===null?i:typeof i=="object"?h(i,r,e):i):t!==null&&typeof t=="object"?Object.entries(t).reduce((i,[c,s])=>{const u=e&&e[c]?e[c]:o(c);return i[u]=n.includes(typeof s)||s===null?s:h(s,r,e),i},{}):t},{setEndpoint:x,setFetchGraphQlHeader:B,removeFetchGraphQlHeader:Q,setFetchGraphQlHeaders:j,fetchGraphQl:m,getConfig:k}=new S().getMethods(),p=`
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
`,A=`
  query GET_ATTRIBUTES_FORM_SHORT {
      attributesForm(formCode: "customer_register_address") {
      items {
        frontend_input
        label
        code
        ... on CustomerAttributeMetadata {
          multiline_count
          sort_order
        }
      }
    }
  }
`,f=t=>{throw t instanceof DOMException&&t.name==="AbortError"||C.emit("error",{source:"auth",type:"network",error:t}),t},a=t=>{const r=t.map(e=>e.message).join(" ");throw Error(r)},R=t=>{let r=[];for(const e of t)if(!(e.frontend_input!=="MULTILINE"||e.multiline_count<2))for(let n=2;n<=e.multiline_count;n++){const o={...e,is_required:!1,name:`${e.code}_multiline_${n}`,code:`${e.code}_multiline_${n}`,id:`${e.code}_multiline_${n}`};r.push(o)}return r},y=t=>{var i,c,s;const r=((c=(i=t==null?void 0:t.data)==null?void 0:i.attributesForm)==null?void 0:c.items)||[];if(!r.length)return[];const e=(s=r.filter(u=>{var l;return!((l=u.frontend_input)!=null&&l.includes("HIDDEN"))}))==null?void 0:s.map(({code:u,...l})=>{const _=u!=="country_id"?u:"country_code";return{...l,name:_,id:_,code:_}}),n=R(e);return e.concat(n).map(u=>{var E;const l=u.code==="middlename"?"middleName":u.code==="firstname"?"firstName":u.code==="lastname"?"lastName":b(u.code),_=(E=u.options)==null?void 0:E.map(g=>({isDefault:g.is_default,text:g.label,value:g.value}));return h({...u,options:_,customUpperCode:l},"camelCase",{frontend_input:"fieldType",frontend_class:"className",is_required:"required",sort_order:"orderNumber"})}).sort((u,l)=>u.orderNumber-l.orderNumber)},v=t=>{const r={};for(const e in t){const n=t[e];!Array.isArray(n)||n.length===0||(e==="custom_attributesV2"?n.forEach(o=>{typeof o=="object"&&"value"in o&&(r[o==null?void 0:o.code]=o==null?void 0:o.value)}):n.length>1?n.forEach((o,i)=>{i===0?r[e]=o:r[`${e}_multiline_${i+1}`]=o}):r[e]=n[0])}return r},O=t=>{var r,e,n;return h({firstname:(t==null?void 0:t.firstname)||"",lastname:(t==null?void 0:t.lastname)||"",city:(t==null?void 0:t.city)||"",company:(t==null?void 0:t.company)||"",country_code:(t==null?void 0:t.country_code)||"",region:{region:((r=t==null?void 0:t.region)==null?void 0:r.region)||"",region_code:((e=t==null?void 0:t.region)==null?void 0:e.region_code)||"",region_id:((n=t==null?void 0:t.region)==null?void 0:n.region_id)||""},telephone:(t==null?void 0:t.telephone)||"",id:(t==null?void 0:t.id)||"",vat_id:(t==null?void 0:t.vat_id)||"",postcode:(t==null?void 0:t.postcode)||"",default_shipping:(t==null?void 0:t.default_shipping)||!1,default_billing:(t==null?void 0:t.default_billing)||!1,...v(t)},"camelCase",{})},N=t=>{var e,n;const r=((n=(e=t==null?void 0:t.data)==null?void 0:e.customer)==null?void 0:n.addresses)||[];return r.length?r.map(O).sort((o,i)=>(Number(i.defaultBilling)||Number(i.defaultShipping))-(Number(o.defaultBilling)||Number(o.defaultShipping))):[]},d=t=>{var c,s;if(!((s=(c=t==null?void 0:t.data)==null?void 0:c.countries)!=null&&s.length))return{availableCountries:[],countriesWithRequiredRegion:[],optionalZipCountries:[]};const{countries:r,storeConfig:e}=t.data,n=e==null?void 0:e.countries_with_required_region.split(","),o=e==null?void 0:e.optional_zip_countries.split(",");return{availableCountries:r.filter(({two_letter_abbreviation:u,full_name_locale:l})=>!!(u&&l)).map(u=>{const{two_letter_abbreviation:l,full_name_locale:_}=u;return{value:l,text:_}}).sort((u,l)=>u.text.localeCompare(l.text)),countriesWithRequiredRegion:n,optionalZipCountries:o}},I=t=>{var e,n;return(n=(e=t==null?void 0:t.data)==null?void 0:e.country)!=null&&n.available_regions?t.data.country.available_regions.filter(o=>{if(!o)return!1;const{id:i,code:c,name:s}=o;return!!(i&&c&&s)}).map(o=>{const{id:i}=o;return{id:i,text:o.name,value:`${o.code},${o.id}`}}):[]},H=async t=>{const r=sessionStorage.getItem(`_account_${t}`);return r?JSON.parse(r):await m(t!=="shortRequest"?p:A,{method:"GET",cache:"force-cache",variables:{formCode:t}}).then(e=>{var o;if((o=e.errors)!=null&&o.length)return a(e.errors);const n=y(e);return sessionStorage.setItem(`_account_${t}`,JSON.stringify(n)),n}).catch(f)},$=`
  mutation CREATE_CUSTOMER_ADDRESS($input: CustomerAddressInput!) {
    createCustomerAddress(input:$input) {
      firstname
    }
  }
`,L=async t=>await m($,{method:"POST",variables:{input:h(t,"snakeCase",{custom_attributesV2:"custom_attributesV2",firstName:"firstname",lastName:"lastname"})}}).then(r=>{var e,n,o;return(e=r.errors)!=null&&e.length?a(r.errors):((o=(n=r==null?void 0:r.data)==null?void 0:n.createCustomerAddress)==null?void 0:o.firstname)||""}).catch(f),G=`
  query GET_CUSTOMER_ADDRESS {
    customer {
      addresses {
        firstname
        lastname
        city
        company
        country_code
        region {
          region
          region_code
          region_id
        }
        custom_attributesV2 {
          ... on AttributeValue {
            code
            value
          }
        }
        telephone
        id
        vat_id
        postcode
        street
        default_shipping
        default_billing
      }
    }
  }
`,P=async()=>await m(G,{method:"GET",cache:"no-cache"}).then(t=>{var r;return(r=t.errors)!=null&&r.length?a(t.errors):N(t)}).catch(f),M=`
  query GET_COUNTRIES_QUERY {
    countries {
      two_letter_abbreviation
      full_name_locale
    }
    storeConfig {
      countries_with_required_region
      optional_zip_countries
    }
  }
`,J=async()=>{const t=sessionStorage.getItem("_account_countries");return t?JSON.parse(t):await m(M,{method:"GET",cache:"no-cache"}).then(r=>{var n;if((n=r.errors)!=null&&n.length)return a(r.errors);const e=d(r);return sessionStorage.setItem("_account_countries",JSON.stringify(e)),e}).catch(f)},U=`
  query GET_REGIONS($countryCode: String!) {
    country(id: $countryCode) {
      id
      available_regions {
        id
        code
        name
      }
    }
  }
`,z=async t=>await m(U,{method:"GET",cache:"no-cache",variables:{countryCode:t}}).then(r=>{var e;return(e=r.errors)!=null&&e.length?a(r.errors):I(r)}).catch(f),w=`
  mutation UPDATE_CUSTOMER_ADDRESS($id: Int!,
  $input: CustomerAddressInput) {
    updateCustomerAddress(id:$id, input:$input) {
      firstname
   }
  }
`,Z=async t=>{const{addressId:r,...e}=t;return r?await m(w,{method:"POST",variables:{id:r,input:h(e,"snakeCase",{custom_attributesV2:"custom_attributesV2",firstName:"firstname",lastName:"lastname"})}}).then(n=>{var o,i,c;return(o=n.errors)!=null&&o.length?a(n.errors):((c=(i=n==null?void 0:n.data)==null?void 0:i.updateCustomerAddress)==null?void 0:c.firstname)||""}).catch(f):""},q=`
  mutation REMOVE_CUSTOMER_ADDRESS($id: Int!) {
    deleteCustomerAddress(id:$id)
  }
`,K=async t=>await m(q,{method:"POST",variables:{id:t}}).then(r=>{var e;return(e=r.errors)!=null&&e.length?a(r.errors):r.data.deleteCustomerAddress}).catch(f);export{B as a,j as b,H as c,L as d,P as e,m as f,k as g,J as h,z as i,K as j,h as k,a as l,f as m,b as n,T as o,Q as r,x as s,O as t,Z as u};
