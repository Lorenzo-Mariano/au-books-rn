import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Developers() {
	const colorScheme = useColorScheme();
	const fontColor = colorScheme === "dark" ? "#bababa" : "#000";

	return (
		<ScrollView
			style={[
				styles.mainView,
				{
					flex: 1,
					backgroundColor: colorScheme === "dark" ? "#1a1a1a" : "#fff",
				},
			]}
		>
			<Text style={[styles.biggerText, styles.headline, { color: fontColor }]}>
				Meet the developers:
			</Text>
			<View style={{ flex: 1, gap: 20 }}>
				<View style={styles.devItem}>
					<Image
						style={[styles.img, { aspectRatio: 1, alignSelf: "flex-start" }]}
						source={require("../assets/images/developers/lorenzo.jpg")}
					></Image>
					<View>
						<Text style={[styles.bigText, { color: fontColor }]}>
							Lorenzo C. Mariano
						</Text>
						<Text style={{ color: fontColor }}>BSIT-2 South 3</Text>
						<Text style={{ color: fontColor }}>Design</Text>
					</View>
				</View>

				<View style={styles.devItem}>
					<View>
						<Text style={[styles.bigText, { color: fontColor }]}>
							Faizal Jhonray
						</Text>
						<Text style={[styles.bigText, { color: fontColor }]}>
							B. Peralta
						</Text>
						<Text style={{ color: fontColor }}>BSIT-2 South 3</Text>
						<Text style={{ color: fontColor }}>UI/UX</Text>
					</View>
					<Image
						style={[styles.img, { aspectRatio: 1, alignSelf: "flex-end" }]}
						source={require("../assets/images/developers/faizal.jpg")}
					/>
				</View>
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

	biggerText: {
		fontSize: 26,
	},

	bigText: {
		fontSize: 20,
	},

	img: {
		height: undefined,
		width: "40%",
		borderRadius: 15,
	},

	devItem: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
});
