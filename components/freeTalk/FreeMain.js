import React, { useState, useEffect } from "react";
import { View, Text } from 'react-native';
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../redux/actions/index'

export default function FreeMain() {
    const isLoaded = useSelector(state => state.chatsState)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])
    console.log(isLoaded)
    return(
        <View>
            
        </View>
    )
}