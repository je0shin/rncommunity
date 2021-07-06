import React, { useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
        <Tab.Screen name="Yes" component={Yes} options={{ tabBarBadge: 3 }}/>
        <Tab.Screen name="FreeMain" component={FreeMain} />
        <Tab.Screen name="ProfileMain" component={ProfileMain} />
      </Tab.Navigator>
    )
}

const mainStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
})