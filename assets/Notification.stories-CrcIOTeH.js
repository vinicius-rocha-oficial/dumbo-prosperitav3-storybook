import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{r as A}from"./index-CTjT7uj6.js";/* empty css              */import{h as j,V as W,i as I,j as q,k as N}from"./IconsInputLabel-E66WMmAT.js";import{t}from"./contextual-D4vCP4YA.js";import{m as x,l as h,d as r}from"./styled-components.browser.esm-D3-gLipQ.js";const B={info:t.notificationInfoBackground,Success:t.notificationSuccessBackground,Warning:t.notificationWarningBackground,Error:t.notificationErrorBackground},l={info:t.supportInfoInverse,Success:t.supportSuccessInverse,Warning:t.supportWarningInverse,Error:t.supportErrorInverse},X={info:j,Success:W,Warning:I,Error:q},M=x`
  from {
    transform: translateX(500px);
  }
  to {
    transform: translateX(0);
  }
`,R=x`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(500px);
  }
`,z=h`
  ${M} 0.2s ease-in-out;
`,P=h`
  ${R} 0.2s ease-in-out;
`,_=r.div`
  display: flex;
  flex-direction: column;
  min-width: 280px;
  border: 1px solid ${({status:e})=>l[e]};
  border-left: 3px solid ${({status:e})=>l[e]};
  background: ${({status:e})=>B[e]};
  border-radius:${({borderNone:e})=>e?"0":"0 8px 8px 0"};
  padding: ${({type:e})=>"1em 0.5em 1em 0"};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: ${t.textPrimary};
  position: fixed;
  transform: ${({actived:e})=>e?"translateX(0)":"translateX(500px)"};
  top: 30px;
  right: 40px;
  animation: ${({actived:e})=>e?z:P};
`,H=r.div`
  color: ${t.textPrimary};
  line-height: 18px;
  letter-spacing: 0.16px;
  display: flex;
  flex-direction: ${({type:e})=>e==="short"?"row":"column"};
  gap: 5px;
  min-width: 200px;
  max-width: ${({type:e})=>e==="short"?"none":"200px"};
  word-wrap: break-word;
`,V=r.p`
  color: ${t.textPrimary};
  font-weight: 400;
  font-size: 14px;
  margin: 0;
`,D=r.h1`
  color: ${t.textPrimary};
  font-weight: 600;
  font-size: 14px;
  margin: 0;
`,O=r.button`
  align-self: start;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`,F=r.button`
  background: transparent;
  color: #0f62fe;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  border: none;
  cursor: pointer;
  letter-spacing: 0.16px;
  align-self: start;
`,G=r.div`
  align-self: ${({type:e})=>e==="short"?"center":"start"};
  margin: ${({type:e})=>e==="short"?"0 10px 0 6px":"0 10px"};
  display: flex;
`,y=e=>{const{status:b,type:v,title:T,message:k,actived:w,buttons:a,children:i,borderNone:C}=e,[c,$]=A.useState(!w),E=()=>{$(S=>!S)};return n.jsxs(_,{borderNone:C,actived:c,type:v,...e,children:[n.jsxs("div",{style:{display:"flex",width:"100%",justifyContent:"space-around",margin:0,padding:0,alignItems:"center"},children:[n.jsx(G,{...e,children:X[b]}),n.jsxs(H,{...e,children:[n.jsx(D,{children:T}),n.jsx(V,{...e,children:k})]}),a&&n.jsx(F,{onClick:a.onClick,...e,children:a.label}),n.jsx(O,{actived:c,onClick:E,...e,children:N})]}),i&&n.jsx("div",{children:i})]})};y.__docgenInfo={description:"",methods:[],displayName:"Notification",props:{type:{required:!1,tsType:{name:"union",raw:'"short" | "large"',elements:[{name:"literal",value:'"short"'},{name:"literal",value:'"large"'}]},description:""},title:{required:!1,tsType:{name:"string"},description:""},status:{required:!0,tsType:{name:"union",raw:'"info" | "Success" | "Warning" | "Error"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"Success"'},{name:"literal",value:'"Warning"'},{name:"literal",value:'"Error"'}]},description:""},message:{required:!1,tsType:{name:"string"},description:""},actived:{required:!1,tsType:{name:"boolean"},description:""},buttons:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  label?: string;\r
  onClick?: () => void;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},borderNone:{required:!1,tsType:{name:"boolean"},description:""}}};const Z={title:"Example/Notification",component:y,parameters:{layout:"centered"},tags:["autodocs"]},o={args:{type:"large",status:"Warning",message:"Error Warning Messege Try Again",title:"Title",buttons:{label:"Action",onClick:()=>console.log("Action")}}},s={args:{status:"Success",message:"Error Warning Messege Try Again",title:"Title Container",buttons:{label:"",onClick:()=>console.log("Action")}}};var d,u,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    type: "large",
    status: "Warning",
    message: "Error Warning Messege Try Again",
    title: "Title",
    buttons: {
      label: "Action",
      onClick: () => console.log("Action")
    }
  }
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,m,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    status: "Success",
    message: "Error Warning Messege Try Again",
    title: "Title Container",
    buttons: {
      label: "",
      onClick: () => console.log("Action")
    }
  }
}`,...(f=(m=s.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const ee=["warning","success"];export{ee as __namedExportsOrder,Z as default,s as success,o as warning};
