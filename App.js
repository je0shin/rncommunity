import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

import LandingPage from './components/authentication/Landing';
import RegisterPage from './components/authentication/Register';
import LoginPage from './components/authentication/Login';

const Stack = createStackNavigator();

const App = () => {   
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  //Register

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing"
                      component={LandingPage}
                      options={{ headerShown: false}}/>
        <Stack.Screen name="Register"
                      component={RegisterPage}
                      options={{ headerShown: false}}/>
        <Stack.Screen name="Login"
                      component={LoginPage}
                      options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default App;
