import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";

const CounterBackground = () => {
	const [counter, setCounter] = useState(0);

	return (
		<View style={styles.counterContainer}>
			<Image
				source={require("../../../../assets/public/counter-background.png")}
				style={styles.img}
			/>
			<Text style={styles.counter}>{counter}</Text>
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
