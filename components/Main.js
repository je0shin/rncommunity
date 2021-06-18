import React from 'react'
import { StyleSheet, View, Button } from 'react-native';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { fetchUser } from '../redux/actions/index';

const mapDispatchProps = (dispatch) => bindActionCreators

export default function Main() {
    useEffect(() => {

    }, [])
    return (
        <View>
            <Button title="Sign out" onPress={signOut}/>
        </View>
    )
}

import React from 'react'

export default function Main() {
    return (
        <div>
            
        </div>
    )
}
