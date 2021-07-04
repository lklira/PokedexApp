import React from 'react';
import styled from 'styled-components/native';

const PokeBallContainer = styled.View`
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
  background-color: #fff;
  opacity: 0.3;
  border-radius: 40px;
  position: absolute;
  top: ${({size}) => -size/14}px;
  right: ${({size}) => -size/14}px;
  justify-content: center;
  align-items: center;
`;

const PokeButton = styled.View`
  width: 45%;
  height: 45%;
  border-radius: 40px;
  border: ${({size}) => size/12}px solid ${({color}) => color};
`

const LeftLine = styled.View`
  width: 30%;
  height: ${({size}) => size/12}px;
  border-top-width: ${({size}) => size/12}px;
  border-top-color: ${({color}) => color};
  position: absolute;
  left: 0;
`
const RightLine = styled.View`
  width: 30%;
  height: ${({size}) => size/12}px;
  border-top-width: ${({size}) => size/12}px;
  border-top-color: ${({color}) => color};
  position: absolute;
  right: 0;
`

export const PokeBall = ({size, color}) => {
  return (
    <PokeBallContainer size={size}>
      <LeftLine size={size} color={color}/>
      <PokeButton size={size} color={color}/>
      <RightLine size={size} color={color}/>
    </PokeBallContainer>
  )
}

