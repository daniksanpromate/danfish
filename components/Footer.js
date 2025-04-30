import {Text, StyleSheet } from 'react-native';
import {View} from 'react-native';


 export default function Footer({footerStyle,footerTextStyle}) {
   return (
        <View style={footerStyle}>
         <Text style={footerTextStyle}>footer</Text>
        </View>
        );
     }