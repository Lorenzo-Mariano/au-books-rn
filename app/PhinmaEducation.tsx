import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function PhinmaEducation() {
	const colorScheme = useColorScheme();
	const viewBgColor = colorScheme === "dark" ? "#1a1a1a" : "#fff";
	const fontColor = colorScheme === "dark" ? "#bababa" : "#000";

	return (
		<ScrollView style={[styles.mainView, { backgroundColor: viewBgColor }]}>
			<Text style={[styles.biggerText, styles.headline, { color: fontColor }]}>
				Know more about us - PHINMA Education
			</Text>

			<View style={styles.body}>
				<Text
					style={[
						styles.bigText,
						{
							color: fontColor,
							fontWeight: "800",
						},
					]}
				>
					Making lives better through education
				</Text>

				<Image
					style={[styles.img, { marginBottom: 40 }]}
					source={require("../assets/images/phinmaeducation/phinma.jpg")}
				/>

				<Text style={[styles.paragraph, { color: fontColor }]}>
					Only one out of every four Filipino students who enter first grade
					will finish a tertiary degree. This is the reality for many students
					who face financial, social, and psychological barriers to getting a
					college education. Without it, they have a smaller chance of uplifting
					themselves, their families, their communities, and the country. PHINMA
					Education, by intent and design, caters to those who need it the most:
					the underserved youth.
				</Text>
				<Text style={[styles.paragraph, { color: fontColor }]}>
					We have built a strong track record in acquiring and turning around
					schools. Our “bare-bones, no-frills, brass knuckles” strategy focuses
					resources on fully equipping graduates with skills they need to
					succeed in the increasingly globalizing workplace. We work with
					students, fellow educators, and partners both in the Philippines and
					Indonesia, and the rest of the world, to provide quality, accessible
					education towards gainful employment.
				</Text>
				<Image
					style={[
						styles.img,
						{ aspectRatio: 762 / 656, marginTop: 40, marginBottom: 40 },
					]}
					source={require("../assets/images/phinmaeducation/happy student.jpg")}
				/>
				<Text style={[styles.paragraph, { color: fontColor }]}>
					Presently, we offer 110+ programs covering the entire education chain.
					We invest heavily in its teachers who deliver lessons using the Active
					Learning method. This is supplemented by the Student Success Program
					(SSP), which emphasizes the three mindsets of “I want, I can, and I
					belong.” We work with industry partners to ensure the curriculum is
					relevant while teaching Core Work Skills that are necessary in every
					industry.
				</Text>
				<Text style={[styles.paragraph, { color: fontColor }]}>
					These strategies have produced encouraging results in licensure exam
					passing rates and the employability of our graduates. While nine out
					of 10 freshmen come to us ill-equipped for college, these same
					students leave armed with a solid background in fields such as
					business, information technology, hospitality, engineering, and
					healthcare, among others. Since 2004, PHINMA Education has produced
					122 board topnotchers and over 26 thousand professionals.
				</Text>
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
		width: "100%",
		borderRadius: 15,
		aspectRatio: 770 / 533,
	},

	body: {
		flex: 1,
		gap: 20,
		paddingBottom: 20,
	},

	paragraph: {
		fontSize: 16,
	},
});
