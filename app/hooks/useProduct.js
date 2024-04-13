import { useEffect, useState } from "react";

const useProduct = () => {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setError(false);
				const reponse = await fetch(
					"https://28a6-51-140-66-210.ngrok-free.app/products"
				);
				const data = await reponse.json();
				setProducts(data);
			} catch (error) {
				console.log(error.message);
				setError(true);
			}
		};

		fetchData();
	}, []);

	return { products, error };
};

export default useProduct;
