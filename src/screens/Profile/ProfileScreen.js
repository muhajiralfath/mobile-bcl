import {Alert, PermissionsAndroid, ScrollView, View} from "react-native";
import LoginStyle from "./ProfileStyle"
import {TextInput, Text, Button, Avatar, IconButton} from "@react-native-material/core"
import {useEffect, useState} from "react";
import {Picker} from "@react-native-picker/picker";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import * as DocumentPicker from 'expo-document-picker';
import {Profile} from "./Profile";
import {useSelector} from "react-redux";

export default function ProfileScreen({profile}){
    const [nik, setNik] = useState(useSelector((state) => state.debtor.debtor.nik))
    const [npwp, setNpwp] = useState(useSelector((state) => state.debtor.debtor.npwp))
    const [name, setName] = useState(useSelector((state) => state.debtor.debtor.name))
    const [email, setEmail] = useState(useSelector((state) => state.debtor.debtor.email))
    const [birthPlace, setBirthPlace] = useState(useSelector((state) => state.debtor.debtor.birthPlace))
    const [handphone, setHandphone] = useState(useSelector((state) => state.debtor.debtor.handphone))
    const [gender, setGender] = useState(useSelector((state) => state.debtor.debtor.gender))
    const [birthDate, setBirthDate] = useState(useSelector((state) => state.debtor.debtor.birthDate))
    const [job, setJob] = useState(useSelector((state) => state.debtor.debtor.job))
    const [status, setStatus] = useState(useSelector((state) => state.debtor.debtor.status))
    const [address, setAddress] = useState(useSelector((state) => state.debtor.debtor.address))

    const debtor = useSelector((state) => state.debtor.debtor);

    const [selectedType, setSelectedType] = useState("")

    const [photo, setPhoto] = useState()
    const [fileSIUP, setFileSIUP] = useState()

    const {contoh} = profile()

    useEffect(() => {
        console.log("24", debtor)
    }, []);

    const checkPermissions = async () => {
        try {
            const result = await PermissionsAndroid.check(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
            );

            if (!result) {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                    {
                        title:
                            'You need to give storage permission to download and save the file',
                        message: 'App needs access to your camera ',
                        buttonNeutral: 'Ask Me Later',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK',
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('You can use the camera');
                    return true;
                } else {
                    Alert.alert('Error', I18n.t('PERMISSION_ACCESS_FILE'));

                    console.log('Camera permission denied');
                    return false;
                }
            } else {
                return true;
            }
        } catch (err) {
            console.warn(err);
            return false;
        }
    };
    const uploadFile = () => {
        console.log("photo", photo)
        console.log("fileSIUP", fileSIUP)
    }
    async function selectFile() {
        try {
            const result = await checkPermissions();

            if (result) {
                const result = await DocumentPicker.getDocumentAsync({
                    copyToCacheDirectory: false,
                    // type: 'image/*',
                });

                return result

                if (result.type === 'success') {
                    // Printing the log realted to the file
                    console.log('res : ' + JSON.stringify(result));
                    // Setting the state to show single file attributes
                    // setPhoto(result);
                }
            }
        } catch (err) {
            // setPhoto(null);
            console.warn(err);
            return null;
        }
    }

    const submit = () => {
        console.log("debtorId", debtorId)
    }

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
                            <IconButton onPress={
                                () => {selectFile().then((data) => {
                                        setPhoto(data)
                                    })
                                }
                            } icon={props => <Icon name="camera" {...props} />} />
                        </View>

                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="NIK" variant="standard" value={nik} onChangeText={(val) => setNik(val)} />
                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="NPWP" variant="standard" value={npwp} onChangeText={(val) => setNpwp(val)} />
                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="Name" variant="standard" value={name} onChangeText={(val) => setName(val)} />
                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="Email" keyboardType="email-address" variant="standard" value={email} onChangeText={(val) => setEmail(val)} />
                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="Birth Place" variant="standard" value={birthPlace} onChangeText={(val) => setBirthPlace(val)} />
                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="Number Phone" keyboardType="numeric" variant="standard" value={handphone} onChangeText={(val) => setHandphone(val)} />
                        <Text style={{marginTop:5}}>Gender</Text>
                        <Picker
                            selectedValue={gender}
                            onValueChange={(itemValue, itemIndex) =>
                                setGender(itemValue)
                            }>
                            <Picker.Item label="Select Gender" value=""/>
                            <Picker.Item label="Male" value="male"/>
                            <Picker.Item label="Female" value="Female" />
                        </Picker>
                        <TextInput color={"#2D303F"} label="Birth Date" variant="standard" value={birthDate} onChangeText={(val) => setBirthDate(val)} />
                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="Job" variant="standard" value={job} onChangeText={(val) => setJob(val)}/>
                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="Status" variant="standard" value={status} onChangeText={(val) => setStatus(val)}/>
                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="Address" variant="standard" value={address} onChangeText={(val) => setAddress(val)}/>
                        <Button style={{marginTop:10}} title="Save" onPress={submit}></Button>
                    </View>
                </View>

                <View style={LoginStyle.card}>
                    <View style={LoginStyle.cardHeader}>
                        <Text style={LoginStyle.cardHeaderText}>UMKM Detail</Text>
                    </View>
                    <View style={LoginStyle.cardContent}>
                        <View style={LoginStyle.viewBtnSIUP}>
                            <Button title="Upload SIUP" onPress={() => {
                                selectFile().then((data) => {
                                setFileSIUP(data)
                            })
                            }}/>
                        </View>
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