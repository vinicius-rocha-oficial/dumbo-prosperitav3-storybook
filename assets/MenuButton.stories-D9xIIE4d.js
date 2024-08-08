import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as m}from"./index-CTjT7uj6.js";import{p as C,B as M}from"./index-rCqGT5OR.js";import{d as a}from"./styled-components.browser.esm-D3-gLipQ.js";/* empty css              */import{t as o}from"./contextual-D4vCP4YA.js";import{M as q}from"./IconsInputLabel-CdIY3i1y.js";import"./index-ClYmvwGD.js";/* empty css                 */const z={small:"40%",medium:"62%",large:"98%"},D={small:"32px",medium:"40px",large:"57px"},A=a.div`
  position: relative;
  min-width: 180px;
  width: 100%;
  display: flex;
  justify-content: ${({variations:e,menuAlignment:n})=>e==="overflow"&&n==="bottom end"?"flex-end":"flex-start"};
  outline: none;
`,L=a.span`
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;

  right: 42px;
  border: 1px solid white;
  height: 97%;
  display: flex;
  align-items: center;
  justify-content: center;
`,E=a.svg`
  position: absolute;
  z-index: 2;
  top: 0;
  right: 13px;
  bottom: 0;
  transform: ${({size:e})=>e&&` translateY(${z[e||"medium"]})`}
    ${({drop:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  transition: 0.2s linear transform;
`,F=a.button`
  display: flex;
  padding: 8px;
  margin: 0;
  cursor: pointer;
  border: 0;
  outline: 0;
  background: ${o.layer01};
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  border: 2px solid transparent;
  &:focus {
    border: 2px solid ${o.focus};
  }
  &:active {
    background: ${o.backgroundActive};
  }
  &:hover {
    background: ${o.backgroundActive};
  }
`,S=a.div`
  position: relative;
  margin: 0;
  display: flex;
  justify-content: ${({menuAlignment:e,variations:n})=>e==="bottom end"&&n!=="overflow"?"flex-end":e==="bottom start"&&n!=="overflow"?"flex-start":"center"};
  align-items: center;
`,O=a.div`
  position: absolute;
  bottom: 0;
  top: ${({size:e="medium",variations:n})=>e&&n!=="overflow"?D[e]:"35px"};
  visibility: ${({drop:e})=>e?"visible":"hidden"};
  z-index: 4;
  width: ${({menuAlignment:e,variations:n})=>(e==="bottom end"||e==="bottom start")&&n!=="overflow"?"110%":"100%"};
`,I=a.ul`
  margin: 8px 0 0 0;
  padding: 0;
  text-align: left;
  width: 100%;
  background: ${o.layer01};
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,P=a.li`
  position: relative;
  width: 100%;
  color: ${o.textSecondary};
  text-overflow: ellipsis;
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.16px;
  list-style: none;
  margin: 0;
  box-sizing: border-box;
  padding: ${({size:e})=>e&&C.default[e||"medium"]};
  border: 2px solid transparent;
  cursor: pointer;

  &:focus {
    border: 2px solid ${o.focus};
  }
  &:hover {
    background: ${o.layerHover01};
  }
`,k=e=>{const{size:n,options:s,variations:d,label:j,drop:B,kind:$}=e,[c,p]=m.useState(!1),u=m.useRef(null),b=()=>{p(r=>!r)},x=r=>{u.current&&!u.current.contains(r.target)&&p(!1)};return m.useEffect(()=>(document.addEventListener("click",x),()=>{document.removeEventListener("click",x)}),[]),t.jsx(t.Fragment,{children:t.jsxs(S,{ref:u,drop:B,...e,children:[t.jsx(A,{...e,children:d==="default"||d==="combo button"?t.jsx(t.Fragment,{children:t.jsxs("div",{onClick:b,style:{width:"100%"},children:[t.jsx(M,{kind:$||"primary",size:n||"medium",label:j||"label"}),d==="combo button"&&t.jsx(L,{}),t.jsxs(E,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 16 16",fill:"none",drop:c,size:n||"medium",...e,children:[t.jsx("rect",{width:"16",height:"16"}),t.jsx("path",{d:"M8 5L13 10L12.3 10.7L8 6.4L3.7 10.7L3 10L8 5Z",fill:"white"})]})]})}):t.jsx(t.Fragment,{children:t.jsx(F,{onClick:b,...e,children:q})})}),t.jsx(O,{drop:c,...e,children:t.jsx(I,{...e,children:s==null?void 0:s.map((r,T)=>t.jsxs(P,{onClick:r.onClick,size:n||"medium",tabIndex:1,...e,children:[t.jsx("a",{href:r.href,style:{color:o.textSecondary,textDecoration:"none"},children:r.label}),t.jsx("span",{style:{position:"absolute",right:"12px"},children:t.jsx("img",{src:r.icon})})]},T))})})]})})};k.__docgenInfo={description:"",methods:[],displayName:"MenuButton",props:{size:{required:!1,tsType:{name:"union",raw:'"large" | "small" | "medium"',elements:[{name:"literal",value:'"large"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:""},drop:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label?: string;
  href?: string;
  onClick?: () => void;
  icon?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"href",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"icon",value:{name:"string",required:!1}}]}}],raw:"TypeOptionsProps[]"},description:""},menuAlignment:{required:!1,tsType:{name:"union",raw:'"bottom" | "bottom start" | "bottom end"',elements:[{name:"literal",value:'"bottom"'},{name:"literal",value:'"bottom start"'},{name:"literal",value:'"bottom end"'}]},description:""},variations:{required:!1,tsType:{name:"union",raw:'"combo button" | "default" | "overflow"',elements:[{name:"literal",value:'"combo button"'},{name:"literal",value:'"default"'},{name:"literal",value:'"overflow"'}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},kind:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "tertiary"
| "ghost"
| "dangerPrimary"
| "dangerTertiary"
| "dangerGhost"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"ghost"'},{name:"literal",value:'"dangerPrimary"'},{name:"literal",value:'"dangerTertiary"'},{name:"literal",value:'"dangerGhost"'}]},description:""}}};const Q={title:"Example/MenuButton",component:k,parameters:{layout:"centered"},tags:["autodocs"]},i={args:{options:[{label:"Button 0",icon:"#"},{label:"Button 1",onClick:()=>alert("Funcionou")},{label:"Button 2"}],size:"medium",label:"Text Action Button",variations:"combo button",menuAlignment:"bottom end"}},l={args:{options:[{label:"Button 0",icon:"#"},{label:"Button 1",onClick:()=>alert("Funcionou")},{label:"Button 2"}],size:"small",label:"Text Action Button",variations:"overflow",menuAlignment:"bottom end"}};var f,g,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "Button 0",
      icon: "#"
    }, {
      label: "Button 1",
      onClick: () => alert("Funcionou")
    }, {
      label: "Button 2"
    }],
    size: "medium",
    label: "Text Action Button",
    variations: "combo button",
    menuAlignment: "bottom end"
  }
}`,...(v=(g=i.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var h,y,w;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "Button 0",
      icon: "#"
    }, {
      label: "Button 1",
      onClick: () => alert("Funcionou")
    }, {
      label: "Button 2"
    }],
    size: "small",
    label: "Text Action Button",
    variations: "overflow",
    menuAlignment: "bottom end"
  }
}`,...(w=(y=l.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const U=["Default","Overflow"];export{i as Default,l as Overflow,U as __namedExportsOrder,Q as default};
