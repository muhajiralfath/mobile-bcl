import {StyleSheet} from "react-native";

const MyBillStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        marginTop:5
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
        justifyContent:"center",
        height:50,
        width:"100%",
        backgroundColor:"#2D303F"
    }
})

export default MyBillStyle