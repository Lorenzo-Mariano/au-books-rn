import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

export default function StudentManual() {
	const colorScheme = useColorScheme();
	const fontColor = colorScheme === "dark" ? "#bababa" : "#000";
	return (
		<ScrollView>
			<View>
				<Image
					resizeMethod="resize"
					style={styles.img}
					source={require("../assets/images/studentmanual/student manual.jpg")}
				/>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	img: {
		width: "100%",
		height: undefined,
		aspectRatio: 971 / 11708,
	},
});
