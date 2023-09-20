import AsyncStorage from "@react-native-async-storage/async-storage"

const LocalStorage = () => {
    const setData = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (e) {}
    };

    const getData = async (key) => {
        try {
            return await AsyncStorage.getItem(key);
        } catch (e) {}
    };

    const removeData = async (key) => {
        try {
            await AsyncStorage.removeItem(key);
        } catch (e) {}
    }

    return {
        setData,
        getData,
        removeData,
    };
};

export default LocalStorage;