import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "@react-native-material/core";

const CardComponent = () => {
    return (
        <View style={styles.card}>
            <View>
                <Text style={{}}>Total Dept : </Text>
                <Text style={styles.accountName}>Al Fath</Text>
                <Text style={styles.balance}>
                    Rest Of Bills <Text style={{ color: "red" }}>5 Month</Text>{" "}
                </Text>
            </View>
            <View>
                <Text
                    style={{
                        fontSize: 30,
                        color: "red",
                        alignSelf: "flex-start",
                    }}
                >
                    Rp. 12.000.000
                </Text>
            </View>
        </View>
    );
};

export default CardComponent;

const styles = StyleSheet.create({
    card: {
        display: "flex",
        // flex: 1,
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 10,
        padding: 24,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    accountName: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    balance: {
        fontSize: 16,
    },
});
