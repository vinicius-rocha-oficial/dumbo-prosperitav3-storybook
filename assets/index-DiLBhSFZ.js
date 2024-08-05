import{j as a}from"./jsx-runtime-Cw0GR0a5.js";/* empty css              */import{r as T}from"./index-CTjT7uj6.js";import{d as i,t as l}from"./contextual-Cr4fQ3MC.js";import{C as j,a as $,A as v,b as E}from"./IconsInputLabel-DiahCgGh.js";const d=i.div`
  background: ${l.layer01};
  display: flex;
  flex-direction: row-reverse;
  padding: 16px;
  box-sizing: border-box;
  min-width: ${({width:e})=>e||"300px"};
  min-height: ${({variations:e,expandable:n})=>e==="expandable"&&n?"300px":e==="clickable"||e==="expandable"?"110px":"50px"};
  align-items: center;
  justify-content: space-between;
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  line-height: 20px;
  letter-spacing: 0.16px;
  border-radius: 8px;
  outline: none;
  color: ${l.textPrimary};
  border: 2px solid ${l.borderTile01};
  &:focus {
    border: 2px solid ${l.focus};
    outline: none;
  }
  transition: 0.1s linear min-height;
`,q=i.h1`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  word-wrap: break-word;
  overflow-wrap: break-word;
`,C=i.label``,S=i.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.16px;
  word-wrap: break-word;
  overflow-wrap: break-word;
`,x=i.span`
  align-self: ${({variations:e})=>e==="clickable"||e==="expandable"?"end":"start"};
  outline: ${({variations:e})=>e==="multi-selectable"&&`1px solid ${l.iconPrimary}`};
  border-radius: ${({variations:e})=>e==="multi-selectable"&&"2px"};
  outline-offset: -1px;
  margin: 0;
  padding: 0;
  transform: ${({expandable:e})=>e?"rotate(180deg)":""};
`,b=i.span`
  align-self: ${({variations:e})=>e==="clickable"||e==="expandable"?"end":"start"};
  opacity: ${({variations:e})=>e==="radio"||e==="multi-selectable"?"0":"1"};
  margin: 0;
  padding: 0;
  display: flex;
`,I=i.div`
  align-self: start;
  margin: 0;
  padding: 0;
  max-width: ${({width:e})=>e||"300px"};
  display: flex;
  flex-direction: column;
  gap: 18px;
`,m=i.input`
  display: none;
  &:checked + ${d} {
    border: 2px solid ${l.borderInverse};
  }
  &:checked + ${d} ${x} ${b} {
    opacity: 1;
  }
`,J=e=>{const{variations:n,checked:r,textlabel:g,label:u,width:f,children:s,labelexpandable:o,value:c,name:p}=e,[t,h]=T.useState(!1),w={radio:j,"multi-selectable":$,expandable:v,clickable:E,default:null},y=()=>{n==="expandable"&&h(k=>!k)};return a.jsx(a.Fragment,{children:a.jsxs(C,{width:f,...e,children:[n==="radio"&&a.jsx(m,{type:"radio",name:p,value:c,checked:r}),n==="multi-selectable"&&a.jsx(m,{type:"checkbox",name:p,value:c,checked:r}),a.jsxs(d,{onClick:y,expandable:t,tabIndex:1,checked:r,...e,children:[a.jsx(x,{expandable:t,...e,children:a.jsx(b,{...e,children:w[n]})}),a.jsx(I,{...e,children:a.jsx(a.Fragment,{children:s?a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{width:"100%",wordWrap:"break-word",padding:"0",margin:"0",display:"flex",alignItems:"center"},children:s}),n==="expandable"&&t&&a.jsx("div",{style:{width:"100%",wordWrap:"break-word",margin:"0",padding:"0"},children:o})]}):a.jsxs(a.Fragment,{children:[a.jsx(q,{...e,children:u}),a.jsx(S,{...e,children:g}),n==="expandable"&&t&&a.jsx("div",{style:{width:"100%",wordWrap:"break-word",margin:"0",padding:"0"},children:o})]})})})]})]})})};J.__docgenInfo={description:"",methods:[],displayName:"Tile",props:{variations:{required:!0,tsType:{name:"union",raw:`| "radio"
| "multi-selectable"
| "expandable"
| "clickable"
| "default"`,elements:[{name:"literal",value:'"radio"'},{name:"literal",value:'"multi-selectable"'},{name:"literal",value:'"expandable"'},{name:"literal",value:'"clickable"'},{name:"literal",value:'"default"'}]},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | JSX.Element",elements:[{name:"string"},{name:"JSX.Element"}]},description:""},textlabel:{required:!1,tsType:{name:"union",raw:"string | JSX.Element",elements:[{name:"string"},{name:"JSX.Element"}]},description:""},width:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},labelexpandable:{required:!1,tsType:{name:"union",raw:"string | JSX.Element",elements:[{name:"string"},{name:"JSX.Element"}]},description:""},value:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""}}};export{J as T};
