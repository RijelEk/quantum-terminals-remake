import styled from 'styled-components'

export const Board = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: repeat(6, 80px);
  grid-template-columns: repeat(5, 80px);
`

export const Cell = styled.div`
  width: 80px;
  height: 80px;
  background: ${(props) => props.theme.colors.boardGame};
  font-size: 20px;
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.borderBoardgame};
`

export const Decorator = styled.div`
  position: absolute;
  font-size: 13px;
  color: ${(props) => props.theme.colors.background};
  pointer-events: none;
  cursor: initial;
`

export const DecoratorCenter = styled(Decorator)`
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  opacity: 0.3;
`

export const Decorator1 = styled(Decorator)`
  top: 5px;
  right: 5px;
`

export const Decorator2 = styled(Decorator)`
  top: 5px;
  left: 5px;
`

export const Decorator3 = styled(Decorator)`
  bottom: 5px;
  left: 5px;
`

export const Decorator4 = styled(Decorator)`
  bottom: 5px;
  right: 5px;
`
