import { Ionicons } from "@expo/vector-icons";
import {
	Pressable,
	StyleSheet,
	Text,
	View,
	useColorScheme,
} from "react-native";

export default function College() {
	const colorScheme = useColorScheme();
	const viewBgColor = colorScheme === "dark" ? "#1a1a1a" : "#fff";
	const dialogBgColor = colorScheme === "dark" ? "#2b2b2b" : "#fff";
	const fontColor = colorScheme === "dark" ? "#fff" : "#000";
	const buttonColor = colorScheme === "dark" ? "#4463c6" : "#a1b8ff";

	return (
		<View style={[styles.mainView, { backgroundColor: viewBgColor }]}>
			<View style={[styles.dialog, { backgroundColor: dialogBgColor }]}>
				<Text style={[styles.headline, styles.bigText, { color: fontColor }]}>
					You have no books. Borrow some now to start reading!
				</Text>

				<Pressable
					style={({ pressed }) => [
						{
							flexDirection: "row",
							gap: 10,
							borderRadius: 16,
							padding: "5%",
							alignItems: "center",
							justifyContent: "center",
						},
						{ backgroundColor: pressed ? "#5d9cff" : buttonColor },
					]}
				>
					<Ionicons color={"#fff"} name="add-outline" size={32} />
					<Text style={{ fontSize: 18, color: "#fff" }}>Borrow a book</Text>
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	mainView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: "5%",
	},

	dialog: {
		gap: 60,
		backgroundColor: "#fff",
		paddingVertical: "20%",
		paddingHorizontal: "10%",
		borderRadius: 16,

		elevation: 16,
		shadowColor: "#000",
	},

	bigText: {
		fontSize: 24,
	},

	headline: {
		marginBottom: 30,
		fontWeight: "800",
	},

	img: {
		height: undefined,
		width: "100%",
		borderRadius: 15,
		aspectRatio: 1080 / 720,
	},
});
