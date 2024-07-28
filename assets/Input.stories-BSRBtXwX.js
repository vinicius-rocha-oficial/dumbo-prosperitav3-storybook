import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as w}from"./index-CTjT7uj6.js";import{d as i,t as s}from"./contextual-Cr4fQ3MC.js";/* empty css              */import{w as B}from"./Warningfilled-CR6tEm8M.js";import{s as F}from"./statusicon-BiyrYhQW.js";import{S as be,a as V}from"./index-ClYmvwGD.js";/* empty css                 */import{s as fe,d as we,e as Te,m as je}from"./IconsInputLabel-PpPdO3Ft.js";const ye={large:"20px ",small:"15px",medium:"18px"},$e={large:"13px",small:"12px",medium:"15px"},v=e=>{const{disabled:r,error:n}=e;return r?"2px solid transparent":n?`2px solid ${s.supportError}`:"2px solid transparent"},ke=()=>s.iconPrimary.replace("#","%23"),N=i.input`
  height: ${({size:e})=>e&&$e[e]};
  box-sizing: border-box;
  padding: ${({size:e})=>e&&ye[e]};
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
 background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 16 16" fill="none"><g id="Calendar"><rect width="16" height="16" style="mix-blend-mode:multiply"/><path id="Vector" d="M13 2H11V1H10V2H6V1H5V2H3C2.45 2 2 2.45 2 3V13C2 13.55 2.45 14 3 14H13C13.55 14 14 13.55 14 13V3C14 2.45 13.55 2 13 2ZM13 13H3V6H13V13ZM13 5H3V3H5V4H6V3H10V4H11V3H13V5Z" fill="${ke}"/></g></svg>') no-repeat;
      no-repeat;
    margin:.3em 0 0 0;
    border: none;
    cursor: pointer;
  }
`,D=i.textarea`
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
`,Ie=e=>{const{error:r,warning:n}=e;return r?s.supportError:n?s.textPrimary:s.textSecondary},R=i.label`
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
`,_=i.label`
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
`,Z=i.label`
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
`,L=i.div`
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
`,Pe=({size:e,type:r})=>{if(e==="large"&&r==="password")return"12px";if(e==="medium"&&r==="password")return"10px";if(r==="textarea")return"40px"},ve={large:"15px",small:"10px",medium:"12px"},He={textarea:"17px",password:"40px",number:"72px",date:"45px"},G=i.img`
  z-index: 1;
  position: absolute;
  top: ${({type:e,size:r="large"})=>e==="textarea"||e==="password"?Pe:ve[r]};
  right: ${({type:e})=>He[e||"text"]||"10px"};
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
`,Ve=e=>{const{error:r,warning:n,type:m}=e;if(n&&m==="password")return".7em";if(r&&m==="password")return".7em";if(!r||!n)return"0em";if(m==="number")return"0em"},Le=({error:e,warning:r,type:n})=>{if(n==="password")return"37px";if(n!=="password"&&e)return"35px";if(n!=="password"&&r)return"35px"},Me=i.span`
  z-index: 1;
  position: absolute;
  display: flex;
  align-items: center;
  width: ${({type:e})=>e==="number"?"70px":Le};
  top: 0;
  outiline: none;
  border: 0;
  bottom: 0;
  right: ${({type:e})=>e==="password"?"0":"5px"};
  padding: ${Ve};
  cursor: ${({disabled:e})=>e?"not-allowed":"auto"};
  opacity: ${({disabled:e})=>e?.6:1};
  border: ${({type:e})=>e==="password"?"2px solid transparent":""};
  &:focus {
    outline: none;
  }

  box-sizing: border-box;
`,J=i.button`
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
`,pe=({TextHelp:e,label:r,type:n,rows:m,warning:g,maxLength:u,error:o,disabled:l,size:x,cols:z,readOnly:d,loading:C,placeholder:T,value:de,name:j,forModal:h,onChange:c})=>{const[W,E]=w.useState(u||de),[q,ce]=w.useState("password"),[ue,H]=w.useState(n==="number"?0:""),b=w.useRef(null);w.useEffect(()=>{E(u)},[u]);const A=a=>{const p=a.target.value.length,f=a.target.maxLength||0;E(f-p),c&&c(a)},xe=()=>{ce(a=>a==="password"?"text":"password")},me=a=>{const p=a.target.value;H(n==="number"?Number(p):p),c&&c(a)},ge=a=>{if(a.preventDefault(),b.current){const p=Number(b.current.value)+1;H(p.toString());const f={value:p.toString(),name:j};c&&c({target:f})}},he=a=>{if(a.preventDefault(),b.current){const p=Number(b.current.value)-1;H(p.toString());const f={value:p.toString(),name:j};c&&c({target:f})}},S={position:"absolute",right:0,left:0,bottom:0,top:0,padding:0,margin:0,color:"red",borderRadius:"5px"};return t.jsx(t.Fragment,{children:C?t.jsx(L,{type:n,loading:C,children:t.jsxs(be,{baseColor:s.skeletonElement,highlightColor:s.skeletonBackground,children:[t.jsxs(M,{children:[t.jsx(_,{children:r}),t.jsx(V,{style:S,count:1})]}),t.jsxs(M,{style:{width:"100%"},children:[n==="textarea"?t.jsxs(t.Fragment,{children:[t.jsxs(Z,{children:[W,"/",u]}),t.jsx(D,{maxLength:u,cols:z,rows:m,error:o,warning:g,readOnly:d,disabled:l,placeholder:T,onChange:a=>A(a)})]}):t.jsx(t.Fragment,{children:t.jsx(N,{style:{width:"100%"},type:n,error:o,size:x,placeholder:T,disabled:l,readOnly:d})}),t.jsx(V,{style:S,count:1})]}),t.jsxs(M,{children:[t.jsx(R,{children:e}),t.jsx(V,{style:S,count:1})]})]})}):t.jsxs(L,{type:n,children:[t.jsx(_,{type:n,error:o,size:x,disabled:l,readOnly:d,children:r}),n==="textarea"?t.jsxs(t.Fragment,{children:[!l&&!d&&t.jsx(t.Fragment,{children:(o||g)&&t.jsx(G,{type:n,size:x,src:o?B:F})}),t.jsxs(Z,{children:[W,"/",u]}),t.jsx(D,{maxLength:u,onChange:a=>A(a),cols:z,rows:m,error:o,warning:g,readOnly:d,disabled:l,placeholder:T,name:j,forModal:h})]}):t.jsx(t.Fragment,{children:t.jsxs(L,{children:[t.jsx(t.Fragment,{children:t.jsxs(Me,{type:n,error:o,warning:g,readOnly:d,disabled:l,forModal:h,tabIndex:1,children:[(o||g)&&t.jsx(G,{type:n,size:x,src:o?B:F}),n==="password"&&t.jsx(t.Fragment,{children:t.jsx(Se,{onClick:xe,size:x,type:n,children:q==="password"?fe:we})}),n==="number"&&t.jsxs(t.Fragment,{children:[t.jsx(J,{readOnly:d,disabled:l,forModal:h,onClick:a=>he(a),children:Te}),t.jsx("p",{children:"|"}),t.jsx(J,{forModal:h,readOnly:d,disabled:l,onClick:a=>ge(a),children:je})]})]})}),t.jsx(N,{ref:b,type:n==="password"?q:n,error:o,size:x,placeholder:T,disabled:l,onChange:a=>me(a),value:ue,readOnly:d,name:j,forModal:h})]})}),t.jsx(R,{type:n,error:o,size:x,disabled:l,warning:g,children:e})]})})};pe.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},TextHelp:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},warning:{required:!1,tsType:{name:"boolean"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},forModal:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"union",raw:`| ((event: ChangeEvent<HTMLInputElement>) => void)
| ((event: ChangeEvent<HTMLTextAreaElement>) => void)`,elements:[{name:"unknown"},{name:"unknown"}]},description:""}}};const De={title:"Example/Input",component:pe,parameters:{layout:"centered"},tags:["autodocs"]},y={args:{type:"textarea",TextHelp:"Warning message goes here: Please be aware",label:"Label Text Area",placeholder:"Placeholder Text",rows:7,cols:40,maxLength:200}},$={args:{type:"text",TextHelp:"Warning message goes here: Please be aware",label:"Label",placeholder:"Placeholder Text",size:"large"}},k={args:{type:"password",TextHelp:"Warning message goes here: Please be aware ",label:"Label",placeholder:"Placeholder Text",size:"large"}},I={args:{type:"number",TextHelp:"Warning message goes here: Please be aware ",label:"Number-Input",placeholder:"Placeholder Text",size:"large"}},P={args:{type:"date",TextHelp:"Warning message goes here: Please be aware ",label:"Number-Input",placeholder:"Placeholder Text",size:"large"}};var K,Q,U;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    type: "textarea",
    TextHelp: "Warning message goes here: Please be aware",
    label: "Label Text Area",
    placeholder: "Placeholder Text",
    rows: 7,
    cols: 40,
    maxLength: 200
  }
}`,...(U=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,O;$.parameters={...$.parameters,docs:{...(X=$.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    type: "text",
    TextHelp: "Warning message goes here: Please be aware",
    label: "Label",
    placeholder: "Placeholder Text",
    size: "large"
  }
}`,...(O=(Y=$.parameters)==null?void 0:Y.docs)==null?void 0:O.source}}};var ee,te,re;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    type: "password",
    TextHelp: "Warning message goes here: Please be aware ",
    label: "Label",
    placeholder: "Placeholder Text",
    size: "large"
  }
}`,...(re=(te=k.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ne,ae,se;I.parameters={...I.parameters,docs:{...(ne=I.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    type: "number",
    TextHelp: "Warning message goes here: Please be aware ",
    label: "Number-Input",
    placeholder: "Placeholder Text",
    size: "large"
  }
}`,...(se=(ae=I.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,ie,le;P.parameters={...P.parameters,docs:{...(oe=P.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    type: "date",
    TextHelp: "Warning message goes here: Please be aware ",
    label: "Number-Input",
    placeholder: "Placeholder Text",
    size: "large"
  }
}`,...(le=(ie=P.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};const Re=["TextArea","text","password","number","date"];export{y as TextArea,Re as __namedExportsOrder,P as date,De as default,I as number,k as password,$ as text};
