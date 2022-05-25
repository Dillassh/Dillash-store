import Footer from "../common/Footer";

import ProductList from "../components/products/ProductsList";
import "./Products.css";

function Products() {
	return (
		<>
			<div className='products_container'>
				<ProductList />
			</div>

			<Footer />
		</>
	);
}

export default Products;
