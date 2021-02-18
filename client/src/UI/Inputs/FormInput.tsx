import styled from 'styled-components';

export const Input = styled.input`
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 2px;
    font-size: 10px;
    outline: none;
    border: none;
    border-bottom: 1px solid ${props => props.theme.colors.border};
    width: 100%;
    background: none;
    padding: 5px;
    text-transform: uppercase;

    &:active,focus{
      background:${props => props.theme.colors.border};
      color: 'white';
    }
`

export const Label = styled.label`
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 2px;
`