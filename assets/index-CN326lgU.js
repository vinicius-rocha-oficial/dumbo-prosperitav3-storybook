import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as p}from"./index-CTjT7uj6.js";import{B as f}from"./index-43QVy7Gz.js";import{c as b}from"./IconsInputLabel-DiahCgGh.js";import{d as r,t as s}from"./contextual-Cr4fQ3MC.js";/* empty css              */const y=r.div`
  background-color: ${({backgroundModal:n})=>n||"rgba(0, 0, 0, 0.5)"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${({open:n})=>n?"visible)":"hidden"};
  opacity: ${({open:n})=>n?"1":"0"};
  transition: 0.2s linear all;
  z-index: 10;
`,w=r.div`
  background: ${s.layer01};
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  padding: 0;
  height: auto;
  transform: ${({open:n})=>n?"translateY(0)":"translateY(-100px)"};
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
`,v=r.div`
  width: 93%;
  margin: 0px auto;
  padding: 0;
  height: 310px;
  overflow-y: auto;
  overflow-x: hidden;
`,k=r.div`
  padding: 0;
  margin: 0;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  border: 2px solid transparent;
`,j=r.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  box-sizing: border-box;
  flex-direction: row;
  padding: 0;
  gap: 1px;
`,C=r.div`
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
`,T=r.button`
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
`,q=r.div`
  padding: 0.8em 0 0.5em 1em;
  width: 90%;
`,z=r.h3`
  padding: 0;
  margin: 0;
  font-size: 15px;
  word-wrap: break-word;
  width: 95%;
`,M=r.p`
  padding: 0;
  margin: 0;
  font-size: 14px;
  width: 95%;
  word-wrap: break-word;
`,R=n=>{const{label:m,textLabel:u,buttons:t,open:o,children:g,backgroundModal:x,onClose:d}=n,l=p.useRef(null),c=i=>{l.current&&!l.current.contains(i.target)&&(d==null||d())};p.useEffect(()=>(o&&document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}),[o]);const h=(i,a)=>a===0&&(t==null?void 0:t.length)===3?"70%":"50%";return e.jsx(e.Fragment,{children:e.jsx(y,{backgroundModal:x,open:o,...n,children:e.jsxs(w,{open:o,ref:l,...n,children:[e.jsxs(C,{children:[e.jsxs(q,{children:[e.jsx(z,{children:m}),e.jsx(M,{children:u})]}),e.jsx(T,{onClick:d,children:b})]}),e.jsx(k,{onClick:i=>i.stopPropagation(),children:e.jsx(v,{children:g||e.jsx(e.Fragment,{})})}),e.jsx(j,{children:t==null?void 0:t.map((i,a)=>e.jsx("div",{style:{width:h(i,a),boxSizing:"border-box"},children:e.jsx(f,{forModal:!0,size:"large",kind:i.kind||"secondary",label:i.label,icon:i.icon,disabled:i.disabled,onClick:i.onClick,style:{borderRadius:a===t.length-1?"0 0 8px 0":a===0?"0 0 0 8px":"0",boxSizing:"border-box"}})},a))})]})})})};R.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{label:{required:!1,tsType:{name:"string"},description:""},textLabel:{required:!1,tsType:{name:"string"},description:""},buttons:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label?: string;
  icon?: string;
  onClick?: () => void;
  disabled?: boolean;
  kind?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "ghost"
    | "dangerPrimary"
    | "dangerTertiary"
    | "dangerGhost";
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"icon",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"kind",value:{name:"union",raw:`| "primary"
| "secondary"
| "tertiary"
| "ghost"
| "dangerPrimary"
| "dangerTertiary"
| "dangerGhost"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"ghost"'},{name:"literal",value:'"dangerPrimary"'},{name:"literal",value:'"dangerTertiary"'},{name:"literal",value:'"dangerGhost"'}],required:!1}}]}}],raw:"IbuttonProps[]"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},backgroundModal:{required:!1,tsType:{name:"string"},description:""}}};export{R as M};
