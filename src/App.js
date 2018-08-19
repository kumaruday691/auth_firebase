import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCXUPP_LzHuMFcVd0Tux5I8No9uzEy5hTA",
            authDomain: "fir-auth-1128f.firebaseapp.com",
            databaseURL: "https://fir-auth-1128f.firebaseio.com",
            projectId: "fir-auth-1128f",
            storageBucket: "fir-auth-1128f.appspot.com",
            messagingSenderId: "666370919850"
        });
    }

    render () {
        return (
            <View>
                <Header headerText="Authentication"/>
                <LoginForm />
            </View>
        );
    }
}

export default App;
