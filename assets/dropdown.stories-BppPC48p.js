import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{r as p}from"./index-CTjT7uj6.js";import{d as a,t as o}from"./contextual-Cr4fQ3MC.js";import{j as L,A as C,k as M}from"./IconsInputLabel-PpPdO3Ft.js";import{w as W}from"./Warningfilled-CR6tEm8M.js";import{s as A}from"./statusicon-BiyrYhQW.js";const z={large:"16px",small:"9px",medium:"12px"},D={large:"35px",small:"28px",medium:"29px"},H={large:"30px",small:"23px",medium:"26px"},R={large:"15px",small:"6px",medium:"10px"},B={large:"20px",small:"10px",medium:"15px"},_={large:"35px",small:"27px",medium:"29px"},N={large:"19px",small:"10px",medium:"15px"},U=a.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  min-width: 300px;
  opacity: ${({disabled:e})=>e?"0.5":"1"};
  background: ${({kind:e})=>e==="fluid"?o.field01:""};
  border-radius: ${({kind:e})=>e==="fluid"?"8px":""};
  border: ${({kind:e,error:t})=>e==="fluid"&&t?`2px solid ${o.supportError}`:"auto"};
`,F=a.input`
  padding: ${({size:e,kind:t})=>e&&t==="default"?z[e]:t==="fluid"?"2.7em 0 1em 1em":""};
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  color: ${o.linkPrimary};
  background-color: ${o.layer01};
  border-radius: ${({kind:e})=>e==="fluid"?"5px":"8px"};
  border: ${({error:e,disabled:t,kind:n})=>e&&n==="default"?`2px solid ${o.supportError}`:t?`1px solid ${o.borderDisabled}`:n==="fluid"?"1px solid transparent":`1px solid ${o.buttonTertiary}`};
  border-bottom: ${({kind:e})=>e==="fluid"?`1px solid ${o.borderSubtle01}`:"auto"};
  min-height: 18px;
  outline: 0;
  width: 100%;
  margin: 0 auto;
  &::placeholder {
    color: ${o.linkPrimary};
  }

  &:focus {
    border: ${({kind:e})=>e==="default"?`2px solid ${o.focus}`:`2px solid ${o.focus}`};
  }
`,G=a.div`
  position: absolute;
  width: 100%;
  display: ${({show:e})=>e?"flex":"none"};
  background-color: ${o.layerHover01};
  border-radius: 8px;
  border: 1px solid ${o.buttonTertiary};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
`,J=a.label`
  width: 100%;
`,K=a.span`
  position: absolute;
  right: 10px;
  top: 15px;
`,Q=e=>{const{size:t,show:n,text:s}=e;if(t&&!s&&!n)return R[t];if(t&&!s&&n)return B[t]},V=a.span`
  position: absolute;
  right: 18px;
  top: ${({size:e,show:t,text:n})=>e&&t&&n?D[e]:n?H[e||"large"]:Q};
  padding: 0;
  transform: ${({show:e})=>e?"rotate(0deg)":"rotate(180deg)"};
`,X=a.img`
  position: absolute;
  right: ${({kind:e})=>e=="fluid"?"16px":"40px"};
  top: ${({text:e,size:t,kind:n})=>e&&t&&n==="default"?_[t]:n==="fluid"?"auto":N[t||"large"]};
  bottom: ${({kind:e})=>e=="fluid"?"5px":"auto"};
`,Y=a.div`
  cursor: pointer;
  border: 1px solid transparent;
  position: relative;
  border-bottom: ${({BorderLastNone:e})=>e?"0":`1px solid ${o.borderSubtle01}`};
  text-align: left;
  padding: 0.9em;
  width: 100%;
  box-sizing: border-box;
  color: ${o.textSecondary};
  text-overflow: ellipsis;
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.16px;

  &:hover {
    background-color: ${o.layerSelectedHover01};
    border-radius: 7px;
  }
`,Z=a.p`
  position: ${({size:e,kind:t})=>e&&t==="fluid"?"absolute":"auto"};
  display: flex;
  gap: 4px;
  top: 8px;
  left: 13px;
  z-index: 3;
  color: ${o.textSecondary};
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: IBM Plex Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.16px;
  margin: 0;
  box-sizing: border-box;
`,ee=a.p`
  color: ${({error:e,warning:t})=>e?o.textError:t?o.textPrimary:o.textSecondary};
  text-overflow: ellipsis;
  padding: ${({kind:e,error:t,warning:n})=>e==="fluid"&&(t||n)?".5em 0 .5em 1em":"0"};
  white-space: nowrap;
  font-family: IBM Plex Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.16px;
  margin: 0;
`,I=e=>{const[t,n]=p.useState(null),[s,m]=p.useState(e.show),g=p.useRef(null),{error:f,warning:x,text:j,kind:l,messege:h,options:b,onChange:w}=e,q=i=>{if(n(i.label),m(!1),w){const d={target:{value:i.value}};w(d)}},y=()=>{m(i=>!i)},v=i=>{g.current&&!g.current.contains(i.target)&&m(!1)};return p.useEffect(()=>(document.addEventListener("mousedown",v),()=>{document.removeEventListener("mousedown",v)}),[]),r.jsxs(U,{...e,ref:g,children:[r.jsxs(Z,{...e,children:[j,l==="fluid"&&L]}),r.jsx(F,{readOnly:!0,kind:l,onClick:y,placeholder:t||"Escolha Uma opção",...e}),(f||x)&&r.jsx(X,{src:x?A:W,...e}),r.jsx(V,{show:s,onClick:y,...e,children:C}),r.jsx("div",{style:{position:"relative",width:"100%",margin:"2px auto 0 0"},children:r.jsx(G,{show:s,...e,children:b.map((i,d)=>r.jsx(J,{show:s,...e,children:r.jsxs(Y,{onClick:()=>q(i),BorderLastNone:d===b.length-1,...e,children:[t===i.label&&r.jsx(K,{...e,children:M}),i.label]})},d))})}),r.jsx(ee,{...e,children:(l==="fluid"&&(f||x)||l==="default")&&h})]})};I.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"OptionType[]"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},show:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLSelectElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLSelectElement>",elements:[{name:"HTMLSelectElement"}]},name:"event"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:'"large" | "small" | "medium"',elements:[{name:"literal",value:'"large"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:""},kind:{required:!1,tsType:{name:"union",raw:'"default" | "fluid"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"fluid"'}]},description:""},BorderLastNone:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},warning:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},messege:{required:!1,tsType:{name:"string"},description:""}}};const se={title:"Example/Dropdown",component:I,parameters:{layout:"centered"},tags:["autodocs"]},P=[{label:"option 1",value:"OPÇÃO-1"},{label:"option 2",value:"OPÇÃO-2"},{label:"option 3",value:"OPÇÃO-3"},{label:"option 4",value:"OPÇÃO-4"}],u={args:{text:"Titulo",size:"large",kind:"default",messege:"Warning Messege Through Input",options:P}},c={args:{text:"Titulo",size:"large",kind:"fluid",messege:"Warning Messege Through Input",options:P}};var T,$,O;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    text: "Titulo",
    size: "large",
    kind: "default",
    messege: "Warning Messege Through Input",
    options: OptionsLabelTest
  }
}`,...(O=($=u.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var k,S,E;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    text: "Titulo",
    size: "large",
    kind: "fluid",
    messege: "Warning Messege Through Input",
    options: OptionsLabelTest
  }
}`,...(E=(S=c.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};const le=["dropdown","fluid"];export{le as __namedExportsOrder,se as default,u as dropdown,c as fluid};
