import React from 'react';
import styled from 'styled-components/native';
import {View} from 'react-native';

const TypeBackground = styled.View`
  padding-vertical: 2px;
  padding-horizontal: 12px;
  background-color: #fff;
  border-radius: 16px;
  margin-bottom: 4px;
  opacity: 0.3;
`;
const TypeTextPlaceholder = styled.Text`
  color: #fff;
  opacity: 1;
`;
const TypeText = styled.Text`
  color: #fff;
  position: absolute;
  top: 2px;
  left: 12px;
`;
const Container = styled.View`
  flex-direction: row;
`;

const Type = ({type}) => {
  return (
    <Container>
      <TypeText>{type.name}</TypeText>
      <TypeBackground>
        <TypeTextPlaceholder>{type.name}</TypeTextPlaceholder>
      </TypeBackground>
    </Container>
  );
};

export default Type;
