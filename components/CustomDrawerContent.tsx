import {
	DrawerContentScrollView,
	DrawerItemList,
} from "@react-navigation/drawer";
import { View } from "./Themed";
import { Image } from "react-native";

export default function CustomDrawerContent(props: any) {
	const { width, height } = Image.resolveAssetSource(
		require("../assets/images/au banner transparent.png")
	);

	return (
		<DrawerContentScrollView {...props}>
			<View>
				<Image
					alt="au-banner"
					style={{
						height: undefined,
						width: "100%",
						aspectRatio: width / height,
						marginTop: 20,
						marginBottom: 20,
					}}
					source={require("../assets/images/au banner transparent.png")}
				/>
			</View>
			<DrawerItemList {...props} />
		</DrawerContentScrollView>
	);
}
