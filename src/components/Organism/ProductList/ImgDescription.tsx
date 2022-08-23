import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Content } from '../../../interfaces/reqData';

interface Props {
	item: {
		item: Content;
	};
}

const ImgDescription = ({ item }: Props) => {

    const { imageUrl, title, description } = item.item;

	return (
		<View style={styles.imageTextContainer}>
			<Image
				source={{
					uri: imageUrl[0].toString(),
				}}
				style={{ width: 91, height: 72, borderRadius: 6 }}
			/>
			<View style={styles.textContainer}>
				<Text style={styles.titleText}>{title}</Text>
				<Text style={styles.descriptionText}>{description}</Text>
				<Text style={styles.descriptionText}>
					{item.item.userid.site.name}
				</Text>
			</View>
		</View>
	);
};

export default ImgDescription;

const styles = StyleSheet.create({

	imageTextContainer: {
		flex: 1,
		flexDirection: "row",
	},
	textContainer: {
		marginLeft: 10,
		flex: 1,
		flexWrap: "nowrap",
		flexDirection: "column",
		justifyContent: "flex-start",
		marginTop: 8,
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
});