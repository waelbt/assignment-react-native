import { useEffect, useState } from "react";

const useProduct = () => {
	const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
                setError(false);
				const reponse = await fetch("http://localhost:3000/products");
				const data = await reponse.json();
				setProducts(data);
			} catch (error) {
				console.log(error);
                setError(true);
            }
		};

		fetchData();
	}, []);


    return {products, error}
};

export default useProduct;
