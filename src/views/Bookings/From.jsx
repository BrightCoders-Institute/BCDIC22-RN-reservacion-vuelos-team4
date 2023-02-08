import { Text, View, TextInput } from 'react-native';
import React, { Component } from 'react';
import { stylesBooking } from '../../theme/StyleBooking';
import ButtonTouch from '../../components/Button';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../../theme/colors';
import { styles } from '../../theme/StyleBookingInputs';

export default class From extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasFocus: false,
      origin: '',
    };
  }
  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <MaterialIcons
          name='arrow-back-ios'
          color={COLORS.BLUE}
          size={26}
          style={{ bottom: 100, right: 150 }}
          onPress={() => this.props.navigation.goBack()}
        />
        <Text style={stylesBooking.StyleHeader}>Where are you{'\n'}now?</Text>
        <TextInput
          onChangeText={(text) => this.setState({ ...this.props.state, origin: text })}
          style={this.state.hasFocus ? styles.focusedTextInput : styles.textInput}
          onFocus={this.setFocus.bind(this, true)}
          onBlur={this.setFocus.bind(this, false)}
          placeholder='Select Location'
        />

        <View style={{ top: 100 }}>
          <ButtonTouch
            text='Next'
            state={this.state.origin != '' ? true : false}
            onPress={() => {
              this.props.navigation.navigate('To', { origin: this.state.origin });
            }}
          />
        </View>
      </View>
    );
  }
  setFocus(hasFocus) {
    this.setState({ hasFocus });
  }
}
