import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as l}from"./index-CTjT7uj6.js";import{d as s}from"./styled-components.browser.esm-D3-gLipQ.js";/* empty css              */import{t as o}from"./contextual-D4vCP4YA.js";import{T}from"./index-CKOFa-r3.js";import{C as D}from"./index-BIp6C5b7.js";import{S as te}from"./index-BwCkwMlI.js";import{B as ne}from"./index-RDOqItmM.js";import"./statusicon-BiyrYhQW.js";import"./Warningfilled-CR6tEm8M.js";import"./IconsInputLabel-DNdvQB1m.js";import"./index-ClYmvwGD.js";/* empty css                 */const re=s.table`
  font-family: IBM Plex Sans;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  min-width: 1000px;
  min-height: 100px;
`,oe=s.tr`
  text-align: start;
  background: ${o.layerAccent01};
  color: ${o.textPrimary};
  font-family: "IBM Plex Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.16px;
  margin: 0;
`,ie=s.tr`
  background: ${o.layer01};
  text-align: start;
  color: ${o.textSecondary};
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.16px;
  cursor: pointer;
  &:hover {
    background: ${o.layerHover01};
  }
  margin: 0;
`,F=s.th`
  padding: 0.9em;
  text-align: start;
  margin: 0;
`,N=s.td`
  padding: 1em;
  padding-right: 2em;
  text-align: start;
  box-sizing: border-box;
  margin: 0;
`,ae=s.div`
  font-family: IBM Plex Sans;
  background: ${o.layer01};
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${o.borderSubtle01};
  border-right: 1px solid transparent;
  border-bottom: 1px solid transparent;
`,se=s.div`
  font-family: IBM Plex Sans;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
`,P=s.button`
  font-family: IBM Plex Sans;
  border: none;
  outline: none;
  cursor: pointer;
  border: 1px solid ${o.borderSubtle01};
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  padding: 10px 15px;
  display: flex;
  margin: 0;
`,B=s.option`
  border: none;
  outline: none;
`,A=s.select`
  margin: 0;
  outline: none;
  background: ${o.layer01};
  border: none;
  font-family: "IBM Plex Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: ${o.textPrimary};
  height: 100%;
  width: 50px;
  padding: 0 10px;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background: ${o.layerHover01};
  }
`,M=s.p`
  color: ${o.textPrimary};
  padding: 0 10px;
  margin: 0;
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.16px;
`,le=s.div`
  width: 100%;
  background: ${o.backgroundBrand};
  min-height: 50px;
  height: 60px;
  display: flex;
  color: ${o.textOnColor} !important;
  justify-content: space-between;
  flex-direction: row;
  font-family: IBM Plex Sans;
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
    color: ${o.textOnColor} !important;
    font-family: IBM Plex Sans;
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
`,de=e.jsx(e.Fragment,{children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsxs("g",{id:"Caret--right",children:[e.jsx("rect",{width:"16",height:"16",transform:"translate(0 0.000976562)",fill:"none"}),e.jsx("path",{id:"Vector",d:"M6 4.00098L11 8.00098L6 12.001V4.00098Z",fill:o.iconPrimary})]})})}),ce=e.jsx(e.Fragment,{children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("rect",{width:"16",height:"16",transform:"translate(0 0.000976562)",fill:"none"}),e.jsx("path",{d:"M10 12.001L5 8.00098L10 4.00098V12.001Z",fill:o.iconPrimary})]})}),me=s.div`
  display: flex;
  margin-top: ${a=>a.top??0}px;
  margin-bottom: ${a=>a.bottom??0}px;
  margin-left: ${a=>a.left??0}px;
  margin-right: ${a=>a.right??0}px;
`,E=a=>e.jsx(me,{...a});E.__docgenInfo={description:"",methods:[],displayName:"Margin",props:{top:{required:!1,tsType:{name:"number"},description:""},bottom:{required:!1,tsType:{name:"number"},description:""},left:{required:!1,tsType:{name:"number"},description:""},right:{required:!1,tsType:{name:"number"},description:""}}};const z=s.div`
  margin: 0;
  padding: 0em;
  box-sizing: border-box;
  display: flex;
  text-align: center;
  height: 100%;

  & .ItemsSelect {
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0 0 0 0;
    padding: 0 1em;
    text-align: center;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.16px;
  }
`,ue=s.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  background: ${o.layer01};
  font-family: IBM Plex Sans;
  display: flex;
  flex-direction: column;
  & h1 {
    font-family: IBM Plex Sans;
    align-self: start;
    margin: 0;
    padding: 1em 0px 1.5em 15px;
    font-size: 20px;
    font-weight: 100;
  }
  & > div:nth-child(2) {
    display: flex;
    align-self: end;
    width: 100%;
  }
`,q=({columnTitles:a,tabledata:m,pageSizes:I,actions:x,buttonsTable:f})=>{const[r,y]=l.useState(0),[i,_]=l.useState(I[0]),[g,k]=l.useState(new Set),[O,b]=l.useState(!1),[V,C]=l.useState(!1),[S,H]=l.useState([]),Y=t=>{const n=t.target.value.toLocaleString().toLocaleLowerCase(),d=m.filter(u=>a.some(p=>{var j;const v=(j=u[p])==null?void 0:j.toLocaleString().toLocaleLowerCase();return v==null?void 0:v.includes(n)}));H(d)},c=S.length>0?S:m,Z=l.useMemo(()=>c.slice(r,r+i),[c,r,i]),w=l.useMemo(()=>Math.ceil(c.length/i),[c.length,i]),J=l.useMemo(()=>Math.floor(r/i)+1,[r,i]),K=l.useCallback(()=>{r+i<c.length&&y(r+i)},[r,i,c.length]),Q=l.useCallback(()=>{r>0&&y(r-i)},[r,i]),U=l.useCallback(t=>{const n=Number(t.target.value);y((n-1)*i)},[i]),W=l.useCallback(t=>{_(Number(t.target.value))},[]),X=t=>{const{checked:n}=t.target;b(n),C(!1),k(()=>{const d=new Set;return n&&m.forEach((u,p)=>d.add(p)),n?d:new Set})},ee=(t,n)=>{const{checked:d}=t.target;k(u=>{const p=new Set(u);return d?p.add(n):p.delete(n),p})};return l.useEffect(()=>{const t=c.every((d,u)=>g.has(u)),n=c.some((d,u)=>g.has(u));b(n),C(!t&&n),t&&(C(!1),b(!0))},[c,g]),e.jsxs("div",{style:{margin:"0",padding:"0",width:"100%"},children:[e.jsxs(ue,{style:{minHeight:"50px",position:"relative"},children:[e.jsx("h1",{children:"Data table header"}),e.jsxs("div",{children:[e.jsx(te,{kind:"default",size:"medium",ContainedListMenu:!0,placeholder:"Digite Para Pesquisar",onChange:Y}),f==null?void 0:f.map(t=>e.jsxs(e.Fragment,{children:[e.jsx(E,{left:1}),e.jsx(ne,{onClick:t.onClick,kind:t.kind,size:"medium",icon:t.icon,label:t.label,borderNone:!0})]}))]}),e.jsxs(le,{className:g.size>0?"actionAnimation":"",children:[e.jsx(z,{children:e.jsxs("h1",{className:"ItemsSelect",children:[g.size," items selecionados"]})}),e.jsx(z,{children:x.map((t,n)=>e.jsx("button",{className:x.length>1&&x.length-1===n&&"BorderLasIndex"||"",onClick:t.onClick,children:t.text},n))})]})]}),e.jsxs(re,{children:[e.jsxs(oe,{children:[e.jsx(F,{children:e.jsx(D,{onChange:X,checked:O,indeterminate:V})}),a.map((t,n)=>e.jsx(F,{children:t},n))]}),Z.map((t,n)=>e.jsxs(ie,{onClick:()=>t.onClick?t.onClick(r+n):null,children:[e.jsx(N,{children:e.jsx(D,{name:`${n}`,onChange:d=>ee(d,r+n),checked:g.has(r+n)})}),a.map(d=>e.jsx(N,{children:t[d]},d))]},n))]}),e.jsxs(ae,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",borderRight:`1px solid ${o.borderSubtle01}`},children:[e.jsx(A,{name:"select",onChange:W,children:I.map((t,n)=>e.jsx(B,{value:t,children:t},n))}),e.jsxs(M,{children:[r+1," –",Math.min(r+i,m.length)," de"," ",m.length," itens"]})]}),e.jsxs(se,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",border:`1px solid ${o.borderSubtle01}`,borderTop:"1px solid transparent",borderBottom:"1px solid transparent",cursor:"pointer"},children:[e.jsx(A,{name:"select",value:J,onChange:U,children:Array.from({length:w},(t,n)=>e.jsx(B,{value:n+1,children:n+1},n+1))}),e.jsxs(M,{children:["de ",w," páginas"]})]}),e.jsx(T,{align:"top",size:"small",label:"Previous page",width:"110px",children:e.jsx(P,{onClick:Q,disabled:r===0,style:{borderLeft:"none",opacity:r===0?".5":"1",cursor:r===0?"not-allowed":"pointer"},children:ce})}),e.jsx(T,{align:"top-right",size:"small",label:"Next page",width:"100px",children:e.jsx(P,{onClick:K,disabled:r+i>=m.length,style:{borderRight:"none",borderLeft:"none",opacity:r+i>=m.length?".5":"1",cursor:r+i>=m.length?"not-allowed":"pointer"},children:de})})]})]})]})};q.__docgenInfo={description:"",methods:[],displayName:"TableBatchActions",props:{columnTitles:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},tabledata:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Record<string, React.ReactNode> & {\r
  onClick?: (indexId: number) => void;\r
}`,elements:[{name:"Record",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"Record<string, React.ReactNode>"},{name:"signature",type:"object",raw:`{\r
  onClick?: (indexId: number) => void;\r
}`,signature:{properties:[{key:"onClick",value:{name:"signature",type:"function",raw:"(indexId: number) => void",signature:{arguments:[{type:{name:"number"},name:"indexId"}],return:{name:"void"}},required:!1}}]}}]}],raw:"TableRow[]"},description:""},pageSizes:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},actions:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  text: ReactNode;\r
  onClick?: () => void;\r
}`,signature:{properties:[{key:"text",value:{name:"ReactNode",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"OptionsActions[]"},description:""},buttonsTable:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
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
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"icon",value:{name:"string",required:!1}},{key:"kind",value:{name:"union",raw:`| "primary"\r
| "secondary"\r
| "tertiary"\r
| "ghost"\r
| "dangerPrimary"\r
| "dangerTertiary"\r
| "dangerGhost"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"ghost"'},{name:"literal",value:'"dangerPrimary"'},{name:"literal",value:'"dangerTertiary"'},{name:"literal",value:'"dangerGhost"'}],required:!0}}]}}],raw:"ButtonTable[]"},description:""}}};const Fe={title:"Example/TableBatchActions",component:q,parameters:{layout:"centered"},tags:["autodocs"]},pe=["ID","Status","Cliente","Fundo","Tipo","Atendente","Status Do"],G=[{ID:"80",Status:"Criado",Cliente:"Nei Gonçalves",Fundo:"Fundo de Investim",Tipo:"Troca de Fundo",Atendente:"Eu","Status Do":"No Prazo"},{ID:"100",Status:"Criado",Cliente:"Verdadeiro Nei",Fundo:"Fundo de Investim",Tipo:"Troca de Fundo",Atendente:"Eu","Status Do":"No Prazo"},{ID:"2",Status:"Criado",Cliente:"Nei Gonçalves",Fundo:"Fundo de Investimento em Direitos Creditórios Iota FIDIC ALERT",Tipo:"Troca de Fundo",Atendente:"Eu","Status Do":"No Prazo",onClick:a=>alert(G[a].Fundo)},{ID:"3",Status:"Criado",Cliente:"Nei Gonçalves",Fundo:"Fundo de Investimento em Direitos Creditórios Iota FIDIC",Tipo:"Troca de Fundo",Atendente:"Eu","Status Do":"No Prazo"},{ID:"4",Status:"Criado",Cliente:"Nei Gonçalves",Fundo:"Fundo de Investimento em Direitos Creditórios Iota FIDIC",Tipo:"Troca de Fundo",Atendente:"Eu","Status Do":"No Prazo"},{ID:"5",Status:"Criado",Cliente:"Nei Gonçalves",Fundo:"Fundo de Investimento em Direitos Creditórios Iota FIDIC",Tipo:"Troca de Fundo",Atendente:"Eu","Status Do":"No Prazo"},{ID:"6",Status:"Criado",Cliente:"Nei Gonçalves",Fundo:"Fundo de Investimento em Direitos Creditórios Iota FIDIC",Tipo:"Troca de Fundo",Atendente:"Eu","Status Do":"No Prazo"},{ID:"7",Status:"Criado",Cliente:"Nei Gonçalves",Fundo:"Fundo de Investimento em Direitos Creditórios Iota FIDIC",Tipo:"Troca de Fundo",Atendente:"Eu","Status Do":"No Prazo"},{ID:"10",Status:"Criado",Cliente:"Nei Gonçalves test",Fundo:"Fundo de Investimento em Direitos Creditórios Iota FIDIC",Tipo:"Troca de Fundo",Atendente:"Eu","Status Do":"No Prazo"},{ID:"10",Status:"Criado",Cliente:"Nei Gonçalves test",Fundo:"Fundo de Investimento em Direitos Creditórios Iota FIDIC",Tipo:"Troca de Fundo",Atendente:"Eu","Status Do":"No Prazo"}],ge=[{text:"Excluir",onClick:()=>alert("1")},{text:"Button",onClick:()=>alert("1")},{text:"Baixar"},{text:"Last Button"}],h={args:{columnTitles:pe,tabledata:G,pageSizes:[4,5,10,15,2],actions:ge,buttonsTable:[{label:"Buttons",kind:"primary"},{label:"Buttons",kind:"secondary",icon:"+",onClick:()=>console.log("2")}]}};var R,$,L;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    columnTitles: columnTitles,
    tabledata: tableData,
    pageSizes: [4, 5, 10, 15, 2],
    actions: Actions,
    buttonsTable: [{
      label: "Buttons",
      kind: "primary"
    }, {
      label: "Buttons",
      kind: "secondary",
      icon: "+",
      onClick: () => console.log("2")
    }]
  }
}`,...(L=($=h.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};const Ne=["Default"];export{h as Default,Ne as __namedExportsOrder,Fe as default};
