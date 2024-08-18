import{j as a}from"./jsx-runtime-Cw0GR0a5.js";/* empty css              */import{r as S}from"./index-CTjT7uj6.js";import{d as l}from"./styled-components.browser.esm-D3-gLipQ.js";import{t}from"./contextual-D4vCP4YA.js";import{l as q,n as C,A as I,o as J}from"./IconsInputLabel-DNdvQB1m.js";const s=l.div`
  background: ${t.layer01};
  display: flex;
  flex-direction: row-reverse;
  padding: 16px;
  margin: 0;
  box-sizing: border-box;
  min-width: ${({width:e})=>e||"300px"};
  min-height: ${({variations:e,expandable:n})=>e==="expandable"&&n?"250px":"50px"};
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
  color: ${t.textPrimary};
  border: 2px solid ${t.borderTile01};
  &:focus {
    border: 2px solid ${t.focus};
    outline: none;
  }
  transition: 0.1s linear all;
`,X=l.h1`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  text-align: start;
`,z=l.label``,A=l.p`
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
`,F=l.div`
  margin: 0;
  padding: 0;
  max-width: ${({width:e})=>e||"300px"};
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
`,w=e=>{const{variations:n,checked:o,textlabel:y,label:k,width:T,children:d,labelexpandable:p,value:c,name:m}=e,[i,j]=S.useState(!1),$={radio:q,"multi-selectable":C,expandable:I,clickable:J,default:null},E=()=>{n==="expandable"&&j(v=>!v)};return a.jsx(a.Fragment,{children:a.jsxs(z,{width:T,...e,children:[n==="radio"&&a.jsx(x,{type:"radio",name:m,value:c,checked:o}),n==="multi-selectable"&&a.jsx(x,{type:"checkbox",name:m,value:c,checked:o}),a.jsxs(s,{onClick:E,expandable:i,tabIndex:1,checked:o,...e,children:[a.jsx(f,{expandable:i,...e,children:a.jsx(h,{...e,children:$[n]})}),a.jsx(F,{...e,children:a.jsx(a.Fragment,{children:d?a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{width:"100%",wordWrap:"break-word",padding:"0",margin:"0",display:"flex",alignItems:"center"},children:d}),n==="expandable"&&i&&a.jsx("div",{style:{width:"97%",wordWrap:"break-word",margin:"0",padding:"0"},children:p})]}):a.jsxs(a.Fragment,{children:[a.jsx(X,{...e,children:k}),a.jsx(A,{...e,children:y}),n==="expandable"&&i&&a.jsx("div",{style:{width:"100%",wordWrap:"break-word",margin:"0",padding:"0"},children:p})]})})})]})]})})};w.__docgenInfo={description:"",methods:[],displayName:"Tile",props:{variations:{required:!0,tsType:{name:"union",raw:`| "radio"
| "multi-selectable"
| "expandable"
| "clickable"
| "default"`,elements:[{name:"literal",value:'"radio"'},{name:"literal",value:'"multi-selectable"'},{name:"literal",value:'"expandable"'},{name:"literal",value:'"clickable"'},{name:"literal",value:'"default"'}]},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | JSX.Element",elements:[{name:"string"},{name:"JSX.Element"}]},description:""},textlabel:{required:!1,tsType:{name:"union",raw:"string | JSX.Element",elements:[{name:"string"},{name:"JSX.Element"}]},description:""},width:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},labelexpandable:{required:!1,tsType:{name:"union",raw:"string | JSX.Element",elements:[{name:"string"},{name:"JSX.Element"}]},description:""},value:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""}}};const B={title:"Example/Tile",component:w,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{variations:"radio",label:"Titulo",textlabel:"Label Titulo",width:"350px",labelexpandable:"Exemplo textExemplo"}};var b,u,g;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variations: "radio",
    label: "Titulo",
    textlabel: "Label Titulo",
    width: "350px",
    labelexpandable: \`Exemplo textExemplo\`
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const D=["tile"];export{D as __namedExportsOrder,B as default,r as tile};
