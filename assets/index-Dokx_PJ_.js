import{j as i}from"./jsx-runtime-Cw0GR0a5.js";import{m as a,d as o,l as n,t as s}from"./contextual-Cr4fQ3MC.js";const l=a`
  100% {
    transform: rotate(360deg); 
  }
`,p=a`
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
`,m=o.div`
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
  background: ${({withOverlay:e,backgroundOverlay:t})=>e&&t};
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`,h=n`
  animation: ${l} 0.8s linear infinite;
`,g=n`
  .circle-path {
    animation: ${p} 0.8s ease-in-out forwards;
  }
`,f=o.svg`
  ${({active:e})=>e?g:h};
  padding: 0;
  margin: 0;
  width: ${({small:e})=>e?"16px":"100px"};
  height: ${({small:e})=>e?"16px":"100px"};
`,y=e=>{const{withOverlay:t,small:r,backgroundOverlay:d,colorSpinner:c}=e;return i.jsx(m,{backgroundOverlay:d||s.backgroundActive,withOverlay:t,small:r,children:i.jsx(f,{...e,viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("circle",{cx:"44",cy:"44",r:r?"34":"38",stroke:c||s.buttonPrimary,strokeWidth:r?"15":"10",strokeDasharray:"170",strokeDashoffset:"0",strokeLinecap:"round",className:"circle-path"})})})};y.__docgenInfo={description:"",methods:[],displayName:"Loading",props:{active:{required:!1,tsType:{name:"boolean"},description:""},small:{required:!1,tsType:{name:"boolean"},description:""},withOverlay:{required:!1,tsType:{name:"boolean"},description:""},backgroundOverlay:{required:!1,tsType:{name:"string"},description:""},colorSpinner:{required:!1,tsType:{name:"string"},description:""}}};export{y as L};
