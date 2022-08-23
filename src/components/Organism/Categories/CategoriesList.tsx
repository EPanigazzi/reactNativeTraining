import React from "react";
import {
	SafeAreaView,
	FlatList,
} from "react-native";
import { Categories } from "../../../interfaces/reqData";
import CategoriesMock from "../../../mocks/CategoriesMock";
import CategoryItem from "./CategoryItem";



interface Props {
    item: Categories
}

const CategoriesList = () => {
	const renderItem = ({ item }: Props) => <CategoryItem name={item.name} />;

	return (
		<SafeAreaView>
			<FlatList
				data={CategoriesMock}
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
		</SafeAreaView>
	);
};


export default CategoriesList;
