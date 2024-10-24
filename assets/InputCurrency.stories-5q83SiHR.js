import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{r as D}from"./index-CTjT7uj6.js";import{d as i}from"./styled-components.browser.esm-D3-gLipQ.js";import{t as r}from"./contextual-D4vCP4YA.js";import{w as L}from"./Warningfilled-CR6tEm8M.js";import{s as M}from"./statusicon-BiyrYhQW.js";const B={large:"20px ",small:"15px",medium:"18px"},R={large:"13px",small:"12px",medium:"15px"},h=e=>{const{disabled:t,error:a}=e;return t?"1px solid transparent":a?`2px solid ${r.supportError}`:"0"},V=e=>{const{error:t,warning:a}=e;return t?r.supportError:a?r.textPrimary:r.textSecondary},_=i.label`
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
  color: ${r.textSecondary};
  opacity: ${({disabled:e})=>e?.5:1};
`,H=i.div`
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
`,A=i.input`
  height: ${({size:e})=>e&&R[e]};
  box-sizing: border-box;
  padding: ${({size:e})=>e&&B[e]};
  padding-right: ${({type:e,forSlider:t})=>e==="password"?"2.5em":e==="number"?"5em":t&&e==="text"?"0":e==="text"?"2.5em":""};
  border-radius:${({noRadius:e})=>e?"0px":"8px"} ;
  width:${({forSlider:e})=>e?"22%":"100%"};
  border: ${({disabled:e,error:t})=>e||t?h:"0"};
  border-bottom: ${({disabled:e,error:t,borderNone:a})=>e||t?h:a?"0":"1px solid gray"};
  background: ${({readOnly:e,forModal:t})=>e?"Transparent":t?r.background:r.field01};
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
  position: relative;
  &:focus {
    outline: 2px solid ${r.focus};
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
`,N=i.label`
  font-family: IBM Plex Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.32px;
  box-sizing: border-box;
  padding: 0;
  margin-top: 5px;
  opacity: ${({disabled:e})=>e?.5:1};
  color:${V}
`,W=i.img`
  z-index: 1;
  position: absolute;
`,F=i.span`
  z-index: 1;
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  outiline: none;
  border: 0;
  bottom: 0;
  right: 28px;
  cursor: ${({disabled:e})=>e?"not-allowed":"auto"};
  opacity: ${({disabled:e})=>e?.6:1};
  border: ${({type:e})=>e==="password"?"2px solid red":""};
  &:focus {
    outline: none;
  }
  box-sizing: border-box;
`,O=(e,t=!0,a=".",s=",")=>{let n=e;return n=n.replace(/\D/g,""),t&&(n=n.replace(/^0+/,"")),n=n.padStart(3,"0"),n=n.replace(/(\d)(\d{2})$/,"$1"+s+"$2"),n=n.replace(/(?=(\d{3})+(\D))\B/g,a),n},T=({message:e,label:t,type:a,warning:s,maxLength:n,error:l,disabled:d,size:c,readOnly:x,placeholder:v,value:I,name:k,forModal:g,forSlider:u,onChange:b,borderNone:q,noRadius:C})=>{const[z,j]=D.useState(I||"0,00"),E=m=>{const P=m.target.value,f=O(P);if(j(f),b){const S={...m,target:{...m.target,value:f}};b(S)}};return o.jsx("div",{children:o.jsxs(H,{type:a,forSlider:u,children:[o.jsx(o.Fragment,{children:o.jsx(F,{type:a,error:l,warning:s,readOnly:x,disabled:d,forModal:g,maxLength:n,forSlider:u,tabIndex:1,children:(l||s)&&o.jsx(W,{type:a,size:c,src:l?L:M})})}),o.jsx(_,{children:t}),o.jsx(A,{noRadius:C,borderNone:q,type:a??"text",error:l,size:c??"large",placeholder:v,disabled:d,value:`R$ ${z}`,onChange:E,readOnly:x,name:k,forModal:g,forSlider:u,maxLength:n}),o.jsx(N,{type:a,error:l,size:c,disabled:d,warning:s,children:e})]})})};T.__docgenInfo={description:"",methods:[],displayName:"InputCurrency",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},message:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},warning:{required:!1,tsType:{name:"boolean"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},forModal:{required:!1,tsType:{name:"boolean"},description:""},forSlider:{required:!1,tsType:{name:"boolean"},description:""},noRadius:{required:!1,tsType:{name:"boolean"},description:""},borderNone:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"union",raw:`| ((event: ChangeEvent<HTMLInputElement>) => void)\r
| ((event: ChangeEvent<HTMLTextAreaElement>) => void)`,elements:[{name:"unknown"},{name:"unknown"}]},description:""}}};const Y={title:"Example/InputCurrency",component:T,parameters:{layout:"centered"},tags:["autodocs"]},p={args:{type:"text",message:"Warning message goes here: Please be aware ",label:"Label",placeholder:"Placeholder Text",size:"large",onChange:e=>console.log(e.target.value)}};var y,$,w;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: "text",
    message: "Warning message goes here: Please be aware ",
    label: "Label",
    placeholder: "Placeholder Text",
    size: "large",
    onChange: e => console.log(e.target.value)
  }
}`,...(w=($=p.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};const Z=["Default"];export{p as Default,Z as __namedExportsOrder,Y as default};
