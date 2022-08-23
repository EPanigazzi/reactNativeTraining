import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const CounterBackground = () => {
	return (
		<View style={styles.counterContainer}>
			<Image
				source={require("../../assets/public/counter-background.png")}
				style={styles.img}
			/>
			<Text style={styles.counter}>000</Text>
		</View>
	);
};

export default CounterBackground;

const styles = StyleSheet.create({
	counterContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	img: {
		marginTop: -3,
	},
	counter: {
		fontWeight: "bold",
		marginRight: 10,
	},
});
