import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

const InfoSkeleton = () => {
  const fadeAnim = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0.8,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.3,
          duration: 700,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...styles,
        opacity: fadeAnim,
      }}
    />
  );
};

const styles = {
  paddingVertical: 2,
  paddingHorizontal: 12,
  borderRadius: 16,
  marginBottom: 4,
  backgroundColor: '#fff',
  height: 16,
};

export default InfoSkeleton;
