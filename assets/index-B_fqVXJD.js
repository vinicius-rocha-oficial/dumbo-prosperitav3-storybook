import{j as i}from"./jsx-runtime-Cw0GR0a5.js";import{m as d,d as r,l as c,t as a}from"./contextual-Cr4fQ3MC.js";const m=d`
  100% {
    transform: rotate(360deg); 
  }
`,x=d`
  0% {
    stroke-dasharray: 1, 500;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 150, 240;
    stroke-dashoffset: -60;
  }
  100% {
    stroke-dasharray: 170, 400;
    stroke-dashoffset: -235;
    visibility: hidden;
  }
`,f=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: ${({withOverlay:e})=>e?"fixed":"relative"};
  top: ${({withOverlay:e})=>e&&"0"};
  right: ${({withOverlay:e})=>e&&"0"};
  left: ${({withOverlay:e})=>e&&"0"};
  z-index: ${({withOverlay:e})=>e&&"30"};
  bottom: ${({withOverlay:e})=>e&&"0"};
  background: ${({withOverlay:e,backgroundOverlay:s})=>e&&s};
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`,n=c`
  animation: ${m} 1s linear infinite;
`,o=c`
  .circle-path {
    animation: ${x} 0.5s ease-in-out forwards;
  }
`,y=r.svg`
  ${({active:e})=>e?o:n};
  padding: 0;
  margin: 0;
  width: ${({small:e})=>e?"20px":"100px"};
  height: ${({small:e})=>e?"20px":"100px"};
  z-index: 2;
`,v=r.svg`
  ${({active:e})=>e?o:n};
  padding: 0;
  margin: 0;
  width: ${({small:e})=>e?"20px":"100px"};
  height: ${({small:e})=>e?"20px":"100px"};
  position: absolute;
`;r.circle`
  ${({active:e})=>e?o:n};
  padding: 0;
  margin: 0;
  width: ${({small:e})=>e?"20px":"100px"};
  height: ${({small:e})=>e?"20px":"100px"};
  position: absolute;
`;const k=e=>{const{withOverlay:s,small:t,backgroundOverlay:l,colorSpinner:h,active:p}=e,g=t===!0?"34":"38";return i.jsxs(f,{backgroundOverlay:l||a.backgroundActive,withOverlay:s,small:t,active:p,...e,children:[t&&i.jsx(v,{...e,viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("circle",{cx:"44",cy:"44",r:t?"34":"38",stroke:a.borderStrong01,strokeWidth:t?"17":"10",strokeDasharray:"0",strokeDashoffset:"0",strokeLinecap:"inherit",className:"circle-path",...e})}),i.jsx(y,{...e,viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("circle",{cx:"44",cy:"44",r:g,stroke:h||a.buttonPrimary,strokeWidth:t?"17":"10",strokeDasharray:t?"150":"190",strokeDashoffset:"0",strokeLinecap:"inherit",className:"circle-path",...e})})]})};k.__docgenInfo={description:"",methods:[],displayName:"Loading",props:{active:{required:!1,tsType:{name:"boolean"},description:""},small:{required:!1,tsType:{name:"boolean"},description:""},withOverlay:{required:!1,tsType:{name:"boolean"},description:""},backgroundOverlay:{required:!1,tsType:{name:"string"},description:""},colorSpinner:{required:!1,tsType:{name:"string"},description:""}}};export{k as L};
