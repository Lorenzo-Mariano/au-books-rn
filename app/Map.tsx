import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Map() {
	const colorScheme = useColorScheme();
	const viewBgColor = colorScheme === "dark" ? "#1a1a1a" : "#fff";
	const fontColor = colorScheme === "dark" ? "#bababa" : "#000";
	const mapItemBgColor = colorScheme === "dark" ? "#2e2e2e" : "#e8e8e8";

	return (
		<ScrollView style={[styles.mainView, { backgroundColor: viewBgColor }]}>
			<Text style={[styles.biggerText, styles.headline, { color: fontColor }]}>
				Campus Map
			</Text>

			<View
				style={{ flex: 1, flexDirection: "column", gap: 40, paddingBottom: 40 }}
			>
				<View style={[styles.mapItem, { backgroundColor: mapItemBgColor }]}>
					<Text style={[styles.bigText, { color: fontColor }]}>Layout</Text>
					<Image
						style={[styles.img, { aspectRatio: 2255 / 1681 }]}
						source={require("../assets/images/map/second floor map.jpg")}
					/>
				</View>

				<View style={[styles.mapItem, { backgroundColor: mapItemBgColor }]}>
					<Text style={[styles.bigText, { color: fontColor }]}>Registrar</Text>
					<Image
						style={[styles.img, { aspectRatio: 2255 / 1681 }]}
						source={require("../assets/images/map/registrar.jpg")}
					/>
				</View>

				<View style={[styles.mapItem, { backgroundColor: mapItemBgColor }]}>
					<Text style={[styles.bigText, { color: fontColor }]}>
						Center for Student Development and Leadership
					</Text>
					<Image
						style={[styles.img, { aspectRatio: 2255 / 1681 }]}
						source={require("../assets/images/map/csdl.jpg")}
					/>
				</View>

				<View style={[styles.mapItem, { backgroundColor: mapItemBgColor }]}>
					<Text style={[styles.bigText, { color: fontColor }]}>
						1st Floor Comfort Room
					</Text>
					<Image
						style={[styles.img, { aspectRatio: 2255 / 1681 }]}
						source={require("../assets/images/map/first floor cr.jpg")}
					/>
				</View>

				<View style={[styles.mapItem, { backgroundColor: mapItemBgColor }]}>
					<Text style={[styles.bigText, { color: fontColor }]}>Gym</Text>
					<Image
						style={[styles.img, { aspectRatio: 2255 / 1681 }]}
						source={require("../assets/images/map/gym.jpg")}
					/>
				</View>

				<View style={[styles.mapItem, { backgroundColor: mapItemBgColor }]}>
					<Text style={[styles.bigText, { color: fontColor }]}>Canteen</Text>
					<Image
						style={[styles.img, { aspectRatio: 2255 / 1681 }]}
						source={require("../assets/images/map/canteen.jpg")}
					/>
				</View>

				<View style={[styles.mapItem, { backgroundColor: mapItemBgColor }]}>
					<Text style={[styles.bigText, { color: fontColor }]}>Library</Text>
					<Image
						style={[styles.img, { aspectRatio: 2255 / 1681 }]}
						source={require("../assets/images/map/library.jpg")}
					/>
				</View>

				<View style={[styles.mapItem, { backgroundColor: mapItemBgColor }]}>
					<Text style={[styles.bigText, { color: fontColor }]}>
						CITE Office
					</Text>
					<Image
						style={[styles.img, { aspectRatio: 2255 / 1681 }]}
						source={require("../assets/images/map/cite office.jpg")}
					/>
				</View>

				<View style={[styles.mapItem, { backgroundColor: mapItemBgColor }]}>
					<Text style={[styles.bigText, { color: fontColor }]}>
						Computer Laboratories
					</Text>
					<Image
						style={[styles.img, { aspectRatio: 2255 / 1681 }]}
						source={require("../assets/images/map/computer labs.jpg")}
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
		fontWeight: "800",
	},

	normalText: {
		fontSize: 16,
	},

	img: {
		height: undefined,
		width: "100%",
		borderRadius: 15,
	},

	mapItem: {
		flex: 1,
		flexDirection: "column",
		gap: 20,
		padding: 10,
		borderRadius: 15,
	},
});
