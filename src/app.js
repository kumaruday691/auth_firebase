import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner, Card, CardSection} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCXUPP_LzHuMFcVd0Tux5I8No9uzEy5hTA",
            authDomain: "fir-auth-1128f.firebaseapp.com",
            databaseURL: "https://fir-auth-1128f.firebaseio.com",
            projectId: "fir-auth-1128f",
            storageBucket: "fir-auth-1128f.appspot.com",
            messagingSenderId: "666370919850"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if  (user) {
                this.setState ( { loggedIn: true});
            } else {
                this.setState ( { loggedIn: false});
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <View>
                        <Header headerText="Authenticated"/>
                        <Card>
                            <CardSection>
                                <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                            </CardSection>
                        </Card>
                    </View>
                );
            case false:
                return (
                    <View>
                        <Header headerText="Authentication"/>
                        <LoginForm/>
                    </View>
                );
            default:
                return (
                    <View>
                        <Header headerText="Contacting Firebase ..."/>
                        <Spinner size="large" />
                    </View>
                );
        }
    }

    render () {
        return (
            <View>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
