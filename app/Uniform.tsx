import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Uniform() {
	const colorScheme = useColorScheme();

	return (
		<ScrollView
			style={[
				{ backgroundColor: colorScheme === "dark" ? "#1a1a1a" : "#fff" },
				styles.mainView,
			]}
		>
			<Text
				style={[
					{
						color: colorScheme === "dark" ? "#bababa" : "#000",
						marginBottom: 20,
					},
					styles.bigText,
				]}
			>
				Clean. Elegant. The best uniforms at an affordable price.
			</Text>
			<View style={{ flex: 1, gap: 20 }}>
				<Image
					style={[
						styles.img,
						{
							aspectRatio:
								Image.resolveAssetSource(
									require("../assets/images/uniform/all uniforms.jpg")
								).width /
								Image.resolveAssetSource(
									require("../assets/images/uniform/all uniforms.jpg")
								).height,
						},
					]}
					source={require("../assets/images/uniform/all uniforms.jpg")}
				/>

				<Image
					style={[
						styles.img,
						{
							aspectRatio:
								Image.resolveAssetSource(
									require("../assets/images/uniform/boy and girl.jpg")
								).width /
								Image.resolveAssetSource(
									require("../assets/images/uniform/boy and girl.jpg")
								).height,
						},
					]}
					source={require("../assets/images/uniform/boy and girl.jpg")}
				/>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	mainView: {
		padding: "5%",
	},

	bigText: {
		fontSize: 24,
	},

	img: {
		height: undefined,
		width: "100%",
		borderRadius: 15,
	},

	shadow: {
		shadowColor: "#bababa",
	},
});
