import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import ImageBtn from "../../ImageBtn";

interface Props {
	name: string;
}

const CategoryItem = ({ name }: Props) => {
	function showCategoryBtn(name: string) {
		switch (name) {
			case "Celulares":
				return (
					<ImageBtn onPress={() => console.log("acaaaa Celulares!")}>
						<AntDesign name="mobile1" size={30} color="black" />
					</ImageBtn>
				);
			case "Computacion":
				return (
					<ImageBtn
						onPress={() => console.log("acaaaa Computadoras!")}
					>
						<MaterialIcons
							name="computer"
							size={30}
							color="black"
						/>
					</ImageBtn>
				);
			case "Muebles":
				return (
					<ImageBtn onPress={() => console.log("acaaaa Muebles!")}>
						<MaterialCommunityIcons
							name="desk"
							size={30}
							color="black"
						/>
					</ImageBtn>
				);
			case "Libros":
				return (
					<ImageBtn onPress={() => console.log("acaaaa Libros!")}>
						<MaterialCommunityIcons
							name="bookshelf"
							size={30}
							color="black"
						/>
					</ImageBtn>
				);
			case "Bicicletas":
				return (
					<ImageBtn onPress={() => console.log("acaaaa Bici!")}>
						<FontAwesome name="bicycle" size={30} color="black" />
					</ImageBtn>
				);
			default:
				return (
					<ImageBtn onPress={() => console.log("acaaaa Varios!")}>
						<MaterialIcons
							name="devices-other"
							size={30}
							color="black"
						/>
					</ImageBtn>
				);
		}
	}
	return (
		<View>
			<View style={styles.itemContainer}>{showCategoryBtn(name)}</View>
			<Text style={styles.itemText}>{name}</Text>
		</View>
	);
};

export default CategoryItem;

const styles = StyleSheet.create({
	itemContainer: {
		backgroundColor: "#bfd732",
		borderRadius: 50,
		height: 80,
		width: 80,
		justifyContent: "center",
		alignItems: "center",
		marginLeft: 5,
		marginRight: 5,
		marginBottom: 10,
	},
	itemText: {
		textAlign: "center",
		fontSize: 12,
		fontWeight: "bold",
	},
});
