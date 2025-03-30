import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as T}from"./index-CTjT7uj6.js";import{T as m}from"./index-QvF-XS6I.js";import{d as j}from"./styled-components.browser.esm-D3-gLipQ.js";/* empty css              */import{t as a}from"./contextual-D4vCP4YA.js";import{M as w}from"./index-DX7R80t1.js";const M={center:"center",right:"end",left:"start"},q=j.button`
  color: ${a.textSecondary};
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.16px;
  outline: none;
  background: transparent;
  border: 0;
  cursor: pointer;
  white-space: nowrap;  
  display:flex;
  gap:10px;
  position:relative,
  border:none;
  width:100%;
  justify-content:${({position:t})=>t?M[t]:"start"}
`,i=({padding:t,position:n,width:l,bordercolor:p,icon:c,children:y,label:d,onClick:b,isActive:r,disabled:u,bottom:o})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",margin:"0",padding:"0",width:l||"100%"},children:[e.jsxs(q,{disabled:u,width:l,isActive:r,label:d,position:n,onClick:()=>b(),style:{fontWeight:r?"600":"300",fontFamily:"IBM Plex Sans",color:r?a.textPrimary:"",padding:t||".7em",border:"none",borderTop:r&&o&&`3px solid ${p}`,borderBottom:r&&!o?`2px solid ${p}`:"2px solid transparent",cursor:"pointer",zIndex:"1",transition:"border-bottom 0.3s ease-in-out",opacity:u?".7":"1",backgroundColor:r&&o&&a.layer01||o&&a.layerAccent01},children:[d,c&&e.jsx("img",{src:c,alt:d})]}),r&&e.jsx("div",{style:{margin:"0",padding:"0",height:"100%",display:"flex",background:"red",justifyContent:"flex-start",alignItems:"flex-start",width:"100%"},children:e.jsx("div",{style:{width:"100%",display:"flex",justifyContent:"flex-start",alignItems:"flex-start",position:"absolute",left:"0",right:"0"},children:y})})]});i.__docgenInfo={description:"",methods:[],displayName:"TabPane",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isActive:{required:!0,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"string"},description:""},bordercolor:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},position:{required:!1,tsType:{name:"union",raw:'"center" | "right" | "left"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"right"'},{name:"literal",value:'"left"'}]},description:""},padding:{required:!1,tsType:{name:"string"},description:""},bottom:{required:!1,tsType:{name:"boolean"},description:""}}};const h=()=>{const[t,n]=T.useState("menu1");return e.jsxs("div",{children:[e.jsxs(m,{width:"800px",children:[e.jsx(i,{isActive:t==="menu1",label:"Menu 1",bordercolor:"purple",position:"center",padding:"10px",width:"200px",onClick:()=>{n("menu1")},children:"Menu 1"}),e.jsx(i,{isActive:t==="menu2",label:"Menu 2",bordercolor:"purple",position:"center",padding:"10px",width:"200px",onClick:()=>{n("menu2")},children:"Menu 2"})]}),e.jsx(w,{top:50}),e.jsxs(m,{width:"800px",children:[e.jsx(i,{bottom:!0,isActive:t==="menu1",label:"Menu 1",bordercolor:"purple",position:"center",padding:"10px",width:"200px",onClick:()=>{n("menu1")},children:"Menu 1"}),e.jsx(i,{bottom:!0,isActive:t==="menu2",label:"Menu 2",bordercolor:"purple",position:"center",padding:"10px",width:"200px",onClick:()=>{n("menu2")},children:"Menu 2"})]})]})};h.__docgenInfo={description:"",methods:[],displayName:"TabPanes"};const B={title:"Example/TabPanes",component:h,parameters:{layout:"centered"},tags:["autodocs"]},s={args:{}};var x,f,g;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {}
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const D=["Default"];export{s as Default,D as __namedExportsOrder,B as default};
