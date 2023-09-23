import { onNavigate } from "../../navigation/RootNavigation";
import PATH from "../../navigation/NavigationPath";
import apiClient from "../../services/ApiClient";
import {useDispatch} from "react-redux";
import {setIsLoading} from "../../store/Loading/LoadingSlice";

export const Register = (service) => {
  const { register } = service();
  const dispatch = useDispatch()

  const onRegister = async (email, password) => {
    try {
      dispatch(setIsLoading(true))
      await register(email, password);
      onNavigate({
        routeName: PATH.LOGIN,
        isReplace: true,
      });
    } catch (err) {
      console.log("register.js", err);
      throw err
    } finally {
      dispatch(setIsLoading(false))
    }
  };

  return {
    onRegister,
  };
};
