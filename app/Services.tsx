import { StyleSheet, Text, View, Image } from "react-native";

export default function Services() {
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
