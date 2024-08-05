import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{L as i}from"./index-B_fqVXJD.js";import{I as l,E as c}from"./IconsInputLabel-DiahCgGh.js";import{d as n,t as d}from"./contextual-Cr4fQ3MC.js";/* empty css              */const p=n.p`
  color: ${d.textSecondary};
  font-family: IBM Plex Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.32px;
  width: 100%;
  margin: 0;
  padding: 0;
`,m=n.div`
  margin: 0;
  padding: 0;
  align-self: center;
  display: flex;
  align-items: center;
`,f={finished:l,error:c,inactive:e.jsx(i,{active:!0,small:!0}),active:e.jsx(i,{small:!0})},u=t=>{const{iconDescription:r,status:s,description:a,...o}=t;return e.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",margin:"0",gap:"0px",width:"100%"},...o,children:[e.jsx(m,{title:r,children:f[s||"active"]}),e.jsx(p,{children:a})]})};u.__docgenInfo={description:"",methods:[],displayName:"InlineLoading",props:{description:{required:!1,tsType:{name:"string"},description:""},iconDescription:{required:!1,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"union",raw:'"inactive" | "active" | "finished" | "error"',elements:[{name:"literal",value:'"inactive"'},{name:"literal",value:'"active"'},{name:"literal",value:'"finished"'},{name:"literal",value:'"error"'}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{u as I};
