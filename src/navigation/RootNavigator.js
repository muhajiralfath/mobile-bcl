import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";

import PATH from "./NavigationPath";
import SplashScreen from "../screens/Splash/SplashScreen";
import LoginScreen from "../screens/Login/LoginScreen";
import { Login } from "../screens/Login/Login";
import LoginService from "../services/LoginService";
import RegisterScreen from "../screens/Register/RegisterScreen";
import { Register } from "../screens/Register/Register";
import RegisterService from "../services/RegisterService";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import MyBillScreen from "../screens/MyBill/MyBillScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import SubmissionScreen from "../screens/Submission/SubmissionScreen";
import FormScreen from "../screens/Form/FormScreen";
import { navigationRef } from "./RootNavigation";
import { Home } from "../screens/Home/Home";
import DebtorService from "../services/DebtorService";
import BillService from "../services/BillService";
import { Profile } from "../screens/Profile/Profile";
import { Submission } from "../screens/Submission/Submission";
import SubmissionService from "../services/SubmissionService";
import {MyBill} from "../screens/MyBill/MyBill";
import { FormSubmisson } from "../screens/Form/FormSubmission";
import UmkmService from "../services/UmkmService";
import PaymentService from "../services/PaymentService";
import MidtransScreen from "../screens/Midtrans/MidtransScreen";

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
                <Stack.Screen
                    name={PATH.REGISTER}
                    options={{ headerShown: false }}
                >
                    {() => <RegisterScreen register={() => Register(RegisterService)} />}
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
                    {() => <MyBillScreen myBill={() => MyBill(BillService, PaymentService)} />}
                </Stack.Screen>

                <Stack.Screen
                    name={PATH.SUBMISSION}
                    options={{ headerShown: false }}
                >
                    {() => (
                        <SubmissionScreen
                            submission={() => Submission(SubmissionService)}
                        />
                    )}
                </Stack.Screen>
                <Stack.Screen name={PATH.FORM} options={{ headerShown: false }}>
                    {() => (
                        <FormScreen
                            form={() =>
                                FormSubmisson(SubmissionService, UmkmService)
                            }
                        />
                    )}
                </Stack.Screen>

                <Stack.Screen name={PATH.MIDTRANS} options={{ headerShown:false }} component={MidtransScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
