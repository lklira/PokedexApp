import React from 'react';
import styled from 'styled-components/native';
import {Dimensions, View} from 'react-native';
import PokeBall from '../../pokeBallStyle';
import Type from './Type';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const Container = styled.View`
  background-color: ${props => props.color};
  border-radius: 18px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${() => windowHeight * 0.16}px;
  width: 49%;
  margin-top: 8px;
  padding-horizontal: 12px;
  overflow: hidden;
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
  height: 100%;
`;

const AvatarContainer = styled.View`
  height: 80px;
  margin-left: 8px;
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
      <AvatarContainer>
        <Avatar source={{uri: pokemon.avatar}}></Avatar>
        <PokeBall size={84} lineColor={color} offset={0} />
      </AvatarContainer>
    </Container>
  );
};
