import styled, { keyframes } from 'styled-components'

export const circle = keyframes`
  0%{
    opacity: 0.3;
  
  }
  50%{
    opacity: 1;
  
  }
  100%{
    opacity: 0.3;
  }
`

interface CircleProps {
  type: string
}

export const Circle = styled.div<CircleProps>`
  border: 2px solid ${(props) => (props.type === 'offline' ? 'gray' : 'red')};
  border-radius: 50%;
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;

  color: ${(props) => (props.type === 'offline' ? 'gray' : 'red')};

  cursor: initial;
  pointer-events: none;

  animation: ${circle} linear;
  animation-iteration-count: infinite;
  animation-duration: 1s;
`
