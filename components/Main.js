import React from 'react'
import { StyleSheet, View, Button } from 'react-native';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { fetchUser } from '../redux/actions/index';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const mapDispatchProps = (dispatch) => bindActionCreators

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
        <Tab.Screen name="logout" component={Logout} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    )
}