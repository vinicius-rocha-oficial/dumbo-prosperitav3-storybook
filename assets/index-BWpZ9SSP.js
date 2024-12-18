import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{r as u}from"./index-CTjT7uj6.js";import{B as q}from"./index-vCHOC0t6.js";import{C as T}from"./IconsInputLabel-E66WMmAT.js";import{d as a}from"./styled-components.browser.esm-D3-gLipQ.js";import{t as l}from"./contextual-D4vCP4YA.js";/* empty css              */import{T as j}from"./index-UMtQnabN.js";const C=a.div`
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
  z-index: 14;
`,z=a.div`
  background: ${({background:e})=>e||l.borderSubtle00};
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 0;
  height:${({height:e})=>e||"auto"};
  transform: ${({open:e})=>e?"translateY(0)":"translateY(-100px)"};
  transition: 0.2s linear all;
 border-radius: ${({radius:e})=>e?"8px":"0"};
 
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

`,$=a.div`
  width: 100%;
  margin: 0px auto;
  padding: 0;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`,L=a.div`
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  overflow-y:${({overflow:e})=>e?"hidden":"auto"};
  overflow-x: hidden;
  box-sizing: border-box;
  border: 2px solid transparent;

`,R=a.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  box-sizing: border-box;
  flex-direction: row;
  padding: 0;
  margin:0;
  gap: 1px;
`,I=a.div`
  color: ${l.textPrimary};
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`,S=a.button`
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
    border: 3px solid ${l.focus};
    margin: 0;
    padding: 0;
  }
  &:hover {
    background: ${l.fieldHover01};
    margin: 0;
    padding: 0;
  }
`,M=a.div`
  padding: 0.8em 0 0.5em 1em;
  width: 90%;
`,P=a.h3`
padding: 0;
margin: 0 0 5px 0;
color: ${l.textPrimary};
word-wrap: break-word;
width: 100%;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 28px; 

`,B=a.p`
  padding: 0;
  margin: 0;
  font-size: 14px;
  width: 100%;
  word-wrap: break-word;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; 

`,E=e=>{const{label:g,textLabel:h,buttons:i,open:d,children:b,backgroundModal:x,onClose:o,height:f,width:y,overflow:v,background:w,radius:s}=e,c=u.useRef(null),m=u.useCallback(r=>{c.current&&!c.current.contains(r.target)&&(o==null||o())},[o]);u.useEffect(()=>(d&&document.addEventListener("mousedown",m),()=>{document.removeEventListener("mousedown",m)}),[d,m]);const k=(r,t)=>t===0&&(i==null?void 0:i.length)===3?"70%":"50%";return n.jsx(C,{backgroundModal:x,open:d,children:n.jsxs(z,{radius:s,height:f,width:y,background:w,open:d,ref:c,children:[n.jsxs(I,{children:[n.jsxs(M,{children:[n.jsx(P,{children:g}),n.jsx(B,{children:h})]}),n.jsx("div",{children:n.jsx(j,{align:"left",size:"small",label:"Close",width:"70px",children:n.jsx(S,{onClick:o,children:T})})})]}),n.jsx(L,{overflow:v,children:n.jsx($,{children:b})}),n.jsx(R,{children:i==null?void 0:i.map((r,t)=>n.jsx("div",{style:{width:k(r,t),boxSizing:"border-box"},children:n.jsx(q,{dimension:r.dimension||"70",size:r.size||"large",kind:r.kind||"secondary",label:r.label,hasIconSvg:r.hasIconSvg,icon:r.icon,disabled:r.disabled,loading:r.loading,onClick:()=>{var p;(p=r.onClick)==null||p.call(r)},style:{borderRadius:t===i.length-1?s?"0 0 8px 0":"0 0 0px 0":t===0&&s?"0 0px 0 5px":"0"}})},t))})]})})};E.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{label:{required:!1,tsType:{name:"ReactNode"},description:""},textLabel:{required:!1,tsType:{name:"ReactNode"},description:""},buttons:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label?: string;\r
  icon?: string;\r
  onClick?: () => void;\r
  disabled?: boolean;\r
  hasIconSvg?: boolean;\r
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
  loading?: boolean\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"icon",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"hasIconSvg",value:{name:"boolean",required:!1}},{key:"dimension",value:{name:"string",required:!1}},{key:"size",value:{name:"union",raw:`| "large"\r
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
| "dangerGhost"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"ghost"'},{name:"literal",value:'"dangerPrimary"'},{name:"literal",value:'"dangerTertiary"'},{name:"literal",value:'"dangerGhost"'}],required:!1}},{key:"loading",value:{name:"boolean",required:!1}}]}}],raw:"IbuttonProps[]"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},backgroundModal:{required:!1,tsType:{name:"string"},description:""},background:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""},overflow:{required:!1,tsType:{name:"boolean"},description:""},radius:{required:!1,tsType:{name:"boolean"},description:""}}};export{E as M};
