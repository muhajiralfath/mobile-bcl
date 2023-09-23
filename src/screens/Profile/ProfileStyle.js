import {StyleSheet} from "react-native";

const ProfileStyle = StyleSheet.create({
    // container:{
    //     flex: 1,
    //     backgroundColor: "white"
    // },
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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom:20
    },
    cardHeader: {
        backgroundColor: "#2D303F",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 10,
    },
    cardHeaderText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
    cardContent: {
        padding: 10,
    },
    cardText: {
        fontSize: 16,
    },
    avatar:{
        alignItems: "flex-end",
        justifyContent:"center",
        flexDirection:"row"
    },
    viewBtnSIUP:{
        width:"50%",
        marginBottom:10,
        justifyContent:"center"
    }
})

export default ProfileStyle