/*! Copyright 2024 Adobe
All Rights Reserved. */
const n=r=>{if(!r)return null;const t=new FormData(r);if(t&&typeof t.entries=="function"){const e=t.entries();if(e&&typeof e[Symbol.iterator]=="function")return JSON.parse(JSON.stringify(Object.fromEntries(e)))||{}}return{}};export{n as g};
