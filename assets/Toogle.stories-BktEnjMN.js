import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{d as n,t}from"./contextual-Cr4fQ3MC.js";import"./index-CTjT7uj6.js";const T="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAgCAYAAAB+ZAqzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAKKSURBVFhH7ZbdS1NxGMe/m6sR0d9QEYa9QFQXsYoYilAWtVrasq56XRKsgigqu8hKCjK66V3tRSPD6B0pNBLJLgILydialdJFkG9lOVPn1nm2Z6x5zs4b87ALPzfj+R4GH57n+Z3fMYUFkIaY+TftmBDTiuFivq4v6An0cZUcQ8XaezrhvFGE9ZV70DfYz6k0homRlKNiN3oDv9DeHRXsH/rDT8UYIubv7hCk3BGpGN4fn1Fwcy8GhgOcJDLuYp+6vkZG1xv4yUmc1u8+FFbtx+DIX07ijKsYSW0QRiYlFePtt1aUNZZzFUdRjP74qK2eK/WokSKWzVyMA/YdXMWRFXvT+Q6u2x4U3T+OBx9ecKqMFqlbhecwxWLlJE7Su7K5o0WY/z4Mj45wAlx0noBjfi5X0vx/+uSwzViEO1vPw5oxmZNEJDvW4G/G5ipPghRBnat5/4wrMVKnTwrqVPWWsqRShKhj9f7X2Hb3EIKhUU7EXHAUI39BHldRUtWpGKKOkVBI4UvI87AE1S2PuYpeM+vKdylK2WctUSVFSO7Yc18TttccFgRDnEhTuvogbNMXqlr07EwbKl1nMcls4USepMtf523EzntHFOWmWafi99AAV9LkZC5FheuMailC9gu2zvtKkDuqKCdH7uzluL6pVJMUIfseW5Vlx7WCUzCZTJxoQ68UofjmJ7krG09qlluZtUK3FKEoRqyZm61JjqSu5p/WLUXI7thYnn58CXdtsezO0aLT6bOYMzjRh6qOxaDO0bWUrHN5c+wpkSI0iRFr5+XgkrNEJEdSl4Vxp0KK0CxGjJWjTqZSKgLtmF6etDWE3bXHwsFQkJPUoWn5jUTXKI1gQkwraSoG/AOUmqbG0vPBgQAAAABJRU5ErkJggg==",l=n.span`
  position: absolute;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  left: 0px;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: ${({disabled:e})=>e?t.buttonDisabled:t.toogleOff};
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
    background-color: ${({disabled:e})=>e?t.textOnColorDisabled:t.iconOnColor};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    background-image: "";
    background-position: center;
    background-size: 50% 50%;
    transform: translateX(0px);
  }
`,U=n.label`
  position: relative;
  display: flex;
  align-items: center;
  width: ${({size:e})=>e==="default"?"60px":"40px"};
  height: ${({size:e})=>e==="default"?"16px":"7px"};
  padding: 5px 0 5px 0px;
  border-radius: 100%;
  margin: 0;
  background: red;
`,K=n.input`
  opacity: 0;
  width: 0px;
  height: 0px;
  &:checked + ${l} {
    background: ${({disabled:e})=>e?t.buttonDisabled:"#198038"};
  }
  &:focus + ${l} {
    outline: 2px solid ${t.focus};
    outline-offset: 2px;
  }
  &:checked + ${l}::before {
    transform: ${({size:e})=>e==="default"?"translateX(35px)":"translateX(23px)"};
    background-image: ${({disabled:e})=>e?"":`url(${T})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: ${({size:e})=>e==="default"?"70%":"80%"};
  }
`,v=n.h1`
  color: ${({disabled:e})=>e?t.textOnColorDisabled:t.textSecondary};
  font-family: IBM Plex Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.32px;
`,z=n.h2`
  color: ${({disabled:e})=>e?t.textOnColorDisabled:t.textPrimary};
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.16px;
`,h=e=>{const{size:A,title:k,messege:y,disabled:i}=e;return a.jsxs(a.Fragment,{children:[a.jsx(v,{style:{margin:"0 0 2px 0"},disabled:i,...e,children:k}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",margin:"0"},children:[a.jsxs(U,{...e,children:[a.jsx(K,{type:"checkbox",...e}),a.jsx(l,{size:A,...e})]}),a.jsx(z,{disabled:i,...e,children:y})]})]})};h.__docgenInfo={description:"",methods:[],displayName:"Toogle",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "default"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"default"'}]},description:""},title:{required:!1,tsType:{name:"string"},description:""},messege:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const j={title:"Example/Toogle",component:h,parameters:{layout:"centered"},tags:["autodocs"]},s={args:{title:"Toggle label",size:"default",messege:"Value"}},o={args:{title:"Toggle label",size:"default",messege:"Value",disabled:!0}},r={args:{title:"Toggle label",size:"default",messege:"Value",checked:!0}};var d,c,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: "Toggle label",
    size: "default",
    messege: "Value"
  }
}`,...(g=(c=s.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var p,u,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: "Toggle label",
    size: "default",
    messege: "Value",
    disabled: true
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var x,f,b;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: "Toggle label",
    size: "default",
    messege: "Value",
    checked: true
  }
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const q=["toogle","disabled","checked"];export{q as __namedExportsOrder,r as checked,j as default,o as disabled,s as toogle};
