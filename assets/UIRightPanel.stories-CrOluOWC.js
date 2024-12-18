import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{r as c}from"./index-CTjT7uj6.js";import{d as s}from"./styled-components.browser.esm-D3-gLipQ.js";import{t as e}from"./contextual-D4vCP4YA.js";/* empty css              */import{A as M}from"./IconsInputLabel-E66WMmAT.js";const v=s.div`
  background: ${e.layer01};
  position: fixed;
  right: ${({orientations:t})=>t==="right"&&"0"};
  left: ${({orientations:t})=>t==="left"&&"0"};
  width: 300px;
  height: 100vh;
  top: 0;
  z-index: 1;
  color: ${e.textSecondary};
  font-family: IBM Plex Sans;
  font-size: 15px;
  border-right: 1px solid ${e.borderSubtle01};
  border-bottom: 1px solid ${e.borderSubtle01};
  border-left: 1px solid ${e.borderSubtle01};
  box-sizing: border-box;
  overflow: auto;
  transform: ${({orientations:t})=>t==="left"?"translateX(-150%)":t==="right"?"translateX(150%)":""};
  transition: 0.3s linear transform;
  &.transformClass {
    transform: translateX(0%);
  }
`,k=s.button`
  text-align: start;
  background: transparent;
  width: 100%;
  align-items: center;
  gap: 10px;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.16px;
  padding: 0.5em;
  margin: 0;
  cursor: pointer;
  border: 0;
  outline: none;
  font-family: IBM Plex Sans;
  border: 2px solid transparent;
  color: ${e.textSecondary};
  &:hover {
    background: ${e.backgroundHover};
  }
  &:focus {
    border: 2px solid ${e.focus};
  }
  &:active {
    background: ${e.backgroundActive};
  }
`,w=s.button`
  padding: 0.5em;
  margin: 0;
  text-align: "center";
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  font-family: IBM Plex Sans;
  font-size: 15px;
  border: none;
  border-left: 3px solid transparent;
  color: ${e.textPrimary};
  &:hover {
    background: ${e.backgroundHover};
  }
  &:focus {
    border-left: 3px solid ${e.focus};
  }
  &:active {
    background: ${e.backgroundActive};
  }
`,$=s.span`
  transition: 0.2s linear all;
  transform: rotate(360deg);
  &.rotate {
    transform: rotate(180deg);
  }
`,x=t=>{const[i,p]=c.useState(!1),[u,h]=c.useState(),{options:o,open:y}=t,I=r=>{h(r),p(!(u===r&&i))};return n.jsx(v,{className:y?"transformClass":"",...t,children:n.jsx("div",{style:{display:"flex",flexDirection:"column"},children:o==null?void 0:o.map((r,a)=>{var d;return n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{margin:a===0?"35px 0 0 0":o.length-1===a?"0 0 0px 0":"",padding:"0",alignItems:"start",display:"flex",flexDirection:"column",fontFamily:"IBM Plex Sans",textAlign:"start"},children:[n.jsxs(k,{onClick:r.hasOwnProperty("optionsMenu")?()=>I(a):r.onClick,children:[r.label,r.hasOwnProperty("optionsMenu")&&n.jsx($,{style:{margin:"0",padding:"0",height:"100%",display:"flex"},className:u===a&&i?"rotate":"",children:M})]}),u===a&&i&&n.jsx("div",{style:{width:"100%"},children:(d=r.optionsMenu)==null?void 0:d.map(m=>n.jsx(w,{onClick:m.onClick,children:m.label}))})]}),(a+1)%4===0&&a!==o.length-1&&n.jsx("div",{style:{width:"90%",height:"1px",backgroundColor:"#ddd",margin:"20px auto "}})]})})})})};x.__docgenInfo={description:"",methods:[],displayName:"UIRightPanel",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label?: string;\r
  onClick?: () => void;\r
  optionsMenu?: TypeOption[];\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"optionsMenu",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label?: string;\r
  onClick?: () => void;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"TypeOption[]",required:!1}}]}}],raw:"TypeMenu[]"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},orientations:{required:!1,tsType:{name:"union",raw:'"right" | "left"',elements:[{name:"literal",value:'"right"'},{name:"literal",value:'"left"'}]},description:""}}};const z={title:"Example/UIRightPanel",component:x,parameters:{layout:"centered"},tags:["autodocs"]},l={args:{orientations:"right",open:!0,options:[{label:"Menu",optionsMenu:[{label:"Item 1"},{label:"Item 2"}]},{label:"Menu 2",optionsMenu:[{label:"Item 1.2"},{label:"Item 2"}]},{label:"Menu 3",optionsMenu:[{label:"Item 1.2"},{label:"Item 2"}]},{label:"Menu 4",optionsMenu:[{label:"Item 1.2"},{label:"Item 2"}]},{label:"Menu 5",optionsMenu:[{label:"Item 1.2"},{label:"Item 2"}]},{label:"Menu 6",optionsMenu:[{label:"Item 1.2"},{label:"Item 2"}]}]}};var b,g,f;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    orientations: "right",
    open: true,
    options: [{
      label: "Menu",
      optionsMenu: [{
        label: "Item 1"
      }, {
        label: "Item 2"
      }]
    }, {
      label: "Menu 2",
      optionsMenu: [{
        label: "Item 1.2"
      }, {
        label: "Item 2"
      }]
    }, {
      label: "Menu 3",
      optionsMenu: [{
        label: "Item 1.2"
      }, {
        label: "Item 2"
      }]
    }, {
      label: "Menu 4",
      optionsMenu: [{
        label: "Item 1.2"
      }, {
        label: "Item 2"
      }]
    }, {
      label: "Menu 5",
      optionsMenu: [{
        label: "Item 1.2"
      }, {
        label: "Item 2"
      }]
    }, {
      label: "Menu 6",
      optionsMenu: [{
        label: "Item 1.2"
      }, {
        label: "Item 2"
      }]
    }]
  }
}`,...(f=(g=l.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const T=["Default"];export{l as Default,T as __namedExportsOrder,z as default};
