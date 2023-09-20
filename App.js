import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import AppNavigation from './src/navigation/RootNavigator';
import {Provider} from "react-redux";
import store from "./src/store/store";
import DepProvider from "./src/context/DependencyContext";
import apiClient from "./src/services/ApiClient";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Provider store={store}>
            <DepProvider services={{ apiClient }}>
                <AppNavigation/>
                <StatusBar style="auto" />
            </DepProvider>
        </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
