import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScrn from './Src/Screens/WelcomeScrn';
import RootNavigator from './Src/navigations/RootNavigator';
import OnboardingScrn from './Src/Screens/OnboardingScrn';
import "react-native-gesture-handler"


export default function App() {
  return (
    <View style={styles.container}>
      <RootNavigator  />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
    
  },
});
