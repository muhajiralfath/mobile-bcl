import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";

import PATH from "./NavigationPath";
import SplashScreen from "../screens/Splash/SplashScreen";
import LoginScreen from "../screens/Login/LoginScreen";
import {Login} from "../screens/Login/Login";
import LoginService from "../services/LoginService";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={PATH.SPLASH}>
        <Stack.Screen
          name={PATH.SPLASH}
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={PATH.LOGIN}
          options={{ headerShown: false }}
        >
            {() => <LoginScreen login={() => Login(LoginService)} /> }
        </Stack.Screen>
        {/* <Stack.Group
          screenOptions={({ navigation }) => {
            return {
              headerStyle: {
                backgroundColor: "#233D90",
              },
              headerTitleStyle: {
                fontWeight: "bold",
                color: "white",
                fontSize: 30,
              },
              headerShadowVisible: false,
              headerRight: () => <PopupMenu navigation={navigation} />,
              headerLeft: () => <View />,
            };
          }}
        > */}
          {/* <Stack.Screen
            name={PATH.TODO_LIST}
            component={ToDoScreen}
            options={{ title: "Todos" }}            
          /> */}
        {/* </Stack.Group> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
