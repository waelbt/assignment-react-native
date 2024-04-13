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
			style={styles.listContainer}
			data={products}
			numColumns={3}
			keyExtractor={(item) => item.id.toString()} // Assuming 'id' is a number, it needs to be converted to a string
			renderItem={({ item }) => (
				<TouchableOpacity
					style={styles.container}
					onPress={() => setData(item)}
				>
					<View style={styles.coloredSideView} />
					<View style={styles.textsContainer}>
						<Text style={styles.title}>{item.product_name}</Text>
						<Text style={styles.price}>{item.price} Dhs</Text>
					</View>
				</TouchableOpacity>
			)}
		/>
	);
};

export default ProductList;

const styles = StyleSheet.create({
	listContainer: {
		flex: 1,
		width: "100%",
	},
	container: {
		flex: 1,
		flexDirection: "row",
		backgroundColor: "#333",
		borderRadius: 5,
		margin: 5,
		overflow: "hidden",
	},
	coloredSideView: {
		backgroundColor: "pink",
		width: 5,
	},
	textsContainer: {
		flex: 1,
		padding: 10,
	},
	title: {
		color: "#fff",
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 5,
	},
	price: {
		color: "#fff",
		fontSize: 14,
	},
});
