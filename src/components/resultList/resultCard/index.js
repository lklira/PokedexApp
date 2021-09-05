import React from 'react';
import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import PokeBall from '../../pokeBallStyle';
import Type from './Type';

//TO DO: align card size items, render 2 cards on each row

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const Container = styled.View`
  background-color: ${props => props.color};
  border-radius: 18px;
  flex-direction: row;
  justify-content: center;
  height: ${() => windowHeight * 0.16}px;
  width: ${() => windowWidth * 0.42}px;
  margin-top: 16px;
  margin-right: 12px;
  overflow: hidden;
  padding-left: 20px;
`;
const Name = styled.Text`
  color: #fff;
  font-weight: bold;
`;

const Info = styled.View`
  justify-content: center;
  height: 100%;
`;

const Avatar = styled.Image`
  width: 80px;
  height: 80px;
`;

export default ResultCard = ({color, pokemon}) => {
  return (
    <Container color={color}>
      <Info>
        <Name>{pokemon.name}</Name>
        {pokemon.types.map(type => (
          <Type key={type.name} type={type} />
        ))}
      </Info>
      <Avatar source={{uri: pokemon.avatar}}></Avatar>
      <PokeBall size={84} lineColor={color} offset={6} />
    </Container>
  );
};
