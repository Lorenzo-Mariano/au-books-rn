import { StyleSheet, Text, View, Image, useColorScheme } from "react-native";

export default function Services() {
	const colorScheme = useColorScheme();
	const fontColor = colorScheme === "dark" ? "#bababa" : "#000";
	return (
		<View style={styles.mainView}>
			<Image
				source={{
					uri: "https://reactnative.dev/img/tiny_logo.png",
				}}
			/>
			<Text>Services</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	mainView: {
		padding: "5%",
	},

	bigText: {
		fontSize: 24,
	},
});
