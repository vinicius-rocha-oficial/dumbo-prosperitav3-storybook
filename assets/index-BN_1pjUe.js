import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as k}from"./index-CTjT7uj6.js";import{d as a}from"./styled-components.browser.esm-D3-gLipQ.js";/* empty css              */import{t as o}from"./contextual-D4vCP4YA.js";import{w as D}from"./Warningfilled-CR6tEm8M.js";import{s as L}from"./statusicon-BiyrYhQW.js";import{S as Y,a as S}from"./index-ClYmvwGD.js";/* empty css                 */import{s as O,a as ee,b as te,m as ne}from"./IconsInputLabel-C-_tevyj.js";const re={large:"20px ",small:"15px",medium:"18px"},se={large:"13px",small:"12px",medium:"15px"},y=e=>{const{disabled:n,error:r}=e;return n?"2px solid transparent":r?`2px solid ${o.supportError}`:"2px solid transparent"},V=a.input`
  height: ${({size:e})=>e&&se[e]};
  box-sizing: border-box;
  padding: ${({size:e})=>e&&re[e]};
  padding-right: ${({type:e,forSlider:n})=>e==="password"?"2.5em":e==="number"?"5em":n&&e==="text"?"0":e==="text"?"2.5em":""};
  border-radius: 8px;
  width:${({forSlider:e})=>e?"22%":"100%"};
  transition: linear 0.1s;
  border: ${({disabled:e,error:n})=>e||n?y:"2px solid transparent"};
  border-bottom: ${({disabled:e,error:n})=>e||n?y:"2px solid gray"};
  background: ${({readOnly:e,forModal:n})=>e?"Transparent":n?o.background:o.field01};
  color: ${({disabled:e})=>e?o.textDisabled:o.textPrimary};
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
    border: ${({disabled:e})=>e?"2px solid transparent":`2px solid ${o.focus}`};
  }
  &:focus {
    border: 2px solid ${o.focus};
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
`,N=a.textarea`
  resize: none;
  border-radius: 8px;
  height: auto;
  border: ${({disabled:e,error:n})=>e||n?y:"2px solid transparent"};
  border-bottom: ${({disabled:e,error:n})=>e||n?y:"1px solid gray"};
  background: ${({readOnly:e,forModal:n})=>e?"Transparent":n?o.background:o.field01};
  color: ${o.textPrimary};
  font-family: "IBM Plex Sans";
  font-size: 14px;
  font-style: normal;
  width: 100%;
  padding: 1em;
  transition: linear 0.1s;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.16px;
  outline: 0;
  display: flex;
  padding-right: 2em;
  box-sizing: border-box;
  text-align: jutify;
  &::placeholder {
    color: ${o.textPlaceholder};
    padding: 0.1em;
    width: 95%;
  }
  &:active {
    border: ${({disabled:e})=>e?"2px solid transparent":`2px solid ${o.focus}`};
  }
  &:focus {
    border: 2px solid ${o.focus};
  }
`,oe=e=>{const{error:n,warning:r}=e;return n?o.supportError:r?o.textPrimary:o.textSecondary},R=a.label`
  font-family: IBM Plex Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.32px;
  box-sizing: border-box;
  padding: 0;
  margin-top: 5px;
  color: ${oe};
  opacity: ${({disabled:e})=>e?.5:1};
`,W=a.label`
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
  color: ${o.textSecondary};
  opacity: ${({disabled:e})=>e?.5:1};
`,Z=a.label`
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
  color: ${o.textSecondary};
  opacity: ${({disabled:e})=>e?.6:1};
  top: 0;
`,H=a.div`
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
`,C=a.div`
  position: relative;
  margin: 0.1em;
  height: auto;
  width: auto;
  display: block;
`,ie=({size:e,type:n})=>{if(e==="large"&&n==="password")return"12px";if(e==="medium"&&n==="password")return"10px";if(n==="textarea")return"40px"},J={large:"15px",small:"10px",medium:"12px"},ae={textarea:"17px",password:"40px",number:"72px",date:"45px"},_=a.img`
  z-index: 1;
  position: absolute;
  top: ${({type:e,size:n="large"})=>e==="textarea"||e==="password"?ie:J[n]};
  right: ${({type:e})=>ae[e||"text"]||"10px"};
`,le=a.label`
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
`,pe=e=>{const{error:n,warning:r,type:g}=e;if(r&&g==="password")return".7em";if(n&&g==="password")return".7em";if(!n||!r)return"0em";if(g==="number")return"0em"},de=({error:e,warning:n,type:r})=>{if(r==="password")return"37px";if(r!=="password"&&e)return"35px";if(r!=="password"&&n)return"35px"},ce=a.label`
  position: absolute;
  right: 25px;
  top: ${({size:e})=>J[e||"large"]};
`,xe=a.span`
  z-index: 1;
  position: absolute;
  display: flex;
  align-items: center;
  width: ${({type:e})=>e==="number"?"70px":de};
  top: 0;
  outiline: none;
  border: 0;
  bottom: 0;
  right: ${({type:e})=>e==="password"?"0":"5px"};
  padding: ${pe};
  cursor: ${({disabled:e})=>e?"not-allowed":"auto"};
  opacity: ${({disabled:e})=>e?.6:1};
  border: ${({type:e})=>e==="password"?"2px solid transparent":""};
  &:focus {
    outline: none;
  }

  box-sizing: border-box;
`,G=a.button`
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
`,ue=({TextHelp:e,label:n,type:r,rows:g,warning:h,maxLength:c,error:i,disabled:l,size:x,cols:P,readOnly:p,loading:M,placeholder:f,value:I,name:w,forModal:m,forSlider:j,onChange:u})=>{const[q,F]=k.useState(c||I),[B,K]=k.useState("password"),[E,T]=k.useState(r==="number"?0:""),b=k.useRef(null);k.useEffect(()=>{F(c)},[c]);const z=s=>{const d=s.target.value.length,$=s.target.maxLength||0;F($-d),u&&u(s)},Q=()=>{K(s=>s==="password"?"text":"password")},A=s=>{const d=s.target.value;T(r==="number"?Number(d):d),u&&u(s)},U=s=>{if(s.preventDefault(),b.current){const d=Number(b.current.value)+1;T(d.toString());const $={value:d.toString(),name:w};u&&u({target:$})}},X=s=>{if(s.preventDefault(),b.current){const d=Number(b.current.value)-1;T(d.toString());const $={value:d.toString(),name:w};u&&u({target:$})}},v={position:"absolute",right:0,left:0,bottom:0,top:0,padding:0,margin:0,color:"red",borderRadius:"5px"};return t.jsx(t.Fragment,{children:M?t.jsx(H,{type:r,loading:M,forSlider:j,children:t.jsxs(Y,{baseColor:o.skeletonElement,highlightColor:o.skeletonBackground,children:[t.jsxs(C,{children:[t.jsx(W,{children:n}),t.jsx(S,{style:v,count:1})]}),t.jsxs(C,{style:{width:"100%"},children:[r==="textarea"?t.jsxs(t.Fragment,{children:[t.jsxs(Z,{children:[q,"/",c]}),t.jsx(N,{maxLength:c,cols:P,rows:g,error:i,warning:h,readOnly:p,disabled:l,placeholder:f,onChange:s=>z(s)})]}):t.jsx(t.Fragment,{children:t.jsx(V,{style:{width:"100%"},type:r,error:i,size:x,placeholder:f,disabled:l,readOnly:p})}),t.jsx(S,{style:v,count:1})]}),t.jsxs(C,{children:[t.jsx(R,{children:e}),t.jsx(S,{style:v,count:1})]})]})}):t.jsxs(H,{forSlider:j,type:r,children:[t.jsx(W,{type:r,error:i,size:x,disabled:l,readOnly:p,children:n}),r==="textarea"?t.jsxs(t.Fragment,{children:[!l&&!p&&t.jsx(t.Fragment,{children:(i||h)&&t.jsx(_,{type:r,size:x,src:i?D:L})}),c&&t.jsxs(Z,{children:[q,"/",c]}),t.jsx(N,{maxLength:c,onChange:s=>z(Object(s)),cols:P,rows:g,error:i,warning:h,readOnly:p,disabled:l,placeholder:f,name:w,forModal:m,forSlider:j})]}):t.jsx(t.Fragment,{children:t.jsxs(H,{forModal:m,children:[t.jsx(t.Fragment,{children:t.jsxs(xe,{type:r,error:i,warning:h,readOnly:p,disabled:l,forModal:m,forSlider:j,tabIndex:1,children:[(i||h)&&t.jsx(_,{type:r,size:x,src:i?D:L}),r==="password"&&t.jsx(t.Fragment,{children:t.jsx(le,{onClick:Q,size:x,type:r,children:B==="password"?O:ee})}),r==="number"&&t.jsxs(t.Fragment,{children:[t.jsx(G,{readOnly:p,disabled:l,forModal:m,onClick:s=>X(s),children:te}),t.jsx("span",{style:{margin:"0",padding:"0",background:o.borderSubtle01,width:"2px",height:"22px"}}),t.jsx(G,{forModal:m,readOnly:p,disabled:l,onClick:s=>U(s),children:ne})]})]})}),r==="date"?t.jsxs(t.Fragment,{children:[t.jsx(V,{ref:b,type:"date",id:"date",error:i,size:x,placeholder:f,disabled:l,onChange:s=>A(Object(s)),value:I||E,readOnly:p,name:w,forModal:m}),t.jsx(ce,{htmlFor:"date",size:x,children:t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"17",height:"17",viewBox:"0 0 16 16",fill:"none",children:[t.jsx("rect",{width:"17",height:"17"}),t.jsx("path",{d:"M13 2H11V1H10V2H6V1H5V2H3C2.45 2 2 2.45 2 3V13C2 13.55 2.45 14 3 14H13C13.55 14 14 13.55 14 13V3C14 2.45 13.55 2 13 2ZM13 13H3V6H13V13ZM13 5H3V3H5V4H6V3H10V4H11V3H13V5Z",fill:o.iconPrimary})]})})]}):t.jsx(t.Fragment,{children:t.jsx(V,{ref:b,type:r==="password"?B:r,error:i,size:x,placeholder:f,disabled:l,onChange:s=>A(Object(s)),value:I||E,readOnly:p,name:w,forModal:m,forSlider:j,maxLength:c})})]})}),t.jsx(R,{type:r,error:i,size:x,disabled:l,warning:h,children:e})]})})};ue.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},TextHelp:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},warning:{required:!1,tsType:{name:"boolean"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},forModal:{required:!1,tsType:{name:"boolean"},description:""},forSlider:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"union",raw:`| ((event: ChangeEvent<HTMLInputElement>) => void)\r
| ((event: ChangeEvent<HTMLTextAreaElement>) => void)`,elements:[{name:"unknown"},{name:"unknown"}]},description:""}}};export{ue as I};
