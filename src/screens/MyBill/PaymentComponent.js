import {Image, StyleSheet, Text, View} from "react-native";

export default function PaymentComponent({ data }){
    return(
        <View style={styles.container}>
            <Image source={require('../../shared/assets/payment.png')} style={styles.image} />
            <View style={styles.content}>
                <Text style={{fontWeight:'bold'}}>Bill Information:</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.textContent}>Debt:</Text>
                <Text style={styles.textContent}>Rp {data.debt.toLocaleString()}</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.textContent}>Due Date:</Text>
                <Text style={styles.textContent}>{data.dueDate}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    image: {
        height: 200,
        width: 200,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textContent: {
        fontSize: 18
    }
})