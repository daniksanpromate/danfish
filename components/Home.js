import {Text, StyleSheet } from 'react-native';
import {View} from 'react-native';
import Body from "./Body";
import Header from "./header/Header";
import Footer from "./Footer";

 export default function Home() {
   return (
      <View style={styles.home}>
        <Header headerStyle={styles.header} />
        <Body bodyStyle={styles.body} bodyTextStyle={styles.bodyTextStyle}/>
        <Footer footerStyle={styles.footer} footerTextStyle={styles.footerTextStyle}/> 
      </View>
   );
  }
    
  const styles = StyleSheet.create({
  home: {
    flex: 1,
    height: '100%',
    width: '100%',
    flexDirection:'column',
   },
   header: {
    height: '10%',
    justifyContent: 'space-between ',
    width: '100%',
    flexDirection: 'row',
  },
  footer: {
    height: '10%',
    justifyContent: 'center',
    borderColor: 'orange',
    borderWidth: 5,
  },
  footerTextStyle: {
    fontSize: 35,
    color: 'green',
    textAlign: 'center',
  },
  body: {
    height: '80%',
    justifyContent: 'center',
  },
  bodyTextStyle: {
    fontSize: 50,
    color: 'green',
    textAlign: 'center',
  },
});
    