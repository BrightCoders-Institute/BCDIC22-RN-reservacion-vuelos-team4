import { Text, View } from 'react-native';
import React, { Component } from 'react';
import Constants from 'expo-constants';
import { stylesBooking } from '../../theme/StyleBooking';
import BookinInputs from '../../components/BookingInputs';
import ButtonTouch from '../../components/Button';
import CardFlight from '../../components/CardFlight';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../../theme/colors';

export default class To extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <CardFlight
          data={{
            departure: {
              country: '',
              countryCode: '',
            },
            arrival: {
              country: '',
              countryCode: '',
            },
          }}
        />
        <MaterialIcons
          name='arrow-back-ios'
          color={COLORS.BLUE}
          size={26}
          style={{ bottom: 180, right: 150 }}
        />
        <Text style={stylesBooking.StyleHeader}>Where will you be{'\n'}flying to?</Text>
        <BookinInputs />
        <View style={{ top: 40 }}>
          <ButtonTouch
            text='Next'
            state={false}
            onPress={() => {
              this.props.navigation.navigate('SelectDate');
            }}
          />
        </View>
      </View>
    );
  }
}
