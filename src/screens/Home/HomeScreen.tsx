import React from "react";
import { Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CategoriesList from "../../components/Organism/Categories/CategoriesList";
import CounterBackground from "../../components/Organism/Counter/CounterBackground";
import Header from "../../components/Organism/Header/Header";
import ListTitle from "../../components/Organism/ListTitle/ListTitle";
import ProductList from "../../components/Organism/ProductList/ProductList";
import Slider from "../../components/Organism/Slider/Slider";

const HomeScreen = () => {
	return (
		<>
			<Header />
			<CounterBackground />
			<Slider />
			<CategoriesList />
			<ScrollView>
				<ProductList />
			</ScrollView>
		</>
	);
};

export default HomeScreen;
