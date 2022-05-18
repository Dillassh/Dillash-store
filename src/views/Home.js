import "./Home.css";

import CarouselComp from "../components/home/CarouselComp";
import ContainerTrending from "../components/home/ContainerTrending";

function Home() {
	return (
		<div className='container'>
			<CarouselComp />
			<div className='trending_title'>
				<h1>Categories</h1>
			</div>
			<div className='trending_title'>
				<h1>Trending Products</h1>
			</div>
			<div className='row mt-5 justify-content-center'>
				<div className='col-lg-4'>
					<ContainerTrending />
				</div>
			</div>
		</div>
	);
}

export default Home;
