import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as m}from"./index-CTjT7uj6.js";import{d as r}from"./styled-components.browser.esm-D3-gLipQ.js";import{T as g}from"./index-UMtQnabN.js";import{t as C}from"./contextual-D4vCP4YA.js";/* empty css              */const j=r.div`
  position: relative;
  width: 100%;
  padding: 10px;
  background-color: #F4F4F4;
  color: #161616;
  border-radius: 8px;
  font-family: monospace;
`,b=r.button`
  border: none;
  padding: 6px 8px;
  margin:0;
  height:100%;
  cursor: pointer;
  font-size: 0.8rem;
  border-radius: 8px;
  background:transparent;

  display:flex;
  align-items:center;
  justify-content:center;
  &:focus{
    outline:2px solid ${C.focus}
    }
`,y=r.pre`
  display: flex;
  overflow: auto;
  max-height: ${({expanded:t})=>t?"none":"160px"};
  white-space: pre-wrap;
  font-size: 14px;
  background-color: #F4F4F4;
  padding: 12px;
  border-radius: 6px;
  line-height: 1.5;

`,v=r.div`
  text-align: right;
  color: #888;
  padding-right: 12px;
  user-select: none;
  font-size: 14px;
`,w=r.div`
  font-family: monospace;
  white-space: pre;
  word-break: break-word;
  border-left: 1px solid #C6C6C6;
  padding: 15px;
`,l=({code:t,expanded:c=!0,numbers:u=!0,copy:x=!0})=>{const[h,n]=m.useState(!1),f=()=>{navigator.clipboard.writeText(t),n(!0),setTimeout(()=>n(!1),2e3)};return e.jsxs(j,{children:[x&&e.jsx("div",{style:{display:"flex",justifyContent:"end"},children:e.jsx(g,{align:"bottom",size:"small",width:"100px",label:h?"Copiado!":"Copiar",children:e.jsx(b,{onClick:f,children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("g",{id:"Copy",children:e.jsxs("g",{id:"Vector",children:[e.jsx("path",{d:"M14 5V14H5V5H14ZM14 4H5C4.73478 4 4.48043 4.10536 4.29289 4.29289C4.10536 4.48043 4 4.73478 4 5V14C4 14.2652 4.10536 14.5196 4.29289 14.7071C4.48043 14.8946 4.73478 15 5 15H14C14.2652 15 14.5196 14.8946 14.7071 14.7071C14.8946 14.5196 15 14.2652 15 14V5C15 4.73478 14.8946 4.48043 14.7071 4.29289C14.5196 4.10536 14.2652 4 14 4Z",fill:"#000000"}),e.jsx("path",{d:"M2 9H1V2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H9V2H2V9Z",fill:"#000000"})]})})})})})}),e.jsxs(y,{expanded:c,children:[u&&e.jsx(v,{children:t.split(`
`).map((s,o)=>e.jsx("div",{children:o+1},o))}),e.jsx(w,{children:t.split(`
`).map((s,o)=>e.jsx("div",{children:s},o))})]})]})};l.__docgenInfo={description:"",methods:[],displayName:"CodeSnippetInline",props:{expanded:{defaultValue:{value:"true",computed:!1},required:!1},numbers:{defaultValue:{value:"true",computed:!1},required:!1},copy:{defaultValue:{value:"true",computed:!1},required:!1}}};const _={title:"Example/CodeSnippetInline",component:l,parameters:{layout:"centered"},tags:["autodocs"]},i={args:{code:"https://prosperita.payment/pix/hfuhj83fuh243hr89hfijundjiqshncsad924",expanded:!0}};var a,d,p;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    code: "https://prosperita.payment/pix/hfuhj83fuh243hr89hfijundjiqshncsad924",
    expanded: true
  }
}`,...(p=(d=i.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const z=["Default"];export{i as Default,z as __namedExportsOrder,_ as default};
