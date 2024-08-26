import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as p}from"./index-CTjT7uj6.js";import{B as f}from"./index-RDOqItmM.js";import{C as b}from"./IconsInputLabel-DNdvQB1m.js";import{d as i}from"./styled-components.browser.esm-D3-gLipQ.js";import{t as s}from"./contextual-D4vCP4YA.js";/* empty css              */import{T as y}from"./index-CKOFa-r3.js";const w=i.div`
  background-color: ${({backgroundModal:r})=>r||"rgba(0, 0, 0, 0.5)"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${({open:r})=>r?"visible)":"hidden"};
  opacity: ${({open:r})=>r?"1":"0"};
  transition: 0.2s linear all;
  z-index: 10;
`,v=i.div`
  background: ${s.layer01};
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  padding: 0;
  height: auto;
  transform: ${({open:r})=>r?"translateY(0)":"translateY(-100px)"};
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
    width: 652px;
  }
  @media (min-width: 1584px) {
    width: 60%;
  }
  @media (min-width: 1784px) {
    width: 60%;
  }
`,j=i.div`
  width: 93%;
  margin: 0px auto;
  padding: 0;
  height: 310px;
  overflow-y: auto;
  overflow-x: hidden;
`,k=i.div`
  padding: 0;
  margin: 0;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  border: 2px solid transparent;
`,C=i.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  box-sizing: border-box;
  flex-direction: row;
  padding: 0;
  gap: 1px;
`,T=i.div`
  color: ${s.textPrimary};
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`,q=i.button`
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
    border: 3px solid ${s.focus};
    margin: 0;
    padding: 0;
  }
  &:hover {
    background: ${s.fieldHover01};
    margin: 0;
    padding: 0;
  }
`,z=i.div`
  padding: 0.8em 0 0.5em 1em;
  width: 90%;
`,M=i.h3`
  padding: 0;
  margin: 0;
  font-size: 15px;
  word-wrap: break-word;
  width: 95%;
`,R=i.p`
  padding: 0;
  margin: 0;
  font-size: 14px;
  width: 95%;
  word-wrap: break-word;
`,$=r=>{const{label:m,textLabel:u,buttons:t,open:o,children:g,backgroundModal:x,onClose:d}=r,l=p.useRef(null),c=n=>{l.current&&!l.current.contains(n.target)&&(d==null||d())};p.useEffect(()=>(o&&document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}),[o]);const h=(n,a)=>a===0&&(t==null?void 0:t.length)===3?"70%":"50%";return e.jsx(e.Fragment,{children:e.jsx(w,{backgroundModal:x,open:o,...r,children:e.jsxs(v,{open:o,ref:l,...r,children:[e.jsxs(T,{children:[e.jsxs(z,{children:[e.jsx(M,{children:m}),e.jsx(R,{children:u})]}),e.jsx("div",{children:e.jsx(y,{align:"left",size:"small",label:"Close",width:"70px",children:e.jsx(q,{onClick:d,children:b})})})]}),e.jsx(k,{onClick:n=>n.stopPropagation(),children:e.jsx(j,{children:g||e.jsx(e.Fragment,{})})}),e.jsx(C,{children:t==null?void 0:t.map((n,a)=>e.jsx("div",{style:{width:h(n,a),boxSizing:"border-box"},children:e.jsx(f,{forModal:!0,size:"large",kind:n.kind||"secondary",label:n.label,icon:n.icon,disabled:n.disabled,onClick:n.onClick,style:{borderRadius:a===t.length-1?"0 0 8px 0":a===0?"0 0 0 8px":"0",boxSizing:"border-box"}})},a))})]})})})};$.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{label:{required:!1,tsType:{name:"string"},description:""},textLabel:{required:!1,tsType:{name:"string"},description:""},buttons:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label?: string;\r
  icon?: string;\r
  onClick?: () => void;\r
  disabled?: boolean;\r
  kind?:\r
    | "primary"\r
    | "secondary"\r
    | "tertiary"\r
    | "ghost"\r
    | "dangerPrimary"\r
    | "dangerTertiary"\r
    | "dangerGhost";\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"icon",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"kind",value:{name:"union",raw:`| "primary"\r
| "secondary"\r
| "tertiary"\r
| "ghost"\r
| "dangerPrimary"\r
| "dangerTertiary"\r
| "dangerGhost"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"ghost"'},{name:"literal",value:'"dangerPrimary"'},{name:"literal",value:'"dangerTertiary"'},{name:"literal",value:'"dangerGhost"'}],required:!1}}]}}],raw:"IbuttonProps[]"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},backgroundModal:{required:!1,tsType:{name:"string"},description:""}}};export{$ as M};
