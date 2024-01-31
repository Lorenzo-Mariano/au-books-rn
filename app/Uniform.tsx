import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Uniform() {
	const colorScheme = useColorScheme();
	const fontColor = colorScheme === "dark" ? "#bababa" : "#000";

	return (
		<ScrollView
			style={[
				styles.mainView,
				{ backgroundColor: colorScheme === "dark" ? "#1a1a1a" : "#fff" },
			]}
		>
			<Text
				style={[
					{
						color: fontColor,
						marginBottom: 20,
						fontWeight: "800",
					},
					styles.bigText,
					styles.headline,
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

	headline: {
		marginBottom: 30,
		fontWeight: "800",
		paddingBottom: 10,
		borderBottomColor: "#a1b8ff",
		borderBottomWidth: 2,
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
