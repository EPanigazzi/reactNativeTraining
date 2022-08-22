import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native';

const InputSearch = () => {
  return (
		<View style={styles.inputContainer}>
			<TextInput placeholder="Search..." style={styles.input} />
		</View>
  );
}

export default InputSearch

const styles = StyleSheet.create({
	
	inputContainer: {
		flex: 2,
	},
	input: {
		backgroundColor: "white",
		padding: 2,
		margin: 10,
		borderRadius: 7,
	},
});