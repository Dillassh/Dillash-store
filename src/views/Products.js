import BotomNav from "../common/bottomNav";
import ProductList from "../components/products/ProductsList";
import "./Products.css";

function Products() {
	return (
		<>
			<div className='products_container'>
				<ProductList />
			</div>

			<BotomNav />
		</>
	);
}

export default Products;
