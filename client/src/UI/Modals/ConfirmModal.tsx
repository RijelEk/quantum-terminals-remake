import styled, { keyframes } from 'styled-components'

export const popup = keyframes`
  0%{
opacity: 0;
transform: translateY(10px)
  }
  100%{
    opacity: 1;
transform: translateY(0)
  }
`

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`

export const Modal = styled.div`
  background-image: url('/public/images/shared/popup.png');
  background-repeat: no-repeat;
  background-size: contain;

  width: 650px;
  height: 325px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  animation: ${popup};
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-duration: 0.3s;
`
