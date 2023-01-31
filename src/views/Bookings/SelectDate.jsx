import { Text, View } from 'react-native';
import React, { Component } from 'react';
import Constants from 'expo-constants';
import { stylesBooking } from '../../theme/StyleBooking';
import ButtonTouch from '../../components/Button';
import CardFlight from '../../components/CardFlight';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../../theme/colors';
import CalendarBooking from '../../components/CalendarBooking';

export default class SelectDate extends Component {
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
        <Text
          style={{
            fontSize: 30,
            color: COLORS.BLACK_GRAY,
            fontWeight: '800',
            textAlign: 'left',
            right: 60,
            bottom: 1,
          }}
        >
          Select date
        </Text>

        <View style={{ top: 20 }}>
          <CalendarBooking />
        </View>

        <View style={{ top: 40 }}>
          <ButtonTouch
            text='Next'
            state={false}
            onPress={() => {
              this.props.navigation.navigate('Passenger');
            }}
          />
        </View>
      </View>
    );
  }
}
