import {ScrollView, View} from "react-native";
import LoginStyle from "./ProfileStyle"
import {TextInput, Text, Button, Avatar} from "@react-native-material/core"
import {useState} from "react";
import {Picker} from "@react-native-picker/picker";

export default function ProfileScreen(){
    const [nik, setNik] = useState("")
    const [selectedGender, setSelectedGender] = useState()
    const [selectedType, setSelectedType] = useState()

    return(
        <ScrollView>
            <View style={LoginStyle.container}>
                <View style={LoginStyle.card}>
                    <View style={LoginStyle.cardHeader}>
                        <Text style={LoginStyle.cardHeaderText}>Profile Detail</Text>
                    </View>
                    <View style={LoginStyle.cardContent}>
                        <View style={LoginStyle.avatar}>
                            <Avatar size={150} image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
                        </View>

                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="NIK" variant="standard" value={nik} onChangeText={(val) => setNik(val)} />
                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="NPWP" variant="standard" />
                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="Name" variant="standard" />
                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="Email" keyboardType="email-address" variant="standard" />
                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="Birth Place" variant="standard" />
                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="Number Phone" keyboardType="numeric" variant="standard" />
                        <Text style={{marginTop:5}}>Gender</Text>
                        <Picker
                            selectedValue={selectedGender}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedGender(itemValue)
                            }>
                            <Picker.Item label="Select Gender" value=""/>
                            <Picker.Item label="Male" value="male"/>
                            <Picker.Item label="Female" value="Female" />
                        </Picker>
                        <TextInput color={"#2D303F"} label="Birth Date" variant="standard" />
                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="Job" variant="standard" />
                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="Status" variant="standard" />
                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="Address" variant="standard" />
                        <Button style={{marginTop:10}} title="Save"></Button>
                    </View>
                </View>

                <View style={LoginStyle.card}>
                    <View style={LoginStyle.cardHeader}>
                        <Text style={LoginStyle.cardHeaderText}>UMKM Detail</Text>
                    </View>
                    <View style={LoginStyle.cardContent}>
                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="Name" variant="standard" />
                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="No. SIUP" keyboardType="numeric" variant="standard" />
                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="Capital" keyboardType="numeric" variant="standard" />
                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="Bank Account" keyboardType="numeric" variant="standard" />
                        <Text style={{marginTop:5}}>Type</Text>
                        <Picker
                            selectedValue={selectedType}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedType(itemValue)
                            }>
                            <Picker.Item label="Select Type" value=""/>
                            <Picker.Item label="Mikro" value="mikro"/>
                            <Picker.Item label="Kecil" value="kecil" />
                            <Picker.Item label="Menengah" value="menengah" />
                        </Picker>

                        <TextInput color={"#2D303F"} label="Address" variant="standard" />
                        <Button style={{marginTop:10}} title="Save"></Button>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}