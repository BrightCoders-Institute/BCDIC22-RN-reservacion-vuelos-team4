import React, { Component } from 'react';
import { TextInput, Text, View, Button } from 'react-native';
import { Formik } from 'formik';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

export class Inputs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showPassword: true,
		};
	}

	render() {
		return (
			<Formik
				initialValues={{ firstName: '', email: '', password: '' }}
				onSubmit={(values) => console.log(values)}
			>
				{({ handleChange, handleBlur, handleSubmit, values }) => (
					<View style={{ width: 330 }}>
						<Text style={styles.StyleHeader}>Sign Up</Text>
						<Text style={styles.StyleTextInput}>First Name</Text>
						<TextInput
							onChangeText={handleChange('firstName')}
							onBlur={handleBlur('firstName')}
							value={values.firstName}
							style={styles.StyleInput}
						/>
						<Text style={styles.StyleTextInput}>Email *</Text>
						<TextInput
							onChangeText={handleChange('email')}
							onBlur={handleBlur('email')}
							value={values.email}
							style={styles.StyleInput}
						/>
						<Text style={styles.StyleTextInput}>Password *</Text>
						<View style={{ flexDirection: 'row' }}>
							<View style={{ flexDirection: 'row' }}>
								<TextInput
									secureTextEntry={this.state.showPassword}
									onChangeText={handleChange('password')}
									onBlur={handleBlur('password')}
									value={values.password}
									style={styles.StyleInput}
								/>
							</View>
							<View>
								<Ionicons
									name='eye'
									color={this.state.showPassword ? '#91969d' : '#5c6ef8'}
									style={styles.StyleIcon}
									onPress={() => this.setState({ showPassword: !this.state.showPassword })}
								/>
							</View>
						</View>

						<Text style={styles.StyleDescText}>
							Use 8 or more characteres with a mix of letters, numbers, and symbols.
						</Text>
					</View>
				)}
			</Formik>
		);
	}
}

export default Inputs;

const styles = StyleSheet.create({
	StyleInput: {
		borderColor: '#343434',
		borderWidth: 1,
		width: 330,
		height: 45,
		padding: 10,
		fontSize: 20,
		fontWeight: '600',
	},
	StyleInputChange: {
		borderColor: '#5c6ef8',
		borderWidth: 1,
		width: 330,
		height: 45,
		padding: 10,
		fontSize: 20,
		fontWeight: '600',
	},
	StyleTextInput: {
		fontSize: 20,
		color: '#343434',
		marginTop: 10,
		marginBottom: 5,
		fontWeight: '300',
	},
	StyleHeader: {
		fontSize: 30,
		color: '#5c6ef8',
		fontWeight: '700',
	},
	StyleDescText: {
		textAlign: 'justify',
		fontSize: 12,
		color: '#91969d',
		marginTop: 2,
		marginBottom: 50,
	},
	StyleIcon: {
		position: 'absolute',
		right: 10,
		marginTop: 9,
		fontSize: 25,
	},
});
