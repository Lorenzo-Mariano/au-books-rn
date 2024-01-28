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

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: "(tabs)",
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
			<Drawer>
				<Drawer.Screen
					name="Home"
					options={{
						drawerLabel: "College",
						headerTitle: "College",
					}}
				></Drawer.Screen>

				<Drawer.Screen
					name="Services"
					options={{
						drawerLabel: "Services",
						headerTitle: "Services",
					}}
				></Drawer.Screen>

				<Drawer.Screen
					name="Uniform"
					options={{
						drawerLabel: "Uniform",
						headerTitle: "Uniform",
					}}
				></Drawer.Screen>

				<Drawer.Screen
					name="Map"
					options={{
						drawerLabel: "Map",
						headerTitle: "Map",
					}}
				></Drawer.Screen>

				<Drawer.Screen
					name="Scholarship"
					options={{
						drawerLabel: "Scholarship",
						headerTitle: "Scholarship",
					}}
				></Drawer.Screen>

				<Drawer.Screen
					name="Event"
					options={{
						drawerLabel: "Event",
						headerTitle: "Event",
					}}
				></Drawer.Screen>

				<Drawer.Screen
					name="StudentManual"
					options={{
						drawerLabel: "Student Manual",
						headerTitle: "Student Manual",
					}}
				></Drawer.Screen>

				<Drawer.Screen
					name="Faq"
					options={{
						drawerLabel: "FAQ",
						headerTitle: "FAQ",
					}}
				></Drawer.Screen>

				<Drawer.Screen
					name="About"
					options={{
						drawerLabel: "About",
						headerTitle: "About",
					}}
				></Drawer.Screen>

				<Drawer.Screen
					name="PhinmaEducation"
					options={{
						drawerLabel: "PHINMA Education",
						headerTitle: "PHINMA Education",
					}}
				></Drawer.Screen>

				<Drawer.Screen
					name="Developers"
					options={{
						drawerLabel: "Developers",
						headerTitle: "Developers",
					}}
				></Drawer.Screen>

				<Drawer.Screen
					name="Contact"
					options={{
						drawerLabel: "Contact",
						headerTitle: "Contact",
					}}
				></Drawer.Screen>
			</Drawer>
		</ThemeProvider>
	);
}
