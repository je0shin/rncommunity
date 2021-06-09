import React, { useState } from 'react'
import { View, Button, TextInput } from 'react-native'
import auth from '@react-native-firebase/auth';

export default function Register() {
    
    const [user, setUser] = useState({email : '',
                                    password : '',
                                    name: ''});
    
    function onSignUp() {
        const {email, password, name} = user;
        auth().createUserWithEmailAndPassword(email, password)
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
                    placeholder="name"
                    onChangeText={(name) => user.setState({name: name,
                                                            password: user.password,
                                                            email: user.email})}
                />
                <TextInput 
                    placeholder="email"
                    onChangeText={(email) => user.setState({ email })}
                />
                <TextInput 
                    placeholder="password"
                    secureTextEntry= {true}
                    onChangeText={(password) => user.setState({ password })}
                />

                <Button
                    onPress={() => onSignUp}
                    title="Submit"
                />
        </View>
    )
}