import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import SubCardComponent from "./SubCardComponent";

const SubmissionScreen = ({ submission }) => {
    const { getSubmission } = submission();

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
                <SubCardComponent
                    umkmName="Halal Barokah"
                    loanAmount={10000000}
                    tenor={3}
                    totalDebt={10500000}
                    monthDebt={3200000}
                    date="2023-02-01"
                    iconStatus="check"
                    MessgStatus="Accepted"
                    colorStatus="limegreen"
                    bgColor="green"
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
