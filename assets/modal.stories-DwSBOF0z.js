import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as m}from"./index-CTjT7uj6.js";import{B as C}from"./index-43QVy7Gz.js";import{C as q}from"./IconsInputLabel-PpPdO3Ft.js";import{d as i,t as s}from"./contextual-Cr4fQ3MC.js";/* empty css              */import"./index-ClYmvwGD.js";/* empty css                 */const z=i.div`
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
`,L=i.div`
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
    width: 80%;
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
`,E=i.div`
  width: 93%;
  margin: 0px auto;
  padding: 0;
  height: 310px;
  overflow-y: auto;
`,B=i.div`
  padding: 0;
  margin: 0;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  border: 2px solid transparent;
`,M=i.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  box-sizing: border-box;
  flex-direction: row;
  padding: 0;
  gap: 1px;
`,R=i.div`
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
`,$=i.button`
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
`,S=i.div`
  padding: 0.8em 0 0.5em 1em;
  width: 90%;
`,P=i.h3`
  padding: 0;
  margin: 0;
  font-size: 15px;
  word-wrap: break-word;
  width: 95%;
`,_=i.p`
  padding: 0;
  margin: 0;
  font-size: 14px;
  width: 95%;
  word-wrap: break-word;
`,h=n=>{const{label:f,textLabel:y,buttons:o,type:v,open:w,children:k,backgroundModal:j,onClose:t}=n,[c,u]=m.useState(!1),l=m.useRef(null),p=r=>{l.current&&!l.current.contains(r.target)&&(u(!1),t==null||t())};m.useEffect(()=>(document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)}),[w]);const T=(r,a)=>a===0&&o.length===3?"70%":"50%";return e.jsx(e.Fragment,{children:e.jsx(z,{backgroundModal:j,open:c,...n,children:e.jsxs(L,{open:c,ref:l,...n,children:[e.jsxs(R,{children:[e.jsxs(S,{children:[e.jsx(P,{children:f}),e.jsx(_,{children:y})]}),e.jsx($,{onClick:()=>{u(!1),t==null||t()},children:q})]}),e.jsx(B,{children:e.jsx(E,{children:k||e.jsx(e.Fragment,{})})}),e.jsx(M,{children:o==null?void 0:o.map((r,a)=>e.jsx("div",{style:{width:T(r,a),boxSizing:"border-box"},children:e.jsx(C,{forModal:!0,size:"large",kind:r.kind||"secondary",label:r.label,icon:r.icon,disabled:r.disabled,onClick:r.onClick,type:v,style:{borderRadius:a===o.length-1?"0 0 8px 0":a===0?"0 0 0 8px":"0",boxSizing:"border-box"}})},a))})]})})})};h.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{label:{required:!1,tsType:{name:"string"},description:""},textLabel:{required:!1,tsType:{name:"string"},description:""},buttons:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| "dangerGhost"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"ghost"'},{name:"literal",value:'"dangerPrimary"'},{name:"literal",value:'"dangerTertiary"'},{name:"literal",value:'"dangerGhost"'}],required:!1}}]}}],raw:"IbuttonProps[]"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},backgroundModal:{required:!1,tsType:{name:"string"},description:""}}};const J={title:"Example/Modal",component:h,parameters:{layout:"centered"},tags:["autodocs"]},A=[{label:"Button 1",kind:"secondary"},{label:"Button 3",kind:"ghost",onClick:()=>alert("Button 3")}],d={args:{label:"Titulo de Exemplo",textLabel:"Lorem ipsum dolosmod tempor incididunt ut labore em ad minim veniam.re em ad minim veniare em ad minim veniare em ad minim veniadidunt ut labore em ad minim veniam.re em ad minim veniare em ad minim veniare em ad minim veni",buttons:A,open:!0}};var g,x,b;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Titulo de Exemplo",
    textLabel: "Lorem ipsum dolosmod tempor incididunt ut labore em ad minim veniam.re em ad minim veniare em ad minim veniare em ad minim veniadidunt ut labore em ad minim veniam.re em ad minim veniare em ad minim veniare em ad minim veni",
    buttons: ArrayTest,
    open: true
  }
}`,...(b=(x=d.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const K=["modal"];export{K as __namedExportsOrder,J as default,d as modal};
