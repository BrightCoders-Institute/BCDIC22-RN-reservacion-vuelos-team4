import { Text, View } from 'react-native';
import React, { Component } from 'react';
import ButtonTouch from '../../components/Button';
import CardFlight from '../../components/CardFlight';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../../theme/colors';
import CalendarBooking from '../../components/CalendarBooking';

export default class SelectDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      info: {
        departure: {
          country: '',
          countryCode: '',
        },
        arrival: {
          country: '',
          countryCode: '',
        },
        date: '',
      },
    };
  }
  componentDidMount() {
    const params = this.props.route.params.destination;
    const data = this.props.route.params.data.departure;
    const values = params.split(',');

    this.setState((prevState) => {
      let info = Object.assign({}, prevState.info);
      info.arrival.country = values[1];
      info.arrival.countryCode = values[0].substr(0, 3).toUpperCase();

      //params data
      info.departure.country = data.country;
      info.departure.countryCode = data.countryCode;
      return { info };
    });
  }

  getDateFormat = (value) => {
    this.setState({ ...this.state, date: value });
  };

  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <CardFlight data={this.state.info} />
        <MaterialIcons
          name='arrow-back-ios'
          color={COLORS.BLUE}
          size={26}
          style={{ bottom: 180, right: 150 }}
          onPress={() => this.props.navigation.goBack()}
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
          <CalendarBooking getDateFormat={(value) => this.getDateFormat(value)} />
        </View>

        <View style={{ top: 40 }}>
          <ButtonTouch
            text='Next'
            state={this.state.date != '' ? true : false}
            onPress={() => {
              this.props.navigation.navigate('Passenger', {
                data: this.state.info,
                date: this.state.date,
              });
            }}
          />
        </View>
      </View>
    );
  }
}
