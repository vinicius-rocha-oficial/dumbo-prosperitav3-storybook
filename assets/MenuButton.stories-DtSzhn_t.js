import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as u}from"./index-CTjT7uj6.js";import{p as w,B as j}from"./index-43QVy7Gz.js";import{d as i,t as o}from"./contextual-Cr4fQ3MC.js";/* empty css              */import{M as k}from"./IconsInputLabel-PpPdO3Ft.js";import"./index-ClYmvwGD.js";/* empty css                 */const B={small:"40%",medium:"62%",large:"98%"},$={small:"38px",medium:"45px",large:"57px"},C=i.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: ${({variations:e,menuAlignment:n})=>e==="overflow"&&n==="bottom end"?"flex-end":"flex-start"};
  outline: none;
`,M=i.span`
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
`,T=i.svg`
  position: absolute;
  z-index: 2;
  top: 0;
  right: 13px;
  bottom: 0;
  transform: ${({size:e})=>e&&` translateY(${B[e||"medium"]})`}
    ${({drop:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  transition: 0.2s linear transform;
`,q=i.button`
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
`,L=i.div`
  min-width: 200px;
  width: 100%;
  position: relative;
  margin: 0 0 20px 0;
  display: flex;
  justify-content: ${({menuAlignment:e,variations:n})=>e==="bottom end"&&n!=="overflow"?"flex-end":e==="bottom start"&&n!=="overflow"?"flex-start":"center"};
  align-items: center;
`,z=i.div`
  position: absolute;
  bottom: 0;
  top: ${({size:e="medium",variations:n})=>e&&n!=="overflow"?$[e]:"35px"};
  visibility: ${({drop:e})=>e?"visible":"hidden"};
  z-index: 4;
  width: ${({menuAlignment:e,variations:n})=>(e==="bottom end"||e==="bottom start")&&n!=="overflow"?"110%":"100%"};
`,D=i.ul`
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
`,E=i.li`
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
  padding: ${({size:e})=>e&&w.default[e||"medium"]};
  border: 2px solid transparent;
  cursor: pointer;

  &:focus {
    border: 2px solid ${o.focus};
  }
  &:hover {
    background: ${o.layerHover01};
  }
`,h=e=>{const{size:n,options:l,variations:s,label:v}=e,[c,m]=u.useState(!1),d=u.useRef(null),p=()=>{m(r=>!r)},x=r=>{d.current&&!d.current.contains(r.target)&&m(!1)};return u.useEffect(()=>(document.addEventListener("click",x),()=>{document.removeEventListener("click",x)}),[]),t.jsxs(L,{ref:d,...e,children:[t.jsx(C,{...e,children:s==="default"||s==="combo button"?t.jsx(t.Fragment,{children:t.jsxs("div",{onClick:p,children:[t.jsx(j,{kind:"primary",size:n||"medium",label:v||"Label Text Exemplo"}),s==="combo button"&&t.jsx(M,{}),t.jsxs(T,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 16 16",fill:"none",drop:c,size:n||"medium",...e,children:[t.jsx("rect",{width:"16",height:"16"}),t.jsx("path",{d:"M8 5L13 10L12.3 10.7L8 6.4L3.7 10.7L3 10L8 5Z",fill:"white"})]})]})}):t.jsx(t.Fragment,{children:t.jsx(q,{onClick:p,...e,children:k})})}),t.jsx(z,{drop:c,...e,children:t.jsx(D,{...e,children:l==null?void 0:l.map((r,y)=>t.jsxs(E,{onClick:r.onClick,size:n||"medium",tabIndex:1,...e,children:[t.jsx("a",{href:r.href,style:{color:o.textSecondary,textDecoration:"none"},children:r.label}),t.jsx("span",{style:{position:"absolute",right:"12px"},children:t.jsx("img",{src:r.icon})})]},y))})})]})};h.__docgenInfo={description:"",methods:[],displayName:"MenuButton",props:{size:{required:!1,tsType:{name:"union",raw:'"large" | "small" | "medium"',elements:[{name:"literal",value:'"large"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:""},drop:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label?: string;
  href?: string;
  onClick?: () => void;
  icon?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"href",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"icon",value:{name:"string",required:!1}}]}}],raw:"TypeOptionsProps[]"},description:""},menuAlignment:{required:!1,tsType:{name:"union",raw:'"bottom" | "bottom start" | "bottom end"',elements:[{name:"literal",value:'"bottom"'},{name:"literal",value:'"bottom start"'},{name:"literal",value:'"bottom end"'}]},description:""},variations:{required:!1,tsType:{name:"union",raw:'"combo button" | "default" | "overflow"',elements:[{name:"literal",value:'"combo button"'},{name:"literal",value:'"default"'},{name:"literal",value:'"overflow"'}]},description:""},label:{required:!1,tsType:{name:"string"},description:""}}};const G={title:"Example/MenuButton",component:h,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{options:[{label:"Button 0",icon:"#"},{label:"Button 1",onClick:()=>alert("Funcionou")},{label:"Button 2"}],size:"small",label:"Text Action Button"}};var f,b,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    label: "Text Action Button"
  }
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const H=["menubutton"];export{H as __namedExportsOrder,G as default,a as menubutton};
