import React from 'react'
import { StyleSheet, View, Button } from 'react-native';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import firebase from 'firebase';

import { fetchUser } from '../redux/actions/index';
import FreeMain from './freeTalk/FreeMain';

const mapDispatchProps = (dispatch) => bindActionCreators

const signOut = () => {
  firebase.auth()
    .signOut()
    .then(() => console.log('Signing out'));
}

function LogOut() {
    return(
        <Button title="Sign out" onPress={signOut}/>
    )
} 
export default function Main( props ) {
    useEffect(() => {
        props.fetchUser();
    }, [])
    
    return (
      <Tab.Navigator>
        <Tab.Screen name="logout" component={LogOut} />
        <Tab.Screen name="FreeMain" component={FreeMain} />
      </Tab.Navigator>
    )
}