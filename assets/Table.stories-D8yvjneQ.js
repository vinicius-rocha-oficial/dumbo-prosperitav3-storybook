import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as R}from"./index-CTjT7uj6.js";import{d as i}from"./styled-components.browser.esm-D3-gLipQ.js";/* empty css              */import{t as r}from"./contextual-D4vCP4YA.js";import{S as $}from"./index-0SVaR-dI.js";import{B as y}from"./index-vCHOC0t6.js";import"./IconsInputLabel-E66WMmAT.js";import"./index-ClYmvwGD.js";/* empty css                 */const f=i.table`
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width:100%;

`,v=i.tr`
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


`,M=i.td`
  padding: ${({rowSizes:n})=>n?`${n}px 1em`:".7em 1em"};
  text-align: start;
  box-sizing: border-box;
  margin: 0;
  width: 1%; 
  white-space: nowrap;
  vertical-align: middle;
`,L=i.tr`
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

`,b=i.th`
  padding: 0.9em;
  text-align: start;
  margin: 0;
  font-size:14px;
 

`,N=i.p`
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
`,I=i.h4`
  font-size:14px;
  display:flex;
  padding:0;
  margin:1px auto;
  text-align: start;
  font-style: normal;
  line-height: 18px;
  font-weight: bold;
  letter-spacing: 0.16px;
  cursor: pointer;
 
`,O=i.div`
  font-family: IBM Plex Sans;
  background: ${({bg:n})=>n||"#c6c6c6"};
  margin: 0;
  padding: 0;
  width: 100%;
  height:${({ht:n})=>n?`${n}px`:"30px"};
  border-radius:${({radius:n})=>n?"0px 0px 8px 8px":"0"};
`;i.div`
  font-family: IBM Plex Sans;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;

`;i.button`
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
`;i.option`
  border: none;
  outline: none;

`;i.select`
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
`;i.p`
  color: ${r.textPrimary};
  padding: 0 10px;
  margin: 0;
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.16px;
`;i.div`
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
`;const B=i.div`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: start;
    background: ${r.layer01};
    flex-direction: column;
    min-width:${({width:n})=>n||"100%"};
    & > div:nth-child(2) {
      display: flex;
      align-self: end;
      width: 100%;
    }
   border-radius:${({radius:n})=>n?"15px 15px 0px 0px":"0"};
   overflow: hidden;
  `,k=({rowData:n,buttons:o,label:c,search:j,columnTitles:l,messagedatalength:u,width:q,sizeSearch:D,rowSizes:P,radius:g,footer:d})=>{const[x,T]=R.useState([]),A=t=>{const a=t.target.value.toLocaleLowerCase(),s=n.filter(F=>l.some(z=>{var h;const m=(h=String(F[z]))==null?void 0:h.toLocaleLowerCase();return m==null?void 0:m.includes(a)}));T(s)},E=x.length>0?x:n;return e.jsx(e.Fragment,{children:e.jsxs(B,{width:q,rowData:n,radius:g,columnTitles:l,messagedatalength:u,style:{position:"relative"},children:[c&&e.jsx(N,{children:c}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[j&&e.jsx($,{kind:"default",size:D||"small",ContainedListMenu:!0,placeholder:"Digite Para Pesquisar",onChange:A}),e.jsx("div",{style:{display:"flex",alignItems:"center"},children:o==null?void 0:o.filter(t=>t.position==="left").map((t,a)=>e.jsx("div",{style:{marginLeft:"1px"},children:e.jsx(y,{onClick:t.onClick,kind:t.kind,size:t.size||"small",icon:t.icon,label:t.label,width:t.width,dimension:t.dimension,borderNone:!0})},a))}),e.jsx("div",{style:{display:"flex",alignItems:"center"},children:o==null?void 0:o.filter(t=>t.position==="right").map((t,a)=>e.jsx("div",{style:{marginRight:"1px"},children:e.jsx(y,{onClick:s=>{s.stopPropagation(),t.onClick&&t.onClick()},kind:t.kind,size:t.size||"small",icon:t.icon,label:t.label,width:t.width,dimension:t.dimension,borderNone:!0})},a))})]}),n&&n.length>0?e.jsxs(e.Fragment,{children:[e.jsxs(f,{children:[e.jsx(v,{children:l.map((t,a)=>e.jsx(b,{children:e.jsx(I,{children:t})},a))}),E.map((t,a)=>e.jsx(L,{children:Object.keys(t).map(s=>e.jsx(M,{rowSizes:P,columnTitles:l,rowData:n,children:t[s]},s))},a))]}),d&&e.jsx(O,{radius:g,bg:d.bg,ht:d.ht,rowData:n,columnTitles:l,children:d.element})]}):e.jsx(e.Fragment,{children:e.jsxs(f,{children:[e.jsx(v,{children:e.jsx(b,{children:e.jsx(I,{})})}),e.jsx("div",{style:{height:"350px",width:"100%"},children:e.jsx("h4",{style:{fontFamily:"IBM Plex Sans",fontSize:"20px",display:"flex",padding:"0",alignItems:"center",justifyContent:"center",height:"100%",fontStyle:"normal",fontWeight:"400",lineHeight:"18px",letterSpacing:"0.16px",width:"100%",margin:"0"},children:u||"Nenhum dado disponível."})})]})})]})})};k.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columnTitles:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},rowData:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
    [key: string]: ReactNode | string | JSX.Element;\r
}`,signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"ReactNode | string | JSX.Element",elements:[{name:"ReactNode"},{name:"string"},{name:"JSX.Element"}],required:!0}}]}}],raw:"TableRow[]"},description:""},actions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
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
    size?: "small" | "large" | "medium" | "extraLarge" | "twoXLarge" | "expressive"\r
\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"icon",value:{name:"string",required:!1}},{key:"kind",value:{name:"union",raw:`| "primary"\r
| "secondary"\r
| "tertiary"\r
| "ghost"\r
| "dangerPrimary"\r
| "dangerTertiary"\r
| "dangerGhost"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"ghost"'},{name:"literal",value:'"dangerPrimary"'},{name:"literal",value:'"dangerTertiary"'},{name:"literal",value:'"dangerGhost"'}],required:!0}},{key:"position",value:{name:"union",raw:'"right" | "left"',elements:[{name:"literal",value:'"right"'},{name:"literal",value:'"left"'}],required:!1}},{key:"width",value:{name:"string",required:!1}},{key:"dimension",value:{name:"string",required:!1}},{key:"size",value:{name:"union",raw:'"small" | "large" | "medium" | "extraLarge" | "twoXLarge" | "expressive"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"large"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"extraLarge"'},{name:"literal",value:'"twoXLarge"'},{name:"literal",value:'"expressive"'}],required:!1}}]}}],raw:"ButtonTable[]"},description:""},search:{required:!1,tsType:{name:"boolean"},description:""},messagedatalength:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""},sizeSearch:{required:!1,tsType:{name:"union",raw:'"small" | "large" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"large"'},{name:"literal",value:'"medium"'}]},description:""},rowSizes:{required:!1,tsType:{name:"string"},description:""},radius:{required:!1,tsType:{name:"boolean"},description:""},footer:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
    ht: string,\r
    element: ReactNode,\r
    bg: string\r
}`,signature:{properties:[{key:"ht",value:{name:"string",required:!0}},{key:"element",value:{name:"ReactNode",required:!0}},{key:"bg",value:{name:"string",required:!0}}]}},description:""},bg:{required:!1,tsType:{name:"string"},description:""},ht:{required:!1,tsType:{name:"string"},description:""}}};const ee={title:"Example/Table",component:k,parameters:{layout:"centered"},tags:["autodocs"]},G=["ID","Status","Fundos","Solicitante","tipo"],X=[{ID:"#50",Status:"Em andamento",Fundos:"FIDC EMPIRICA GOAL ONE ONE ONE ONE x",Solicitante:"Cartão de Crédito",tipo:"Atualização de Dados de Investidor"},{ID:"#90",Status:"Concluído",Fundos:"FIDC EMPIRICA",Solicitante:"Conta Corrente",tipo:"Atualização de Dados de Investidor"},{ID:"#60",Status:"Pendente",Fundos:"FIDC EMPIRICA",Solicitante:"Cheque Especial",tipo:"Abertura de Conta de Investidor"},{ID:"#70",Status:"Em andamento",Fundos:"FIDC EMPIRICA",Solicitante:"Cartão de Crédito",tipo:"Atualização de Dados de Investidor"},{ID:"#100",Status:"Concluído",Fundos:"FIDC EMPIRICA GOLD",Solicitante:"Financiamento",tipo:"Revisão de Limite"},{ID:"#120",Status:"Em andamento",Fundos:"FIDC EMPIRICA PREMIUM",Solicitante:"Consórcio",tipo:"Abertura de Conta de Investidor"},{ID:"#130",Status:"Pendente",Fundos:"FIDC EMPIRICA",Solicitante:"Cartão de Crédito",tipo:"Atualização de Dados de Investidor"},{ID:"#140",Status:"Em andamento",Fundos:"FIDC EMPIRICA",Solicitante:"Cheque Especial",tipo:"Revisão de Limite"},{ID:"#150",Status:"Concluído",Fundos:"FIDC EMPIRICA GOAL",Solicitante:"Cartão de Crédito",tipo:"Abertura de Conta de Investidor"},{ID:"#160",Status:"Pendente",Fundos:"FIDC EMPIRICA GOAL",Solicitante:"Conta Corrente",tipo:"Atualização de Dados de Investidor"}],p={args:{radius:!0,sizeSearch:"small",columnTitles:G,rowData:X,width:"1200px",footer:{element:"",bg:"",ht:"60"}}};var C,w,S;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    radius: true,
    sizeSearch: "small",
    columnTitles: columnTitles,
    rowData: tableData,
    width: "1200px",
    footer: {
      element: "",
      bg: "",
      ht: "60"
    }
  }
}`,...(S=(w=p.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const te=["Default"];export{p as Default,te as __namedExportsOrder,ee as default};
