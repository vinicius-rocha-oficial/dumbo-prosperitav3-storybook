import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{d as r}from"./styled-components.browser.esm-D3-gLipQ.js";/* empty css              */import{t as o}from"./contextual-D4vCP4YA.js";const i={top:"center","top-left":"start","top-right":"end",bottom:"center","bottom-left":"start","bottom-right":"end",left:"start",right:"end"},s=r.div`
  display: flex;
  justify-content: ${({align:t})=>i[t]};
  align-items: center;
  position: relative;
  font-family: IBM Plex Sans;
  margin: 0;
  padding: 0;
  cursor: pointer;
  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
    color: white;
  }
`,d=r.div`
  width: 100%;
  margin: 0px auto;
  padding: 0;
  display: flex;
  justify-content: center;
`,p=r.div`
  background: ${o.backgroundInverse};
  position: relative;
  word-wrap: break-word;
  color: ${o.iconInverse};
  cursor: text;
  display: flex;
  width: 100%;
  margin: 10px 0;
  padding: 0;
  z-index: 2;
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid  ${o.backgroundInverse};
    left: ${({align:t})=>t==="top-left"||t==="bottom-left"?"14%":t==="top-right"||t==="bottom-right"?"80%":t==="left"?"100%":t==="right"?"-0%":"50%"};
    top: ${({align:t})=>t==="bottom"||t==="bottom-left"||t==="bottom-right"?"-6px":t==="left"||t==="right"?"50%":"auto"};
    bottom: ${({align:t})=>t==="top"||t==="top-left"||t==="top-right"?"-6px":t==="left"||t==="right"?"50%":"auto"};

    transform: translateX(-50%)
      ${({align:t})=>(t==="right"||t==="left")&&"translateY(-50%)"}
      ${({align:t})=>t==="bottom"||t==="bottom-left"||t==="bottom-right"?"rotate(0deg)":t==="left"?"rotate(90deg)":t==="right"?"rotate(-90deg)":"rotate(180deg)"};
  }
`,m=r.div`
  display: flex;
  align-items: center;
  position: absolute;
  visibility: hidden;
  opacity: 0;
  width: ${({width:t})=>t||"auto"};
  z-index: 6;
  opacity: 1;
  word-wrap: break-word;
  justify-content: ${({align:t})=>i[t||"top"]};
  font-family: "IBM Plex Sans";
  color: ${o.iconInverse};
  word-wrap: break-word;
  font-size: 14px;
  transition: opacity 0.3s ease;
  bottom: ${({align:t})=>t==="top"||t==="top-left"||t==="top-right"?"112%":"auto"};
  top: ${({align:t})=>t==="bottom"||t==="bottom-left"||t==="bottom-right"?"112%":"auto"};
  right: ${({align:t})=>t==="left"&&"105%"};
  left: ${({align:t})=>t==="right"&&"105%"};
`,c={small:"2px",large:"13px",medium:"7px"},f=t=>{const{children:a,size:l,label:n}=t;return e.jsx(e.Fragment,{children:e.jsxs(s,{...t,children:[e.jsx(d,{...t,children:a||e.jsx("p",{style:{margin:"0",padding:"0"},children:"Text"})}),e.jsx(m,{className:"tooltip",...t,children:e.jsx(p,{...t,children:e.jsx("p",{style:{wordWrap:"break-word",width:"100%",boxSizing:"border-box",padding:c[l||"large"],margin:"0 auto",display:"block",textAlign:"center",fontFamily:"IBM Plex Sans",fontSize:"14px",fontStyle:"normal",fontWeight:"400",lineHeight:"18px",letterSpacing:"0.16px"},children:n||"Exemplo"})})})]})})};f.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{align:{required:!0,tsType:{name:"union",raw:`| "top"\r
| "top-left"\r
| "top-right"\r
| "bottom"\r
| "top"\r
| "bottom-left"\r
| "bottom-right"\r
| "left"\r
| "right"`,elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:""},width:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!0,tsType:{name:"union",raw:'"small" | "large" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"large"'},{name:"literal",value:'"medium"'}]},description:""},label:{required:!1,tsType:{name:"string"},description:""}}};export{f as T};
