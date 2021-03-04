import styled from 'styled-components'

export const ModalButton = styled.button`
  outline: none;
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }

  color: white;
  padding: 5px 10px;
  cursor: pointer;
`

export const ButtonText = styled.span`
  transform: skew(0deg, 9deg);

  pointer-events: none;
  cursor: initial;
`

export const ConfirmButton = styled(ModalButton)`
  background: none;
  color: white;
  transition: 0.3s;
  border: none;
  font-size: 1.7rem;
  transform: skew(0deg, -9deg);

  &:hover {
    background: #ececec;
    color: ${(props) => props.theme.colors.font.primary};
  }
`

export const DeclineButton = styled(ModalButton)`
  background: none;
  color: white;
  transition: 0.3s;
  border: none;
  font-size: 1.7rem;
  transform: skew(0deg, -9deg);

  &:hover {
    background: #868686;
    color: ${(props) => props.theme.colors.font.primary};
  }
`
