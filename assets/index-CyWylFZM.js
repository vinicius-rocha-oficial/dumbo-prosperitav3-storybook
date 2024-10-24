import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{d as i}from"./styled-components.browser.esm-D3-gLipQ.js";import{t as r}from"./contextual-D4vCP4YA.js";import{s as u}from"./statusicon-BiyrYhQW.js";import{w as y}from"./Warningfilled-CR6tEm8M.js";/* empty css              */import{a as b,b as j,c as w}from"./IconsInputLabel-E66WMmAT.js";const I=i.label`
  width: 17px;
  height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  position: relative;
`,o=i.label`
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
  border: ${({error:t})=>t?`1px solid ${r.supportError}`:"1px solid black"};
`,$=i.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: auto;
  gap: 5px;
  margin: 3px 0 3px 0;
`,T=i.div`
  width: 100%;
  min-width: ${({label:t})=>t?"16px":"0px"};
  opacity: ${({disabled:t,readOnly:n})=>t||n?".5":"1"};
  heigth: auto;
`,p=i.span`
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
`,k=i.input`
  display: none;
  cursor: pointer;
  &:checked + ${o} {
    outline: ${({error:t})=>t&&`1px solid ${r.supportError}`};
  }
  &:focus + ${o} {
    outline: 2px solid ${r.focus};
    outline-offset: 1.5px;
    border-radius: 0px;
  }
  &:checked + ${o} ~ ${p} {
    opacity: 1;
  }
`,q=i.span`
  color: ${r.textPrimary};
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
`,C=i.h1`
  color: ${r.textPrimary};
  font-family: IBM Plex Sans;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.32px;
  margin: 0 0 5px 0;
  text-align: start;
`,B=t=>{const{label:n,warning:c,error:l,readOnly:a,disabled:s,title:x,InvalidText:m,name:h,indeterminate:d,onChange:g,checked:f}=t;return e.jsx(e.Fragment,{children:e.jsxs(T,{label:n,readOnly:a,disabled:s,...t,children:[e.jsx(C,{children:x}),e.jsx(e.Fragment,{children:e.jsxs($,{...t,children:[e.jsxs(I,{id:"check",label:n,...t,children:[e.jsx(k,{type:"checkbox",name:h,disabled:s,indeterminate:d,checked:f,readOnly:a,onChange:g,...t}),e.jsx(o,{disabled:s,...t}),e.jsx(p,{children:a?e.jsx(e.Fragment,{children:b}):e.jsxs(e.Fragment,{children:[" ",d?j:w]})})]}),e.jsx(q,{children:n})]})}),(l||c)&&e.jsx(e.Fragment,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start",gap:"5px",margin:"8px 0 0 0",width:"100%"},children:[e.jsx("img",{src:l?y:u,style:{width:"15px",height:"15px",margin:"0"}}),e.jsx("p",{style:{margin:"0",fontFamily:"IBM Plex Sans",fontSize:"12px"},children:m})]})})]})})};B.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},warning:{required:!1,tsType:{name:"boolean"},description:""},title:{required:!1,tsType:{name:"string"},description:""},indeterminate:{required:!1,tsType:{name:"boolean"},description:""},InvalidText:{required:!1,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""}}};export{B as C};
