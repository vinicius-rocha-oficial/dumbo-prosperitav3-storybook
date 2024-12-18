import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as s}from"./index-CTjT7uj6.js";import{d as a}from"./styled-components.browser.esm-D3-gLipQ.js";import{t as i}from"./contextual-D4vCP4YA.js";/* empty css              */import{C as re,g as ae}from"./IconsInputLabel-E66WMmAT.js";import{w as le}from"./Warningfilled-CR6tEm8M.js";import{S as oe,a as b}from"./index-ClYmvwGD.js";import{I as se}from"./index-DjhAGHle.js";import{M as de}from"./index-BWpZ9SSP.js";import"./index-rNDKbjlC.js";import"./index-vCHOC0t6.js";/* empty css                 */import"./index-UMtQnabN.js";const Y={small:"7px 64px 7px 16px",large:"15px 64px 15px 16px",medium:"11px 64px 11px 16px"},E=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;
  width: 100%;
`,h=a.input`
  display: none;
`,P=a.label`
  border-radius: 8px;
  background-color: ${({disabled:e})=>e?i.buttonDisabled:i.buttonPrimary};
  padding: ${({size:e})=>e&&Y[e||"medium"]};
  color: white;
  align-self: start;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  box-sizing: border-box;
  font-family: IBM Plex Sans;
  position: ${({loading:e})=>e&&"relative"};
  &:hover {
    background-color: ${({disabled:e})=>e?i.buttonDisabled:i.buttonPrimaryHover};
  }
`,U=a.label`
  background-color: transparent;
  font-family: IBM Plex Sans;
  width: 100%;
  color: ${({disabled:e})=>e?i.buttonDisabled:i.focus};
  border-radius: 8px;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  border: ${({on:e,disabled:d,loading:c})=>e?`1px solid ${i.interactive}`:d?"1px solid gray":c?"":`1px dashed ${i.borderStrong01}`};
  &:hover {
    border: ${({disabled:e,loading:d})=>e?"1px solid gray":d?"":`1px solid ${i.interactive}`};
  }
`,M=a.p`
  padding: 2px 3em 4em 20px;
  text-align: left;
  width: 100%;
  word-wrap: break-word;
  box-sizing: border-box;
  &:hover {
    text-decoration: ${({disabled:e})=>!e&&"underline"};
  }
`,ce=a.ul`
  list-style-type: none;
  padding: 0;
  margin: 10px 0;
  width: 100%;
`,pe=a.li`
  background-color: ${i.layer01};
  border: ${({error:e})=>e?`2px solid ${i.supportError}`:"1px solid #ddd"};
  border-radius: ${({error:e})=>e?"8px":"4px"};
  color: ${({disabled:e})=>e?i.buttonDisabled:i.textPrimary};
  padding: ${({size:e})=>e&&Y[e]};
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
`,me=a.span`
  color: ${i.textPrimary};
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-left:1em;
  letter-spacing: 0.16px; 
`,xe=a.button`
  color: ${i.iconPrimary};
  border: 0;
  cursor: pointer;
  box-sizing: border-box;
  font-size: 2px;
  align-self: end;
  margin: 0;
  background: transparent;
  padding: 0;
  &:focus {
    outline: 2px solid ${i.focus};
  }
`,ge=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,ue=a.div`
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  align-items: center;
  width: auto;
  margin: 0 11px 0 0;
  gap: 7px;
`,fe=a.span`
  display: flex;
  cursor: pointer;
`,be=a.p`
  margin: 0.6em 1em 0 1em;
  padding: 0;
  width: 100%;
  color: ${i.textError};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
  letter-spacing: 0.32px;
  width: 300px;
`,he=a.p`
  margin: 0.8em 0 0 1em;
  padding: 0;
  width: 100%;
  color: ${i.textPrimary};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
  letter-spacing: 0.32px;
  min-width: 300px;
`,O=a.p`
  color: ${({disabled:e})=>e?i.buttonDisabled:i.textSecondary};
  position: ${({loading:e})=>e&&"relative"};
  margin: 0;
  align-self: start;
  word-wrap: break-word;
  width: 100%;
`,N=a.div`
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
`,R=a.p`
  color: ${({disabled:e})=>e?i.buttonDisabled:i.textPrimary};
  position: ${({loading:e})=>e&&"relative"};
  margin: 0;
  align-self: start;
  width: 100%;
  word-wrap: break-word;
`,B=a.div`
  display: flex;
  align-self: start;
  margin: 0;
`,y={position:"absolute",right:"0",bottom:"0",left:"0",top:"0",display:"flex",margin:"0"},G=e=>{const{type:d,onChange:c,onDelete:S,disabled:w,maxlenghtindividual:v,errormessege:p,accept:g,loading:J,multiple:F,headers:r,name:T,children:u,clearFiles:L,view:K}=e,[m,f]=s.useState([]),[Q,$]=s.useState(!1),[V,q]=s.useState([]),[W,D]=s.useState(!1),[k,X]=s.useState(null),Z=n=>{const l=m[n];l&&(X(URL.createObjectURL(l)),D(!0))},z=n=>{n.stopPropagation();const l=Array.from(n.target.files||[]);f(o=>{const x=l.filter(I=>!o.some(C=>C.name===I.name));return[...o,...x]}),c&&c(n)},ee=n=>{f(l=>l.filter((o,x)=>x!==n)),q(l=>l.filter(o=>o!==n)),S&&S(n)},te=n=>{n.preventDefault(),$(!0)},ne=()=>{$(!1)},ie=n=>{n.preventDefault(),$(!1);const l=Array.from(n.dataTransfer.files);if(f(o=>{const x=l.filter(I=>!o.some(C=>C.name===I.name));return[...o,...x]}),c){const o={...n,target:{files:n.dataTransfer.files}};c(o)}};return s.useEffect(()=>{const n=setTimeout(()=>{q(()=>[...m.filter(o=>o.name).map(o=>o.name)])},500);return()=>clearTimeout(n)},[m]),s.useEffect(()=>{L&&f([])},[L]),t.jsx(t.Fragment,{children:J?t.jsx(t.Fragment,{children:t.jsxs(oe,{baseColor:i.skeletonElement,highlightColor:i.skeletonBackground,children:[((r==null?void 0:r.label)||(r==null?void 0:r.TextLabel))&&t.jsxs(N,{...e,children:[t.jsx(B,{children:t.jsxs(R,{style:{position:"relative"},...e,children:[r==null?void 0:r.label,t.jsx(b,{count:1,style:y})]})}),t.jsx(B,{children:t.jsxs(O,{style:{position:"relative"},...e,children:[r==null?void 0:r.TextLabel,t.jsx(b,{count:1,style:y})]})})]}),t.jsx(E,{...e,children:d==="default"?t.jsxs(P,{...e,children:[u,t.jsx(h,{}),t.jsx(b,{count:1,style:y})]}):t.jsxs(U,{...e,style:{position:"relative"},children:[t.jsx(M,{...e,children:u}),t.jsx(h,{}),t.jsx(b,{count:1,style:y})]})})]})}):t.jsxs(t.Fragment,{children:[((r==null?void 0:r.label)||(r==null?void 0:r.TextLabel))&&t.jsxs(N,{...e,children:[t.jsx(R,{...e,children:r==null?void 0:r.label}),t.jsx(O,{...e,children:r==null?void 0:r.TextLabel})]}),t.jsxs(E,{...e,children:[d==="default"?t.jsxs(P,{...e,children:[u,t.jsx(h,{accept:g,type:"file",onChange:z,multiple:F,disabled:w,name:T})]}):t.jsxs(U,{...e,onDragOver:te,onDragLeave:ne,onDrop:ie,on:Q,disabled:w,accept:g,name:T,multiple:F,children:[t.jsx(M,{...e,children:u}),t.jsx(h,{accept:g,type:"file",onChange:z,disabled:w,name:T,multiple:F})]}),t.jsxs(ce,{...e,children:[m.map((n,l)=>t.jsxs(pe,{error:Number((n.size/(1024*1024)).toFixed(5))>=v,...e,children:[t.jsxs(ge,{...e,children:[t.jsx(me,{children:n.name}),t.jsxs(ue,{...e,children:[t.jsx(xe,{children:V.includes(n.name)?t.jsx("span",{onClick:()=>ee(l),children:re}):t.jsx(se,{status:"active"})}),K&&t.jsx(fe,{onClick:()=>Z(l),...e,children:ae}),Number((n.size/(1024*1024)).toFixed(5))>=v&&t.jsx("img",{src:le})]})]}),Number((n.size/(1024*1024)).toFixed(5))>=v&&t.jsxs("div",{style:{margin:"13px 0 0 0",padding:"0",borderTop:`1px solid ${i.borderStrong01}`,width:"100%"},children:[t.jsx(he,{children:p==null?void 0:p.label}),t.jsx(be,{children:p==null?void 0:p.InvalidText})]},l)]},n.name)),m.length>0&&t.jsx(de,{buttons:[{label:"Fechar",kind:"dangerPrimary",onClick:()=>D(!1)}],open:W,onClose:()=>D(!1),children:k&&t.jsx(t.Fragment,{children:g===".pdf"?t.jsx(t.Fragment,{children:t.jsx("iframe",{src:k,style:{overflowY:"hidden",width:"100%",height:"100%",border:0,display:"flex",justifyContent:"center",alignItems:"center"}})}):t.jsx(t.Fragment,{children:t.jsx("img",{style:{width:"100%",height:"100%",objectFit:"contain"},src:k})})})})]})]})]})})};G.__docgenInfo={description:"",methods:[],displayName:"FileUploader",props:{size:{required:!0,tsType:{name:"union",raw:'"small" | "large" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"large"'},{name:"literal",value:'"medium"'}]},description:""},type:{required:!0,tsType:{name:"union",raw:'"drag and top" | "default"',elements:[{name:"literal",value:'"drag and top"'},{name:"literal",value:'"default"'}]},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},on:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},errormessege:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  label?: string;\r
  InvalidText?: string;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"InvalidText",value:{name:"string",required:!1}}]}},description:""},maxlenghtindividual:{required:!0,tsType:{name:"number"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:""},headers:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  label: string;\r
  TextLabel: string;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"TextLabel",value:{name:"string",required:!0}}]}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},clearFiles:{required:!1,tsType:{name:"boolean"},description:""},view:{required:!1,tsType:{name:"boolean"},description:""}}};const ze={title:"Example/FileUploader",component:G,parameters:{layout:"centered"},tags:["autodocs"]},j={args:{size:"large",maxlenghtindividual:3e-4,type:"drag and top",accept:".jpg",headers:{label:"Upload files",TextLabel:"Max file size is 0.0003. Supported file types are .jpg and .png."},errormessege:{label:"File exceeds size limit.",InvalidText:"Optional secondary explanation that can go on for two lines."},children:"Drag and Drop Exemplo File"}};var _,A,H;j.parameters={...j.parameters,docs:{...(_=j.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: "large",
    maxlenghtindividual: 0.0003,
    type: "drag and top",
    accept: ".jpg",
    headers: {
      label: "Upload files",
      TextLabel: "Max file size is 0.0003. Supported file types are .jpg and .png."
    },
    errormessege: {
      label: "File exceeds size limit.",
      InvalidText: "Optional secondary explanation that can go on for two lines."
    },
    children: \`Drag and Drop Exemplo File\`
  }
}`,...(H=(A=j.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};const Ee=["fileUploader"];export{Ee as __namedExportsOrder,ze as default,j as fileUploader};
