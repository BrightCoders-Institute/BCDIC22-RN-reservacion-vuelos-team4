import { Text, View } from 'react-native';
import React, { Component } from 'react';
import WheelPicker from 'react-native-wheely';
import { COLORS } from '../theme/colors';

export default class WheelScrollPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      selectedIndex: 0,
    };
  }
  render() {
    return (
      <WheelPicker
        selectedIndicatorStyle={{
          width: 100,
          alignContent: 'center',
          alignSelf: 'center',
          alignSelfContent: 'center',
          borderRadius: 0,
          borderTopColor: COLORS.LIGHT_GRAY,
          borderBottomColor: COLORS.LIGHT_GRAY,
          borderTopWidth: 1,
          borderBottomWidth: 1,
        }}
        itemTextStyle={{ color: COLORS.BLACK_GRAY, fontSize: 30, fontWeight: 'bold' }}
        containerStyle={{ fontSize: 30, height: 280 }}
        itemHeight={40}
        visibleRest={3}
        selectedIndex={this.state.selectedIndex}
        options={['', '1', '2', '3', '4', '5', '6', '7', '8']}
        onChange={(index) => {
          this.setState({ ...this.props.state, selectedIndex: index });
          let passngr = `${index} passengers`;
          this.props.getPassengersFormat(passngr);
        }}
      />
    );
  }
}
