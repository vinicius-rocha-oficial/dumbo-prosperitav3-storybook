import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as k}from"./index-CTjT7uj6.js";import{d as a}from"./styled-components.browser.esm-D3-gLipQ.js";/* empty css              */import{t as s}from"./contextual-D4vCP4YA.js";import{w as L}from"./Warningfilled-CR6tEm8M.js";import{s as N}from"./statusicon-BiyrYhQW.js";import{S as ee,a as H}from"./index-ClYmvwGD.js";/* empty css                 */import{s as te,d as ne,e as re,m as se}from"./IconsInputLabel-E66WMmAT.js";const oe={large:"20px ",small:"15px",medium:"18px"},ie={large:"13px",small:"12px",medium:"15px"},I=e=>{const{disabled:r,error:n}=e;return r?"1px solid transparent":n?`2px solid ${s.supportError}`:"0"},q=a.input`
  height: ${({size:e})=>e&&ie[e]};
  box-sizing: border-box;
  padding: ${({size:e})=>e&&oe[e]};
  padding-right: ${({type:e,forSlider:r})=>e==="password"?"2.5em":e==="number"?"5em":r&&e==="text"?"0":e==="text"?"2.5em":""};
  border-radius: ${({noRadius:e})=>e?"0px":"8px"};
  width:${({forSlider:e})=>e?"22%":"100%"};
  border: ${({disabled:e,error:r})=>e||r?I:"0"};
  border-bottom: ${({disabled:e,error:r,borderNone:n})=>e||r?I:n?"0":"1px solid gray"};
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
  &:focus {
    outline: 2px solid ${s.focus};
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    display: none;
    opacity: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    opacity: 0;
  }
  &::-webkit-calendar-picker-indicator {
    -webkit-appearance: none;
    z-index: 3;
    opacity: 0;
    cursor: pointer;
  }
  &::-ms-clear {
    opacity: 0;
    -moz-appearance: textfield;
  }
`,W=a.textarea`
  resize: none;
  border-radius: ${({noRadius:e})=>e?"0px":"8px"};
  height: auto;
  border: ${({disabled:e,error:r})=>e||r?I:"2px solid transparent"};
  border-bottom: ${({disabled:e,error:r,borderNone:n})=>e||r?I:n?"0":"1px solid gray"};
  background: ${({readOnly:e,forModal:r})=>e?"Transparent":r?s.background:s.field01};
  color: ${s.textPrimary};
  font-family: "IBM Plex Sans";
  font-size: 14px;
  font-style: normal;
  width: 100%;
  padding: 1em;
  transition:  linear outline .1s;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.16px;
  outline: 0px solid transparent;;
  display: flex;
  padding-right: 2em;
  box-sizing: border-box;
  text-align: jutify;
  &::placeholder {
    color: ${s.textPlaceholder};
    padding: 0.1em;
    width: 95%;
  }
  &:focus {
    outline: 2px solid ${s.focus};
  }
`,ae=e=>{const{error:r,warning:n}=e;return r?s.supportError:n?s.textPrimary:s.textSecondary},Z=a.label`
  font-family: IBM Plex Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.32px;
  box-sizing: border-box;
  padding: 0;
  margin-top: 5px;
  color: ${ae};
  opacity: ${({disabled:e})=>e?.5:1};
`,R=a.label`
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
`,_=a.label`
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
  right: 0px;
  color: ${s.textSecondary};
  opacity: ${({disabled:e})=>e?.6:1};
  top: 0;
`,C=a.div`
  margin: 0 auto;
  position: relative;
  padding: 0;
  min-width: ${({forSlider:e})=>e?"":"300px"};
  max-width:${({forSlider:e})=>e&&"100px"};
  width:${({forSlider:e})=>e?"50%":"100%"};
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: flex-start;
`,P=a.div`
  position: relative;
  margin: 0.1em;
  height: auto;
  width: auto;
  display: block;
`,le=({size:e,type:r})=>{if(e==="large"&&r==="password")return"12px";if(e==="medium"&&r==="password")return"10px";if(r==="textarea")return"40px"},K={large:"15px",small:"10px",medium:"12px"},pe={textarea:"17px",password:"40px",number:"72px",date:"45px"},G=a.img`
  z-index: 1;
  position: absolute;
  top: ${({type:e,size:r="large"})=>e==="textarea"||e==="password"?le:K[r]};
  right: ${({type:e})=>pe[e||"text"]||"10px"};
`,de=a.label`
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
`,ce=e=>{const{error:r,warning:n,type:g}=e;if(n&&g==="password")return".7em";if(r&&g==="password")return".7em";if(!r||!n)return"0em";if(g==="number")return"0em"},xe=({error:e,warning:r,type:n})=>{if(n==="password")return"37px";if(n!=="password"&&e)return"35px";if(n!=="password"&&r)return"35px"},ue=a.label`
  position: absolute;
  right: 25px;
  top: ${({size:e})=>K[e||"large"]};
`,me=a.span`
  z-index: 1;
  position: absolute;
  display: flex;
  align-items: center;
  width: ${({type:e})=>e==="number"?"70px":xe};
  top: 0;
  outiline: none;
  border: 0;
  bottom: 0;
  right: ${({type:e})=>e==="password"?"0":"5px"};
  padding: ${ce};
  cursor: ${({disabled:e})=>e?"not-allowed":"auto"};
  opacity: ${({disabled:e})=>e?.6:1};
  border: ${({type:e})=>e==="password"?"2px solid transparent":""};
  &:focus {
    outline: none;
  }
  box-sizing: border-box;
`,J=a.button`
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
`,ge=({message:e,label:r,type:n,rows:g,warning:h,maxLength:l,error:i,disabled:p,size:c,cols:M,readOnly:d,loading:F,placeholder:w,value:f,name:j,forModal:m,forSlider:$,borderNone:T,noRadius:y,onChange:x})=>{const[B,E]=k.useState(l||f),[z,Q]=k.useState("password"),[v,S]=k.useState(n==="number"?0:""),b=k.useRef(null),A=o=>{const u=o.target.value.length,O=o.target.maxLength||0;E(O-u),x&&x(o)},U=()=>{Q(o=>o==="password"?"text":"password")},D=o=>{const u=o.target.value;S(n==="number"?Number(u):u),x&&x(o)},X=()=>{if(b.current){const o=Number(b.current.value)+1;S(o.toString());const u={value:o.toString(),name:j};x&&x({target:u})}},Y=()=>{if(b.current){const o=Number(b.current.value)-1;S(o.toString());const u={value:o.toString(),name:j};x&&x({target:u})}},V={position:"absolute",right:0,left:0,bottom:0,top:0,padding:0,margin:0,color:"red",borderRadius:"5px"};return k.useEffect(()=>{E(l)},[l,f,v]),t.jsx(t.Fragment,{children:F?t.jsx(C,{type:n,loading:F,forSlider:$,children:t.jsxs(ee,{baseColor:s.skeletonElement,highlightColor:s.skeletonBackground,children:[t.jsxs(P,{children:[t.jsx(R,{children:r}),t.jsx(H,{style:V,count:1})]}),t.jsxs(P,{style:{width:"100%"},children:[n==="textarea"?t.jsxs(t.Fragment,{children:[t.jsxs(_,{children:[B,"/",l]}),t.jsx(W,{onChange:A,value:f,maxLength:l,cols:M,rows:g,error:i,warning:h,readOnly:d,disabled:p,placeholder:w,borderNone:T,noRadius:y})]}):t.jsx(t.Fragment,{children:t.jsx(q,{style:{width:"100%"},type:n,error:i,size:c,placeholder:w,disabled:p,readOnly:d})}),t.jsx(H,{style:V,count:1})]}),t.jsxs(P,{children:[t.jsx(Z,{children:e}),t.jsx(H,{style:V,count:1})]})]})}):t.jsxs(C,{forSlider:$,type:n,children:[t.jsx(R,{type:n,error:i,size:c,disabled:p,readOnly:d,children:r}),n==="textarea"?t.jsxs(t.Fragment,{children:[!p&&!d&&t.jsx(t.Fragment,{children:(i||h)&&t.jsx(G,{type:n,size:c,src:i?L:N})}),l&&t.jsxs(_,{children:[B,"/",l]}),t.jsx(W,{maxLength:l,onChange:A,cols:M,rows:g,value:f,error:i,borderNone:T,noRadius:y,warning:h,readOnly:d,disabled:p,placeholder:w,name:j,forModal:m,forSlider:$})]}):t.jsx(t.Fragment,{children:t.jsxs(C,{forModal:m,children:[t.jsx(t.Fragment,{children:t.jsxs(me,{type:n,error:i,warning:h,readOnly:d,disabled:p,forModal:m,maxLength:l,forSlider:$,tabIndex:1,children:[(i||h)&&t.jsx(G,{type:n,size:c,src:i?L:N}),n==="password"&&t.jsx(t.Fragment,{children:t.jsx(de,{onClick:U,size:c,type:n,children:z==="password"?te:ne})}),n==="number"&&t.jsxs(t.Fragment,{children:[t.jsx(J,{readOnly:d,disabled:p,forModal:m,onClick:Y,children:re}),t.jsx("span",{style:{margin:"0",padding:"0",background:s.borderSubtle01,width:"2px",height:"22px"}}),t.jsx(J,{forModal:m,readOnly:d,disabled:p,onClick:X,children:se})]})]})}),n==="date"?t.jsxs(t.Fragment,{children:[t.jsx(q,{ref:b,type:"date",id:"date",error:i,size:c,borderNone:T,noRadius:y,placeholder:w,disabled:p,value:n!=="number"?f:v,onChange:D,readOnly:d,maxLength:l,name:j,forModal:m}),t.jsx(ue,{htmlFor:"date",size:c,children:t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"17",height:"17",viewBox:"0 0 16 16",fill:"none",children:[t.jsx("rect",{width:"17",height:"17"}),t.jsx("path",{d:"M13 2H11V1H10V2H6V1H5V2H3C2.45 2 2 2.45 2 3V13C2 13.55 2.45 14 3 14H13C13.55 14 14 13.55 14 13V3C14 2.45 13.55 2 13 2ZM13 13H3V6H13V13ZM13 5H3V3H5V4H6V3H10V4H11V3H13V5Z",fill:s.iconPrimary})]})})]}):t.jsx(t.Fragment,{children:t.jsx(q,{ref:b,type:n==="password"?z:n,error:i,size:c,placeholder:w,disabled:p,value:n!=="number"?f:v,onChange:D,readOnly:d,name:j,borderNone:T,noRadius:y,forModal:m,forSlider:$,maxLength:l})})]})}),t.jsx(Z,{type:n,error:i,size:c,disabled:p,warning:h,children:e})]})})};ge.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},message:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},warning:{required:!1,tsType:{name:"boolean"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},forModal:{required:!1,tsType:{name:"boolean"},description:""},forSlider:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"union",raw:`| ((event: ChangeEvent<HTMLInputElement>) => void)\r
| ((event: ChangeEvent<HTMLTextAreaElement>) => void)`,elements:[{name:"unknown"},{name:"unknown"}]},description:""},noRadius:{required:!1,tsType:{name:"boolean"},description:""},borderNone:{required:!1,tsType:{name:"boolean"},description:""}}};export{ge as I};
