import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as c}from"./index-CTjT7uj6.js";import{d as r}from"./styled-components.browser.esm-D3-gLipQ.js";import{t as o}from"./contextual-D4vCP4YA.js";/* empty css              */import{o as J,A as K,p as Q}from"./IconsInputLabel-BN6SsJn_.js";import{w as q}from"./Warningfilled-CR6tEm8M.js";import{s as C}from"./statusicon-BiyrYhQW.js";import{S as U,a as $}from"./index-ClYmvwGD.js";const V={large:"16px",small:"9px",medium:"12px"},I=r.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  min-width: 300px;
  box-sizing: border-box;
  opacity: ${({disabled:e})=>e?"0.5":"1"};
  background: ${({kind:e})=>e==="fluid"?o.field01:""};
  border-radius: ${({kind:e})=>e==="fluid"?"8px":""};
  border: ${({kind:e,error:n})=>e==="fluid"&&n?`2px solid ${o.supportError}`:"auto"};
  gap: ${({loading:e})=>e&&"5px"};
  cursor: ${({loading:e})=>e?"wait":"pointer"};
`,L=r.input`
  padding: ${({size:e,kind:n})=>e&&n==="default"?V[e]:n==="fluid"?"2.7em 0 1em 1em":""};
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  font-family: IBM Plex Sans;
  color: ${o.textPrimary};
  background-color: ${o.layer01};
  border-radius: ${({kind:e})=>e==="fluid"?"5px":"8px"};
  border: ${({error:e,disabled:n,kind:s})=>e&&s==="default"?`2px solid ${o.supportError}`:n?`2px solid ${o.borderDisabled}`:s==="fluid"?"2px solid transparent":`2px solid ${o.layerAccentActive02}`};
  border-bottom: ${({kind:e})=>e==="fluid"?`1px solid ${o.borderSubtle01}`:"auto"};
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
`,X=r.div`
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
`,Z=r.label`
  width: 100%;
`,ee=r.span`
  position: absolute;
  right: 10px;
  top: 15px;
`,te=r.span`
  position: absolute;
  right: 18px;
  top: calc(50%);
  padding: 0;
  margin: 0;
  transform: translateY(-50%)
    ${({show:e})=>e?"rotate(0deg)":"rotate(180deg)"};
`,M=r.img`
  position: absolute;
  right: ${({kind:e})=>e=="fluid"?"10px":"40px"};
  transform: translateY(-50%);
  top: ${({kind:e})=>e==="default"?"50%":e==="fluid"?"auto":""};
  bottom: ${({kind:e})=>e=="fluid"?"-2px":"auto"};
`,oe=r.div`
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
`,P=r.p`
  position: ${({size:e,kind:n,loading:s})=>e&&n==="fluid"?"absolute":s?"relative":"auto"};
  display: flex;
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
  margin: 0 0 3px 0;
  box-sizing: border-box;
  max-width: 100%;
`,A=r.p`
  color: ${({error:e,warning:n})=>e?o.textError:n?o.textPrimary:o.textSecondary};
  text-overflow: ellipsis;
  display: flex;
  padding: 0;
  padding: ${({kind:e,error:n,warning:s})=>e==="fluid"&&(n||s)?".5em 0 .5em 1em":"0"};
  font-family: IBM Plex Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.16px;
  margin: 0;
  box-sizing: border-box;
`,_=e=>{const[n,s]=c.useState(null),[g,f]=c.useState(e.show),p=c.useRef(null),{error:h,warning:d,text:T,kind:a,messege:b,options:k,onChange:u,placeholder:S,value:O,name:y,id:z,size:w,loading:Y}=e,G=i=>{const{value:l}=i;s(i.label),f(!1),u&&u({target:{value:l,name:y}})},v=i=>{i.preventDefault(),f(l=>!l)},E=i=>{p.current&&!p.current.contains(i.target)&&f(!1)};c.useEffect(()=>(document.addEventListener("mousedown",E),()=>{document.removeEventListener("mousedown",E)}),[]);const j={position:"absolute",top:"0",right:"0",bottom:"0",padding:"0",left:"0"};return t.jsx(t.Fragment,{children:Y?t.jsx(t.Fragment,{children:t.jsx(U,{baseColor:o.skeletonElement,highlightColor:o.skeletonBackground,children:t.jsxs(I,{...e,ref:p,children:[a==="default"&&t.jsxs(P,{...e,style:{top:"0",left:"0"},children:[T,t.jsx($,{count:1,style:j})]}),t.jsxs("div",{style:{position:"relative",width:"100%",margin:"0",padding:"0"},children:[t.jsx(L,{kind:a??"default",onClick:v,placeholder:S,id:z,size:w||"medium",onChange:u,value:n||O,name:y,...e}),t.jsx($,{count:1,style:j})]}),a==="default"&&t.jsx("div",{style:{position:"relative",margin:"0",padding:"0",display:"flex;"},children:t.jsxs(A,{...e,children:[t.jsx("p",{style:{margin:"0",padding:"0",wordWrap:"break-word",width:"100%",boxSizing:"border-box"},children:b}),t.jsx($,{count:1,style:j})]})})]})})}):t.jsxs(I,{...e,ref:p,children:[t.jsx(P,{...e,children:t.jsxs("p",{style:{margin:"0",padding:"0",wordWrap:"break-word",width:"100%",boxSizing:"border-box",display:"flex",gap:"4px"},children:[T,a==="fluid"&&J]})}),t.jsxs("div",{style:{width:"100%",position:"relative",margin:"0",padding:"0"},children:[t.jsx(L,{kind:a??"default",onClick:v,placeholder:S,id:z,size:w||"medium",onChange:u,value:n||O,name:y,...e}),a==="default"&&t.jsx(t.Fragment,{children:(h||d)&&t.jsx(M,{src:d?C:q,...e})}),t.jsx(te,{size:w||"medium",show:g,onClick:v,...e,children:t.jsx("span",{style:{display:"flex"},children:K})})]}),a==="fluid"&&t.jsx(t.Fragment,{children:(h||d)&&t.jsx(M,{src:d?C:q,...e})}),t.jsx("div",{style:{position:"relative",width:"100%",margin:"2px auto 0 0"},children:t.jsx(X,{show:g,...e,children:k.map((i,l)=>t.jsx(Z,{show:g,...e,children:t.jsxs(oe,{onClick:()=>G(i),BorderLastNone:l===k.length-1,...e,children:[n===i.label&&t.jsx(ee,{...e,children:Q}),i.label]})},l))})}),t.jsx(A,{...e,children:t.jsx("p",{style:{margin:"0",padding:"0",wordWrap:"break-word",width:"100%",boxSizing:"border-box"},children:(a==="fluid"&&(h||d)||a==="default")&&b})})]})})};_.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"OptionType[]"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},show:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLSelectElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLSelectElement>",elements:[{name:"HTMLSelectElement"}]},name:"event"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:'"large" | "small" | "medium"',elements:[{name:"literal",value:'"large"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:""},kind:{required:!1,tsType:{name:"union",raw:'"default" | "fluid"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"fluid"'}]},description:""},BorderLastNone:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},warning:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},messege:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""}}};const me={title:"Example/Dropdown",component:_,parameters:{layout:"centered"},tags:["autodocs"]},N=[{label:"option 1",value:"OPÇÃO-1"},{label:"option 2",value:"OPÇÃO-2"},{label:"option 3",value:"OPÇÃO-3"},{label:"option 4",value:"OPÇÃO-4"}],m={args:{text:"Titulo",size:"medium",kind:"default",messege:"Warning Messege Through Input",options:N,placeholder:"Escolha uma opção"}},x={args:{text:"Titulo",size:"small",kind:"fluid",messege:"Warning Messege Through Input",placeholder:"Escolha uma opção",options:N}};var B,D,W;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    text: "Titulo",
    size: "medium",
    kind: "default",
    messege: "Warning Messege Through Input",
    options: OptionsLabelTest,
    placeholder: "Escolha uma opção"
  }
}`,...(W=(D=m.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var H,R,F;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    text: "Titulo",
    size: "small",
    kind: "fluid",
    messege: "Warning Messege Through Input",
    placeholder: "Escolha uma opção",
    options: OptionsLabelTest
  }
}`,...(F=(R=x.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};const xe=["dropdown","fluid"];export{xe as __namedExportsOrder,me as default,m as dropdown,x as fluid};
