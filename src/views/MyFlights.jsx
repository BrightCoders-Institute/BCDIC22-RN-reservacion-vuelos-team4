import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-web';
import CardFlight from '../components/CardFlight';

export default class MyFlights extends Component {
  render() {
    return (
      <View>
        <CardFlight
          data={{
            departure: {
              country: 'Serbia',
              countryCode: 'BEG',
            },
            arrival: {
              country: 'Netherlands',
              countryCode: 'AMS',
            },
            date: 'September 3, 2020',
            passengers: '2 passengers',
          }}
        />
      </View>
    );
  }
}
