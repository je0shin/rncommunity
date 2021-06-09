import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function Landing({ navigation }) {
    return (
        <View style={styles.wrap}>
            <Button
                title="Sign up"
                onPress={() => navigation.navigate("Register")}/>
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center'
    },
});