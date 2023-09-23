import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { Button, TextInput } from "@react-native-material/core";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { onNavigate } from "../../navigation/RootNavigation";
import PATH from "../../navigation/NavigationPath";

const FormScreen = ({ form }) => {
    const { addSubmission, getUmkm } = form();
    const [amount, setAmount] = useState("");
    const [tenor, setTenor] = useState(3);
    const [checkboxState, setCheckboxState] = useState(false);
    const [umkmId, setUmkmId] = useState("");
    const [umkmType, setUmkmType] = useState("");

    const dataSubmis = {
        umkmId: umkmId,
        loanAmount: parseInt(amount),
        tenor: tenor,
    };

    useEffect(() => {
        getUmkmData();
    }, []);

    const getUmkmData = async () => {
            const umkmData = await getUmkm();
            setUmkmId((state) => (state = umkmData.umkmId));
            setUmkmType((state) => (state = umkmData.umkmType));
    };

    const handleSubmit = async () => {
        console.log(amount, tenor, umkmId, checkboxState);
        if (amount && tenor && umkmId && checkboxState) {
            const loanAmount = parseInt(amount, 10);
            if (
                umkmType === "mikro" &&
                (loanAmount < 1000000 || loanAmount > 3000000)
            )
                return Alert.alert(
                    "Your Umkm type is micro! input amount 1.000.000 - 3.000.000"
                );
            if (
                umkmType === "kecil" &&
                (loanAmount < 5000000 || loanAmount > 20000000)
            )
                return Alert.alert(
                    "Your Umkm type is small! input amount 5.000.000 - 20.000.000"
                );
            if (
                umkmType === "menengah" &&
                (loanAmount < 10000000 || loanAmount > 50000000)
            )
                return Alert.alert(
                    "Your Umkm type is middle! input amount 10.000.000 - 50.000.000"
                );

            await addSubmission(dataSubmis);
            Alert.alert("Sukses Add Submission!");
            onNavigate({
                routeName: PATH.HOME,
            });
        } else {
            Alert.alert("Please Input All from data & Checklist terms");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <View style={styles.card}>
                    <TextInput
                        variant="outlined"
                        label="Amount"
                        style={{ margin: 16 }}
                        value={amount}
                        onChangeText={(text) => setAmount(text)}
                        placeholder="Ext. 10.000.000"
                        keyboardType="numeric"
                    />
                    <Picker
                        selectedValue={tenor}
                        onValueChange={(itemValue) => setTenor(itemValue)}
                    >
                        <Picker.Item label="3 Month" value={3} />
                        <Picker.Item label="6 Month" value={6} />
                        <Picker.Item label="12 Month" value={12} />
                    </Picker>
                    <BouncyCheckbox
                        style={{ alignSelf: "center" }}
                        size={25}
                        fillColor="violet"
                        unfillColor="#FFFFFF"
                        isChecked={checkboxState}
                        text="I have read and agree to the terms"
                        iconStyle={{ borderColor: "red" }}
                        innerIconStyle={{ borderWidth: 2 }}
                        onPress={() => setCheckboxState(!checkboxState)}
                    />
                    <Button
                        style={{
                            width: "50%",
                            alignSelf: "center",
                            marginTop: 16,
                        }}
                        variant="outlined"
                        title="Submit"
                        leading={(props) => <Icon name="send" {...props} />}
                        onPress={handleSubmit}
                    />

                    <Button
                        style={{
                            width: "50%",
                            alignSelf: "center",
                            marginTop: 24,
                            marginBottom: 20,
                        }}
                        variant="outlined"
                        title="Cancel"
                        leading={(props) => (
                            <Icon name="backspace" {...props} />
                        )}
                        onPress={() =>
                            onNavigate({
                                routeName: PATH.HOME,
                            })
                        }
                    />
                </View>
            </View>
        </View>
    );
};

export default FormScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    },
    formContainer: {
        flex: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        position: "absolute",
        left: 0,
        right: 0,
    },

    card: {
        flex: 1,
        gap: 5,
        width: "100%",
        backgroundColor: "white",
        borderRadius: 8,
        padding: 16,
        margin: 34,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
        justifyContent: "center",
        alignContent: "center",
    },
    btnContainer: {
        padding: 64,
        justifyContent: "flex-end",
    },
});
