import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
		<Stack.Navigator
			screenOptions={{
				headerShown: true,
			}}
		>
			<Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                headerShown: false,
            }} />
			<Stack.Screen name="Profile" component={ProfileScreen} />
		</Stack.Navigator>
  );
}

export default HomeNavigation