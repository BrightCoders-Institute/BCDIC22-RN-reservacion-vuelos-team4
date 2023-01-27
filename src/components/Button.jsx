import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { styleButton } from '../theme/StyleButton';

export default class ButtonTouch extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity
        style={this.props.state ? styleButton.container : styleButton.containerGray}
        onPress={this.props.onPress}
      >
        <View style={styleButton.itemsAlign}>
          <Image source={{ uri: this.props.googleSign }} style={styleButton.imgStyle} />
          <Text style={styleButton.textStyle}> {this.props.text} </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
