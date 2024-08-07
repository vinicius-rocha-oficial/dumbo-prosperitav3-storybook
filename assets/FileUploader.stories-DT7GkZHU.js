import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as p}from"./index-CTjT7uj6.js";import{d as a}from"./styled-components.browser.esm-D3-gLipQ.js";import{t as i}from"./contextual-D4vCP4YA.js";/* empty css              */import{C as ne,s as ie}from"./IconsInputLabel-BN6SsJn_.js";import{w as re}from"./Warningfilled-CR6tEm8M.js";import{S as ae,a as b}from"./index-ClYmvwGD.js";import{I as le}from"./index-IB_zQ72_.js";import{M as oe}from"./index-tto6T1pV.js";import"./index-rNDKbjlC.js";import"./index-rCqGT5OR.js";/* empty css                 */import"./index-Xcov-XKL.js";const H={small:"7px 64px 7px 16px",large:"15px 64px 15px 16px",medium:"11px 64px 11px 16px"},q=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;
  width: 100%;
`,h=a.input`
  display: none;
`,M=a.label`
  border-radius: 8px;
  background-color: ${({disabled:e})=>e?i.buttonDisabled:i.buttonPrimary};
  padding: ${({size:e})=>e&&H[e||"medium"]};
  color: white;
  align-self: start;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  box-sizing: border-box;
  font-family: IBM Plex Sans;
  position: ${({loading:e})=>e&&"relative"};
  &:hover {
    background-color: ${({disabled:e})=>e?i.buttonDisabled:i.buttonPrimaryHover};
  }
`,P=a.label`
  background-color: transparent;
  font-family: IBM Plex Sans;
  width: 100%;
  color: ${({disabled:e})=>e?i.buttonDisabled:i.focus};
  border-radius: 8px;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  border: ${({on:e,disabled:s,loading:d})=>e?`1px solid ${i.interactive}`:s?"1px solid gray":d?"":`1px dashed ${i.borderStrong01}`};
  &:hover {
    border: ${({disabled:e,loading:s})=>e?"1px solid gray":s?"":`1px solid ${i.interactive}`};
  }
`,E=a.p`
  padding: 2px 3em 4em 20px;
  text-align: left;
  width: 100%;
  word-wrap: break-word;
  box-sizing: border-box;
  &:hover {
    text-decoration: ${({disabled:e})=>!e&&"underline"};
  }
`,se=a.ul`
  list-style-type: none;
  padding: 0;
  margin: 10px 0;
  width: 100%;
`,de=a.li`
  background-color: ${i.layer01};
  border: ${({error:e})=>e?`2px solid ${i.supportError}`:"1px solid #ddd"};
  border-radius: ${({error:e})=>e?"8px":"4px"};
  color: ${({disabled:e})=>e?i.buttonDisabled:i.textPrimary};
  padding: ${({size:e})=>e&&H[e]};
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
`,ce=a.span`
  color: ${i.textPrimary};
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400
  line-height: 18px;
  margin-left:1em;
  letter-spacing: 0.16px; 
`,pe=a.button`
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
`,me=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,xe=a.div`
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  align-items: center;
  width: auto;
  margin: 0 11px 0 0;
  gap: 7px;
`,ge=a.span`
  display: flex;
  cursor: pointer;
`,ue=a.p`
  margin: 0.6em 1em 0 1em;
  padding: 0;
  width: 100%;
  color: ${i.textError};
  font-family: "IBM Plex Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
  letter-spacing: 0.32px;
  width: 300px;
`,fe=a.p`
  margin: 0.8em 0 0 1em;
  padding: 0;
  width: 100%;
  color: ${i.textPrimary};
  font-family: "IBM Plex Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
  letter-spacing: 0.32px;
  min-width: 300px;
`,U=a.p`
  color: ${({disabled:e})=>e?i.buttonDisabled:i.textSecondary};
  position: ${({loading:e})=>e&&"relative"};
  margin: 0;
  align-self: start;
  word-wrap: break-word;
  width: 100%;
`,O=a.div`
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
  color: ${({disabled:e})=>e?i.buttonDisabled:i.textPrimary};
  position: ${({loading:e})=>e&&"relative"};
  margin: 0;
  align-self: start;
  width: 100%;
  word-wrap: break-word;
`,N=a.div`
  display: flex;
  align-self: start;
  margin: 0;
`,Y=e=>{const{type:s,onChange:d,onDelete:S,disabled:j,maxlenghtindividual:w,errormessege:c,accept:g,loading:G,multiple:v,headers:r,name:F,children:u}=e,[m,T]=p.useState([]),[J,$]=p.useState(!1),[K,C]=p.useState([]),[Q,L]=p.useState(!1),[D,V]=p.useState(null),W=n=>{const l=m[n];l&&(V(URL.createObjectURL(l)),L(!0))};p.useEffect(()=>{const n=setTimeout(()=>{C(()=>[...m.filter(o=>o.name).map(o=>o.name)])},500);return()=>clearTimeout(n)},[m]);const z=n=>{n.stopPropagation();const l=Array.from(n.target.files||[]);T(o=>{const x=l.filter(I=>!o.some(k=>k.name===I.name));return[...o,...x]}),d&&d(n)},X=n=>{T(l=>l.filter((o,x)=>x!==n)),C(l=>l.filter(o=>o!==n)),S&&S(n)},Z=n=>{n.preventDefault(),$(!0)},ee=()=>{$(!1)},te=n=>{n.preventDefault(),$(!1);const l=Array.from(n.dataTransfer.files);if(T(o=>{const x=l.filter(I=>!o.some(k=>k.name===I.name));return[...o,...x]}),d){const o={...n,target:{files:n.dataTransfer.files}};d(o)}},f={position:"absolute",right:"0",bottom:"0",left:"0",top:"0",display:"flex",margin:"0"};return t.jsx(t.Fragment,{children:G?t.jsx(t.Fragment,{children:t.jsxs(ae,{baseColor:i.skeletonElement,highlightColor:i.skeletonBackground,children:[((r==null?void 0:r.label)||(r==null?void 0:r.TextLabel))&&t.jsxs(O,{...e,children:[t.jsx(N,{children:t.jsxs(B,{style:{position:"relative"},...e,children:[r==null?void 0:r.label,t.jsx(b,{count:1,style:f})]})}),t.jsx(N,{children:t.jsxs(U,{style:{position:"relative"},...e,children:[r==null?void 0:r.TextLabel,t.jsx(b,{count:1,style:f})]})})]}),t.jsx(q,{...e,children:s==="default"?t.jsxs(M,{...e,children:[u,t.jsx(h,{}),t.jsx(b,{count:1,style:f})]}):t.jsxs(P,{...e,style:{position:"relative"},children:[t.jsx(E,{...e,children:u}),t.jsx(h,{}),t.jsx(b,{count:1,style:f})]})})]})}):t.jsxs(t.Fragment,{children:[((r==null?void 0:r.label)||(r==null?void 0:r.TextLabel))&&t.jsxs(O,{...e,children:[t.jsx(B,{...e,children:r==null?void 0:r.label}),t.jsx(U,{...e,children:r==null?void 0:r.TextLabel})]}),t.jsxs(q,{...e,children:[s==="default"?t.jsxs(M,{...e,children:[u,t.jsx(h,{accept:g,type:"file",onChange:z,multiple:v,disabled:j,name:F})]}):t.jsxs(P,{...e,onDragOver:Z,onDragLeave:ee,onDrop:te,on:J,disabled:j,accept:g,name:F,multiple:v,children:[t.jsx(E,{...e,children:u}),t.jsx(h,{accept:g,type:"file",onChange:z,disabled:j,name:F,multiple:v})]}),t.jsxs(se,{...e,children:[m.map((n,l)=>t.jsxs(de,{error:Number((n.size/(1024*1024)).toFixed(5))>=w,...e,children:[t.jsxs(me,{...e,children:[t.jsx(ce,{children:n.name}),t.jsxs(xe,{...e,children:[t.jsx(pe,{children:K.includes(n.name)?t.jsx("span",{onClick:()=>X(l),children:ne}):t.jsx(le,{status:"active"})}),t.jsx(ge,{onClick:()=>W(l),...e,children:ie}),Number((n.size/(1024*1024)).toFixed(5))>=w&&t.jsx("img",{src:re})]})]}),Number((n.size/(1024*1024)).toFixed(5))>=w&&t.jsxs("div",{style:{margin:"13px 0 0 0",padding:"0",borderTop:`1px solid ${i.borderStrong01}`,width:"100%"},children:[t.jsx(fe,{children:c==null?void 0:c.label}),t.jsx(ue,{children:c==null?void 0:c.InvalidText})]},l)]},n.name)),m.length>0&&t.jsx(oe,{buttons:[{label:"Inframe Modal"}],open:Q,onClose:()=>L(!1),children:D&&t.jsx(t.Fragment,{children:g===".pdf"?t.jsx(t.Fragment,{children:t.jsx("iframe",{src:D,style:{overflowY:"hidden",width:"100%",height:"100%",border:0,display:"flex",justifyContent:"center",alignItems:"center"}})}):t.jsx(t.Fragment,{children:t.jsx("img",{style:{width:"100%",height:"100%",objectFit:"contain"},src:D})})})})]})]})]})})};Y.__docgenInfo={description:"",methods:[],displayName:"FileUploader",props:{size:{required:!0,tsType:{name:"union",raw:'"small" | "large" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"large"'},{name:"literal",value:'"medium"'}]},description:""},type:{required:!0,tsType:{name:"union",raw:'"drag and top" | "default"',elements:[{name:"literal",value:'"drag and top"'},{name:"literal",value:'"default"'}]},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},on:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},errormessege:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  label?: string;
  InvalidText?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"InvalidText",value:{name:"string",required:!1}}]}},description:""},maxlenghtindividual:{required:!0,tsType:{name:"number"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:""},headers:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  label: string;
  TextLabel: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"TextLabel",value:{name:"string",required:!0}}]}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Le={title:"Example/FileUploader",component:Y,parameters:{layout:"centered"},tags:["autodocs"]},y={args:{size:"large",maxlenghtindividual:3e-4,type:"drag and top",accept:".jpg",headers:{label:"Upload files",TextLabel:"Max file size is 0.0003. Supported file types are .jpg and .png."},errormessege:{label:"File exceeds size limit.",InvalidText:"Optional secondary explanation that can go on for two lines."},children:"Drag and Drop Exemplo File"}};var R,_,A;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(A=(_=y.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};const ze=["fileUploader"];export{ze as __namedExportsOrder,Le as default,y as fileUploader};
