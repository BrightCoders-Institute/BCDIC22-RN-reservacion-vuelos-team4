import { Text, View } from 'react-native';
import React, { Component } from 'react';
import ButtonTouch from '../../components/Button';
import CardFlight from '../../components/CardFlight';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../../theme/colors';
import { auth, db } from '../../db/firebaseConfig';
import { setDoc, doc, collection, query, getDocs } from 'firebase/firestore';
export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  saveFlight = async () => {
    const newFlight = doc(collection(db, `users/${auth.currentUser.uid}/flights`));
    const q = query(collection(db, 'users'));
    const querySnapshot = await getDocs(q);
    const queryData = querySnapshot.docs.map((flights) => ({
      ...flights.data(),
      id: flights.id,
    }));
    queryData.map(async (v) => {
      await setDoc(newFlight, this.state.info);
    });
    this.props.navigation.push('MyFlights');
  };

  componentDidMount() {
    const passengerF = this.props.route.params.passengers;
    //const dateF = this.props.route.params.dateP;
    const infoF = this.props.route.params.data;

    this.setState((prevState) => {
      let info = Object.assign({}, prevState.info);
      info.arrival.country = infoF.arrival.country;
      info.arrival.countryCode = infoF.arrival.countryCode;

      //params data
      info.departure.country = infoF.departure.country;
      info.departure.countryCode = infoF.departure.countryCode;

      info.date = infoF.date;
      info.passengers = passengerF;
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
            state={this.state.info != null ? true : false}
            onPress={this.saveFlight}
          />
        </View>
      </View>
    );
  }
}
