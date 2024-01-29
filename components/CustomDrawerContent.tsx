import {
	DrawerContentScrollView,
	DrawerItemList,
} from "@react-navigation/drawer";
import { View } from "./Themed";
import { Image, StyleSheet } from "react-native";

export default function CustomDrawerContent(props: any) {
	return (
		<DrawerContentScrollView {...props}>
			<View style={styles.imgWrapper}>
				<Image
					alt="au-logo"
					style={styles.img}
					source={require("../assets/images/au logo trans.png")}
				/>
			</View>
			<DrawerItemList {...props} />
		</DrawerContentScrollView>
	);
}

const styles = StyleSheet.create({
	imgWrapper: {
		justifyContent: "center",
		alignItems: "center",
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

		marginTop: 20,
		marginBottom: 20,
	},
});
