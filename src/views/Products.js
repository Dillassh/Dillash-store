import Categories from "../components/products/Categories";
import ContainerProducts from "../components/products/ContainerProducts";
import "./Products.css";

function Products() {
	return (
		<div className='container_product_page'>
			<Categories />
			<ContainerProducts />
		</div>
	);
}

export default Products;
