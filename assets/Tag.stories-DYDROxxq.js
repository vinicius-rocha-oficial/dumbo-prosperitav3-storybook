import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{S as C,a as q}from"./index-ClYmvwGD.js";import{t as n}from"./contextual-D4vCP4YA.js";import{d as l}from"./styled-components.browser.esm-D3-gLipQ.js";/* empty css              */import"./index-CTjT7uj6.js";const m=l.div`
  border-radius: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0;
  margin: 0;
  min-width: 17px;
  background: ${({type:r})=>S[r||"blue"]};
  font-size: 12px;
  color: ${({type:r})=>d[r||"blue"]};
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.32px;
  gap: 7px;
  align-items: center;
  padding-right: ${({filter:r})=>r?"0":"10px"};
  padding-left: ${({renderIcon:r})=>r?"0":"10px"};
  cursor: context-menu;
  position: relative;

`,g=l.p`
  margin: 0;
  padding: ${({size:r})=>"1px"};
`,p=l.button`
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
    border: 1px solid ${({type:r})=>d[r||"blue"]};
  }
`,S={blue:"#D0E2FF",cyan:"#BAE6FF",green:n.tagBackgroundGreen,magenta:"#FFD6E8",skeleten:n.skeletonElement,gray:n.tagBackgroundWarmGray,focus:n.focus,inverse:n.backgroundInverse},d={blue:"#0043CE",cyan:"#00539A",green:n.tagColorGreen,magenta:"#9F1853",skeleten:n.skeletonElement,gray:"#161616",focus:n.focus,inverse:n.iconInverse},w=r=>{const{type:a,label:T,filter:c,renderIcon:t,loading:F,children:L,size:E}=r;return e.jsx(e.Fragment,{children:F?e.jsx(e.Fragment,{children:e.jsx(C,{baseColor:n.skeletonElement,highlightColor:n.skeletonBackground,children:e.jsxs(m,{type:a,...r,children:[t&&e.jsx("img",{src:t,style:{boxSizing:"border-box",padding:"0",margin:"0 0 0 10px",width:"15px"}}),e.jsx(q,{count:1,style:{position:"absolute",top:"0",right:"0",left:"0",bottom:"0",borderRadius:"24px",display:"flex",padding:0}}),e.jsx(g,{size:E,...r,children:T||"Tag"}),c&&e.jsx(e.Fragment,{children:e.jsx(p,{type:a,...r})})]})})}):e.jsx(e.Fragment,{children:e.jsxs(m,{type:a,...r,children:[t&&e.jsx("img",{src:t,style:{boxSizing:"border-box",padding:"0",margin:"0 0 0 10px",width:"15px"}}),e.jsx(g,{...r,children:L||"Text Exemplo"}),c&&e.jsx(e.Fragment,{children:e.jsx(p,{type:a,...r,children:e.jsx("svg",{width:"15px",height:"15px",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsxs("g",{id:"Close",children:[e.jsx("rect",{width:"10px",height:"10px"}),e.jsx("path",{id:"Vector",d:"M12 4.7L11.3 4L8 7.3L4.7 4L4 4.7L7.3 8L4 11.3L4.7 12L8 8.7L11.3 12L12 11.3L8.7 8L12 4.7Z",fill:d[a||"blue"]})]})})})})]})})})};w.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{type:{required:!1,tsType:{name:"union",raw:`| "blue"\r
| "cyan"\r
| "green"\r
| "magenta"\r
| "skeleten"\r
| "gray"\r
| "focus"\r
| "inverse"`,elements:[{name:"literal",value:'"blue"'},{name:"literal",value:'"cyan"'},{name:"literal",value:'"green"'},{name:"literal",value:'"magenta"'},{name:"literal",value:'"skeleten"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"focus"'},{name:"literal",value:'"inverse"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},filter:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},renderIcon:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""}}};const _={title:"Example/Tag",component:w,parameters:{layout:"centered"},tags:["autodocs"]},s={args:{type:"blue"}},i={args:{type:"magenta",filter:!0,size:"medium"}},o={args:{type:"inverse"}};var u,x,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    type: "blue"
  }
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var h,y,b;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: "magenta",
    filter: true,
    size: "medium"
  }
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var v,j,k;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: "inverse"
  }
}`,...(k=(j=o.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const G=["blue","magenta","inverse"];export{G as __namedExportsOrder,s as blue,_ as default,o as inverse,i as magenta};
