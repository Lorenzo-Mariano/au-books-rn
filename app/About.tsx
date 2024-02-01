import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";

export default function About() {
	const colorScheme = useColorScheme();
	const viewBgColor = colorScheme === "dark" ? "#1a1a1a" : "#fff";
	const fontColor = colorScheme === "dark" ? "#bababa" : "#000";

	return (
		<View style={[styles.mainView, { backgroundColor: viewBgColor }]}>
			<Text style={[styles.biggerText, styles.headline, { color: fontColor }]}>
				Stay up to date
			</Text>
			<Image
				style={styles.img}
				source={require("../assets/images/about/books.jpg")}
			/>
			<Text style={{ fontSize: 16, color: fontColor }}>
				This app is for keeping track of books borrowed from the library. Don't
				miss it the next time your favorite books become available again!
			</Text>
		</View>
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
