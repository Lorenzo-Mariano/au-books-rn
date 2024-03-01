import {
	Image,
	Linking,
	StyleSheet,
	Text,
	View,
	useColorScheme,
} from "react-native";
export default function Contact() {
	const colorScheme = useColorScheme();
	const viewBgColor = colorScheme === "dark" ? "#1a1a1a" : "#fff";
	const fontColor = colorScheme === "dark" ? "#bababa" : "#000";
	const borderBottom = colorScheme === "dark" ? "#4463c6" : "#a1b8ff";

	return (
		<View style={[styles.mainView, { backgroundColor: viewBgColor }]}>
			<Text
				style={[
					styles.bigText,
					styles.headline,
					{ color: fontColor, borderBottomColor: borderBottom },
				]}
			>
				Contact Us
			</Text>
			<Image
				style={[styles.img, { aspectRatio: 1200 / 627, marginBottom: 40 }]}
				source={require("../assets/images/contact/contact.png")}
			></Image>

			<Text style={{ fontSize: 24, marginBottom: 12, color: fontColor }}>
				PHINMA Contacts
			</Text>

			<Text style={[styles.bigText, { color: fontColor }]}>Phone:</Text>
			<Text
				style={[styles.smallText, { color: fontColor }]}
				onPress={() => {
					Linking.openURL("tel:0444643300");
				}}
			>
				(044) 464 3300
			</Text>

			<Text style={[styles.bigText, { color: fontColor }]}>Email: </Text>
			<Text style={[styles.smallText, { color: fontColor }]}>
				info.au@phimaed.com
			</Text>

			<Text style={[styles.bigText, { color: fontColor }]}>Web: </Text>
			<Text style={[styles.smallText, { color: fontColor }]}>
				au.phinma.edu.ph
			</Text>

			<Text style={{ fontSize: 24, marginBottom: 12, color: fontColor }}>
				Library Contacts
			</Text>
			<Text style={[styles.bigText, { color: fontColor }]}>Librarian: </Text>
			<Text style={[styles.smallText, { color: fontColor }]}>
				Assantiago.au@phinmaed.com
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	mainView: {
		padding: "5%",
		height: "100%",
	},

	headline: {
		marginBottom: 30,
		fontWeight: "800",
		paddingBottom: 10,
		borderBottomWidth: 2,
	},

	bigText: {
		fontSize: 24,
	},

	smallText: {
		marginBottom: 20,
	},

	img: {
		height: undefined,
		width: "100%",
		borderRadius: 15,
	},
});
