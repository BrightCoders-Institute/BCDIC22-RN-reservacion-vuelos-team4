import { Text, View, TextInput } from 'react-native';
import React, { Component } from 'react';
import { stylesBooking } from '../../theme/StyleBooking';
import ButtonTouch from '../../components/Button';
import CardFlight from '../../components/CardFlight';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../../theme/colors';
import { styles } from '../../theme/StyleBookingInputs';

export default class To extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasFocus: false,
      destination: '',
      info: {
        departure: {
          country: '',
          countryCode: '',
        },
        arrival: {
          country: '',
          countryCode: '',
        },
      },
    };
  }

  componentDidMount() {
    const params = this.props.route.params.origin;
    const values = params.split(',');

    this.setState((prevState) => {
      let info = Object.assign({}, prevState.info);
      info.departure.country = values[1];
      info.departure.countryCode = values[0].substr(0, 3).toUpperCase();
      return { info };
    });
  }
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
        <Text style={stylesBooking.StyleHeader}>Where will you be{'\n'}flying to?</Text>
        <TextInput
          onChangeText={(text) => this.setState({ ...this.props.state, destination: text })}
          style={this.state.hasFocus ? styles.focusedTextInput : styles.textInput}
          onFocus={this.setFocus.bind(this, true)}
          onBlur={this.setFocus.bind(this, false)}
          placeholder='Select Location'
        />
        <View style={{ top: 40 }}>
          <ButtonTouch
            text='Next'
            state={this.state.destination != '' ? true : false}
            onPress={() => {
              this.props.navigation.navigate('SelectDate', {
                data: this.state.info,
                destination: this.state.destination,
              });
            }}
          />
        </View>
      </View>
    );
  }
  setFocus(hasFocus) {
    this.setState({ hasFocus });
  }
}
