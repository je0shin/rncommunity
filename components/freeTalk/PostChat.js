import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Image, Button } from "react-native";
// import { useDispatch, useSelector } from 'react-redux';
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import { launchImageLibrary } from "react-native-image-picker";

// function getImageFromLib(setImage) {
//     const options = {
//         quality: 1,
//     }

//     launchImageLibrary(options, (responseObj) => {
//         if (responseObj.didCancel) {
//             console.log('User cancelled')
//         } else if (responseObj.errorCode) {
//             console.log('error code' + responseObj.errorCode)
//         } else if (responseObj.assets) {
//             setImage(responseObj.uri)
//         }
//         console.log(responseObj.uri)

//     })
// }

const postChat = (text) => {
    firestore().collection("freeChat")
        .add({
            content: text,
            dislikeCount: 0,
            likeCount: 0,
            posted: firestore.FieldValue.serverTimestamp(),
            user: firestore().collection("users").doc(auth().currentUser.uid),
        })
        .then(() => {
            console.log('User added!');
          });
    console.log("psot pressed")
}

// function AddImageSection() {
//     const [image, setImage] = useState(null)
//     const [buttonText, setButtonText] = useState("Add Image")

//     useEffect(() => {
//         console.log(image)
//         if (image) {
//             setButtonText("Change Image")
//         } else {
//             setButtonText("Add Image")
//         }
//     }, [image])

//     return(
//         <View>
//             <Button
//               onPress={() => getImageFromLib(setImage)}
//               title={buttonText}  
//             />
//         </View>
//     )
// }

export default function PostChat() {
    const [text, setText] = useState(null)

    return(
        <View>
            <TextInput
                placeholder="Enter your chat here"
                onChangeText={(val) => setText(val)}
            />
            {/* <AddImageSection/> */}
            <Button
                onPress={() => postChat(text)}
                title="Post"
            />
        </View>
    )
}

const styles = StyleSheet.create({

});