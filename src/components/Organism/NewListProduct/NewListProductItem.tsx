import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Content } from "../../../interfaces/reqData";

const NewListProductItem = ({ productData }: any) => {
	const { imageUrl, title, description, price } = productData;

	return (
		<View style={styles.itemContainer}>
			<Image
				source={{ uri: imageUrl[0].toString() }}
				style={styles.image}
			/>
			<Text style={styles.titleText}>{title}</Text>
			<Text style={styles.descriptionText}>{description}</Text>
			<Text style={styles.siteText}>{productData.userid.site.name}</Text>
			<Text style={styles.priceText}>$ {price}</Text>
		</View>
	);
};

export default NewListProductItem;

const styles = StyleSheet.create({
	itemContainer: {
		backgroundColor: "#e9e7e7",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		borderRadius: 6,
		margin: 10,
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 5,
		paddingRight: 5,
	},
	image: {
		margin: 10,
		width: 91,
		height: 72,
		borderRadius: 6,
	},
	titleText: {
		fontSize: 14,
		color: "#7D8088",
		fontWeight: "400",
	},
	descriptionText: {
		fontSize: 14,
		color: "#AFAFAF",
		fontWeight: "400",
	},
	siteText: {
		fontSize: 14,
		color: "#AFAFAF",
		fontWeight: 'bold',
	},
	priceText: {
		fontSize: 16,
		fontWeight: "400",
		color: "#AFAFAF",
		marginTop: 20,
	},
});
