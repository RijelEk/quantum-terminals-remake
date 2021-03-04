import styled from 'styled-components'

type TypographyPropTypes = {
  size?: string
  color?: string
  weight?: string
}
export const Paragraph = styled.p<TypographyPropTypes>`
  font-size: ${(props) => (props.size ? props.size : '1.4rem')};
  color: ${(props) =>
    props.color
      ? props.color
      : props.fade
      ? props.theme.colors.font.fade
      : props.bright
      ? props.theme.colors.background
      : props.theme.colors.font.primary};

  ${(props) =>
    props.center &&
    `
      text-align:center;
   `}
  pointer-events: none;
  cursor: initial;
`

export const Header = styled.h1<TypographyPropTypes>`
  font-size: ${(props) => (props.size ? props.size : '3rem')};
  font-weight: ${(props) => (props.weight ? props.weight : '600')};
  color: ${(props) =>
    props.color
      ? props.color
      : props.bright
      ? props.theme.colors.background
      : props.theme.colors.font.primary};
  pointer-events: none;
  cursor: initial;
`

export const Header2 = styled.h2<TypographyPropTypes>`
  font-size: ${(props) => (props.size ? props.size : '2.1rem')};
  font-weight: ${(props) => (props.weight ? props.weight : '600')};
  color: ${(props) =>
    props.color
      ? props.color
      : props.bright
      ? props.theme.colors.background
      : props.theme.colors.font.primary};
  pointer-events: none;
  cursor: initial;
`

export const Header3 = styled.h2<TypographyPropTypes>`
  font-size: ${(props) => (props.size ? props.size : '1.8rem')};
  font-weight: ${(props) => (props.weight ? props.weight : '500')};
  color: ${(props) =>
    props.color
      ? props.color
      : props.bright
      ? props.theme.colors.background
      : props.theme.colors.font.primary};

  pointer-events: none;
  cursor: initial;
`
