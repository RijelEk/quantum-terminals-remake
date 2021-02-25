import styled, { keyframes } from 'styled-components'

export const blink = keyframes`

0% {
  opacity: .5;
}
100% {
  opacity: 1;
}
`

interface TimerProps {
  color: string
}

export const Timer = styled.div<TimerProps>`
  font-size: 35px;
  color: ${(props) =>
    props.normal
      ? props.theme.colors.timer.normal
      : props.finish
      ? props.theme.colors.timer.finish
      : props.idle
      ? props.theme.colors.timer.idle
      : props.theme.colors.timer.normal};

  ${(props) =>
    props.finihs &&
    `
    animation: ${blink} linear;
    animation-duration: .5s;
    aniamtion-iteration-count: infinite;
  `}

  cursor: initial;
  pointer-events: none;
`
