import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as f}from"./index-CTjT7uj6.js";import{d as s}from"./styled-components.browser.esm-D3-gLipQ.js";import{t as o}from"./contextual-D4vCP4YA.js";/* empty css              */import{A as Q,p as X}from"./IconsInputLabel-C-_tevyj.js";import{w as q}from"./Warningfilled-CR6tEm8M.js";import{s as M}from"./statusicon-BiyrYhQW.js";import{S as Z,a as h}from"./index-ClYmvwGD.js";const ee={large:"16px",small:"9px",medium:"12px"},P=s.div`
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
  border-radius: ${({kind:e,noRadius:n})=>e==="fluid"&&!n?"8px":""};
  border: ${({kind:e,error:n})=>e==="fluid"&&n?`2px solid ${o.supportError}`:".1px solid transparent"};
  gap: ${({loading:e})=>e&&"5px"};
  cursor: ${({loading:e})=>e?"wait":"pointer"};
  margin: 0;
  padding: 0px;
  outline:none;
  &:focus {
  border: ${({kind:e})=>e==="fluid"?`.1px solid ${o.focus}`:".1px solid transparent"}
`,A=s.input`
  padding: ${({size:e="medium",kind:n})=>e&&n==="default"?ee[e]:n==="fluid"?"0em 0 1em 24px":""};
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  font-family: IBM Plex Sans;
  color: ${o.textPrimary};
  background-color: ${o.layer01};
  border-radius: ${({kind:e,noRadius:n})=>e==="fluid"&&!n?"5px":"0px"};
  border: ${({error:e,disabled:n,kind:i})=>e&&i==="default"?`1px solid ${o.supportError}`:n?`1px solid ${o.borderDisabled}`:i==="fluid"?"0px solid transparent":`0px solid ${o.layerAccentActive02}`};
  border-bottom: ${({kind:e})=>e==="fluid"?`1px solid ${o.borderStrong01}`:"auto"};
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

`,te=s.div`
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

`,ne=s.label`
  width: 100%;
  height:100%;
  padding:0;
  margin:0
`,oe=s.span`
  position: absolute;
  right: 10px;
  top: 15px;
`,re=s.span`
  position: absolute;
  right: ${({kind:e})=>e==="default"?"18px":"25px"};
  top: calc(50%);
  padding: 0;
  margin: 0;
  transform:${({kind:e})=>e==="default"?" translateY(-50%)":" translateY(-100%)"}
    ${({show:e})=>e?"rotate(0deg)":"rotate(180deg)"};
`,R=s.img`
  position: absolute;
  right: ${({kind:e})=>e=="fluid"?"10px":"40px"};
  transform: translateY(-50%);
  top: ${({kind:e})=>e==="default"?"50%":e==="fluid"?"auto":""};
  bottom: ${({kind:e})=>e=="fluid"?"-2px":"auto"};
`,ie=s.div`
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
  word-wrap: break-word;
  &:hover {
    background-color: ${o.layerSelectedHover01};
    border-radius: 7px;
  }
`,D=s.p`
  position: ${({size:e,kind:n,loading:i})=>e&&n==="fluid"?"auto":i?"relative":"auto"};
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
  margin: ${({kind:e,loading:n})=>e==="fluid"?"2px 9px":n?"0":"0 0 0 .2em"};
  box-sizing: border-box;
`,W=s.p`
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
  word-warp: broke-word;
`,G=e=>{const{error:n,warning:i,text:p,kind:l,messege:u,options:y,onChange:c,placeholder:v,value:T,name:$,id:I,loading:V}=e,[d,O]=f.useState(String(v)||String(T)),[j,m]=f.useState(e.show),x=f.useRef(null),J=r=>{const{value:a}=r;O(r.label);const S={value:a,name:$};m(!1),c&&c({target:S})},k=r=>{r.preventDefault(),m(a=>!a)},C=r=>{x.current&&!x.current.contains(r.target)&&m(!1)},E=r=>{const a=r.target.value;console.log(a),d&&(d==null?void 0:d.length)>0&&m(!0),O(a),c&&c(r)},g={position:"absolute",top:"0",right:"0",bottom:"0",padding:"0",left:"0"},z=r=>r.normalize("NFD").replace(/[\u0300-\u036f]/g,""),L=y.filter(r=>{const a=z(r.label).toLowerCase(),S=z(d||"").toLowerCase();return a.includes(S)}),K=L.length>0?L:y;return f.useEffect(()=>(document.addEventListener("mousedown",C),()=>{document.removeEventListener("mousedown",C)}),[]),t.jsx(t.Fragment,{children:V?t.jsx(Z,{baseColor:o.skeletonElement,highlightColor:o.skeletonBackground,children:t.jsxs(P,{...e,ref:x,children:[l==="default"&&p&&t.jsx("div",{style:{margin:"0",padding:"0"},children:t.jsxs(D,{...e,style:{top:"0",left:"0",wordWrap:"break-word"},children:[p,t.jsx(h,{count:1,style:g})]})}),t.jsxs("div",{style:{position:"relative",width:"100%",margin:"0",padding:"0"},children:[t.jsx(A,{onClick:k,placeholder:v,id:I,onChange:E,value:d||T,name:$,...e}),t.jsx(h,{count:1,style:g})]}),l==="default"&&u&&t.jsx("div",{style:{position:"relative",margin:"0",padding:"0",display:"flex;"},children:t.jsxs(W,{...e,children:[t.jsx("p",{style:{margin:"0",padding:"0",wordWrap:"break-word",width:"100%",boxSizing:"border-box"},children:u}),t.jsx(h,{count:1,style:g})]})}),l==="fluid"&&t.jsx(h,{count:1,style:g})]})}):t.jsxs(P,{...e,ref:x,tabIndex:1,children:[t.jsx(D,{...e,children:t.jsx("p",{style:{margin:l==="default"?"0":"5px 15px",padding:"0",wordWrap:"break-word",width:"100%",gap:"4px",display:"flex",flexWrap:"wrap",overflow:"hidden"},children:p})}),t.jsxs("div",{style:{width:"100%",position:"relative",margin:"0",padding:"0"},children:[t.jsx(A,{onClick:k,placeholder:v,id:I,onChange:E,value:d||T,name:$,...e}),l==="default"&&(n||i)&&t.jsx(t.Fragment,{children:(n||i)&&t.jsx(R,{src:i?M:q,...e})}),t.jsx(re,{show:j,onClick:k,...e,children:t.jsx("span",{style:{display:"flex"},children:Q})})]}),l==="fluid"&&(n||i)&&t.jsx(t.Fragment,{children:(n||i)&&t.jsx(R,{src:i?M:q,...e})}),t.jsx("div",{style:{position:"relative",width:"100%",margin:"2px auto 0 0",padding:"0",height:"auto"},children:t.jsx(te,{show:j,...e,children:K.map((r,a)=>t.jsx(ne,{show:j,...e,children:t.jsxs(ie,{onClick:()=>J(r),BorderLastNone:a===y.length-1,...e,children:[d===r.label&&t.jsx(oe,{...e,children:X}),r.label]})},a))})}),t.jsx(W,{...e,children:t.jsx("p",{style:{margin:"0",padding:"0",wordWrap:"break-word",width:"100%",boxSizing:"border-box"},children:(l==="fluid"&&(n||i)||l==="default")&&u})})]})})};G.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  value: string;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"OptionType[]"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},show:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},size:{required:!0,tsType:{name:"union",raw:'"large" | "small" | "medium"',elements:[{name:"literal",value:'"large"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:""},kind:{required:!0,tsType:{name:"union",raw:'"default" | "fluid"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"fluid"'}]},description:""},BorderLastNone:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},warning:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},messege:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},noRadius:{required:!1,tsType:{name:"boolean"},description:""}}};const ge={title:"Example/Dropdown",component:G,parameters:{layout:"centered"},tags:["autodocs"]},U=[{label:"FIC FIDC EMPÍRICA MULTIESTRATÉGIA - 52.115.148/0001-75",value:"OPÇÃO-1"},{label:"option 2",value:"OPÇÃO-2"},{label:"EMPÍRICA NV FIP MULTIESTRATÉGIA - 27.984.553/0001-82",value:"OPÇÃO-3"},{label:"option 4",value:"OPÇÃO-4"}],b={args:{text:"Titulo",size:"medium",kind:"default",messege:"Warning Messege Through Input",options:U,placeholder:"Escolha uma opção"}},w={args:{text:"Titulo",size:"small",kind:"fluid",messege:"Warning Messege Through Input",placeholder:"Escolha uma opção",options:U,noRadius:!0}};var B,F,H;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    text: "Titulo",
    size: "medium",
    kind: "default",
    messege: "Warning Messege Through Input",
    options: OptionsLabelTest,
    placeholder: "Escolha uma opção"
  }
}`,...(H=(F=b.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var N,_,Y;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    text: "Titulo",
    size: "small",
    kind: "fluid",
    messege: "Warning Messege Through Input",
    placeholder: "Escolha uma opção",
    options: OptionsLabelTest,
    noRadius: true
  }
}`,...(Y=(_=w.parameters)==null?void 0:_.docs)==null?void 0:Y.source}}};const fe=["dropdown","fluid"];export{fe as __namedExportsOrder,ge as default,b as dropdown,w as fluid};
