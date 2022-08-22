import React from "react";
import CategoriesList from "../components/CategoriesList";
import Header from "../components/Header";

const HomeScreen = () => {

	return (
		<>
			<Header />
			<CategoriesList />
			{/* {CategoriesMock.map((category) => {
				return (
					<View key={category.id} style={styles.item}>
						<Text style={styles.title}>{category.name}</Text>
					</View>
				);
		
			})} */}
		</>
	);
};

export default HomeScreen;


