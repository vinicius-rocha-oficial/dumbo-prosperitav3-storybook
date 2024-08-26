import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{d}from"./styled-components.browser.esm-D3-gLipQ.js";/* empty css              */import{t as r}from"./contextual-D4vCP4YA.js";import{S as T,a as w}from"./index-ClYmvwGD.js";/* empty css                 */const o={default:{large:"18px 80px 18px 16px",medium:"11px 74px 13px 16px",small:"7px 74px 7px 16px",extraLarge:"15px 64px 31px 16px",twoXLarge:"15px 64px 47px 16px",expressive:"13px 64px 13px 16px"},onlyIcon:{large:"16px",medium:"12px",small:"8px",extraLarge:"24px",twoXLarge:"24px",expressive:"14px"},ghost:{large:"15px 45px 15px 15px",medium:"11px 45px 11px 15px",small:"7px 45px 7px 15px",extraLarge:"15px 42px 31px 16px",twoXLarge:"15px 64px 47px 16px",expressive:"13px 45px 13px 16px"}},n={primary:{default:r.buttonPrimary,hover:r.buttonPrimaryHover,active:r.buttonPrimaryActive,disabled:r.buttonDisabled},secondary:{default:r.buttonSecondary,hover:r.buttonSecondaryHover,active:r.buttonSecondaryActive,disabled:r.buttonDisabled},tertiary:{default:"transparent",hover:r.buttonTertiaryHover,active:r.buttonTertiaryActive,disabled:"transparent"},ghost:{default:"transparent",hover:r.backgroundHover,active:r.backgroundActive,disabled:"transparent"},dangerPrimary:{default:r.buttonDangerPrimary,hover:r.buttonDangerHover,active:r.buttonAccentActive,disabled:r.buttonDisabled},dangerTertiary:{default:"transparent",hover:r.buttonDangerSecondary,active:r.buttonDangerActive,disabled:"transparent"},dangerGhost:{default:"transparent",hover:r.buttonDangerHover,active:r.buttonDangerActive,disabled:r.buttonDisabled}},u={primary:r.textOnColor,tertiary:r.buttonTertiary,disabled:r.textOnColorDisabled,dangerTertiary:r.buttonDangerSecondary,ghost:r.focus,secondary:r.textOnColor,dangerGhost:r.buttonDangerSecondary,dangerPrimary:r.textOnColor},$={primary:r.textOnColor,tertiary:r.textOnColor,disabled:r.buttonDisabled,dangerTertiary:r.textOnColor,dangerGhost:r.textOnColor,ghost:r.focus,dangerPrimary:r.textOnColor},x=({kind:e,disabled:t})=>t?u.disabled:u[e],C=({kind:e})=>e==="tertiary"||e==="dangerTertiary"?`1px solid ${r.buttonDisabled}`:"0",D=({kind:e})=>e==="tertiary"?`1px solid ${r.buttonTertiary}`:e==="dangerTertiary"?`1px solid ${r.buttonDangerSecondary}`:"0",L=({kind:e,size:t})=>e==="ghost"||e==="dangerGhost"?o.ghost[t]:o.default[t],k=d.div`
  width: ${({full:e})=>e?"100%":"auto"};
`,c=d.button`
  width: 100%;
  background-color: ${({disabled:e,kind:t})=>e?n[t].disabled:n[t].default};
  padding: ${({size:e,label:t})=>t?L:o.onlyIcon[e]};
  display: flex;
  color: ${()=>x};
  justify-content: ${({forModal:e})=>e?"flex-start":"start"};
  position: relative;
  outline: 0;
  margin: 0 auto;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  border: ${({disabled:e})=>e?C:D};
  align-items: center;
  align-self: stretch;
  border-radius: ${({borderNone:e})=>e?"0px":"8px"};
  box-sizing: border-box;
  &:active {
    background-color: ${({disabled:e,kind:t})=>!e&&n[t].active};
  }

  &:hover {
    background-color: ${({disabled:e,kind:t})=>!e&&n[t].hover};
    color: ${({kind:e,disabled:t})=>!t&&$[e]};
  }
  border: 2px solid transparent;
  &:focus {
    border: 2px solid ${r.focus};
    background: ${({disabled:e,kind:t})=>!e&&n[t].default};
    color: ${x};
  }

  @media (max-width: 576px) {
    padding: ${({forModal:e})=>e&&"1em"};
    font-size: 9px;
  }
  @media (max-width: 776px) {
    padding: ${({forModal:e})=>e&&"1.6em"};
  }
  @media (min-width: 876px) {
    padding: ${({forModal:e})=>e&&"1.7em"};
  }
`,g=d.img`
  position: ${({label:e})=>e?"absolute":"static"};
  right: 15px;
  width: 20px;
  padding: 0;
  margin: 0 auto;
  font-size: 18px;
`,m=d.span`
  font-family: IBM Plex Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.16px;
  overflow: hidden;
  word-wrap: break-word;
  text-wrap: nowrap;
  align-self: start;
  padding: 0;
`,S=e=>{const{label:t,size:i,kind:l,loading:s,icon:p,disabled:b,type:y,forModal:v,full:f}=e,h={padding:t?o.default[i]:o.onlyIcon[i],position:"absolute",top:"0",width:"auto",left:"0",right:"0",bottom:"0",borderRadius:"6px"};return a.jsx(k,{full:f,...e,children:s&&!b?a.jsxs(c,{...e,kind:l,size:i,loading:s,style:{border:"0"},children:[a.jsx(m,{...e,kind:l,children:t}),a.jsx(T,{baseColor:r.skeletonElement,highlightColor:r.skeletonBackground,children:a.jsx(w,{count:1,style:h})}),!t&&a.jsx(g,{src:p,...e})]}):a.jsxs(c,{forModal:v,...e,kind:l,size:i,loading:s,type:y,children:[a.jsx(m,{...e,kind:l,children:t}),a.jsx(g,{src:p,...e})]})})};S.__docgenInfo={description:"",methods:[],displayName:"Button",props:{kind:{required:!0,tsType:{name:"union",raw:`| "primary"\r
| "secondary"\r
| "tertiary"\r
| "ghost"\r
| "dangerPrimary"\r
| "dangerTertiary"\r
| "dangerGhost"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"ghost"'},{name:"literal",value:'"dangerPrimary"'},{name:"literal",value:'"dangerTertiary"'},{name:"literal",value:'"dangerGhost"'}]},description:""},size:{required:!0,tsType:{name:"union",raw:`| "large"\r
| "medium"\r
| "small"\r
| "extraLarge"\r
| "twoXLarge"\r
| "expressive"`,elements:[{name:"literal",value:'"large"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"small"'},{name:"literal",value:'"extraLarge"'},{name:"literal",value:'"twoXLarge"'},{name:"literal",value:'"expressive"'}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},forModal:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},full:{required:!1,tsType:{name:"boolean"},description:""},borderNone:{required:!1,tsType:{name:"boolean"},description:""}}};export{S as B,o as p};
