import { onNavigate } from "../../navigation/RootNavigation";
import PATH from "../../navigation/NavigationPath";
import { useNavigation } from "@react-navigation/native";

export const Login = (service) => {
    const { login } = service();

    const onAuthenticate = async (email, password) => {
        try {
            await login(email, password);
            console.log(email, password);
            onNavigate({
                routeName: PATH.HOME,
            });
            console.log("check navigation");
        } catch (err) {
            console.log("login.js", err);
        }
    };

    return {
        onAuthenticate,
    };
};
