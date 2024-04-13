import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, SafeAreaView } from "react-native";
import { ProductList, ProductItem } from "./app/components";
import { useState, createContext } from "react";
import DataContext from "./app/context";

export default function App() {
	const [data, setData] = useState([]);
	return (
		<DataContext.Provider value={[data, setData]}>
			<SafeAreaView style={styles.container}>
				<ProductList />
			</SafeAreaView>
		</DataContext.Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
		alignItems: "center",
		justifyContent: "center",
	},
});
