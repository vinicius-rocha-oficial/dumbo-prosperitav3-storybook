import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as a}from"./index-CTjT7uj6.js";import{d as i}from"./styled-components.browser.esm-D3-gLipQ.js";/* empty css              */import{t as n}from"./contextual-D4vCP4YA.js";import{A as N,L as $}from"./IconsInputLabel-DNdvQB1m.js";import{T as s}from"./index-CEdBj3Sh.js";import{U as I}from"./index-BInylR9Y.js";const S=i.div`
  background: ${n.layer01};
  width: 100%;
  min-height: 50px;
  border-bottom: 1px solid ${n.borderSubtle01};
  justify-content: space-between;
  display: flex;
  font-family: IBM Plex Sans;
  color: ${n.textPrimary};
  margin: 0;
  padding: 0;
`,T=i.button`
  cursor: pointer;
  color: ${n.textPrimary};
  font-family: IBM Plex Sans;
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
  background: ${n.layer01};
  &:hover {
    background: ${n.layerHover01};
  }
  &:active {
    background: ${n.layerActive01};
  }
  &:focus {
  }
`;i.section`
  margin: 0;
  padding: 0;
  transform: translateY(10%) rotate(0deg);
  transition: 0.3s all;
  &.rotate {
    transform: translateY(-1%) rotate(180deg);
  }
`;const O=i.section`
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  padding: 0 1em;
  box-sizing: border-box;
`,P=i.section`
  margin: 0;
  padding: 0;
  color: ${n.iconOnColor};
  display: flex;
  align-items: center;
  height: 100%;
`,q=i.div`
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: strech;
  top: 0;
  right: 0;
  left: 0;
  height: auto;
`,L=i.div`
  background: ${n.backgroundBrand};
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  min-height: 50px;
  font-family: IBM Plex Sans;
  color: ${n.iconOnColor};
`,z=i.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  height: 100%;
  padding: 10px;
  cursor: pointer;
`,B=i.div`
  display: flex;
  gap: 25px;
  padding: 0 1em;
  font-size: 12px;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
`,D=i.div`
  height: auto;
  bottom: 0;
  min-width: 200px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  background: gray;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0px;
`,A=i.p`
  z-index: 4;
  text-align: start;
  margin: 0px;
  padding: 15px 16px;
  background: ${n.layer01};
  border: 2px solid transparent;
  cursor: pointer;
  &:hover {
    background: ${n.layerHover01};
  }
  &:active {
    background: ${n.layerActive01};
  }
  &:focus {
    border: 2px solid #29183a;
  }
`,F=e.jsx(e.Fragment,{children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsxs("g",{id:"Notification",children:[e.jsx("rect",{width:"20",height:"20",fill:"none"}),e.jsx("path",{id:"Vector",d:"M17.9419 12.0581L16.25 10.3662V8.125C16.248 6.57622 15.6718 5.08319 14.6328 3.93462C13.5938 2.78605 12.1658 2.06352 10.625 1.90675V0.625H9.375V1.90675C7.83417 2.06352 6.4062 2.78605 5.36721 3.93462C4.32822 5.08319 3.75201 6.57622 3.75 8.125V10.3662L2.05806 12.0581C1.94087 12.1753 1.87502 12.3343 1.875 12.5V14.375C1.875 14.5408 1.94085 14.6997 2.05806 14.8169C2.17527 14.9342 2.33424 15 2.5 15H6.875V15.4855C6.86145 16.2784 7.14095 17.0483 7.65993 17.6479C8.17891 18.2475 8.90088 18.6344 9.6875 18.7347C10.122 18.7778 10.5606 18.7295 10.9753 18.5929C11.39 18.4563 11.7715 18.2344 12.0953 17.9415C12.419 17.6486 12.6779 17.2912 12.8553 16.8922C13.0326 16.4933 13.1245 16.0616 13.125 15.625V15H17.5C17.6658 15 17.8247 14.9342 17.9419 14.8169C18.0592 14.6997 18.125 14.5408 18.125 14.375V12.5C18.125 12.3343 18.0591 12.1753 17.9419 12.0581ZM11.875 15.625C11.875 16.1223 11.6775 16.5992 11.3258 16.9508C10.9742 17.3025 10.4973 17.5 10 17.5C9.50272 17.5 9.02581 17.3025 8.67417 16.9508C8.32254 16.5992 8.125 16.1223 8.125 15.625V15H11.875V15.625ZM16.875 13.75H3.125V12.7588L4.81687 11.0669C4.93409 10.9497 4.99996 10.7907 5 10.625V8.125C5 6.79892 5.52678 5.52715 6.46447 4.58947C7.40215 3.65178 8.67392 3.125 10 3.125C11.3261 3.125 12.5979 3.65178 13.5355 4.58947C14.4732 5.52715 15 6.79892 15 8.125V10.625C15 10.7907 15.0659 10.9497 15.1831 11.0669L16.875 12.7588V13.75Z",fill:n.iconOnColor})]})})}),U=e.jsx(e.Fragment,{children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsxs("g",{id:"Caret--down",children:[e.jsx("rect",{width:"16",height:"16",fill:"white","fill-opacity":"0.01"}),e.jsx("path",{id:"Vector",d:"M12 6L8 11L4 6H12Z",fill:n.iconOnColor})]})})}),E=e.jsx(e.Fragment,{children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsxs("g",{id:"Apps",children:[e.jsx("rect",{width:"20",height:"20",fill:"none"}),e.jsx("path",{id:"Vector",d:"M5 2.5V5H2.5V2.5H5ZM6.25 1.25H1.25V6.25H6.25V1.25ZM11.25 2.5V5H8.75V2.5H11.25ZM12.5 1.25H7.5V6.25H12.5V1.25ZM17.5 2.5V5H15V2.5H17.5ZM18.75 1.25H13.75V6.25H18.75V1.25ZM5 8.75V11.25H2.5V8.75H5ZM6.25 7.5H1.25V12.5H6.25V7.5ZM11.25 8.75V11.25H8.75V8.75H11.25ZM12.5 7.5H7.5V12.5H12.5V7.5ZM17.5 8.75V11.25H15V8.75H17.5ZM18.75 7.5H13.75V12.5H18.75V7.5ZM5 15V17.5H2.5V15H5ZM6.25 13.75H1.25V18.75H6.25V13.75ZM11.25 15V17.5H8.75V15H11.25ZM12.5 13.75H7.5V18.75H12.5V13.75ZM17.5 15V17.5H15V15H17.5ZM18.75 13.75H13.75V18.75H18.75V13.75Z",fill:n.iconOnColor})]})})}),Y=e.jsx(e.Fragment,{children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsxs("g",{id:"Help",children:[e.jsx("rect",{width:"20",height:"20",fill:"none"}),e.jsxs("g",{id:"Vector",children:[e.jsx("path",{d:"M10 1.25C8.26941 1.25 6.57769 1.76318 5.13876 2.72464C3.69983 3.6861 2.57832 5.05267 1.91605 6.65152C1.25378 8.25037 1.0805 10.0097 1.41813 11.707C1.75575 13.4044 2.5891 14.9635 3.81281 16.1872C5.03652 17.4109 6.59562 18.2442 8.29296 18.5819C9.99029 18.9195 11.7496 18.7462 13.3485 18.0839C14.9473 17.4217 16.3139 16.3002 17.2754 14.8612C18.2368 13.4223 18.75 11.7306 18.75 10C18.75 7.67936 17.8281 5.45376 16.1872 3.81282C14.5462 2.17187 12.3206 1.25 10 1.25ZM10 17.5C8.51664 17.5 7.06659 17.0601 5.83322 16.236C4.59985 15.4119 3.63856 14.2406 3.0709 12.8701C2.50324 11.4997 2.35472 9.99168 2.64411 8.53682C2.9335 7.08197 3.6478 5.74559 4.6967 4.6967C5.74559 3.64781 7.08196 2.9335 8.53682 2.64411C9.99168 2.35472 11.4997 2.50325 12.8701 3.0709C14.2406 3.63856 15.4119 4.59985 16.236 5.83322C17.0601 7.06659 17.5 8.51664 17.5 10C17.5 11.9891 16.7098 13.8968 15.3033 15.3033C13.8968 16.7098 11.9891 17.5 10 17.5Z",fill:n.iconOnColor}),e.jsx("path",{d:"M10 15.625C10.5178 15.625 10.9375 15.2053 10.9375 14.6875C10.9375 14.1697 10.5178 13.75 10 13.75C9.48223 13.75 9.0625 14.1697 9.0625 14.6875C9.0625 15.2053 9.48223 15.625 10 15.625Z",fill:n.iconOnColor}),e.jsx("path",{d:"M10.625 5H9.6875C9.31792 4.99918 8.95183 5.07136 8.61022 5.21241C8.26862 5.35346 7.95825 5.5606 7.69692 5.82192C7.43559 6.08325 7.22846 6.39363 7.08741 6.73523C6.94636 7.07683 6.87417 7.44293 6.875 7.8125V8.125H8.125V7.8125C8.125 7.3981 8.28962 7.00067 8.58264 6.70765C8.87567 6.41462 9.2731 6.25 9.6875 6.25H10.625C11.0394 6.25 11.4368 6.41462 11.7299 6.70765C12.0229 7.00067 12.1875 7.3981 12.1875 7.8125C12.1875 8.2269 12.0229 8.62433 11.7299 8.91735C11.4368 9.21038 11.0394 9.375 10.625 9.375H9.375V12.1875H10.625V10.625C11.3709 10.625 12.0863 10.3287 12.6137 9.80124C13.1412 9.27379 13.4375 8.55842 13.4375 7.8125C13.4375 7.06658 13.1412 6.35121 12.6137 5.82376C12.0863 5.29632 11.3709 5 10.625 5Z",fill:n.iconOnColor})]})]})})}),_=e.jsx(e.Fragment,{children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsxs("g",{id:"User",children:[e.jsx("rect",{width:"16",height:"16",fill:"white","fill-opacity":"0.01"}),e.jsxs("g",{id:"Vector",children:[e.jsx("path",{d:"M8 1.99991C8.49445 1.99991 8.9778 2.14653 9.38893 2.42123C9.80005 2.69594 10.1205 3.08638 10.3097 3.5432C10.4989 4.00002 10.5484 4.50268 10.452 4.98763C10.3555 5.47259 10.1174 5.91804 9.76777 6.26768C9.41814 6.61731 8.97268 6.85541 8.48773 6.95187C8.00277 7.04834 7.50011 6.99883 7.04329 6.80961C6.58648 6.62039 6.19603 6.29996 5.92133 5.88883C5.64662 5.47771 5.5 4.99436 5.5 4.49991C5.5 3.83687 5.76339 3.20098 6.23223 2.73214C6.70107 2.2633 7.33696 1.99991 8 1.99991ZM8 0.999908C7.30777 0.999908 6.63108 1.20518 6.0555 1.58976C5.47993 1.97435 5.03133 2.52098 4.76642 3.16052C4.50152 3.80006 4.4322 4.50379 4.56725 5.18272C4.7023 5.86166 5.03564 6.4853 5.52513 6.97478C6.01461 7.46427 6.63825 7.79761 7.31718 7.93266C7.99612 8.06771 8.69985 7.99839 9.33939 7.73349C9.97893 7.46858 10.5256 7.01998 10.9101 6.4444C11.2947 5.86883 11.5 5.19214 11.5 4.49991C11.5 3.57165 11.1313 2.68141 10.4749 2.02503C9.8185 1.36866 8.92826 0.999908 8 0.999908Z",fill:"white"}),e.jsx("path",{d:"M13 14.9999H12V12.4999C12 12.1716 11.9353 11.8465 11.8097 11.5432C11.6841 11.2399 11.4999 10.9643 11.2678 10.7321C11.0356 10.5 10.76 10.3158 10.4567 10.1902C10.1534 10.0646 9.8283 9.99991 9.5 9.99991H6.5C5.83696 9.99991 5.20107 10.2633 4.73223 10.7321C4.26339 11.201 4 11.8369 4 12.4999V14.9999H3V12.4999C3 11.5717 3.36875 10.6814 4.02513 10.025C4.6815 9.36866 5.57174 8.99991 6.5 8.99991H9.5C10.4283 8.99991 11.3185 9.36866 11.9749 10.025C12.6313 10.6814 13 11.5717 13 12.4999V14.9999Z",fill:n.iconOnColor})]})]})})}),C=f=>{const{options:r,icon:b,userName:w,emailuser:y,children:M,SectionRightTime:j,open:H}=f,[V,v]=a.useState(!1),[l,d]=a.useState(!1),[c,k]=a.useState(),Z=()=>{v(t=>!t)},R=t=>{c===t&&l?d(!1):(k(t),d(!0))};return e.jsx(e.Fragment,{children:e.jsxs(q,{children:[e.jsxs(L,{children:[e.jsx(O,{children:b}),e.jsx(P,{children:M||e.jsxs(e.Fragment,{children:[e.jsxs(z,{children:[e.jsx("section",{style:{margin:"0",padding:".5em",background:"gray",display:"flex",alignItems:"center",borderRadius:"100%"},children:_}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",margin:"0",padding:"0"},children:[e.jsxs("h4",{style:{margin:"0",padding:"0"},children:["Ola, ",w]}),e.jsx("p",{style:{margin:"0",padding:"0"},children:y})]}),e.jsx("span",{style:{margin:"0",padding:"0",display:"flex",alignItems:"center"},children:U})]}),e.jsxs(B,{children:[e.jsx(s,{align:"bottom",label:"Notificaçoes",size:"medium",children:e.jsx("section",{style:{margin:"10px 0",padding:"0"},children:F})}),e.jsx(s,{align:"bottom",label:"App Switcher",size:"medium",width:"100px",children:e.jsx("button",{onClick:Z,style:{margin:"10px 0",padding:"0",cursor:"pointer",background:"transparent",border:"0",outline:"0"},children:E})}),e.jsx(s,{align:"bottom-right",label:"Ajuda",size:"medium",width:"55px",children:e.jsx("section",{style:{margin:"10px 0",padding:"0"},children:Y})})]})]})})]}),e.jsxs(S,{children:[e.jsx("div",{style:{margin:"0 2px",padding:"0",display:"flex",position:"relative",alignItems:"center",height:"auto",gap:"2px"},children:r==null?void 0:r.map((t,p)=>{var g;return e.jsx(e.Fragment,{children:e.jsxs("div",{style:{margin:"0 ",padding:"0",alignItems:"center"},children:[e.jsxs(T,{onClick:t.hasOwnProperty("optionsMenu")?()=>R(p):t.onClick,children:[t.label,t.hasOwnProperty("optionsMenu")?N:""]}),c===p&&l&&e.jsx("div",{style:{position:"absolute",margin:"0",padding:"0",background:"green",top:"55px"},children:e.jsx(D,{children:(g=t.optionsMenu)==null?void 0:g.map(h=>e.jsx(A,{onClick:h.onClick,children:h.label}))})})]})})})}),e.jsx("div",{style:{margin:"0 1em",padding:"0"},children:e.jsx("p",{children:j})})]}),e.jsx("div",{style:{transform:"translateY(0)"},children:e.jsx(I,{options:r,orientations:"right",open:V||H})})]})})};C.__docgenInfo={description:"",methods:[],displayName:"UIHeaderNav",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label?: string;
  onClick?: () => void;
  optionsMenu?: TypeOption[];
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"optionsMenu",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label?: string;
  onClick?: () => void;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"TypeOption[]",required:!1}}]}}],raw:"TypeMenu[]"},description:""},icon:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},emailuser:{required:!1,tsType:{name:"string"},description:""},userName:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},SectionRightTime:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""}}};const a1={title:"Example/UIHeaderNav",component:C,parameters:{layout:"centered"},tags:["autodocs"]},G=[{label:"Sobre Nos",optionsMenu:[{label:"1"},{label:"1"},{label:"1"},{label:"3"}]},{label:"Perfil",optionsMenu:[{label:"Menu 2"},{label:"Menu 2"},{label:"Menu 2"},{label:"Menu 2"}]},{label:"Tikets",optionsMenu:[{label:"Menu 2"},{label:"Menu 2"},{label:"Menu 2"},{label:"Menu 2"}]},{label:"Menu",optionsMenu:[{label:"Menu 2",onClick:()=>alert("Chamados")},{label:"Menu 2"},{label:"Menu 2"},{label:"Menu 2"}]},{label:"Chamados",onClick:()=>alert("Chamados")}],W=new Date().getDate(),J=new Date().getMonth()+1,K=new Date().getFullYear(),o={args:{options:G,icon:$,emailuser:"teste@gmail.com",userName:"teste@teste",SectionRightTime:`${W}/${J}/${K}`}};var x,m,u;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    options: arrNew,
    icon: LogoProsperita,
    emailuser: "teste@gmail.com",
    userName: "teste@teste",
    SectionRightTime: \`\${date}/\${mes}/\${ano}\`
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const s1=["Default"];export{o as Default,s1 as __namedExportsOrder,a1 as default};
