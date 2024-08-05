import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{T as r}from"./index-DiLBhSFZ.js";import"./index-CTjT7uj6.js";/* empty css              */import"./contextual-Cr4fQ3MC.js";import"./IconsInputLabel-DiahCgGh.js";const u={title:"Example/Tile",component:r,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{variations:"radio",label:"Titulo",textlabel:"Label Titulo",width:"350px",labelexpandable:"Exemplo text"}},t={render:p=>e.jsx(e.Fragment,{children:e.jsxs("div",{style:{display:"flex",justifyContent:"center",width:"100%",flexWrap:"wrap",margin:"0",padding:"0",gap:"10px 50px"},children:[e.jsx("div",{children:e.jsx(r,{variations:"radio",name:"payment",label:"PIX",width:"100%",textlabel:"Pagamento instantâneo"})}),e.jsx("div",{children:e.jsx(r,{variations:"radio",name:"payment",label:"TED",width:"100%",textlabel:"Transferência eletrônica"})}),e.jsx("div",{children:e.jsx(r,{variations:"radio",name:"payment",label:"BOLETO SIMPLES",width:"100%",textlabel:"Boleto bancário"})})]})})};var n,i,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variations: "radio",
    label: "Titulo",
    textlabel: "Label Titulo",
    width: "350px",
    labelexpandable: \`Exemplo text\`
  }
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var o,s,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <>\r
      <div style={{
      display: "flex",
      justifyContent: "center",
      width: "100%",
      flexWrap: "wrap",
      margin: "0",
      padding: "0",
      gap: "10px 50px"
    }}>\r
        <div>\r
          <Tile variations="radio" name="payment" label={"PIX"} width="100%" textlabel={"Pagamento instantâneo"} />\r
        </div>\r
        <div>\r
          <Tile variations="radio" name="payment" label={"TED"} width="100%" textlabel={"Transferência eletrônica"} />\r
        </div>\r
        <div>\r
          <Tile variations="radio" name="payment" label={"BOLETO SIMPLES"} width="100%" textlabel={"Boleto bancário"} />\r
        </div>\r
      </div>\r
    </>
}`,...(d=(s=t.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const T=["tile","group"];export{T as __namedExportsOrder,u as default,t as group,a as tile};
