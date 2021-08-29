import React, { useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { fetchUser, fetchPosts } from '../redux/actions/index';
import FreeMain from './freeTalk/FreeMain';
import PostChat from './freeTalk/PostChat';
import ProfileMain from './profile/ProfileMain';

const Tab = createBottomTabNavigator()

export default function Main() {
    const currUser = useSelector(state => state.userState)
    const currChats = useSelector(state => state.chatsState)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUser())
        console.log("main useeffect")
        dispatch(fetchPosts())
    }, [])
    
    console.log(currChats)
    console.log(currUser)

    if (!currUser.isLoaded) {
      return(
        <View>
          <Text> User not loaded </Text>
        </View>
      )
    }
    return (
      <Tab.Navigator activeColor="#90EE90">
        <Tab.Screen name="FreeMain"
          component={FreeMain}
          options= {{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="chat" color={color} size={26} />
            ),
          }} />
        <Tab.Screen name="PostChat"
          component={PostChat}
          options= {{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="post" color={color} size={26} />
            ),
          }} />
        <Tab.Screen name="ProfileMain"
          component={ProfileMain}
          options= {{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }} />
      </Tab.Navigator>
    )
}

const mainStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
})