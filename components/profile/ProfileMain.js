import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import auth from '@react-native-firebase/auth'
import { useSelector } from 'react-redux';

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
    const currUser = useSelector(state => state.userState.currentUser)
    console.log("currUser: ")
    console.log(currUser)

    useEffect(() => {

    }, [])
    return(
        <View style={profileStyle.container}>
            <Text>{currUser.name}</Text>
            <LogOut/>
        </View>
    )
}

const profileStyle = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
  })