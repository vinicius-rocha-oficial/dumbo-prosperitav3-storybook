import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{r as j}from"./index-CTjT7uj6.js";import{d as o,t}from"./contextual-Cr4fQ3MC.js";/* empty css              */import{C as _}from"./IconsInputLabel-NZUeNpyL.js";import{w as L}from"./Warningfilled-CR6tEm8M.js";import{S as H,a as h}from"./index-ClYmvwGD.js";const z={small:"7px 64px 7px 16px",large:"15px 64px 15px 16px",medium:"11px 64px 11px 16px"},R=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  width: 100%;
`,w=o.input`
  display: none;
`,$=o.label`
  border-radius: 8px;
  background-color: ${({disabled:e})=>e?t.buttonDisabled:t.buttonPrimary};
  padding: ${({size:e})=>e&&z[e]};
  color: white;
  align-self: start;
  cursor: pointer;
  box-sizing: border-box;
  font-family: IBM Plex Sans;
  position: ${({loading:e})=>e&&"relative"};
  &:hover {
    background-color: ${({disabled:e})=>e?t.buttonDisabled:t.buttonPrimaryHover};
  }
`,G=o.label`
  background-color: transparent;
  font-family: IBM Plex Sans;
  width: 100%;
  color: ${({disabled:e})=>e?t.buttonDisabled:t.focus};
  border-radius: 8px;
  cursor: pointer;
  border: ${({on:e})=>e?`1px solid ${t.interactive}`:`1px dashed ${t.borderStrong01}`};
  &:hover {
    border: ${({disabled:e})=>e?"1px solid gray":`1px solid ${t.interactive}`};
  }
`,J=o.p`
  padding: 2px 3em 4em 20px;
  box-sizing: border-box;
  &:hover {
    text-decoration: underline;
  }
`,K=o.ul`
  list-style-type: none;
  padding: 0;
  margin: 10px 0;
  width: 100%;
`,Q=o.li`
  background-color: ${t.layer01};
  border: ${({error:e})=>e?`2px solid ${t.supportError}`:"1px solid #ddd"};
  border-radius: ${({error:e})=>e?"8px":"4px"};
  color: ${({disabled:e})=>e?t.buttonDisabled:t.textPrimary};
  padding: ${({size:e})=>e&&z[e]};
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
`,V=o.span`
  color: ${t.textPrimary};
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400
  line-height: 18px;
  margin-left:1em;
  letter-spacing: 0.16px; 
`,W=o.button`
  color: ${t.iconPrimary};
  border: 0;
  cursor: pointer;
  box-sizing: border-box;
  font-size: 2px;
  align-self: end;
  margin: 0 5em 0 0;
  padding: 0;
  &:focus {
    border: 1px solid ${t.focus};
    outline: 1px solid ${t.focus};
  }
`,X=o.p`
  margin: 0.6em 1em 0 1em;
  padding: 0;
  width: 100%;
  color: ${t.textError};
  font-family: "IBM Plex Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
  letter-spacing: 0.32px;
  width: 300px;
`,Y=o.p`
  margin: 0.8em 0 0 1em;
  padding: 0;
  width: 100%;
  color: ${t.textPrimary};
  font-family: "IBM Plex Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
  letter-spacing: 0.32px;
  min-width: 300px;
`,Z=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
`,D=o.p`
  color: ${({disabled:e})=>e?t.buttonDisabled:t.textSecondary};
  position: ${({loading:e})=>e&&"relative"};
  margin: 0;
  align-self: start;
`,F=o.div`
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.16px;
  text-align: start;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 22px;
`,v=o.p`
  color: ${({disabled:e})=>e?t.buttonDisabled:t.textPrimary};
  position: ${({loading:e})=>e&&"relative"};
  margin: 0;
  align-self: start;
`,P=e=>{const{type:M,onChange:d,onDelete:b,disabled:m,maxMegabs:s,messageError:k,titleError:I,loading:C}=e,[q,c]=j.useState([]),[B,x]=j.useState(!1),y=n=>{n.stopPropagation();const i=Array.from(n.target.files||[]);c(a=>{const l=i.filter(u=>!a.some(f=>f.name===u.name));return[...a,...l]}),d&&d(n)},U=n=>{c(i=>i.filter((a,l)=>l!==n)),b&&b(n)},O=n=>{n.preventDefault(),x(!0)},A=()=>{x(!1)},N=n=>{n.preventDefault(),x(!1);const i=Array.from(n.dataTransfer.files);if(c(a=>{const l=i.filter(u=>!a.some(f=>f.name===u.name));return[...a,...l]}),d){const a={...n,target:{files:n.dataTransfer.files}};d(a)}},g={position:"absolute",right:"0",bottom:"0",left:"0",top:"0",display:"flex",margin:"0"};return r.jsx(r.Fragment,{children:C?r.jsx(r.Fragment,{children:r.jsxs(H,{baseColor:t.skeletonBackground,highlightColor:t.skeletonElement,children:[r.jsxs(F,{...e,children:[r.jsxs(v,{...e,children:["Upload files",r.jsx(h,{count:1,style:g})]}),r.jsxs(D,{...e,children:[r.jsx(h,{count:1,style:g}),"Max file size is ",s," mb. Only .jpg files are supported."]})]}),r.jsxs($,{...e,children:["Add File",r.jsx(h,{count:1,style:g})]})]})}):r.jsx(r.Fragment,{children:r.jsxs(R,{...e,children:[r.jsxs(F,{...e,children:[r.jsx(v,{...e,children:"Upload files"}),r.jsxs(D,{...e,children:["Max file size is ",s,"mb. Only .jpg files are supported."]})]}),M==="default"?r.jsxs($,{...e,children:["Add File",r.jsx(w,{accept:".png, .jpg, .jpeg",type:"file",onChange:y,multiple:!0,disabled:m})]}):r.jsxs(G,{...e,onDragOver:O,onDragLeave:A,onDrop:N,on:B,disabled:m,children:[r.jsx(J,{children:"Drag and drop files here or click to upload"}),r.jsx(w,{accept:".png, .jpg, .jpeg",type:"file",onChange:y,multiple:!0,disabled:m})]}),r.jsx(K,{...e,children:q.map((n,i)=>r.jsxs(Q,{error:Number((n.size/(1024*1024)).toFixed(5))>=s,...e,children:[r.jsxs(Z,{...e,children:[r.jsx(V,{children:n.name},i),r.jsx(W,{onClick:()=>U(i),children:_}),Number((n.size/(1024*1024)).toFixed(5))>=s&&r.jsx("img",{src:L,style:{position:"absolute",top:"2.5px",right:"30px"}})]}),Number((n.size/(1024*1024)).toFixed(5))>=s&&r.jsx(r.Fragment,{children:r.jsxs("div",{style:{margin:"13px 0 0 0",padding:"0",borderTop:`1px solid ${t.borderStrong01}`,width:"100%"},children:[r.jsx(Y,{children:I},i),r.jsx(X,{children:k},i)]},i)})]},i))})]})})})};P.__docgenInfo={description:"",methods:[],displayName:"FileUploader",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "large" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"large"'},{name:"literal",value:'"medium"'}]},description:""},type:{required:!1,tsType:{name:"union",raw:'"drag and top" | "default"',elements:[{name:"literal",value:'"drag and top"'},{name:"literal",value:'"default"'}]},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},on:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},titleError:{required:!1,tsType:{name:"string"},description:""},messageError:{required:!1,tsType:{name:"string"},description:""},maxMegabs:{required:!1,tsType:{name:"union",raw:"number | any",elements:[{name:"number"},{name:"any"}]},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""}}};const se={title:"Example/FileUploader",component:P,parameters:{layout:"centered"},tags:["autodocs"]},p={args:{size:"large",maxMegabs:78e-5,titleError:"Titulo Exemplo",messageError:"Optional secondary explanation that can go on for two lines."}};var E,T,S;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: "large",
    maxMegabs: 0.00078,
    titleError: "Titulo Exemplo",
    messageError: "Optional secondary explanation that can go on for two lines."
  }
}`,...(S=(T=p.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};const le=["fileUploader"];export{le as __namedExportsOrder,se as default,p as fileUploader};
