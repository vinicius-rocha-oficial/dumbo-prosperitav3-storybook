import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as j}from"./index-CTjT7uj6.js";import{d as i,t as s}from"./contextual-Cr4fQ3MC.js";/* empty css              */import{w as D}from"./Warningfilled-CR6tEm8M.js";import{s as R}from"./statusicon-BiyrYhQW.js";import{S as fe,a as V}from"./index-ClYmvwGD.js";/* empty css                 */import{s as we,d as Te,e as je,m as ye}from"./IconsInputLabel-PpPdO3Ft.js";const $e={large:"20px ",small:"15px",medium:"18px"},ke={large:"13px",small:"12px",medium:"15px"},v=e=>{const{disabled:r,error:n}=e;return r?"2px solid transparent":n?`2px solid ${s.supportError}`:"2px solid transparent"},L=i.input`
  height: ${({size:e})=>e&&ke[e]};
  box-sizing: border-box;
  padding: ${({size:e})=>e&&$e[e]};
  padding-right: ${({type:e})=>e==="password"?"2.5em":e==="number"?"5em":e==="text"?"2.5em":""};
  border-radius: 8px;
  width: 100%;
  transition: linear 0.1s;
  border: ${({disabled:e,error:r})=>e||r?v:"2px solid transparent"};
  border-bottom: ${({disabled:e,error:r})=>e||r?v:"2px solid gray"};
  background: ${({readOnly:e,forModal:r})=>e?"Transparent":r?s.background:s.field01};
  color: ${({disabled:e})=>e?s.textDisabled:s.textPrimary};
  cursor: ${({disabled:e})=>e?"not-allowed":"auto"};
  opacity: ${({disabled:e})=>e?.6:1};
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.16px;
  outline: 0;
  position: relative;
  &:active {
    border: ${({disabled:e})=>e?"2px solid transparent":`2px solid ${s.focus}`};
  }
  &:focus {
    border: 2px solid ${s.focus};
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-calendar-picker-indicator {
    position: absolute;
    right: 20px;
    z-index: 2;
    opacity: 0;
  }
`,_=i.textarea`
  resize: none;
  border-radius: 8px;
  height: auto;
  border: ${({disabled:e,error:r})=>e||r?v:"2px solid transparent"};
  border-bottom: ${({disabled:e,error:r})=>e||r?v:"1px solid gray"};
  background: ${({readOnly:e,forModal:r})=>e?"Transparent":r?s.background:s.field01};
  color: ${s.textPrimary};
  font-family: "IBM Plex Sans";
  font-size: 14px;
  font-style: normal;
  min-width: 300px;
  padding: 1em;
  transition: linear 0.1s;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.16px;
  outline: 0;
  display: flex;
  padding-right: 2em;
  text-align: jutify;
  &::placeholder {
    color: ${s.textPlaceholder};
    padding: 0.1em;
    width: 95%;
  }
  &:active {
    border: ${({disabled:e})=>e?"2px solid transparent":`2px solid ${s.focus}`};
  }
  &:focus {
    border: 2px solid ${s.focus};
  }
`,Ie=e=>{const{error:r,warning:n}=e;return r?s.supportError:n?s.textPrimary:s.textSecondary},Z=i.label`
  font-family: IBM Plex Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.32px;
  box-sizing: border-box;
  padding: 0;
  margin-top: 5px;
  color: ${Ie};
  opacity: ${({disabled:e})=>e?.5:1};
`,G=i.label`
  font-family: IBM Plex Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.32px;
  box-sizing: border-box;
  margin-bottom: 5px;
  padding: 0;
  height: auto;
  color: ${s.textSecondary};
  opacity: ${({disabled:e})=>e?.5:1};
`,J=i.label`
  color: #525252;
  font-family: "IBM Plex Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.32px;
  padding: 0;
  margin: 0 auto;
  display: flex;
  position: absolute;
  right: 0;
  color: ${s.textSecondary};
  opacity: ${({disabled:e})=>e?.6:1};
  top: 0;
`,C=i.div`
  margin: 0 auto;
  position: relative;
  padding: 0;
  min-width: 300px;
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: flex-start;
`,M=i.div`
  position: relative;
  margin: 0.1em;
  height: auto;
  width: auto;
  display: block;
`,Pe=({size:e,type:r})=>{if(e==="large"&&r==="password")return"12px";if(e==="medium"&&r==="password")return"10px";if(r==="textarea")return"40px"},ce={large:"15px",small:"10px",medium:"12px"},ve={textarea:"17px",password:"40px",number:"72px",date:"45px"},K=i.img`
  z-index: 1;
  position: absolute;
  top: ${({type:e,size:r="large"})=>e==="textarea"||e==="password"?Pe:ce[r]};
  right: ${({type:e})=>ve[e||"text"]||"10px"};
`,Se=i.label`
  width: 70%;
  position: absolute;
  bottom: 0;
  top: 0;
  right: 5px;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 0;
  cursor: ${({type:e})=>e==="password"&&"pointer"};
  box-sizing: border-box;
`,He=e=>{const{error:r,warning:n,type:g}=e;if(n&&g==="password")return".7em";if(r&&g==="password")return".7em";if(!r||!n)return"0em";if(g==="number")return"0em"},Ve=({error:e,warning:r,type:n})=>{if(n==="password")return"37px";if(n!=="password"&&e)return"35px";if(n!=="password"&&r)return"35px"},Le=i.label`
  position: absolute;
  right: 25px;
  top: ${({size:e})=>ce[e||"large"]};
`,Ce=i.span`
  z-index: 1;
  position: absolute;
  display: flex;
  align-items: center;
  width: ${({type:e})=>e==="number"?"70px":Ve};
  top: 0;
  outiline: none;
  border: 0;
  bottom: 0;
  right: ${({type:e})=>e==="password"?"0":"5px"};
  padding: ${He};
  cursor: ${({disabled:e})=>e?"not-allowed":"auto"};
  opacity: ${({disabled:e})=>e?.6:1};
  border: ${({type:e})=>e==="password"?"2px solid transparent":""};
  &:focus {
    outline: none;
  }

  box-sizing: border-box;
`,Q=i.button`
  padding: 0;
  outline: none;
  margin: 0;
  border: 0;
  width: 100%;
  height: 70%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
`,xe=({TextHelp:e,label:r,type:n,rows:g,warning:m,maxLength:u,error:o,disabled:l,size:c,cols:z,readOnly:p,loading:W,placeholder:f,value:ue,name:w,forModal:h,onChange:x})=>{const[E,F]=j.useState(u||ue),[q,ge]=j.useState("password"),[A,S]=j.useState(n==="number"?0:""),b=j.useRef(null);j.useEffect(()=>{F(u)},[u]);const B=a=>{const d=a.target.value.length,T=a.target.maxLength||0;F(T-d),x&&x(a)},me=()=>{ge(a=>a==="password"?"text":"password")},N=a=>{const d=a.target.value;S(n==="number"?Number(d):d),x&&x(a)},he=a=>{if(a.preventDefault(),b.current){const d=Number(b.current.value)+1;S(d.toString());const T={value:d.toString(),name:w};x&&x({target:T})}},be=a=>{if(a.preventDefault(),b.current){const d=Number(b.current.value)-1;S(d.toString());const T={value:d.toString(),name:w};x&&x({target:T})}},H={position:"absolute",right:0,left:0,bottom:0,top:0,padding:0,margin:0,color:"red",borderRadius:"5px"};return t.jsx(t.Fragment,{children:W?t.jsx(C,{type:n,loading:W,children:t.jsxs(fe,{baseColor:s.skeletonElement,highlightColor:s.skeletonBackground,children:[t.jsxs(M,{children:[t.jsx(G,{children:r}),t.jsx(V,{style:H,count:1})]}),t.jsxs(M,{style:{width:"100%"},children:[n==="textarea"?t.jsxs(t.Fragment,{children:[t.jsxs(J,{children:[E,"/",u]}),t.jsx(_,{maxLength:u,cols:z,rows:g,error:o,warning:m,readOnly:p,disabled:l,placeholder:f,onChange:a=>B(a)})]}):t.jsx(t.Fragment,{children:t.jsx(L,{style:{width:"100%"},type:n,error:o,size:c,placeholder:f,disabled:l,readOnly:p})}),t.jsx(V,{style:H,count:1})]}),t.jsxs(M,{children:[t.jsx(Z,{children:e}),t.jsx(V,{style:H,count:1})]})]})}):t.jsxs(C,{type:n,children:[t.jsx(G,{type:n,error:o,size:c,disabled:l,readOnly:p,children:r}),n==="textarea"?t.jsxs(t.Fragment,{children:[!l&&!p&&t.jsx(t.Fragment,{children:(o||m)&&t.jsx(K,{type:n,size:c,src:o?D:R})}),t.jsxs(J,{children:[E,"/",u]}),t.jsx(_,{maxLength:u,onChange:a=>B(a),cols:z,rows:g,error:o,warning:m,readOnly:p,disabled:l,placeholder:f,name:w,forModal:h})]}):t.jsx(t.Fragment,{children:t.jsxs(C,{children:[t.jsx(t.Fragment,{children:t.jsxs(Ce,{type:n,error:o,warning:m,readOnly:p,disabled:l,forModal:h,tabIndex:1,children:[(o||m)&&t.jsx(K,{type:n,size:c,src:o?D:R}),n==="password"&&t.jsx(t.Fragment,{children:t.jsx(Se,{onClick:me,size:c,type:n,children:q==="password"?we:Te})}),n==="number"&&t.jsxs(t.Fragment,{children:[t.jsx(Q,{readOnly:p,disabled:l,forModal:h,onClick:a=>be(a),children:je}),t.jsx("span",{style:{margin:"0",padding:"0",background:s.borderSubtle01,width:"2px",height:"22px"}}),t.jsx(Q,{forModal:h,readOnly:p,disabled:l,onClick:a=>he(a),children:ye})]})]})}),n==="date"?t.jsxs(t.Fragment,{children:[t.jsx(L,{ref:b,type:"date",id:"date",error:o,size:c,placeholder:f,disabled:l,onChange:a=>N(a),value:A,readOnly:p,name:w,forModal:h}),t.jsx(Le,{htmlFor:"date",size:c,children:t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"17",height:"17",viewBox:"0 0 16 16",fill:"none",children:[t.jsx("rect",{width:"17",height:"17"}),t.jsx("path",{d:"M13 2H11V1H10V2H6V1H5V2H3C2.45 2 2 2.45 2 3V13C2 13.55 2.45 14 3 14H13C13.55 14 14 13.55 14 13V3C14 2.45 13.55 2 13 2ZM13 13H3V6H13V13ZM13 5H3V3H5V4H6V3H10V4H11V3H13V5Z",fill:s.iconPrimary})]})})]}):t.jsx(t.Fragment,{children:t.jsx(L,{ref:b,type:n==="password"?q:n,error:o,size:c,placeholder:f,disabled:l,onChange:a=>N(a),value:A,readOnly:p,name:w,forModal:h})})]})}),t.jsx(Z,{type:n,error:o,size:c,disabled:l,warning:m,children:e})]})})};xe.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},TextHelp:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},warning:{required:!1,tsType:{name:"boolean"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},forModal:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"union",raw:`| ((event: ChangeEvent<HTMLInputElement>) => void)
| ((event: ChangeEvent<HTMLTextAreaElement>) => void)`,elements:[{name:"unknown"},{name:"unknown"}]},description:""}}};const De={title:"Example/Input",component:xe,parameters:{layout:"centered"},tags:["autodocs"]},y={args:{type:"textarea",TextHelp:"Warning message goes here: Please be aware",label:"Label Text Area",placeholder:"Placeholder Text",rows:7,cols:40,maxLength:200}},$={args:{type:"text",TextHelp:"Warning message goes here: Please be aware",label:"Label",placeholder:"Placeholder Text",size:"large"}},k={args:{type:"password",TextHelp:"Warning message goes here: Please be aware ",label:"Label",placeholder:"Placeholder Text",size:"large"}},I={args:{type:"number",TextHelp:"Warning message goes here: Please be aware ",label:"Number-Input",placeholder:"Placeholder Text",size:"large"}},P={args:{type:"date",TextHelp:"Warning message goes here: Please be aware ",label:"Number-Input",placeholder:"Placeholder Text",size:"large"}};var U,X,Y;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    type: "textarea",
    TextHelp: "Warning message goes here: Please be aware",
    label: "Label Text Area",
    placeholder: "Placeholder Text",
    rows: 7,
    cols: 40,
    maxLength: 200
  }
}`,...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var O,ee,te;$.parameters={...$.parameters,docs:{...(O=$.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    type: "text",
    TextHelp: "Warning message goes here: Please be aware",
    label: "Label",
    placeholder: "Placeholder Text",
    size: "large"
  }
}`,...(te=(ee=$.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,ne,ae;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    type: "password",
    TextHelp: "Warning message goes here: Please be aware ",
    label: "Label",
    placeholder: "Placeholder Text",
    size: "large"
  }
}`,...(ae=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var se,oe,ie;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    type: "number",
    TextHelp: "Warning message goes here: Please be aware ",
    label: "Number-Input",
    placeholder: "Placeholder Text",
    size: "large"
  }
}`,...(ie=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,pe,de;P.parameters={...P.parameters,docs:{...(le=P.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    type: "date",
    TextHelp: "Warning message goes here: Please be aware ",
    label: "Number-Input",
    placeholder: "Placeholder Text",
    size: "large"
  }
}`,...(de=(pe=P.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};const Re=["TextArea","text","password","number","date"];export{y as TextArea,Re as __namedExportsOrder,P as date,De as default,I as number,k as password,$ as text};
