import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{r as u}from"./index-CTjT7uj6.js";import{d as i}from"./styled-components.browser.esm-D3-gLipQ.js";import{t as e}from"./contextual-D4vCP4YA.js";/* empty css              */import{A as x}from"./IconsInputLabel-DNdvQB1m.js";const b=i.div`
  background: ${e.layer01};
  position: fixed;
  right: ${({orientations:t})=>t==="right"&&"0"};
  left: ${({orientations:t})=>t==="left"&&"0"};
  width: 300px;
  height: 100vh;
  botom: 0;
  top: 0;
  z-index: 1;
  color: ${e.textSecondary};
  font-family: IBM Plex Sans;
  font-size: 15px;
  border-right: 1px solid ${e.borderSubtle01};
  border-bottom: 1px solid ${e.borderSubtle01};
  border-left: 1px solid ${e.borderSubtle01};
  box-sizing: border-box;
  overflow: auto;
  transform: ${({orientations:t})=>t==="left"?"translateX(-150%)":t==="right"?"translateX(150%)":""};
  transition: 0.3s linear transform;
  &.transformClass {
    transform: translateX(0%);
  }
`,h=i.button`
  text-align: start;
  background: transparent;
  width: 100%;
  align-items: center;
  gap: 10px;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.16px;
  padding: 0.5em;
  margin: 0;
  cursor: pointer;
  border: 0;
  outline: none;
  font-family: IBM Plex Sans;
  border: 2px solid transparent;
  color: ${e.textSecondary};
  &:hover {
    background: ${e.backgroundHover};
  }
  &:focus {
    border: 2px solid ${e.focus};
  }
  &:active {
    background: ${e.backgroundActive};
  }
`,y=i.button`
  padding: 0.5em;
  margin: 0;
  text-align: "center";
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  font-family: IBM Plex Sans;
  font-size: 15px;
  border: none;
  border-left: 3px solid transparent;
  color: ${e.textPrimary};
  &:hover {
    background: ${e.backgroundHover};
  }
  &:focus {
    border-left: 3px solid ${e.focus};
  }
  &:active {
    background: ${e.backgroundActive};
  }
`,v=i.span`
  transition: 0.2s linear all;
  transform: rotate(360deg);
  &.rotate {
    transform: rotate(180deg);
  }
`,k=t=>{const[s,d]=u.useState(!1),[l,g]=u.useState(),{options:a,open:m}=t,f=n=>{g(n),d(!(l===n&&s))};return r.jsx(b,{className:m?"transformClass":"",...t,children:r.jsx("div",{style:{display:"flex",flexDirection:"column"},children:a==null?void 0:a.map((n,o)=>{var p;return r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{margin:o===0?"35px 0 0 0":a.length-1===o?"0 0 0px 0":"",padding:"0",alignItems:"start",display:"flex",flexDirection:"column",fontFamily:"IBM Plex Sans",textAlign:"start"},children:[r.jsxs(h,{onClick:n.hasOwnProperty("optionsMenu")?()=>f(o):n.onClick,children:[n.label,n.hasOwnProperty("optionsMenu")&&r.jsx(v,{style:{margin:"0",padding:"0",height:"100%",display:"flex"},className:l===o&&s?"rotate":"",children:x})]}),l===o&&s&&r.jsx("div",{style:{width:"100%"},children:(p=n.optionsMenu)==null?void 0:p.map(c=>r.jsx(y,{onClick:c.onClick,children:c.label}))})]}),(o+1)%4===0&&o!==a.length-1&&r.jsx("div",{style:{width:"90%",height:"1px",backgroundColor:"#ddd",margin:"20px auto "}})]})})})})};k.__docgenInfo={description:"",methods:[],displayName:"UIRightPanel",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label?: string;
  onClick?: () => void;
  optionsMenu?: TypeOption[];
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"optionsMenu",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label?: string;
  onClick?: () => void;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"TypeOption[]",required:!1}}]}}],raw:"TypeMenu[]"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},orientations:{required:!1,tsType:{name:"union",raw:'"right" | "left"',elements:[{name:"literal",value:'"right"'},{name:"literal",value:'"left"'}]},description:""}}};export{k as U};
