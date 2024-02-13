import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";

export default function About() {
	const colorScheme = useColorScheme();
	const viewBgColor = colorScheme === "dark" ? "#1a1a1a" : "#fff";
	const borderBottom = colorScheme === "dark" ? "#4463c6" : "#a1b8ff";
	const fontColor = colorScheme === "dark" ? "#bababa" : "#000";

	return (
		<View style={[styles.mainView, { backgroundColor: viewBgColor }]}>
			<Text
				style={[
					styles.biggerText,
					styles.headline,
					{ color: fontColor, borderBottomColor: borderBottom },
				]}
			>
				Stay up to date
			</Text>
			<View
				style={{
					marginBottom: 40,
					alignItems: "center",
				}}
			>
				<Image
					style={styles.img}
					source={require("../assets/images/circle-icon.png")}
				/>
			</View>
			<Text style={[styles.bigText, { color: fontColor }]}>
				App Name: AU Book Borrowing System
			</Text>
			<Text style={{ fontSize: 16, color: fontColor }}>
				Description: This app is for keeping track of books borrowed from the
				library. Don't miss it the next time your favorite books become
				available again!
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
		width: "50%",
		aspectRatio: 1,
		borderRadius: 15,
	},
});
