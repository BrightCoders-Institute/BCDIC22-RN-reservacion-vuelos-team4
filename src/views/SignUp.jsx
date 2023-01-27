import { View, Text, Linking, Alert, TextInput } from 'react-native';
import React, { Component } from 'react';
import { Checkbox } from 'react-native-paper';
import ButtonTouch from '../components/Button';
import Inputs from '../components/Inputs';
import InputPass from '../components/InputPass';
import { signUpStyles, styleComponents, StyleScreen } from '../theme/StyleSignUp';
import { StyleCheck } from '../theme/StyleCheckBox';
import { COLORS } from '../theme/colors';
import { auth } from '../db/firebaseConfig';

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth/react-native';
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      checked2: false,
      firstName: '',
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

  handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, this.state.email, this.state.password)
      .then((userCredential) => {
        updateProfile(userCredential.user, {
          displayName: this.state.firstName,
        });
        Alert.alert('Account created successfully');
        this.props.navigation.navigate('Login');
      })
      .catch((error) => {
        alert(error);
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
            <Text style={styleComponents.StyleTextInput}>Email *</Text>
            <Inputs onEmailChange={this.changeEmail} value={this.state.email} />
            <Text style={styleComponents.StyleTextInput}>Password *</Text>
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
              state={false}
              screenNav='Login'
              navegation={this.props.navigation}
              onPress={() => {
                this.handleCreateAccount();
              }}
            />
            <Text style={StyleScreen.OrStyle}>or</Text>
            <ButtonTouch
              text='Sign Up with Google'
              state={false}
              googleSign='https://aws1.discourse-cdn.com/auth0/optimized/3X/8/a/8a06490f525c8f65d4260204bc3bc7b0e1fb0ba7_2_500x500.png'
            />
          </View>
          <View style={StyleScreen.containerTextBot}>
            <Text style={StyleScreen.TextBot1}>Already have an account? </Text>
            <Text
              style={StyleScreen.textBot2}
              onPress={() => this.props.navigation.navigate('Login')}
            >
              Login
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
