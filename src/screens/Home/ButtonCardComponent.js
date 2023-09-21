import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Text } from "@react-native-material/core";

const ButtonCardComponent = ({ nameIcon, colorIcon, nameCard, bgColor }) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: `${bgColor}` }]}
        >
            <Icon name={nameIcon} color={colorIcon} size={40} />
            <Text style={styles.text}>{nameCard}</Text>
        </TouchableOpacity>
    );
};

export default ButtonCardComponent;

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        // justifyContent: "space-evenly",
        gap: 44,
        alignItems: "center",
        // backgroundColor: "grey",
        borderRadius: 10,
        padding: 24,
        paddingLeft: 42,
        marginHorizontal: 10,
        marginVertical: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    text: {
        fontSize: 24,
        color: "white",
    },
});

// badge-account-horizontal-outline
// book-open-outline
// credit-card-clock-outline
// currency-usd-circle-outline
