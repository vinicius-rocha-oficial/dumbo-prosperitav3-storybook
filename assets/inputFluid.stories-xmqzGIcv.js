import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as j}from"./index-CTjT7uj6.js";import{d as l,t as r}from"./contextual-Cr4fQ3MC.js";/* empty css              */import{w as z}from"./Warningfilled-CR6tEm8M.js";import{s as F}from"./statusicon-BiyrYhQW.js";import{S as te,a as re}from"./index-ClYmvwGD.js";/* empty css                 */import{j as oe,e as ae,m as ne}from"./IconsInputLabel-52Ne2R0n.js";const H=l.input`
  height: auto;
  &::-webkit-calendar-picker-indicator {
    position: absolute;
    z-index: 12;
    right: 10px;
    font-size: 20px;
    fill: ${r.iconPrimary};
  }
  box-sizing: border-box;
  padding: 2.5em 0 0.8em
    ${({error:e,warning:o})=>e||o?"0":"12px"};
  border-radius: ${({error:e,warning:o})=>e||o?"0":"8px"};
  width: ${({error:e,warning:o})=>e||o?"90%":"100%"};
  margin: 0 auto;
  border: 2px solid transparent;
  border-bottom: 1px solid ${r.borderStrong01};
  background: ${({readOnly:e})=>e?"Transparent":r.field01};
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
  &:active {
    border: ${({disabled:e})=>e?"2px solid transparent":`2px solid ${r.focus}`};
  }
  &:focus {
    border: ${({error:e,warning:o})=>e||o?"2px solid transparent":`2px solid ${r.focus}`};
    border-bottom: ${({error:e,warning:o})=>e||o?`1px solid ${r.borderStrong01}`:`2px solid ${r.focus}`};
  }
`,q=l.textarea`
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
  padding: 2em 1em 0 1em;
  text-align: jutify;
  transition: linear 0.1s;
  &::placeholder {
    color: ${r.textPlaceholder};
  }
  &:active {
    border: ${({disabled:e,error:o})=>e?"2px solid transparent":!o&&`2px solid ${r.focus}`};
  }
  &:focus {
    border: ${({error:e})=>!e&&` 2px solid ${r.focus}`};
  }
`,se=e=>{const{error:o,warning:a}=e;return o?r.supportError:a?r.textPrimary:r.textSecondary},ie=l.label`
  font-family: IBM Plex Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.32px;
  box-sizing: border-box;
  padding: 0;
  margin: 10px;
  margin-left: 10px;
  overflow: hidden;
  color: ${se};
  opacity: ${({disabled:e})=>e?.5:1};
`,le=l.label`
  font-family: IBM Plex Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  gap: 10px;
  letter-spacing: 0.32px;
  box-sizing: border-box;
  margin-bottom: 5px;
  padding-left: ${({warning:e,error:o})=>e||o?"1.5em":"1.1em"};
  padding-top: ${({type:e})=>e==="text"?"1em":".9em"};
  height: auto;
  position: absolute;
  display: flex;
  z-index: 1;
  color: ${r.textSecondary};
  opacity: ${({disabled:e})=>e?.5:1};
`,pe=l.label`
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
`,w=l.div`
  margin: 0 auto;
  position: relative;
  min-width: ${({type:e})=>e!=="textarea"&&"270px"};
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;
  border-radius: 8px;
  background: ${r.field01};
  border: ${({error:e})=>e?`2px solid ${r.supportError}`:""};
`,de=l.div`
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
`,A=l.button`
  padding: 0;
  outiline: none;
  border-radius: 5px;
  border: 0;
  width: 100%;
  cursor: pointer;
  justify-content: center;
  display: flex;
  background: ${r.field01};
  opacity: ${({disabled:e})=>e?.6:1};
`,ce=l.div`
  display: flex;
  background: ${r.field01};
  width: 30%;
  height: 40px;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  right: 1.9px;
  bottom: 3px;
  border-radius: 8px;
`,Q=({TextHelp:e,Title:o,type:a,rows:P,warning:d,maxLength:m,error:s,disabled:p,cols:S,readOnly:c,loading:k,placeholder:u,id:I,name:L,onChange:x})=>{const[U,v]=j.useState(m),[T,$]=j.useState(a==="number"?0:"");j.useEffect(()=>{v(m)},[m]);const X=n=>{n.preventDefault();const i=Number(T)+1;if($(i),x&&a==="number"){const y={target:{value:i.toString()}};x(y)}},Y=n=>{n.preventDefault();const i=Number(T)-1;if($(i),x&&a==="number"){const y={target:{value:i.toString()}};x(y)}},Z=n=>{const{value:i}=n.target;v(n.target.maxLength-i.length),x&&x(n)},O=n=>{const i=n.target.value;$(a==="number"?Number(i):i),x&&x(n)},ee={position:"absolute",right:"0",left:"0",bottom:"0",top:"0",padding:"0",margin:"0",color:"red",borderRadius:"8px"};return t.jsx(t.Fragment,{children:k?t.jsx(w,{type:a,loading:k,children:t.jsx(te,{baseColor:r.skeletonBackground,highlightColor:r.skeletonElement,children:t.jsxs(de,{style:{width:"100%"},children:[a==="textarea"?t.jsx(t.Fragment,{children:t.jsx(q,{maxLength:m,cols:S,rows:P,error:s,warning:d,readOnly:c,disabled:p,placeholder:u})}):t.jsx(t.Fragment,{children:t.jsx(H,{style:{width:"100%"},type:a,error:s,warning:d,placeholder:u,disabled:p,readOnly:c})}),t.jsx(re,{style:ee,count:1})]})})}):t.jsxs(w,{type:a,error:s,children:[t.jsxs(le,{type:a,error:s,disabled:p,readOnly:c,warning:d,children:[o,oe]}),a==="textarea"?t.jsxs(t.Fragment,{children:[!p&&!c&&t.jsx(t.Fragment,{children:t.jsx(E,{type:a,src:s?z:d?F:""})}),t.jsxs(pe,{children:[U,"/",m]}),t.jsx(q,{maxLength:m,onChange:n=>Z(n),cols:S,id:I,rows:P,name:L,error:s,warning:d,readOnly:c,disabled:p,placeholder:u})]}):t.jsx(t.Fragment,{children:t.jsxs(w,{children:[a==="number"&&t.jsx(t.Fragment,{children:t.jsxs(ce,{children:[t.jsx(A,{readOnly:c,disabled:p,onClick:Y,children:ae}),t.jsx("p",{children:"|"}),t.jsx(A,{readOnly:c,disabled:p,onClick:X,children:ne})]})}),t.jsx(t.Fragment,{}),t.jsx(H,{type:a,error:s,placeholder:u,disabled:p,readOnly:c,warning:d,value:T,name:L,id:I,onChange:n=>O(n)})]})}),(s||d)&&t.jsxs(t.Fragment,{children:[t.jsx(ie,{type:a,error:s,disabled:p,warning:d,children:e}),t.jsx(E,{type:a,src:s?z:F})]})]})})};Q.__docgenInfo={description:"",methods:[],displayName:"InputFluid",props:{Title:{required:!1,tsType:{name:"string"},description:""},TextHelp:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},warning:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"ReactFormEventHandler",raw:"React.FormEventHandler<HTMLLabelElement>",elements:[{name:"HTMLLabelElement"}]},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},cols:{required:!1,tsType:{name:"number"},description:""},rows:{required:!1,tsType:{name:"number"},description:""}}};const ye={title:"Example/InputFluid",component:Q,parameters:{layout:"centered"},tags:["autodocs"]},g={args:{type:"textarea",TextHelp:"Warning message goes here: Please be aware",Title:"Label Text Area",placeholder:"Placeholder Text",rows:7,cols:40,maxLength:200}},h={args:{type:"text",TextHelp:"Warning message goes here: Please be aware",Title:"Label",placeholder:"Placeholder Text"}},b={args:{type:"number",TextHelp:"Warning message goes here: Please be aware",Title:"Label",placeholder:"Placeholder Text"}},f={args:{type:"date",TextHelp:"Warning message goes here: Please be aware",Title:"Label",placeholder:"Placeholder Text"}};var B,W,M;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: "textarea",
    TextHelp: "Warning message goes here: Please be aware",
    Title: "Label Text Area",
    placeholder: "Placeholder Text",
    rows: 7,
    cols: 40,
    maxLength: 200
  }
}`,...(M=(W=g.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var N,V,C;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    type: "text",
    TextHelp: "Warning message goes here: Please be aware",
    Title: "Label",
    placeholder: "Placeholder Text"
  }
}`,...(C=(V=h.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var R,_,D;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    type: "number",
    TextHelp: "Warning message goes here: Please be aware",
    Title: "Label",
    placeholder: "Placeholder Text"
  }
}`,...(D=(_=b.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var G,J,K;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    type: "date",
    TextHelp: "Warning message goes here: Please be aware",
    Title: "Label",
    placeholder: "Placeholder Text"
  }
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const je=["TextArea","text","number","date"];export{g as TextArea,je as __namedExportsOrder,f as date,ye as default,b as number,h as text};
