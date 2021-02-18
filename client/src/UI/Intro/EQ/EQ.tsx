import styled, {keyframes} from 'styled-components';

export const colorBar = keyframes`
0% {
  height: 1px;

}
10% {
  height: 3px;

}
20% {
  height: 5px;

}
30% {
  height: 2px;

}
40% {
  height: 7px;

}
50% {
  height: 9px;

}
60% {
  height: 3px;

}
70% {
  height: 8px;

}
80% {
  height: 5px;

}
90% {
  height: 3px;

}
100% {
  height: 1px;

}
`;



export const EqualiserContainer = styled.div`
  height: 10px;
  width: 20px;
  margin: 0 0;
  padding: 0 0 0 0;
  position: relative;
`;

export const Bar = styled.li`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 10px;
  background: ${props => props.theme.colors.eq};
`

export const EqualiserColumn = styled.ol`
  width: 2px;
  float: left;
  margin: 0 1px 0 0;
  padding: 0;
  height: 10px;
  position: relative;
  list-style-type: none;

  &:nth-child(1) ${Bar} {
    animation: color-bar 2s 1s ease-out alternate infinite;
  }

  &:nth-child(2) ${Bar} {
    animation: ${colorBar} 2s 0.5s ease-out alternate infinite;
  }

  &:nth-child(3) ${Bar} {
    animation: ${colorBar} 2s 1.5s ease-out alternate infinite;
  }

  &:nth-child(4) ${Bar} {
    animation: ${colorBar} 2s 0.25s ease-out alternate infinite;
  }

  &:nth-child(5) ${Bar} {
    animation: ${colorBar} 2s 2s ease-out alternate infinite;
  }

  &:last-child ${Bar} {
    margin-right: 0;
  }
`