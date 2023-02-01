import { Text, View } from 'react-native';
import React, { Component } from 'react';
import Constants from 'expo-constants';
import { stylesBooking } from '../../theme/StyleBooking';
import ButtonTouch from '../../components/Button';
import CardFlight from '../../components/CardFlight';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../../theme/colors';
import WheelScrollPicker from '../../components/WheelScrollPicker';

export default class Results extends Component {
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
            date: '',
            passengers: '',
          }}
        />
        <MaterialIcons
          name='arrow-back-ios'
          color={COLORS.BLUE}
          size={26}
          style={{ bottom: 325, right: 150 }}
        />
        <Text
          style={{
            fontSize: 30,
            color: COLORS.BLACK_GRAY,
            fontWeight: '800',
            textAlign: 'left',
            right: 70,
            bottom: 1,
          }}
        >
          Your request{'\n'}was received
        </Text>

        <View style={{ top: 180 }}>
          <ButtonTouch
            text='Finish'
            state={false}
            onPress={() => {
              this.props.navigation.navigate('MyFlights');
            }}
          />
        </View>
      </View>
    );
  }
}
