import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{L as n}from"./index-Dokx_PJ_.js";import{I as m,E as u}from"./IconsInputLabel-PpPdO3Ft.js";import{d as o,t as g}from"./contextual-Cr4fQ3MC.js";/* empty css              */import"./index-CTjT7uj6.js";const f=o.p`
  color: ${g.textSecondary};
  font-family: IBM Plex Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.32px;
  width: 100%;
`,x=o.div`
  margin: 0;
  padding: 0;
  alignself: center;
  display: flex;
  alignitems: center;
`,v={finished:m,error:u,inactive:e.jsx(n,{active:!0,small:!0}),active:e.jsx(n,{small:!0})},c=i=>{const{iconDescription:l,status:d,description:p}=i;return e.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",margin:"0",gap:"5px",width:"100%"},children:[e.jsx(x,{...i,title:l,children:v[d]}),e.jsx(f,{children:p})]})};c.__docgenInfo={description:"",methods:[],displayName:"InlineLoading",props:{description:{required:!0,tsType:{name:"string"},description:""},iconDescription:{required:!0,tsType:{name:"string"},description:""},status:{required:!0,tsType:{name:"union",raw:'"inactive" | "active" | "finished" | "error"',elements:[{name:"literal",value:'"inactive"'},{name:"literal",value:'"active"'},{name:"literal",value:'"finished"'},{name:"literal",value:'"error"'}]},description:""}}};const E={title:"Example/InlineLoading",component:c,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{description:"Loading data...",iconDescription:"active",status:"active"}};var r,a,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    description: "Loading data...",
    iconDescription: "active",
    status: "active"
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const w=["loading"];export{w as __namedExportsOrder,E as default,t as loading};
