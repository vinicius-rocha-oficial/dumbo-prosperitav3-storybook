import{j as i}from"./jsx-runtime-Cw0GR0a5.js";import{m as s,d as a,t as r,l as o}from"./contextual-Cr4fQ3MC.js";const c=s`
  100% {
    transform: rotate(360deg); 
  }
`,l=s`
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
`,p=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: ${({withOverlay:e})=>e&&"fixed"};
  top: ${({withOverlay:e})=>e&&"0"};
  right: ${({withOverlay:e})=>e&&"0"};
  left: ${({withOverlay:e})=>e&&"0"};
  z-index: ${({withOverlay:e})=>e&&"30"};
  bottom: ${({withOverlay:e})=>e&&"0"};
  background: ${({withOverlay:e})=>e&&r.tagBackgroundGray};
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`,m=o`
  animation: ${c} 0.8s linear infinite;
`,h=o`
  .circle-path {
    animation: ${l} 0.8s ease-in-out forwards;
  }
`,f=a.svg`
  ${({active:e})=>e?h:m};
  padding: 0;
  margin: 0;
  width: ${({small:e})=>e?"16px":"100px"};
  height: ${({small:e})=>e?"16px":"100px"};
`,g=e=>{const{withOverlay:n,small:t,description:d}=e;return i.jsx(p,{withOverlay:n,small:t,title:d,children:i.jsx(f,{...e,viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("circle",{cx:"44",cy:"44",r:t?"34":"38",stroke:r.buttonPrimary,strokeWidth:t?"15":"10",strokeDasharray:"170",strokeDashoffset:"0",strokeLinecap:"round",className:"circle-path"})})})};g.__docgenInfo={description:"",methods:[],displayName:"Loading",props:{active:{required:!1,tsType:{name:"boolean"},description:""},description:{required:!1,tsType:{name:"string"},description:""},small:{required:!1,tsType:{name:"boolean"},description:""},withOverlay:{required:!1,tsType:{name:"boolean"},description:""}}};export{g as L};
