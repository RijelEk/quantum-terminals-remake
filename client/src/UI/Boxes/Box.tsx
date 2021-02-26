import styled from 'styled-components'

interface IBox {
  top?: string | number
  left?: string | number
  bottom?: string | number
  w?: string
  h?: string
  disp?: string
  jc?: string
  ai?: string
  fd?: string
  center?: boolean
  mt?: string | number
  mb?: string | number
  mr?: string | number
  ml?: string | number
  pr?: string | number
  pl?: string | number
  pt?: string | number
  pb?: string | number
  float?: string
  position?: string
  hover?: boolean
  overflowYAuto?: boolean
  overflowXHidden?: boolean
  backgroundSize?: string
  backgroundRepeat?: string
  backgroundPosition?: string
  backgroundSrc?: string
  margin?: string
  overflow?: string
  zIndex?: number
  transform?: string
}

export const Box = styled.div<IBox>`
  width: ${(props) => (props.w ? props.w : 'auto')};
  height: ${(props) => (props.h ? props.h : 'auto')};
  display: ${(props) => (props.disp ? props.disp : 'block')};
  ${(props) =>
    props.blur &&
    `
    filter: blur(1px);
    `};
  ${(props) =>
    props.transform &&
    `
    transform: ${props.transform};
    `};
  ${(props) =>
    props.top &&
    `
   top: ${props.top};
    `};
  ${(props) =>
    props.bottom &&
    `
   bottom: ${props.bottom};
    `};
  ${(props) =>
    props.left &&
    `
   left: ${props.left};
    `};
  ${(props) =>
    props.zIndex &&
    `
     z-index: ${props.zIndex};
    `};
  ${(props) =>
    props.margin &&
    `
     margin: ${props.margin};
    `};
  ${(props) =>
    props.backgroundSize &&
    `
      background-size: ${props.backgroundSize};
    `};
  ${(props) =>
    props.backgroundRepeat &&
    `
      background-repeat: ${props.backgroundRepeat};
    `};
  ${(props) =>
    props.backgroundPosition &&
    `
      background-position: ${props.backgroundPosition};
    `};
  ${(props) =>
    props.backgroundSrc &&
    `
      background-image: url("${props.backgroundSrc}");
    `};
  ${(props) =>
    props.position &&
    `
       position: ${props.position}
    `};
  ${(props) =>
    props.overflowYAuto &&
    `
        overflow-y: auto;
    `};
  ${(props) =>
    props.overflowXHidden &&
    `
        overflow-x: hidden;
    `};
  ${(props) =>
    props.mt &&
    `
        margin-top:  ${props.mt}px;
    `};
  ${(props) =>
    props.mb &&
    `
         margin-bottom:  ${props.mb}px;
    `};
  ${(props) =>
    props.jc &&
    `
        justify-content:  ${props.jc};
    `};
  ${(props) =>
    props.ai &&
    `
        align-items:  ${props.ai};
    `};
  ${(props) =>
    props.center &&
    `
        margin: 0 auto;
    `};
  ${(props) =>
    props.fd &&
    `
     flex-direction:  ${props.fd};
     `};
  ${(props) =>
    props.mr &&
    `
        margin-right:  ${props.mr}px;
    `};
  ${(props) =>
    props.ml &&
    `
        margin-left:  ${props.ml}px;
    `};
  ${(props) =>
    props.pl &&
    `
     padding-left:  ${props.pl}px;
    `};
  ${(props) =>
    props.pr &&
    `
     padding-right:  ${props.pr}px;
    `};
  ${(props) =>
    props.pt &&
    `
     padding-top:  ${props.pt}px;
    `};
  ${(props) =>
    props.pb &&
    `
     padding-bottom:  ${props.pb}px;
    `};
  ${(props) =>
    props.float &&
    `
        float: ${props.float};
   `};
  ${(props) =>
    props.overflow &&
    `
    overflow: ${props.overflow};
   `};
  ${(props) =>
    props.background &&
    `
        background: ${props.float};
   `};
`
