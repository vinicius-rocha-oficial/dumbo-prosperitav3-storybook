import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as u}from"./index-CTjT7uj6.js";import{d as l}from"./styled-components.browser.esm-D3-gLipQ.js";import{t as o}from"./contextual-D4vCP4YA.js";/* empty css              */import{A as ee,p as te}from"./IconsInputLabel-E66WMmAT.js";import{w as L}from"./Warningfilled-CR6tEm8M.js";import{s as M}from"./statusicon-BiyrYhQW.js";import{S as ne,a as y}from"./index-ClYmvwGD.js";const oe={large:"16px",small:"9px",medium:"12px"},P=l.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  min-width: 250px;
  width: 100%;
  box-sizing: border-box;
  opacity: ${({disabled:e})=>e?"0.5":"1"};
  background: ${({kind:e})=>e==="fluid"?o.field01:""};
  border-radius: ${({kind:e,noRadius:n})=>e==="fluid"&&!n?"8px":""};
  border: ${({kind:e,error:n})=>e==="fluid"&&n?`1px solid ${o.supportError}`:"0"};
  gap: ${({loading:e})=>e&&"5px"};
  cursor: ${({loading:e})=>e?"wait":"pointer"};
  margin: 0;
  padding: 0px;
  outline:none;
  &:focus {
  z-index:5;
  outline: ${({kind:e})=>e==="fluid"?`2px solid ${o.focus}`:"0"}
  }
`,R=l.input`
  padding: ${({size:e="medium",kind:n})=>e&&n==="default"?oe[e]:n==="fluid"?"0em 0 13px 15px":""};
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  font-family: IBM Plex Sans;
  color: ${o.textPrimary};
  background-color: ${o.layer01};
  border-radius: ${({kind:e,noRadius:n})=>e==="fluid"&&!n?"5px":"0px"};
  border: ${({error:e,disabled:n,kind:i})=>e&&i==="default"?`1px solid ${o.supportError}`:n?`1px solid ${o.borderDisabled}`:"0"};
  border-bottom: ${({kind:e,borderNone:n})=>e==="fluid"&&!n?`1px solid ${o.borderStrong01}`:"auto"};
  min-height: 18px;
  outline: 0;
  width: 100%;
  font-size:14px;
  margin: 0 auto;
  white-space: normal;
  &::placeholder {
color: ${o.textPrimary};
overflow: hidden;
text-overflow: ellipsis;
white-space: normal;
font-family: "IBM Plex Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 18px;
letter-spacing: 0.16px;

  }

`,re=l.div`
  position: absolute;
  width: 100%;
  display: ${({show:e})=>e?"block":"none"};
  background-color: ${o.layerHover01};
  border-radius: ${({noRadius:e})=>e?"0":"8px"};
  border: 1px solid ${o.buttonTertiary};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  overflow: auto;
  z-index: 5;
  min-height:20px;
  max-height:250px

`,ie=l.label`
  width: 100%;
  height:100%;
  padding:0;
  margin:0
`,ae=l.span`
  position: absolute;
  right: 10px;
  top: 15px;
`,le=l.span`
  position: absolute;
  right: ${({kind:e})=>e==="default"?"18px":"25px"};
  top: calc(50%);
  padding: 0;
  margin: 0;
  transform:${({kind:e})=>e==="default"?" translateY(-50%)":" translateY(-100%)"};
    ${({show:e,icon:n})=>e||n?"rotate(180deg)":"rotate(0deg)"};
`,A=l.img`
  position: absolute;
  right: ${({kind:e})=>e=="fluid"?"10px":"40px"};
  transform: translateY(-50%);
  top: ${({kind:e})=>e==="default"?"50%":e==="fluid"?"auto":""};
  bottom: ${({kind:e})=>e=="fluid"?"-2px":"auto"};
`,se=l.div`
  cursor: pointer;
  border: 1px solid transparent;
  position: relative;
  border-bottom: ${({borderlastnone:e})=>e?"0":`1px solid ${o.borderSubtle01}`};
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
  word-wrap: break-word;
  &:hover {
    background-color: ${o.layerSelectedHover01};
    border-radius: 7px;
  }
`,D=l.p`
  position: ${({size:e,kind:n,loading:i})=>e&&n==="fluid"?"auto":i?"relative":"auto"};
  display: flex;
  width: 100%;
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
  margin: ${({kind:e,loading:n})=>e==="fluid"?"2px 1px":n?"0":"0 0 0 .2em"};
  box-sizing: border-box;
`,F=l.p`
  color: ${({error:e,warning:n})=>e?o.textError:n?o.textPrimary:o.textSecondary};
  text-overflow: ellipsis;
  display: flex;
  padding: ${({kind:e,error:n,warning:i,loading:p})=>e==="fluid"&&(n||i)?".5em 0 .5em 7px":p?"0":"0 0 0 .3em"};
  font-family: IBM Plex Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.16px;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
`,G=e=>{const{error:n,warning:i,label:p,kind:s,message:c,options:T,onChange:m,placeholder:g,value:x,name:$,id:E,loading:V,icon:J,borderNone:K,clearFiles:O}=e,[d,j]=u.useState(String(g)||String(x)),[S,f]=u.useState(e.show),h=u.useRef(null),Q=r=>{const{value:a}=r;j(r.label);const I={value:a,name:$};f(!1),m&&m({target:I})},k=r=>{r.preventDefault(),f(a=>!a)},C=r=>{h.current&&!h.current.contains(r.target)&&f(!1)},z=r=>{const a=r.target.value;console.log(a),d&&(d==null?void 0:d.length)>0&&f(!0),j(a),m&&m(r)},b={position:"absolute",top:"0",right:"0",bottom:"0",padding:"0",left:"0"},q=r=>r.normalize("NFD").replace(/[\u0300-\u036f]/g,""),X=T.filter(r=>{const a=q(r.label).toLowerCase(),I=q(d||"").toLowerCase();return a.includes(I)});console.log(X);const Z=T;return u.useEffect(()=>(document.addEventListener("mousedown",C),()=>{document.removeEventListener("mousedown",C)}),[]),u.useEffect(()=>{O&&j(g||"Selecione")},[O,x]),t.jsx(t.Fragment,{children:V?t.jsx(ne,{baseColor:o.skeletonElement,highlightColor:o.skeletonBackground,children:t.jsxs(P,{...e,ref:h,children:[s==="default"&&p&&t.jsx("div",{style:{margin:"0",padding:"0"},children:t.jsxs(D,{...e,style:{top:"0",left:"0",wordWrap:"break-word"},children:[p,t.jsx(y,{count:1,style:b})]})}),t.jsxs("div",{style:{position:"relative",width:"100%",margin:"0",padding:"0"},children:[t.jsx(R,{onClick:k,placeholder:g,id:E,onChange:z,value:d||x,name:$,...e}),t.jsx(y,{count:1,style:b})]}),s==="default"&&c&&t.jsx("div",{style:{position:"relative",margin:"0",padding:"0",display:"flex;"},children:t.jsxs(F,{...e,children:[t.jsx("p",{style:{margin:"0",padding:"0",wordWrap:"break-word",width:"100%",boxSizing:"border-box"},children:c}),t.jsx(y,{count:1,style:b})]})}),s==="fluid"&&t.jsx(y,{count:1,style:b})]})}):t.jsxs(P,{...e,ref:h,tabIndex:1,children:[t.jsx(D,{...e,children:t.jsx("p",{style:{margin:s==="default"?"0":"10px 15px 2px",padding:"0",wordWrap:"break-word",width:"100%",gap:"4px",display:"flex",flexWrap:"wrap",overflow:"hidden",fontSize:"12px"},children:p})}),t.jsxs("div",{style:{width:"100%",position:"relative",margin:"0",padding:"0"},children:[t.jsx(R,{onClick:k,placeholder:g,id:E,onChange:z,value:d||x,name:$,borderNone:K,...e}),s==="default"&&(n||i)&&t.jsx(t.Fragment,{children:(n||i)&&t.jsx(A,{src:i?M:L,...e})}),t.jsx(le,{show:S,onClick:k,...e,children:t.jsx("span",{style:{display:"flex"},children:J||ee})})]}),s==="fluid"&&(n||i)&&t.jsx(t.Fragment,{children:(n||i)&&t.jsx(A,{src:i?M:L,...e})}),t.jsx("div",{style:{position:"relative",width:"100%",margin:"2px auto 0 0",padding:"0",height:"auto"},children:t.jsx(re,{show:S,...e,children:Z.map((r,a)=>t.jsx(ie,{show:S,...e,children:t.jsxs(se,{onClick:()=>Q(r),borderlastnone:a===T.length-1,...e,children:[d===r.label&&t.jsx(ae,{...e,children:te}),r.label]})},a))})}),t.jsx(F,{...e,children:t.jsx("p",{style:{margin:"0",padding:"0",wordWrap:"break-word",width:"100%",boxSizing:"border-box"},children:(s==="fluid"&&(n||i)||s==="default")&&c})})]})})};G.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  value: string;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"OptionType[]"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},show:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},size:{required:!0,tsType:{name:"union",raw:'"large" | "small" | "medium"',elements:[{name:"literal",value:'"large"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:""},kind:{required:!0,tsType:{name:"union",raw:'"default" | "fluid"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"fluid"'}]},description:""},borderlastnone:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},warning:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},message:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},noRadius:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},borderNone:{required:!1,tsType:{name:"boolean"},description:""},clearFiles:{required:!1,tsType:{name:"boolean"},description:""}}};const be={title:"Example/Dropdown",component:G,parameters:{layout:"centered"},tags:["autodocs"]},U=[{label:"FIC FIDC EMPÍRICA MULTIESTRATÉGIA - 52.115.148/0001-75",value:"OPÇÃO-1"},{label:"option 2",value:"OPÇÃO-2"},{label:"EMPÍRICA NV FIP MULTIESTRATÉGIA - 27.984.553/0001-82",value:"OPÇÃO-3"},{label:"option 4",value:"OPÇÃO-4"}],w={args:{label:"Titulo",size:"medium",kind:"default",message:"Warning Messege Through Input",options:U,placeholder:"Escolha uma opção"}},v={args:{label:"Titulo",size:"small",kind:"fluid",message:"Warning Messege Through Input",placeholder:"Escolha uma opção",options:U,noRadius:!0}};var W,B,H;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: "Titulo",
    size: "medium",
    kind: "default",
    message: "Warning Messege Through Input",
    options: OptionsLabelTest,
    placeholder: "Escolha uma opção"
  }
}`,...(H=(B=w.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var N,_,Y;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: "Titulo",
    size: "small",
    kind: "fluid",
    message: "Warning Messege Through Input",
    placeholder: "Escolha uma opção",
    options: OptionsLabelTest,
    noRadius: true
  }
}`,...(Y=(_=v.parameters)==null?void 0:_.docs)==null?void 0:Y.source}}};const ye=["dropdown","fluid"];export{ye as __namedExportsOrder,be as default,w as dropdown,v as fluid};
