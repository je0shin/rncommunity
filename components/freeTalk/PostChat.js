import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Image, Button } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

const postChat = () => {
    console.log("psot pressed")
}

function AddImageSection() {
    const [image, setImage] = useState(null)
    const [buttonText, setButtonText] = useState("Add Image")

    useEffect(() => {
        if (image) {
            setButtonText("Change Image")
        } else {
            setButtonText("Add Image")
        }
    }, [image])

    return(
        <View>
            <Button
              onPress={() => console.log("add pressed")}
              title={buttonText}  
            />
        </View>
    )
}

export default function PostChat() {
    const [text, setText] = useState(null)

    return(
        <View>
            <TextInput
                placeholder="Enter your chat here"
                onChangeText={(val) => setText(val)}
            />
            <AddImageSection/>
            <Button
                onPress={() => postChat()}
                title="Post"
            />
        </View>
    )
}

const styles = StyleSheet.create({

});