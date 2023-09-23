import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import SubCardComponent from "./SubCardComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setIsLoading } from "../../store/Loading/LoadingSlice";
import { useEffect } from "react";
import EmpetyListScreen from "../../shared/components/EmpetyListScreen";
import { onNavigate } from "../../navigation/RootNavigation";
import PATH from "../../navigation/NavigationPath";


const SubmissionScreen = ({ submission }) => {
    const { getSubmission } = submission();
    const [submissions, setSubmissions] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        dispatch(setIsLoading(true));
        const debtorId = await AsyncStorage.getItem("debtorId");
        const dataSubmis = await getSubmission(debtorId);
        setSubmissions(dataSubmis);
        dispatch(setIsLoading(false));
    };

    const renderItem = ({ item }) => (
        <SubCardComponent
            umkmName={item.umkmName}
            loanAmount={item.loanAmount}
            tenor={item.tenor}
            totalDebt={item.debt}
            monthDebt={item.monthlyDebt}
            date={item.date}
            isApprove={item.isApprove}
        />
    );

    return (
        <View style={styles.container}>
            <View style={styles.headWrapper}>
                <View style={{flex: 2}}>
                    <Text style={{color: "white", fontSize: 24}}>Submission List</Text>
                </View>
                <View style={styles.buttonWrapper}>
                    <Button
                        style={{
                            width: "30%",
                        }}
                        variant="outlined"
                        color="white"
                        leading={(props) => <Icon name="plus" {...props} />}
                        onPress={() => {
                            onNavigate({
                                routeName: PATH.FORM
                            })
                        }}
                    />
                </View>
            </View>
            <View style={styles.body}>
                <FlatList
                    data={submissions}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={() => <EmpetyListScreen />}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
};

export default SubmissionScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#dcdcdc",
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
    buttonWrapper: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 10,
    }
});

//
// <Button
//     style={{
//         width: "50%",
//         alignSelf: "center",
//     }}
//     title="Add Submission"
//     color="#323549"
//     trailing={(props) => <Icon name="plus" {...props} />}
//     onPress={() => {
//         onNavigate({
//             routeName: PATH.FORM,
//         });
//     }}
// />