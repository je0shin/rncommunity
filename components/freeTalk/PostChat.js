import { useState, useEffect } from "react";
import { ViewBase, Text, TextInput, StyleSheet, Image } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

export default function PostChat() {
    const [hasPermission, setHasPermission] = userState(null)
    const [image, setImage] = userState(null)
    const [text, setText] = useState(null)

    useEffect(() => {

    }, [])

    return(
        <View> </View>
    )
}