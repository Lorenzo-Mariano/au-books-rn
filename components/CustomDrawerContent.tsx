import {
	DrawerContentScrollView,
	DrawerItemList,
} from "@react-navigation/drawer";

export default function CustomDrawerContent(props: any) {
	return (
		<DrawerContentScrollView
			{...props}
			contentContainerStyle={{
				backgroundColor: "#a8caff",
			}}
		>
			<DrawerItemList {...props} />
		</DrawerContentScrollView>
	);
}
