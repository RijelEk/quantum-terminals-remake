import styled from 'styled-components';

export const Board = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 60px);
  grid-template-columns: repeat(5, 60px);
`;

export const Cell = styled.div`
  width: 60px;
  height: 60px;
  background: #1a1a1a;
  border: 1px solid white;

  ${props => props.active && (
  `
  background: red!important;
  `
)}
    ${props => props.first && (
  `
  background: green!important;
  `
  )}
  color: white;
  font-size:20px;
`