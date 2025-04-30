import { Pressable, Text, View } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Button } from './Button.js';

export default function Left({ headerLeftStyle }) {
  const [leftState, setLeftState] = useState({
    color: 'blue',
    size: 50,
  });
  const click = () => {
    leftState.color === 'blue'
      ? setLeftState({
          color: 'red',
          size: 70,
        })
      : setLeftState({
          color: 'blue',
          size: 50,
        });
  };

  return (
    <View style={headerLeftStyle}>
      <Button action={click}>
        <Icon name="camera" size={leftState.size} color={leftState.color} />
      </Button>
    </View>
  );
}
