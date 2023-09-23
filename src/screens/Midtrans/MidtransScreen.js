import React, {useEffect, useState} from 'react';
import { WebView } from 'react-native-webview';
import {useRoute} from "@react-navigation/native";

const MidtransScreen = () => {
    const [uri, setUri] = useState('');
    const route = useRoute();

    useEffect(() => {
        setUri(route.params.url);
    }, [route.params.url]);
    return (
        <WebView
            source={{ uri: uri }} // Ganti dengan URL yang sesuai
            style={{ flex: 1 }} // Atur gaya WebView sesuai kebutuhan Anda
            javaScriptEnabled={true}
            javaScriptCanOpenWindowsAutomatically={true}
            domStorageEnabled={true}
            cacheEnabled={true}
            allowFileAccessFromFileURLs={true}
            allowFileAccess={true}
            cacheMode="LOAD_NO_CACHE"
        />
    );
};

export default MidtransScreen;