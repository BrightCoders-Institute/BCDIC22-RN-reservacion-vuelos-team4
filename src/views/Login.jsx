import { View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import ButtonTouch from '../components/Button';
import Inputs from '../components/Inputs';

export class Login extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View>
					<View style={{ marginTop: 50 }}>
						<Inputs />
					</View>

					<View>
						<ButtonTouch text='Sign Up' state={false} />
						<ButtonTouch
							text='Sign Up with Google'
							state={false}
							googleSign='https://aws1.discourse-cdn.com/auth0/optimized/3X/8/a/8a06490f525c8f65d4260204bc3bc7b0e1fb0ba7_2_500x500.png'
						/>
					</View>
				</View>
			</View>
		);
	}
}

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
});
