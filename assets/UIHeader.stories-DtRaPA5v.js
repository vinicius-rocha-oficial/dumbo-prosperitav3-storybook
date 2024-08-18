import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as x}from"./index-CTjT7uj6.js";import{d as r}from"./styled-components.browser.esm-D3-gLipQ.js";/* empty css              */import{t as n}from"./contextual-D4vCP4YA.js";import{A as b}from"./IconsInputLabel-DNdvQB1m.js";const y=r.div`
  cursor: pointer;
  color: ${n.textPrimary};
  font-family: IBM Plex Sans;
  background: transparent;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  width: auto;
  min-width: 70px;
  position: relative;
  gap: 7px;
  white-space: nowrap;
  border: 2px solid transparent;
  &:hover {
    background: ${n.borderSubtle01};
  }
  &:focus {
    border: 2px solid #29183a;
  }
  &:active {
    border: 2px solid ${n.backgroundActive};
  }
`,f=r.section`
  margin: 0;
  padding: 0;
  transform: translateY(10%) rotate(0deg);
  transition: 0.3s all;
  &.rotate {
    transform: translateY(-1%) rotate(180deg);
  }
`,k=r.div`
  position: relative;
`,h=r.div`
  font-family: IBM Plex Sans;
  background: ${n.layer01};
  position: absolute;
  min-width: 250px;
`,v=r.p`
  margin: 0;
  padding: 1em;
  cursor: pointer;
  border: 2px solid transparent;
  outline: 0;
  background: ${n.layer01};
  color: ${n.textPrimary};
  &:hover {
    background: ${n.layerHover01};
  }
  &:focus {
    border: 2px solid #29183a;
    background: ${n.layer01};
  }
  &:active {
    background: ${n.layerActive01};
  }
`,l=d=>{const{options:c,label:p}=d,[u,m]=x.useState(!1),g=()=>{m(o=>!o)};return e.jsx(e.Fragment,{children:e.jsxs(k,{children:[e.jsxs(y,{tabIndex:0,onClick:g,children:[e.jsx("span",{style:{margin:"0",padding:"0"},children:p}),e.jsx(f,{className:"rotate",children:b}),e.jsx("div",{style:{margin:"0",padding:"0",position:"absolute",bottom:"-2px",zIndex:"1",width:"103%",height:"2px",background:"#29183a"}})]}),u&&e.jsx(h,{children:c.map(o=>e.jsx(v,{tabIndex:0,onClick:o.onClick,children:o.label}))})]})})};l.__docgenInfo={description:"",methods:[],displayName:"UIHeader",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  onClick: () => void;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}}],raw:"TypeOption[]"},description:""},label:{required:!1,tsType:{name:"string"},description:""}}};const S={title:"Example/UIHeader",component:l,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{options:[{label:"Text Index",onClick:()=>console.log("Indice")},{label:"Text Index 1",onClick:()=>console.log("Indice 1")}],label:"Sobre Nos"}};var a,i,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "Text Index",
      onClick: () => console.log("Indice")
    }, {
      label: "Text Index 1",
      onClick: () => console.log("Indice 1")
    }],
    label: "Sobre Nos"
  }
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const T=["Default"];export{t as Default,T as __namedExportsOrder,S as default};
