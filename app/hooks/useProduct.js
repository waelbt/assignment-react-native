import { useEffect, useState } from "react";

const useProduct = () => {
	const [products, setFilteredProducts] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setError(false);
				const reponse = await fetch(
					"https://28a6-51-140-66-210.ngrok-free.app/products"
				);
				const data = await reponse.json();
				setFilteredProducts(data);
			} catch (error) {
				console.log(error.message);
				setError(true);
			}
		};

		fetchData();
	}, []);

	return { products, error, setFilteredProducts };
};

export default useProduct;
