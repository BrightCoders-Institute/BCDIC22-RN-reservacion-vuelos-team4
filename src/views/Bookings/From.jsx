import { Text, View } from 'react-native';
import React, { Component } from 'react';
import Constants from 'expo-constants';
import { stylesBooking } from '../../theme/StyleBooking';
import BookinInputs from '../../components/BookingInputs';
import ButtonTouch from '../../components/Button';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../../theme/colors';

export default class From extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <MaterialIcons
          name='arrow-back-ios'
          color={COLORS.BLUE}
          size={26}
          style={{ bottom: 100, right: 150 }}
        />
        <Text style={stylesBooking.StyleHeader}>Where are you{'\n'}now?</Text>
        <BookinInputs />
        <View style={{ top: 100 }}>
          <ButtonTouch
            text='Next'
            state={false}
            onPress={() => {
              this.props.navigation.navigate('To');
            }}
          />
        </View>
      </View>
    );
  }
}
