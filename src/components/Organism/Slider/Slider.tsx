import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Slider = () => {
  return (
		<View>
			<Image
				source={require("../../../../assets/public/background-slider.png")}
				style={styles.image}
			/>
		</View>
  );
}

export default Slider;

const styles = StyleSheet.create({
	image: {
		width: "100%",
		marginTop: 5,
        marginBottom: 5,
	},
});