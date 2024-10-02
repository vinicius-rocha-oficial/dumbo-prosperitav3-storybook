import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{d}from"./styled-components.browser.esm-D3-gLipQ.js";/* empty css              */import{t}from"./contextual-D4vCP4YA.js";import{S as w,a as $}from"./index-ClYmvwGD.js";/* empty css                 */const l={default:{large:"18px 80px 18px 16px",medium:"11px 74px 13px 16px",small:"7px 74px 7px 16px",extraLarge:"15px 64px 31px 16px",twoXLarge:"15px 64px 47px 16px",expressive:"13px 64px 13px 16px"},onlyIcon:{large:"16px",medium:"12px",small:"8px",extraLarge:"24px",twoXLarge:"24px",expressive:"14px"},ghost:{large:"15px 45px 15px 15px",medium:"11px 45px 11px 15px",small:"7px 45px 7px 15px",extraLarge:"15px 42px 31px 16px",twoXLarge:"15px 64px 47px 16px",expressive:"13px 45px 13px 16px"}},i={primary:{default:t.buttonPrimary,hover:t.buttonPrimaryHover,active:t.buttonPrimaryActive,disabled:t.buttonDisabled},secondary:{default:t.buttonSecondary,hover:t.buttonSecondaryHover,active:t.buttonSecondaryActive,disabled:t.buttonDisabled},tertiary:{default:"transparent",hover:t.buttonTertiaryHover,active:t.buttonTertiaryActive,disabled:"transparent"},ghost:{default:"transparent",hover:t.backgroundHover,active:t.backgroundActive,disabled:"transparent"},dangerPrimary:{default:t.buttonDangerPrimary,hover:t.buttonDangerHover,active:t.buttonAccentActive,disabled:t.buttonDisabled},dangerTertiary:{default:"transparent",hover:t.buttonDangerSecondary,active:t.buttonDangerActive,disabled:"transparent"},dangerGhost:{default:"transparent",hover:t.buttonDangerHover,active:t.buttonDangerActive,disabled:t.buttonDisabled}},u={primary:t.textOnColor,tertiary:t.buttonTertiary,disabled:t.textOnColorDisabled,dangerTertiary:t.buttonDangerSecondary,ghost:t.focus,secondary:t.textOnColor,dangerGhost:t.buttonDangerSecondary,dangerPrimary:t.textOnColor},C={primary:t.textOnColor,tertiary:t.textOnColor,disabled:t.buttonDisabled,dangerTertiary:t.textOnColor,dangerGhost:t.textOnColor,ghost:t.focus,dangerPrimary:t.textOnColor},c=({kind:e,disabled:r})=>r?u.disabled:u[e],D=({kind:e,size:r})=>e==="ghost"||e==="dangerGhost"?l.ghost[r]:l.default[r],S=d.div`
  width: ${({full:e})=>e?"100%":"auto"};
`,g=d.button`
  width: 100%;
  background-color: ${({disabled:e,kind:r})=>e?i[r].disabled:i[r].default};
  padding: ${({size:e,label:r})=>r?D:l.onlyIcon[e]};
  display: flex;
  color: ${()=>c};
  justify-content: ${({forModal:e})=>e?"flex-start":"start"};
  position: relative;
  outline: 0;
  margin: 0 auto;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  align-items: center;
  align-self: stretch;
  border-radius: ${({borderNone:e})=>e?"0px":"8px"};
  border: ${({borderStyle:e})=>e||"1px solid transparent"};
  box-sizing: border-box;

  &:active {
    background-color: ${({disabled:e,kind:r})=>!e&&i[r].active};
  }

  &:hover {
    background-color: ${({disabled:e,kind:r})=>!e&&i[r].hover};
    color: ${({kind:e,disabled:r})=>!r&&C[e]};
  }

  &:focus {
    border: 2px solid ${t.focus};
    background: ${({disabled:e,kind:r})=>!e&&i[r].default};
    color: ${c};
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
`,m=d.img`
  position: ${({label:e})=>e?"absolute":"static"};
  right: 15px;
  width: 20px;
  padding: 0;
  margin: 0 auto;
  font-size: 18px;
 object-fit: none;

  
`,k=d.div`
  position: ${({label:e})=>e?"absolute":"static"};
  right: 15px;
  width: 20px;
  padding: 0;
  margin: 0 auto;
  font-size: 18px;`,b=d.span`
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
`,j=e=>{const{label:r,size:s,kind:n,loading:p,icon:o,disabled:x,type:y,forModal:v,full:f,hasIconSvg:h}=e,T={padding:r?l.default[s]:l.onlyIcon[s],position:"absolute",top:"0",width:"auto",left:"0",right:"0",bottom:"0",borderRadius:"6px"};return a.jsx(S,{full:f,...e,children:p&&!x?a.jsxs(g,{...e,kind:n,size:s,loading:p,style:{border:"0"},children:[a.jsx(b,{...e,kind:n,children:r}),a.jsx(w,{baseColor:t.skeletonElement,highlightColor:t.skeletonBackground,children:a.jsx($,{count:1,style:T})}),!r&&a.jsx(m,{src:typeof o=="string"?o:"",...e})]}):a.jsxs(g,{forModal:v,...e,kind:n,size:s,loading:p,type:y,borderStyle:x?n==="tertiary"||n==="dangerTertiary"?`2px solid ${t.buttonDisabled}`:"2px solid transparent":n==="tertiary"?`2px solid ${t.buttonPrimary}`:n==="dangerTertiary"?`2px solid ${t.buttonDangerSecondary}`:"2px solid transparent",children:[a.jsx(b,{...e,kind:n,children:r}),h?a.jsx(k,{...e,children:o}):a.jsx(m,{src:typeof o=="string"?o:"",...e})]})})};j.__docgenInfo={description:"",methods:[],displayName:"Button",props:{kind:{required:!0,tsType:{name:"union",raw:`| "primary"\r
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
| "expressive"`,elements:[{name:"literal",value:'"large"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"small"'},{name:"literal",value:'"extraLarge"'},{name:"literal",value:'"twoXLarge"'},{name:"literal",value:'"expressive"'}]},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},icon:{required:!1,tsType:{name:"union",raw:"ReactNode | string",elements:[{name:"ReactNode"},{name:"string"}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},forModal:{required:!1,tsType:{name:"boolean"},description:""},full:{required:!1,tsType:{name:"boolean"},description:""},borderNone:{required:!1,tsType:{name:"boolean"},description:""},hasIconSvg:{required:!1,tsType:{name:"boolean"},description:""}}};export{j as B,l as p};
