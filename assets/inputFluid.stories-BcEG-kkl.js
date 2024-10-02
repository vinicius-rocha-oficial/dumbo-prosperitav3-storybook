import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as f}from"./index-CTjT7uj6.js";import{d as l}from"./styled-components.browser.esm-D3-gLipQ.js";/* empty css              */import{t as r}from"./contextual-D4vCP4YA.js";import{w as L}from"./Warningfilled-CR6tEm8M.js";import{s as F}from"./statusicon-BiyrYhQW.js";import{S as ne,a as oe}from"./index-ClYmvwGD.js";/* empty css                 */import{b as ae,m as se}from"./IconsInputLabel-C-_tevyj.js";const ie=()=>r.iconPrimary.replace("#","%23"),q=l.input`
  height: auto;
  box-sizing: border-box;
  padding: ${({type:e})=>e==="number"||e==="text"?"2.8em":"2.5em"} ${({type:e})=>"10px"}
    ${({error:e,warning:a})=>e||a?"10px":"12px"};
  border-radius: ${({error:e,warning:a,noRadius:n})=>e||a||n?"0":"8px"};
  width: ${({error:e,warning:a})=>e||a?"90%":"100%"};
  margin: 0 auto;
  border: 0px solid transparent;
  border-bottom: 1px solid ${r.borderStrong01};
  background: ${({readOnly:e})=>e?"transparent":r.field01};
  color: ${({disabled:e})=>e?r.textDisabled:r.textPrimary};
  cursor: ${({disabled:e})=>e?"not-allowed":"auto"};
  opacity: ${({disabled:e})=>e?.6:1};
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.16px;
  outline: 0;
  height: auto;
  position: relative;
  &::placeholder {
    color: ${r.textPlaceholder};
    padding: 0.1em;
    width: 95%;
  }
  transition: linear 0.1s;

          &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-calendar-picker-indicator {
 background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 16 16" fill="none"><g id="Calendar"><rect width="16" height="16" style="mix-blend-mode:multiply"/><path id="Vector" d="M13 2H11V1H10V2H6V1H5V2H3C2.45 2 2 2.45 2 3V13C2 13.55 2.45 14 3 14H13C13.55 14 14 13.55 14 13V3C14 2.45 13.55 2 13 2ZM13 13H3V6H13V13ZM13 5H3V3H5V4H6V3H10V4H11V3H13V5Z" fill="${ie}"/></g></svg>') no-repeat;
      no-repeat;
    margin:.3em 0 0 0;
    border: none;
    cursor: pointer;
  }
`,z=l.textarea`
  resize: none;
  border-radius: 8px;
  background: ${({readOnly:e})=>e?"white":r.field01};
  color: ${r.textPrimary};
  border: 2px solid transparent;
  border-bottom: 1px solid ${r.borderStrong01};
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.16px;
  outline: 0;
  display: flex;
  padding: 2em 0em 0 1em;
  text-align: jutify;
  min-width: 270px;
  transition: linear 0.1s;
  &::placeholder {
    color: ${r.textPlaceholder};
  }
  &:active {
    border: ${({disabled:e,error:a})=>e?"2px solid transparent":!a&&`2px solid ${r.focus}`};
  }
  &:focus {
    border: ${({error:e})=>!e&&` 2px solid ${r.focus}`};
  }
`,le=e=>{const{error:a,warning:n}=e;return a?r.supportError:n?r.textPrimary:r.textSecondary},pe=l.label`
  font-family: IBM Plex Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.32px;
  box-sizing: border-box;
  padding: 0;
  margin: 10px 50px 10px 10px;
  overflow: hidden;
  word-wrap: break-word;
  width: 95%;
  color: ${le};
  opacity: ${({disabled:e})=>e?.5:1};
`,ce=l.label`
  font-family: IBM Plex Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  gap: 10px;
  letter-spacing: 0.32px;
  box-sizing: border-box;
  margin-bottom: 5px;
  padding-left: ${({warning:e,error:a})=>e||a?"1.5em":"1.1em"};
  padding-top: ${({type:e})=>e==="text"?"1em":".9em"};
  height: auto;
  position: absolute;
  display: flex;
  z-index: 1;
  color: ${r.textSecondary};
  opacity: ${({disabled:e})=>e?.5:1};
`,de=l.label`
  color: #525252;
  font-family: "IBM Plex Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.32px;
  padding: 0;
  padding-top: 0.9em;
  margin: 0 auto;
  display: flex;
  position: absolute;
  right: 10px;
  color: ${r.textSecondary};
  opacity: ${({disabled:e})=>e?.6:1};
  top: 0;
`,H=l.div`
  margin: 0 auto;
  position: relative;
  min-width: ${({type:e})=>e!=="textarea"&&"200px"};
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;
  border-radius: 8px;
  background: ${r.field01};
  border: ${({error:e})=>e?`2px solid ${r.supportError}`:""};
`,me=l.div`
  position: relative;
  margin: 0.1em;
  height: auto;
  width: auto;
  display: block;
`,E=l.img`
  z-index: 1;
  position: absolute;
  bottom: 10px;
  right: 10px;
`,C=l.button`
  padding: 0;
  outiline: none;
  border-radius: 5px;
  border: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  justify-content: center;
  opacity: ${({disabled:e})=>e?.6:1};
  outline: none;
  margin: 0.5em 0 0 0;
  background: transparent;
`,xe=l.div`
  display: flex;
  width: 30%;
  height: 40px;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  right: 1.9px;
  bottom: 5px;
  border-radius: 8px;
  outline: none;
`,R=({TextHelp:e,Title:a,type:n,rows:S,warning:c,maxLength:u,error:s,disabled:p,cols:k,readOnly:d,loading:v,placeholder:h,id:V,name:b,noRadius:m,onChange:x})=>{const[U,I]=f.useState(u),[X,$]=f.useState(n==="number"?0:"");f.useEffect(()=>{I(u)},[u]);const g=f.useRef(null),Y=o=>{if(o.preventDefault(),g.current){const i=Number(g.current.value)+1;$(i.toString());const P={value:i.toString(),name:b};x&&x({target:P})}},O=o=>{if(o.preventDefault(),g.current){const i=Number(g.current.value)-1;$(i.toString());const P={value:i.toString(),name:b};x&&x({target:P})}},ee=o=>{const{value:i}=o.target;I(o.target.maxLength-i.length),x&&x(o)},te=o=>{const i=o.target.value;$(n==="number"?Number(i):i),x&&x(o)},re={position:"absolute",right:"0",left:"0",bottom:"0",top:"0",padding:"0",margin:"0",color:"red",borderRadius:"8px"};return t.jsx(t.Fragment,{children:v?t.jsx(H,{type:n,loading:v,children:t.jsx(ne,{baseColor:r.skeletonBackground,highlightColor:r.skeletonElement,children:t.jsxs(me,{style:{width:"100%"},children:[n==="textarea"?t.jsx(t.Fragment,{children:t.jsx(z,{maxLength:u,cols:k,rows:S,error:s,warning:c,readOnly:d,disabled:p,placeholder:h,noRadius:m})}):t.jsx(t.Fragment,{children:t.jsx(q,{style:{width:"100%"},type:n,error:s,warning:c,placeholder:h,disabled:p,readOnly:d,noRadius:m})}),t.jsx(oe,{style:re,count:1})]})})}):t.jsxs(H,{type:n,error:s,children:[t.jsx(ce,{type:n,error:s,disabled:p,readOnly:d,warning:c,noRadius:m,children:a}),n==="textarea"?t.jsxs(t.Fragment,{children:[!p&&!d&&t.jsx(t.Fragment,{children:t.jsx(E,{type:n,src:s?L:c?F:""})}),t.jsxs(de,{noRadius:m,children:[U,"/",u]}),t.jsx(z,{maxLength:u,onChange:o=>ee(o),cols:k,id:V,rows:S,name:b,error:s,warning:c,readOnly:d,disabled:p,placeholder:h,noRadius:m})]}):t.jsx(t.Fragment,{children:t.jsxs(H,{children:[n==="number"&&t.jsx(t.Fragment,{children:t.jsxs(xe,{children:[t.jsx(C,{readOnly:d,disabled:p,onClick:O,noRadius:m,children:ae}),t.jsx("p",{style:{color:r.iconPrimary},children:"|"}),t.jsx(C,{readOnly:d,disabled:p,onClick:Y,children:se})]})}),t.jsx(t.Fragment,{}),t.jsx(q,{type:n,error:s,placeholder:h,disabled:p,readOnly:d,warning:c,value:X,ref:g,name:b,id:V,noRadius:m,onChange:o=>te(o)})]})}),(s||c)&&t.jsxs(t.Fragment,{children:[t.jsx(pe,{type:n,error:s,disabled:p,warning:c,noRadius:m,children:e}),t.jsx(E,{type:n,src:s?L:F})]})]})})};R.__docgenInfo={description:"",methods:[],displayName:"InputFluid",props:{Title:{required:!1,tsType:{name:"string"},description:""},TextHelp:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},warning:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"ReactFormEventHandler",raw:"React.FormEventHandler<HTMLLabelElement>",elements:[{name:"HTMLLabelElement"}]},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},cols:{required:!1,tsType:{name:"number"},description:""},rows:{required:!1,tsType:{name:"number"},description:""},noRadius:{required:!1,tsType:{name:"boolean"},description:""}}};const Pe={title:"Example/InputFluid",component:R,parameters:{layout:"centered"},tags:["autodocs"]},T={args:{type:"textarea",TextHelp:"Warning message goes here: Please be aware",Title:"Label Text Area",placeholder:"Placeholder Text",rows:7,cols:40,maxLength:200}},y={args:{type:"text",TextHelp:"Warning message goes here: Please be aware",Title:"Label",placeholder:"Placeholder Text"}},w={args:{type:"number",TextHelp:"Warning message goes here: Please be aware",Title:"Label",placeholder:"Placeholder Text"}},j={args:{type:"date",TextHelp:"Warning message goes here: Please be aware",Title:"Label",placeholder:"Placeholder Text"}};var M,B,A;T.parameters={...T.parameters,docs:{...(M=T.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    type: "textarea",
    TextHelp: "Warning message goes here: Please be aware",
    Title: "Label Text Area",
    placeholder: "Placeholder Text",
    rows: 7,
    cols: 40,
    maxLength: 200
  }
}`,...(A=(B=T.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var W,N,_;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    type: "text",
    TextHelp: "Warning message goes here: Please be aware",
    Title: "Label",
    placeholder: "Placeholder Text"
  }
}`,...(_=(N=y.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var D,Z,G;w.parameters={...w.parameters,docs:{...(D=w.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    type: "number",
    TextHelp: "Warning message goes here: Please be aware",
    Title: "Label",
    placeholder: "Placeholder Text"
  }
}`,...(G=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:G.source}}};var J,K,Q;j.parameters={...j.parameters,docs:{...(J=j.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    type: "date",
    TextHelp: "Warning message goes here: Please be aware",
    Title: "Label",
    placeholder: "Placeholder Text"
  }
}`,...(Q=(K=j.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const He=["TextArea","text","number","date"];export{T as TextArea,He as __namedExportsOrder,j as date,Pe as default,w as number,y as text};
