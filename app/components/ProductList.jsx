import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useContext } from "react";
import { useProduct } from "../hooks";
import DataContext from "../context";

const ProductList = () => {
	const { products, error } = useProduct();

	const { setData } = useContext(DataContext);

	if (error) {
		return (
			<View>
				<Text>error fetching products</Text>
			</View>
		);
	}
	return (
		<View>
			<FlatList
				data={products}
				renderItem={({ product }) => (
					<TouchableOpacity key={product.id} onPress={() => setData(product)}>
						<View />
						<View>
							<Text>{product.product_name}</Text>
							<Text>{product.price} Dhs</Text>
						</View>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
};

export default ProductList;

const styles = StyleSheet.create({});
