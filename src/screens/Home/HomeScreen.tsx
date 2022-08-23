import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CategoriesList from "../../components/Organism/Categories/CategoriesList";
import CounterBackground from "../../components/Organism/Counter/CounterBackground";
import Header from "../../components/Organism/Header/Header";
import ListTitle from "../../components/Organism/ListTitle/ListTitle";
import NewListProduct from "../../components/Organism/NewListProduct/NewListProduct";
import ProductList from "../../components/Organism/ProductList/ProductList";
import Slider from "../../components/Organism/Slider/Slider";

const HomeScreen = () => {
	return (
		<View style={{ backgroundColor: "white", flex: 1 }}>
			<ScrollView nestedScrollEnabled={true} >
				<Header />
				<CounterBackground />
				<Slider />
				<CategoriesList />
				<ProductList />
				<NewListProduct />
			</ScrollView>
		</View>
	);
};

export default HomeScreen;
