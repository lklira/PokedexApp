import React from 'react';
import styled from 'styled-components/native';
import { Text, Dimensions } from 'react-native';
import  PokeBall  from '../../pokeBallStyle';

//TO DO: increase card size, display pokemon types and avatar (create avatar component with rounded border)

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const Container = styled.View`
  background-color: ${(props) => props.color };
  border-radius: 18px;
  justify-content: center;
  height: ${() => windowHeight*0.08}px;
  width: ${() => windowWidth*0.42}px;
  margin-top: 16px;
  margin-right: 12px;
  overflow: hidden;
  padding-left: 20px;
`;
const Name = styled.Text`
  color: #fff;
  font-weight: bold;
`

export default ResultCard = ({color, name}) => {

  return(
    
        <Container color={color}>
          <Name>
            {name}
          </Name>
          <PokeBall size={84} lineColor={color} offset={6}/>
        </Container>
      
  );
}

