import React from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {Pressable} from 'react-native';


export const Button = ({action, style, children}: ButtonProps) => {
  const isPressed = useSharedValue(false);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: 0},
        {translateY: 0},
        {scale: withSpring(isPressed.value ? 2 : 1)},
      ],
    };
  });

  const tap = Gesture.Tap()
    .runOnJS(true)
    .onBegin(() => {
      isPressed.value = true;
    })
    .onStart(() => {
      isPressed.value = false;
    })
    .onFinalize(() => {
      isPressed.value = false;
    });

  const onPress = () => {
    action();
  };

  return (
    <GestureDetector gesture={tap}>
      <Pressable onPress={onPress}>
        <Animated.View style={[style, animatedStyles]}>{children}</Animated.View>
      </Pressable>
    </GestureDetector>
  );
};
