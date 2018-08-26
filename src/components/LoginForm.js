import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, Input, Spinner} from "./common";

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false};

    onButtonPress() {
        const { email, password} = this.state;

        this.setState({error: '', loading: true});
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
               firebase.auth().createUserWithEmailAndPassword(email, password)
                   .then(this.onLoginSuccess.bind(this))
                   .catch(this.onLoginFailed.bind(this));
            });
    }

    onLoginFailed() {
        this.setState({error: 'Authentication failed', loading: false})
    }
    onLoginSuccess() {
        this.setState (
            {
                email: '',
                password: '',
                error: '',
                loading: false
            }
        );
    }
    renderButton() {
        if (this.state.loading) {
            return <Spinner size= "small"/>
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}> Log In </Button>
        );
    }

    render() {
        return (
          <Card>
              <CardSection>
                  <Input
                      label="Email"
                      value={this.state.email}
                      onChangeTextFnc={ email => this.setState({ email })}
                      placeHolder="user@gmail.com"
                  />
              </CardSection>

              <CardSection>
                  <Input
                      label="Password"
                      value={this.state.password}
                      onChangeTextFnc={ password => this.setState({ password })}
                      placeHolder="password"
                      secure
                  />
              </CardSection>

              <Text style={styles.errorStyle}>
                  {this.state.error}
              </Text>

              <CardSection>
                  {this.renderButton()}
              </CardSection>
          </Card>
        );
    }
}

const styles = {
    errorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;
