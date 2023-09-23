import {Alert, PermissionsAndroid, ScrollView, View} from "react-native";
import LoginStyle from "./ProfileStyle"
import {TextInput, Text, Button, Avatar, IconButton} from "@react-native-material/core"
import React, {useEffect, useState} from "react";
import {Picker} from "@react-native-picker/picker";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import * as DocumentPicker from 'expo-document-picker';
import {Profile} from "./Profile";
import {useSelector} from "react-redux";

export default function ProfileScreen({profile}){
    const {getDebtor, onUpdate, getUMKMByDebtorId, onUpdateUmkm, onCreateUmkm} = profile()

    // Data Profile
    const [debtorId, setDebtorId] = useState("")
    const [filePhoto, setFilePhoto] = useState("")
    const [nik, setNik] = useState("")
    const [npwp, setNpwp] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [birthPlace, setBirthPlace] = useState("")
    const [handphone, setHandphone] = useState("")
    const [gender, setGender] = useState("")
    const [birthDate, setBirthDate] = useState("")
    const [job, setJob] = useState("")
    const [status, setStatus] = useState("")
    const [address, setAddress] = useState("")

    // Data UMKM
    const [umkmId, setUmkmId] = useState("")
    const [fileSIUP, setFileSIUP] = useState("")
    const [documentId, setDocumentId] = useState("")
    const [umkmName, setUmkmName] = useState("")
    const [noSiup, setNoSiup] = useState("")
    const [capital, setCapital] = useState("0")
    const [bankAccount, setBankAccount] = useState("")
    const [umkmType, setUmkmType] = useState("")
    const [addressUmkm, setAddressUmkm] = useState("")

    const loadData = async () => {
        const dataDebtor = await getDebtor()
        setDebtorId(dataDebtor.debtorId)
        setNik(dataDebtor.nik)
        setNpwp(dataDebtor.npwp)
        setName(dataDebtor.name)
        setEmail(dataDebtor.email)
        setBirthPlace(dataDebtor.birthPlace)
        setHandphone(dataDebtor.handphone)
        setGender(dataDebtor.gender)
        setBirthDate(dataDebtor.birthDate)
        setJob(dataDebtor.job)
        setStatus(dataDebtor.status)
        setAddress(dataDebtor.address)

        const dataUmkm = await getUMKMByDebtorId(dataDebtor.debtorId)
        setUmkmId(dataUmkm.umkmId)
        setNoSiup(dataUmkm.noSiup)
        setUmkmName(dataUmkm.umkmName)
        setAddressUmkm(dataUmkm.address)
        setCapital(dataUmkm.capital.toString())
        setUmkmType(dataUmkm.umkmType)
        setBankAccount(dataUmkm.bankAccount)
        setDocumentId(dataUmkm.documentId)
    }

    useEffect(() => {
        loadData()
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
        console.log("filePhoto", filePhoto)
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
            console.warn(err);
            return null;
        }
    }

    const submitDataDebtor = {
        debtorId,
        nik,
        npwp,
        name,
        handphone,
        birthPlace,
        birthDate,
        gender,
        status,
        address,
        job
    }
    const submitProfile = () => {
        setInputErrors({})
        const errors = validateInputsProfile()
        if (Object.keys(errors).length > 0) {
            setInputErrors(errors);
        } else {
            onUpdate(submitDataDebtor, () => loadData())
        }
    }
    let umkmUpdate = {
        umkmId,
        noSiup,
        umkmName,
        address:addressUmkm,
        capital:parseFloat(capital),
        umkmType,
        bankAccount
    }
    let umkmCreate = {
        debtorId,
        noSiup,
        umkmName,
        address:addressUmkm,
        capital:parseFloat(capital),
        umkmType,
        bankAccount
    }
    const submitUmkm = () => {
        setInputErrorsUmkm({})
        const errors = validateInputsUmkm()
        if(Object.keys(errors).length > 0){
            setInputErrorsUmkm(errors)
        }else{
            if(umkmId){
                onUpdateUmkm(umkmUpdate, () => loadData())
            }else{
                onCreateUmkm(umkmCreate, () => loadData())
            }
        }
    }

    const [inputErrors, setInputErrors] = useState({});
    const [inputErrorsUmkm, setInputErrorsUmkm] = useState({});

    const validateInputsProfile = () => {
        const errors = {}
        if (nik.trim() === "") {
            errors.validNik = "NIK is required";
        }
        if(npwp.trim() === ""){
            errors.validNPWP = "NPWP is required"
        }
        if(name.trim() === ""){
            errors.validName = "Name is required"
        }
        if(email.trim() === ""){
            errors.validEmail = "Email is required"
        }
        if(birthPlace.trim() === ""){
            errors.validBirthPlace = "Birth Plce is required"
        }
        if(handphone.trim() === ""){
            errors.validHandphone = "Handphone is required"
        }
        if(gender.trim() === ""){
            errors.validGender = "Gender is required"
        }
        if(birthDate.trim() === ""){
            errors.validBirthDate = "Birth Date is required"
        }
        if(job.trim() === ""){
            errors.validJob = "Job is required"
        }
        if(status.trim() === "") errors.validStatus = "Status is required"
        if(address.trim() === "") errors.validAddress = "Address is required"

        return errors;
    };

    const validateInputsUmkm = () => {
        const errors = {};

        if(umkmName.trim() === "") errors.validUmkmName = "Name is required"
        if(noSiup.trim() === "") errors.validNoSiup = "No. SIUP is required"
        if(!capital.trim()) errors.validCapital = "Capital is invalid"
        if(bankAccount.trim() === "") errors.validBankAccount = "Bank Account is required"
        if(umkmType.trim() === "") errors.validUmkmType = "Type is required"
        if(addressUmkm.trim() === "") errors.validAddressUmkm = "Address is required"

        return errors
    }

    const isErrorView = (errorValidation) => {
        if (errorValidation) {
            return (
                <Text style={{ color: "red", marginBottom: 7 }}>
                    {errorValidation}
                </Text>
            );
        }
    };

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
                                        setFilePhoto(data)
                                    })
                                }
                            } icon={props => <Icon name="camera" {...props} />} />
                        </View>

                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="* NIK" variant="standard" value={nik} onChangeText={(val) => setNik(val)} />
                        {isErrorView(inputErrors.validNik)}
                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="* NPWP" variant="standard" value={npwp} onChangeText={(val) => setNpwp(val)} />
                        {isErrorView(inputErrors.validNPWP)}
                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="* Name" variant="standard" value={name} onChangeText={(val) => setName(val)} />
                        {isErrorView(inputErrors.validName)}
                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="* Email" keyboardType="email-address" variant="standard" editable={false} value={email} onChangeText={(val) => setEmail(val)} />
                        {isErrorView(inputErrors.validEmail)}
                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="* Birth Place" variant="standard" value={birthPlace} onChangeText={(val) => setBirthPlace(val)} />
                        {isErrorView(inputErrors.validBirthPlace)}
                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="* Number Phone" keyboardType="numeric" variant="standard" value={handphone} onChangeText={(val) => setHandphone(val)} />
                        {isErrorView(inputErrors.validHandphone)}
                        <Text style={{marginTop:5}}>* Gender</Text>
                        <Picker
                            selectedValue={gender}
                            onValueChange={(itemValue, itemIndex) =>
                                setGender(itemValue)
                            }>
                            <Picker.Item label="Select Gender" value=""/>
                            <Picker.Item label="Male" value="male"/>
                            <Picker.Item label="Female" value="Female" />
                        </Picker>
                        {isErrorView(inputErrors.validGender)}
                        <TextInput color={"#2D303F"} label="* Birth Date" variant="standard" value={birthDate} onChangeText={(val) => setBirthDate(val)} />
                        {isErrorView(inputErrors.validBirthDate)}
                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="* Job" variant="standard" value={job} onChangeText={(val) => setJob(val)}/>
                        {isErrorView(inputErrors.validJob)}
                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="* Status" variant="standard" value={status} onChangeText={(val) => setStatus(val)}/>
                        {isErrorView(inputErrors.validStatus)}
                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="* Address" variant="standard" value={address} onChangeText={(val) => setAddress(val)}/>
                        {isErrorView(inputErrors.validAddress)}
                        <Button style={{marginTop:10}} title="Save" onPress={submitProfile}></Button>
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
                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="* Name" variant="standard" value={umkmName} onChangeText={(val) => setUmkmName(val)}/>
                        {isErrorView(inputErrorsUmkm.validUmkmName)}
                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="* No. SIUP" variant="standard" value={noSiup} onChangeText={(val) => setNoSiup(val)}/>
                        {isErrorView(inputErrorsUmkm.validNoSiup)}
                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="* Capital" keyboardType="numeric" variant="standard" value={capital} onChangeText={(val) => setCapital(val)}/>
                        {isErrorView(inputErrorsUmkm.validCapital)}
                        <TextInput color={"#2D303F"} style={{marginTop:5}} label="* Bank Account" keyboardType="numeric" variant="standard" value={bankAccount} onChangeText={(val) => setBankAccount(val)}/>
                        {isErrorView(inputErrorsUmkm.validBankAccount)}
                        <Text style={{marginTop:5}}>* Type</Text>
                        <Picker
                            selectedValue={umkmType}
                            onValueChange={(itemValue, itemIndex) =>
                                setUmkmType(itemValue)
                            }>
                            <Picker.Item label="Select Type" value=""/>
                            <Picker.Item label="Mikro" value="mikro"/>
                            <Picker.Item label="Kecil" value="kecil" />
                            <Picker.Item label="Menengah" value="menengah" />
                        </Picker>
                        {isErrorView(inputErrorsUmkm.validUmkmType)}
                        <TextInput color={"#2D303F"} label="* Address" variant="standard" value={addressUmkm} onChangeText={(val) => setAddressUmkm(val)}/>
                        {isErrorView(inputErrorsUmkm.validAddressUmkm)}
                        <Button style={{marginTop:10}} title="Save" onPress={submitUmkm}></Button>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}