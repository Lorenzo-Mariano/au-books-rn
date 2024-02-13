import { View } from "react-native";
import WebView from "react-native-webview";

export default function GoogleMap() {
	return (
		<View style={{ flex: 1 }}>
			<WebView
				style={{ height: "100%", width: "100%" }}
				source={{
					uri: "https://www.google.com/maps/place/PHINMA+Araullo+University+South/@15.4612703,120.9507784,17.75z/data=!4m6!3m5!1s0x3397288e7773ce57:0xdd78f815acb955f0!8m2!3d15.461596!4d120.951127!16s%2Fg%2F11cp7j4r6k?entry=tts",
				}}
			></WebView>
		</View>
	);
}
