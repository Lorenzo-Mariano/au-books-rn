import { StyleSheet, Text, View, Image, useColorScheme } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Services() {
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
					styles.biggerText,
					styles.headline,
				]}
			>
				Information Tecnology Services Department (ITSD)
			</Text>

			<Image
				style={styles.img}
				source={require("../assets/images/services/courses.jpg")}
			></Image>

			<Text style={[styles.biggerText, { marginBottom: 20, color: fontColor }]}>
				Courses
			</Text>
			<Text style={[styles.normalText, { color: fontColor }]}>
				BS Information Technology
			</Text>
			<Text style={[styles.normalText, { color: fontColor }]}>
				BS Civil Engineering
			</Text>

			<View style={{ marginBottom: 40 }}></View>

			<Text style={[styles.biggerText, { marginBottom: 20, color: fontColor }]}>
				Services
			</Text>
			<Text style={[styles.normalText, { color: fontColor }]}>
				Enrollment assistance to new students
			</Text>
			<Text style={[styles.normalText, { color: fontColor }]}>
				News and announcements
			</Text>
			<Text style={[styles.normalText, { color: fontColor }]}>
				Student email creation
			</Text>
			<Text style={[styles.normalText, { color: fontColor }]}>
				Student ID creation
			</Text>
			<Text style={[styles.normalText, { color: fontColor }]}>
				Financial Aids
			</Text>
			<Text style={[styles.normalText, { color: fontColor }]}>
				Assigning of Duty
			</Text>
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
		aspectRatio: 700 / 400,
		marginBottom: 40,
	},
});
