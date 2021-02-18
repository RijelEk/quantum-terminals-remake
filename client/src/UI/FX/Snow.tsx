import styled, {keyframes} from 'styled-components';

export const SnowFallX = keyframes`

0% {
  opacity: .5;
}
100% {
  left: 100%;
  opacity: 1;
}
`;

export const SnowFallY = keyframes`

0% {
  opacity: .5;
}
100% {
  top: 100%;
  opacity: 1;
}
`;

export const SnowWrapper = styled.div`
position: fixed;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    z-index: -1;
    top: 0;
    left:0;
`;

export const SnowFlake = styled.i`
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 5px;
    height: 5px;
    background-color: black;
    border-radius: 50%;
    animation: ${SnowFallX} 1s infinite linear, ${SnowFallY} 1.5s infinite linear;

    &:nth-of-type(2) {
      animation-delay: 1.5s, 1.5s;
      animation-duration: .9s, 1.4s;
    }
    &:nth-of-type(3) {
      animation-delay: 1.2s, 1.2s;
      animation-duration: .8s, 1.3s;
    }
    &:nth-of-type(4) {
      animation-delay: .7s, .7s;
      animation-duration: 1.1s, 1.6s;
    }
    &:nth-of-type(5) {
      animation-delay: .8s, .8s;
      animation-duration: .8s, 1.8s;
    }
`