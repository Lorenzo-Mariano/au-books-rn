import {
	DrawerContentScrollView,
	DrawerItemList,
} from "@react-navigation/drawer";
import { View } from "./Themed";
import { Image, StyleSheet, useColorScheme } from "react-native";

export default function CustomDrawerContent(props: any) {
	const colorScheme = useColorScheme();

	return (
		<DrawerContentScrollView style={{ backgroundColor: "#a1b8ff" }} {...props}>
			<View style={[styles.imgWrapper]}>
				<Image
					alt="au-logo"
					style={styles.img}
					source={require("../assets/images/au logo trans.png")}
				/>
			</View>
			<View
				style={{
					paddingTop: 20,
					backgroundColor: colorScheme === "dark" ? "#000" : "#fff",
				}}
			>
				<DrawerItemList {...props} />
			</View>
		</DrawerContentScrollView>
	);
}

const styles = StyleSheet.create({
	imgWrapper: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#a1b8ff",
		marginBottom: 20,
	},

	img: {
		height: undefined,
		width: "50%",
		aspectRatio:
			Image.resolveAssetSource(require("../assets/images/au logo trans.png"))
				.width /
			Image.resolveAssetSource(require("../assets/images/au logo trans.png"))
				.height,
	},

	blueBottom: {
		borderBottomColor: "#a1b8ff",
		borderStyle: "solid",
		borderBottomWidth: 1,
	},
});
