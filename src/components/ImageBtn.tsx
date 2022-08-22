import { View, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react';

interface Props {
	style: any;
    children: any,
	onPress: () => void;
}

const ImageBtn = ({ style, children, onPress }: Props) => {


	return (
		<View style={[styles.profileContainer, style]}>
			<Pressable onPress={onPress}>
				{children}
			</Pressable>
		</View>
	);
};

export default ImageBtn

const styles = StyleSheet.create({
	profileContainer: {
		justifyContent: "center",
		alignItems: "center",
	}
});