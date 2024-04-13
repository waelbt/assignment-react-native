import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const ProductItem = ({ item, onIncrease, onDecrease }) => {
	return (
		<View style={styles.selectedItemContainer}>
			<Text style={styles.itemTitle}>{item.title}</Text>
			<View style={styles.quantityContainer}>
				<TouchableOpacity onPress={onDecrease}>
					<Text style={styles.quantityButton}>-</Text>
				</TouchableOpacity>
				<Text style={styles.quantity}>{item.quantity}</Text>
				<TouchableOpacity onPress={onIncrease}>
					<Text style={styles.quantityButton}>+</Text>
				</TouchableOpacity>
			</View>
			<Text style={styles.price}>{item.price} Dhs</Text>
		</View>
	);
};

export default ProductItem;

const styles = StyleSheet.create({
	selectedItemsList: {
		// Style for the horizontal list
	},
	selectedItemContainer: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#222", // Assuming a dark theme
		borderRadius: 5,
		padding: 10,
		marginRight: 10,
	},
	itemTitle: {
		color: "#fff",
		fontSize: 16,
		marginRight: 10,
	},
	quantityContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: 10,
	},
	quantityButton: {
		color: "#fff",
		fontSize: 20,
		marginHorizontal: 10,
	},
	quantity: {
		color: "#fff",
		fontSize: 16,
	},
	price: {
		color: "#fff",
		fontSize: 16,
	},
	// ... other styles ...
});
