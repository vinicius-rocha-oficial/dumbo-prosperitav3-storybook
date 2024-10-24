import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as d}from"./index-CTjT7uj6.js";import{d as n}from"./styled-components.browser.esm-D3-gLipQ.js";/* empty css              */import{t as i}from"./contextual-D4vCP4YA.js";import{A as $,L as q}from"./IconsInputLabel-E66WMmAT.js";import{T as g}from"./index-CXvTuBB8.js";const z=n.div`
  background: ${i.layer01};
  width: 100%;
  min-height: 50px;
  border-bottom: 1px solid ${i.borderSubtle01};
  justify-content: space-between;
  display: flex;
  color: ${i.textPrimary};
  margin: 0;
  padding: 0;
`,S=n.div`
  margin: 0;
  padding: 0;
`,L=n.button`
  cursor: pointer;
  color: ${i.textPrimary};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  height: auto;
  width: auto;
  top: 0;
  outline: none;
  white-space: nowrap;
  gap: 10px;
  margin: 0px;
  font-size: 16px;
  border: 2px solid transparent;
  background: ${i.layer01};
  &:hover {
    background: ${i.layerHover01};
  }
  &:active {
    background: ${i.layerActive01};
  }
  &:focus {
  }
`;n.section`
  margin: 0;
  padding: 0;
  transform: translateY(10%) rotate(0deg);
  transition: 0.3s all;
  &.rotate {
    transform: translateY(-1%) rotate(180deg);
  }
`;const O=n.section`
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  padding: 0 1em;
  box-sizing: border-box;
  cursor: pointer;
  
`,P=n.section`
  margin: 0;
  padding: 0;
  color: ${i.iconOnColor};
  display: flex;
  align-items: center;
  height: 100%;
`,A=n.div`
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: strech;
  top: 0;
  right: 0;
  left: 0;
  height: auto;
  z-index: 6;
`,D=n.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
  margin: 0;
  padding: 0;
  color: ${i.iconOnColor};
  & > * {
    height: 100%;
    display: flex;
    align-items: center; /* Centraliza o conteúdo verticalmente */
  }
`,E=n.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  height: 100%;
  padding: 10px;
  cursor: pointer;
`,I=n.div`
  display: flex;
  gap: 25px;
  padding: 0 1em;
  font-size: 12px;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
`,B=n.div`
  height: auto;
  bottom: 0;
  min-width: 200px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0px;
`,F=n.p`
  z-index: 4;
  text-align: start;
  margin: 0px;
  padding: 15px 16px;
  background: ${i.layer01};
  border: 2px solid transparent;
  cursor: pointer;
  &:hover {
    background: ${i.layerHover01};
  }
  &:active {
    background: ${i.layerActive01};
  }
  &:focus {
    border: 2px solid #29183a;
  }
    white-space: nowrap;
`,U=e.jsx(e.Fragment,{children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsxs("g",{id:"Notification",children:[e.jsx("rect",{width:"20",height:"20",fill:"none"}),e.jsx("path",{id:"Vector",d:"M17.9419 12.0581L16.25 10.3662V8.125C16.248 6.57622 15.6718 5.08319 14.6328 3.93462C13.5938 2.78605 12.1658 2.06352 10.625 1.90675V0.625H9.375V1.90675C7.83417 2.06352 6.4062 2.78605 5.36721 3.93462C4.32822 5.08319 3.75201 6.57622 3.75 8.125V10.3662L2.05806 12.0581C1.94087 12.1753 1.87502 12.3343 1.875 12.5V14.375C1.875 14.5408 1.94085 14.6997 2.05806 14.8169C2.17527 14.9342 2.33424 15 2.5 15H6.875V15.4855C6.86145 16.2784 7.14095 17.0483 7.65993 17.6479C8.17891 18.2475 8.90088 18.6344 9.6875 18.7347C10.122 18.7778 10.5606 18.7295 10.9753 18.5929C11.39 18.4563 11.7715 18.2344 12.0953 17.9415C12.419 17.6486 12.6779 17.2912 12.8553 16.8922C13.0326 16.4933 13.1245 16.0616 13.125 15.625V15H17.5C17.6658 15 17.8247 14.9342 17.9419 14.8169C18.0592 14.6997 18.125 14.5408 18.125 14.375V12.5C18.125 12.3343 18.0591 12.1753 17.9419 12.0581ZM11.875 15.625C11.875 16.1223 11.6775 16.5992 11.3258 16.9508C10.9742 17.3025 10.4973 17.5 10 17.5C9.50272 17.5 9.02581 17.3025 8.67417 16.9508C8.32254 16.5992 8.125 16.1223 8.125 15.625V15H11.875V15.625ZM16.875 13.75H3.125V12.7588L4.81687 11.0669C4.93409 10.9497 4.99996 10.7907 5 10.625V8.125C5 6.79892 5.52678 5.52715 6.46447 4.58947C7.40215 3.65178 8.67392 3.125 10 3.125C11.3261 3.125 12.5979 3.65178 13.5355 4.58947C14.4732 5.52715 15 6.79892 15 8.125V10.625C15 10.7907 15.0659 10.9497 15.1831 11.0669L16.875 12.7588V13.75Z",fill:i.iconOnColor})]})})});e.Fragment,i.iconOnColor;e.Fragment,i.iconOnColor;const _=e.jsx(e.Fragment,{children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsxs("g",{id:"Help",children:[e.jsx("rect",{width:"20",height:"20",fill:"none"}),e.jsxs("g",{id:"Vector",children:[e.jsx("path",{d:"M10 1.25C8.26941 1.25 6.57769 1.76318 5.13876 2.72464C3.69983 3.6861 2.57832 5.05267 1.91605 6.65152C1.25378 8.25037 1.0805 10.0097 1.41813 11.707C1.75575 13.4044 2.5891 14.9635 3.81281 16.1872C5.03652 17.4109 6.59562 18.2442 8.29296 18.5819C9.99029 18.9195 11.7496 18.7462 13.3485 18.0839C14.9473 17.4217 16.3139 16.3002 17.2754 14.8612C18.2368 13.4223 18.75 11.7306 18.75 10C18.75 7.67936 17.8281 5.45376 16.1872 3.81282C14.5462 2.17187 12.3206 1.25 10 1.25ZM10 17.5C8.51664 17.5 7.06659 17.0601 5.83322 16.236C4.59985 15.4119 3.63856 14.2406 3.0709 12.8701C2.50324 11.4997 2.35472 9.99168 2.64411 8.53682C2.9335 7.08197 3.6478 5.74559 4.6967 4.6967C5.74559 3.64781 7.08196 2.9335 8.53682 2.64411C9.99168 2.35472 11.4997 2.50325 12.8701 3.0709C14.2406 3.63856 15.4119 4.59985 16.236 5.83322C17.0601 7.06659 17.5 8.51664 17.5 10C17.5 11.9891 16.7098 13.8968 15.3033 15.3033C13.8968 16.7098 11.9891 17.5 10 17.5Z",fill:i.iconOnColor}),e.jsx("path",{d:"M10 15.625C10.5178 15.625 10.9375 15.2053 10.9375 14.6875C10.9375 14.1697 10.5178 13.75 10 13.75C9.48223 13.75 9.0625 14.1697 9.0625 14.6875C9.0625 15.2053 9.48223 15.625 10 15.625Z",fill:i.iconOnColor}),e.jsx("path",{d:"M10.625 5H9.6875C9.31792 4.99918 8.95183 5.07136 8.61022 5.21241C8.26862 5.35346 7.95825 5.5606 7.69692 5.82192C7.43559 6.08325 7.22846 6.39363 7.08741 6.73523C6.94636 7.07683 6.87417 7.44293 6.875 7.8125V8.125H8.125V7.8125C8.125 7.3981 8.28962 7.00067 8.58264 6.70765C8.87567 6.41462 9.2731 6.25 9.6875 6.25H10.625C11.0394 6.25 11.4368 6.41462 11.7299 6.70765C12.0229 7.00067 12.1875 7.3981 12.1875 7.8125C12.1875 8.2269 12.0229 8.62433 11.7299 8.91735C11.4368 9.21038 11.0394 9.375 10.625 9.375H9.375V12.1875H10.625V10.625C11.3709 10.625 12.0863 10.3287 12.6137 9.80124C13.1412 9.27379 13.4375 8.55842 13.4375 7.8125C13.4375 7.06658 13.1412 6.35121 12.6137 5.82376C12.0863 5.29632 11.3709 5 10.625 5Z",fill:i.iconOnColor})]})]})})}),Y=e.jsx(e.Fragment,{children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsxs("g",{id:"User",children:[e.jsx("rect",{width:"16",height:"16",fill:"white","fill-opacity":"0.01"}),e.jsxs("g",{id:"Vector",children:[e.jsx("path",{d:"M8 1.99991C8.49445 1.99991 8.9778 2.14653 9.38893 2.42123C9.80005 2.69594 10.1205 3.08638 10.3097 3.5432C10.4989 4.00002 10.5484 4.50268 10.452 4.98763C10.3555 5.47259 10.1174 5.91804 9.76777 6.26768C9.41814 6.61731 8.97268 6.85541 8.48773 6.95187C8.00277 7.04834 7.50011 6.99883 7.04329 6.80961C6.58648 6.62039 6.19603 6.29996 5.92133 5.88883C5.64662 5.47771 5.5 4.99436 5.5 4.49991C5.5 3.83687 5.76339 3.20098 6.23223 2.73214C6.70107 2.2633 7.33696 1.99991 8 1.99991ZM8 0.999908C7.30777 0.999908 6.63108 1.20518 6.0555 1.58976C5.47993 1.97435 5.03133 2.52098 4.76642 3.16052C4.50152 3.80006 4.4322 4.50379 4.56725 5.18272C4.7023 5.86166 5.03564 6.4853 5.52513 6.97478C6.01461 7.46427 6.63825 7.79761 7.31718 7.93266C7.99612 8.06771 8.69985 7.99839 9.33939 7.73349C9.97893 7.46858 10.5256 7.01998 10.9101 6.4444C11.2947 5.86883 11.5 5.19214 11.5 4.49991C11.5 3.57165 11.1313 2.68141 10.4749 2.02503C9.8185 1.36866 8.92826 0.999908 8 0.999908Z",fill:"white"}),e.jsx("path",{d:"M13 14.9999H12V12.4999C12 12.1716 11.9353 11.8465 11.8097 11.5432C11.6841 11.2399 11.4999 10.9643 11.2678 10.7321C11.0356 10.5 10.76 10.3158 10.4567 10.1902C10.1534 10.0646 9.8283 9.99991 9.5 9.99991H6.5C5.83696 9.99991 5.20107 10.2633 4.73223 10.7321C4.26339 11.201 4 11.8369 4 12.4999V14.9999H3V12.4999C3 11.5717 3.36875 10.6814 4.02513 10.025C4.6815 9.36866 5.57174 8.99991 6.5 8.99991H9.5C10.4283 8.99991 11.3185 9.36866 11.9749 10.025C12.6313 10.6814 13 11.5717 13 12.4999V14.9999Z",fill:i.iconOnColor})]})]})})}),G=n.div`
  margin: 0;
  padding: 0;
  font-size: 13px !important;
  font-weight: 600 !important;
  line-height: 18px !important;
  letter-spacing: 0.16px;
`,W=n.div`
  margin: 0;
  padding: 0;
  font-size: 14px !important;
  font-weight: 400 !important;
  line-height: 18px !important;
  letter-spacing: 0.16px;
`,J=n.div`
  font-size: 14px !important;
  font-weight: 400 !important;
  line-height: 18px !important;
  letter-spacing: 0.16px;
`,v=y=>{const{options:o,icon:V,userName:j,emailuser:H,children:M,SectionRightTime:R,bgHeader:k,navigateProfile:N}=y,[m,s]=d.useState(!1),[h,u]=d.useState(),Z=(t,l)=>{var a,r;l?h===t&&m?s(!1):(u(t),s(!0)):(u(void 0),s(!1),(r=(a=o==null?void 0:o[t])==null?void 0:a.onClick)==null||r.call(a))},p=d.useRef(null),x=t=>{p.current&&!p.current.contains(t.target)&&s(!1)};return d.useEffect(()=>(document.addEventListener("mousedown",x),()=>{document.removeEventListener("mousedown",x)}),[]),e.jsxs(A,{children:[e.jsxs(D,{style:{background:k||i.focus},children:[e.jsx(O,{children:V}),e.jsxs(P,{children:[e.jsxs(E,{children:[e.jsx(g,{align:"bottom",size:"small",label:"Meu perfil",width:"100px",children:e.jsx("section",{onClick:N,style:{margin:"0",padding:".5em",background:"gray",display:"flex",alignItems:"center",borderRadius:"100%"},children:Y})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",margin:"0",padding:"0",fontSize:"13px"},children:[e.jsx(G,{children:j}),e.jsx(W,{children:H})]})]}),M||e.jsxs(I,{children:[e.jsx(g,{align:"bottom",label:"Notificações",size:"medium",children:e.jsx("section",{style:{margin:"10px 0",padding:"0"},children:U})}),e.jsx(g,{align:"bottom-right",label:"Ajuda",size:"medium",width:"55px",children:e.jsx("section",{style:{margin:"10px 0",padding:"0"},children:_})})]})]})]}),e.jsxs(z,{ref:p,children:[e.jsx("div",{style:{margin:"0 2px",padding:"0",display:"flex",position:"relative",alignItems:"center",height:"auto",gap:"2px"},children:o==null?void 0:o.map((t,l)=>{var a;return e.jsxs(S,{style:{margin:"0",padding:"0",alignItems:"center"},children:[t.permission&&e.jsx("a",{href:t.href,children:e.jsxs(L,{onClick:()=>Z(l,!!t.optionsMenu),children:[t.label,t.optionsMenu?$:""]})}),h===l&&m&&t.optionsMenu&&e.jsx("div",{style:{position:"absolute",margin:"0",padding:"0",top:"55px"},children:e.jsx(B,{children:(a=t.optionsMenu)==null?void 0:a.map((r,T)=>r.permission&&e.jsx(F,{onClick:()=>{var C;(C=r.onClick)==null||C.call(r),s(!1)},children:r.label},T))})})]},l)})}),e.jsx("div",{style:{margin:"0 1em",padding:"0",fontSize:"15px",display:"flex",alignItems:"center",height:"auto"},children:e.jsx(J,{children:R})})]})]})};v.__docgenInfo={description:"",methods:[],displayName:"UIHeaderNav",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label?: string | React.ReactNode;\r
  onClick?: () => void;\r
  href?: string;\r
  permission?: boolean;\r
  optionsMenu?: TypeOption[];\r
}`,signature:{properties:[{key:"label",value:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}],required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"href",value:{name:"string",required:!1}},{key:"permission",value:{name:"boolean",required:!1}},{key:"optionsMenu",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label?: string;\r
  onClick?: () => void;\r
  permission?: boolean;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"permission",value:{name:"boolean",required:!1}}]}}],raw:"TypeOption[]",required:!1}}]}}],raw:"TypeMenu[]"},description:""},icon:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},emailuser:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},userName:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},SectionRightTime:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},bgHeader:{required:!1,tsType:{name:"string"},description:""},navigateProfile:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const le={title:"Example/UIHeaderNav",component:v,parameters:{layout:"centered"},tags:["autodocs"]},K=[{label:"Sobre Nos",permission:!0,optionsMenu:[{label:"1"},{label:"1"},{label:"1"},{label:"3",permission:!0}]},{label:"Perfil",permission:!0,optionsMenu:[{label:"Menu 2",onClick:()=>alert("clickou no meu 2"),permission:!0},{label:"Menu 2",permission:!0},{label:"Menu 2"},{label:"Menu 2"}]},{label:"Tikets",permission:!0,optionsMenu:[{label:"Menu 2",permission:!0},{label:"Menu 2"},{label:"Menu 2"},{label:"Menu 2"}]},{label:"Menu",permission:!0,onClick:()=>alert("Menu")},{label:"Chamados",onClick:()=>alert("Chamados")}],Q=new Date().getDate(),X=new Date().getMonth()+1,ee=new Date().getFullYear(),c={args:{options:K,icon:q,emailuser:"teste@gmail.com",userName:"teste@teste",SectionRightTime:`${Q}/${X}/${ee}`,navigateProfile:()=>alert("")}};var f,w,b;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    options: arrNew,
    icon: LogoProsperita,
    emailuser: "teste@gmail.com",
    userName: "teste@teste",
    SectionRightTime: \`\${date}/\${mes}/\${ano}\`,
    navigateProfile: () => alert("")
  }
}`,...(b=(w=c.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};const de=["Default"];export{c as Default,de as __namedExportsOrder,le as default};
