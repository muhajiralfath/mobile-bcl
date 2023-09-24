import {StyleSheet} from "react-native";

const MyBillStyle = StyleSheet.create({
    topWrapper: {
        flex: 1
    },
    scrollWrapper: {
        flex: 9
    },
    container: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        width: "93%",
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardItem: {
        fontSize: 16,
        marginBottom: 10,
    },
    payButton: {
        backgroundColor: "#3498db",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    payButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    titleView:{
        flex: 0.2,
        justifyContent:"center",
        height:50,
        width:"100%",
        backgroundColor:"#2D303F",
    },
    paymentModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    redText: {
        color: 'red',
    },
    notFoundText: {
        marginTop: 20,
        fontSize: 20,
        color: 'grey',
    },
    notFoundWrapper: {
        backgroundColor: 'white',
    }
})

export default MyBillStyle