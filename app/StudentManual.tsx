import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { WebView } from "react-native-webview";

export default function StudentManual() {
	const colorScheme = useColorScheme();
	const fontColor = colorScheme === "dark" ? "#bababa" : "#000";
	const manualUrl = require("../assets/images/studentmanual/student manual.jpg");

	return (
		<WebView
			originWhitelist={["*"]}
			// other solution was to pass uri of discord image lmao
			source={require("../assets/images/studentmanual/student manual.jpg")}
		/>
	);
}

const styles = StyleSheet.create({
	img: {
		width: "60%",
		height: undefined,
		aspectRatio: 971 / 11708,
	},
});
