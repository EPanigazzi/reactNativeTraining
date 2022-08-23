import { View, StyleSheet, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ImageBtn from "../../ImageBtn";
import InputSearch from "../../InputSearch";

const Header = () => {
	const navigation = useNavigation();


	function pressProfileHandler() {
		navigation.navigate("Profile");
	}

	return (
		<View style={styles.rootContainer}>
			<View style={styles.headerContainer}>
				<ImageBtn
					style={styles.logoContainer}
					onPress={() => console.log("Press Logo")}
				>
					<Image
						source={require("../../../../assets/public/globant-market-img.png")}
					/>
				</ImageBtn>
				<InputSearch />
				<ImageBtn
					style={styles.imageBtnContainer}
					onPress={pressProfileHandler}
				>
					<Image
						source={require("../../../../assets/public/profile.png")}
					/>
				</ImageBtn>
				<ImageBtn
					style={styles.imageBtnContainer}
					onPress={() => console.log("Message Pressed!")}
				>
					<Image
						source={require("../../../../assets/public/messages.png")}
					/>
				</ImageBtn>
			</View>
		</View>
	);
};

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

export default Header;
