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
        console.log(dataSubmis);
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
            <View>
                <Button
                    style={{
                        width: "50%",
                        alignSelf: "center",
                    }}
                    title="Add Submission"
                    color="#323549"
                    trailing={(props) => <Icon name="plus" {...props} />}
                />
            </View>
            <View>
                <FlatList
                    data={submissions}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={() => <EmpetyListScreen />}
                />
            </View>
        </View>
    );
};

export default SubmissionScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#dcdcdc",
    },
});
