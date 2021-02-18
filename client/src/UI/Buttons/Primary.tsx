import React from 'react';
import styled from 'styled-components';

export const ButtonText = styled.p`
  text-decoration: none;
  cusor: pointer;
  z-index: 1;
  color:white;
  position: absolute;
  text-align:center;
  letter-spacing: 5px;
  font-size: 1.4rem;
  text-shadow:
    1px 0px 0px rgba(35, 231, 214, 1),
    -1px 0px 0px rgba(210, 17, 50, 1);
`;


export const PrimaryButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height:30px;
  background: #131416;
  color: white;
  -webkit-transform: skew(40deg);
  outline: none;
  cursor: pointer;
  border: none;


`

interface PrimarySubButtonProps{
  background?: string
};

export const PrimarySubButtonOne = styled(PrimaryButton)`
  margin-left: 10px;
  background-image: url("${(props) => props.background}");
  background-repeat: repeat;
  background-size: 4%;
  transition: all .5s;

  &:after{
    content: "";
    height: 28px;
    width: 2px;
    background: black;
    position: absolute;
    top: 0;
    right: -7px;
  }
`

export const PrimarySubButtonTwo = styled(PrimaryButton)`
  margin-top: -20px;
  margin-left: -5px;
  transition: all .5s ease-out;
  box-shadow: -10px 3px 1px -1px rgba(136, 136, 136, .3);
  background-image: url("${(props) => props.background}");
  background-repeat: repeat;
  background-size: 4%;
  border-bottom: 2px solid grey;
  border-left: 2px solid grey;


  &:before{
    content: "";
    height: 28px;
    width: 2px;
    background: black;
    position: absolute;
    top: 5px;
    left: -7px;
  }
`

export const Buttonwrapper = styled.div`
  transform: rotateY(-25deg);
  transition: transform .25s linear;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover{
    transform: rotateY(0);
  }

  &:before{
    content:"";
    width: 90%;
    height: 1px;
    background: #131416;
    position: absolute;
    top: -6px;
    left: -2000%;
    transition: all .5s;
    }

  &:after{
    content:"";
    width: 90%;
    height: 1px;
    background: #131416;
    position: absolute;
    top: 45px;
    left: 2000%;
    transition: all .5s;
  }

  &:hover::after{
    left: 0;
  }
  &:hover::before{
    left: 0;
  }
`

interface ButtonProps{
  text: string,
  src?: string,
  onClick:()=>void
}
export const Button:React.FC<ButtonProps> = ({
  text,
  src,
  onClick
}) => {
  return(
    <Buttonwrapper onClick={ ()=> onClick() }>
      <ButtonText>{ text }</ButtonText>
      <PrimarySubButtonOne background={ src }/>
      <PrimarySubButtonTwo background={src}/>
    </Buttonwrapper>
  )
}