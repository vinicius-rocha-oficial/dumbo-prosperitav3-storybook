import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{S as h,a as y}from"./index-ClYmvwGD.js";import{t as r}from"./contextual-D4vCP4YA.js";import{d as i}from"./styled-components.browser.esm-D3-gLipQ.js";/* empty css              */const o=i.div`
  border-radius: 24px;
  display: flex;
  flex-direction: row;
  justify-content: ${({position:n})=>n==="right"?"flex-end":n==="center"?"center":n==="left"?"flex-start":"space-around"};
  padding: 0;
  margin: 0;
  min-width: 100px;
  background: ${({type:n})=>b[n||"blue"]};
  font-size:${({sizeFont:n})=>`${n}px`||"12px"} ;
  color: ${({type:n})=>l[n||"blue"]};
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.32px;
  gap: 7px;
  align-items: center;
  padding-right: ${({filter:n})=>n?"0":"10px"};
  padding-left: ${({renderIcon:n})=>n?"0":"10px"};
  cursor: context-menu;
  position: relative;

`,d=i.p`
  margin: 0;
  padding:0;
`,c=i.button`
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
    border: 1px solid ${({type:n})=>l[n||"blue"]};
  }
`,b={blue:"#D0E2FF",cyan:"#BAE6FF",green:r.tagBackgroundGreen,magenta:"#FFD6E8",skeleten:r.skeletonElement,gray:r.tagBackgroundWarmGray,focus:r.focus,inverse:r.backgroundInverse,teal:"#9EF0F0"},l={blue:"#0043CE",cyan:"#00539A",green:r.tagColorGreen,magenta:"#9F1853",skeleten:r.skeletonElement,gray:"#161616",focus:r.focus,inverse:r.iconInverse,teal:"#005D5D"},v=n=>{const{type:t,label:g,filter:s,renderIcon:a,loading:m,children:u,size:p,position:x,sizeFont:f}=n;return e.jsx(e.Fragment,{children:m?e.jsx(e.Fragment,{children:e.jsx(h,{baseColor:r.skeletonElement,highlightColor:r.skeletonBackground,children:e.jsxs(o,{sizeFont:f,position:x,type:t,...n,children:[a&&e.jsx("img",{src:a,style:{boxSizing:"border-box",padding:"0",margin:"0 0 0 10px",width:"15px"}}),e.jsx(y,{count:1,style:{position:"absolute",top:"0",right:"0",left:"0",bottom:"0",borderRadius:"24px",display:"flex",padding:0}}),e.jsx(d,{size:p,...n,children:g||"Tag"}),s&&e.jsx(e.Fragment,{children:e.jsx(c,{type:t,...n})})]})})}):e.jsx(e.Fragment,{children:e.jsxs(o,{type:t,...n,children:[a&&e.jsx("img",{src:a,style:{boxSizing:"border-box",padding:"0",margin:"0 0 0 10px",width:"15px"}}),e.jsx(d,{...n,children:u||"Text Exemplo"}),s&&e.jsx(e.Fragment,{children:e.jsx(c,{type:t,...n,children:e.jsx("svg",{width:"15px",height:"15px",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsxs("g",{id:"Close",children:[e.jsx("rect",{width:"10px",height:"10px"}),e.jsx("path",{id:"Vector",d:"M12 4.7L11.3 4L8 7.3L4.7 4L4 4.7L7.3 8L4 11.3L4.7 12L8 8.7L11.3 12L12 11.3L8.7 8L12 4.7Z",fill:l[t||"blue"]})]})})})})]})})})};v.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{type:{required:!1,tsType:{name:"union",raw:`| "blue"\r
| "cyan"\r
| "green"\r
| "magenta"\r
| "skeleten"\r
| "gray"\r
| "focus"\r
| "inverse"\r
| "teal"`,elements:[{name:"literal",value:'"blue"'},{name:"literal",value:'"cyan"'},{name:"literal",value:'"green"'},{name:"literal",value:'"magenta"'},{name:"literal",value:'"skeleten"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"focus"'},{name:"literal",value:'"inverse"'},{name:"literal",value:'"teal"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},filter:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},renderIcon:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},position:{required:!1,tsType:{name:"union",raw:'"right" | "center" | "left"',elements:[{name:"literal",value:'"right"'},{name:"literal",value:'"center"'},{name:"literal",value:'"left"'}]},description:""},sizeFont:{required:!1,tsType:{name:"string"},description:""}}};export{v as T};
