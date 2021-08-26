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
        <Button color='#D3D3D3' title="Sign out" onPress={signOut}/>
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
<<<<<<< HEAD
=======
            <Text>{currUser.name}</Text>
            <Text>{currUser.email}</Text>
>>>>>>> 1ac7731496c24e683eb869a94719bd0f5e75c81b
            <LogOut/>
            <View>
                <Text style={profileStyle.details}>Name: {currUser.name}</Text>
                <Text style={profileStyle.details}>Email: {currUser.email}</Text>
                <Text style={profileStyle.details}>Number of posts: {currUser.postCount}</Text>
                <Text style={profileStyle.details}>Number of likes: {currUser.likeCount}</Text>
            </View>
        </View>
    )
}

const profileStyle = StyleSheet.create({
    container: {
      backgroundColor: 'rgb(237,237,237)',
      marginLeft: 7,
      marginRight: 7,
      height: '100%'
    },
    details: {
        textAlign: 'center',
    }
  })