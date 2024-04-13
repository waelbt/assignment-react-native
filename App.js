import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, SafeAreaView } from "react-native";
import { ProductList, SelectedItemsList } from "./app/components";
import { useState, createContext, useEffect } from "react";
import DataContext from "./app/context";

export default function App() {
	const [data, setData] = useState([]);

	const addItem = (item) => {
		setData((currentData) => {
			const itemExists = currentData.some(
				(existingItem) => existingItem.id === item.id
			);

			if (!itemExists) {
				return [...currentData, item];
			}
			return currentData;
		});
	};

	const value = { data, addItem };

	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<DataContext.Provider value={value}>
			<SafeAreaView style={styles.container}>
				<SelectedItemsList />
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
		paddingHorizontal: 5,
		paddingVertical: 10,
	},
});
