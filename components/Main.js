import React, { useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { fetchUser } from '../redux/actions/index';
import FreeMain from './freeTalk/FreeMain';
import ProfileMain from './profile/ProfileMain';

const mapDispatchProps = (dispatch) => bindActionCreators
const Tab = createBottomTabNavigator()

function Yes() {
    return(
        <View style={mainStyle.container}>
          <Text> Yess </Text>
        </View>
    )
} 
export default function Main( props ) {
    useEffect(() => {
        fetchUser();
    }, [])
    
    return (
      <Tab.Navigator >
        <Tab.Screen name="FreeMain"
          component={FreeMain}
          options= {{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="chat" color={color} size={26} />
            ),
          }} />
        <Tab.Screen name="Yes"
          component={Yes}
          options= {{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
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