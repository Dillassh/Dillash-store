import "./Home.css";

import CarouselComp from "../components/home/CarouselComp";
import ContainerTrending from "../components/home/ContainerTrending";

function Home() {
	return (
		<div className='container'>
			<CarouselComp />
			<h3>Trending Products</h3>
			<ContainerTrending />
		</div>
	);
}

export default Home;
