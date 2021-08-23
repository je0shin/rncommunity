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
        </View>
    )
}