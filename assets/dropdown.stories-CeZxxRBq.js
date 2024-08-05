import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{r as p}from"./index-CTjT7uj6.js";import{d as a,t as o}from"./contextual-Cr4fQ3MC.js";/* empty css              */import{o as W,A as D,p as B}from"./IconsInputLabel-DiahCgGh.js";import{w as H}from"./Warningfilled-CR6tEm8M.js";import{s as R}from"./statusicon-BiyrYhQW.js";const _={large:"16px",small:"9px",medium:"12px"},N={large:"35px",small:"28px",medium:"29px"},U={large:"30px",small:"23px",medium:"26px"},F={large:"15px",small:"6px",medium:"10px"},G={large:"20px",small:"10px",medium:"15px"},J={large:"35px",small:"27px",medium:"29px"},K={large:"19px",small:"10px",medium:"15px"},Q=a.div`
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
`,V=a.input`
  padding: ${({size:e,kind:t})=>e&&t==="default"?_[e]:t==="fluid"?"2.7em 0 1em 1em":""};
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  font-family: IBM Plex Sans;
  color: ${o.textPrimary};
  background-color: ${o.layer01};
  border-radius: ${({kind:e})=>e==="fluid"?"5px":"8px"};
  border: ${({error:e,disabled:t,kind:n})=>e&&n==="default"?`2px solid ${o.supportError}`:t?`2px solid ${o.borderDisabled}`:n==="fluid"?"2px solid transparent":`2px solid ${o.layerAccentActive02}`};
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
`,X=a.div`
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
`,Y=a.label`
  width: 100%;
`,Z=a.span`
  position: absolute;
  right: 10px;
  top: 15px;
`,ee=e=>{const{size:t,show:n,text:s}=e;if(t&&!s&&!n)return F[t||"medium"];if(t&&!s&&n)return G[t||"medium"]},te=a.span`
  position: absolute;
  right: 18px;
  top: ${({size:e,show:t,text:n})=>e&&t&&n?N[e||"medium"]:n?U[e||"medium"]:ee};
  padding: 0;
  transform: ${({show:e})=>e?"rotate(0deg)":"rotate(180deg)"};
`,oe=a.img`
  position: absolute;
  right: ${({kind:e})=>e=="fluid"?"16px":"40px"};
  top: ${({text:e,size:t,kind:n})=>e&&t&&n==="default"?J[t||"medium"]:n==="fluid"?"auto":K[t||"medium"]};
  bottom: ${({kind:e})=>e=="fluid"?"5px":"auto"};
`,ne=a.div`
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
`,re=a.p`
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
`,ie=a.p`
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
`,j=e=>{const[t,n]=p.useState(null),[s,m]=p.useState(e.show),x=p.useRef(null),{error:h,warning:g,text:L,kind:d,messege:b,options:w,onChange:f,placeholder:z,value:C,name:y,id:A,size:v}=e,M=i=>{const{value:l}=i;n(i.label),m(!1),f&&f({target:{value:l,name:y}})},T=i=>{i.preventDefault(),m(l=>!l)},$=i=>{x.current&&!x.current.contains(i.target)&&m(!1)};return p.useEffect(()=>(document.addEventListener("mousedown",$),()=>{document.removeEventListener("mousedown",$)}),[]),r.jsxs(Q,{...e,ref:x,children:[r.jsxs(re,{...e,children:[L,d==="fluid"&&W]}),r.jsx(V,{kind:d??"default",onClick:T,placeholder:z,id:A,size:v||"medium",onChange:f,value:t||C,name:y,...e}),(h||g)&&r.jsx(oe,{src:g?R:H,...e}),r.jsx(te,{size:v||"medium",show:s,onClick:T,...e,children:D}),r.jsx("div",{style:{position:"relative",width:"100%",margin:"2px auto 0 0"},children:r.jsx(X,{show:s,...e,children:w.map((i,l)=>r.jsx(Y,{show:s,...e,children:r.jsxs(ne,{onClick:()=>M(i),BorderLastNone:l===w.length-1,...e,children:[t===i.label&&r.jsx(Z,{...e,children:B}),i.label]})},l))})}),r.jsx(ie,{...e,children:(d==="fluid"&&(h||g)||d==="default")&&b})]})};j.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"OptionType[]"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},show:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLSelectElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLSelectElement>",elements:[{name:"HTMLSelectElement"}]},name:"event"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:'"large" | "small" | "medium"',elements:[{name:"literal",value:'"large"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:""},kind:{required:!1,tsType:{name:"union",raw:'"default" | "fluid"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"fluid"'}]},description:""},BorderLastNone:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},warning:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},messege:{required:!1,tsType:{name:"string"},description:""}}};const xe={title:"Example/Dropdown",component:j,parameters:{layout:"centered"},tags:["autodocs"]},q=[{label:"option 1",value:"OPÇÃO-1"},{label:"option 2",value:"OPÇÃO-2"},{label:"option 3",value:"OPÇÃO-3"},{label:"option 4",value:"OPÇÃO-4"}],u={args:{text:"Titulo",size:"large",kind:"default",messege:"Warning Messege Through Input",options:q,placeholder:"Escolha uma opção"}},c={args:{text:"Titulo",size:"large",kind:"fluid",messege:"Warning Messege Through Input",placeholder:"Escolha uma opção",options:q}};var O,E,S;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    text: "Titulo",
    size: "large",
    kind: "default",
    messege: "Warning Messege Through Input",
    options: OptionsLabelTest,
    placeholder: "Escolha uma opção"
  }
}`,...(S=(E=u.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var I,P,k;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    text: "Titulo",
    size: "large",
    kind: "fluid",
    messege: "Warning Messege Through Input",
    placeholder: "Escolha uma opção",
    options: OptionsLabelTest
  }
}`,...(k=(P=c.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};const ge=["dropdown","fluid"];export{ge as __namedExportsOrder,xe as default,u as dropdown,c as fluid};
