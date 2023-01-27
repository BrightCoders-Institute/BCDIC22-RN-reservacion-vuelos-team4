import { View, Text } from 'react-native';
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
  handleSignIn = () => {
    signInWithEmailAndPassword(auth, this.state.email, this.state.password)
      .then((userCredential) => {
        // Signed in
        this.props.navigation.navigate('MyFlights');
        // ...
      })
      .catch((error) => {
        Alert.alert(error);
        // ..
      });
  };

  render() {
    return (
      <View style={signUpStyles.container2}>
        <View>
          <View style={styleComponents.containerInput}>
            <Text style={styleComponents.StyleHeader2}>Login</Text>
            <Text style={styleComponents.StyleTextInput}>Email *</Text>
            <Inputs onEmailChange={this.changeEmail} value={this.state.email} />
            <Text style={styleComponents.StyleTextInput}>Password *</Text>
            <InputPass onPassChange={this.changePassword} value={this.state.pass} />
          </View>

          <View>
            <ButtonTouch
              text='Login'
              state={false}
              screenNav='MyFlights'
              navegation={this.props.navigation}
              onPress={() => {
                this.handleSignIn();
              }}
            />
            <Text style={StyleScreen.OrStyle}>or</Text>
            <ButtonTouch
              text='Login with Google'
              state={false}
              googleSign='https://aws1.discourse-cdn.com/auth0/optimized/3X/8/a/8a06490f525c8f65d4260204bc3bc7b0e1fb0ba7_2_500x500.png'
            />
          </View>
          <View style={StyleScreen.containerTextBot}>
            <Text style={StyleScreen.TextBot1}>Don't have an account? </Text>
            <Text
              style={StyleScreen.textBot2}
              onPress={() => {
                this.props.navigation.navigate('SignUp');
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
