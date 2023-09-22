import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function Loading() {
    const isLoading = useSelector((state) => state.loading.isLoading);

    return (
        isLoading && (
            <View style={[StyleSheet.absoluteFill, styles.container]}>
                <Image source={require("../assets/loading.gif")} />
            </View>
        )
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.3)",
        zIndex: 1,
    },
});
