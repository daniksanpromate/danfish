import { Pressable, Text, View } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';

export default function Right({ headerRightStyle }) {
  
    const [color, setColor] = useState('blue');
    const [size, setSize] = useState(50);

    const click = () => {
      color === '#00008B' ? setColor('red') : setColor('#00008B');
      size === 50 ? setSize(70) : setSize(50)
    };

    

    
  

  return (
    <View style={headerRightStyle}>
      <Pressable onPress={click}>
        <Icon name="settings" size={size} color={color} />
      </Pressable>
    </View>
  );
}
