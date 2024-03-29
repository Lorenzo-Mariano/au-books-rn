import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Developers() {
	const colorScheme = useColorScheme();
	const viewBgColor = colorScheme === "dark" ? "#1a1a1a" : "#fff";
	const fontColor = colorScheme === "dark" ? "#bababa" : "#000";
	const borderBottom = colorScheme === "dark" ? "#4463c6" : "#a1b8ff";

	return (
		<ScrollView
			style={[
				styles.mainView,
				{
					flex: 1,
					backgroundColor: viewBgColor,
				},
			]}
		>
			<Text
				style={[
					styles.biggerText,
					styles.headline,
					{ color: fontColor, borderBottomColor: borderBottom },
				]}
			>
				Meet the developers:
			</Text>
			<View style={{ flex: 1, gap: 20 }}>
				<View style={styles.devItem}>
					<Image
						style={styles.img}
						source={require("../assets/images/developers/lorenzo.jpg")}
					/>
					<View style={{ flex: 1 }}>
						<Text style={[styles.bigText, { color: fontColor, flexShrink: 1 }]}>
							Lorenzo C. Mariano
						</Text>
						<Text style={{ color: fontColor }}>BSIT-2 South 3</Text>
						<Text style={{ color: fontColor }}>Design</Text>
					</View>
				</View>

				<View style={styles.devItem}>
					<View style={{ flex: 1 }}>
						<Text style={[styles.bigText, { color: fontColor, flexShrink: 1 }]}>
							Faizal Jhonray B. Peralta
						</Text>
						<Text style={{ color: fontColor }}>BSIT-2 South 3</Text>
						<Text style={{ color: fontColor }}>UI/UX</Text>
					</View>
					<Image
						style={styles.img}
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
		aspectRatio: 1,
	},

	devItem: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		gap: 20,
	},
});
