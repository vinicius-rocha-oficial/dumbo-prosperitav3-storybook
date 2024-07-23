import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as m}from"./index-CTjT7uj6.js";import{B as T}from"./index-BLZCcoMT.js";import{C}from"./IconsInputLabel-52Ne2R0n.js";import{d as n,t as s}from"./contextual-Cr4fQ3MC.js";/* empty css              */import"./index-ClYmvwGD.js";/* empty css                 */const q=n.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${({open:i})=>i?"visible)":"hidden"};
  opacity: ${({open:i})=>i?"1":"0"};
  transition: 0.2s linear all;
  z-index: 10;
`,z=n.div`
  background: ${s.layer01};
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  padding: 0;
  height: auto;
  transform: ${({open:i})=>i?"translateY(0)":"translateY(-100px)"};
  transition: 0.2s linear all;
  @media (min-width: 400px) {
    width: 400px;
  }
  @media (min-width: 500px) {
    width: 500px;
  }
  @media (min-width: 700px) {
    width: 600px;
  }
  @media (min-width: 1000px) {
    width: 800px;
  }
`,L=n.div`
  width: 93%;
  margin: 0px auto;
  padding: 0;
  height: 310px;
`,B=n.div`
  padding: 0;
  margin: 0;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  border: 2px solid transparent;
`,E=n.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  box-sizing: border-box;
  flex-direction: row;
  padding: 0;
  gap: 1px;
`,R=n.div`
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
`,M=n.button`
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
`,S=n.div`
  padding: 0.8em 0 0.5em 1em;
  width: 90%;
`,$=n.h3`
  padding: 0;
  margin: 0;
  font-size: 15px;
  word-wrap: break-word;
  width: 95%;
`,P=n.p`
  padding: 0;
  margin: 0;
  font-size: 14px;
  width: 95%;
  word-wrap: break-word;
`,f=i=>{const{label:h,textLabel:y,buttons:o,type:v,open:w,children:k,onClose:t}=i,[c,p]=m.useState(!1),l=m.useRef(null),u=r=>{l.current&&!l.current.contains(r.target)&&(p(!1),t==null||t())};m.useEffect(()=>(document.addEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}),[w]);const j=(r,a)=>a===0&&o.length===3?"70%":"50%";return e.jsx(e.Fragment,{children:e.jsx(q,{open:c,...i,children:e.jsxs(z,{open:c,ref:l,...i,children:[e.jsxs(R,{children:[e.jsxs(S,{children:[e.jsx($,{children:h}),e.jsx(P,{children:y})]}),e.jsx(M,{onClick:()=>{p(!1),t==null||t()},children:C})]}),e.jsx(B,{children:e.jsx(L,{children:k||e.jsx(e.Fragment,{})})}),e.jsx(E,{children:o==null?void 0:o.map((r,a)=>e.jsx("div",{style:{width:j(r,a),boxSizing:"border-box"},children:e.jsx(T,{forModal:!0,size:"large",kind:r.kind||"secondary",label:r.label,icon:r.icon,disabled:r.disabled,onClick:r.onClick,type:v,style:{borderRadius:a===o.length-1?"0 0 8px 0":a===0?"0 0 0 8px":"0",boxSizing:"border-box"}})},a))})]})})})};f.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{label:{required:!1,tsType:{name:"string"},description:""},textLabel:{required:!1,tsType:{name:"string"},description:""},buttons:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| "dangerGhost"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"ghost"'},{name:"literal",value:'"dangerPrimary"'},{name:"literal",value:'"dangerTertiary"'},{name:"literal",value:'"dangerGhost"'}],required:!1}}]}}],raw:"IbuttonProps[]"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const D={title:"Example/Modal",component:f,parameters:{layout:"centered"},tags:["autodocs"]},_=[{label:"Button 1",kind:"secondary"},{label:"Button 2",kind:"primary"},{label:"Button 3",kind:"ghost",onClick:()=>alert("Button 3")}],d={args:{label:"Titulo de Exemplo",textLabel:"Lorem ipsum dolosmod tempor incididunt ut labore em ad minim veniam.re em ad minim veniare em ad minim veniare em ad minim veniadidunt ut labore em ad minim veniam.re em ad minim veniare em ad minim veniare em ad minim veni",buttons:_,open:!0}};var g,x,b;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Titulo de Exemplo",
    textLabel: "Lorem ipsum dolosmod tempor incididunt ut labore em ad minim veniam.re em ad minim veniare em ad minim veniare em ad minim veniadidunt ut labore em ad minim veniam.re em ad minim veniare em ad minim veniare em ad minim veni",
    buttons: ArrayTest,
    open: true
  }
}`,...(b=(x=d.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const J=["modal"];export{J as __namedExportsOrder,D as default,d as modal};
