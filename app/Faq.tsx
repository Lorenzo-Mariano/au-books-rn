import { StyleSheet, Text, View, useColorScheme } from "react-native";

export default function FAQ() {
	const colorScheme = useColorScheme();
	const fontColor = colorScheme === "dark" ? "#bababa" : "#000";
	return (
		<View>
			<Text>FAQ</Text>
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
