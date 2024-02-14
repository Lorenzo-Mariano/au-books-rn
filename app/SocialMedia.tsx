import { Ionicons } from "@expo/vector-icons";
import {
	Linking,
	Pressable,
	StyleSheet,
	Text,
	View,
	useColorScheme,
} from "react-native";

export default function SocialMedia() {
	const colorScheme = useColorScheme();
	const viewBgColor = colorScheme === "dark" ? "#1a1a1a" : "#fff";
	const buttonColor = colorScheme === "dark" ? "#4463c6" : "#a1b8ff";

	function openFb() {
		Linking.openURL("fb://");
	}

	return (
		<View style={[styles.mainView, { backgroundColor: viewBgColor }]}>
			<Pressable
				onPress={openFb}
				style={({ pressed }) => [
					styles.button,
					{ backgroundColor: pressed ? "#5d9cff" : buttonColor },
				]}
			>
				<Ionicons color={"#fff"} name="logo-facebook" size={24}></Ionicons>
				<Text style={{ color: "#fff" }}>Open Facebook!</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	mainView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	button: {
		borderRadius: 16,
		padding: 16,
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
	},
});
