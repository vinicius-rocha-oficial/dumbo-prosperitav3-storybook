import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{r as c}from"./index-CTjT7uj6.js";import{B as v}from"./index-BJQ0ogKr.js";import{C as k}from"./IconsInputLabel-E66WMmAT.js";import{d as a}from"./styled-components.browser.esm-D3-gLipQ.js";import{t as o}from"./contextual-D4vCP4YA.js";/* empty css              */import{T as j}from"./index-CXvTuBB8.js";const T=a.div`
  background-color: ${({backgroundModal:e})=>e||"rgba(0, 0, 0, 0.5)"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${({open:e})=>e?"visible)":"hidden"};
  opacity: ${({open:e})=>e?"1":"0"};
  transition: 0.2s linear all;
  z-index: 10;
`,C=a.div`
  background: ${({background:e})=>e||o.borderSubtle00};
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 0;
  height:${({height:e})=>e||"auto"};
  transform: ${({open:e})=>e?"translateY(0)":"translateY(-100px)"};
  transition: 0.2s linear all;
@media (min-width: 320px) {
  width: 92%;
}

@media (min-width: 800px) {
  width: 70%;
}

@media (min-width: 1056px) {
  width: 60%;
}

@media (min-width: 1312px) {
  width:${({width:e})=>e||"45%"};
}

@media (min-width: 1584px), (min-width: 1784px) {
    width:${({width:e})=>e||"60%"};
}
/* Personaliza a barra de rolagem */
::-webkit-scrollbar {
    width: 1px; /* largura da barra de rolagem */
    height: 12px; /* altura da barra de rolagem horizontal */
}

/* Fundo da barra de rolagem */
::-webkit-scrollbar-track {
    background-color: transparent; /* cor do track */
    border-radius: 10px;
}

/* Cor do thumb (elemento que se move) */
::-webkit-scrollbar-thumb {
    background-color: #888; /* cor do thumb */
    border-radius: 10px;
    border: 3px solid transparent; /* espaço interno */
}

/* Cor do thumb quando hover */
::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* cor ao passar o mouse */
}

`,q=a.div`
  width: 100%;
  margin: 0px auto;
  padding: 0;
  height: 310px;
  overflow-y: auto;
  overflow-x: hidden;
`,z=a.div`
  padding: 0;
  margin: 0;
  width: 100%;
  overflow-y:${({overflow:e})=>e?"hidden":"auto"};
  overflow-x: hidden;
  box-sizing: border-box;
  border: 2px solid transparent;

`,$=a.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  box-sizing: border-box;
  flex-direction: row;
  padding: 0;
  margin:0;
  gap: 1px;
`,L=a.div`
  color: ${o.textPrimary};
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`,R=a.button`
  cursor: pointer;
  border: 0;
  outline: 0;
  margin: 0;
  padding: 0;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  border: 3px solid transparent;
  background: transparent;
  border-radius: 0 8px 0 0;
  &:focus {
    border: 3px solid ${o.focus};
    margin: 0;
    padding: 0;
  }
  &:hover {
    background: ${o.fieldHover01};
    margin: 0;
    padding: 0;
  }
`,M=a.div`
  padding: 0.8em 0 0.5em 1em;
  width: 90%;
`,P=a.h3`
padding: 0;
margin: 0 0 5px 0;
color: ${o.textPrimary};
word-wrap: break-word;
width: 97%;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 28px; 
`,B=a.p`
  padding: 0;
  margin: 0;
  font-size: 14px;
  width: 97%;
  word-wrap: break-word;
  font-style: normal;
font-weight: 400;
line-height: 28px; 
`,E=e=>{const{label:p,textLabel:u,buttons:i,open:l,children:g,backgroundModal:h,onClose:d,height:x,width:b,overflow:f}=e,s=c.useRef(null),m=n=>{s.current&&!s.current.contains(n.target)&&(d==null||d())};c.useEffect(()=>(l&&document.addEventListener("mousedown",m),()=>{document.removeEventListener("mousedown",m)}),[l]);const y=(n,t)=>t===0&&(i==null?void 0:i.length)===3?"70%":"50%";return r.jsx(r.Fragment,{children:r.jsx(T,{backgroundModal:h,open:l,...e,children:r.jsxs(C,{width:b,height:x,open:l,ref:s,...e,children:[r.jsxs(L,{children:[r.jsxs(M,{children:[r.jsx(P,{children:p}),r.jsx(B,{children:u})]}),r.jsx("div",{children:r.jsx(j,{align:"left",size:"small",label:"Close",width:"70px",children:r.jsx(R,{onClick:d,children:k})})})]}),r.jsx(z,{overflow:f,...e,onClick:n=>n.stopPropagation(),children:r.jsx(q,{children:g})}),r.jsx($,{children:i==null?void 0:i.map((n,t)=>r.jsx("div",{style:{width:y(n,t),boxSizing:"border-box",margin:"0",padding:"0"},children:r.jsx(v,{forModal:!0,dimension:n.dimension||"70",size:n.size||"large",kind:n.kind||"secondary",label:n.label,icon:n.icon,disabled:n.disabled,onClick:w=>{n.onClick&&n.onClick(),w.stopPropagation()},style:{borderRadius:t===i.length-1?"0 0 0px 0":t===0?"0 0 0 0px":"0",boxSizing:"border-box"}})},t))})]})})})};E.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{label:{required:!1,tsType:{name:"ReactNode"},description:""},textLabel:{required:!1,tsType:{name:"string"},description:""},buttons:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label?: string;\r
  icon?: string;\r
  onClick?: () => void;\r
  disabled?: boolean;\r
  dimension?: string;\r
  size?:\r
  | "large"\r
  | "medium"\r
  | "small"\r
  | "extraLarge"\r
  | "twoXLarge"\r
  | "expressive";\r
  kind?:\r
  | "primary"\r
  | "secondary"\r
  | "tertiary"\r
  | "ghost"\r
  | "dangerPrimary"\r
  | "dangerTertiary"\r
  | "dangerGhost";\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"icon",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"dimension",value:{name:"string",required:!1}},{key:"size",value:{name:"union",raw:`| "large"\r
| "medium"\r
| "small"\r
| "extraLarge"\r
| "twoXLarge"\r
| "expressive"`,elements:[{name:"literal",value:'"large"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"small"'},{name:"literal",value:'"extraLarge"'},{name:"literal",value:'"twoXLarge"'},{name:"literal",value:'"expressive"'}],required:!1}},{key:"kind",value:{name:"union",raw:`| "primary"\r
| "secondary"\r
| "tertiary"\r
| "ghost"\r
| "dangerPrimary"\r
| "dangerTertiary"\r
| "dangerGhost"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"ghost"'},{name:"literal",value:'"dangerPrimary"'},{name:"literal",value:'"dangerTertiary"'},{name:"literal",value:'"dangerGhost"'}],required:!1}}]}}],raw:"IbuttonProps[]"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},backgroundModal:{required:!1,tsType:{name:"string"},description:""},background:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""},overflow:{required:!1,tsType:{name:"boolean"},description:""}}};export{E as M};
