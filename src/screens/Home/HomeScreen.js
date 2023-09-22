import { Image, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import CardComponent from "./CardComponent";
import ButtonCardComponent from "./ButtonCardComponent";
import HorizontalLine from "../../shared/components/HorizontalLine";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading } from "../../store/Loading/LoadingSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { onNavigate } from "../../navigation/RootNavigation";
import PATH from "../../navigation/NavigationPath";

const HomeScreen = ({ home }) => {
    const { getDebtor, getBill } = home();
    const dispatch = useDispatch();
    const debtorName = useSelector((state) => state.debtor.debtorName);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const data = await getDebtor();
        dispatch();
    };

    const logout = async () => {
        dispatch(setIsLoading(true));
        await AsyncStorage.removeItem("token");
        dispatch(setIsLoading(false));
        onNavigate({
            routeName: PATH.LOGIN,
            isReplace: true,
        });
    };

    const toProfile = () => {
        onNavigate({
            routeName: PATH.PROFILE,
            isReplace: true,
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.headWrapper}>
                <View style={{ flex: 1 }}>
                    <Image
                        style={styles.logo}
                        source={require("../../shared/assets/logo.png")}
                    />
                </View>
                <View style={styles.buttonWrapper}>
                    <Button
                        style={{
                            width: "20%",
                        }}
                        variant="outlined"
                        color="white"
                        leading={(props) => <Icon name="account" {...props} />}
                        onPress={toProfile}
                    />
                    <Button
                        style={{
                            width: "20%",
                        }}
                        variant="outlined"
                        color="white"
                        leading={(props) => <Icon name="login" {...props} />}
                        onPress={logout}
                    />
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.CardTop}>
                    <CardComponent
                        name={debtorName}
                        tenor={3}
                        totalBill={12000000}
                    />
                </View>
                <HorizontalLine height={2} width="full" />
                <View style={styles.CardButton}>
                    <ButtonCardComponent
                        nameIcon="currency-usd"
                        colorIcon="white"
                        nameCard="Apply Submission"
                        bgColor="#4682b4"
                    />
                    <ButtonCardComponent
                        nameIcon="book-open-outline"
                        colorIcon="white"
                        nameCard="Pay Bill"
                        bgColor="#008080"
                    />
                    <ButtonCardComponent
                        nameIcon="credit-card-clock-outline"
                        colorIcon="white"
                        nameCard="View Bill"
                        bgColor="#6a5acd"
                    />
                    <ButtonCardComponent
                        nameIcon="badge-account-horizontal-outline"
                        colorIcon="white"
                        nameCard="View Submission"
                        bgColor="seagreen"
                    />
                </View>
            </View>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#dcdcdc",
    },
    logo: {
        width: 120,
        height: 120,
    },
    title: {
        fontSize: 32,
        color: "black",
        fontWeight: "bold",
        color: "white",
    },
    headWrapper: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#323549",
        paddingHorizontal: 18,
    },
    body: {
        flex: 13,
        paddingHorizontal: 10,
        paddingVertical: 14,
    },
    CardTop: {
        marginBottom: 8,
    },
    CardButton: {
        marginTop: 14,
    },
    buttonWrapper: {
        flex: 3,
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 10,
    },
});
