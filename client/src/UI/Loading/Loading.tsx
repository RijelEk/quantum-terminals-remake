import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Box } from "@/UI/Boxes/Box";

export const loading = keyframes`
  0%{
    background: none;
  
  }
  5%{
    background: #292929;
  
  }
  95%{
    background: none;
   
  }
  100%{
    background: none;

  }
`;


export const Wrapper = styled.div`
  width: 85px;
  height: 85px;
  transform: rotate(45deg);
  display: flex;
  flex-wrap: wrap;
`

interface SquareProps{
  delay?: string;
};

export const Square = styled.div<SquareProps>`
    width: 40px;
    height: 40px;
    animation: ${loading} linear ;
    animation-iteration-count: infinite;
    animation-duration: 2s ;
    transition: .3s;

    animation-delay: ${props => props.delay ? props.delay : "0"};

    &:nth-of-type(odd){
       margin-right: 5px;
    }
`;

export const Text = styled.div`
 margin-top: 40px;
  
  h3{
    color: #292929;
    letter-spacing: 2px;
  }
`



export default function Loading() {
  return (
    <Box center>
     <Wrapper>
      <Square />
      <Square delay="0.7s" />
      <Square delay="1s" />
      <Square delay="1.5s" />
      </Wrapper>
      <Box>
        <Text>
          <h3>
            Loading... 
          </h3>
      </Text>
      </Box>
    </Box>
  
  )
}