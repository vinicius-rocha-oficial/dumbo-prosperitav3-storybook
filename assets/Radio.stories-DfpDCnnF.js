import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as M}from"./index-CTjT7uj6.js";import{d as o}from"./styled-components.browser.esm-D3-gLipQ.js";/* empty css              */import{t as a}from"./contextual-D4vCP4YA.js";import{s as z}from"./statusicon-BiyrYhQW.js";import{w as k}from"./Warningfilled-CR6tEm8M.js";const C=o.div`
  display: flex;
  flex-direction: ${({orientation:e})=>e==="horizontal"?"row":"column"};
  margin: ${({orientation:e})=>e==="horizontal"?"0px":"8px auto"};
  padding: 0;
  width: ${({label:e,radio:n})=>e||n?"auto":"18px"};
  gap: ${({orientation:e})=>e==="horizontal"?"10px":"6px"};
`,P=o.h1`
  color: ${({disabled:e})=>e?`${a.borderDisabled}`:` ${a.textSecondary}`};
  font-family: IBM Plex Sans;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.32px;
  margin: 0 0 5px 0;
  text-align: start;
  width: 100%;
  margin: 0;
  padding: 0;
`,u=o.input`
  appearance: none;
  width: 17px;
  height: 17px;
  border: ${({error:e,disabled:n})=>e?`2px solid ${a.supportError}`:n?`1px solid ${a.borderDisabled}`:`1px solid ${a.textPrimary}`};
  border-radius: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 0;
  cursor: pointer;
  &:checked::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 100%;
    background: ${a.iconPrimary};
    position: absolute;
    aling-self: center;
    transform: translateY(-50%, -50%);
    margin: 0;
    padding: 0;
  }
`,g=o.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin: ${({orientation:e})=>e==="horizontal"?"7px auto":"0"};
  padding: 0;
  width: auto;
  align-self: start;
  gap: 8px;
`,h=o.label`
  color: ${({disabled:e})=>e?`${a.borderDisabled}`:` ${a.textPrimary}`};
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  max-width: 200px;
  word-wrap: break-word;
  letter-spacing: 0.16px;
  text-align: start;
  cursor: pointer;
`,S=o.p`
  color: ${({disabled:e})=>e?`${a.borderDisabled}`:` ${a.textPrimary}`};
  font-family: IBM Plex Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  max-width: 200px;
  word-wrap: break-word;
  letter-spacing: 0.16px;
  text-align: start;
  cursor: pointer;
  margin: 0;
`,I=e=>{const{warning:n,error:r,disabled:l,title:j,onChange:E,InvalidText:R,texthelp:$,orientation:L,radio:p,label:m,name:q,value:x}=e;return t.jsxs(t.Fragment,{children:[t.jsx(P,{...e,children:j}),t.jsx(t.Fragment,{children:t.jsx(C,{orientation:L,label:m,...e,children:(p==null?void 0:p.map((i,c)=>M.createElement(g,{disabled:l,...e,key:c},t.jsx(u,{type:"radio",name:i.name,value:i.value,onChange:i.onChange,id:i.value,disabled:l,error:r},c),t.jsx(h,{for:i.value,...e,children:i.label}))))||t.jsx(t.Fragment,{children:t.jsxs(g,{disabled:l,...e,children:[t.jsx(u,{type:"radio",disabled:l,label:m,value:x,name:q,onChange:E,id:x,error:r}),t.jsx(h,{for:x,...e,children:m})]})})})}),t.jsxs(t.Fragment,{children:[!r&&!n&&t.jsx(S,{disabled:l,...e,children:$}),(r||n)&&t.jsx(t.Fragment,{children:t.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start",gap:"5px",margin:"0",width:"100%"},children:[t.jsx("img",{src:r?k:z,style:{width:"15px",height:"15px",margin:"0"}}),t.jsx("p",{style:{margin:"0",fontFamily:"IBM Plex Sans",fontSize:"12px",color:r?a.textError:a.textPrimary},children:R})]})})]})]})};I.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},warning:{required:!1,tsType:{name:"boolean"},description:""},title:{required:!1,tsType:{name:"string"},description:""},InvalidText:{required:!1,tsType:{name:"string"},description:""},for:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:""},texthelp:{required:!1,tsType:{name:"string"},description:""},radio:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  name?: string;
  value?: string;
}`,elements:[{name:"InputHTMLAttributes",elements:[{name:"HTMLInputElement"}],raw:"InputHTMLAttributes<HTMLInputElement>"},{name:"signature",type:"object",raw:`{
  label?: string;
  name?: string;
  value?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!1}},{key:"value",value:{name:"string",required:!1}}]}}]}],raw:"TypeRadioprops[]"},description:""},label:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""}}};const N={title:"Example/Radio",component:I,parameters:{layout:"centered"},tags:["autodocs"]},F=[{label:"Radio button label 1",name:"radio",value:"Label test 1",onChange:e=>console.log(e.target.value)},{label:"Radio button label 2",onChange:e=>console.log(e.target.value),name:"radio",value:"Label 2"}],s={args:{title:"Exemplo Text",texthelp:"Text Exemplo Label text",InvalidText:"Warning Messege Exemplo Input Radio",label:"Radio button ",value:"Label 2"}},d={args:{radio:F,title:"Group Radio",texthelp:"Text Exemplo Label text",InvalidText:"Warning Messege Exemplo Input Radio",orientation:"horizontal"}};var f,b,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: "Exemplo Text",
    texthelp: "Text Exemplo Label text",
    InvalidText: "Warning Messege Exemplo Input Radio",
    label: "Radio button ",
    value: "Label 2"
  }
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var T,v,w;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    radio: arrExemplo,
    title: "Group Radio",
    texthelp: "Text Exemplo Label text",
    InvalidText: "Warning Messege Exemplo Input Radio",
    orientation: "horizontal"
  }
}`,...(w=(v=d.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const O=["defaultRadio","RadioGroup"];export{d as RadioGroup,O as __namedExportsOrder,N as default,s as defaultRadio};
