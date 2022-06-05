import "./Home.css";

import CarouselComp from "../components/home/CarouselComp";
import ContainerTrending from "../components/home/ContainerTrending";
import CategoryCards from "../components/home/CategoryCards";
import Footer from "../common/Footer";

function Home() {
	return (
		<>
			<div className='container'>
				<CarouselComp />
				<div className='trending_title my-5'>
					<h1>Categories</h1>
				</div>
				<CategoryCards />
				<div className='trending_title mt-5'>
					<h1>Trending Products</h1>
				</div>
				<ContainerTrending />
			</div>
			<Footer />
		</>
	);
}

export default Home;
