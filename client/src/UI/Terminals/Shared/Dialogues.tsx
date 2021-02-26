import styled, { keyframes } from 'styled-components'

export const DialogueSlideIn = keyframes`

0% {
  opacity:0;
  transform: translateX(-20px);
}
100% {
  opacity: 1;
  transform: translateX(0);
}
`

/* Characters */
export const DialogueLasleyCharacter = styled.div`
  background-image: url('/public/images/shared/Lasley.png');
  background-repeat: no-repeat;
  background-size: contain;
  width: 250px;
  height: 310px;
  right: 49px;
  bottom: 94px;
  position: absolute;
  opacity: 0;

  animation: ${DialogueSlideIn};
  animation-duration: 0.4s;
  animation-delay: 0;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`

/* UI */

export const DialoguePlaceholder = styled.div`
  background-image: url('/public/images/shared/dialogue.png');
  background-repeat: no-repeat;
  background-size: contain;
  width: 855px;
  height: 225px;
  position: relative;
  position: absolute;
  bottom: -70px;
  opacity: 0;

  animation: ${DialogueSlideIn};
  animation-duration: 0.4s;
  animation-delay: 0.1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`

export const DialogueButton = styled.button`
  position: fixed;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.buttonDialogue};
  color: ${(props) => props.theme.colors.font.primary};
  display: flex;
  justify-content: center;
  transition: 0.3s;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border: 2px solid #7b7664ba;
  align-items: center;
  font-size: 2.4rem;
  bottom: 23px;
  right: 54px;
  outline: none;

  &:active {
    outline: none;
  }
  &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(1.1) translateY(-2px) rotate3d(-0.001, 0.01, 0, 26deg);
    background-color: #ad9980;
  }
`

export const DialogueName = styled.h3`
  position: fixed;
  right: 155px;
  top: 9px;
  color: #dbe0e0;
  font-size: 2.8rem;
  letter-spacing: 2px;
  font-weight: 800;
  cursor: initial;
  pointer-events: none;
  transform: rotate(-1deg) skew(-17deg, -2deg);
  background: #3a3539;
  padding: 1px 15px;
`

export const DialogueText = styled.p`
  color: #f1f1f1;
  font-size: 1.7rem;
  cursor: pointer;
  width: 650px;
  position: fixed;
  top: 73px;
  left: 16%;
  letter-spacing: 1px;
`
