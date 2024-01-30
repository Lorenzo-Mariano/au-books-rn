import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";

export default function About() {
	const colorScheme = useColorScheme();
	const fontColor = colorScheme === "dark" ? "#bababa" : "#000";
	return (
		<View>
			<Text>About</Text>
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
