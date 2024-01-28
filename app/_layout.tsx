import "react-native-gesture-handler";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Drawer } from "expo-router/drawer";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { useColorScheme } from "@/components/useColorScheme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

import CustomDrawerContent from "../components/CustomDrawerContent";

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: "Home",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
		...FontAwesome.font,
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	const colorScheme = useColorScheme();

	return (
		<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
			<GestureHandlerRootView style={{ flex: 1 }}>
				{/* <Drawer drawerContent={CustomDrawerContent}> */}
				<Drawer>
					<Drawer.Screen
						name="Home"
						options={{
							drawerLabel: "College",
							headerTitle: "College",
							drawerIcon: ({ size, color }) => {
								return (
									<Ionicons name="home-outline" size={size} color={color} />
								);
							},
						}}
					></Drawer.Screen>

					<Drawer.Screen
						name="Services"
						options={{
							drawerLabel: "Services",
							headerTitle: "Services",
							drawerIcon: ({ size, color }) => {
								return (
									<Ionicons name="bag-outline" size={size} color={color} />
								);
							},
						}}
					></Drawer.Screen>

					<Drawer.Screen
						name="Uniform"
						options={{
							drawerLabel: "Uniform",
							headerTitle: "Uniform",
							drawerIcon: ({ size, color }) => {
								return (
									<Ionicons name="shirt-outline" size={size} color={color} />
								);
							},
						}}
					></Drawer.Screen>

					<Drawer.Screen
						name="Map"
						options={{
							drawerLabel: "Map",
							headerTitle: "Map",
							drawerIcon: ({ size, color }) => {
								return (
									<Ionicons name="map-outline" size={size} color={color} />
								);
							},
						}}
					></Drawer.Screen>

					<Drawer.Screen
						name="Scholarship"
						options={{
							drawerLabel: "Scholarship",
							headerTitle: "Scholarship",
							drawerIcon: ({ size, color }) => {
								return (
									<Ionicons name="school-outline" size={size} color={color} />
								);
							},
						}}
					></Drawer.Screen>

					<Drawer.Screen
						name="Event"
						options={{
							drawerLabel: "Event",
							headerTitle: "Event",
							drawerIcon: ({ size, color }) => {
								return (
									<Ionicons name="bonfire-outline" size={size} color={color} />
								);
							},
						}}
					></Drawer.Screen>

					<Drawer.Screen
						name="StudentManual"
						options={{
							drawerLabel: "Student Manual",
							headerTitle: "Student Manual",
							drawerIcon: ({ size, color }) => {
								return (
									<Ionicons name="book-outline" size={size} color={color} />
								);
							},
						}}
					></Drawer.Screen>

					<Drawer.Screen
						name="Faq"
						options={{
							drawerLabel: "FAQ",
							headerTitle: "FAQ",
							drawerIcon: ({ size, color }) => {
								return (
									<Ionicons
										name="help-circle-outline"
										size={size}
										color={color}
									/>
								);
							},
						}}
					></Drawer.Screen>

					<Drawer.Screen
						name="About"
						options={{
							drawerLabel: "About",
							headerTitle: "About",
							drawerIcon: ({ size, color }) => {
								return (
									<Ionicons
										name="information-circle-outline"
										size={size}
										color={color}
									/>
								);
							},
						}}
					></Drawer.Screen>

					<Drawer.Screen
						name="PhinmaEducation"
						options={{
							drawerLabel: "PHINMA Education",
							headerTitle: "PHINMA Education",
							drawerIcon: ({ size, color }) => {
								return (
									<Ionicons name="business-outline" size={size} color={color} />
								);
							},
						}}
					></Drawer.Screen>

					<Drawer.Screen
						name="Developers"
						options={{
							drawerLabel: "Developers",
							headerTitle: "Developers",
							drawerIcon: ({ size, color }) => {
								return (
									<Ionicons
										name="code-slash-outline"
										size={size}
										color={color}
									/>
								);
							},
						}}
					></Drawer.Screen>

					<Drawer.Screen
						name="Contact"
						options={{
							drawerLabel: "Contact",
							headerTitle: "Contact",
							drawerIcon: ({ size, color }) => {
								return (
									<Ionicons name="call-outline" size={size} color={color} />
								);
							},
						}}
					></Drawer.Screen>
				</Drawer>
			</GestureHandlerRootView>
		</ThemeProvider>
	);
}
