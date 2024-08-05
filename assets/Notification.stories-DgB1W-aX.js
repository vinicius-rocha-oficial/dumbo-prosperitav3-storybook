import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as E}from"./index-CTjT7uj6.js";/* empty css              */import{g as I,V as $,h as j,i as W,j as B}from"./IconsInputLabel--_eZxZCn.js";import{t as n,m as x,l as h,d as r}from"./contextual-Cr4fQ3MC.js";const q={info:n.notificationInfoBackground,Success:n.notificationSuccessBackground,Warning:n.notificationWarningBackground,Error:n.notificationErrorBackground},c={info:n.supportInfoInverse,Success:n.supportSuccessInverse,Warning:n.supportWarningInverse,Error:n.supportErrorInverse},H={info:I,Success:$,Warning:j,Error:W},M=x`
  from {
    transform: translateX(500px);
  }
  to {
    transform: translateX(0);
  }
`,P=x`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(500px);
  }
`,N=h`
  ${M} 0.2s ease-in-out;
`,X=h`
  ${P} 0.2s ease-in-out;
`,R=r.div`
  display: flex;
  flex-direction: column;
  min-width: 280px;
  border: 1px solid ${({status:e})=>c[e]};
  border-left: 3px solid ${({status:e})=>c[e]};
  background: ${({status:e})=>q[e]};
  border-radius: 0 8px 8px 0;
  font-family: "IBM Plex Sans", sans-serif;
  padding: ${({type:e})=>"1em 0.5em 1em 0"};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: ${n.textPrimary};
  position: fixed;
  transform: ${({actived:e})=>e?"translateX(0)":"translateX(500px)"};
  top: 30px;
  right: 40px;
  animation: ${({actived:e})=>e?N:X};
`,z=r.div`
  color: ${n.textPrimary};
  font-family: "IBM Plex Sans", sans-serif;
  line-height: 18px;
  letter-spacing: 0.16px;
  display: flex;
  flex-direction: ${({type:e})=>e==="short"?"row":"column"};
  gap: 5px;
  min-width: 200px;
  max-width: ${({type:e})=>e==="short"?"none":"200px"};
  word-wrap: break-word;
`,_=r.p`
  color: ${n.textPrimary};
  font-weight: 400;
  font-size: 14px;
  margin: 0;
`,V=r.h1`
  color: ${n.textPrimary};
  font-weight: 600;
  font-size: 14px;
  font-family: "IBM Plex Sans", sans-serif;
  margin: 0;
`,D=r.button`
  align-self: start;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`,O=r.button`
  background: transparent;
  color: #0f62fe;
  text-align: center;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  border: none;
  cursor: pointer;
  letter-spacing: 0.16px;
  align-self: start;
`,F=r.div`
  align-self: ${({type:e})=>e==="short"?"center":"start"};
  margin: ${({type:e})=>e==="short"?"0 10px 0 6px":"0 10px"};
  display: flex;
`,y=e=>{const{status:b,type:v,title:T,message:w,actived:k,buttonHeader:o,children:i}=e,[l,S]=E.useState(!k),C=()=>{S(A=>!A)};return t.jsxs(R,{actived:l,type:v,...e,children:[t.jsxs("div",{style:{display:"flex",width:"100%",justifyContent:"space-around",margin:0,padding:0,alignItems:"center"},children:[t.jsx(F,{...e,children:H[b]}),t.jsxs(z,{...e,children:[t.jsx(V,{children:T}),t.jsx(_,{...e,children:w})]}),o&&t.jsx(O,{onClick:o.onClick,...e,children:o.label}),t.jsx(D,{actived:l,onClick:C,...e,children:B})]}),i&&t.jsx("div",{children:i})]})};y.__docgenInfo={description:"",methods:[],displayName:"Notification",props:{type:{required:!1,tsType:{name:"union",raw:'"short" | "large"',elements:[{name:"literal",value:'"short"'},{name:"literal",value:'"large"'}]},description:""},title:{required:!1,tsType:{name:"string"},description:""},status:{required:!0,tsType:{name:"union",raw:'"info" | "Success" | "Warning" | "Error"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"Success"'},{name:"literal",value:'"Warning"'},{name:"literal",value:'"Error"'}]},description:""},message:{required:!1,tsType:{name:"string"},description:""},actived:{required:!1,tsType:{name:"boolean"},description:""},buttonHeader:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  label?: string;
  onClick?: () => void;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const U={title:"Example/Notification",component:y,parameters:{layout:"centered"},tags:["autodocs"]},s={args:{type:"large",status:"Warning",message:"Error Warning Messege Try Again",title:"Title",buttonHeader:{label:"Action",onClick:()=>console.log("Action")}}},a={args:{status:"Success",message:"Error Warning Messege Try Again",title:"Title Container",buttonHeader:{label:"Action",onClick:()=>console.log("Action")}}};var d,g,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    type: "large",
    status: "Warning",
    message: "Error Warning Messege Try Again",
    title: "Title",
    buttonHeader: {
      label: "Action",
      onClick: () => console.log("Action")
    }
  }
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var m,p,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    status: "Success",
    message: "Error Warning Messege Try Again",
    title: "Title Container",
    buttonHeader: {
      label: "Action",
      onClick: () => console.log("Action")
    }
  }
}`,...(f=(p=a.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const Y=["warning","success"];export{Y as __namedExportsOrder,U as default,a as success,s as warning};
