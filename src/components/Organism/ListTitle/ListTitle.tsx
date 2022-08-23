import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react';
import { AntDesign } from "@expo/vector-icons";
import ImageBtn from '../../ImageBtn';

interface Props {
	hasBtn: boolean;
	children: JSX.Element
}

const ListTitle = ({ hasBtn, children }: Props) => {

    function btn(){
        return (
			<View>
				<Pressable
					style={styles.showBtnContainer}
					onPress={() => console.log("Press Todos!")}
				>
					<Text style={styles.textShowBtn}>Ver todo</Text>
					<AntDesign name="right" size={15} color="black" />
				</Pressable>
			</View>
		);
    }

	return (
		<View style={styles.listTitleContainer}>
			<Text style={styles.listTitle}>{children}</Text>
			{hasBtn && btn()}
		</View>
	);
};

export default ListTitle;

const styles = StyleSheet.create({
	showBtnContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	textShowBtn: {
		fontWeight: "bold",
		fontSize: 13,
	},
	listTitleContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginLeft: 10,
		marginRight: 10,
		marginTop: 25,
	},
	listTitle: {
		fontWeight: "bold",
		fontSize: 18,
	},
});