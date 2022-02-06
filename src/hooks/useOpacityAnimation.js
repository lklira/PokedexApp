import {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

const useOpacityAnimation = (defaultValue = 0.8) => {
  const opacityAnimation = useRef(new Animated.Value(0.3));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacityAnimation.current, {
          toValue: defaultValue,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnimation.current, {
          toValue: 0.3,
          duration: 700,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [opacityAnimation, defaultValue]);

  return opacityAnimation.current;
};

export default useOpacityAnimation;
