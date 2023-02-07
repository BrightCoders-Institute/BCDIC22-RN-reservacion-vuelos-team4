import React, { Component } from 'react';
import { ScrollView, Text, View, FlatList } from 'react-native';
import CardFlight from '../components/CardFlight';
import FloatingButton from '../components/FloatingButton';
import { StyleFloatingButton } from '../theme/StyleFloatingButton';
import { styleComponents } from '../theme/StyleSignUp';
import { stylesContainer } from '../theme/StyleCardFlight';
import { auth, db } from '../db/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export default class MyFlights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        data: [],
        id: '',
      },
    };
  }

  async componentDidMount() {
    await this.getItem();
  }
  getItem = async () => {
    try {
      const q = collection(db, 'users', auth.currentUser.uid, 'flights');

      const querySnapshot = await getDocs(q);

      let newarray = [];

      querySnapshot.forEach((doc) => {
        let itemArray = {
          data: doc.data(),
          id: doc.id,
        };
        newarray = [...newarray, itemArray];
      });

      this.setState((prevState) => {
        let info = Object.assign({}, prevState.info);
        info = newarray;
        return { info };
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    return (
      <View style={stylesContainer.container}>
        <View style={StyleFloatingButton.container}>
          <Text style={styleComponents.StyleHeader}>My flights</Text>
          <FlatList
            data={this.state.info}
            keyExtractor={(item) => item.id}
            extraData={this.state.info}
            renderItem={({ item }) => <CardFlight data={item.data} />}
          />

          <FloatingButton navigate={this.props.navigation} />
        </View>
      </View>
    );
  }
}
