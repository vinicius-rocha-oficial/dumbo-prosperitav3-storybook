import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as T}from"./index-CTjT7uj6.js";import{d as l,t as n}from"./contextual-Cr4fQ3MC.js";/* empty css              */import{w as F}from"./Warningfilled-CR6tEm8M.js";import{s as N}from"./statusicon-BiyrYhQW.js";import{S as be,a as H}from"./index-ClYmvwGD.js";/* empty css                 */import{s as fe,c as Te,d as we,m as je}from"./IconsInputLabel-NZUeNpyL.js";const ye={large:"20px ",small:"15px",medium:"18px"},$e={large:"13px",small:"12px",medium:"15px"},S=e=>{const{disabled:r,error:a}=e;return r?"2px solid transparent":a?`2px solid ${n.supportError}`:"2px solid transparent"},V=l.input`
  height: ${({size:e})=>e&&$e[e]};
  box-sizing: border-box;
  padding: ${({size:e})=>e&&ye[e]};
  border-radius: 8px;
  width: 100%;
  transition: linear 0.1s;
  border: ${({disabled:e,error:r})=>e||r?S:"2px solid transparent"};
  border-bottom: ${({disabled:e,error:r})=>e||r?S:"1px solid gray"};
  background: ${({readOnly:e,forModal:r})=>e?"Transparent":r?n.background:n.field01};
  color: ${({disabled:e})=>e?n.textDisabled:n.textPrimary};
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
    border: ${({disabled:e})=>e?"2px solid transparent":`2px solid ${n.focus}`};
  }
  &:focus {
    border: 2px solid ${n.focus};
  }
`,D=l.textarea`
  resize: none;
  border-radius: 8px;
  height: auto;
  border: ${({disabled:e,error:r})=>e||r?S:"2px solid transparent"};
  border-bottom: ${({disabled:e,error:r})=>e||r?S:"1px solid gray"};
  background: ${({readOnly:e,forModal:r})=>e?"Transparent":r?n.background:n.field01};
  color: ${n.textPrimary};
  font-family: "IBM Plex Sans";
  font-size: 14px;
  font-style: normal;
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
    color: ${n.textPlaceholder};
    padding: 0.1em;
    width: 95%;
  }
  &:active {
    border: ${({disabled:e})=>e?"2px solid transparent":`2px solid ${n.focus}`};
  }
  &:focus {
    border: 2px solid ${n.focus};
  }
`,Pe=e=>{const{error:r,warning:a}=e;return r?n.supportError:a?n.textPrimary:n.textSecondary},R=l.label`
  font-family: IBM Plex Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.32px;
  box-sizing: border-box;
  padding: 0;
  margin-top: 5px;
  color: ${Pe};
  opacity: ${({disabled:e})=>e?.5:1};
`,_=l.label`
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
  color: ${n.textSecondary};
  opacity: ${({disabled:e})=>e?.5:1};
`,G=l.label`
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
  color: ${n.textSecondary};
  opacity: ${({disabled:e})=>e?.6:1};
  top: 0;
`,W=l.div`
  margin: 0 auto;
  position: relative;
  padding: 0;
  min-width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: flex-start;
`,z=l.div`
  position: relative;
  margin: 0.1em;
  height: auto;
  width: auto;
  display: block;
`,ke=({size:e,type:r})=>e==="small"?"6px":r==="textarea"?"40px":e==="large"?"12px":"10px",Ie={textarea:"14px",password:"40px",number:"72px"},J=l.img`
  z-index: 1;
  position: absolute;
  top: ${ke};
  right: ${({type:e})=>Ie[e||"text"]||"10px"};
  bottom: 0;
`,Se=l.label`
  width: 100%;
  position: absolute;
  bottom: 0;
  top: 0;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 0;
  cursor: ${({type:e})=>e==="password"&&"pointer"};
`,ve=e=>{const{error:r,warning:a,type:m}=e;if(a&&m==="password")return".7em";if(r&&m==="password")return".7em";if(!r||!a)return"0em";if(m==="number")return"0em"},Le=({error:e,warning:r,type:a})=>{if(a==="password")return"35px";if(a!=="password"&&e)return"35px";if(a!=="password"&&r)return"35px"},He=l.span`
  z-index: 1;
  position: absolute;
  display: flex;
  align-items: center;
  width: ${({type:e})=>e==="number"?"70px":Le};
  right: 3px;
  top: 3px;
  outiline: none;
  border: 0;
  bottom: 2px;
  padding: ${ve};
  background: ${({readOnly:e,forModal:r})=>e?"Transparent":r?n.background:n.field01};
  border-radius: 0px 8px 8px 0px;
  cursor: ${({disabled:e})=>e?"not-allowed":"auto"};
  opacity: ${({disabled:e})=>e?.6:1};
`,K=l.button`
  padding: 0;
  outline: none;
  border-radius: 0px 8px 8px 0px;
  border: 0;
  width: 100%;
  margin-top: 0.1em;
  height: 96%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({readOnly:e,forModal:r})=>e?"Transparent":r?n.background:n.field01};
  opacity: ${({disabled:e})=>e?.6:1};
`,pe=({TextHelp:e,label:r,type:a,rows:m,warning:g,maxLength:u,error:o,disabled:i,size:x,cols:E,readOnly:c,loading:M,placeholder:w,value:ce,name:j,forModal:h,onChange:d})=>{const[q,A]=T.useState(u||ce),[B,de]=T.useState("password"),[ue,v]=T.useState(a==="number"?0:""),b=T.useRef(null);T.useEffect(()=>{A(u)},[u]);const C=s=>{const p=s.target.value.length,f=s.target.maxLength||0;A(f-p),d&&d(s)},xe=()=>{de(s=>s==="password"?"text":"password")},me=s=>{const p=s.target.value;v(a==="number"?Number(p):p),d&&d(s)},ge=s=>{if(s.preventDefault(),b.current){const p=Number(b.current.value)+1;v(p.toString());const f={value:p.toString(),name:j};d&&d({target:f})}},he=s=>{if(s.preventDefault(),b.current){const p=Number(b.current.value)-1;v(p.toString());const f={value:p.toString(),name:j};d&&d({target:f})}},L={position:"absolute",right:0,left:0,bottom:0,top:0,padding:0,margin:0,color:"red",borderRadius:"8px"};return t.jsx(t.Fragment,{children:M?t.jsx(W,{type:a,loading:M,children:t.jsxs(be,{baseColor:n.skeletonBackground,highlightColor:n.skeletonElement,children:[t.jsxs(z,{children:[t.jsx(_,{children:r}),t.jsx(H,{style:L,count:1})]}),t.jsxs(z,{style:{width:"100%"},children:[a==="textarea"?t.jsxs(t.Fragment,{children:[t.jsxs(G,{children:[q,"/",u]}),t.jsx(D,{maxLength:u,cols:E,rows:m,error:o,warning:g,readOnly:c,disabled:i,placeholder:w,onChange:s=>C(s)})]}):t.jsx(t.Fragment,{children:t.jsx(V,{style:{width:"100%"},type:a,error:o,size:x,placeholder:w,disabled:i,readOnly:c})}),t.jsx(H,{style:L,count:1})]}),t.jsxs(z,{children:[t.jsx(R,{children:e}),t.jsx(H,{style:L,count:1})]})]})}):t.jsxs(W,{type:a,children:[t.jsx(_,{type:a,error:o,size:x,disabled:i,readOnly:c,children:r}),a==="textarea"?t.jsxs(t.Fragment,{children:[!i&&!c&&t.jsx(t.Fragment,{children:(o||g)&&t.jsx(J,{type:a,size:x,src:o?F:N})}),t.jsxs(G,{children:[q,"/",u]}),t.jsx(D,{maxLength:u,onChange:s=>C(s),cols:E,rows:m,error:o,warning:g,readOnly:c,disabled:i,placeholder:w,name:j,forModal:h})]}):t.jsx(t.Fragment,{children:t.jsxs(W,{children:[t.jsx(t.Fragment,{children:t.jsxs(He,{type:a,error:o,warning:g,readOnly:c,disabled:i,forModal:h,children:[(o||g)&&t.jsx(J,{type:a,size:x,src:o?F:N}),a==="password"&&t.jsx(t.Fragment,{children:t.jsx(Se,{onClick:xe,size:x,type:a,children:B==="password"?fe:Te})}),a==="number"&&t.jsxs(t.Fragment,{children:[t.jsx(K,{readOnly:c,disabled:i,forModal:h,onClick:s=>he(s),children:we}),t.jsx("p",{children:"|"}),t.jsx(K,{forModal:h,readOnly:c,disabled:i,onClick:s=>ge(s),children:je})]})]})}),t.jsx(V,{ref:b,type:a==="password"?B:a,error:o,size:x,placeholder:w,disabled:i,onChange:s=>me(s),value:ue,readOnly:c,name:j,forModal:h})]})}),t.jsx(R,{type:a,error:o,size:x,disabled:i,warning:g,children:e})]})})};pe.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},TextHelp:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},warning:{required:!1,tsType:{name:"boolean"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},forModal:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"union",raw:`| ((event: ChangeEvent<HTMLInputElement>) => void)
| ((event: ChangeEvent<HTMLTextAreaElement>) => void)`,elements:[{name:"unknown"},{name:"unknown"}]},description:""}}};const Ne={title:"Example/Input",component:pe,parameters:{layout:"centered"},tags:["autodocs"]},y={args:{type:"textarea",TextHelp:"Warning message goes here: Please be aware",label:"Label Text Area",placeholder:"Placeholder Text",rows:7,cols:40,maxLength:200}},$={args:{type:"text",TextHelp:"Warning message goes here: Please be aware",label:"Label",placeholder:"Placeholder Text",size:"large"}},P={args:{type:"password",TextHelp:"Warning message goes here: Please be aware ",label:"Label",placeholder:"Placeholder Text",size:"large"}},k={args:{type:"number",TextHelp:"Warning message goes here: Please be aware ",label:"Number-Input",placeholder:"Placeholder Text",size:"large"}},I={args:{type:"date",TextHelp:"Warning message goes here: Please be aware ",label:"Number-Input",placeholder:"Placeholder Text",size:"large"}};var Q,U,X;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    type: "textarea",
    TextHelp: "Warning message goes here: Please be aware",
    label: "Label Text Area",
    placeholder: "Placeholder Text",
    rows: 7,
    cols: 40,
    maxLength: 200
  }
}`,...(X=(U=y.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,O;$.parameters={...$.parameters,docs:{...(Y=$.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    type: "text",
    TextHelp: "Warning message goes here: Please be aware",
    label: "Label",
    placeholder: "Placeholder Text",
    size: "large"
  }
}`,...(O=(Z=$.parameters)==null?void 0:Z.docs)==null?void 0:O.source}}};var ee,te,re;P.parameters={...P.parameters,docs:{...(ee=P.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    type: "password",
    TextHelp: "Warning message goes here: Please be aware ",
    label: "Label",
    placeholder: "Placeholder Text",
    size: "large"
  }
}`,...(re=(te=P.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ae,ne,se;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    type: "number",
    TextHelp: "Warning message goes here: Please be aware ",
    label: "Number-Input",
    placeholder: "Placeholder Text",
    size: "large"
  }
}`,...(se=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,le,ie;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    type: "date",
    TextHelp: "Warning message goes here: Please be aware ",
    label: "Number-Input",
    placeholder: "Placeholder Text",
    size: "large"
  }
}`,...(ie=(le=I.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};const Ve=["TextArea","text","password","number","date"];export{y as TextArea,Ve as __namedExportsOrder,I as date,Ne as default,k as number,P as password,$ as text};
