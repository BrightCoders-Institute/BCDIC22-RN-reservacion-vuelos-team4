import { View, Text } from 'react-native';
import React, { Component } from 'react';
import ButtonTouch from '../components/Button';
import Inputs from '../components/Inputs';
import { signUpStyles, styleComponents } from '../theme/StyleSignUp';
import InputPass from '../components/InputPass';

export class SignUp extends Component {
	render() {
		return (
			<View style={signUpStyles.container}>
				<View>
					<View style={styleComponents.containerInput}>
						<Text style={styleComponents.StyleTextInput}>First Name *</Text>
						<Inputs />
						<Text style={styleComponents.StyleTextInput}>Email *</Text>
						<Inputs />
						<Text style={styleComponents.StyleTextInput}>Password *</Text>
						<InputPass />
						<Text style={styleComponents.StyleDescText}>
							Use 8 or more characters with a mix of letters, numbers, and symbols
						</Text>
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

export default SignUp;
