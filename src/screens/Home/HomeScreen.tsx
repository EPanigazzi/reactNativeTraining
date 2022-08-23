import React from "react";
import CategoriesList from "../../components/Categories/CategoriesList";
import CounterBackground from "../../components/CounterBackground";
import Header from "../../components/Header";
import Slider from "../../components/Slider";

const HomeScreen = () => {

	return (
		<>
			<Header />
			<CounterBackground />
			<Slider />
			<CategoriesList />
		</>
	);
};

export default HomeScreen;


