import{j as n}from"./jsx-runtime-Cw0GR0a5.js";/* empty css              */import{h as k,V as C,i as $,j,k as q}from"./IconsInputLabel-E66WMmAT.js";import{t as r}from"./contextual-D4vCP4YA.js";import{d as t}from"./styled-components.browser.esm-D3-gLipQ.js";import"./index-CTjT7uj6.js";const I={info:r.notificationInfoBackground,success:r.notificationSuccessBackground,warning:r.notificationWarningBackground,error:r.notificationErrorBackground},c={info:r.supportInfoInverse,success:r.supportSuccessInverse,warning:r.supportWarningInverse,error:r.supportErrorInverse},E={info:k,success:C,warning:$,error:j},A=t.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  border: 1px solid ${({status:e})=>c[e]};
  border-left: 3px solid ${({status:e})=>c[e]};
  background: ${({status:e})=>I[e]};
  border-radius:${({noRadius:e})=>e?"0":"0 8px 8px 0"};
  padding: ${({type:e})=>"1em 0.5em 1em 0"};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: ${r.textPrimary};
  position: fixed;
  transform: ${({actived:e})=>e?"translateX(0)":"translateX(500px)"};
  top: ${({top:e})=>e||"30px"};
  right:  ${({right:e})=>e||"40px"};
  transition:.1s linear transform;
  z-index:${({zindex:e})=>e||"5"};
`,B=t.div`
  color: ${r.textPrimary};
  line-height: 18px;
  letter-spacing: 0.16px;
  display: flex;
  flex-direction: ${({type:e})=>e==="short"?"row":"column"};
  gap: 5px;
  min-width: 220px;
  max-width: ${({type:e})=>e==="short"?"none":"200px"};
  word-wrap: break-word;
`,R=t.p`
  color: ${r.textPrimary};
  font-weight: 400;
  font-size: 14px;
  margin: 0;
`,N=t.h1`
  color: ${r.textPrimary};
  font-weight: 600;
  font-size: 14px;
  margin: 0;
`,S=t.button`
  align-self: start;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`,W=t.button`
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
`,z=t.div`
  align-self: ${({type:e})=>e==="short"?"center":"start"};
  margin: ${({type:e})=>e==="short"?"0 10px 0 6px":"0 10px"};
  display: flex;
`,x=e=>{const{status:y,type:h,title:w,message:T,actived:v,buttons:a,children:o,noRadius:b,onClose:l}=e;return n.jsxs(A,{noRadius:b,type:h,...e,children:[n.jsxs("div",{style:{display:"flex",width:"100%",justifyContent:"space-around",margin:0,padding:0,alignItems:"center"},children:[n.jsx(z,{...e,children:E[y]}),n.jsxs(B,{...e,children:[n.jsx(N,{children:w}),n.jsx(R,{...e,children:T})]}),a&&n.jsx(W,{onClick:a.onClick,...e,children:a.label}),n.jsx(S,{actived:v,onClick:()=>{l&&l()},...e,children:q})]}),o&&n.jsx("div",{children:o})]})};x.__docgenInfo={description:"",methods:[],displayName:"Notification",props:{type:{required:!1,tsType:{name:"union",raw:'"short" | "large"',elements:[{name:"literal",value:'"short"'},{name:"literal",value:'"large"'}]},description:""},title:{required:!1,tsType:{name:"string"},description:""},status:{required:!0,tsType:{name:"union",raw:'"info" | "success" | "warning" | "error"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:""},message:{required:!1,tsType:{name:"string"},description:""},actived:{required:!1,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},buttons:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  label?: string;\r
  onClick?: () => void;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},noRadius:{required:!1,tsType:{name:"boolean"},description:""},zindex:{required:!1,tsType:{name:"string"},description:""},top:{required:!1,tsType:{name:"string"},description:""},right:{required:!1,tsType:{name:"string"},description:""}}};const O={title:"Example/Notification",component:x,parameters:{layout:"centered"},tags:["autodocs"]},s={args:{type:"large",status:"warning",message:"Error Warning Messege Try Again",title:"Title",onClose:()=>console.log("")}},i={args:{status:"success",message:"Error Warning Messege Try Again",title:"Title Container",buttons:{label:"",onClick:()=>console.log("Action")}}};var d,p,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    type: "large",
    status: "warning",
    message: "Error Warning Messege Try Again",
    title: "Title",
    onClose: () => console.log("")
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,m,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    status: "success",
    message: "Error Warning Messege Try Again",
    title: "Title Container",
    buttons: {
      label: "",
      onClick: () => console.log("Action")
    }
  }
}`,...(f=(m=i.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const F=["warning","success"];export{F as __namedExportsOrder,O as default,i as success,s as warning};
