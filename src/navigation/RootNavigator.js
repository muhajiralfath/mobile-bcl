import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";

import PATH from "./NavigationPath";
import SplashScreen from "../screens/Splash/SplashScreen";
import LoginScreen from "../screens/Login/LoginScreen";
import { Login } from "../screens/Login/Login";
import LoginService from "../services/LoginService";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import MyBillScreen from "../screens/MyBill/MyBillScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import SubmissionScreen from "../screens/Submission/SubmissionScreen";
import FormScreen from "../screens/Form/FormScreen";
import { navigationRef } from "./RootNavigation";
import { Home } from "../screens/Home/Home";
import DebtorService from "../services/DebtorService";
import BillService from "../services/BillService";
import {Profile} from "../screens/Profile/Profile";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer ref={navigationRef}>
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
                <Stack.Screen name={PATH.HOME} options={{ headerShown: false }}>
                    {() => (
                        <HomeScreen
                            home={() => Home(DebtorService, BillService)}
                        />
                    )}
                </Stack.Screen>

                <Stack.Screen
                    name={PATH.PROFILE}
                    options={{ headerShown: false }}
                >
                    {() => <ProfileScreen profile={() => Profile()} />}
                </Stack.Screen>

                <Stack.Screen
                    name={PATH.MYBILL}
                    options={{ headerShown: false }}
                >
                    {() => <MyBillScreen />}
                </Stack.Screen>

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
