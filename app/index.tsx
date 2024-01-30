import { Image, StyleSheet, Text, View } from "react-native";
import { useColorScheme } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function College() {
	const colorScheme = useColorScheme();

	return (
		<ScrollView
			style={[
				styles.mainView,
				{
					backgroundColor: colorScheme === "dark" ? "#1a1a1a" : "#fff",
				},
			]}
		>
			<Text
				style={[
					styles.bigText,
					styles.marginBottom,
					{
						color: colorScheme === "dark" ? "#bababa" : "#000",
					},
				]}
			>
				Meet the faculty of the College of Information Technology and
				Engineering!
			</Text>
			<View style={{ flex: 1, gap: 20, paddingBottom: 40 }}>
				<Image
					style={styles.img}
					source={require("../assets/images/college/evelyn juliano.jpg")}
				/>

				<Image
					style={styles.img}
					source={require("../assets/images/college/aira lucero.jpg")}
				/>

				<Image
					style={styles.img}
					source={require("../assets/images/college/al golondrina.jpg")}
				/>

				<Image
					style={styles.img}
					source={require("../assets/images/college/delfin viola.jpg")}
				/>

				<Image
					style={styles.img}
					source={require("../assets/images/college/eileen asuncion.jpg")}
				/>

				<Image
					style={styles.img}
					source={require("../assets/images/college/emmanuel cacho.jpg")}
				/>

				<Image
					style={styles.img}
					source={require("../assets/images/college/isaiah misona.jpg")}
				/>

				<Image
					style={styles.img}
					source={require("../assets/images/college/jestony alvarez.jpg")}
				/>

				<Image
					style={styles.img}
					source={require("../assets/images/college/john leabres.jpg")}
				/>

				<Image
					style={styles.img}
					source={require("../assets/images/college/john legaspi.jpg")}
				/>

				<Image
					style={styles.img}
					source={require("../assets/images/college/salvador collado.jpg")}
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

	marginBottom: {
		marginBottom: 40,
	},

	img: {
		height: undefined,
		width: "100%",
		borderRadius: 15,
		aspectRatio: 1080 / 720,
	},
});
