import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function About() {
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
