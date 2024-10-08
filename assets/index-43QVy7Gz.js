import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{t,d}from"./contextual-Cr4fQ3MC.js";/* empty css              */import{S as T,a as w}from"./index-ClYmvwGD.js";/* empty css                 */const o={default:{large:"18px 80px 18px 16px",medium:"11px 74px 11px 16px",small:"7px 74px 7px 16px",extraLarge:"15px 64px 31px 16px",twoXLarge:"15px 64px 47px 16px",expressive:"13px 64px 13px 16px"},onlyIcon:{large:"16px",medium:"12px",small:"8px",extraLarge:"24px",twoXLarge:"24px",expressive:"14px"},ghost:{large:"15px 45px 15px 15px",medium:"11px 45px 11px 15px",small:"7px 45px 7px 15px",extraLarge:"15px 42px 31px 16px",twoXLarge:"15px 64px 47px 16px",expressive:"13px 45px 13px 16px"}},n={primary:{default:t.buttonPrimary,hover:t.buttonPrimaryHover,active:t.buttonPrimaryActive,disabled:t.buttonDisabled},secondary:{default:t.buttonSecondary,hover:t.buttonSecondaryHover,active:t.buttonSecondaryActive,disabled:t.buttonDisabled},tertiary:{default:"transparent",hover:t.buttonTertiaryHover,active:t.buttonTertiaryActive,disabled:"transparent"},ghost:{default:"transparent",hover:t.backgroundHover,active:t.backgroundActive,disabled:"transparent"},dangerPrimary:{default:t.buttonDangerPrimary,hover:t.buttonDangerHover,active:t.buttonAccentActive,disabled:t.buttonDisabled},dangerTertiary:{default:"transparent",hover:t.buttonDangerSecondary,active:t.buttonDangerActive,disabled:"transparent"},dangerGhost:{default:"transparent",hover:t.buttonDangerHover,active:t.buttonDangerActive,disabled:t.buttonDisabled}},u={primary:t.textOnColor,tertiary:t.buttonTertiary,disabled:t.textOnColorDisabled,dangerTertiary:t.buttonDangerSecondary,ghost:t.focus,secondary:t.textOnColor,dangerGhost:t.buttonDangerSecondary,dangerPrimary:t.textOnColor},C={primary:t.textOnColor,tertiary:t.textOnColor,disabled:t.buttonDisabled,dangerTertiary:t.textOnColor,dangerGhost:t.textOnColor,ghost:t.focus,dangerPrimary:t.textOnColor},x=({kind:e,disabled:r})=>r?u.disabled:u[e],D=({kind:e})=>e==="tertiary"||e==="dangerTertiary"?`1px solid ${t.buttonDisabled}`:"0",$=({kind:e})=>e==="tertiary"?`1px solid ${t.buttonTertiary}`:e==="dangerTertiary"?`1px solid ${t.buttonDangerSecondary}`:"0",L=({kind:e,size:r})=>e==="ghost"||e==="dangerGhost"?o.ghost[r]:o.default[r],k=d.div`
  width: ${({full:e})=>e?"100%":"auto"};
`,c=d.button`
  width: 100%;
  background-color: ${({disabled:e,kind:r})=>e?n[r].disabled:n[r].default};
  padding: ${({size:e,label:r})=>r?L:o.onlyIcon[e]};
  display: flex;
  color: ${()=>x};
  justify-content: ${({forModal:e})=>e?"flex-start":"start"};
  position: relative;
  outline: 0;
  margin: 0 auto;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  border: ${({disabled:e})=>e?D:$};
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  box-sizing: border-box;
  &:active {
    background-color: ${({disabled:e,kind:r})=>!e&&n[r].active};
  }

  &:hover {
    background-color: ${({disabled:e,kind:r})=>!e&&n[r].hover};
    color: ${({kind:e,disabled:r})=>!r&&C[e]};
  }
  border: 2px solid transparent;
  &:focus {
    border: 2px solid ${t.focus};
    background: ${({disabled:e,kind:r})=>!e&&n[r].default};
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
  align-self: start;
  padding: 0;
`,S=e=>{const{label:r,size:i,kind:l,loading:s,icon:p,disabled:b,type:y,forModal:v,full:f}=e,h={padding:r?o.default[i]:o.onlyIcon[i],position:"absolute",top:"0",width:"auto",left:"0",right:"0",bottom:"0",borderRadius:"6px"};return a.jsx(k,{full:f,...e,children:s&&!b?a.jsxs(c,{...e,kind:l,size:i,loading:s,style:{border:"0"},children:[a.jsx(m,{...e,kind:l,children:r}),a.jsx(T,{baseColor:t.skeletonElement,highlightColor:t.skeletonBackground,children:a.jsx(w,{count:1,style:h})}),!r&&a.jsx(g,{src:p,...e})]}):a.jsxs(c,{forModal:v,...e,kind:l,size:i,loading:s,type:y,children:[a.jsx(m,{...e,kind:l,children:r}),a.jsx(g,{src:p,...e})]})})};S.__docgenInfo={description:"",methods:[],displayName:"Button",props:{kind:{required:!0,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "tertiary"
| "ghost"
| "dangerPrimary"
| "dangerTertiary"
| "dangerGhost"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"ghost"'},{name:"literal",value:'"dangerPrimary"'},{name:"literal",value:'"dangerTertiary"'},{name:"literal",value:'"dangerGhost"'}]},description:""},size:{required:!0,tsType:{name:"union",raw:`| "large"
| "medium"
| "small"
| "extraLarge"
| "twoXLarge"
| "expressive"`,elements:[{name:"literal",value:'"large"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"small"'},{name:"literal",value:'"extraLarge"'},{name:"literal",value:'"twoXLarge"'},{name:"literal",value:'"expressive"'}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},forModal:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},full:{required:!1,tsType:{name:"boolean"},description:""}}};export{S as B,o as p};
