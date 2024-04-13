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

	return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.id.toString()}
			renderItem={({ item }) => <ProductItem item={item} />}
			style={styles.selectedItemsList}
		/>
	);
};

const styles = StyleSheet.create({
	selectedItemsList: {
		flex: 1,
		width: "100%",
		borderWidth: 2,
		borderColor: "#fff",
		borderRadius: 5,
		paddingVertical: 10,
		marginBottom: 10,
	},
});

export default SelectedItemsList;
