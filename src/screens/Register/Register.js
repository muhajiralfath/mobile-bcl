import { onNavigate } from "../../navigation/RootNavigation";
import PATH from "../../navigation/NavigationPath";
import apiClient from "../../services/ApiClient";

export const Register = (service) => {
  const { register } = service();

  const onRegister = async (email, password) => {
    try {
      await register(email, password);
      onNavigate({
        routeName: PATH.LOGIN,
        isReplace: true,
      });
    } catch (err) {
      console.log("register.js", err);
    }
  };

  return {
    onRegister,
  };
};
