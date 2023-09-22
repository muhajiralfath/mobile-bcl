import {ScrollView, TouchableOpacity, View} from "react-native";
import MyBillStyle from "./MyBillStyle";
import {TextInput, Text, Button, Avatar} from "@react-native-material/core"

export default function MyBillScreen(){
    return(
        <ScrollView>
            <View style={MyBillStyle.container}>
                <View style={MyBillStyle.titleView}>
                    <Text style={{textAlign:"center"}} variant="h6" color={"white"}>My Bill</Text>
                </View>
                <View style={MyBillStyle.card}>
                    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                        <Text style={MyBillStyle.cardItem}>No: 1</Text>
                        <Text style={MyBillStyle.cardItem}>Status: Unpaid</Text>
                    </View>
                    <Text style={MyBillStyle.cardItem}>Debt: Rp 4.200.000</Text>
                    <Text style={MyBillStyle.cardItem}>Due Date: 2023-10-20</Text>
                    <Button color={"#FFCA2C"} title="Pay"/>
                </View>
                <View style={MyBillStyle.card}>
                    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                        <Text style={MyBillStyle.cardItem}>No: 1</Text>
                        <Text style={MyBillStyle.cardItem}>Status: Unpaid</Text>
                    </View>
                    <Text style={MyBillStyle.cardItem}>Debt: Rp 4.200.000</Text>
                    <Text style={MyBillStyle.cardItem}>Due Date: 2023-10-20</Text>
                    <Button color={"#FFCA2C"} title="Pay"/>
                </View>
            </View>
        </ScrollView>
    )
}