import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{S as f,a as x}from"./index-ClYmvwGD.js";import{t as r}from"./contextual-D4vCP4YA.js";import{d as t}from"./styled-components.browser.esm-D3-gLipQ.js";/* empty css              */const u=t.div`
  border-radius: 24px;
  display: flex;
  flex-direction: row;
  justify-content: ${({position:e})=>e==="right"?"flex-end":e==="center"?"center":e==="left"?"flex-start":"space-around"};
  margin: 0;
  min-width:${({width:e})=>e||"50px"};
  background: ${({type:e})=>b[e||"blue"]};
  font-size:${({sizeFont:e})=>`${e}px`||"12px"} ;
  color: ${({type:e})=>c[e||"blue"]};
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.32px;
  gap: 7px;
  align-items: center;
  cursor: context-menu;
  position: relative;
  border:${({type:e})=>e==="border"?"1px solid black":"0"}
`,m=t.div`
padding:0;
margin:0
`;t.button`
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
    border: 1px solid ${({type:e})=>c[e||"blue"]};
  }
`;const b={blue:"#D0E2FF",cyan:"#BAE6FF",green:r.tagBackgroundGreen,magenta:"#E8DAFF",skeleton:r.skeletonElement,gray:r.tagBackgroundWarmGray,focus:r.focus,inverse:r.backgroundInverse,teal:"#9EF0F0",red:"#FFD7D9",border:"#8D8D8D1F"},c={blue:"#0043CE",cyan:"#00539A",green:r.tagColorGreen,magenta:"#9F1853",skeleton:r.skeletonElement,gray:"#161616",focus:"#f4f4f4",inverse:r.iconInverse,teal:"#005D5D",red:"#A2191F",border:"#161616"},v=({type:e="blue",renderIcon:n,loading:p=!1,children:l,size:i="medium",position:s="left",sizeFont:o,onClick:d,width:g})=>a.jsx(a.Fragment,{children:p?a.jsx(f,{baseColor:r.skeletonElement,highlightColor:r.skeletonBackground,children:a.jsxs(u,{sizeFont:o,position:s,type:e,children:[n&&a.jsx("img",{src:n,style:{boxSizing:"border-box",padding:"0",margin:"0 0 0 10px",width:"15px"}}),a.jsx(x,{count:1,style:{position:"absolute",top:"0",right:"0",left:"0",bottom:"0",borderRadius:"24px",display:"flex",padding:0}}),a.jsx(m,{size:i,children:l})]})}):a.jsxs(u,{type:e,width:g,onClick:()=>{d&&d()},sizeFont:o,position:s,children:[n&&a.jsx("img",{src:n,style:{boxSizing:"border-box",padding:"0",margin:"0 0 0 10px",width:"15px"}}),a.jsx(m,{size:i,children:l})]})});v.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{type:{required:!1,tsType:{name:"union",raw:`| "blue"\r
| "cyan"\r
| "green"\r
| "magenta"\r
| "skeleton"\r
| "gray"\r
| "focus"\r
| "inverse"\r
| "teal"\r
| "red"\r
| "border"`,elements:[{name:"literal",value:'"blue"'},{name:"literal",value:'"cyan"'},{name:"literal",value:'"green"'},{name:"literal",value:'"magenta"'},{name:"literal",value:'"skeleton"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"focus"'},{name:"literal",value:'"inverse"'},{name:"literal",value:'"teal"'},{name:"literal",value:'"red"'},{name:"literal",value:'"border"'}]},description:"",defaultValue:{value:'"blue"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},renderIcon:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},position:{required:!1,tsType:{name:"union",raw:'"right" | "center" | "left"',elements:[{name:"literal",value:'"right"'},{name:"literal",value:'"center"'},{name:"literal",value:'"left"'}]},description:"",defaultValue:{value:'"left"',computed:!1}},sizeFont:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""}}};export{v as T};
