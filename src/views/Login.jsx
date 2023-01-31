import { View, Text, Alert } from 'react-native';
import React, { Component } from 'react';
import InputPass from '../components/InputPass';
import ButtonTouch from '../components/Button';
import Inputs from '../components/Inputs';
import { signUpStyles, styleComponents, StyleScreen } from '../theme/StyleSignUp';
import { auth } from '../db/firebaseConfig';

import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth/react-native';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      checked2: false,
      email: '',
      password: '',
    };
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  changeEmail(text) {
    this.setState({ ...this.props.state, email: text });
  }
  changePassword(text) {
    this.setState({ ...this.props.state, password: text });
  }

  changeEmail(text) {
    const mail =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    this.setState({ ...this.props.state, email: text }, () => {
      if (this.state.email == '') {
        this.setState({ ...this.props.state, showMailerror: false });
      } else if (!this.state.email.match(mail)) {
        this.setState({ ...this.props.state, showMailerror: true });
      } else if (this.state.email.match(mail)) {
        this.setState({ ...this.props.state, showMailerror: false });
      }
    });
  }
  handleSignIn = () => {
    signInWithEmailAndPassword(auth, this.state.email, this.state.password)
      .then((userCredential) => {
        // Signed in
        this.props.navigation.navigate('MyFlights');
        // ...
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/user-not-found':
            Alert.alert('Email not registered');
            break;
          case 'auth/wrong-password':
            Alert.alert('Incorrect password');
            break;
          default:
            Alert.alert(`Email or password invalid. Please review your data`);
            break;
        }
        // ..
      });
  };

  render() {
    return (
      <View style={signUpStyles.container2}>
        <View>
          <View style={styleComponents.containerInput}>
            <Text style={styleComponents.StyleHeader2}>Login</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styleComponents.StyleTextInput}>Email *</Text>
              {this.state.showMailerror && (
                <Text style={styleComponents.StyleTextInputError}>
                  Email in use or invalid. Use a different email
                </Text>
              )}
            </View>

            <Inputs onEmailChange={(text) => this.changeEmail(text)} value={this.state.email} />
            <Text style={styleComponents.StyleTextInput}>Password *</Text>
            <InputPass onPassChange={this.changePassword} value={this.state.password} />
          </View>

          <View>
            <ButtonTouch
              text='Login'
              state={this.state.email != '' && this.state.password != '' ? true : false}
              screenNav='MyFlights'
              navegation={this.props.navigation}
              onPress={() => {
                if (this.state.email != null && this.state.password != null) {
                  this.handleSignIn();
                }
              }}
            />

            <Text style={StyleScreen.OrStyle}>or</Text>
            <ButtonTouch
              text='Login with Google'
              state={true}
              googleSign='https://freesvg.org/img/1534129544.png'
            />
          </View>
          <View style={StyleScreen.containerTextBot}>
            <Text style={StyleScreen.TextBot1}>Don't have an account? </Text>
            <Text
              style={StyleScreen.textBot2}
              onPress={() => {
                this.props.navigation.navigate('SignUp');
                this.setState({ ...this.props.state, email: '', password: '' });
              }}
            >
              Register
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
