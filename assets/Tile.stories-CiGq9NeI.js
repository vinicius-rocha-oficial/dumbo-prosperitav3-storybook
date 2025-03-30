import{j as a}from"./jsx-runtime-Cw0GR0a5.js";/* empty css              */import{r as E}from"./index-CTjT7uj6.js";import{d as l}from"./styled-components.browser.esm-D3-gLipQ.js";import{t}from"./contextual-D4vCP4YA.js";import{l as S,n as q,A as C,o as I}from"./IconsInputLabel-E66WMmAT.js";const s=l.div`
  background: ${t.layer01};
  display: flex;
  flex-direction: row-reverse;
  padding:${({variations:e})=>e==="default"?"0":"16px"};
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  min-height: ${({variations:e,expandable:n})=>e==="expandable"&&n?"250px":"50px"};
  align-items: center;
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  line-height: 20px;
  letter-spacing: 0.16px;
  border-radius: 8px;
  outline: none;
  color: ${t.textPrimary};
  border:${({borderNone:e})=>e?"0":`2px solid ${t.borderTile01}`};
  &:focus {
    border:${({borderNone:e})=>e?"0":`2px solid ${t.focus}`};
    outline: none;
  }
  transition: 0.1s linear all;
`,J=l.h1`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  text-align: start;
`,X=l.label``,A=l.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.16px;
  word-wrap: break-word;
  overflow-wrap: break-word;
`,f=l.span`
  align-self: ${({variations:e})=>e==="clickable"||e==="expandable"?"end":"start"};
  outline: ${({variations:e})=>e==="multi-selectable"&&`1px solid ${t.iconPrimary}`};
  border-radius: ${({variations:e})=>e==="multi-selectable"&&"2px"};
  outline-offset: -1px;
  margin: 0;
  padding: 0;
  transform: ${({expandable:e})=>e?"rotate(180deg)":""};
`,h=l.span`
  align-self: ${({variations:e})=>e==="clickable"||e==="expandable"?"end":"start"};
  opacity: ${({variations:e})=>e==="radio"||e==="multi-selectable"?"0":"1"};
  margin: 0;
  padding: 0;
  display: flex;
`,z=l.div`
  margin: 0;
  padding: 0;
  width:100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-self: start;
`,x=l.input`
  display: none;
  &:checked + ${s} {
    border: 2px solid ${t.borderInverse};
  }
  &:checked + ${s} ${f} ${h} {
    opacity: 1;
  }
`,w=e=>{const{variations:n,checked:o,textlabel:y,label:k,children:d,labelexpandable:c,value:p,name:m}=e,[r,T]=E.useState(!1),$={radio:S,"multi-selectable":q,expandable:C,clickable:I,default:null},j=()=>{n==="expandable"&&T(v=>!v)};return a.jsx(a.Fragment,{children:a.jsxs(X,{...e,children:[n==="radio"&&a.jsx(x,{type:"radio",name:m,value:p,checked:o}),n==="multi-selectable"&&a.jsx(x,{type:"checkbox",name:m,value:p,checked:o}),a.jsxs(s,{onClick:j,expandable:r,tabIndex:1,checked:o,...e,children:[a.jsx(f,{expandable:r,...e,children:a.jsx(h,{...e,children:$[n]})}),a.jsx(z,{...e,children:a.jsx(a.Fragment,{children:d?a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{width:"100%",padding:"0",margin:"0 auto"},children:a.jsx("div",{style:{margin:"0 auto",textAlign:"center",width:"100%"},children:d})}),n==="expandable"&&r&&a.jsx("div",{style:{width:"100%",wordWrap:"break-word",margin:"0",padding:"0"},children:c})]}):a.jsxs(a.Fragment,{children:[a.jsx(J,{...e,children:k}),a.jsx(A,{...e,children:y}),n==="expandable"&&r&&a.jsx("div",{style:{width:"100%",wordWrap:"break-word",margin:"0",padding:"0"},children:c})]})})})]})]})})};w.__docgenInfo={description:"",methods:[],displayName:"Tile",props:{variations:{required:!0,tsType:{name:"union",raw:`| "radio"\r
| "multi-selectable"\r
| "expandable"\r
| "clickable"\r
| "default"`,elements:[{name:"literal",value:'"radio"'},{name:"literal",value:'"multi-selectable"'},{name:"literal",value:'"expandable"'},{name:"literal",value:'"clickable"'},{name:"literal",value:'"default"'}]},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | JSX.Element",elements:[{name:"string"},{name:"JSX.Element"}]},description:""},textlabel:{required:!1,tsType:{name:"union",raw:"string | JSX.Element",elements:[{name:"string"},{name:"JSX.Element"}]},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},labelexpandable:{required:!1,tsType:{name:"union",raw:"string | JSX.Element",elements:[{name:"string"},{name:"JSX.Element"}]},description:""},value:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},borderNone:{required:!1,tsType:{name:"boolean"},description:""}}};const R={title:"Example/Tile",component:w,parameters:{layout:"centered"},tags:["autodocs"]},i={args:{variations:"radio",label:"Titulo",textlabel:"Label Titulo",width:"350px",labelexpandable:"Exemplo textExemplo"}};var b,u,g;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variations: "radio",
    label: "Titulo",
    textlabel: "Label Titulo",
    width: "350px",
    labelexpandable: \`Exemplo textExemplo\`
  }
}`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const W=["tile"];export{W as __namedExportsOrder,R as default,i as tile};
