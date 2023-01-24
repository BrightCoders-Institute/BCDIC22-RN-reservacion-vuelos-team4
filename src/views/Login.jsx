import { View, Text, Linking } from 'react-native';
import React, { Component } from 'react';
import InputPass from '../components/InputPass';
import { Checkbox } from 'react-native-paper';
import ButtonTouch from '../components/Button';
import Inputs from '../components/Inputs';
import { signUpStyles, styleComponents, StyleScreen } from '../theme/StyleSignUp';
import { StyleCheck } from '../theme/StyleCheckBox';
import { COLORS } from '../theme/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      checked2: false,
    };
  }
  render() {
    return (
      <View style={signUpStyles.container2}>
        <View>
          <View style={styleComponents.containerInput}>
            <Text style={styleComponents.StyleHeader2}>Login</Text>
            <Text style={styleComponents.StyleTextInput}>Email *</Text>
            <Inputs />
            <Text style={styleComponents.StyleTextInput}>Password *</Text>
            <InputPass />
          </View>

          <View>
            <ButtonTouch
              text='Login'
              state={false}
              screenNav='MyFlights'
              navegation={this.props.navigation}
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
