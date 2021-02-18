import styled from 'styled-components';

export const BackgroundPattern = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(../images/dots.png);
  background-repeat: repeat;
  opacity: .1;
  z-index: 1;
  top: 0;
`;

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
`

export const BackgroundLight = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0) 60%);
  border-radius: 50%;
  pointer-events: none;
  transition: 0.1s;
  opacity: .1;
`