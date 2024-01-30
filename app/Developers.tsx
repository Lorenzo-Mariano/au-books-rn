import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Developers() {
	const colorScheme = useColorScheme();

	return (
		<ScrollView
			style={{
				backgroundColor: colorScheme === "dark" ? "#fff" : "#000",
			}}
		>
			<Text>Meet the developers:</Text>
			<Image source={require("../assets/images/favicon.png")} />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	mainView: {
		padding: "5%",
	},

	bigText: {
		fontSize: 24,
	},

	img: {
		height: undefined,
		width: "100%",
		borderRadius: 15,
	},
});
