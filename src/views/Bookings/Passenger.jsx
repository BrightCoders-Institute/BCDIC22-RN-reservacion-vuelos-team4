import { Text, View } from 'react-native';
import React, { Component } from 'react';
import ButtonTouch from '../../components/Button';
import CardFlight from '../../components/CardFlight';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../../theme/colors';
import WheelScrollPicker from '../../components/WheelScrollPicker';
import { AntDesign } from '@expo/vector-icons';

export default class Passenger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passengers: '',
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
        passengers: '',
      },
    };
  }

  componentDidMount() {
    const dateP = this.props.route.params.date;
    const infoP = this.props.route.params.data;
    this.setState((prevState) => {
      let info = Object.assign({}, prevState.info);
      info.arrival.country = infoP.arrival.country;
      info.arrival.countryCode = infoP.arrival.countryCode;

      //params data
      info.departure.country = infoP.departure.country;
      info.departure.countryCode = infoP.departure.countryCode;

      info.date = dateP;
      return { info };
    });
  }

  getPassengersFormat = (value) => {
    this.setState({ ...this.state, passengers: value });
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
          How many{'\n'}passengers?
        </Text>
        <AntDesign
          name='caretright'
          size={26}
          color={COLORS.BLUE}
          style={{ top: 113, right: 60 }}
        />
        <View style={{ bottom: 40 }}>
          <WheelScrollPicker getPassengersFormat={(value) => this.getPassengersFormat(value)} />
        </View>
        <AntDesign
          name='caretleft'
          size={26}
          color={COLORS.BLUE}
          style={{ bottom: 193, left: 60 }}
        />

        <View style={{ top: 40 }}>
          <ButtonTouch
            text='Next'
            state={this.state.passengers != '' ? true : false}
            onPress={() => {
              this.props.navigation.navigate('Results', {
                data: this.state.info,
                passengers: this.state.passengers,
              });
            }}
          />
        </View>
      </View>
    );
  }
}
