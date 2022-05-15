import "./ContainerTrending.css";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import CategoryList from "./TrendingList";

function ContainerCategory() {
	const [categories, setCategories] = useState(null);

	const getCategories = async () => {
		const response = await fetch("https://fakestoreapi.com/products?limit=8");
		const categoriesFromAPI = await response.json();
		setCategories(categoriesFromAPI);
	};

	useEffect(() => {
		getCategories();
	});

	return (
		<div className='container-trending'>
			{categories ? <CategoryList categories={categories} /> : <Loading />}
		</div>
	);
}

export default ContainerCategory;
