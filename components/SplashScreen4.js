import React, { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";
import LottieView from "lottie-react-native";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

export default function SplashScreen4() {
  const animationProgress = useRef(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <AnimatedLottieView
      source={require("../assets/animations/3.json")}
      progress={animationProgress.current}
      style={{width: "100%", height: "100%"}}
      loop
      autoPlay
      resizeMode="center"
    />
  );
}