import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DataTable, Divider } from 'react-native-paper';
import { stylesCards } from '../theme/StyleCardFlight';

export default class CardFlight extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <View style={stylesCards.containerCards}>
          <Text style={stylesCards.StyleText}>{this.props.data.departure.countryCode}</Text>
          <Ionicons name='airplane-sharp' size={24} color='#5c6ef8' />
          <Text style={stylesCards.StyleText2}>{this.props.data.arrival.countryCode}</Text>
        </View>

        <View>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title textStyle={stylesCards.StyleTextTable}>
                {this.props.data.departure.country}
              </DataTable.Title>
              <DataTable.Title
                textStyle={stylesCards.StyleTextTable}
                style={stylesCards.StyleTextTableAling}
              >
                {this.props.data.arrival.country}
              </DataTable.Title>
            </DataTable.Header>
            <Divider />
            <DataTable.Row>
              <DataTable.Cell textStyle={stylesCards.StyleTextTable}>
                {this.props.data.date}
              </DataTable.Cell>
              <DataTable.Cell
                textStyle={stylesCards.StyleTextTable}
                style={stylesCards.StyleTextTableAling}
              >
                {this.props.data.passengers}
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>
        <Divider style={{ backgroundColor: 'black', height: 1 }} />
      </View>
    );
  }
}
