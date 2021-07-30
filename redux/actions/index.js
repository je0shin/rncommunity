import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { USER_STATE_CHANGE } from '../constants/index'

export const fetchUser = () => dispatch => {
    auth().onAuthStateChanged((user) => {
        if (user) {
            firestore().collection("users")
                .doc(auth().currentUser.uid)
                .get()
                .then((snapshot) => {
                    if(snapshot.exists) {
                        dispatch({type: USER_STATE_CHANGE, currentUser: snapshot.data(), loaded: true})
                    } else {
                        console.log('nope')
                    }
                })
        } else {
            dispatch({type: USER_STATE_CHANGE, currentUser: null, loaded: true})
        }
    })
}