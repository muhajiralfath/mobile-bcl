import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, Text } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const SubCardComponent = ({
    umkmName,
    loanAmount,
    tenor,
    totalDebt,
    monthDebt,
    date,
    isApprove,
}) => {
    const loanAmountPrice = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(loanAmount);
    const totalDebtPrice = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(totalDebt);
    const monthDebtPrice = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(monthDebt);

    const { backgroundColor, iconName, colorButton, titleButton } =
        getStyleCard(isApprove);
    return (
        <View style={[styles.card, { backgroundColor: "grey" }]}>
            <View>
                <Text style={styles.name}>{umkmName}</Text>
                <Text style={styles.text}>Loan Amount : {loanAmountPrice}</Text>
                <Text style={styles.text}>Tenor : {tenor} Month</Text>
                <Text style={styles.text}>Total Debt: {totalDebtPrice}</Text>
                <Text style={styles.text}>Monthly Debt : {monthDebtPrice}</Text>
                <Text style={styles.text}>Date : {date} </Text>
            </View>
            <Button
                title={titleButton}
                variant="contained"
                color={colorButton}
                trailing={(props) => <Icon name={iconName} {...props} />}
                style={styles.button}
            />
        </View>
    );
};

export default SubCardComponent;

const getStyleCard = (isApprove) => {
    let backgroundColor, iconName, colorButton, titleButton;
    if (isApprove === true) {
        backgroundColor = "green";
        iconName = "progress-check";
        colorButton = "green";
        titleButton = "Accepted";
    } else if (isApprove === false) {
        backgroundColor = "red";
        colorButton = "red";
        iconName = "progress-close";
        titleButton = "Rejected";
    } else {
        backgroundColor = "grey";
        colorButton = "white";
        iconName = "progress-clock";
        titleButton = "Pending..";
    }
    return { backgroundColor, iconName, titleButton, colorButton };
};

const styles = StyleSheet.create({
    card: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "lightslategreen",
        justifyContent: "space-between",
        borderRadius: 10,
        padding: 24,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        color: "white",
    },
    text: {
        color: "white",
    },
    balance: {
        fontSize: 16,
    },
    status: {
        display: "flex",
        alignSelf: "flex-start",
        justifyContent: "flex-start",
    },
    button: {
        position: "absolute",
        top: 10,
        right: 10,
    },
});
