import { StyleSheet, View, Image, Text } from "react-native";
import React, { useEffect } from "react";

import PATH from "../../navigation/NavigationPath";

export default function SplashScreen({ navigation }) {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(PATH.LOGIN)
    }, 3000);
  }, [])

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../shared/assets/logo.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
});
