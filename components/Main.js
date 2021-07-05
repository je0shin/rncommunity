import React, { useEffect } from 'react'
import { StyleSheet, View, Button } from 'react-native';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth'

import { fetchUser } from '../redux/actions/index';
import FreeMain from './freeTalk/FreeMain';

const mapDispatchProps = (dispatch) => bindActionCreators
const Tab = createBottomTabNavigator()

const signOut = () => {
  auth.signOut()
    .then(() => console.log('Signing out'));
}

function LogOut() {
    return(
        <Button title="Sign out" onPress={signOut}/>
    )
} 
export default function Main( props ) {
    useEffect(() => {
        fetchUser();
    }, [])
    
    return (
      <Tab.Navigator>
        <Tab.Screen name="logout" component={LogOut} />
        <Tab.Screen name="FreeMain" component={FreeMain} />
      </Tab.Navigator>
    )
}