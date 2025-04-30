import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import Right from './Right';
import Left from './Left';

export default function Header({headerStyle}) {
  return (
    <View style={headerStyle}>
      <Left headerLeftStyle={styles.headerLeftStyle} />
      <Right headerRightStyle={styles.headerRightStyle} />
    </View>
  );
}
const styles = StyleSheet.create({
  headerLeftStyle: {
    flex: 1,
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  headerRightStyle: {
    flex: 1,
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
  },
});
