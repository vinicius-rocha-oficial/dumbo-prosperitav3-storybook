import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{d}from"./styled-components.browser.esm-D3-gLipQ.js";/* empty css              */import{t}from"./contextual-D4vCP4YA.js";import{S as D,a as k}from"./index-ClYmvwGD.js";/* empty css                 */const s={default:{large:"18px 80px 18px 16px",medium:"11px 74px 13px 16px",small:"7px 74px 7px 16px",extraLarge:"15px 64px 31px 16px",twoXLarge:"15px 64px 47px 16px",expressive:"13px 64px 13px 16px"},onlyIcon:{large:"16px",medium:"12px",small:"6px",extraLarge:"24px",twoXLarge:"24px",expressive:"14px"},ghost:{large:"18px 80px 18px 16px",medium:"11px 74px 13px 16px",small:"7px 74px 7px 16px",extraLarge:"15px 64px 31px 16px",twoXLarge:"15px 64px 47px 16px",expressive:"13px 64px 13px 16px"}},l={primary:{default:t.buttonPrimary,hover:t.buttonPrimaryHover,active:t.buttonPrimaryActive,disabled:t.buttonDisabled},secondary:{default:t.buttonSecondary,hover:t.buttonSecondaryHover,active:t.buttonSecondaryActive,disabled:t.buttonDisabled},tertiary:{default:"transparent",hover:t.buttonTertiaryHover,active:t.buttonTertiaryActive,disabled:"transparent"},ghost:{default:"transparent",hover:t.backgroundHover,active:t.backgroundActive,disabled:"transparent"},dangerPrimary:{default:"#DA1E28",hover:"#B81A21",active:t.buttonAccentActive,disabled:t.buttonDisabled},dangerTertiary:{default:"transparent",hover:"#DA1E28",active:t.buttonDangerActive,disabled:"transparent"},dangerGhost:{default:"transparent",hover:t.buttonDangerHover,active:t.buttonDangerActive,disabled:t.buttonDisabled}},m={primary:t.textOnColor,tertiary:t.buttonTertiary,disabled:t.textOnColorDisabled,dangerTertiary:"#DA1E28",ghost:t.focus,secondary:t.textOnColor,dangerGhost:t.buttonDangerSecondary,dangerPrimary:t.textOnColor},j={primary:t.textOnColor,tertiary:t.textOnColor,disabled:t.buttonDisabled,dangerTertiary:t.textOnColor,dangerGhost:t.textOnColor,ghost:t.focus,dangerPrimary:t.textOnColor},g=({kind:e,disabled:r})=>r?m.disabled:m[e],q=({kind:e,size:r})=>e==="ghost"||e==="dangerGhost"?s.ghost[r]:s.default[r],L=d.div`
  width: ${({full:e})=>e?"100%":"auto"};
`,b=d.button`
  width:${({width:e})=>e||"100%"};
  background-color: ${({disabled:e,kind:r})=>e?l[r].disabled:l[r].default};
padding: ${({size:e,label:r,fortable:o,noPadding:a})=>o?"8px 55px 8px 10px":a||(r?q:s.onlyIcon[e])};
  display: flex;
  color: ${()=>g};
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
    background-color: ${({disabled:e,kind:r})=>!e&&l[r].active};
  }

  &:hover {
    background-color: ${({disabled:e,kind:r})=>!e&&l[r].hover};
    color: ${({kind:e,disabled:r})=>!r&&j[e]};
  }

  &:focus {
    border: 2px solid ${t.focus};
    background: ${({disabled:e,kind:r})=>!e&&l[r].default};
    color: ${g};
  }

  @media (min-width: 306px) {
    padding: ${({forModal:e})=>e&&"1em 0em 0em 1em"};
    margin:0;
    height:${({dimension:e})=>e&&`${e}px`||"auto"};
  }
`,y=d.img`
  position: ${({label:e})=>e?"absolute":"static"};
  right: 15px;
  width: 20px;
  padding: 0;
  margin: 0 auto;
  font-size: 18px;
  object-fit: none;
`,S=d.div`
  position: ${({label:e})=>e?"absolute":"static"};
  right: 15px;
  display:flex;
  align-items:center;
  justify-content:center;
  height:20px;
  width: 20px;
  padding: 0;
  margin: 0 auto;
  font-size: 18px;`,f=d.span`
  font-family: IBM Plex Sans;
  font-size:${({fortable:e})=>e?"13px":"15px"};
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.16px;
  overflow: hidden;
  word-wrap: break-word;
  align-self: start;
  padding: 0;
`,A=e=>{const{label:r,size:o,kind:a,loading:p,icon:i,disabled:u,forModal:v,full:h,hasIconSvg:T,onClick:x,width:$,fortable:w}=e,C={padding:r?s.default[o]:s.onlyIcon[o],position:"absolute",top:"0",width:"auto",left:"0",right:"0",bottom:"0",borderRadius:"6px"};return n.jsx(L,{full:h,...e,children:p&&!u?n.jsxs(b,{...e,kind:a,size:o,loading:p,style:{border:"0"},children:[n.jsx(f,{...e,kind:a,children:r}),n.jsx(D,{baseColor:t.skeletonElement,highlightColor:t.skeletonBackground,children:n.jsx(k,{count:1,style:C})}),!r&&n.jsx(y,{src:typeof i=="string"?i:"",...e})]}):n.jsxs(b,{...e,forModal:v,kind:a,size:o,onClick:c=>{x&&x(c),c.stopPropagation()},loading:p,width:$,borderStyle:u?a==="tertiary"||a==="dangerTertiary"?`2px solid ${t.buttonDisabled}`:"2px solid transparent":a==="tertiary"?`2px solid ${t.buttonPrimary}`:a==="dangerTertiary"?"2px solid #DA1E28":"2px solid transparent",children:[n.jsx(f,{size:o,kind:a,fortable:w,children:r}),T?n.jsx(S,{...e,children:i}):n.jsx(y,{src:typeof i=="string"?i:"",...e})]})})};A.__docgenInfo={description:"",methods:[],displayName:"Button",props:{kind:{required:!0,tsType:{name:"union",raw:`| "primary"\r
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
| "expressive"`,elements:[{name:"literal",value:'"large"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"small"'},{name:"literal",value:'"extraLarge"'},{name:"literal",value:'"twoXLarge"'},{name:"literal",value:'"expressive"'}]},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},icon:{required:!1,tsType:{name:"union",raw:"ReactNode | string",elements:[{name:"ReactNode"},{name:"string"}]},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},forModal:{required:!1,tsType:{name:"boolean"},description:""},full:{required:!1,tsType:{name:"boolean"},description:""},borderNone:{required:!1,tsType:{name:"boolean"},description:""},hasIconSvg:{required:!1,tsType:{name:"boolean"},description:""},fortable:{required:!1,tsType:{name:"boolean"},description:""},dimension:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},width:{required:!1,tsType:{name:"string"},description:""},noPadding:{required:!1,tsType:{name:"string"},description:""}}};export{A as B,s as p};
