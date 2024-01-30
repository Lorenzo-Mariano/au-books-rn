import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";

export default function Developers() {
	const colorScheme = useColorScheme();

	return (
		<View
			style={{
				backgroundColor: colorScheme === "dark" ? "#fff" : "#000",
			}}
		>
			<Text>Meet the developers:</Text>
			<Image source={require("../assets/images/favicon.png")} />
		</View>
	);
}

const styles = StyleSheet.create({});
