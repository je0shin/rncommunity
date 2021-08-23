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
        </View>
    )
}