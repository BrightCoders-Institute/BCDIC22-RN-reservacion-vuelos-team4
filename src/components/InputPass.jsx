import React, { Component } from 'react';
import { TextInput, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styleComponents } from '../theme/StyleSignUp';

export default class InputPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: true,
    };
  }
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            style={styleComponents.StyleInput}
            onChangeText={(text) => {
              this.props.onPassChange(text);
            }}
            value={this.props.value}
            secureTextEntry={this.state.showPassword}
          />
        </View>
        <View>
          <Ionicons
            name='eye'
            color={this.state.showPassword ? '#91969d' : '#5c6ef8'}
            style={styleComponents.StyleIcon}
            onPress={() => this.setState({ showPassword: !this.state.showPassword })}
          />
        </View>
      </View>
    );
  }
}
