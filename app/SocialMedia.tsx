import { Ionicons } from "@expo/vector-icons";
import {
	Pressable,
	StyleSheet,
	Text,
	View,
	useColorScheme,
} from "react-native";

export default function SocialMedia() {
	const colorScheme = useColorScheme();
	const fontColor = colorScheme === "dark" ? "#fff" : "#000";

	return (
		<View style={styles.mainView}>
			<Pressable
				onPress={() => {
					console.log("asdf");
				}}
				style={({ pressed }) => [
					styles.button,
					{ backgroundColor: pressed ? "#5d9cff" : "#a1b8ff" },
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
