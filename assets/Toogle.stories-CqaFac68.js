import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{S as R,a as c}from"./index-ClYmvwGD.js";import{d as a}from"./styled-components.browser.esm-D3-gLipQ.js";import{t as s}from"./contextual-D4vCP4YA.js";import"./index-CTjT7uj6.js";const z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAgCAYAAAB+ZAqzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAKKSURBVFhH7ZbdS1NxGMe/m6sR0d9QEYa9QFQXsYoYilAWtVrasq56XRKsgigqu8hKCjK66V3tRSPD6B0pNBLJLgILydialdJFkG9lOVPn1nm2Z6x5zs4b87ALPzfj+R4GH57n+Z3fMYUFkIaY+TftmBDTiuFivq4v6An0cZUcQ8XaezrhvFGE9ZV70DfYz6k0homRlKNiN3oDv9DeHRXsH/rDT8UYIubv7hCk3BGpGN4fn1Fwcy8GhgOcJDLuYp+6vkZG1xv4yUmc1u8+FFbtx+DIX07ijKsYSW0QRiYlFePtt1aUNZZzFUdRjP74qK2eK/WokSKWzVyMA/YdXMWRFXvT+Q6u2x4U3T+OBx9ecKqMFqlbhecwxWLlJE7Su7K5o0WY/z4Mj45wAlx0noBjfi5X0vx/+uSwzViEO1vPw5oxmZNEJDvW4G/G5ipPghRBnat5/4wrMVKnTwrqVPWWsqRShKhj9f7X2Hb3EIKhUU7EXHAUI39BHldRUtWpGKKOkVBI4UvI87AE1S2PuYpeM+vKdylK2WctUSVFSO7Yc18TttccFgRDnEhTuvogbNMXqlr07EwbKl1nMcls4USepMtf523EzntHFOWmWafi99AAV9LkZC5FheuMailC9gu2zvtKkDuqKCdH7uzluL6pVJMUIfseW5Vlx7WCUzCZTJxoQ68UofjmJ7krG09qlluZtUK3FKEoRqyZm61JjqSu5p/WLUXI7thYnn58CXdtsezO0aLT6bOYMzjRh6qOxaDO0bWUrHN5c+wpkSI0iRFr5+XgkrNEJEdSl4Vxp0KK0CxGjJWjTqZSKgLtmF6etDWE3bXHwsFQkJPUoWn5jUTXKI1gQkwraSoG/AOUmqbG0vPBgQAAAABJRU5ErkJggg==",l=a.span`
  position: absolute;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  left: 0px;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: ${({disabled:e})=>e?s.buttonDisabled:s.toogleOff};
  border-radius: 100px;
  &::before {
    position: absolute;
    border-radius: 100px;
    content: "";
    display: flex;
    justify-content: center;
    height: ${({size:e})=>e==="default"?"20px":"11px"};
    width: ${({size:e})=>e==="default"?"20px":"11px"};
    top: 3px;
    right: 10px;
    left: 3px;
    bottom: 0px;
    background-color: ${({disabled:e})=>e?s.textOnColorDisabled:s.iconOnColor};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    background-image: "";
    background-position: center;
    background-size: 50% 50%;
    transform: translateX(0px);
  }
`,p=a.label`
  position: relative;
  display: flex;
  align-items: center;
  width: ${({size:e})=>e==="default"?"60px":"40px"};
  height: ${({size:e})=>e==="default"?"16px":"7px"};
  padding: 5px 0 5px 0px;
  border-radius: 80px;
  outline-offset: 2px;
  margin: 0;
  &:focus {
    outline: 2px solid ${s.focus};
  }
`,x=a.input`
  opacity: 0;
  width: 0px;
  height: 0px;
  &:checked + ${l} {
    background: ${({disabled:e})=>e?s.buttonDisabled:"#198038"};
  }
  &:focus + ${l} {
    outline: 2px solid ${s.focus};
    outline-offset: 2px;
  }
  outline: 2px solid ${s.focus};

  &:checked + ${l}::before {
    transform: ${({size:e})=>e==="default"?"translateX(35px)":"translateX(23px)"};
    background-image: ${({disabled:e})=>e?"":`url(${z})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: ${({size:e})=>e==="default"?"70%":"80%"};
  }
`,m=a.h1`
  color: ${({disabled:e})=>e?s.textOnColorDisabled:s.textSecondary};
  font-family: IBM Plex Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.32px;
  margin: 0;
`,f=a.h2`
  color: ${({disabled:e})=>e?s.textOnColorDisabled:s.textPrimary};
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.16px;
`,b={position:"absolute",top:"0",bottom:"0",left:"0",right:"0",borderRadius:"2px"},K=e=>{const{size:g,label:d,messege:u,disabled:n,loading:E}=e;return t.jsx(t.Fragment,{children:E?t.jsx(t.Fragment,{children:t.jsx(R,{baseColor:s.skeletonElement,highlightColor:s.skeletonBackground,children:t.jsxs("div",{style:{margin:"0",textAlign:"left",position:"relative"},children:[d&&t.jsx(t.Fragment,{children:t.jsx("div",{style:{display:"flex",alignSelf:"flex-start"},children:t.jsxs(m,{style:{position:"relative"},disabled:n,...e,children:[d,t.jsx(c,{count:1,style:b})]})})}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",margin:"0"},children:[t.jsxs(p,{...e,children:[t.jsx(x,{type:"checkbox",...e}),t.jsx(l,{size:g,...e}),t.jsx(c,{count:1,style:{borderRadius:"81px",position:"absolute",top:"0",bottom:"0",left:"0",right:"0"}})]}),t.jsx("div",{style:{display:"flex",alignSelf:"flex-start"},children:t.jsxs(f,{style:{position:"relative"},disabled:n,...e,children:[u,t.jsx(c,{count:1,style:b})]})})]})]})})}):t.jsxs("div",{style:{margin:"0",textAlign:"left"},children:[t.jsx(m,{disabled:n,...e,children:d}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",margin:"0"},children:[t.jsxs(p,{tabIndex:1,...e,children:[t.jsx(x,{type:"checkbox",...e}),t.jsx(l,{size:g,...e})]}),t.jsx(f,{disabled:n,...e,children:u})]})]})})};K.__docgenInfo={description:"",methods:[],displayName:"Toogle",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "default"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"default"'}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},messege:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const V={title:"Example/Toogle",component:K,parameters:{layout:"centered"},tags:["autodocs"]},o={args:{label:"Toggle label",size:"default",messege:"Value"}},i={args:{label:"Toggle label",size:"default",messege:"Value",disabled:!0}},r={args:{label:"Toggle label",size:"default",messege:"Value",checked:!0}};var h,A,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Toggle label",
    size: "default",
    messege: "Value"
  }
}`,...(y=(A=o.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};var j,k,v;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: "Toggle label",
    size: "default",
    messege: "Value",
    disabled: true
  }
}`,...(v=(k=i.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var T,S,U;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: "Toggle label",
    size: "default",
    messege: "Value",
    checked: true
  }
}`,...(U=(S=r.parameters)==null?void 0:S.docs)==null?void 0:U.source}}};const W=["toogle","disabled","checked"];export{W as __namedExportsOrder,r as checked,V as default,i as disabled,o as toogle};
