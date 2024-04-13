import { useContext, useState } from "react";
import {
	FlatList,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { useProduct } from "../hooks";
import DataContext from "../context";

const ProductList = () => {
	const { products, error, setFilteredProducts } = useProduct();
	const { setData } = useContext(DataContext);
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = () => {
		const filtered = products.filter((product) =>
			product?.product_name.toLowerCase().includes(searchQuery.toLowerCase())
		);

		setFilteredProducts(filtered);
	};
	if (error) {
		return (
			<View style={styles.centered}>
				<Text>Error fetching products.</Text>
			</View>
		);
	}

	return (
		<View style={styles.wrapper}>
			<View style={styles.searchContainer}>
				<TextInput
					style={styles.searchInput}
					placeholder="Chercher un produit ..."
					placeholderTextColor="grey"
					onChangeText={setSearchQuery}
					value={searchQuery}
					autoCorrect={false}
					onSubmitEditing={handleSearch}
				/>
				<TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
					<Text style={styles.searchButtonText}>Chercher</Text>
				</TouchableOpacity>
			</View>

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
		</View>
	);
};

export default ProductList;

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		width: "100%",
		padding: 10,
	},
	searchContainer: {
		flexDirection: "row",
		padding: 10,
		backgroundColor: "#000",
	},
	searchInput: {
		flex: 1,
		height: 40,
		borderColor: "grey",
		borderWidth: 1,
		borderRadius: 5,
		color: "#fff",
		paddingHorizontal: 10,
		marginRight: 10,
	},
	searchButton: {
		backgroundColor: "red",
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
	},
	searchButtonText: {
		color: "#fff",
		fontSize: 16,
	},
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
