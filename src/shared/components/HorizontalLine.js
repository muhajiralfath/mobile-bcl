import React from "react";
import { View, StyleSheet } from "react-native";

const HorizontalLine = ({ color, width, height }) => {
    return (
        <View
            style={{
                borderBottomColor: color || "black",
                borderBottomWidth: height || StyleSheet.hairlineWidth,
                width: width || "100%",
            }}
        />
    );
};

export default HorizontalLine;
