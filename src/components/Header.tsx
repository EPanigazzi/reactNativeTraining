import { View, StyleSheet, SafeAreaView, Image } from 'react-native'
import React from 'react'
import ImageBtn from './ImageBtn';
import InputSearch from './InputSearch';

const Header = () => {
  return (
		<View style={styles.rootContainer}>
			<SafeAreaView>
				<View style={styles.headerContainer}>
					<ImageBtn
						style={styles.logoContainer}
						onPress={() => console.log("Logo Pressed!")}
					>
						<Image
							source={require("../../assets/public/globant-market-img.png")}
						/>
					</ImageBtn>
					<InputSearch />
					<ImageBtn
						style={styles.imageBtnContainer}
						onPress={() => console.log("Profile Pressed!")}
					>
						<Image
							source={require("../../assets/public/profile.png")}
						/>
					</ImageBtn>
					<ImageBtn
						style={styles.imageBtnContainer}
						onPress={() => console.log("Message Pressed!")}
					>
						<Image
							source={require("../../assets/public/messages.png")}
						/>
					</ImageBtn>
				</View>
			</SafeAreaView>
		</View>
  );
}

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

export default Header