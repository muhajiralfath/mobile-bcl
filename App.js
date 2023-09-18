import { StyleSheet, Text, View, StatusBar } from 'react-native';
import AppNavigation from './src/navigation/RootNavigator';

export default function App() {
  return (
    <View style={styles.container}>      
      <AppNavigation/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
