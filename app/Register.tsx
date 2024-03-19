import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const RegisterScreen = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleRegister = () => {
		console.log("Username:", username);
		console.log("Email:", email);
		console.log("Password:", password);
	};

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder="Username"
				value={username}
				onChangeText={(text) => setUsername(text)}
			/>
			<TextInput
				style={styles.input}
				placeholder="Email"
				keyboardType="email-address"
				value={email}
				onChangeText={(text) => setEmail(text)}
			/>
			<TextInput
				style={styles.input}
				placeholder="Password"
				secureTextEntry={true}
				value={password}
				onChangeText={(text) => setPassword(text)}
			/>
			<Button title="Register" onPress={handleRegister} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
	},
	input: {
		height: 40,
		width: "100%",
		borderColor: "gray",
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 10,
		paddingLeft: 10,
	},
});

export default RegisterScreen;
