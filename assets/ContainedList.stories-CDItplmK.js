import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{d as r}from"./styled-components.browser.esm-D3-gLipQ.js";import{t as o}from"./contextual-D4vCP4YA.js";/* empty css              */import{S as h}from"./index-DAMTHkr7.js";import{M as b}from"./index-btDtbPhG.js";import"./index-CTjT7uj6.js";import"./IconsInputLabel-C-_tevyj.js";import"./index-ClYmvwGD.js";import"./index-9Jiz9iCi.js";/* empty css                 */const a=r.tr`
  background: ${o.field01};
`,u=r.td`
  border-bottom: 1px solid ${o.borderStrong01};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
`,s=r.th`
  border-bottom: 1px solid ${o.borderStrong01};
  margin: 0;
  padding: 0;
  text-align: start;
`,f=r.table`
  margin: 0;
  width: 700px;
  disaply: flex;
  padding: 0;
  border-collapse: collapse;
  font-family: "IBM Plex Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.16px;
`,i=[{label:"item 1"},{label:"item 2"},{label:"item 3"}],p=()=>{const c=n=>{const g=i.filter(x=>x.label===n.target.value);console.log(g)};return e.jsx(e.Fragment,{children:e.jsxs(f,{children:[e.jsx(a,{children:e.jsx(s,{children:e.jsxs("p",{style:{margin:"0",padding:"1em"},children:["List title , ",i.length]})})}),e.jsx(a,{children:e.jsx(s,{children:e.jsx("div",{style:{margin:"0",padding:"0",width:"100%"},children:e.jsx(h,{placeholder:"Filter",name:"search",kind:"expandable",size:"medium",onChange:c,ContainedListMenu:!0})})})}),e.jsx(a,{children:e.jsx(e.Fragment,{children:i.map(n=>e.jsx(e.Fragment,{children:e.jsxs(u,{children:[e.jsx("p",{style:{margin:"0 0 0 1em ",padding:"0em",boxSizing:"border-box"},children:n.label}),e.jsx(b,{kind:"primary",size:"medium",menuAlignment:"bottom end",variations:"overflow",options:[{label:"Ver Detalhes"},{label:"Editar"},{label:"Remover"}],ContainedListMenu:!0})]})}))})})]})})};p.__docgenInfo={description:"",methods:[],displayName:"ContainedList"};const D={title:"Example/ContainedList",component:p,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{}};var l,d,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const E=["Default"];export{t as Default,E as __namedExportsOrder,D as default};
