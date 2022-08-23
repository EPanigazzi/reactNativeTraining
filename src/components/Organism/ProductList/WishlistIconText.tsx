import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from "@expo/vector-icons";
import { Content } from '../../../interfaces/reqData';

interface Props {
	item: {
		item: Content;
	};
}

const WishlistIconText = ({ item }: Props) => {
	const [isLiked, setIsLiked] = useState(false);

    const { price } = item.item;

	return (
		<Pressable onPress={(e) => console.log(e)}>
			<View style={styles.iconPriceContainer}>
				{isLiked ? (
					<AntDesign name="heart" size={24} color="black" />
				) : (
					<AntDesign
						name="hearto"
						size={24}
						color="black"
						style={styles.iconStyle}
					/>
				)}

				<Text style={styles.priceText}>{price}</Text>
			</View>
		</Pressable>
	);
};

export default WishlistIconText;

const styles = StyleSheet.create({
	iconPriceContainer: {
		flex: 0.2,
		justifyContent: "center",
		flexDirection: "column",
		alignItems: "center",
	},
	priceText: {
		fontSize: 16,
		fontWeight: "400",
		color: "#AFAFAF",
	},
	iconStyle: {
		marginLeft: 25,
	},
});