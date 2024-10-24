import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as f}from"./index-CTjT7uj6.js";import{d as l}from"./styled-components.browser.esm-D3-gLipQ.js";import{t as n}from"./contextual-D4vCP4YA.js";/* empty css              */import{A as Z,p as ee}from"./IconsInputLabel-E66WMmAT.js";import{w as L}from"./Warningfilled-CR6tEm8M.js";import{s as M}from"./statusicon-BiyrYhQW.js";import{S as te,a as h}from"./index-ClYmvwGD.js";const oe={large:"16px",small:"9px",medium:"12px"},P=l.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  min-width: 250px;
  width: 100%;
  box-sizing: border-box;
  opacity: ${({disabled:e})=>e?"0.5":"1"};
  background: ${({kind:e})=>e==="fluid"?n.field01:""};
  border-radius: ${({kind:e,noRadius:o})=>e==="fluid"&&!o?"8px":""};
  border: ${({kind:e,error:o})=>e==="fluid"&&o?`1px solid ${n.supportError}`:"0"};
  gap: ${({loading:e})=>e&&"5px"};
  cursor: ${({loading:e})=>e?"wait":"pointer"};
  margin: 0;
  padding: 0px;
  outline:none;
  &:focus {
  z-index:5;
  outline: ${({kind:e})=>e==="fluid"?`2px solid ${n.focus}`:"0"}
  }
`,R=l.input`
  padding: ${({size:e="medium",kind:o})=>e&&o==="default"?oe[e]:o==="fluid"?"0em 0 13px 15px":""};
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  font-family: IBM Plex Sans;
  color: ${n.textPrimary};
  background-color: ${n.layer01};
  border-radius: ${({kind:e,noRadius:o})=>e==="fluid"&&!o?"5px":"0px"};
  border: ${({error:e,disabled:o,kind:i})=>e&&i==="default"?`1px solid ${n.supportError}`:o?`1px solid ${n.borderDisabled}`:"0"};
  border-bottom: ${({kind:e,borderNone:o})=>e==="fluid"&&!o?`1px solid ${n.borderStrong01}`:"auto"};
  min-height: 18px;
  outline: 0;
  width: 100%;
  font-size:14px;
  margin: 0 auto;
  white-space: normal;
  &::placeholder {
color: ${n.textPrimary};
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

`,ne=l.div`
  position: absolute;
  width: 100%;
  display: ${({show:e})=>e?"block":"none"};
  background-color: ${n.layerHover01};
  border-radius: ${({noRadius:e})=>e?"0":"8px"};
  border: 1px solid ${n.buttonTertiary};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  overflow: auto;
  z-index: 5;
  min-height:20px;
  max-height:250px

`,re=l.label`
  width: 100%;
  height:100%;
  padding:0;
  margin:0
`,ie=l.span`
  position: absolute;
  right: 10px;
  top: 15px;
`,ae=l.span`
  position: absolute;
  right: ${({kind:e})=>e==="default"?"18px":"25px"};
  top: calc(50%);
  padding: 0;
  margin: 0;
  transform:${({kind:e})=>e==="default"?" translateY(-50%)":" translateY(-100%)"}
    ${({show:e,icon:o})=>e||o?"rotate(0deg)":"rotate(180deg)"};
`,A=l.img`
  position: absolute;
  right: ${({kind:e})=>e=="fluid"?"10px":"40px"};
  transform: translateY(-50%);
  top: ${({kind:e})=>e==="default"?"50%":e==="fluid"?"auto":""};
  bottom: ${({kind:e})=>e=="fluid"?"-2px":"auto"};
`,le=l.div`
  cursor: pointer;
  border: 1px solid transparent;
  position: relative;
  border-bottom: ${({borderlastnone:e})=>e?"0":`1px solid ${n.borderSubtle01}`};
  text-align: left;
  padding: 0.9em;
  width: 100%;
  box-sizing: border-box;
  color: ${n.textSecondary};
  text-overflow: ellipsis;
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.16px;
  word-wrap: break-word;
  &:hover {
    background-color: ${n.layerSelectedHover01};
    border-radius: 7px;
  }
`,D=l.p`
  position: ${({size:e,kind:o,loading:i})=>e&&o==="fluid"?"auto":i?"relative":"auto"};
  display: flex;
  width: 100%;
  word-warp: broke-word;
  gap: 4px;
  top: 8px;
  left: 13px;
  z-index: 3;
  color: ${n.textSecondary};
  text-overflow: ellipsis;
  font-family: IBM Plex Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.16px;
  margin: ${({kind:e,loading:o})=>e==="fluid"?"2px 1px":o?"0":"0 0 0 .2em"};
  box-sizing: border-box;
`,W=l.p`
  color: ${({error:e,warning:o})=>e?n.textError:o?n.textPrimary:n.textSecondary};
  text-overflow: ellipsis;
  display: flex;
  padding: ${({kind:e,error:o,warning:i,loading:p})=>e==="fluid"&&(o||i)?".5em 0 .5em 7px":p?"0":"0 0 0 .3em"};
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
`,G=e=>{const{error:o,warning:i,label:p,kind:s,message:u,options:y,onChange:c,placeholder:v,value:T,name:$,id:I,loading:V,icon:J,borderNone:K}=e,[d,O]=f.useState(String(v)||String(T)),[j,m]=f.useState(e.show),g=f.useRef(null),Q=r=>{const{value:a}=r;O(r.label);const S={value:a,name:$};m(!1),c&&c({target:S})},k=r=>{r.preventDefault(),m(a=>!a)},C=r=>{g.current&&!g.current.contains(r.target)&&m(!1)},E=r=>{const a=r.target.value;console.log(a),d&&(d==null?void 0:d.length)>0&&m(!0),O(a),c&&c(r)},x={position:"absolute",top:"0",right:"0",bottom:"0",padding:"0",left:"0"},z=r=>r.normalize("NFD").replace(/[\u0300-\u036f]/g,""),q=y.filter(r=>{const a=z(r.label).toLowerCase(),S=z(d||"").toLowerCase();return a.includes(S)}),X=q.length>0?q:y;return f.useEffect(()=>(document.addEventListener("mousedown",C),()=>{document.removeEventListener("mousedown",C)}),[]),t.jsx(t.Fragment,{children:V?t.jsx(te,{baseColor:n.skeletonElement,highlightColor:n.skeletonBackground,children:t.jsxs(P,{...e,ref:g,children:[s==="default"&&p&&t.jsx("div",{style:{margin:"0",padding:"0"},children:t.jsxs(D,{...e,style:{top:"0",left:"0",wordWrap:"break-word"},children:[p,t.jsx(h,{count:1,style:x})]})}),t.jsxs("div",{style:{position:"relative",width:"100%",margin:"0",padding:"0"},children:[t.jsx(R,{onClick:k,placeholder:v,id:I,onChange:E,value:d||T,name:$,...e}),t.jsx(h,{count:1,style:x})]}),s==="default"&&u&&t.jsx("div",{style:{position:"relative",margin:"0",padding:"0",display:"flex;"},children:t.jsxs(W,{...e,children:[t.jsx("p",{style:{margin:"0",padding:"0",wordWrap:"break-word",width:"100%",boxSizing:"border-box"},children:u}),t.jsx(h,{count:1,style:x})]})}),s==="fluid"&&t.jsx(h,{count:1,style:x})]})}):t.jsxs(P,{...e,ref:g,tabIndex:1,children:[t.jsx(D,{...e,children:t.jsx("p",{style:{margin:s==="default"?"0":"5px 15px",padding:"0",wordWrap:"break-word",width:"100%",gap:"4px",display:"flex",flexWrap:"wrap",overflow:"hidden",fontSize:"12px"},children:p})}),t.jsxs("div",{style:{width:"100%",position:"relative",margin:"0",padding:"0"},children:[t.jsx(R,{onClick:k,placeholder:v,id:I,onChange:E,value:d||T,name:$,borderNone:K,...e}),s==="default"&&(o||i)&&t.jsx(t.Fragment,{children:(o||i)&&t.jsx(A,{src:i?M:L,...e})}),t.jsx(ae,{show:j,onClick:k,...e,children:t.jsx("span",{style:{display:"flex"},children:J||Z})})]}),s==="fluid"&&(o||i)&&t.jsx(t.Fragment,{children:(o||i)&&t.jsx(A,{src:i?M:L,...e})}),t.jsx("div",{style:{position:"relative",width:"100%",margin:"2px auto 0 0",padding:"0",height:"auto"},children:t.jsx(ne,{show:j,...e,children:X.map((r,a)=>t.jsx(re,{show:j,...e,children:t.jsxs(le,{onClick:()=>Q(r),borderlastnone:a===y.length-1,...e,children:[d===r.label&&t.jsx(ie,{...e,children:ee}),r.label]})},a))})}),t.jsx(W,{...e,children:t.jsx("p",{style:{margin:"0",padding:"0",wordWrap:"break-word",width:"100%",boxSizing:"border-box"},children:(s==="fluid"&&(o||i)||s==="default")&&u})})]})})};G.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  value: string;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"OptionType[]"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},show:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},size:{required:!0,tsType:{name:"union",raw:'"large" | "small" | "medium"',elements:[{name:"literal",value:'"large"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:""},kind:{required:!0,tsType:{name:"union",raw:'"default" | "fluid"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"fluid"'}]},description:""},borderlastnone:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},warning:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},message:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},noRadius:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},borderNone:{required:!1,tsType:{name:"boolean"},description:""}}};const he={title:"Example/Dropdown",component:G,parameters:{layout:"centered"},tags:["autodocs"]},U=[{label:"FIC FIDC EMPÍRICA MULTIESTRATÉGIA - 52.115.148/0001-75",value:"OPÇÃO-1"},{label:"option 2",value:"OPÇÃO-2"},{label:"EMPÍRICA NV FIP MULTIESTRATÉGIA - 27.984.553/0001-82",value:"OPÇÃO-3"},{label:"option 4",value:"OPÇÃO-4"}],b={args:{label:"Titulo",size:"medium",kind:"default",message:"Warning Messege Through Input",options:U,placeholder:"Escolha uma opção",icon:"dasdas"}},w={args:{label:"Titulo",size:"small",kind:"fluid",message:"Warning Messege Through Input",placeholder:"Escolha uma opção",options:U,noRadius:!0}};var F,B,H;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: "Titulo",
    size: "medium",
    kind: "default",
    message: "Warning Messege Through Input",
    options: OptionsLabelTest,
    placeholder: "Escolha uma opção",
    icon: "dasdas"
  }
}`,...(H=(B=b.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var N,_,Y;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: "Titulo",
    size: "small",
    kind: "fluid",
    message: "Warning Messege Through Input",
    placeholder: "Escolha uma opção",
    options: OptionsLabelTest,
    noRadius: true
  }
}`,...(Y=(_=w.parameters)==null?void 0:_.docs)==null?void 0:Y.source}}};const be=["dropdown","fluid"];export{be as __namedExportsOrder,he as default,b as dropdown,w as fluid};
