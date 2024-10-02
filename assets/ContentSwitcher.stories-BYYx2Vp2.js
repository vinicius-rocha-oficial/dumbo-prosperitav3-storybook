import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{r as x}from"./index-CTjT7uj6.js";import{d as m}from"./styled-components.browser.esm-D3-gLipQ.js";/* empty css              */import{t as r}from"./contextual-D4vCP4YA.js";import{f as c}from"./IconsInputLabel-C-_tevyj.js";const v=m.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  outline: ${({disabled:e})=>e?`2px solid ${r.borderDisabled}`:"2px solid black"};
  border-radius: 4px;
  outline-offset: ${({disabled:e})=>e?"1px":"-.5px"};
  min-width: ${({type:e})=>e==="default"?"200px":"80px"};
  position: relative;
`,D={small:"7px 155px 7px 16px",large:"17px 155px 17px 15px",medium:"11px 155px 11px 16px"},k={large:"14px",medium:"12px",small:"8px"},j=m.button`
  padding: ${({size:e,type:l})=>l==="default"?D[e||"medium"]:k[e||"medium"]};
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  justify-content: ${({type:e})=>e==="default"?"start":"center"};
  border: 0;
  outline: 0;
  margin: 0;
  width: 100%;
  font-family: IBM Plex Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.16px;
  cursor: pointer;
  border: 1px solid transparent;
  outline: 2px solid transparent;
  white-space: nowrap;
  position: relative;
  z-index: 1;
  transition: 0.3s all;
  &:focus {
    outline: 2px solid ${r.focus};
    border: 1px solid white;
  }
`,E=m.span`
  background: red;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    background: ${r.borderDisabled};
    width: 1px;
    height: 18px;
    z-index: -2;
    transform: translateX(-1.5px) translateY(-50%);
  }
`,w=e=>{const{selectedIndex:l,disabled:i,options:o,type:C}=e,[s,u]=x.useState(l);x.useEffect(()=>{u(l)},[l]);const T=(a,t)=>{u(a),o[a].onClick&&o[a].onClick(t)};return n.jsx(v,{...e,children:o.map((a,t)=>n.jsxs(n.Fragment,{children:[n.jsxs(j,{style:{background:s===t&&i?r.buttonDisabled:s===t?r.layerSelectedInverse:"transparent",color:s===t&&i?r.textDisabled:i?r.borderDisabled:s===t?r.textInverse:r.textSecondary,border:s===t&&i?`1px solid ${r.borderDisabled}`:"",outline:s===t&&i?`2px solid ${r.borderDisabled}`:"",borderRadius:t===0&&o.length>1?"2px 0px 0px 2px":t===o.length-1&&o.length>1?"0px 2px 2px 0px":""},onClick:S=>T(t,S),...e,children:[n.jsxs(n.Fragment,{children:[C==="default"?n.jsx(n.Fragment,{children:a.label}):n.jsx(n.Fragment,{children:a.IconType})," "]}),n.jsx("span",{style:{padding:"0",margin:"0",position:"absolute",right:"12px"},children:n.jsx("img",{style:{padding:"0",margin:"0"},src:a.IconDefault})})]},t),t>=0&&t<o.length-1&&n.jsx(E,{style:{margin:"0",padding:"0"}})]}))})};w.__docgenInfo={description:"",methods:[],displayName:"ContentSwitcher",props:{size:{required:!0,tsType:{name:"union",raw:'"small" | "large" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"large"'},{name:"literal",value:'"medium"'}]},description:""},selectedIndex:{required:!0,tsType:{name:"number"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`ButtonHTMLAttributes<HTMLButtonElement> & {\r
  label?: string;\r
  IconType?: JSX.Element | ChildNode | string;\r
  IconDefault?: string;\r
}`,elements:[{name:"ButtonHTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"ButtonHTMLAttributes<HTMLButtonElement>"},{name:"signature",type:"object",raw:`{\r
  label?: string;\r
  IconType?: JSX.Element | ChildNode | string;\r
  IconDefault?: string;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"IconType",value:{name:"union",raw:"JSX.Element | ChildNode | string",elements:[{name:"JSX.Element"},{name:"ChildNode"},{name:"string"}],required:!1}},{key:"IconDefault",value:{name:"string",required:!1}}]}}]}],raw:"TypeOptions[]"},description:""},type:{required:!0,tsType:{name:"union",raw:'"default" | "icon"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"icon"'}]},description:""}}};const N={title:"Example/ContentSwitcher",component:w,parameters:{layout:"centered"},tags:["autodocs"]},z=[{label:"Select 1",IconDefault:"#"},{label:"Select 2",onClick:()=>console.log("3")},{label:"Select 3",onClick:()=>console.log("4")}],d={args:{options:z,size:"large",selectedIndex:2,type:"default"}},$=[{IconType:c},{IconType:c},{IconType:c}],p={args:{options:$,size:"large",selectedIndex:1,type:"icon"}};var g,b,f;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    options: ExemploArr,
    size: "large",
    selectedIndex: 2,
    type: "default"
  }
}`,...(f=(b=d.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,h,I;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    options: Icon,
    size: "large",
    selectedIndex: 1,
    type: "icon"
  }
}`,...(I=(h=p.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};const X=["Default","OnlyIcon"];export{d as Default,p as OnlyIcon,X as __namedExportsOrder,N as default};
