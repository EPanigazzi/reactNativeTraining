import { StyleSheet} from "react-native";
import AccountScreen from "./src/screens/Account/AccountScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import HomeNavigation from "./src/navigation/HomeNavigation";

const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator
				screenOptions={{
					headerShown: false,
					headerStyle: { backgroundColor: "#bfd732" },
					headerTintColor: "white",
					drawerActiveBackgroundColor: "#bfd732",
					drawerActiveTintColor: "#3c0a6b",
					drawerStyle: { backgroundColor: "#ccc" },
				}}
			>
				<Drawer.Screen name="Home" component={HomeNavigation} />
				<Drawer.Screen name="Account" component={AccountScreen} />
				<Drawer.Screen name="Favorites" component={AccountScreen} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#eda3a3",
	},
});
