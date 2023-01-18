import React, { Component } from 'react';
import { TextInput, Text, View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styleComponents } from '../theme/StyleSignUp';

export default class Inputs extends Component {
	render() {
		return <TextInput style={styleComponents.StyleInput} />;
	}
}
