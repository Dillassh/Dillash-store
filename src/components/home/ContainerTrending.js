import "./ContainerTrending.css";
import { useEffect, useState } from "react";
import Loading from "../../common/Loading";
import TrendingList from "./TrendingList";

function ContainerTrending() {
	const [trendings, setTrendings] = useState(null);

	const getTrendings = async () => {
		const response = await fetch("https://fakestoreapi.com/products?limit=8");
		const trendingsFromAPI = await response.json();

		setTrendings(trendingsFromAPI);
	};

	useEffect(() => {
		getTrendings();
	});

	return (
		<div className='row justify-content-center mt-5'>
			{trendings ? <TrendingList trendings={trendings} /> : <Loading />}
		</div>
	);
}

export default ContainerTrending;
