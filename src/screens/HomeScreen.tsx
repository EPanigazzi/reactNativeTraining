import {
	View,
	Image,
	StyleSheet,
	TextInput,
	Pressable,
	SafeAreaView,
} from "react-native";
import React from "react";
import ImageBtn from "../components/ImageBtn";
import InputSearch from "../components/InputSearch";
import Header from "../components/Header";

const HomeScreen = () => {
	return (
		<>
			<Header />
		</>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	rootContainer: {
		marginTop: 35,
		backgroundColor: "black",
	},
	headerContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		margin: 10,
	},
	logoContainer: {
		flex: 0.7,
	},
	imageBtnContainer: {
		flex: 0.2,
		marginLeft: 10,
	},
});
