import React from 'react'
import { View, Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth'

const signOut = () => {
    auth().signOut()
      .then(() => console.log('Signing out'));
}
  
function LogOut() {
    return(
        <Button title="Sign out" onPress={signOut}/>
    )
} 

export default function ProfileMain() {
    
    return(
        <LogOut/>
    )
}