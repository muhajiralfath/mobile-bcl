import {Modal, ScrollView, View} from "react-native";
import MyBillStyle from "./MyBillStyle";
import {Button, Text} from "@react-native-material/core"
import {useEffect, useState} from "react";
import PaymentComponent from "./PaymentComponent";

export default function MyBillScreen({myBill}) {
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [bills, setBills] = useState(null);
    const [billData, setBillData] = useState(null);
    const {getMyBill, payBill} = myBill();

    useEffect(() => {
        setMyBill().then(value => {
            setBills(value);
        });
    }, []);

    const setMyBill = async () => {
        return await getMyBill();
    }

    const togglePaymentModal = (data) => {
        setShowPaymentModal(!showPaymentModal);
        setBillData(data);
    }

    const togglePayBill = (umkmId, billId) => {
        payBill(umkmId, billId);
    }

    return (
        <View style={MyBillStyle.topWrapper}>
            <View style={MyBillStyle.titleView}>
                <Text style={{textAlign: "center"}} variant="h6" color={"white"}>My Bill</Text>
            </View>
            <ScrollView style={MyBillStyle.notFoundWrapper}>
                <View style={MyBillStyle.container}>
                    {bills === null || bills === undefined ?
                        (<View style={MyBillStyle.scrollWrapper}>
                            <Text style={MyBillStyle.notFoundText}>Bill not found</Text>
                        </View>)
                        :
                        (<>
                        {bills.map((item, index) => (
                            <View style={MyBillStyle.card} key={item.id}>
                                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                    <Text style={MyBillStyle.cardItem}>No: {index + 1}</Text>
                                    <View style={{flexDirection: 'row'}}>
                                        <Text style={MyBillStyle.cardItem}>
                                            Status:
                                        </Text>
                                        <Text>&nbsp;</Text>
                                        <Text style={[MyBillStyle.cardItem, item.isPaid ? null : {color: 'red'}]}>
                                            {item.isPaid ? "Paid" : "Unpaid"}
                                        </Text>
                                    </View>
                                </View>
                                <Text style={MyBillStyle.cardItem}>Debt: Rp {item.debt.toLocaleString()}</Text>
                                <Text style={MyBillStyle.cardItem}>Due Date: {item.dueDate}</Text>
                                <Button color={"#FFCA2C"} title="Pay" onPress={() => togglePaymentModal(item)}/>
                            </View>
                            ))
                        }
                        </>)
                    }

                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={showPaymentModal}
                        onRequestClose={() => togglePaymentModal(null)}
                    >
                        <View style={MyBillStyle.paymentModal}>
                            {billData !== null ? (
                                <View>
                                    <PaymentComponent data={billData}/>
                                </View>
                            ) : (
                                <Text>Not found</Text>
                            )}
                            <View style={{width: "72%", marginTop: 20}}>
                                <Button
                                    color='green'
                                    style={{marginBottom: 20}}
                                    title="Create Payment"
                                    onPress={() => togglePayBill(billData.umkmId, billData.id)}/>
                                <Button color='#FFCA2C' title="Cancel" onPress={() => togglePaymentModal(null)}/>
                            </View>
                        </View>
                    </Modal>
                </View>
            </ScrollView>
        </View>
    )
}