import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{S as q,a as B}from"./index-ClYmvwGD.js";import{d as m,t as r}from"./contextual-Cr4fQ3MC.js";/* empty css              */import"./index-CTjT7uj6.js";const g=m.div`
  border-radius: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0;
  margin: 0;
  min-width: 17px;
  background: ${({type:n})=>I[n||"blue"]};
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  color: ${({type:n})=>c[n||"blue"]};
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.32px;
  gap: 7px;
  align-items: center;
  padding-right: ${({filter:n})=>n?"0px":"10px"};
  padding-left: ${({renderIcon:n})=>n?"0px":"10px"};
  cursor: context-menu;
  position: relative;
`,u=m.p`
  margin: 0;
  padding: 4px 0;
`,x=m.button`
  margin: 0;
  border: 1px solid transparent;
  display: flex;
  cursor: pointer;
  border-radius: 50%;
  padding: 4px;
  background: transparent;
  outline: none;
  align-items: center;
  justify-content: center;
  align-self: start;
  &:focus {
    border: 1px solid ${({type:n})=>c[n||"blue"]};
  }
`,I={blue:"#D0E2FF",cyan:"#BAE6FF",green:r.tagBackgroundGreen,magenta:"#FFD6E8",skeleten:r.skeletonElement,gray:r.tagBackgroundWarmGray,focus:r.focus,inverse:r.backgroundInverse},c={blue:"#0043CE",cyan:"#00539A",green:r.tagColorGreen,magenta:"#9F1853",skeleten:r.skeletonElement,gray:r.tagColorWarmGray,focus:r.focus,inverse:r.iconInverse},t=n=>{const{type:a,label:L,filter:p,renderIcon:s,loading:E,children:S}=n;return e.jsx(e.Fragment,{children:E?e.jsx(e.Fragment,{children:e.jsx(q,{baseColor:r.skeletonElement,highlightColor:r.skeletonBackground,children:e.jsxs(g,{type:a,...n,children:[s&&e.jsx("img",{src:s,style:{boxSizing:"border-box",padding:"0",margin:"0 0 0 10px",width:"15px"}}),e.jsx(B,{count:1,style:{position:"absolute",top:"0",right:"0",left:"0",bottom:"0",borderRadius:"24px",display:"flex"}}),e.jsx(u,{...n,children:L||"Tag content"}),p&&e.jsx(e.Fragment,{children:e.jsx(x,{type:a,...n})})]})})}):e.jsx(e.Fragment,{children:e.jsxs(g,{type:a,...n,children:[s&&e.jsx("img",{src:s,style:{boxSizing:"border-box",padding:"0",margin:"0 0 0 10px",width:"15px"}}),e.jsx(u,{...n,children:S||"Text Exemplo"}),p&&e.jsx(e.Fragment,{children:e.jsx(x,{type:a,...n,children:e.jsx("svg",{width:"15px",height:"15px",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsxs("g",{id:"Close",children:[e.jsx("rect",{width:"10px",height:"10px"}),e.jsx("path",{id:"Vector",d:"M12 4.7L11.3 4L8 7.3L4.7 4L4 4.7L7.3 8L4 11.3L4.7 12L8 8.7L11.3 12L12 11.3L8.7 8L12 4.7Z",fill:c[a||"blue"]})]})})})})]})})})};t.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{type:{required:!1,tsType:{name:"union",raw:`| "blue"
| "cyan"
| "green"
| "magenta"
| "skeleten"
| "gray"
| "focus"
| "inverse"`,elements:[{name:"literal",value:'"blue"'},{name:"literal",value:'"cyan"'},{name:"literal",value:'"green"'},{name:"literal",value:'"magenta"'},{name:"literal",value:'"skeleten"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"focus"'},{name:"literal",value:'"inverse"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},filter:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},renderIcon:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""}}};const _={title:"Example/Tag",component:t,parameters:{layout:"centered"},tags:["autodocs"]},i={args:{type:"blue"}},o={args:{type:"magenta",filter:!0,size:"medium"}},l={args:{type:"inverse"}},d={render:n=>e.jsxs("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap",justifyContent:"center"},children:[e.jsx(t,{type:"blue"}),e.jsx(t,{type:"inverse",filter:!0,size:"medium"}),e.jsx(t,{type:"cyan",filter:!0,size:"medium"}),e.jsx(t,{type:"magenta",size:"medium"}),e.jsx(t,{type:"green",size:"medium",loading:!0}),e.jsx(t,{type:"green",size:"medium",children:"Tag content with a long text description"})]})};var y,f,h;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: "blue"
  }
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,j,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: "magenta",
    filter: true,
    size: "medium"
  }
}`,...(v=(j=o.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var T,w,k;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    type: "inverse"
  }
}`,...(k=(w=l.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var z,C,F;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    justifyContent: "center"
  }}>\r
      <Tag type="blue" />\r
      <Tag type="inverse" filter={true} size="medium" />\r
      <Tag type="cyan" filter={true} size="medium" />\r
      <Tag type="magenta" size="medium" />\r
      <Tag type="green" size="medium" loading />\r
      <Tag type="green" size="medium">\r
        Tag content with a long text description\r
      </Tag>\r
    </div>
}`,...(F=(C=d.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const N=["blue","magenta","inverse","all"];export{N as __namedExportsOrder,d as all,i as blue,_ as default,l as inverse,o as magenta};
