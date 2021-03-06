import React, { useState } from 'react'
import { View, Button, TextInput } from 'react-native'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

export default function Register() {
    
    const [user, setUser] = useState({email : '',
                                    password : '',
                                    name: ''});
    
    const onSignUp = () => {
        const {email, password, name} = user;
        auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                firestore().collection("users")
                    .doc(auth().currentUser.uid)
                    .set({
                        name,
                        email,
                        postCount: 0
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