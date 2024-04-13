import React, { useContext } from "react";
import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { useProduct } from "../hooks";
import DataContext from "../context";

const ProductList = () => {
	const { products, error } = useProduct();
	const { setData } = useContext(DataContext);

	if (error) {
		return (
			<View style={styles.centered}>
				<Text>Error fetching products.</Text>
			</View>
		);
	}

	return (
		<FlatList
			data={products}
			keyExtractor={(item) => item.id.toString()} // Assuming 'id' is a number, it needs to be converted to a string
			renderItem={({ item }) => (
				<TouchableOpacity onPress={() => setData(item)}>
					<View style={styles.itemContainer}>
						<Text style={styles.name}>{item.product_name}</Text>
						<Text style={styles.price}>{item.price} Dhs</Text>
					</View>
				</TouchableOpacity>
			)}
		/>
	);
};

export default ProductList;

const styles = StyleSheet.create({
	centered: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	itemContainer: {
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#cccccc",
	},
	name: {
		fontSize: 16,
		fontWeight: "bold",
	},
	price: {
		fontSize: 14,
		color: "#666666",
	},
});
