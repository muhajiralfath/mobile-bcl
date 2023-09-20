export const Login = (service) => {
    const { login } = service();

    const onAuthenticate = async (email, password) => {
        try {
            await login(email, password);
            console.log(email, password);
        } catch (err) {
            console.log("login.js", err);
        }
    }

    return {
        onAuthenticate,
    }
}