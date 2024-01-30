import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";

export default function Event() {
	const colorScheme = useColorScheme();
	const fontColor = colorScheme === "dark" ? "#bababa" : "#000";
	return (
		<View>
			<Text>Event</Text>
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
