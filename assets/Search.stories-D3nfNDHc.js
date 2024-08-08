import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as m}from"./index-CTjT7uj6.js";import{S as f,C as x}from"./IconsInputLabel-CdIY3i1y.js";/* empty css              */import{S as L,a as q}from"./index-ClYmvwGD.js";import{t as i}from"./contextual-D4vCP4YA.js";import{d as r}from"./styled-components.browser.esm-D3-gLipQ.js";const H={small:"8px",medium:"12px",large:"14px"},g=r.input`
  transition: 0.2s;
  width: 100%;
  padding: ${({size:e,kind:n})=>n==="fluid"?"37px 0 10px 0":H[e||"small"]};
  padding-left: ${({kind:e})=>e==="fluid"?"15px":"4.5em"};
  border: 0;
  outline: 0;
  border-radius: 8px;
  font-family: IBM Plex Sans;
  border: 2px solid transparent;
  border-bottom: 1px solid ${i.borderStrong01};
  background: ${i.field01};
  &:focus {
    border: 2px solid ${i.focus};
  }
  &::-webkit-search-cancel-button {
  }
`,h=r.div`
  width: 100%;
  min-width: 300px;
  display: flex;
  position: relative;
  justify-content: start;
  height: 100%;
  box-sizing: border-box;
  font-family: IBM Plex Sans;
  font-size: 14px;
  border: 2px solid transparent;
  &:focus {
    border: 2px solid ${i.focus};
  }
  opacity: ${({disabled:e})=>e?".5":"1"};
`,R=r.span`
  z-index: 6;
  position: absolute;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.32px;
  top: 10px;
  left: 15px;
  overflow: hidden;
  box-sizing: border-box;
`,M=r.div`
  position: absolute;
  right: 5px;
  width: 19%;
  height: 50%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  bottom: 4px;
  z-index: 2;
  border-radius: 8px;
  background: ${i.field01};
`,b=r.span`
  position: ${({kind:e})=>e!=="fluid"&&"absolute"};
  right: 0;
  background: ${i.field01};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({kind:e})=>e!=="fluid"?"10%":"60%"};
  height: ${({kind:e})=>e!=="fluid"?"87%":"50%"};
  right: 4px;
  top: 3px;
  bottom: 5px;
  padding-right: 0.5em;
  border-radius: ${({kind:e})=>e!=="fluid"?"8px":"0"};
  border-right: ${({kind:e})=>e!=="fluid"?"1px solid transparent":`1px solid ${i.borderSubtle01}`};
`,y=r.span`
  position: ${({kind:e})=>e!=="fluid"&&"absolute"};
  left: 2px;
  top: 3px;
  bottom: 5px;
  z-index: 3;
  box-sizing: border-box;
  background: ${i.field01};
  width: ${({kind:e})=>e!=="fluid"?"50px":"70%"};
  height: ${({kind:e})=>e!=="fluid"?"87%":"50%"};
  border-radius: ${({kind:e})=>e==="fluid"?"1":"8px"};
  display: flex;
  padding: ${({kind:e})=>e==="fluid"?"0 0em 0 0.8em":"none"};
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,$=e=>{const{kind:n,size:a,Title:j,loading:k,value:C,onChange:d,id:w,name:E}=e,s=m.useRef(null),[l,p]=m.useState(""),z=c=>{p(c.target.value),d&&d(c)},u=()=>{s.current&&(s.current.value=""),p("")},I={position:"absolute",display:"flex",top:"0",left:"0",right:"0",bottom:"0"};return t.jsx(t.Fragment,{children:k?t.jsx(L,{baseColor:i.skeletonBackground,highlightColor:i.skeletonElement,children:t.jsxs(h,{kind:n,size:a,...e,children:[t.jsx(g,{type:"search",kind:n,size:a,...e}),t.jsx(q,{count:1,style:I})]})}):t.jsxs(h,{kind:n,size:a,...e,children:[n==="fluid"&&t.jsx(R,{children:j}),n==="fluid"?t.jsxs(M,{style:l.length>0?{paddingRight:"1em"}:{paddingRight:"0em"},...e,children:[t.jsx(y,{kind:n,...e,children:f}),l.length>0&&t.jsx(b,{kind:n,onClick:u,children:x})]}):t.jsxs(t.Fragment,{children:[t.jsx(y,{kind:n,...e,children:f}),l.length>0&&t.jsx(b,{kind:n,onClick:u,children:x})]}),t.jsx(g,{type:"search",kind:n,ref:s,size:a,value:C,name:E,id:w,onChange:z,placeholder:"Digite Aqui"})]})})};$.__docgenInfo={description:"",methods:[],displayName:"Search",props:{kind:{required:!1,tsType:{name:"union",raw:'"fluid" | "default"',elements:[{name:"literal",value:'"fluid"'},{name:"literal",value:'"default"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},Title:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"ReactFormEventHandler",raw:"React.FormEventHandler<HTMLLabelElement>",elements:[{name:"HTMLLabelElement"}]},description:""},value:{required:!1,tsType:{name:"string"},description:""}}};const A={title:"Example/Search",component:$,parameters:{layout:"centered"},tags:["autodocs"]},o={args:{Title:"Title Name Label",size:"medium"}};var v,T,S;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    Title: "Title Name Label",
    size: "medium"
  }
}`,...(S=(T=o.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};const V=["search"];export{V as __namedExportsOrder,A as default,o as search};
