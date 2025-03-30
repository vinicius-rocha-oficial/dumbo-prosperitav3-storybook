import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as f}from"./index-CTjT7uj6.js";import{T as x}from"./index-UMtQnabN.js";import{d as o}from"./styled-components.browser.esm-D3-gLipQ.js";import{t as g}from"./contextual-D4vCP4YA.js";/* empty css              */const C=o.pre`
  background-color:${({background:e})=>e||"#282c34"} ;
  padding: 5px 5px 5px 20px;
  border-radius: 8px;
  color:${({color:e})=>e||"#ffffff"};
  min-width:auto;
  min-height:20px;
  display:flex;
  align-items:center;
  justify-content:end;
  gap:10px
`,j=o.code`
font-size: 14px;
color:${({color:e})=>e||"black"};
font-style: normal;
font-weight: 400;
line-height: 16px;
letter-spacing: 0.32px;
`,y=o.button`
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
    outline:2px solid ${g.focus}
    }
`,c=({code:e,background:n,color:l,icon:s})=>{const[m,i]=f.useState(!1),u=()=>{navigator.clipboard.writeText(e).then(()=>{i(!0),setTimeout(()=>i(!1),2e3)})},h=e.length>50?`${e.substring(0,50)}...`:e;return t.jsxs(C,{background:n,code:e,children:[t.jsx(j,{color:l,background:n,code:e,children:h}),t.jsx(x,{align:"bottom",size:"small",width:"100px",label:m?"Copiado!":"Copiar",children:t.jsx(y,{onClick:u,children:s||t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("g",{id:"Copy",children:t.jsxs("g",{id:"Vector",children:[t.jsx("path",{d:"M14 5V14H5V5H14ZM14 4H5C4.73478 4 4.48043 4.10536 4.29289 4.29289C4.10536 4.48043 4 4.73478 4 5V14C4 14.2652 4.10536 14.5196 4.29289 14.7071C4.48043 14.8946 4.73478 15 5 15H14C14.2652 15 14.5196 14.8946 14.7071 14.7071C14.8946 14.5196 15 14.2652 15 14V5C15 4.73478 14.8946 4.48043 14.7071 4.29289C14.5196 4.10536 14.2652 4 14 4Z",fill:"#161616"}),t.jsx("path",{d:"M2 9H1V2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H9V2H2V9Z",fill:"#161616"})]})})})})})]})};c.__docgenInfo={description:"",methods:[],displayName:"CodeSnippet",props:{language:{required:!1,tsType:{name:"string"},description:""},code:{required:!0,tsType:{name:"string"},description:""},background:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""}}};const S={title:"Example/CodeSnippet",component:c,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{code:"https://prosperita.payment/pix/hfuhj83fuh243hr89hfijundjiqshncsad924",color:"#000000",background:"#d6cdcd"}};var p,a,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    code: "https://prosperita.payment/pix/hfuhj83fuh243hr89hfijundjiqshncsad924",
    color: "#000000",
    background: "#d6cdcd"
  }
}`,...(d=(a=r.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const k=["Default"];export{r as Default,k as __namedExportsOrder,S as default};
