import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { StyleFloatingButton } from '../theme/StyleFloatingButton';

export default class FloatingButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigate.navigate('From')}
        style={StyleFloatingButton.buttonFlight}
      >
        <Entypo name='plus' size={50} color='white' />
      </TouchableOpacity>
    );
  }
}
