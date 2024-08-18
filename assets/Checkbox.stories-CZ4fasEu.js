import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{d as r}from"./styled-components.browser.esm-D3-gLipQ.js";import{t as i}from"./contextual-D4vCP4YA.js";import{s as E}from"./statusicon-BiyrYhQW.js";import{w as v}from"./Warningfilled-CR6tEm8M.js";/* empty css              */import{a as q,b as C,c as L}from"./IconsInputLabel-DNdvQB1m.js";import"./index-CTjT7uj6.js";const S=r.label`
  width: 17px;
  height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  position: relative;
`,s=r.label`
  width: auto;
  height: auto;
  display: flex;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border-radius: 2px;
  border: ${({error:t})=>t?`1px solid ${i.supportError}`:"1px solid black"};
`,B=r.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: auto;
  gap: 5px;
  margin: 3px 0 3px 0;
`,F=r.div`
  width: 100%;
  min-width: ${({label:t})=>t?"16px":"0px"};
  opacity: ${({disabled:t,readOnly:n})=>t||n?".5":"1"};
  heigth: auto;
`,f=r.span`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  cursor: pointer;
  opacity: 0;
  position: absolute;
  box-sizing: border-box;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`,M=r.input`
  display: none;
  cursor: pointer;
  &:checked + ${s} {
    outline: ${({error:t})=>t&&`1px solid ${i.supportError}`};
  }
  &:focus + ${s} {
    outline: 2px solid ${i.focus};
    outline-offset: 1.5px;
    border-radius: 0px;
  }
  &:checked + ${s} ~ ${f} {
    opacity: 1;
  }
`,A=r.span`
  color: ${i.textPrimary};
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  max-width: 200px;
  padding: ${({label:t})=>t?"0 1em 0 0.7em":"0px"};
  word-wrap: break-word;
  letter-spacing: 0.16px;
  text-align: start;
`,P=r.h1`
  color: ${i.textPrimary};
  font-family: IBM Plex Sans;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.32px;
  margin: 0 0 5px 0;
  text-align: start;
`,y=t=>{const{label:n,warning:I,error:d,readOnly:l,disabled:p,title:j,InvalidText:T,name:w,indeterminate:c,onChange:k,checked:$}=t;return e.jsx(e.Fragment,{children:e.jsxs(F,{label:n,readOnly:l,disabled:p,...t,children:[e.jsx(P,{children:j}),e.jsx(e.Fragment,{children:e.jsxs(B,{...t,children:[e.jsxs(S,{id:"check",label:n,...t,children:[e.jsx(M,{type:"checkbox",name:w,disabled:p,indeterminate:c,checked:$,readOnly:l,onChange:k,...t}),e.jsx(s,{disabled:p,...t}),e.jsx(f,{children:l?e.jsx(e.Fragment,{children:q}):e.jsxs(e.Fragment,{children:[" ",c?C:L]})})]}),e.jsx(A,{children:n})]})}),(d||I)&&e.jsx(e.Fragment,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start",gap:"5px",margin:"8px 0 0 0",width:"100%"},children:[e.jsx("img",{src:d?v:E,style:{width:"15px",height:"15px",margin:"0"}}),e.jsx("p",{style:{margin:"0",fontFamily:"IBM Plex Sans",fontSize:"12px"},children:T})]})})]})})};y.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},warning:{required:!1,tsType:{name:"boolean"},description:""},title:{required:!1,tsType:{name:"string"},description:""},indeterminate:{required:!1,tsType:{name:"boolean"},description:""},InvalidText:{required:!1,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""}}};const N={title:"Example/Checkbox",component:y,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{label:"Text Exemplo Label Input",title:"Group label",InvalidText:"Warning Messege Alert"}},o={args:{label:"Text Exemplo Label Input",title:"Group label",error:!0,InvalidText:"Warning Messege Alert"}};var x,m,g;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Text Exemplo Label Input",
    title: "Group label",
    InvalidText: "Warning Messege Alert"
  }
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,h,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Text Exemplo Label Input",
    title: "Group label",
    error: true,
    InvalidText: "Warning Messege Alert"
  }
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const H=["checkbox","Error"];export{o as Error,H as __namedExportsOrder,a as checkbox,N as default};
