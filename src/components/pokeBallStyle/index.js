import React from 'react';
import styled from 'styled-components/native';

const PokeBallContainer = styled.View`
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
  background-color: ${({bodyColor}) => bodyColor};
  opacity: ${({opacity}) => opacity};
  border-radius: ${({size}) => size}px;
  position: absolute;
  top: ${({size}) => -size/14}px;
  right: ${({size}) => -size/14}px;
  justify-content: center;
  align-items: center;
  elevation: -1;
  z-index: -1;
`;

const PokeButton = styled.View`
  border: ${({size}) => size/12}px solid ${({lineColor}) => lineColor};
  border-radius: ${({size}) => size}px;
  height: ${({size}) => size/2}px;
  width: ${({size}) => size/2}px;
  position: absolute;
  right: ${({size}) => size/5.8}px;
  top: ${({size}) => size/5.5}px;
  elevation: -1;
  z-index: -1;
`

const LeftLine = styled.View`
  width: 16%;
  height: ${({size}) => size/12}px;
  border-top-width: ${({size}) => size/12}px;
  border-top-color: ${({lineColor}) => lineColor};
  position: absolute;
  right: ${({size}) => size/1.53}px;
  top: ${({size}) => size/2.55}px;
  elevation: -1;
  z-index: -1;
`
const RightLine = styled.View`
  width: 12%;
  height: ${({size}) => size/12}px;
  border-top-width: ${({size}) => size/12}px;
  border-top-color: ${({lineColor}) => lineColor};
  position: absolute;
  right: 0;
  top: ${({size}) => size/2.55}px;
  elevation: -1;
  z-index: -1;
`

const PokeBall = ({size, lineColor="#fff", bodyColor="#fff", opacity=0.3}) => {
  return (
    <>
      <PokeBallContainer size={size} bodyColor={bodyColor} opacity={opacity}/>
      <PokeButton size={size} lineColor={lineColor}/>
      <RightLine size={size} lineColor={lineColor}/>
      <LeftLine size={size} lineColor={lineColor}/>
    </>
  )
}

//11/07 deslocamento negativo, prop para o posicionamento das linhas, pokebutton e container das pokebolas

export default PokeBall;

