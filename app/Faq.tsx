import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function FAQ() {
	const colorScheme = useColorScheme();
	const fontColor = colorScheme === "dark" ? "#bababa" : "#000";

	return (
		<ScrollView
			style={[
				styles.mainView,
				{ backgroundColor: colorScheme === "dark" ? "#1a1a1a" : "#fff" },
			]}
		>
			{/* <View>
				<Image
					style={{ width: "100%", height: undefined, aspectRatio: 755 / 8131 }}
					source={require("../assets/images/services/all services.jpg")}
				></Image>
			</View> */}
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
				Frequently Asked Questions
			</Text>

			<Image
				style={styles.img}
				source={require("../assets/images/faq/faq.jpg")}
			/>

			<View style={styles.questionsWrapper}>
				<View>
					<Text
						style={[styles.bigText, { marginBottom: 20, color: fontColor }]}
					>
						Q: What programs does the College of Information Technology and
						Engineering offer?
					</Text>
					<Text style={[styles.normalText, { color: fontColor }]}>
						A: The college offers a range of programs, including Bachelor's
						Degrees in Information Technology and Civil Engineering.
					</Text>
				</View>

				<View>
					<Text
						style={[styles.bigText, { marginBottom: 20, color: fontColor }]}
					>
						Q: How can I apply for admission to the College of Information
						Technology and Engineering?
					</Text>
					<Text style={[styles.normalText, { color: fontColor }]}>
						A: To apply, visit the university's admissions portal and follow the
						application instructions provided. Ensure you meet the specific
						requirements outlined for your chosen program.
					</Text>
				</View>

				<View>
					<Text
						style={[styles.bigText, { marginBottom: 20, color: fontColor }]}
					>
						Q: Are there any scholarships available for students in the College
						of Information Technology and Engineering?
					</Text>
					<Text style={[styles.normalText, { color: fontColor }]}>
						A: Yes, the college provides various scholarships and financial aid
						options. Visit the scholarship page on our website for detailed
						information and application procedures.
					</Text>
				</View>

				<View>
					<Text
						style={[styles.bigText, { marginBottom: 20, color: fontColor }]}
					>
						Q: How can I connect with faculty members for academic guidance?
					</Text>
					<Text style={[styles.normalText, { color: fontColor }]}>
						A: Faculty members hold regular office hours, and you can schedule
						appointments to discuss academic matters. Contact details for
						faculty members are available on the college website.
					</Text>
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
		aspectRatio: 380 / 240,
		marginBottom: 40,
	},

	questionsWrapper: {
		flex: 1,
		flexDirection: "column",
		gap: 40,
		paddingBottom: 30,
	},
});
