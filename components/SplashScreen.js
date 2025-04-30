import React, { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";
import LottieView from "lottie-react-native";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

export default function SplashScreen({setIsPending}) {
  const animationProgress = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);

  const handleAnimationFinish = () => {
    setIsPending(false);
  };

  return (
    <AnimatedLottieView
      source={require("../assets/animations/fish.json")}
      progress={animationProgress.current}
      style={{width: "100%", height: "100%"}}
      loop={false}
      autoPlay
      resizeMode="center"
      onAnimationFinish={handleAnimationFinish}
    />
  );
}