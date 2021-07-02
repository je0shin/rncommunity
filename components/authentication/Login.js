import React, { useState } from 'react'
import { View, Button, TextInput } from 'react-native'
import firebase from 'firebase';

export default function Register() {
    
    const [user, setUser] = useState({email : '',
                                    password : '',
                                    name: ''});
    
    const onSignIn = () => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <View>
                <TextInput 
                    placeholder="email"
                    onChangeText={(val) => setUser({email: val, password: user.password})}
                />
                <TextInput 
                    placeholder="password"
                    secureTextEntry= {true}
                    onChangeText={(val) => setUser({email: user.email, password: val})}
                />

                <Button
                    onPress={() => onSignIn()}
                    title="Submit"
                />
            </View>
    )
}