import React from 'react';
import styled from 'styled-components/native';


const PokeBallContainer = styled.View`
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
  border-radius: ${({size}) => size}px;
  position: absolute;
  top: ${({offset}) => -offset}px;
  right: ${({offset}) => -offset}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  elevation: -1;
  z-index: -1;
  flex: 1;
`;

const PokeBallBody = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({bodyColor}) => bodyColor};
  opacity: ${({opacity}) => opacity};
  border-radius: ${({size}) => size}px;
  position: absolute;
`;

const PokeButton = styled.View`
  border: ${({size}) => size/12}px solid ${({lineColor}) => lineColor};
  border-radius: ${({size}) => size}px;
  height: ${({size}) => size/2}px;
  width: ${({size}) => size/2}px;
  justify-content: center;
`
const PokeButtonContent = styled.View`
  height: ${({size}) => size/12}px;
  width: 10px;
  position: absolute;
  left: ${({size}) => -size/12 - 5}px;
  border-top-width: ${({size}) => size/12}px;
  border-top-color: ${({lineColor}) => lineColor};
`

const LeftLine = styled.View`
  height: ${({size}) => size/12}px;
  border-top-width: ${({size}) => size/12}px;
  border-top-color: ${({lineColor}) => lineColor};
  flex: 1;
`
const RightLine = styled.View`
  height: ${({size}) => size/12}px;
  border-top-width: ${({size}) => size/12}px;
  border-top-color: ${({lineColor}) => lineColor};
  flex: 1;
`

const PokeBall = ({size, lineColor="#fff", bodyColor="#fff", opacity=0.3, offset}) => {
  return (
    <PokeBallContainer size={size} offset={offset}>
      <PokeBallBody size={size} bodyColor={bodyColor} opacity={opacity}/>
      <LeftLine size={size} lineColor={lineColor}/>

      <PokeButton size={size} lineColor={lineColor}>
        <PokeButtonContent lineColor={lineColor} size={size}/>
      </PokeButton>
      <RightLine size={size} lineColor={lineColor}/>
    </PokeBallContainer>
  )
}

export default PokeBall;

