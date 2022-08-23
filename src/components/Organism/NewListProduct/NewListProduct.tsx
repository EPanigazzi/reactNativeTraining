import { View, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";
import ListTitle from "../ListTitle/ListTitle";
import NewListProductItem from "./NewListProductItem";
import ProductsMock from "../../../mocks/ProductsMock";
import { Content } from "../../../interfaces/reqData";

interface Props {
	item: Content;
}


const NewListProduct = () => {
	const renderItem = ({ item }: Props) => (
		<NewListProductItem productData={item} />
	);

	return (
		<SafeAreaView>
			<View>
				<ListTitle hasBtn={false}>
					<Text>Lo más nuevo</Text>
				</ListTitle>

				<FlatList
					data={ProductsMock.content}
					renderItem={renderItem}
					contentContainerStyle={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						paddingLeft: 5,
						paddingRight: 5,
						paddingTop: 10,
					}}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
				/>
			</View>
		</SafeAreaView>
	);
};

export default NewListProduct;
