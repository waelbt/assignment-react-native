import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";

const ProductItem = ({ item }) => {
	const [quantity, setQuantity] = useState(0);

	const incrementQuantity = () => {
		setQuantity((prevQuantity) => prevQuantity + 1);
	};

	// Function to decrement the quantity but not allow it to go below 0
	const decrementQuantity = () => {
		setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
	};
	return (
		<View style={styles.selectedItemContainer}>
			<View style={styles.itemDetails}>
				<Text style={styles.itemName}>{item.product_name}</Text>
				<Text style={styles.itemPrice}>{`1 x ${
					item.price || "24"
				} Dhs / u`}</Text>
			</View>
			<View style={styles.quantityContainer}>
				<TouchableOpacity onPress={decrementQuantity}>
					<Text style={styles.quantityButton}>-</Text>
				</TouchableOpacity>
				<Text style={styles.quantity}>{quantity}</Text>
				<TouchableOpacity onPress={incrementQuantity}>
					<Text style={styles.quantityButton}>+</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ProductItem;

const styles = StyleSheet.create({
	selectedItemContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between", // To space out the title and the quantity adjuster
		backgroundColor: "#222", // Dark theme background color
		borderRadius: 5,
		padding: 10,
		marginBottom: 10, // Add space between each item if stacked
		borderWidth: 1, // Optional: if you want a border
		borderColor: "#3d3d3d", // Slightly lighter color for the border to be visible on the dark background
	},
	itemDetails: {
		flex: 1,
		justifyContent: "center",
	},
	itemName: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
	itemPrice: {
		color: "#fff",
		fontSize: 14,
	},
	quantityContainer: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#333", // Slightly lighter color for the quantity container background
		borderRadius: 5,
		padding: 5,
	},
	quantityButton: {
		color: "#fff",
		fontSize: 20,
		paddingHorizontal: 10, // More horizontal padding for a wider touch area
		// Add backgroundColor if buttons are meant to be visibly separate from the quantity container background
	},
	quantity: {
		color: "#fff",
		fontSize: 16,
		marginHorizontal: 5, // Spacing between buttons and quantity text
	},
});
