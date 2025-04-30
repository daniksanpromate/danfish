import { useState } from 'react';
import { StyleSheet } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from "./components/SplashScreen";
import Home from "./components/Home";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
  },
});

export default function App() {
  const [isPending, setIsPending] = useState(true);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {isPending ? <SplashScreen setIsPending={setIsPending}/> : <Home/>}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}







