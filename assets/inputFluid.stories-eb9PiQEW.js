import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as b}from"./index-CTjT7uj6.js";import{d as l,t as r}from"./contextual-Cr4fQ3MC.js";/* empty css              */import{w as I}from"./Warningfilled-CR6tEm8M.js";import{s as L}from"./statusicon-BiyrYhQW.js";import{S as re,a as oe}from"./index-ClYmvwGD.js";/* empty css                 */import{o as ne,f as ae,m as se}from"./IconsInputLabel--_eZxZCn.js";const ie=()=>r.iconPrimary.replace("#","%23"),F=l.input`
  height: auto;
  box-sizing: border-box;
  padding: 2.5em ${({type:e})=>e==="number"?"6em":"10px"} 0.8em
    ${({error:e,warning:o})=>e||o?"0":"12px"};
  border-radius: ${({error:e,warning:o})=>e||o?"0":"8px"};
  width: ${({error:e,warning:o})=>e||o?"90%":"100%"};
  margin: 0 auto;
  border: 2px solid transparent;
  border-bottom: 2px solid ${r.borderStrong01};
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
  &:active {
    border: ${({disabled:e})=>e?"2px solid transparent":`2px solid ${r.focus}`};
  }
  &:focus {
    border: ${({error:e,warning:o})=>e||o?"2px solid transparent":`2px solid ${r.focus}`};
    border-bottom: ${({error:e,warning:o})=>e||o?`2px solid ${r.borderStrong01}`:`2px solid ${r.focus}`};
  }
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
  padding: 2em 0em 0 1em;
  text-align: jutify;
  min-width: 270px;
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
`,le=e=>{const{error:o,warning:n}=e;return o?r.supportError:n?r.textPrimary:r.textSecondary},pe=l.label`
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
  padding-left: ${({warning:e,error:o})=>e||o?"1.5em":"1.1em"};
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
`,P=l.div`
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
`,xe=l.div`
  position: relative;
  margin: 0.1em;
  height: auto;
  width: auto;
  display: block;
`,z=l.img`
  z-index: 1;
  position: absolute;
  bottom: 10px;
  right: 10px;
`,E=l.button`
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
`,me=l.div`
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
`,K=({TextHelp:e,Title:o,type:n,rows:H,warning:c,maxLength:m,error:s,disabled:p,cols:S,readOnly:d,loading:v,placeholder:g,id:k,name:h,onChange:x})=>{const[Q,V]=b.useState(m),[U,$]=b.useState(n==="number"?0:"");b.useEffect(()=>{V(m)},[m]);const u=b.useRef(null),X=a=>{if(a.preventDefault(),u.current){const i=Number(u.current.value)+1;$(i.toString());const j={value:i.toString(),name:h};x&&x({target:j})}},Y=a=>{if(a.preventDefault(),u.current){const i=Number(u.current.value)-1;$(i.toString());const j={value:i.toString(),name:h};x&&x({target:j})}},O=a=>{const{value:i}=a.target;V(a.target.maxLength-i.length),x&&x(a)},ee=a=>{const i=a.target.value;$(n==="number"?Number(i):i),x&&x(a)},te={position:"absolute",right:"0",left:"0",bottom:"0",top:"0",padding:"0",margin:"0",color:"red",borderRadius:"8px"};return t.jsx(t.Fragment,{children:v?t.jsx(P,{type:n,loading:v,children:t.jsx(re,{baseColor:r.skeletonBackground,highlightColor:r.skeletonElement,children:t.jsxs(xe,{style:{width:"100%"},children:[n==="textarea"?t.jsx(t.Fragment,{children:t.jsx(q,{maxLength:m,cols:S,rows:H,error:s,warning:c,readOnly:d,disabled:p,placeholder:g})}):t.jsx(t.Fragment,{children:t.jsx(F,{style:{width:"100%"},type:n,error:s,warning:c,placeholder:g,disabled:p,readOnly:d})}),t.jsx(oe,{style:te,count:1})]})})}):t.jsxs(P,{type:n,error:s,children:[t.jsxs(ce,{type:n,error:s,disabled:p,readOnly:d,warning:c,children:[o,ne]}),n==="textarea"?t.jsxs(t.Fragment,{children:[!p&&!d&&t.jsx(t.Fragment,{children:t.jsx(z,{type:n,src:s?I:c?L:""})}),t.jsxs(de,{children:[Q,"/",m]}),t.jsx(q,{maxLength:m,onChange:a=>O(a),cols:S,id:k,rows:H,name:h,error:s,warning:c,readOnly:d,disabled:p,placeholder:g})]}):t.jsx(t.Fragment,{children:t.jsxs(P,{children:[n==="number"&&t.jsx(t.Fragment,{children:t.jsxs(me,{children:[t.jsx(E,{readOnly:d,disabled:p,onClick:Y,children:ae}),t.jsx("p",{style:{color:r.iconPrimary},children:"|"}),t.jsx(E,{readOnly:d,disabled:p,onClick:X,children:se})]})}),t.jsx(t.Fragment,{}),t.jsx(F,{type:n,error:s,placeholder:g,disabled:p,readOnly:d,warning:c,value:U,ref:u,name:h,id:k,onChange:a=>ee(a)})]})}),(s||c)&&t.jsxs(t.Fragment,{children:[t.jsx(pe,{type:n,error:s,disabled:p,warning:c,children:e}),t.jsx(z,{type:n,src:s?I:L})]})]})})};K.__docgenInfo={description:"",methods:[],displayName:"InputFluid",props:{Title:{required:!1,tsType:{name:"string"},description:""},TextHelp:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},warning:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"ReactFormEventHandler",raw:"React.FormEventHandler<HTMLLabelElement>",elements:[{name:"HTMLLabelElement"}]},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},cols:{required:!1,tsType:{name:"number"},description:""},rows:{required:!1,tsType:{name:"number"},description:""}}};const je={title:"Example/InputFluid",component:K,parameters:{layout:"centered"},tags:["autodocs"]},f={args:{type:"textarea",TextHelp:"Warning message goes here: Please be aware",Title:"Label Text Area",placeholder:"Placeholder Text",rows:7,cols:40,maxLength:200}},T={args:{type:"text",TextHelp:"Warning message goes here: Please be aware",Title:"Label",placeholder:"Placeholder Text"}},y={args:{type:"number",TextHelp:"Warning message goes here: Please be aware",Title:"Label",placeholder:"Placeholder Text"}},w={args:{type:"date",TextHelp:"Warning message goes here: Please be aware",Title:"Label",placeholder:"Placeholder Text"}};var C,M,B;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: "textarea",
    TextHelp: "Warning message goes here: Please be aware",
    Title: "Label Text Area",
    placeholder: "Placeholder Text",
    rows: 7,
    cols: 40,
    maxLength: 200
  }
}`,...(B=(M=f.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var A,W,N;T.parameters={...T.parameters,docs:{...(A=T.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    type: "text",
    TextHelp: "Warning message goes here: Please be aware",
    Title: "Label",
    placeholder: "Placeholder Text"
  }
}`,...(N=(W=T.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var R,_,D;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    type: "number",
    TextHelp: "Warning message goes here: Please be aware",
    Title: "Label",
    placeholder: "Placeholder Text"
  }
}`,...(D=(_=y.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var Z,G,J;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    type: "date",
    TextHelp: "Warning message goes here: Please be aware",
    Title: "Label",
    placeholder: "Placeholder Text"
  }
}`,...(J=(G=w.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const Pe=["TextArea","text","number","date"];export{f as TextArea,Pe as __namedExportsOrder,w as date,je as default,y as number,T as text};
