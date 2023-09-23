import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const EmpetyListScreen = () => {
    return (
        <View
            style={{
                alignItems: "center",
                justifyContent: "space-evenly",
            }}
        >
            <Image
                style={{
                    width: "80%",
                    height: 200,
                    marginTop: 40,
                }}
                source={require("../../shared/assets/empty_undraw.png")}
            />
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: 200,
                }}
            >
                Transaction is Empety
            </Text>
        </View>
    );
};

export default EmpetyListScreen;

const styles = StyleSheet.create({});
