import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SearchBar, ProductList, ProductItem } from "./app/components";
import { useState, createContext } from "react";
import DataContext from "./app/context";

export default function App() {
	const [data, setData] = useState([]);
	return (
		<DataContext.Provider value={[data, setData]}>
			<View style={styles.container}>
				<ProductList />
			</View>
		</DataContext.Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
