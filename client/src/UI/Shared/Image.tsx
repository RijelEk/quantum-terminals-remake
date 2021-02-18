import styled from 'styled-components';

interface ImageProps{
  ref?:any
}
export const Image = styled.img<ImageProps>`
  object-fit: cover;
  width: 100%;
  height: 100%;
`