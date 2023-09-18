import { StyleSheet, View, Image,Text } from "react-native";
import React from "react";

import PATH from "../../navigation/NavigationPath";

export default function SplashScreen({navigation}) {

    React.useEffect( () => {
        setTimeout(() => {
            navigation.navigate(PATH.LOGIN)
        }, 3000);
    },[])

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://miro.medium.com/v2/resize:fit:2400/1*6mJO79AJUIV1qf3OzzQVtQ.png",
        }}
      />
      <Text 
      style={{
        fontSize : 25,
        fontWeight:'bold',
        marginTop : 10,
      }}
      >Final Project</Text>
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
