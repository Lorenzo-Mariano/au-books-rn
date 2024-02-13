import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Scholarship() {
	const colorScheme = useColorScheme();
	const viewBgColor = colorScheme === "dark" ? "#1a1a1a" : "#fff";
	const fontColor = colorScheme === "dark" ? "#bababa" : "#000";
	const borderBottom = colorScheme === "dark" ? "#4463c6" : "#a1b8ff";

	return (
		<ScrollView style={[styles.mainView, { backgroundColor: viewBgColor }]}>
			<Text
				style={[
					styles.biggerText,
					styles.headline,
					{ color: fontColor, borderBottomColor: borderBottom },
				]}
			>
				Save your money with our available scholarships:
			</Text>

			<View style={styles.scholarships}>
				<Image
					style={[styles.scholarshipItem, styles.img]}
					source={require("../assets/images/scholarship/scholarship.jpg")}
				/>

				<View style={styles.scholarshipItem}>
					<Text style={[styles.bigText, { color: fontColor }]}>
						PHINMA Scholarship Program
					</Text>
					<Text style={[styles.normalText, { color: fontColor }]}>
						The program is granted to QUALIFIED STUDENTS who exemplify the
						values of PHINMA Education thereby becoming agents of positive
						change, contribute to helping fellow students succeed in their
						studies, and who will be brand ambassadors of the PHINMA Education
						community. The initiative has evolved towards awarding this
						scholarship to students who are not only academically competent but
						also those who exemplify leadership and social responsibility.
					</Text>
				</View>

				<View style={styles.scholarshipItem}>
					<Text style={[styles.bigText, { color: fontColor }]}>
						ACADEMIC SCHOLARSHIP
					</Text>
					<Text style={[styles.normalText, { color: fontColor }]}>
						100% Free Tuition Fee for valedictorians 50% for salutatorians;
						renewable every semester with maintaining grade (no grade lower than
						2.00 and GPA not lower than 1.75)
					</Text>
				</View>

				<View style={styles.scholarshipItem}>
					<Text style={[styles.bigText, { color: fontColor }]}>
						HAWAK KAMAY SCHOLARSHIP
					</Text>
					<Text style={[styles.normalText, { color: fontColor }]}>
						25%, 50%, or 75% on Tuition and Miscellaneous Fees. No maintaining
						grade and valid for the entire program duration
					</Text>
				</View>

				<View style={styles.scholarshipItem}>
					<Text style={[styles.bigText, { color: fontColor }]}>
						ALUMNI DISCOUNT
					</Text>
					<Text style={[styles.normalText, { color: fontColor }]}>
						Discount for Children of PHINMA AU Alumni 10% on Tuition Fee
					</Text>
				</View>

				<View style={styles.scholarshipItem}>
					<Text style={[styles.bigText, { color: fontColor }]}>
						STUDENT ASSISTANTSHIP PROGRAM
					</Text>
					<Text style={[styles.normalText, { color: fontColor }]}>
						100% free on Tuition Fee (Maximum of 24 units). This scholarship is
						given to students who are willing to study and "work" at the same
						time at the University.
					</Text>
				</View>

				<View style={styles.scholarshipItem}>
					<Text style={[styles.bigText, { color: fontColor }]}>
						SOLO PARENT DISCOUNT
					</Text>
					<Text style={[styles.normalText, { color: fontColor }]}>
						25% on Tuition Fees for Children of Single Parents. Requirements:
						Official Registration Form, Birth Certificate of Student, Solo
						Parent ID
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
		borderBottomWidth: 2,
	},

	biggerText: {
		fontSize: 26,
		paddingBottom: 10,
	},

	bigText: {
		fontSize: 18,
		fontWeight: "800",
	},

	normalText: {
		fontSize: 16,
	},

	scholarships: {
		flex: 1,
		gap: 24,
		paddingBottom: 30,
	},

	scholarshipItem: {
		flex: 1,
		flexDirection: "column",
		gap: 6,
	},

	img: {
		aspectRatio: 750 / 421,
		height: undefined,
		width: "100%",
		borderRadius: 15,
	},
});
