<<<<<<< HEAD
import React from 'react'
import { View, Text, FlatList, TextInput } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useState } from 'react'

export default function FreeMain() {
    const [theText, setTheText] = useState({scissor: "",
                                            rock: "",
                                            paper: ""})
    return(
        <View>
            <FlatList/>
            <View>
                <Text>{theText.scissor}</Text>
                <TextInput 
                    placeholder="Enter message here..."
                    value={theText.scissor}
                    onChangeText={(val) => setTheText({...theText, scissor: val})}
                />
                <Text>{theText.rock}</Text>
                <TextInput 
                    placeholder="Enter message here..."
                    value={theText.rock}
                    onChangeText={(val) => setTheText({...theText, rock: val})}
                />
                <Text>{theText.paper}</Text>
                <TextInput 
                    placeholder="Enter message here..."
                    value={theText.paper}
                    onChangeText={(val) => setTheText({...theText, paper: val})}
                />
            </View>
=======
import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import { useDispatch, useSelector } from 'react-redux';


export default function FreeMain() {
    const [chats, setChats] = useState([]);
    const chatsR = useSelector(state => state.chatsState)
    useEffect(() => {
        setChats(chatsR)
    }, [useSelector(state => state.chatsState)])
    
    console.log(chatsR)
    console.log(chats)
    return(
        <View>
            <FlatList
                numcolumns={1}
                data={chats}
                renderItem={({item}) => (
                    <View>
                        <Text> {item.content} </Text>
                    </View>
                )}
            />
>>>>>>> 504dd3c69a1039baf8e349d5b72641dc9a5b41f0
        </View>
    )
}