import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { Button, TextInput } from "@react-native-material/core";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const FormScreen = ({ navigation }) => {
    const [amount, setAmount] = useState("");
    const [debtMonth, setDebtMont] = useState("");
    const [checkboxState, setCheckboxState] = useState(false);
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
                        selectedValue={debtMonth}
                        onValueChange={(itemValue) => setDebtMont(itemValue)}
                    >
                        <Picker.Item label="3 Month" value="3" />
                        <Picker.Item label="6 Month" value="6" />
                        <Picker.Item label="12 Month" value="12" />
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
                    />

                    <Button
                        style={{
                            width: "50%",
                            alignSelf: "center",
                            marginTop: 24,
                            marginBottom: 20,
                        }}
                        variant="outlined"
                        title="Back to Home"
                        leading={(props) => (
                            <Icon name="backspace" {...props} />
                        )}
                        onPress={() => navigation.replace(PATH.HOME)}
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
