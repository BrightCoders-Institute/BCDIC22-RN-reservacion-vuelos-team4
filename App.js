import { StyleSheet, View } from 'react-native';
import SignUp from './src/views/SignUp';
import Constants from 'expo-constants';

export default function App() {
	return (
		<View style={styles.container}>
			<SignUp />
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
