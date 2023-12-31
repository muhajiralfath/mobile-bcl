import { onNavigate } from "../../navigation/RootNavigation";
import PATH from "../../navigation/NavigationPath";
import { useDispatch } from "react-redux";
import { setIsLoading } from "../../store/Loading/LoadingSlice";
import { Alert } from "react-native";

export const Login = (service) => {
  const { login } = service();
  const dispatch = useDispatch();

  const onAuthenticate = async (email, password) => {
    try {
      dispatch(setIsLoading(true));
      await login(email, password);
      onNavigate({
        routeName: PATH.HOME,
        isReplace: true,
      });
    } catch (err) {
      console.log("login.js", err);
      Alert.alert("Invalid Email or Password");
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  return {
    onAuthenticate,
  };
};
