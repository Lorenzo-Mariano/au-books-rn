import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

export default function Event() {
	const colorScheme = useColorScheme();
	const viewBgColor = colorScheme === "dark" ? "#1a1a1a" : "#fff";
	const fontColor = colorScheme === "dark" ? "#bababa" : "#000";
	const eventItemBgColor = colorScheme === "dark" ? "#2e2e2e" : "#e8e8e8";

	return (
		<ScrollView style={[styles.mainView, { backgroundColor: viewBgColor }]}>
			<Text style={[styles.biggerText, styles.headline, { color: fontColor }]}>
				Stay up to date with the latest news!
			</Text>

			<Text style={{ fontSize: 16, marginBottom: 40, color: fontColor }}>
				Planned / past events of the semester will be listed below.
			</Text>

			<View style={styles.eventsWrapper}>
				<View style={[styles.eventItem, { backgroundColor: eventItemBgColor }]}>
					<Text style={[styles.bigText, { color: fontColor }]}>
						CITE Festival (Jan 15 - 19)
					</Text>
					<Image
						style={[styles.img, { aspectRatio: 1080 / 564 }]}
						source={require("../assets/images/event/cite.jpg")}
					/>
				</View>

				<View style={[styles.eventItem, { backgroundColor: eventItemBgColor }]}>
					<Text style={[styles.bigText, { color: fontColor }]}>
						Christmas tree lighting (Dec 1)
					</Text>
					<Image
						style={[styles.img, { aspectRatio: 1080 / 720 }]}
						source={require("../assets/images/event/Christmas tree lighting.jpg")}
					/>
				</View>

				<View style={[styles.eventItem, { backgroundColor: eventItemBgColor }]}>
					<Text style={[styles.bigText, { color: fontColor }]}>
						Dates to Remember
					</Text>
					<Image
						style={[styles.img, { aspectRatio: 1 }]}
						source={require("../assets/images/event/dates to remember.jpg")}
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

	normalText: {
		fontSize: 16,
	},

	img: {
		height: undefined,
		width: "100%",
		borderRadius: 15,
	},

	eventsWrapper: {
		flex: 1,
		flexDirection: "column",
		gap: 20,
		paddingBottom: 40,
	},

	eventItem: {
		flex: 1,
		flexDirection: "column",
		gap: 20,
		padding: 10,
		borderRadius: 15,
	},
});
