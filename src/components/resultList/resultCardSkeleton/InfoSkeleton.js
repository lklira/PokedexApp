import React from 'react';
import {Animated} from 'react-native';
import styled from 'styled-components/native';
import useOpacityAnimation from '../../../hooks/useOpacityAnimation';

const InfoSkeleton = props => {
  const opacityAnimation = useOpacityAnimation();

  const StyledView = styled.View`
    padding-vertical: 2px;
    padding-horizontal: 12px;
    border-radius: 16px;
    margin-bottom: 4px;
    background-color: #fff;
    height: 16px;
    opacity: ${styleProps => styleProps.opacity._value};
  `;

  return (
    <StyledView as={Animated.View} opacity={opacityAnimation} {...props} />
  );
};

export default InfoSkeleton;
