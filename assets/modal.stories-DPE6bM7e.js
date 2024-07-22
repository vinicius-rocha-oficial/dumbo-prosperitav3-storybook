import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as u}from"./index-CTjT7uj6.js";import{B as T}from"./index-CMqduQi4.js";import{C as j}from"./IconsInputLabel-NZUeNpyL.js";import{d as n,t as s}from"./contextual-Cr4fQ3MC.js";/* empty css              */import"./index-ClYmvwGD.js";/* empty css                 */const C=n.div`
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
`,q=n.div`
  background: ${s.layer01};
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border-radius: 0px 0px 8px 8px;
  padding: 0;
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
`,S=n.div`
  width: 93%;
  margin: 0px auto;
  padding: 0;
  height: 310px;
`,z=n.div`
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
`,$=n.button`
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
  background: ${s.layer01};
  &:focus {
    border: 3px solid ${s.focus};
  }
  &:hover {
    background: ${s.fieldHover01};
  }
`,M=n.div`
  padding: 0.8em 0 0.5em 1em;
  width: 90%;
`,L=n.h3`
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
`,y=i=>{const{hearders:t,buttons:d,type:h,open:v,children:w,onClose:a}=i,[c,p]=u.useState(!1),m=u.useRef(null),g=r=>{m.current&&!m.current.contains(r.target)&&(p(!1),a==null||a())};u.useEffect(()=>(document.addEventListener("mousedown",g),()=>{document.removeEventListener("mousedown",g)}),[v]);const k=(r,o)=>o===0&&d.length===3?"70%":"50%";return e.jsx(e.Fragment,{children:e.jsx(C,{open:c,...i,children:e.jsxs(q,{open:c,ref:m,...i,children:[e.jsxs(R,{children:[e.jsxs(M,{children:[e.jsx(L,{children:t==null?void 0:t.title}),e.jsx(P,{children:t==null?void 0:t.SubTitle})]}),e.jsx($,{onClick:()=>{p(!1),a==null||a()},children:j})]}),e.jsx(z,{children:e.jsx(S,{children:w})}),e.jsx(E,{children:d==null?void 0:d.map((r,o)=>e.jsx("div",{style:{width:k(r,o),boxSizing:"border-box"},children:e.jsx(T,{forModal:!0,size:"large",kind:r.kind||"secondary",label:r.label,url:r.icon,disabled:r.disabled,onClick:r.onClick,type:h,style:{borderRadius:o===d.length-1?"0 0 8px 0":o===0?"0 0 0 8px":"0",boxSizing:"border-box"}})},o))})]})})})};y.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{hearders:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  title?: string;
  SubTitle?: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!1}},{key:"SubTitle",value:{name:"string",required:!1}}]}},description:""},buttons:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| "dangerGhost"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"ghost"'},{name:"literal",value:'"dangerPrimary"'},{name:"literal",value:'"dangerTertiary"'},{name:"literal",value:'"dangerGhost"'}],required:!1}}]}}],raw:"IbuttonProps[]"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const F={title:"Example/Modal",component:y,parameters:{layout:"centered"},tags:["autodocs"]},A=[{label:"Cancelar",kind:"secondary"},{label:"Adcionar",kind:"primary"}],l={args:{hearders:{title:"Titulo de Exemplo",SubTitle:"Lorem ipsum dolosmod tempor incididunt ut labore em ad minim veniam.re em ad minim veniare em ad minim veniare em ad minim veniadidunt ut labore em ad minim veniam.re em ad minim veniare em ad minim veniare em ad minim veni"},buttons:A,open:!0}};var x,b,f;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    hearders: {
      title: "Titulo de Exemplo",
      SubTitle: "Lorem ipsum dolosmod tempor incididunt ut labore em ad minim veniam.re em ad minim veniare em ad minim veniare em ad minim veniadidunt ut labore em ad minim veniam.re em ad minim veniare em ad minim veniare em ad minim veni"
    },
    buttons: ArrayTest,
    open: true
  }
}`,...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const D=["modal"];export{D as __namedExportsOrder,F as default,l as modal};
