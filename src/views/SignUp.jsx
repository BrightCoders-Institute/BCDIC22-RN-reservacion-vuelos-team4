import { View, Text, Linking, Alert, TextInput } from 'react-native';
import React, { Component } from 'react';
import { Checkbox } from 'react-native-paper';
import ButtonTouch from '../components/Button';
import Inputs from '../components/Inputs';
import InputPass from '../components/InputPass';
import { signUpStyles, styleComponents, StyleScreen } from '../theme/StyleSignUp';
import { StyleCheck } from '../theme/StyleCheckBox';
import { COLORS } from '../theme/colors';
import { auth, newUser } from '../db/firebaseConfig';

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth/react-native';
import { contains } from '@firebase/util';
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      checked2: false,
      showMailerror: false,
      showPasserror: false,
      firstName: '',
      email: '',
      password: '',
    };
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
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

  changePassword(text) {
    const pass =
      /^.*(?=.{8,120})(?!.*\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#/$%^&*()-_=+[\]\\{}:;"',<.>?]).*$/;
    this.setState({ ...this.props.state, password: text }, () => {
      if (this.state.password == '') {
        this.setState({ ...this.props.state, showPasserror: false });
      } else if (!this.state.password.match(pass)) {
        this.setState({ ...this.props.state, showPasserror: true });
      } else if (this.state.password.match(pass)) {
        this.setState({ ...this.props.state, showPasserror: false });
      }
    });
  }

  handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, this.state.email, this.state.password)
      .then(async (userCredential) => {
        await newUser(userCredential.user.uid, this.state.firstName, this.state.email);
        Alert.alert('Account created successfully');
        this.props.navigation.navigate('Login');
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            Alert.alert('Email already in use');
            break;
          default:
            Alert.alert(`Email or password invalid. Please review your data`);
            break;
        }
      });
  };

  render() {
    return (
      <View style={signUpStyles.container}>
        <View>
          <View style={styleComponents.containerInput}>
            <Text style={styleComponents.StyleHeader}>Sign Up</Text>
            <Text style={styleComponents.StyleTextInput}>First Name</Text>
            <TextInput
              onChangeText={(text) => this.setState({ ...this.props.state, firstName: text })}
              style={styleComponents.StyleInput}
            />
            <View style={{ flexDirection: 'row' }}>
              <Text style={styleComponents.StyleTextInput}>Email *</Text>
              {this.state.showMailerror && (
                <Text style={styleComponents.StyleTextInputError}>
                  Email in use or invalid. Use a different email
                </Text>
              )}
            </View>

            <Inputs onEmailChange={(text) => this.changeEmail(text)} value={this.state.email} />
            <View style={{ flexDirection: 'row' }}>
              <Text style={styleComponents.StyleTextInput}>Password *</Text>
              {this.state.showPasserror && (
                <Text style={styleComponents.StyleTextInputError}>Invalid or weak password</Text>
              )}
            </View>

            <InputPass onPassChange={this.changePassword} value={this.state.pass} />
            <Text style={styleComponents.StyleDescText}>
              Use 8 or more characters with a mix of letters, numbers, and symbols
            </Text>
          </View>

          <View style={StyleCheck.container}>
            <Checkbox
              status={this.state.checked ? 'checked' : 'unchecked'}
              color={COLORS.BLUE}
              onPress={() => {
                this.setState({ checked: !this.state.checked });
              }}
            />
            <Text style={StyleCheck.Textcheck}>
              <Text style={StyleCheck.TextGray}>I agree to the </Text>
              <Text
                style={StyleCheck.TextSubrayado}
                onPress={() => Linking.openURL('https://www.google.com/')}
              >
                Terms
              </Text>
              <Text style={StyleCheck.TextGray}> and </Text>
              <Text
                style={StyleCheck.TextSubrayado}
                onPress={() => Linking.openURL('https://www.google.com/')}
              >
                Privacy Policy
              </Text>
              <Text style={StyleCheck.TextRed}> *</Text>
            </Text>
          </View>

          <View style={StyleCheck.containerCheck2}>
            <Checkbox
              status={this.state.checked2 ? 'checked' : 'unchecked'}
              color={COLORS.BLUE}
              onPress={() => {
                this.setState({ checked2: !this.state.checked2 });
              }}
            />
            <Text style={StyleCheck.Textcheck}>
              <Text style={StyleCheck.TextGray}>Subscribe for select product updates</Text>
            </Text>
          </View>

          <View>
            <ButtonTouch
              text='Sign Up'
              state={
                this.state.email != '' && this.state.password != '' && this.state.checked
                  ? true
                  : false
              }
              screenNav='Login'
              navegation={this.props.navigation}
              onPress={() => {
                if (
                  this.state.checked == true &&
                  this.state.email != null &&
                  this.state.password != null
                )
                  this.handleCreateAccount();
              }}
            />
            <Text style={StyleScreen.OrStyle}>or</Text>
            <ButtonTouch
              text='Sign Up with Google'
              state={true}
              googleSign='https://freesvg.org/img/1534129544.png'
            />
          </View>
          <View style={StyleScreen.containerTextBot}>
            <Text style={StyleScreen.TextBot1}>Already have an account? </Text>
            <Text
              style={StyleScreen.textBot2}
              onPress={() => {
                this.props.navigation.navigate('Login');
                this.setState({ ...this.props.state, firstName: '', email: '', password: '' });
              }}
            >
              Login
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
