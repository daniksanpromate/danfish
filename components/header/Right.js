import {  Pressable, Text, View } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Button } from './headerrightButton.js';

export default function Right({ headerRightStyle }) {
  const [rightState, setRightState] = useState({
    color: '#00008B',
    size: 50,
  });
  const click = () => {
    rightState.color === '#00008B'
      ? setRightState({
          color: 'red',
          size: 70,
        })
      : setRightState({
          color: '#00008B',
          size: 50,
        });
  };

  return (
    <View style={headerRightStyle}>
      <Button action={click}>
        <Icon name="settings" size={rightState.size} color={rightState.color} />
      </ Button>
    </View>
  );
}
