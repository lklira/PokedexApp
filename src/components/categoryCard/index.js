import React from 'react';
import styled from 'styled-components/native';
import { View, Text, Dimensions } from 'react-native';
import {BoxShadow} from 'react-native-shadow';
import { PokeBall } from '../pokeBallStyle';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const Container = styled.View`
  width: 180%;
  height: 215%;
  background-color: ${(props) => props.color };
  border-radius: 18px;
  margin-top: 25px;
  padding-top: 40px;
  overflow: hidden;
  margin-right: 25px;
`;



export default CategoryCard = ({color, name}) => {

  const shadowOpt = {
    width: windowWidth*0.25,
    height: windowHeight*0.04,
    color,
    border:30,
    radius:10,
    opacity:0.5,
    x:35,
    y:52,
    style:{marginVertical:5}
  };

  return(
    <BoxShadow setting={shadowOpt}>
      <Container color={color}>
        <Text>
          {name}
        </Text>
        <PokeBall size={84} color={color}/>
      </Container>
    </BoxShadow>
    
  );
}

