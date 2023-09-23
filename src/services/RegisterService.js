import { useDep } from "../context/DependencyContext";

const RegisterService = () => {
  const { apiClient } = useDep();

  const register = async (email, password) => {
    try {
      console.log("RegisterService", email, password);
      await apiClient({
        method: "post",
        url: "/api/auth/register",
        body: {
          email: email,
          password: password,
        },
      });
    } catch (err) {
      console.log("RegisterService", err);
      throw err;
    }
  };

  return {
    register,
  };
};

export default RegisterService;
