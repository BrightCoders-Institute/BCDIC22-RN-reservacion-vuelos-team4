import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { styleComponents } from '../theme/StyleSignUp';

export default class Inputs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TextInput
        onChangeText={(text) => {
          this.props.onEmailChange(text);
        }}
        value={this.props.value}
        style={styleComponents.StyleInput}
      />
    );
  }
}
