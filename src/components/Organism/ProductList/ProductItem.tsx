import { View, StyleSheet, FlatList, SafeAreaView } from "react-native";
import React from "react";
import { Content, ProductList } from "../../../interfaces/reqData";
import ImgDescription from "./ImgDescription";
import WishlistIconText from "./WishlistIconText";

interface Props {
	productData: ProductList;
	item: Content;
}

const ProductItem = ({ productData }: Props) => {
	const renderItem = (item: Props) => {
		return (
			<>
				<View style={styles.productItemContainer}>
					<ImgDescription item={item} />
					<WishlistIconText item={item} />
				</View>
				<View style={styles.bottomLineSeparator} />
			</>
		);
	};

	return (
		<View>
			<SafeAreaView>
				<FlatList
					data={productData.content}
					renderItem={renderItem}
					keyExtractor={(item: Props) => item.id}
					nestedScrollEnabled
				/>
			</SafeAreaView>
		</View>
	);
};

export default ProductItem;

const styles = StyleSheet.create({
	productItemContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		margin: 10,
	},
	bottomLineSeparator: {
		height: 1,
		backgroundColor: "black",
	},
});
