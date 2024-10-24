import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{d as t}from"./styled-components.browser.esm-D3-gLipQ.js";/* empty css              */import{t as n}from"./contextual-D4vCP4YA.js";import{l as x}from"./IconsInputLabel-E66WMmAT.js";import"./index-CTjT7uj6.js";const f=t.table`
  font-family: IBM Plex Sans;
  border-collapse: collapse;
  min-width: 10%;
  margin: 0 auto;
`,o=t.tr`
  width: 100%;
  position: relative;
  cursor: pointer;
  outline: 2px solid transparent;
  border-bottom: 1px solid ${n.borderSubtle01};
`,k=t.tr`
  width: 100%;
  position: relative;
  border-bottom: 1px solid ${n.borderSubtle01};
`,v=t.td`
  text-align: start;
  padding: 16px 16px 24px 16px;
  color: ${n.textSecondary};
  font-family: "IBM Plex Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.16px;
`,h=t.th`
  font-family: IBM Plex Sans;
  text-align: start;
  padding: 20px;
  color: ${n.textPrimary};
  font-family: "IBM Plex Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.16px;
  white-space: nowrap;
`,m=t.span`
  visibility: hidden;
`,w=t.input`
  display: none;
  &:checked + ${o} {
    background: ${n.backgroundSelected};

    outline: 2px solid ${n.focus};
  }
  &:checked + ${o} > ${m} {
    visibility: visible;
  }
`,c=({columns:g,rows:b})=>e.jsxs(f,{children:[e.jsx(k,{children:g.map((r,a)=>e.jsx("label",{style:{display:"contents"},children:e.jsx(h,{onClick:r.onClick,children:r.label})},r.key||a))}),b.map((r,a)=>{var l;return e.jsxs("label",{style:{display:"contents"},children:[e.jsx(w,{type:"radio",name:"id",value:r.value}),e.jsxs(o,{tabIndex:0,children:[(l=r.options)==null?void 0:l.map((i,y)=>e.jsx(v,{onClick:i.onClick,children:i==null?void 0:i.label},y)),e.jsx(m,{style:{margin:"0",padding:"0 25px 0 5px"},children:x})]})]},a)})]});c.__docgenInfo={description:"",methods:[],displayName:"StructuredList",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  key?: string;\r
  onClick?: () => void;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"key",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"TypeColumn[]"},description:""},rows:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  options?: TypeOption[];\r
  value?: string;\r
}`,signature:{properties:[{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label?: string;\r
  onClick?: () => void;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"TypeOption[]",required:!1}},{key:"value",value:{name:"string",required:!1}}]}}],raw:"TypeRow[]"},description:""}}};const R={title:"Example/StructuredList",component:c,parameters:{layout:"centered"},tags:["autodocs"]},q=[{label:"Column 1",key:"column1"},{label:"Column 2",key:"column2"},{label:"Column 3",key:"column3"}],C=[{value:"row 1",options:[{label:"Row 1,"},{label:"Row 2"},{label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum."}]},{options:[{label:"Row 1,"},{label:"Row 2"},{label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum."}]},{options:[{label:"Row 1,"},{label:"Row 2"},{label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum."}]}],s={args:{columns:q,rows:C}};var u,d,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    columns: columnsx,
    rows: rowsx
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const N=["Default"];export{s as Default,N as __namedExportsOrder,R as default};
