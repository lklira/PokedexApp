import React from 'react';
import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import PokeBall from '../../pokeBallStyle';
import InfoSkeleton from './InfoSkeleton';

const {height: windowHeight} = Dimensions.get('window');

const Container = styled.View`
  background-color: #e8e8e8;
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

const Info = styled.View`
  justify-content: center;
  width: 65px;
`;

const BallContainer = styled.View`
  height: 80px;
  margin-left: 8px;
`;

const ResultCardSkeleton = () => {
  return (
    <Container>
      <Info>
        <InfoSkeleton />
        <InfoSkeleton />
        <InfoSkeleton />
      </Info>
      <BallContainer>
        <PokeBall size={84} lineColor="#e8e8e8" offset={0} animated />
      </BallContainer>
    </Container>
  );
};

export default ResultCardSkeleton;
