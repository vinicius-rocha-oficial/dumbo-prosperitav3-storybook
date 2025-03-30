import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{r as g}from"./index-CTjT7uj6.js";import{d as o}from"./styled-components.browser.esm-D3-gLipQ.js";/* empty css              */import{t as i}from"./contextual-D4vCP4YA.js";import{S as te}from"./index-0SVaR-dI.js";import{B as v}from"./index-vCHOC0t6.js";import{T as w}from"./index-UMtQnabN.js";import{M as re}from"./index-DX7R80t1.js";import"./IconsInputLabel-E66WMmAT.js";import"./index-ClYmvwGD.js";/* empty css                 */const z=o.table`
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width:100%;

`,N=o.tr`
  text-align: start;
  background: ${i.layerAccent01};
  color: ${i.textPrimary};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.16px;
  margin: 0; 
  white-space: nowrap; 


`,T=o.td`
  padding: ${({rowSizes:t})=>t?`${t}px 1em`:".7em 1em"};
  text-align: start;
  box-sizing: border-box;
  margin: 0;
  width: 1%; 
  white-space: nowrap;
  vertical-align: middle;
`,A=o.tr`
  background: ${i.layer01};
  text-align: start;
  color: ${i.textSecondary};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  padding:0;
  letter-spacing: 0.16px;
  cursor: pointer;
  &:hover {
    background: ${i.layerHover01};
  }
  margin: 0;
  border-top:1px solid ${i.borderSubtle01};

`,M=o.th`
  padding: 0.9em;
  text-align: start;
  margin: 0;
  font-size:14px;
  white-warp:nowrap

`,ae=o.div`
  font-family:IBM Plex Sans;
  font-size:20px;
  display:flex;
  padding:${({label:t})=>(t==null?void 0:t.padding)||"1em"};
  margin: ${({label:t})=>(t==null?void 0:t.margin)||"0"};;
  text-align: start;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.16px;
  cursor: pointer;
  width: 100%;

`,D=o.h4`
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
  white-warp:nowrap;
`,ie=o.div`
  font-family: IBM Plex Sans;
  background: ${({bg:t})=>t||"#c6c6c6"};
  margin: 0;
  padding: 0;
  width: 100%;
  height:${({ht:t})=>t?`${t}px`:"30px"};
  border-radius:${({radius:t})=>t?"0px 0px 8px 8px":"0"};
`,oe=o.div`
  font-family: IBM Plex Sans;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;

`,le=o.div`
  font-family: IBM Plex Sans;
  background: ${i.layer01};
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${i.borderSubtle01};
  border-right: 1px solid transparent;
  border-bottom: 1px solid transparent;
`,F=o.button`
  font-family: IBM Plex Sans;
  border: none;
  outline: none;
  cursor: pointer;
  border: 1px solid ${i.borderSubtle01};
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  padding: 10px 15px;
  display: flex;
  margin: 0;
`,L=o.option`
  border: none;
  outline: none;

`,E=o.select`
  margin: 0;
  outline: none;
  background: ${i.layer01};
  border: none;
  font-family: "IBM Plex Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: ${i.textPrimary};
  height: 100%;
  width: auto;
  padding: 0 10px;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background: ${i.layerHover01};
  }
`,$=o.p`
  color: ${i.textPrimary};
  padding: 0 10px;
  margin: 0;
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.16px;
`;o.div`
  width: 100%;
  background: ${i.backgroundBrand};
  min-height: 50px;
  height: 60px;
  display: flex;
  color: ${i.textOnColor} !important;
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
    color: ${i.textOnColor} !important;
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
`;const se=n.jsx(n.Fragment,{children:n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsxs("g",{id:"Caret--right",children:[n.jsx("rect",{width:"16",height:"16",transform:"translate(0 0.000976562)",fill:"none"}),n.jsx("path",{id:"Vector",d:"M6 4.00098L11 8.00098L6 12.001V4.00098Z",fill:i.iconPrimary})]})})}),de=n.jsx(n.Fragment,{children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[n.jsx("rect",{width:"16",height:"16",transform:"translate(0 0.000976562)",fill:"none"}),n.jsx("path",{d:"M10 12.001L5 8.00098L10 4.00098V12.001Z",fill:i.iconPrimary})]})}),ce=o.div`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: start;
    background: ${i.layer01};
    flex-direction: column;
    min-width:${({width:t})=>t||"100%"};
    & > div:nth-child(2) {
      display: flex;
      align-self: end;
      width: 100%;
    }
   border-radius:${({radius:t})=>t?"15px 15px 0px 0px":"0"};
   overflow: hidden;
  `;o.p`
  font-family:IBM Plex Sans;
  font-size:20px;
  display:flex;
  margin:0;
  text-align: start;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.16px;
  cursor: pointer;
`;const X=({rowData:t,buttons:y,label:k,search:_,columnTitles:m,messagedatalength:I,width:J,sizeSearch:V,rowSizes:S,radius:j,pageSizes:h,footer:c,pagination:P})=>{const[R,H]=g.useState([]),[l,Y]=g.useState(h[0]),[s,b]=g.useState(0),Z=e=>{const r=e.target.value.toLocaleLowerCase(),a=t.filter(x=>m.some(f=>{var p;const u=(p=String(x[f]))==null?void 0:p.toLocaleLowerCase();return u==null?void 0:u.includes(r)}));H(a)},d=R.length>0?R:t,U=g.useMemo(()=>d.slice(s,s+l),[d,s,l]),q=g.useMemo(()=>Math.ceil(d.length/l),[d.length,l]),W=g.useMemo(()=>Math.floor(s/l)+1,[s,l]),K=g.useCallback(()=>{b(e=>{const r=e+l;return r>=d.length?e:r})},[l,d.length]),Q=g.useCallback(()=>{b(e=>{const r=e-l;return r<0?0:r})},[l]),ee=g.useCallback(e=>{const r=Number(e.target.value);b((r-1)*l)},[l]),ne=g.useCallback(e=>{const r=Number(e.target.value);Y(r),b(0)},[]);return n.jsx(n.Fragment,{children:n.jsxs(ce,{width:J,pageSizes:h,rowData:t,radius:j,columnTitles:m,messagedatalength:I,style:{position:"relative"},children:[k&&n.jsx(ae,{pageSizes:h,radius:j,bg:c==null?void 0:c.bg,ht:c==null?void 0:c.ht,rowData:t,columnTitles:m,label:k,children:k.content}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[_&&n.jsx(te,{kind:"default",size:V||"small",ContainedListMenu:!0,placeholder:"Digite Para Pesquisar",onChange:Z}),n.jsx("div",{style:{display:"flex",alignItems:"center"},children:y==null?void 0:y.filter(e=>e.position==="left").map((e,r)=>{var a,x,f,u;return n.jsx("div",{style:{marginLeft:"1px"},children:e.tooltip?n.jsx(w,{align:((a=e.tooltip)==null?void 0:a.align)||"bottom",size:((x=e.tooltip)==null?void 0:x.size)||"medium",label:(f=e.tooltip)==null?void 0:f.label,width:((u=e.tooltip)==null?void 0:u.width)||"100px",children:n.jsx(v,{onClick:p=>{p.stopPropagation(),e.onClick&&e.onClick()},kind:e.kind,size:e.size||"small",icon:e.icon,label:e.label,width:e.width,dimension:e.dimension,disabled:e.disabled,borderNone:!0})}):n.jsx(v,{onClick:p=>{p.stopPropagation(),e.onClick&&e.onClick()},kind:e.kind,size:e.size||"small",icon:e.icon,label:e.label,width:e.width,dimension:e.dimension,disabled:e.disabled,borderNone:!0})},r)})}),n.jsx("div",{style:{display:"flex",alignItems:"center"},children:y==null?void 0:y.filter(e=>e.position==="right").map((e,r)=>{var a,x,f,u;return n.jsx("div",{style:{marginRight:"1px"},children:e.tooltip?n.jsx(w,{align:((a=e.tooltip)==null?void 0:a.align)||"bottom",size:((x=e.tooltip)==null?void 0:x.size)||"medium",label:(f=e.tooltip)==null?void 0:f.label,width:((u=e.tooltip)==null?void 0:u.width)||"100px",children:n.jsx(v,{onClick:p=>{p.stopPropagation(),e.onClick&&e.onClick()},kind:e.kind,size:e.size||"small",icon:e.icon,label:e.label,width:e.width,dimension:e.dimension,disabled:e.disabled,borderNone:!0})}):n.jsx(v,{onClick:p=>{p.stopPropagation(),e.onClick&&e.onClick()},kind:e.kind,size:e.size||"small",icon:e.icon,label:e.label,width:e.width,dimension:e.dimension,disabled:e.disabled,borderNone:!0})},r)})})]}),t&&t.length>0?n.jsxs(n.Fragment,{children:[n.jsxs(z,{children:[n.jsx(N,{children:m.map((e,r)=>n.jsx(M,{children:n.jsx(D,{children:e})},r))}),P?U.map((e,r)=>n.jsx(A,{onClick:a=>{a.preventDefault(),a.stopPropagation(),e.onClick&&e.onClick()},children:Object.keys(e).map(a=>a!=="onClick"&&n.jsx(T,{pageSizes:h,rowSizes:S,columnTitles:m,rowData:t,children:e[a]},a))},r)):d.map((e,r)=>n.jsx(A,{onClick:a=>{a.preventDefault(),a.stopPropagation(),e.onClick&&e.onClick()},children:Object.keys(e).map(a=>a!=="onClick"&&n.jsx(T,{pageSizes:h,rowSizes:S,columnTitles:m,rowData:t,children:e[a]},a))},r))]}),c&&n.jsx(ie,{pageSizes:h,radius:j,bg:c.bg,ht:c.ht,rowData:t,columnTitles:m,children:c.element}),n.jsx(re,{top:2}),P&&n.jsxs(le,{children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",borderRight:`1px solid ${i.borderSubtle01}`},children:[n.jsx(E,{name:"select",onChange:ne,children:h.map((e,r)=>n.jsx(L,{value:e,children:e},r))}),n.jsxs($,{children:[s+1," – ",Math.min(s+l,d.length)," de ",d.length," itens"]})]}),n.jsxs(oe,{children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",border:`1px solid ${i.borderSubtle01}`,borderTop:"1px solid transparent",borderBottom:"1px solid transparent",cursor:"pointer"},children:[n.jsx(E,{name:"select",value:W,onChange:ee,children:Array.from({length:q},(e,r)=>n.jsx(L,{value:r+1,children:r+1},r+1))}),n.jsxs($,{children:["de ",q," páginas"]})]}),n.jsx(w,{align:"top",size:"small",label:"Pagina Anterior",width:"110px",children:n.jsx(F,{onClick:Q,disabled:s===0,style:{borderLeft:"none",opacity:s===0?".5":"1",cursor:s===0?"not-allowed":"pointer"},children:de})}),n.jsx(w,{align:"top-right",size:"small",label:"Proxima Pagina",width:"110px",children:n.jsx(F,{onClick:K,disabled:s+l>=d.length,style:{borderRight:"none",opacity:s+l>=d.length?".5":"1",cursor:s+l>=d.length?"not-allowed":"pointer"},children:se})})]})]})]}):n.jsx(n.Fragment,{children:n.jsxs(z,{children:[n.jsx(N,{children:n.jsx(M,{children:n.jsx(D,{})})}),n.jsx("div",{style:{height:"350px",width:"100%"},children:n.jsx("h4",{style:{fontFamily:"IBM Plex Sans",fontSize:"20px",display:"flex",padding:"0",alignItems:"center",justifyContent:"center",height:"100%",fontStyle:"normal",fontWeight:"400",lineHeight:"18px",letterSpacing:"0.16px",width:"100%",margin:"0"},children:I||"Nenhum dado disponível."})})]})})]})})};X.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columnTitles:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},rowData:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`{\r
    onClick?: () => void; // onClick agora é opcional\r
} & Record<string, ReactNode | string | JSX.Element | any>`,elements:[{name:"signature",type:"object",raw:`{\r
    onClick?: () => void; // onClick agora é opcional\r
}`,signature:{properties:[{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}},{name:"Record",elements:[{name:"string"},{name:"union",raw:"ReactNode | string | JSX.Element | any",elements:[{name:"ReactNode"},{name:"string"},{name:"JSX.Element"},{name:"any"}]}],raw:"Record<string, ReactNode | string | JSX.Element | any>"}]}],raw:"TableRow[]"},description:""},actions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
    text: ReactNode;\r
    onClick?: () => void;\r
}`,signature:{properties:[{key:"text",value:{name:"ReactNode",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"OptionsActions[]"},description:""},label:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
    content: React.ReactNode,\r
    padding?: string,\r
    margin?: string\r
}`,signature:{properties:[{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"padding",value:{name:"string",required:!1}},{key:"margin",value:{name:"string",required:!1}}]}},description:""},buttons:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
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
    disabled?: boolean,\r
    tooltip?: {\r
        align:\r
        | "top"\r
        | "top-left"\r
        | "top-right"\r
        | "bottom"\r
        | "top"\r
        | "bottom-left"\r
        | "bottom-right"\r
        | "left"\r
        | "right";\r
        width?: string;\r
        children?: React.ReactNode;\r
        size: "small" | "large" | "medium";\r
        label?: string;\r
    }\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"icon",value:{name:"string",required:!1}},{key:"kind",value:{name:"union",raw:`| "primary"\r
| "secondary"\r
| "tertiary"\r
| "ghost"\r
| "dangerPrimary"\r
| "dangerTertiary"\r
| "dangerGhost"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"ghost"'},{name:"literal",value:'"dangerPrimary"'},{name:"literal",value:'"dangerTertiary"'},{name:"literal",value:'"dangerGhost"'}],required:!0}},{key:"position",value:{name:"union",raw:'"right" | "left"',elements:[{name:"literal",value:'"right"'},{name:"literal",value:'"left"'}],required:!1}},{key:"width",value:{name:"string",required:!1}},{key:"dimension",value:{name:"string",required:!1}},{key:"size",value:{name:"union",raw:'"small" | "large" | "medium" | "extraLarge" | "twoXLarge" | "expressive"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"large"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"extraLarge"'},{name:"literal",value:'"twoXLarge"'},{name:"literal",value:'"expressive"'}],required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"tooltip",value:{name:"signature",type:"object",raw:`{\r
    align:\r
    | "top"\r
    | "top-left"\r
    | "top-right"\r
    | "bottom"\r
    | "top"\r
    | "bottom-left"\r
    | "bottom-right"\r
    | "left"\r
    | "right";\r
    width?: string;\r
    children?: React.ReactNode;\r
    size: "small" | "large" | "medium";\r
    label?: string;\r
}`,signature:{properties:[{key:"align",value:{name:"union",raw:`| "top"\r
| "top-left"\r
| "top-right"\r
| "bottom"\r
| "top"\r
| "bottom-left"\r
| "bottom-right"\r
| "left"\r
| "right"`,elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!0}},{key:"width",value:{name:"string",required:!1}},{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"size",value:{name:"union",raw:'"small" | "large" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"large"'},{name:"literal",value:'"medium"'}],required:!0}},{key:"label",value:{name:"string",required:!1}}]},required:!1}}]}}],raw:"ButtonTable[]"},description:""},pageSizes:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},search:{required:!1,tsType:{name:"boolean"},description:""},pagination:{required:!1,tsType:{name:"boolean"},description:""},messagedatalength:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""},sizeSearch:{required:!1,tsType:{name:"union",raw:'"small" | "large" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"large"'},{name:"literal",value:'"medium"'}]},description:""},rowSizes:{required:!1,tsType:{name:"string"},description:""},radius:{required:!1,tsType:{name:"boolean"},description:""},footer:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
    ht: string,\r
    element: ReactNode,\r
    bg: string\r
}`,signature:{properties:[{key:"ht",value:{name:"string",required:!0}},{key:"element",value:{name:"ReactNode",required:!0}},{key:"bg",value:{name:"string",required:!0}}]}},description:""},bg:{required:!1,tsType:{name:"string"},description:""},ht:{required:!1,tsType:{name:"string"},description:""}}};const Ie={title:"Example/Table",component:X,parameters:{layout:"centered"},tags:["autodocs"]},pe=["ID","Status","Fundos","Solicitante","tipo"],ge=[{ID:"#50",Status:"Em andamento",Fundos:"FIDC EMPIRICA GOAL ONE ONE ONE ONE x",Solicitante:"Cartão de Crédito",tipo:"Atualização de Dados de Investidor",onClick:()=>{alert("")}},{ID:"#90",Status:"Concluído",Fundos:"FIDC EMPIRICA",Solicitante:"Conta Corrente",tipo:"Atualização de Dados de Investidor"},{ID:"#60",Status:"Pendente",Fundos:"FIDC EMPIRICA",Solicitante:"Cheque Especial",tipo:"Abertura de Conta de Investidor"},{ID:"#70",Status:"Em andamento",Fundos:"FIDC EMPIRICA",Solicitante:"Cartão de Crédito",tipo:"Atualização de Dados de Investidor"},{ID:"#100",Status:"Concluído",Fundos:"FIDC EMPIRICA GOLD",Solicitante:"Financiamento",tipo:"Revisão de Limite"},{ID:"#120",Status:"Em andamento",Fundos:"FIDC EMPIRICA PREMIUM",Solicitante:"Consórcio",tipo:"Abertura de Conta de Investidor"},{ID:"#130",Status:"Pendente",Fundos:"FIDC EMPIRICA",Solicitante:"Cartão de Crédito",tipo:"Atualização de Dados de Investidor"},{ID:"#140",Status:"Em andamento",Fundos:"FIDC EMPIRICA",Solicitante:"Cheque Especial",tipo:"Revisão de Limite"},{ID:"#150",Status:"Concluído",Fundos:"FIDC EMPIRICA GOAL",Solicitante:"Cartão de Crédito",tipo:"Abertura de Conta de Investidor"},{ID:"#160",Status:"Pendente",Fundos:"FIDC EMPIRICA GOAL",Solicitante:"Conta Corrente",tipo:"Atualização de Dados de Investidor"}],C={args:{pageSizes:[2,10],pagination:!0,radius:!0,sizeSearch:"small",columnTitles:pe,rowData:ge,width:"1200px",footer:{element:"",bg:"",ht:"0"}}};var B,O,G;C.parameters={...C.parameters,docs:{...(B=C.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    pageSizes: [2, 10],
    pagination: true,
    radius: true,
    sizeSearch: "small",
    columnTitles: columnTitles,
    rowData: tableData,
    width: "1200px",
    footer: {
      element: "",
      bg: "",
      ht: "0"
    }
  }
}`,...(G=(O=C.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};const Se=["Default"];export{C as Default,Se as __namedExportsOrder,Ie as default};
