import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import { useSelector } from 'react-redux';


export default function FreeMain({ navigation }) {
    const [chats, setChats] = useState([]);
    const chatPosts = useSelector(state => state.chatsState)

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log("freemain useeffect When focused")
            setChats(chatPosts.chats)
            console.log("freemain useeffect When focused")

        })
        
        return unsubscribe
    }, [navigation])
    console.log(chats)
    return(
        <View>
            <Text> Test </Text>
            <FlatList
                data={chats}
                renderItem={({item}) => (
                    <View>
                        <Text> {item.chat.content} </Text>
                    </View>
                )}
            />
        </View>
    )
}