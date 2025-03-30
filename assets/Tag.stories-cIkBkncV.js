import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{S as h,a as k}from"./index-ClYmvwGD.js";import{t as a}from"./contextual-D4vCP4YA.js";import{d as l}from"./styled-components.browser.esm-D3-gLipQ.js";/* empty css              */import"./index-CTjT7uj6.js";const m=l.div`
  border-radius: 24px;
  display: flex;
  flex-direction: row;
  justify-content: ${({position:e})=>e==="right"?"flex-end":e==="center"?"center":e==="left"?"flex-start":"space-around"};
  margin: 0;
  min-width:${({width:e})=>e||"50px"};
  background: ${({type:e})=>T[e||"blue"]};
  font-size:${({sizeFont:e})=>`${e}px`||"12px"} ;
  color: ${({type:e})=>b[e||"blue"]};
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.32px;
  gap: 7px;
  align-items: center;
  cursor: context-menu;
  position: relative;
  border:${({type:e})=>e==="border"?"1px solid black":"0"}
`,c=l.div`
padding:0;
margin:0
`;l.button`
  margin: 0;
  border: 1px solid transparent;
  display: flex;
  cursor: pointer;
  border-radius: 50%;
  padding: 0;
  background: transparent;
  outline: none;
  align-items: center;
  justify-content: center;
  align-self: start;
  &:focus {
    border: 1px solid ${({type:e})=>b[e||"blue"]};
  }
`;const T={blue:"#D0E2FF",cyan:"#BAE6FF",green:a.tagBackgroundGreen,magenta:"#E8DAFF",skeleton:a.skeletonElement,gray:a.tagBackgroundWarmGray,focus:a.focus,inverse:a.backgroundInverse,teal:"#9EF0F0",red:"#FFD7D9",border:"#8D8D8D1F"},b={blue:"#0043CE",cyan:"#00539A",green:a.tagColorGreen,magenta:"#9F1853",skeleton:a.skeletonElement,gray:"#161616",focus:"#f4f4f4",inverse:a.iconInverse,teal:"#005D5D",red:"#A2191F",border:"#161616"},x=({type:e="blue",renderIcon:t,loading:y=!1,children:i,size:s="medium",position:o="left",sizeFont:d,onClick:u,width:v})=>r.jsx(r.Fragment,{children:y?r.jsx(h,{baseColor:a.skeletonElement,highlightColor:a.skeletonBackground,children:r.jsxs(m,{sizeFont:d,position:o,type:e,children:[t&&r.jsx("img",{src:t,style:{boxSizing:"border-box",padding:"0",margin:"0 0 0 10px",width:"15px"}}),r.jsx(k,{count:1,style:{position:"absolute",top:"0",right:"0",left:"0",bottom:"0",borderRadius:"24px",display:"flex",padding:0}}),r.jsx(c,{size:s,children:i})]})}):r.jsxs(m,{type:e,width:v,onClick:()=>{u&&u()},sizeFont:d,position:o,children:[t&&r.jsx("img",{src:t,style:{boxSizing:"border-box",padding:"0",margin:"0 0 0 10px",width:"15px"}}),r.jsx(c,{size:s,children:i})]})});x.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{type:{required:!1,tsType:{name:"union",raw:`| "blue"\r
| "cyan"\r
| "green"\r
| "magenta"\r
| "skeleton"\r
| "gray"\r
| "focus"\r
| "inverse"\r
| "teal"\r
| "red"\r
| "border"`,elements:[{name:"literal",value:'"blue"'},{name:"literal",value:'"cyan"'},{name:"literal",value:'"green"'},{name:"literal",value:'"magenta"'},{name:"literal",value:'"skeleton"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"focus"'},{name:"literal",value:'"inverse"'},{name:"literal",value:'"teal"'},{name:"literal",value:'"red"'},{name:"literal",value:'"border"'}]},description:"",defaultValue:{value:'"blue"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},renderIcon:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},position:{required:!1,tsType:{name:"union",raw:'"right" | "center" | "left"',elements:[{name:"literal",value:'"right"'},{name:"literal",value:'"center"'},{name:"literal",value:'"left"'}]},description:"",defaultValue:{value:'"left"',computed:!1}},sizeFont:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""}}};const $={title:"Example/Tag",component:x,parameters:{layout:"centered"},tags:["autodocs"]},n={args:{type:"blue",children:"Prosperita",label:"Label do Gui",size:"medium",width:"150px",position:"center"}};var p,g,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: "blue",
    children: "Prosperita",
    label: "Label do Gui",
    size: "medium",
    width: "150px",
    position: "center"
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const C=["blue"];export{C as __namedExportsOrder,n as blue,$ as default};
