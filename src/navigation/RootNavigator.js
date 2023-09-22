import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";

import PATH from "./NavigationPath";
import SplashScreen from "../screens/Splash/SplashScreen";
import LoginScreen from "../screens/Login/LoginScreen";
import { Login } from "../screens/Login/Login";
import LoginService from "../services/LoginService";
import HomeScreen from "../screens/Home/HomeScreen";
import SubmissionScreen from "../screens/Submission/SubmissionScreen";
import FormScreen from "../screens/Form/FormScreen";

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
                    {() => <LoginScreen login={() => Login(LoginService)} />}
                </Stack.Screen>
                <Stack.Screen
                    name={PATH.HOME}
                    options={{ headerShown: false }}
                    component={HomeScreen}
                ></Stack.Screen>
                <Stack.Screen
                    name={PATH.SUBMISSION}
                    options={{ headerShown: false }}
                >
                    {() => <SubmissionScreen />}
                </Stack.Screen>
                <Stack.Screen name={PATH.FORM} options={{ headerShown: false }}>
                    {() => <FormScreen />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
