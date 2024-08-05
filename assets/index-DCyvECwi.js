import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as d}from"./index-CTjT7uj6.js";import{p as v,B as h}from"./index-43QVy7Gz.js";import{d as i,t as r}from"./contextual-Cr4fQ3MC.js";/* empty css              */import{M as y}from"./IconsInputLabel-DiahCgGh.js";const w={small:"40%",medium:"62%",large:"98%"},j={small:"32px",medium:"40px",large:"57px"},k=i.div`
  position: relative;
  min-width: 180px;
  width: 100%;
  display: flex;
  justify-content: ${({variations:e,menuAlignment:n})=>e==="overflow"&&n==="bottom end"?"flex-end":"flex-start"};
  outline: none;
`,$=i.span`
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
`,M=i.svg`
  position: absolute;
  z-index: 2;
  top: 0;
  right: 13px;
  bottom: 0;
  transform: ${({size:e})=>e&&` translateY(${w[e||"medium"]})`}
    ${({drop:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  transition: 0.2s linear transform;
`,T=i.button`
  display: flex;
  padding: 8px;
  margin: 0;
  cursor: pointer;
  border: 0;
  outline: 0;
  background: ${r.layer01};
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  border: 2px solid transparent;
  &:focus {
    border: 2px solid ${r.focus};
  }
  &:active {
    background: ${r.backgroundActive};
  }
  &:hover {
    background: ${r.backgroundActive};
  }
`,q=i.div`
  position: relative;
  margin: 0;
  display: flex;
  justify-content: ${({menuAlignment:e,variations:n})=>e==="bottom end"&&n!=="overflow"?"flex-end":e==="bottom start"&&n!=="overflow"?"flex-start":"center"};
  align-items: center;
`,C=i.div`
  position: absolute;
  bottom: 0;
  top: ${({size:e="medium",variations:n})=>e&&n!=="overflow"?j[e]:"35px"};
  visibility: ${({drop:e})=>e?"visible":"hidden"};
  z-index: 4;
  width: ${({menuAlignment:e,variations:n})=>(e==="bottom end"||e==="bottom start")&&n!=="overflow"?"110%":"100%"};
`,D=i.ul`
  margin: 8px 0 0 0;
  padding: 0;
  text-align: left;
  width: 100%;
  background: ${r.layer01};
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,L=i.li`
  position: relative;
  width: 100%;
  color: ${r.textSecondary};
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
  padding: ${({size:e})=>e&&v.default[e||"medium"]};
  border: 2px solid transparent;
  cursor: pointer;

  &:focus {
    border: 2px solid ${r.focus};
  }
  &:hover {
    background: ${r.layerHover01};
  }
`,B=e=>{const{size:n,options:a,variations:l,label:x,drop:f,kind:g}=e,[m,u]=d.useState(!1),s=d.useRef(null),c=()=>{u(o=>!o)},p=o=>{s.current&&!s.current.contains(o.target)&&u(!1)};return d.useEffect(()=>(document.addEventListener("click",p),()=>{document.removeEventListener("click",p)}),[]),t.jsx(t.Fragment,{children:t.jsxs(q,{ref:s,drop:f,...e,children:[t.jsx(k,{...e,children:l==="default"||l==="combo button"?t.jsx(t.Fragment,{children:t.jsxs("div",{onClick:c,style:{width:"100%"},children:[t.jsx(h,{kind:g||"primary",size:n||"medium",label:x||"label"}),l==="combo button"&&t.jsx($,{}),t.jsxs(M,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 16 16",fill:"none",drop:m,size:n||"medium",...e,children:[t.jsx("rect",{width:"16",height:"16"}),t.jsx("path",{d:"M8 5L13 10L12.3 10.7L8 6.4L3.7 10.7L3 10L8 5Z",fill:"white"})]})]})}):t.jsx(t.Fragment,{children:t.jsx(T,{onClick:c,...e,children:y})})}),t.jsx(C,{drop:m,...e,children:t.jsx(D,{...e,children:a==null?void 0:a.map((o,b)=>t.jsxs(L,{onClick:o.onClick,size:n||"medium",tabIndex:1,...e,children:[t.jsx("a",{href:o.href,style:{color:r.textSecondary,textDecoration:"none"},children:o.label}),t.jsx("span",{style:{position:"absolute",right:"12px"},children:t.jsx("img",{src:o.icon})})]},b))})})]})})};B.__docgenInfo={description:"",methods:[],displayName:"MenuButton",props:{size:{required:!1,tsType:{name:"union",raw:'"large" | "small" | "medium"',elements:[{name:"literal",value:'"large"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:""},drop:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| "dangerGhost"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"ghost"'},{name:"literal",value:'"dangerPrimary"'},{name:"literal",value:'"dangerTertiary"'},{name:"literal",value:'"dangerGhost"'}]},description:""}}};export{B as M};
