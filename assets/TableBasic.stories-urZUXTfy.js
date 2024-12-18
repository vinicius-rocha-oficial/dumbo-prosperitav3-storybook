import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as d}from"./index-CTjT7uj6.js";import{d as l}from"./styled-components.browser.esm-D3-gLipQ.js";/* empty css              */import{t as r}from"./contextual-D4vCP4YA.js";import{T as k}from"./index-UMtQnabN.js";import{S as Q}from"./index-0SVaR-dI.js";import{B as C}from"./index-vCHOC0t6.js";import"./IconsInputLabel-E66WMmAT.js";import"./index-ClYmvwGD.js";/* empty css                 */const S=l.table`
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width:100%
`,I=l.tr`
  text-align: start;
  background: ${r.layerAccent01};
  color: ${r.textPrimary};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.16px;
  margin: 0; 
   white-space: nowrap; 

`,U=l.td`
  padding: ${({rowSizes:a})=>a?`${a}px 1em`:".7em 1em"};
  text-align: start;
  box-sizing: border-box;
  margin: 0;
  width: 1%; 
  white-space: nowrap;
  vertical-align: middle;
`,ee=l.tr`
  background: ${r.layer01};
  text-align: start;
  color: ${r.textSecondary};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  padding:0;
  letter-spacing: 0.16px;
  cursor: pointer;
  &:hover {
    background: ${r.layerHover01};
  }
  margin: 0;
  border-top:1px solid ${r.borderSubtle01};
`,T=l.th`
  padding: 0.9em;
  text-align: start;
  margin: 0;
  font-size:14px;


`,ne=l.p`
  font-family:IBM Plex Sans;
  font-size:20px;
  display:flex;
  padding:1em;
  margin:20px 0;
  text-align: start;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.16px;
  cursor: pointer;
`,z=l.h4`
  font-size:14px;
  display:flex;
  padding:${({columnSizes:a})=>a||"0"};
  margin:1px auto;
  text-align: start;
  font-style: normal;
  line-height: 18px;
  font-weight: bold;
  letter-spacing: 0.16px;
  cursor: pointer;
 
`,te=l.div`
  font-family: IBM Plex Sans;
  background: ${r.layer01};
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${r.borderSubtle01};
  border-right: 1px solid transparent;
  border-bottom: 1px solid transparent;
`,re=l.div`
  font-family: IBM Plex Sans;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;

`,P=l.button`
  font-family: IBM Plex Sans;
  border: none;
  outline: none;
  cursor: pointer;
  border: 1px solid ${r.borderSubtle01};
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  padding: 10px 15px;
  display: flex;
  margin: 0;
`,B=l.option`
  border: none;
  outline: none;

`,L=l.select`
  margin: 0;
  outline: none;
  background: ${r.layer01};
  border: none;
  font-family: "IBM Plex Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: ${r.textPrimary};
  height: 100%;
  width: auto;
  padding: 0 10px;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background: ${r.layerHover01};
  }
`,q=l.p`
  color: ${r.textPrimary};
  padding: 0 10px;
  margin: 0;
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.16px;
`;l.div`
  width: 100%;
  background: ${r.backgroundBrand};
  min-height: 50px;
  height: 60px;
  display: flex;
  color: ${r.textOnColor} !important;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  position: absolute;
  bottom: 0;
  z-index: 3;
  & button {
    border: 0;
    background: none;
    outline: 0;
    padding: 1em;
    font-size: 16px;
    color: ${r.textOnColor} !important;
    cursor: pointer;
    box-sizing: border-box;
    height: 100%;
    position: relative;
  }

  transition: all 0.2s ease-in-out;
  transform: translateY(30%);
  visibility: hidden;
  opacity: 0;

  &.actionAnimation {
    transform: translateY(0%);
    visibility: visible;
    opacity: 1;
    transition: all 0.2s ease-in-out;
  }

  .BorderLasIndex::before {
    content: " ";
    position: absolute;
    height: 20px;
    width: 1.1px;
    top: 50%;
    background: white;
    left: -1%;
    transform: translateY(-45%);
  }
`;const ie=e.jsx(e.Fragment,{children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsxs("g",{id:"Caret--right",children:[e.jsx("rect",{width:"16",height:"16",transform:"translate(0 0.000976562)",fill:"none"}),e.jsx("path",{id:"Vector",d:"M6 4.00098L11 8.00098L6 12.001V4.00098Z",fill:r.iconPrimary})]})})}),ae=e.jsx(e.Fragment,{children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("rect",{width:"16",height:"16",transform:"translate(0 0.000976562)",fill:"none"}),e.jsx("path",{d:"M10 12.001L5 8.00098L10 4.00098V12.001Z",fill:r.iconPrimary})]})}),le=l.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: start;
  background: ${r.layer01};
  flex-direction: column;
  min-width:${({width:a})=>a||"100%"};
  & > div:nth-child(2) {
    display: flex;
    align-self: end;
    width: 100%;
  }
`,M=({rowData:a,pageSizes:c,buttons:p,label:y,search:E,columnTitles:m,messagedatalength:f,width:R,sizeSearch:F,rowSizes:D,columnSizes:b})=>{const[o,u]=d.useState(0),[i,O]=d.useState(c[0]),[v,X]=d.useState([]),_=n=>{const t=n.target.value.toLocaleLowerCase(),g=a.filter(W=>m.some(K=>{var j;const x=(j=String(W[K]))==null?void 0:j.toLocaleLowerCase();return x==null?void 0:x.includes(t)}));X(g),u(0)},s=v.length>0?v:a,G=d.useMemo(()=>s.slice(o,o+i),[s,o,i]),w=d.useMemo(()=>Math.ceil(s.length/i),[s.length,i]),V=d.useMemo(()=>Math.floor(o/i)+1,[o,i]),H=d.useCallback(()=>{u(n=>{const t=n+i;return t>=s.length?n:t})},[i,s.length]),J=d.useCallback(()=>{u(n=>{const t=n-i;return t<0?0:t})},[i]),Y=d.useCallback(n=>{const t=Number(n.target.value);u((t-1)*i)},[i]),Z=d.useCallback(n=>{const t=Number(n.target.value);O(t),u(0)},[]);return e.jsx(e.Fragment,{children:e.jsxs(le,{width:R,pageSizes:c,rowData:a,columnTitles:m,messagedatalength:f,style:{position:"relative"},children:[y&&e.jsx(ne,{children:y}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[E&&e.jsx(Q,{kind:"default",size:F||"small",ContainedListMenu:!0,placeholder:"Digite Para Pesquisar",onChange:_}),e.jsx("div",{style:{display:"flex",alignItems:"center"},children:p==null?void 0:p.filter(n=>n.position==="left").map((n,t)=>e.jsx("div",{style:{marginLeft:"1px"},children:e.jsx(C,{onClick:n.onClick,kind:n.kind,size:n.size||"small",icon:n.icon,label:n.label,width:n.width,dimension:n.dimension,borderNone:!0})},t))}),e.jsx("div",{style:{display:"flex",alignItems:"center"},children:p==null?void 0:p.filter(n=>n.position==="right").map((n,t)=>e.jsx("div",{style:{marginRight:"1px"},children:e.jsx(C,{onClick:g=>{n.onClick&&n.onClick(),g.stopPropagation()},kind:n.kind,size:n.size||"small",icon:n.icon,label:n.label,width:n.width,dimension:n.dimension,borderNone:!0})},t))})]}),a&&a.length>0?e.jsxs(e.Fragment,{children:[e.jsxs(S,{children:[e.jsx(I,{children:m.map((n,t)=>e.jsx(T,{children:e.jsx(z,{pageSizes:c,rowData:a,columnTitles:m,columnSizes:b,children:n})},t))}),G.map((n,t)=>e.jsx(ee,{children:Object.keys(n).map(g=>e.jsx(U,{rowSizes:D,columnTitles:m,rowData:a,pageSizes:c,children:n[g]},g))},t))]}),e.jsxs(te,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",borderRight:`1px solid ${r.borderSubtle01}`},children:[e.jsx(L,{name:"select",onChange:Z,children:c.map((n,t)=>e.jsx(B,{value:n,children:n},t))}),e.jsxs(q,{children:[o+1," – ",Math.min(o+i,s.length)," de ",s.length," itens"]})]}),e.jsxs(re,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",border:`1px solid ${r.borderSubtle01}`,borderTop:"1px solid transparent",borderBottom:"1px solid transparent",cursor:"pointer"},children:[e.jsx(L,{name:"select",value:V,onChange:Y,children:Array.from({length:w},(n,t)=>e.jsx(B,{value:t+1,children:t+1},t+1))}),e.jsxs(q,{children:["de ",w," páginas"]})]}),e.jsx(k,{align:"top",size:"small",label:"Pagina Anterior",width:"110px",children:e.jsx(P,{onClick:J,disabled:o===0,style:{borderLeft:"none",opacity:o===0?".5":"1",cursor:o===0?"not-allowed":"pointer"},children:ae})}),e.jsx(k,{align:"top-right",size:"small",label:"Proxima Pagina",width:"110px",children:e.jsx(P,{onClick:H,disabled:o+i>=s.length,style:{borderRight:"none",opacity:o+i>=s.length?".5":"1",cursor:o+i>=s.length?"not-allowed":"pointer"},children:ie})})]})]})]}):e.jsx(e.Fragment,{children:e.jsxs(S,{children:[e.jsx(I,{children:e.jsx(T,{children:e.jsx(z,{pageSizes:c,rowData:a,columnTitles:m,columnSizes:b})})}),e.jsx("div",{style:{height:"350px",width:"100%"},children:e.jsx("h4",{style:{fontFamily:"IBM Plex Sans",fontSize:"20px",display:"flex",padding:"0",alignItems:"center",justifyContent:"center",height:"100%",fontStyle:"normal",fontWeight:"400",lineHeight:"18px",letterSpacing:"0.16px",width:"100%",margin:"0"},children:f||"Nenhum dado disponível."})})]})})]})})};M.__docgenInfo={description:"",methods:[],displayName:"TableBasic",props:{columnTitles:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},rowData:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  [key: string]: ReactNode | string | JSX.Element;\r
}`,signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"ReactNode | string | JSX.Element",elements:[{name:"ReactNode"},{name:"string"},{name:"JSX.Element"}],required:!0}}]}}],raw:"TableRow[]"},description:""},pageSizes:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},actions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  text: ReactNode;\r
  onClick?: () => void;\r
}`,signature:{properties:[{key:"text",value:{name:"ReactNode",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"OptionsActions[]"},description:""},label:{required:!1,tsType:{name:"string"},description:""},buttons:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  onClick?: () => void;\r
  icon?: string;\r
  kind:\r
  | "primary"\r
  | "secondary"\r
  | "tertiary"\r
  | "ghost"\r
  | "dangerPrimary"\r
  | "dangerTertiary"\r
  | "dangerGhost";\r
  position?: "right" | "left";\r
  width?: string;\r
  dimension?: string,\r
  size?: "small" | "large" | "medium" | "extraLarge" | "twoXLarge" | "expressive",\r
\r
\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"icon",value:{name:"string",required:!1}},{key:"kind",value:{name:"union",raw:`| "primary"\r
| "secondary"\r
| "tertiary"\r
| "ghost"\r
| "dangerPrimary"\r
| "dangerTertiary"\r
| "dangerGhost"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"ghost"'},{name:"literal",value:'"dangerPrimary"'},{name:"literal",value:'"dangerTertiary"'},{name:"literal",value:'"dangerGhost"'}],required:!0}},{key:"position",value:{name:"union",raw:'"right" | "left"',elements:[{name:"literal",value:'"right"'},{name:"literal",value:'"left"'}],required:!1}},{key:"width",value:{name:"string",required:!1}},{key:"dimension",value:{name:"string",required:!1}},{key:"size",value:{name:"union",raw:'"small" | "large" | "medium" | "extraLarge" | "twoXLarge" | "expressive"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"large"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"extraLarge"'},{name:"literal",value:'"twoXLarge"'},{name:"literal",value:'"expressive"'}],required:!1}}]}}],raw:"ButtonTable[]"},description:""},search:{required:!1,tsType:{name:"boolean"},description:""},messagedatalength:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""},sizeSearch:{required:!1,tsType:{name:"union",raw:'"small" | "large" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"large"'},{name:"literal",value:'"medium"'}]},description:""},rowSizes:{required:!1,tsType:{name:"string"},description:""},columnSizes:{required:!1,tsType:{name:"string"},description:""}}};const ve={title:"Example/TableBasic",component:M,parameters:{layout:"centered"},tags:["autodocs"]},oe=["ID","Status","Fundos","Solicitante","tipo"],se=[{ID:"#50",Status:"Em andamento",Fundos:"	FIDC EMPIRICA GOAL ONE ONE ONE ONE x",Solicitante:"Cartão de Crédito",tipo:"Atualização de Dados de Investidor"},{ID:"#90",Status:"Em andamento",Fundos:"	FIDC EMPIRICA",Solicitante:"Cartão de Crédito",tipo:"Atualização de Dados de Investidor"},{ID:"#60",Status:"Em andamento",Fundos:"FIDC EMPIRICA",Solicitante:"Cartão de Crédito",tipo:"Atualização de Dados de Investidor"},{ID:"#80",Status:"Em andamento",Fundos:"	FIDC EMPIRICA",Solicitante:"Cartão de Crédito",tipo:"Atualização de Dados de Investidor"}],h={args:{columnSizes:"0 0 20px 0",search:!0,sizeSearch:"small",columnTitles:oe,rowData:se,pageSizes:[4,5,10,15,2,1],width:"1200px",buttons:[{label:"Butons",kind:"secondary",icon:"+",size:"small",onClick:()=>alert("2"),position:"right"},{label:"Buttons",kind:"secondary",size:"small",icon:"+",onClick:()=>console.log("2"),position:"right"}]}};var N,A,$;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    columnSizes: "0 0 20px 0",
    search: true,
    sizeSearch: "small",
    columnTitles: columnTitles,
    rowData: tableData,
    pageSizes: [4, 5, 10, 15, 2, 1],
    width: "1200px",
    buttons: [{
      label: "Butons",
      kind: "secondary",
      icon: "+",
      size: "small",
      onClick: () => alert("2"),
      position: "right"
    }, {
      label: "Buttons",
      kind: "secondary",
      size: "small",
      icon: "+",
      onClick: () => console.log("2"),
      position: "right"
    }]
  }
}`,...($=(A=h.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};const we=["Default"];export{h as Default,we as __namedExportsOrder,ve as default};
