import { StyleSheet, Text, View } from "react-native";
import { useColorScheme } from "react-native";

export default function College() {
	const colorScheme = useColorScheme();

	return (
		<View>
			<Text
				style={[
					{
						color: colorScheme === "dark" ? "#bababa" : "#000",
					},
				]}
			>
				College
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
