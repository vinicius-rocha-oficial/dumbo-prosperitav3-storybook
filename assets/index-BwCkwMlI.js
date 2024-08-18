import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{r as x}from"./index-CTjT7uj6.js";import{S as g,C as h}from"./IconsInputLabel-DNdvQB1m.js";/* empty css              */import{S as k,a as R}from"./index-ClYmvwGD.js";import{t as a}from"./contextual-D4vCP4YA.js";import{d as i}from"./styled-components.browser.esm-D3-gLipQ.js";const F={small:"8px",medium:"12px",large:"14px"},y=i.input`
  transition: 0.2s;
  width: ${({kind:e,expandable:t})=>e==="expandable"&&!t?"47px":"100%"};
  padding: ${({size:e,kind:t})=>t==="fluid"?"37px 0 10px 0":F[e||"small"]};
  padding-left: ${({kind:e,expandable:t})=>e==="fluid"?"14px":e==="expandable"&&!t?"0em":"3.8em"};
  padding-right: ${({kind:e,expandable:t})=>e==="fluid"?"6.4em":e==="expandable"&&!t?"0em":"3.4em"};
  border: 0;
  outline: 0;
  border-radius: ${({ContainedListMenu:e})=>e?"0":"8px"};
  font-family: IBM Plex Sans;
  border: 2px solid transparent;
  border-bottom: ${({ContainedListMenu:e})=>e?"2px solid transparent":`2px solid ${a.borderStrong01}`};
  background: ${a.field01};
  position: relative;
  &:focus {
    border: 2px solid ${a.focus};
  }

  &::placeholder {
    color: ${({kind:e,expandable:t})=>e==="expandable"&&!t?"transparent":e==="expandable"&&t?"gray":""};
  }

  cursor: ${({loading:e,disabled:t})=>e?"wait":t?"not-allowed":"text"};
  height: 100%;
`,$=i.div`
  width: 100%;
  border-radius: ${({ContainedListMenu:e})=>e?"0":"8px"};
  min-width: 350px;
  padding: 0;
  margin: 0;
  display: flex;
  position: relative;
  justify-content: start;
  height: 100%;
  box-sizing: border-box;
  font-family: IBM Plex Sans;
  font-size: 14px;
  &:focus {
    border: 2px solid ${a.focus};
  }
  opacity: ${({disabled:e})=>e?".5":"1"};
  cursor: ${({loading:e,disabled:t})=>e?"wait":t?"not-allowed":"pointer"};
`,B=i.span`
  z-index: 4;
  position: absolute;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.32px;
  top: 10px;
  left: 15px;
  overflow: hidden;
  box-sizing: border-box;
  word-wrap: break-word;
  width: 90%;
`,O=i.div`
  position: absolute;
  right: 5px;
  width: 80px;
  height: 50%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  bottom: 4px;
  z-index: 2;
  padding: 0 0 0 0;
  margin: 0;
  border-radius: 8px;
`,v=i.span`
  position: ${({kind:e})=>e==="fluid"?"auto":"absolute"};
  right: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: end;
  width: ${({kind:e})=>e!=="fluid"?"27px":"50px"};
  height: ${({kind:e})=>e!=="fluid"?"87%":"50%"};
  top: 50%;
  right: 4px;
  padding: 0;
  margin: 0;
  transform: translateY(-50%);
  z-index: 1;
  border-radius: ${({kind:e})=>e!=="fluid"?"8px":"0"};
  border-right: ${({kind:e})=>e!=="fluid"?"1px solid transparent":`1px solid ${a.borderSubtle01}`};
  padding: 0 0.5em;
`,w=i.span`
  position: ${({kind:e})=>e!=="fluid"&&"absolute"};
  background: ${({kind:e,expandable:t})=>e==="expandable"&&t?`${a.field01}`:""};
  left: ${({kind:e})=>"2px"};
  top: ${({kind:e})=>e==="expandable"?"0":"3px"};
  right: ${({kind:e})=>e==="expandable"?"2px":"3px"};
  z-index: 3;
  top: 50%;
  transform: translateY(-50%);
  box-sizing: border-box;
  width: ${({kind:e})=>e==="default"?"45px":e==="expandable"?"47px":"100%"};
  height: ${({kind:e,expandable:t})=>e==="default"||e==="expandable"&&!t||e==="expandable"&&t?"87%":"50%"};
  border-radius: ${({kind:e})=>e==="fluid"?"":"8px"};
  display: flex;
  align-items: center;
  justify-content: ${({kind:e})=>e==="fluid"?"end":"center"};
  cursor: pointer;
  margin: ${({kind:e})=>e==="fluid"?"0 10px 0 0":"0"};
  align-self: ${({kind:e})=>e==="fluid"?"end":"center"};
`,P={position:"absolute",display:"flex",top:"0",left:"0",right:"0",bottom:"0"},D=e=>{const{kind:t,size:S,Title:T,loading:c,value:j,onChange:m,id:C,name:E,placeholder:q,ContainedListMenu:z,disabled:s,readOnly:f,expandable:V,...I}=e,o=x.useRef(null),[d,p]=x.useState(j||""),[l,L]=x.useState(!1),H=r=>{const u=r.target.value;p(u),m&&m(r)},b=()=>{p(""),o.current&&(o.current.value="")},M=()=>{var r;L(u=>!u),(r=o.current)==null||r.focus(),p("")};return n.jsx(n.Fragment,{children:c?n.jsx(k,{baseColor:a.skeletonBackground,highlightColor:a.skeletonElement,children:n.jsxs($,{...e,children:[n.jsx(y,{type:"search",...e}),n.jsx(R,{count:1,style:P})]})}):n.jsxs($,{expandable:l,disabled:s,...e,children:[t==="fluid"&&n.jsx(B,{...e,children:T}),t==="fluid"?n.jsxs(O,{expandable:l,...e,children:[n.jsx(w,{...e,children:g}),d.length>0&&n.jsx(v,{onClick:b,...e,children:h})]}):n.jsxs(n.Fragment,{children:[n.jsx(w,{expandable:l,onClick:M,...e,children:g}),d.length>0&&n.jsx(v,{disabled:s,readOnly:f,onClick:b,...e,children:h})]}),n.jsx(y,{expandable:l,type:"text",kind:t,ref:o,size:S,value:d,name:E,disabled:s,readOnly:t==="expandable"&&!l?!0:f,id:C,loading:c,ContainedListMenu:z,onChange:H,placeholder:q,...I})]})})};D.__docgenInfo={description:"",methods:[],displayName:"Search",props:{kind:{required:!0,tsType:{name:"union",raw:'"fluid" | "default" | "expandable"',elements:[{name:"literal",value:'"fluid"'},{name:"literal",value:'"default"'},{name:"literal",value:'"expandable"'}]},description:""},size:{required:!0,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},Title:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"ReactFormEventHandler",raw:"React.FormEventHandler<HTMLLabelElement>",elements:[{name:"HTMLLabelElement"}]},description:""},value:{required:!1,tsType:{name:"string"},description:""},ContainedListMenu:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""}}};export{D as S};
