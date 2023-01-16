import { StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import Login from './src/views/Login';
import Inputs from './src/components/Inputs';
import Constants from 'expo-constants';

export default function App() {
	return (
		<View style={styles.container}>
			<Login />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: Constants.statusBarHeight,
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
