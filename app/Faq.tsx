import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function FAQ() {
	const colorScheme = useColorScheme();
	const fontColor = colorScheme === "dark" ? "#bababa" : "#000";

	return (
		<ScrollView style={styles.mainView}>
			<Text style={[styles.biggerText, styles.headline, { color: fontColor }]}>
				Frequently Asked Questions
			</Text>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	mainView: {
		flex: 1,
		flexDirection: "column",
		gap: 10,
		padding: "5%",
	},

	headline: {
		marginBottom: 30,
		fontWeight: "800",
		paddingBottom: 10,
		borderBottomColor: "#a1b8ff",
		borderBottomWidth: 2,
	},

	biggerText: {
		fontSize: 26,
	},

	bigText: {
		fontSize: 20,
	},

	img: {
		height: undefined,
		width: "100%",
		aspectRatio: 1000 / 667,
		borderRadius: 15,
	},
});
