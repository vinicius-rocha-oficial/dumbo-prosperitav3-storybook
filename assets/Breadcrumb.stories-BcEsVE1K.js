import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{t}from"./contextual-D4vCP4YA.js";import{d as a}from"./styled-components.browser.esm-D3-gLipQ.js";import{T as S}from"./index-CKOFa-r3.js";import{r as i}from"./index-CTjT7uj6.js";/* empty css              */const M=a.div`
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  flex-direction: row;
  gap: 9px;
  position: relative;
`,$=a.p`
  margin: 0;
  padding: 0;
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.16px;
`,q=a.span`
  margin: 0;
  padding: 0;
  font-size: 19px;
  font-style: normal;
  font-weight: bolder;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: ${t.textPrimary};
`,z=a.div`
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: bolder;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: ${t.textPrimary};
  position: absolute;
  top: 100%;
  min-width: 150px;
  margin: 0 auto;
  text-align: center;
  margin: 8px 0 0 0;
  padding: 0;
  background: ${t.layer01};
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 4;
`,L=a.p`
  position: relative;
  width: 100%;
  color: ${t.textSecondary};
  text-overflow: ellipsis;
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.16px;
  list-style: none;
  margin: 0;
  box-sizing: border-box;
  border: 2px solid transparent;
  cursor: pointer;
  padding: 9px;
  outline: none;
  &:focus {
    border: 2px solid ${t.focus};
    outline: none;
  }
  &:hover {
    background: ${t.layerHover01};
  }
`,P=a.p`
  padding: 0 3px;
  border: 1px solid transparent;
  outline: none;
  &:focus {
    padding: 0 3px;
    border: 1px solid ${t.focus};
  }
`,k=O=>{const{overflow:D,crumbsOptions:p,startHiddenIndex:m,endHiddenIndex:d}=O,[g,b]=i.useState(!1),B=p.slice(m,d),x=i.useRef(null),f=i.useRef(null),l=i.useRef(null),h=e=>{x.current&&!x.current.contains(e.target)&&l.current&&!l.current.contains(e.target)&&b(!1)},T=()=>{b(e=>!e)};i.useEffect(()=>(document.addEventListener("mousedown",h),()=>{document.removeEventListener("mousedown",h)}),[]),i.useEffect(()=>{l&&f.current&&f.current.focus()},[g]);const o=p.map((e,r)=>D?r===m-1?[{crumb:e.crumb,onClick:e.onClick},{crumb:n.jsxs(n.Fragment,{children:[n.jsx(S,{align:"top",size:"medium",label:"Options",children:n.jsx(P,{tabIndex:0,style:{margin:"0",textDecoration:"none"},onClick:T,ref:l,children:"..."})}),g&&n.jsx(z,{ref:x,children:B.map((s,E)=>n.jsx(L,{tabIndex:0,onClick:s.onClick,style:{textDecoration:"none"},ref:E===0?f:null,children:s.crumb}))})]})}]:r===d?[e,p[d+1]]:r<m||r>d+1?e:null:e).flat().filter(Boolean);return n.jsx(M,{children:o.map((e,r)=>n.jsxs(n.Fragment,{children:[n.jsx($,{style:{cursor:o.length-1!==r?"pointer":"text",color:o.length-1!==r?t.focus:""},onMouseEnter:s=>{o.length-1!==r&&(s.currentTarget.style.textDecoration="underline")},onMouseLeave:s=>{o.length-1!==r&&(s.currentTarget.style.textDecoration="none")},children:n.jsx("p",{style:{margin:"0",padding:"0"},onClick:e==null?void 0:e.onClick,children:e==null?void 0:e.crumb})}),o.length-1!==r&&n.jsx(q,{children:"/"})]}))})};k.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{overflow:{required:!1,tsType:{name:"boolean"},description:""},crumbsOptions:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  onClick?: () => void;\r
  crumb: string;\r
}`,signature:{properties:[{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"crumb",value:{name:"string",required:!0}}]}}],raw:"typeCrumbs[]"},description:""},startHiddenIndex:{required:!0,tsType:{name:"number"},description:""},endHiddenIndex:{required:!0,tsType:{name:"number"},description:""}}};const J={title:"Example/Breadcrumb",component:k,parameters:{layout:"centered"},tags:["autodocs"]},H=[{crumb:"Login"},{crumb:"Home"},{crumb:"BreadCrumb 2",onClick:()=>alert("BreadCrumb 2")},{crumb:"Dash",onClick:()=>alert("Dash")},{crumb:"Settings"},{crumb:"Profile"}],c={args:{crumbsOptions:H,startHiddenIndex:2,endHiddenIndex:3}},u={args:{crumbsOptions:H,startHiddenIndex:2,endHiddenIndex:3,overflow:!0}};var y,v,w;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    crumbsOptions: Crumbs,
    startHiddenIndex: 2,
    endHiddenIndex: 3
  }
}`,...(w=(v=c.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var C,I,j;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    crumbsOptions: Crumbs,
    startHiddenIndex: 2,
    endHiddenIndex: 3,
    overflow: true
  }
}`,...(j=(I=u.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};const K=["Default","Oveflow"];export{c as Default,u as Oveflow,K as __namedExportsOrder,J as default};
