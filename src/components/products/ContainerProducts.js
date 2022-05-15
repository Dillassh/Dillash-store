import { useEffect, useState } from "react";
import "./ContainerProducts.css";
import Loading from "../Loading";
import ProductList from "./ProductList";
import Search from "../Search";

function ContainerProducts() {
	const [products, setProducts] = useState(null);

	const getProducts = async () => {
		const response = await fetch("https://fakestoreapi.com/products");

		const productsFromAPI = await response.json();

		setProducts(productsFromAPI);
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<div className='container-products'>
			<Search />
			{products ? <ProductList products={products} /> : <Loading />}
		</div>
	);
}

export default ContainerProducts;
