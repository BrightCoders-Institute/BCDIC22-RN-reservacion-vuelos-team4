import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

export const StyleCheck = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginTop: 45,
	},
	Textcheck: {
		marginTop: 6,
		color: COLORS.GRAY,
		fontSize: 16,
	},
	TextSubrayado: {
		color: COLORS.GRAY,
		textDecorationLine: 'underline',
	},
	TextRed: {
		color: COLORS.RED,
	},
	TextGray: {
		color: COLORS.GRAY,
	},
	containerCheck2: {
		flexDirection: 'row',
		marginTop: 10,
	},
});
