import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as f}from"./index-CTjT7uj6.js";import{d as i}from"./styled-components.browser.esm-D3-gLipQ.js";import{t as o}from"./contextual-D4vCP4YA.js";/* empty css              */import{p as G,A as J,q as K}from"./IconsInputLabel-DNdvQB1m.js";import{w as q}from"./Warningfilled-CR6tEm8M.js";import{s as z}from"./statusicon-BiyrYhQW.js";import{S as Q,a as h}from"./index-ClYmvwGD.js";const U={large:"16px",small:"9px",medium:"12px"},C=i.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  min-width: 300px;
  width: 100%;
  box-sizing: border-box;
  opacity: ${({disabled:e})=>e?"0.5":"1"};
  background: ${({kind:e})=>e==="fluid"?o.field01:""};
  border-radius: ${({kind:e})=>e==="fluid"?"8px":""};
  border: ${({kind:e,error:r})=>e==="fluid"&&r?`2px solid ${o.supportError}`:"auto"};
  gap: ${({loading:e})=>e&&"5px"};
  cursor: ${({loading:e})=>e?"wait":"pointer"};
  margin: 0;
  padding: 0;
`,I=i.input`
  padding: ${({size:e="medium",kind:r})=>e&&r==="default"?U[e]:r==="fluid"?"1em 0 1em 1em":""};
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  font-family: IBM Plex Sans;
  color: ${o.textPrimary};
  background-color: ${o.layer01};
  border-radius: ${({kind:e})=>e==="fluid"?"5px":"8px"};
  border: ${({error:e,disabled:r,kind:a})=>e&&a==="default"?`2px solid ${o.supportError}`:r?`2px solid ${o.borderDisabled}`:a==="fluid"?"2px solid transparent":`2px solid ${o.layerAccentActive02}`};
  border-bottom: ${({kind:e})=>e==="fluid"?`2px solid ${o.borderSubtle01}`:"auto"};
  min-height: 18px;
  outline: 0;
  width: 100%;
  margin: 0 auto;

  &::placeholder {
    color: ${o.textPrimary};
  }

  &:focus {
    border: ${({kind:e})=>e==="default"?`2px solid ${o.focus}`:`2px solid ${o.focus}`};
  }
`,V=i.div`
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
  z-index: 3;
`,X=i.label`
  width: 100%;
`,Z=i.span`
  position: absolute;
  right: 10px;
  top: 15px;
`,ee=i.span`
  position: absolute;
  right: 18px;
  top: calc(50%);
  padding: 0;
  margin: 0;
  transform: translateY(-50%)
    ${({show:e})=>e?"rotate(0deg)":"rotate(180deg)"};
`,L=i.img`
  position: absolute;
  right: ${({kind:e})=>e=="fluid"?"10px":"40px"};
  transform: translateY(-50%);
  top: ${({kind:e})=>e==="default"?"50%":e==="fluid"?"auto":""};
  bottom: ${({kind:e})=>e=="fluid"?"-2px":"auto"};
`,te=i.div`
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
`,M=i.p`
  position: ${({size:e,kind:r,loading:a})=>e&&r==="fluid"?"auto":a?"relative":"auto"};
  display: flex;
  width: 100%;
  word-warp: broke-word;
  gap: 4px;
  top: 8px;
  left: 13px;
  z-index: 3;
  color: ${o.textSecondary};
  text-overflow: ellipsis;
  font-family: IBM Plex Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.16px;
  margin: ${({kind:e,loading:r})=>e==="fluid"?"10px 0 7px 7px":r?"0":"0 0 0 .2em"};
  box-sizing: border-box;
`,P=i.p`
  color: ${({error:e,warning:r})=>e?o.textError:r?o.textPrimary:o.textSecondary};
  text-overflow: ellipsis;
  display: flex;
  padding: ${({kind:e,error:r,warning:a,loading:p})=>e==="fluid"&&(r||a)?".5em 0 .5em 7px":p?"0":"0 0 0 .3em"};
  font-family: IBM Plex Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.16px;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  word-warp: broke-word;
`,F=e=>{const[r,a]=f.useState(null),[p,w]=f.useState(e.show),c=f.useRef(null),{error:u,warning:l,text:v,kind:s,messege:m,options:T,onChange:x,placeholder:k,value:S,name:j,id:O,loading:N}=e,Y=n=>{const{value:d}=n;a(n.label),w(!1),x&&x({target:{value:d,name:j}})},$=n=>{n.preventDefault(),w(d=>!d)},E=n=>{c.current&&!c.current.contains(n.target)&&w(!1)};f.useEffect(()=>(document.addEventListener("mousedown",E),()=>{document.removeEventListener("mousedown",E)}),[]);const g={position:"absolute",top:"0",right:"0",bottom:"0",padding:"0",left:"0"};return t.jsx(t.Fragment,{children:N?t.jsx(t.Fragment,{children:t.jsx(Q,{baseColor:o.skeletonElement,highlightColor:o.skeletonBackground,children:t.jsxs(C,{...e,ref:c,children:[s==="default"&&v&&t.jsx("div",{style:{margin:"0",padding:"0"},children:t.jsxs(M,{...e,style:{top:"0",left:"0",wordWrap:"break-word"},children:[v,t.jsx(h,{count:1,style:g})]})}),t.jsxs("div",{style:{position:"relative",width:"100%",margin:"0",padding:"0"},children:[t.jsx(I,{onClick:$,placeholder:k,id:O,onChange:x,value:r||S,name:j,...e}),t.jsx(h,{count:1,style:g})]}),s==="default"&&m&&t.jsx("div",{style:{position:"relative",margin:"0",padding:"0",display:"flex;"},children:t.jsxs(P,{...e,children:[t.jsx("p",{style:{margin:"0",padding:"0",wordWrap:"break-word",width:"100%",boxSizing:"border-box"},children:m}),t.jsx(h,{count:1,style:g})]})}),s==="fluid"&&t.jsx(h,{count:1,style:g})]})})}):t.jsxs(C,{...e,ref:c,children:[t.jsx(M,{...e,children:t.jsxs("p",{style:{margin:"0",padding:"0",wordWrap:"break-word",width:"100%",gap:"4px",display:"flex",flexWrap:"wrap",overflow:"hidden"},children:[s==="fluid"&&G," ",v]})}),t.jsxs("div",{style:{width:"100%",position:"relative",margin:"0",padding:"0"},children:[t.jsx(I,{onClick:$,placeholder:k,id:O,onChange:x,value:r||S,name:j,...e}),s==="default"&&(u||l)&&t.jsx(t.Fragment,{children:(u||l)&&t.jsx(L,{src:l?z:q,...e})}),t.jsx(ee,{show:p,onClick:$,...e,children:t.jsx("span",{style:{display:"flex"},children:J})})]}),s==="fluid"&&(u||l)&&t.jsx(t.Fragment,{children:(u||l)&&t.jsx(L,{src:l?z:q,...e})}),t.jsx("div",{style:{position:"relative",width:"100%",margin:"2px auto 0 0"},children:t.jsx(V,{show:p,...e,children:T.map((n,d)=>t.jsx(X,{show:p,...e,children:t.jsxs(te,{onClick:()=>Y(n),BorderLastNone:d===T.length-1,...e,children:[r===n.label&&t.jsx(Z,{...e,children:K}),n.label]})},d))})}),t.jsx(P,{...e,children:t.jsx("p",{style:{margin:"0",padding:"0",wordWrap:"break-word",width:"100%",boxSizing:"border-box"},children:(s==="fluid"&&(u||l)||s==="default")&&m})})]})})};F.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  value: string;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"OptionType[]"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},show:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLSelectElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLSelectElement>",elements:[{name:"HTMLSelectElement"}]},name:"event"}],return:{name:"void"}}},description:""},size:{required:!0,tsType:{name:"union",raw:'"large" | "small" | "medium"',elements:[{name:"literal",value:'"large"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:""},kind:{required:!0,tsType:{name:"union",raw:'"default" | "fluid"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"fluid"'}]},description:""},BorderLastNone:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},warning:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},messege:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""}}};const ce={title:"Example/Dropdown",component:F,parameters:{layout:"centered"},tags:["autodocs"]},_=[{label:"option 1",value:"OPÇÃO-1"},{label:"option 2",value:"OPÇÃO-2"},{label:"option 3",value:"OPÇÃO-3"},{label:"option 4",value:"OPÇÃO-4"}],b={args:{text:"Titulo",size:"medium",kind:"default",messege:"Warning Messege Through Input",options:_,placeholder:"Escolha uma opção"}},y={args:{text:"Titulo",size:"small",kind:"fluid",messege:"Warning Messege Through Input",placeholder:"Escolha uma opção",options:_}};var W,A,B;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    text: "Titulo",
    size: "medium",
    kind: "default",
    messege: "Warning Messege Through Input",
    options: OptionsLabelTest,
    placeholder: "Escolha uma opção"
  }
}`,...(B=(A=b.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var D,H,R;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    text: "Titulo",
    size: "small",
    kind: "fluid",
    messege: "Warning Messege Through Input",
    placeholder: "Escolha uma opção",
    options: OptionsLabelTest
  }
}`,...(R=(H=y.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};const me=["dropdown","fluid"];export{me as __namedExportsOrder,ce as default,b as dropdown,y as fluid};
