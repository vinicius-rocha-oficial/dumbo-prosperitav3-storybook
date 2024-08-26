import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as a}from"./index-CTjT7uj6.js";import{p as v,B as y}from"./index-RDOqItmM.js";import{d as o}from"./styled-components.browser.esm-D3-gLipQ.js";/* empty css              */import{t as r}from"./contextual-D4vCP4YA.js";import{M as w}from"./IconsInputLabel-DNdvQB1m.js";const j={small:"40%",medium:"62%",large:"98%"},k={small:"32px",medium:"40px",large:"57px"},$=o.div`
  position: relative;
  min-width: 180px;
  width: 100%;
  display: flex;
  justify-content: ${({variations:e,menuAlignment:n})=>e==="overflow"&&n==="bottom end"?"flex-end":"flex-start"};
  outline: none;
  height: 100%;
  padding: 0;
  margin: 0;

`,M=o.span`
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
`,T=o.svg`
  position: absolute;
  z-index: 2;
  top: 0;
  right: 13px;
  bottom: 0;
  transform: ${({size:e})=>e&&` translateY(${j[e||"medium"]})`}
    ${({drop:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  transition: 0.2s linear transform;
`,q=o.button`
  display: flex;
  padding: 10px;
  margin: 0;
  cursor: pointer;
  border: 0;
  outline: 0;
  min-width: 20%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: ${r.layer01};
  box-shadow: ${({ContainedListMenu:e})=>e?"":"0px 2px 6px 0px rgba(0, 0, 0, 0.3)"};
  border: 2px solid transparent;
  &:active {
    background: ${r.backgroundActive};
  }
  &:focus {
    border: 2px solid ${r.focus};
  }
  &:hover {
    background: ${r.backgroundActive};
  }
`,C=o.div`
  position: relative;
  margin: 0;
  display: flex;
  justify-content: ${({menuAlignment:e,variations:n})=>e==="bottom end"&&n!=="overflow"?"flex-end":e==="bottom start"&&n!=="overflow"?"flex-start":"center"};
  align-items: center;
`,L=o.div`
  position: absolute;
  bottom: 0;
  top: ${({size:e="medium",variations:n})=>e&&n!=="overflow"?k[e]:"35px"};
  visibility: ${({drop:e})=>e?"visible":"hidden"};
  z-index: 4;
  width: ${({menuAlignment:e,variations:n})=>(e==="bottom end"||e==="bottom start")&&n!=="overflow"?"110%":"100%"};
`,D=o.ul`
  margin: 10px 0 0 0;
  padding: 0;
  text-align: left;
  width: 100%;
  background: ${r.layer01};
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,B=o.li`
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
  outline: none;
  &:focus {
    border: 2px solid ${r.focus};
  }
  &:hover {
    background: ${r.layerHover01};
  }
`,z=e=>{const{size:n,options:s,variations:d,label:g,drop:b,kind:h}=e,[l,c]=a.useState(!1),m=a.useRef(null),u=a.useRef(null),p=()=>{c(i=>!i)},f=i=>{u.current&&!u.current.contains(i.target)&&c(!1)};return a.useEffect(()=>(document.addEventListener("click",f),()=>{document.removeEventListener("click",f)}),[]),a.useEffect(()=>{l&&m.current&&m.current.focus()},[l]),t.jsx(t.Fragment,{children:t.jsxs(C,{ref:u,drop:b,...e,children:[t.jsx($,{...e,children:d==="default"||d==="combo button"?t.jsx(t.Fragment,{children:t.jsxs("div",{onClick:p,style:{width:"100%"},children:[t.jsx(y,{kind:h||"primary",size:n||"medium",label:g||"label"}),d==="combo button"&&t.jsx(M,{}),t.jsxs(T,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 16 16",fill:"none",drop:l,size:n||"medium",...e,children:[t.jsx("rect",{width:"16",height:"16"}),t.jsx("path",{d:"M8 5L13 10L12.3 10.7L8 6.4L3.7 10.7L3 10L8 5Z",fill:"white"})]})]})}):t.jsx(t.Fragment,{children:t.jsx(q,{onClick:p,...e,children:w})})}),t.jsx(L,{drop:l,...e,children:t.jsx(D,{...e,children:s==null?void 0:s.map((i,x)=>t.jsxs(B,{onClick:i.onClick,ref:x===0?m:null,size:n||"medium",tabIndex:0,...e,children:[t.jsx("a",{href:i.href,style:{color:r.textSecondary,textDecoration:"none"},children:i.label}),t.jsx("span",{style:{position:"absolute",right:"12px"},children:t.jsx("img",{src:i.icon})})]},x))})})]})})};z.__docgenInfo={description:"",methods:[],displayName:"MenuButton",props:{size:{required:!1,tsType:{name:"union",raw:'"large" | "small" | "medium"',elements:[{name:"literal",value:'"large"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:""},drop:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label?: string;\r
  href?: string;\r
  onClick?: () => void;\r
  icon?: string;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"href",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"icon",value:{name:"string",required:!1}}]}}],raw:"TypeOptionsProps[]"},description:""},menuAlignment:{required:!1,tsType:{name:"union",raw:'"bottom" | "bottom start" | "bottom end"',elements:[{name:"literal",value:'"bottom"'},{name:"literal",value:'"bottom start"'},{name:"literal",value:'"bottom end"'}]},description:""},variations:{required:!1,tsType:{name:"union",raw:'"combo button" | "default" | "overflow"',elements:[{name:"literal",value:'"combo button"'},{name:"literal",value:'"default"'},{name:"literal",value:'"overflow"'}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},kind:{required:!1,tsType:{name:"union",raw:`| "primary"\r
| "secondary"\r
| "tertiary"\r
| "ghost"\r
| "dangerPrimary"\r
| "dangerTertiary"\r
| "dangerGhost"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"ghost"'},{name:"literal",value:'"dangerPrimary"'},{name:"literal",value:'"dangerTertiary"'},{name:"literal",value:'"dangerGhost"'}]},description:""},ContainedListMenu:{required:!1,tsType:{name:"boolean"},description:""}}};export{z as M};
