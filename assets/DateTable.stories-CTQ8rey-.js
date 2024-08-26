import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as l}from"./index-CTjT7uj6.js";import{d as s}from"./styled-components.browser.esm-D3-gLipQ.js";/* empty css              */import{t as o}from"./contextual-D4vCP4YA.js";import{T as x}from"./index-CKOFa-r3.js";const k=s.table`
  font-family: IBM Plex Sans;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
`,A=s.tr`
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
`,M=s.tr`
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
`,R=s.th`
  padding: 0.9em;
  text-align: start;
  margin: 0;
`,z=s.td`
  padding: 1em;
  padding-right: 2em;
  text-align: start;
  box-sizing: border-box;
  margin: 0;
`,B=s.div`
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
`,$=s.div`
  font-family: IBM Plex Sans;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
`,h=s.button`
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
`,f=s.option`
  border: none;
  outline: none;
`,I=s.select`
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
`,b=s.p`
  color: ${o.textPrimary};
  padding: 0 10px;
  margin: 0;
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.16px;
`,E=e.jsx(e.Fragment,{children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsxs("g",{id:"Caret--right",children:[e.jsx("rect",{width:"16",height:"16",transform:"translate(0 0.000976562)",fill:"none"}),e.jsx("path",{id:"Vector",d:"M6 4.00098L11 8.00098L6 12.001V4.00098Z",fill:o.iconPrimary})]})})}),L=e.jsx(e.Fragment,{children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("rect",{width:"16",height:"16",transform:"translate(0 0.000976562)",fill:"none"}),e.jsx("path",{d:"M10 12.001L5 8.00098L10 4.00098V12.001Z",fill:o.iconPrimary})]})}),D=({columnTitles:d,tabledata:a,pageSizes:m})=>{const[t,u]=l.useState(0),[n,S]=l.useState(m[0]),w=l.useMemo(()=>a.slice(t,t+n),[a,t,n]),p=l.useMemo(()=>Math.ceil(a.length/n),[a.length,n]),F=l.useMemo(()=>Math.floor(t/n)+1,[t,n]),T=l.useCallback(()=>{t+n<a.length&&u(t+n)},[t,n,a.length]),j=l.useCallback(()=>{t>0&&u(t-n)},[t,n]),N=l.useCallback(r=>{const i=Number(r.target.value);u((i-1)*n)},[n]),P=l.useCallback(r=>{S(Number(r.target.value))},[]);return e.jsxs("div",{style:{margin:"0",padding:"0",width:"100%"},children:[e.jsxs(k,{children:[e.jsx(A,{children:d.map((r,i)=>e.jsx(R,{children:r},i))}),w.map((r,i)=>e.jsx(M,{onClick:()=>r.onClick?r.onClick(t+i):null,children:d.map(g=>e.jsx(z,{children:r[g]},g))},i))]}),e.jsxs(B,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",borderRight:`1px solid ${o.borderSubtle01}`},children:[e.jsx(I,{name:"select",onChange:P,children:m.map((r,i)=>e.jsx(f,{value:r,children:r},i))}),e.jsxs(b,{children:[t+1," –",Math.min(t+n,a.length)," de"," ",a.length," itens"]})]}),e.jsxs($,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",border:`1px solid ${o.borderSubtle01}`,borderTop:"1px solid transparent",borderBottom:"1px solid transparent",cursor:"pointer"},children:[e.jsx(I,{name:"select",value:F,onChange:N,children:Array.from({length:p},(r,i)=>e.jsx(f,{value:i+1,children:i+1},i+1))}),e.jsxs(b,{children:["de ",p," páginas"]})]}),e.jsx(x,{align:"top",size:"small",label:"Previous page",width:"110px",children:e.jsx(h,{onClick:j,disabled:t===0,style:{borderLeft:"none",opacity:t===0?".5":"1",cursor:t===0?"not-allowed":"pointer"},children:L})}),e.jsx(x,{align:"top-right",size:"small",label:"Next page",width:"100px",children:e.jsx(h,{onClick:T,disabled:t+n>=a.length,style:{borderRight:"none",borderLeft:"none",opacity:t+n>=a.length?".5":"1",cursor:t+n>=a.length?"not-allowed":"pointer"},children:E})})]})]})]})};D.__docgenInfo={description:"",methods:[],displayName:"DataTable",props:{columnTitles:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},tabledata:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Record<string, React.ReactNode> & {\r
  onClick?: (indexId: number) => void;\r
}`,elements:[{name:"Record",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"Record<string, React.ReactNode>"},{name:"signature",type:"object",raw:`{\r
  onClick?: (indexId: number) => void;\r
}`,signature:{properties:[{key:"onClick",value:{name:"signature",type:"function",raw:"(indexId: number) => void",signature:{arguments:[{type:{name:"number"},name:"indexId"}],return:{name:"void"}},required:!1}}]}}]}],raw:"TableRow[]"},description:""},pageSizes:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""}}};const K={title:"Example/DateTable",component:D,parameters:{layout:"centered"},tags:["autodocs"]},G=["ID","Status","Cliente","Fundo","Tipo","Atendente","Status Do"],_=[{ID:"dd",Status:"Criado",Cliente:"Nei Gonçalves",Fundo:"Fundo de Investimento em Direitos Creditórios Iota FIDIC",Tipo:"Troca de Fundo",Atendente:"Eu","Status Do":"No Prazo"},{ID:"2",Status:"Criado",Cliente:"Nei Gonçalves",Fundo:"Fundo de Investimento em Direitos Creditórios Iota FIDIC",Tipo:"Troca de Fundo",Atendente:"Eu","Status Do":"No Prazo",onClick:d=>console.log(d)},{ID:"3",Status:"Criado",Cliente:"Nei Gonçalves",Fundo:"Fundo de Investimento em Direitos Creditórios Iota FIDIC",Tipo:"Troca de Fundo",Atendente:"Eu","Status Do":"No Prazo"},{ID:"4",Status:"Criado",Cliente:"Nei Gonçalves",Fundo:"Fundo de Investimento em Direitos Creditórios Iota FIDIC",Tipo:"Troca de Fundo",Atendente:"Eu","Status Do":"No Prazo"},{ID:"5",Status:"Criado",Cliente:"Nei Gonçalves",Fundo:"Fundo de Investimento em Direitos Creditórios Iota FIDIC",Tipo:"Troca de Fundo",Atendente:"Eu","Status Do":"No Prazo"},{ID:"6",Status:"Criado",Cliente:"Nei Gonçalves",Fundo:"Fundo de Investimento em Direitos Creditórios Iota FIDIC",Tipo:"Troca de Fundo",Atendente:"Eu","Status Do":"No Prazo"},{ID:"7",Status:"Criado",Cliente:"Nei Gonçalves",Fundo:"Fundo de Investimento em Direitos Creditórios Iota FIDIC",Tipo:"Troca de Fundo",Atendente:"Eu","Status Do":"No Prazo"},{ID:"10",Status:"Criado",Cliente:"Nei Gonçalves test",Fundo:"Fundo de Investimento em Direitos Creditórios Iota FIDIC",Tipo:"Troca de Fundo",Atendente:"Eu","Status Do":"No Prazo"},{ID:"10",Status:"Criado",Cliente:"Nei Gonçalves test",Fundo:"Fundo de Investimento em Direitos Creditórios Iota FIDIC",Tipo:"Troca de Fundo",Atendente:"Eu","Status Do":"No Prazo"}],c={args:{columnTitles:G,tabledata:_,pageSizes:[5,10,15,2]}};var C,y,v;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    columnTitles: columnTitles,
    tabledata: tableData,
    pageSizes: [5, 10, 15, 2]
  }
}`,...(v=(y=c.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const Q=["Default"];export{c as Default,Q as __namedExportsOrder,K as default};
