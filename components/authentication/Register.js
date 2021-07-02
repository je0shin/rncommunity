import React, { useState } from 'react'
import { View, Button, TextInput } from 'react-native'
import firebase from 'firebase';

export default function Register() {
    
    const [user, setUser] = useState({email : '',
                                    password : '',
                                    name: ''});
    
    const onSignUp = () => {
        const {email, password, name} = user;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                firebase.firestore().collection("users")
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        name,
                        email
                    })
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <View>
                <TextInput
                    placeholder="name"
                    onChangeText={(val) => setUser({name: val, email: user.email, password: user.password})}
                />
                <TextInput
                    placeholder="email"
                    onChangeText={(val) => setUser({name: user.name, email: val, password: user.password})}
                />
                <TextInput 
                    placeholder="password"
                    secureTextEntry= {true}
                    onChangeText={(val) => setUser({name: user.name, email: user.email, password: val})}
                />

                <Button
                    onPress={() => onSignUp()}
                    title="Submit"
                />
        </View>
    )
}