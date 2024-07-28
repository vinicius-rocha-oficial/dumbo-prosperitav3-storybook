import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as S}from"./index-CTjT7uj6.js";import{d as a,t as n}from"./contextual-Cr4fQ3MC.js";/* empty css              */import{C as W}from"./IconsInputLabel-PpPdO3Ft.js";import{w as X}from"./Warningfilled-CR6tEm8M.js";import{S as Y,a as x}from"./index-ClYmvwGD.js";const R={small:"7px 64px 7px 16px",large:"15px 64px 15px 16px",medium:"11px 64px 11px 16px"},q=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;
  width: 100%;
`,g=a.input`
  display: none;
`,z=a.label`
  border-radius: 8px;
  background-color: ${({disabled:e})=>e?n.buttonDisabled:n.buttonPrimary};
  padding: ${({size:e})=>e&&R[e||"medium"]};
  color: white;
  align-self: start;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  box-sizing: border-box;
  font-family: IBM Plex Sans;
  position: ${({loading:e})=>e&&"relative"};
  &:hover {
    background-color: ${({disabled:e})=>e?n.buttonDisabled:n.buttonPrimaryHover};
  }
`,L=a.label`
  background-color: transparent;
  font-family: IBM Plex Sans;
  width: 100%;
  color: ${({disabled:e})=>e?n.buttonDisabled:n.focus};
  border-radius: 8px;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  border: ${({on:e,disabled:s,loading:d})=>e?`1px solid ${n.interactive}`:s?"1px solid gray":d?"":`1px dashed ${n.borderStrong01}`};
  &:hover {
    border: ${({disabled:e,loading:s})=>e?"1px solid gray":s?"":`1px solid ${n.interactive}`};
  }
`,P=a.p`
  padding: 2px 3em 4em 20px;
  text-align: left;
  width: 100%;
  word-wrap: break-word;
  box-sizing: border-box;
  &:hover {
    text-decoration: ${({disabled:e})=>!e&&"underline"};
  }
`,Z=a.ul`
  list-style-type: none;
  padding: 0;
  margin: 10px 0;
  width: 100%;
`,ee=a.li`
  background-color: ${n.layer01};
  border: ${({error:e})=>e?`2px solid ${n.supportError}`:"1px solid #ddd"};
  border-radius: ${({error:e})=>e?"8px":"4px"};
  color: ${({disabled:e})=>e?n.buttonDisabled:n.textPrimary};
  padding: ${({size:e})=>e&&R[e]};
  padding-right: 0em;
  padding-left: 0em;
  padding-bottom: ${({error:e})=>e&&".7em"};
  display: flex;
  box-sizing: border-box;
  width: 100%;
  justify-content: space-between;
  flex-direction: ${({error:e})=>e?"column":"row"};
  align-items: center;
  margin: 5px 0;
`,te=a.span`
  color: ${n.textPrimary};
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400
  line-height: 18px;
  margin-left:1em;
  letter-spacing: 0.16px; 
`,ne=a.button`
  color: ${n.iconPrimary};
  border: 0;
  cursor: pointer;
  box-sizing: border-box;
  font-size: 2px;
  align-self: end;
  margin: 0 5em 0 0;
  background: transparent;
  padding: 0;
  &:focus {
    outline: 2px solid ${n.focus};
  }
`,ie=a.p`
  margin: 0.6em 1em 0 1em;
  padding: 0;
  width: 100%;
  color: ${n.textError};
  font-family: "IBM Plex Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
  letter-spacing: 0.32px;
  width: 300px;
`,re=a.p`
  margin: 0.8em 0 0 1em;
  padding: 0;
  width: 100%;
  color: ${n.textPrimary};
  font-family: "IBM Plex Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
  letter-spacing: 0.32px;
  min-width: 300px;
`,ae=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
`,C=a.p`
  color: ${({disabled:e})=>e?n.buttonDisabled:n.textSecondary};
  position: ${({loading:e})=>e&&"relative"};
  margin: 0;
  align-self: start;
  word-wrap: break-word;
  width: 100%;
`,E=a.div`
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.16px;
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin-bottom: 10px;
`,B=a.p`
  color: ${({disabled:e})=>e?n.buttonDisabled:n.textPrimary};
  position: ${({loading:e})=>e&&"relative"};
  margin: 0;
  align-self: start;
  width: 100%;
  word-wrap: break-word;
`,M=a.div`
  display: flex;
  align-self: start;
  margin: 0;
`,_=e=>{const{type:s,onChange:d,onDelete:F,disabled:f,maxIndividualFileLenght:b,errorMessege:p,accept:y,loading:V,multiple:h,headers:i,name:w,children:D,buttonValue:I}=e,[A,j]=S.useState([]),[H,v]=S.useState(!1),k=r=>{r.stopPropagation();const l=Array.from(r.target.files||[]);j(o=>{const c=l.filter(T=>!o.some($=>$.name===T.name));return[...o,...c]}),d&&d(r)},G=r=>{j(l=>l.filter((o,c)=>c!==r)),F&&F(r)},J=r=>{r.preventDefault(),v(!0)},K=()=>{v(!1)},Q=r=>{r.preventDefault(),v(!1);const l=Array.from(r.dataTransfer.files);if(j(o=>{const c=l.filter(T=>!o.some($=>$.name===T.name));return[...o,...c]}),d){const o={...r,target:{files:r.dataTransfer.files}};d(o)}},m={position:"absolute",right:"0",bottom:"0",left:"0",top:"0",display:"flex",margin:"0"};return t.jsx(t.Fragment,{children:V?t.jsx(t.Fragment,{children:t.jsxs(Y,{baseColor:n.skeletonElement,highlightColor:n.skeletonBackground,children:[((i==null?void 0:i.label)||(i==null?void 0:i.TextLabel))&&t.jsxs(E,{...e,children:[t.jsx(M,{children:t.jsxs(B,{style:{position:"relative"},...e,children:[i==null?void 0:i.label,t.jsx(x,{count:1,style:m})]})}),t.jsx(M,{children:t.jsxs(C,{style:{position:"relative"},...e,children:[i==null?void 0:i.TextLabel,t.jsx(x,{count:1,style:m})]})})]}),t.jsx(q,{...e,children:s==="default"?t.jsxs(z,{...e,children:[I,t.jsx(g,{}),t.jsx(x,{count:1,style:m})]}):t.jsxs(L,{...e,style:{position:"relative"},children:[t.jsx(P,{...e,children:D}),t.jsx(g,{}),t.jsx(x,{count:1,style:m})]})})]})}):t.jsxs(t.Fragment,{children:[((i==null?void 0:i.label)||(i==null?void 0:i.TextLabel))&&t.jsxs(E,{...e,children:[t.jsx(B,{...e,children:i==null?void 0:i.label}),t.jsx(C,{...e,children:i==null?void 0:i.TextLabel})]}),t.jsxs(q,{...e,children:[s==="default"?t.jsxs(z,{...e,children:[I,t.jsx(g,{accept:y,type:"file",onChange:k,multiple:h,disabled:f,name:w})]}):t.jsxs(L,{...e,onDragOver:J,onDragLeave:K,onDrop:Q,on:H,disabled:f,accept:y,name:w,multiple:h,children:[t.jsx(P,{...e,children:D}),t.jsx(g,{accept:y,type:"file",onChange:k,disabled:f,name:w,multiple:h})]}),t.jsx(Z,{...e,children:A.map((r,l)=>t.jsxs(ee,{error:Number((r.size/(1024*1024)).toFixed(5))>=b,...e,children:[t.jsxs(ae,{...e,children:[t.jsx(te,{children:r.name},l),t.jsx(ne,{onClick:()=>G(l),children:W}),Number((r.size/(1024*1024)).toFixed(5))>=b&&t.jsx("img",{src:X,style:{position:"absolute",top:"2.5px",right:"30px"}})]}),Number((r.size/(1024*1024)).toFixed(5))>=b&&t.jsx(t.Fragment,{children:t.jsxs("div",{style:{margin:"13px 0 0 0",padding:"0",borderTop:`1px solid ${n.borderStrong01}`,width:"100%"},children:[t.jsx(re,{children:p==null?void 0:p.label},l),t.jsx(ie,{children:p==null?void 0:p.InvalidText},l)]},l)})]},l))})]})]})})};_.__docgenInfo={description:"",methods:[],displayName:"FileUploader",props:{size:{required:!0,tsType:{name:"union",raw:'"small" | "large" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"large"'},{name:"literal",value:'"medium"'}]},description:""},type:{required:!0,tsType:{name:"union",raw:'"drag and top" | "default"',elements:[{name:"literal",value:'"drag and top"'},{name:"literal",value:'"default"'}]},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},on:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},errorMessege:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  label?: string;
  InvalidText?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"InvalidText",value:{name:"string",required:!1}}]}},description:""},maxIndividualFileLenght:{required:!0,tsType:{name:"number"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:""},headers:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  label: string;
  TextLabel: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"TextLabel",value:{name:"string",required:!0}}]}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},buttonValue:{required:!1,tsType:{name:"string"},description:""}}};const xe={title:"Example/FileUploader",component:_,parameters:{layout:"centered"},tags:["autodocs"]},u={args:{size:"large",maxIndividualFileLenght:3e-4,type:"drag and top",accept:".jpg",headers:{label:"Upload files",TextLabel:"Max file size is 0.0003. Supported file types are .jpg and .png."},errorMessege:{label:"File exceeds size limit.",InvalidText:"Optional secondary explanation that can go on for two lines."},children:"Drag and Drop Exemplo File",buttonValue:"Button 1"}};var U,N,O;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    size: "large",
    maxIndividualFileLenght: 0.0003,
    type: "drag and top",
    accept: ".jpg",
    headers: {
      label: "Upload files",
      TextLabel: "Max file size is 0.0003. Supported file types are .jpg and .png."
    },
    errorMessege: {
      label: "File exceeds size limit.",
      InvalidText: "Optional secondary explanation that can go on for two lines."
    },
    children: \`Drag and Drop Exemplo File\`,
    buttonValue: "Button 1"
  }
}`,...(O=(N=u.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const ge=["fileUploader"];export{ge as __namedExportsOrder,xe as default,u as fileUploader};
