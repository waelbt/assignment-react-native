import { useContext } from "react";
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import DataContext from "../context";
import ProductItem from "./ProductItem";

const SelectedItemsList = () => {
	const { data } = useContext(DataContext);

	const increaseQuantity = (id) => {
		// TODO
	};

	const decreaseQuantity = (id) => {
		// TODO
	};

	return (
		<FlatList
			horizontal
			data={data}
			keyExtractor={(item) => item.id.toString()}
			renderItem={({ item }) => (
				<ProductItem
					item={item}
					onIncrease={() => increaseQuantity(item.id)}
					onDecrease={() => decreaseQuantity(item.id)}
				/>
			)}
			style={styles.selectedItemsList}
		/>
	);
};

const styles = StyleSheet.create({
	selectedItemsList: {
		width: "100%",
		borderWidth: 2,
		borderColor: "#fff", // The color can be a hex code, an rgba value, etc.
		borderRadius: 5,
		borderStyle: "solid",
		// Style for the horizontal list
	},
	selectedItemContainer: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#00000", // Assuming a dark theme
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
});

export default SelectedItemsList;
