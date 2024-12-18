import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as y}from"./index-CTjT7uj6.js";import{d as i}from"./styled-components.browser.esm-D3-gLipQ.js";/* empty css              */import{t as r}from"./contextual-D4vCP4YA.js";import{w as E}from"./Warningfilled-CR6tEm8M.js";import{s as L}from"./statusicon-BiyrYhQW.js";import{S as ae,a as se}from"./index-ClYmvwGD.js";/* empty css                 */import{e as ie,m as le}from"./IconsInputLabel-E66WMmAT.js";const ce=()=>r.iconPrimary.replace("#","%23"),z=i.input`
  height: auto;
  box-sizing: border-box;
  padding: ${({type:e})=>e==="number"||e==="text"?"2.8em":"2.5em"} ;
  ${({type:e})=>"10px"};
    ${({error:e,warning:o})=>e||o?"0px":"12px"};
  border-radius: ${({error:e,warning:o,noRadius:n})=>e||o||n?"0":"8px"};
  width: ${({error:e,warning:o})=>e||o?"97%":"100%"};
  margin: 0 auto;
  border:0;
  border-bottom:${({borderNone:e})=>e?"0":`1px solid ${r.borderStrong01}`};
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
  outline: none;
  height: auto;
  position: relative;
  &::placeholder {
    color: ${r.textPlaceholder};
    padding: 0.1em;
    width: 95%;
    opacity: .5;
  }

 &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-calendar-picker-indicator {
 background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 16 16" fill="none"><g id="Calendar"><rect width="16" height="16" style="mix-blend-mode:multiply"/><path id="Vector" d="M13 2H11V1H10V2H6V1H5V2H3C2.45 2 2 2.45 2 3V13C2 13.55 2.45 14 3 14H13C13.55 14 14 13.55 14 13V3C14 2.45 13.55 2 13 2ZM13 13H3V6H13V13ZM13 5H3V3H5V4H6V3H10V4H11V3H13V5Z" fill="${ce}"/></g></svg>') no-repeat;
    margin:.3em 0 0 0;
    border: none;
    cursor: pointer;
  }
&:focus {
  outline: ${({error:e,warning:o})=>e||o?"none":`2px solid ${r.focus}`};
}
`,F=i.textarea`
  resize: none;
  border-radius: ${({error:e,warning:o,noRadius:n})=>e||o||n?"0":"8px"};
  background: ${({readOnly:e})=>e?"white":r.field01};
  color: ${r.textPrimary};
  border: none;
  border-bottom: 1px solid ${r.borderStrong01};
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.16px;
  outline: 2px solid transparent;
  display: flex;
  padding: 2em 0em 0 1em;
  text-align: jutify;
  min-width: 270px;
  transition: linear 0.1s;
  &::placeholder {
    color: ${r.textPlaceholder};
  }
  &:focus {
    outline: ${({error:e})=>!e&&` 2px solid ${r.focus}`};
  }
`,pe=e=>{const{error:o,warning:n}=e;return o?r.supportError:n?r.textPrimary:r.textSecondary},de=i.label`
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
  color: ${pe};
  opacity: ${({disabled:e})=>e?.5:1};
`,me=i.label`
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
`,M=i.label`
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
`,v=i.div`
  margin: 0 auto;
  position: relative;
  min-width: ${({type:e})=>e!=="textarea"&&"200px"};
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;
  border-radius:${({noRadius:e})=>e?"0":"8px"} ;
  background: ${r.field01};
  border: ${({error:e})=>e?`2px solid ${r.supportError}`:""};
`,ge=i.div`
  position: relative;
  margin: 0.1em;
  height: auto;
  width: auto;
  display: block;
`,B=i.img`
  z-index: 1;
  position: absolute;
  bottom: 10px;
  right: 10px;
`,W=i.button`
  padding: 0;
  border-radius: 0;
  border: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  justify-content: center;
  opacity: ${({disabled:e})=>e?.6:1};
  outline: none;
  margin:0;
  display:flex;
  align-items: center;
  &:focus{
  outline:2px solid ${r.focus}
  }
`,ue=i.div`
  display: flex;
  width: 80px;
  height: 35px;
  gap:2px;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  right: 3px;
  top:30px;
  bottom: 5px;
  border-radius: 8px;
  outline: none;
  background:${r.field01}
`,Y=({message:e,label:o,type:n,rows:S,warning:p,maxLength:d,error:s,disabled:l,cols:k,readOnly:m,loading:I,placeholder:b,id:V,name:f,noRadius:c,borderNone:H,onChange:g,value:x})=>{const[O,q]=y.useState(d||x),[C,P]=y.useState(x),h=y.useRef(null),ee=()=>{if(h.current){const a=Number(h.current.value)+1;P(a.toString());const u={value:a.toString(),name:f};g&&g({target:u})}},te=()=>{if(h.current){const a=Number(h.current.value)-1;P(a.toString());const u={value:a.toString(),name:f};g&&g({target:u})}},re=a=>{const{value:u}=a.target;q(a.target.maxLength-u.length),g&&g(a)},ne=a=>{const u=a.target.value;P(n==="number"?Number(u):u),g&&g(a)},oe={position:"absolute",right:"0",left:"0",bottom:"0",top:"0",padding:"0",margin:"0",color:"red",borderRadius:"8px"};return y.useEffect(()=>{q(d)},[d,x,C]),t.jsx(t.Fragment,{children:I?t.jsx(v,{type:n,loading:I,children:t.jsx(ae,{baseColor:r.skeletonBackground,highlightColor:r.skeletonElement,children:t.jsxs(ge,{style:{width:"100%"},children:[n==="textarea"?t.jsx(t.Fragment,{children:t.jsx(F,{maxLength:d,cols:k,rows:S,error:s,warning:p,readOnly:m,disabled:l,placeholder:b,noRadius:c})}):t.jsx(t.Fragment,{children:t.jsx(z,{style:{width:"100%"},type:n,error:s,warning:p,placeholder:b,disabled:l,readOnly:m,noRadius:c})}),t.jsx(se,{style:oe,count:1})]})})}):t.jsxs(v,{noRadius:c,type:n,error:s,children:[t.jsx(me,{type:n,error:s,disabled:l,readOnly:m,warning:p,noRadius:c,children:o}),n==="textarea"?t.jsxs(t.Fragment,{children:[!l&&!m&&t.jsx(t.Fragment,{children:t.jsx(B,{type:n,src:s?E:p?L:""})}),t.jsx(M,{noRadius:c,children:d&&t.jsxs(M,{children:[O,"/",d]})}),t.jsx(F,{maxLength:d,value:x,onChange:re,cols:k,id:V,rows:S,borderNone:H,name:f,error:s,warning:p,readOnly:m,disabled:l,placeholder:b,noRadius:c})]}):t.jsx(t.Fragment,{children:t.jsxs(v,{children:[n==="number"&&t.jsx(t.Fragment,{children:t.jsxs(ue,{children:[t.jsx(W,{readOnly:m,disabled:l,onClick:te,noRadius:c,children:ie}),t.jsx("div",{style:{height:"60%",width:"2px",background:"#c6c6c6",margin:"0",padding:"0"}}),t.jsx(W,{readOnly:m,disabled:l,onClick:ee,children:le})]})}),t.jsx(t.Fragment,{}),t.jsx(z,{value:n!=="number"?x:C,onChange:ne,type:n,error:s,maxLength:d,placeholder:b,disabled:l,readOnly:m,warning:p,ref:h,name:f,id:V,borderNone:H,noRadius:c})]})}),(s||p)&&t.jsxs(t.Fragment,{children:[t.jsx(de,{type:n,error:s,disabled:l,warning:p,noRadius:c,children:e}),t.jsx(B,{type:n,src:s?E:L})]})]})})};Y.__docgenInfo={description:"",methods:[],displayName:"InputFluid",props:{label:{required:!1,tsType:{name:"string"},description:""},message:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},warning:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},cols:{required:!1,tsType:{name:"number"},description:""},rows:{required:!1,tsType:{name:"number"},description:""},noRadius:{required:!1,tsType:{name:"boolean"},description:""},borderNone:{required:!1,tsType:{name:"boolean"},description:""}}};const ve={title:"Example/InputFluid",component:Y,parameters:{layout:"centered"},tags:["autodocs"]},w={args:{type:"textarea",message:"Warning message goes here: Please be aware",label:"Label Text Area",placeholder:"Placeholder Text",rows:7,cols:40}},$={args:{type:"text",message:"Warning message goes here: Please be aware",label:"Label",placeholder:"Placeholder Text"}},T={args:{type:"number",message:"Warning message goes here: Please be aware",label:"Label",placeholder:"Placeholder Text",onChange:e=>console.log(e.target.value)}},j={args:{type:"date",message:"Warning message goes here: Please be aware",label:"Label",placeholder:"Placeholder Text",value:"gfd"}};var A,N,_;w.parameters={...w.parameters,docs:{...(A=w.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    type: "textarea",
    message: "Warning message goes here: Please be aware",
    label: "Label Text Area",
    placeholder: "Placeholder Text",
    rows: 7,
    cols: 40
  }
}`,...(_=(N=w.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var Z,D,G;$.parameters={...$.parameters,docs:{...(Z=$.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    type: "text",
    message: "Warning message goes here: Please be aware",
    label: "Label",
    placeholder: "Placeholder Text"
  }
}`,...(G=(D=$.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var J,K,Q;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    type: "number",
    message: "Warning message goes here: Please be aware",
    label: "Label",
    placeholder: "Placeholder Text",
    onChange: e => console.log(e.target.value)
  }
}`,...(Q=(K=T.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var R,U,X;j.parameters={...j.parameters,docs:{...(R=j.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    type: "date",
    message: "Warning message goes here: Please be aware",
    label: "Label",
    placeholder: "Placeholder Text",
    value: "gfd"
  }
}`,...(X=(U=j.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const Se=["TextArea","text","number","date"];export{w as TextArea,Se as __namedExportsOrder,j as date,ve as default,T as number,$ as text};
