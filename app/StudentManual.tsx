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
			source={{
				uri: "https://cdn.discordapp.com/attachments/959064774610661416/1202727528201191424/student_manual.jpg?ex=65ce824c&is=65bc0d4c&hm=f5fd736400baf5c4321fcd95ee6a4aeb958ce91aee18a82700ee95c0b4454902&",
			}}
			// source={require("../assets/images/studentmanual/student manual.jpg")}
		/>
	);
}

const styles = StyleSheet.create({});
