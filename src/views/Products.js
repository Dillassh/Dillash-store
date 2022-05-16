import { Row, Col } from "react-bootstrap";
import Categories from "../components/products/Categories";
import ContainerProducts from "../components/products/ContainerProducts";
import "./Products.css";

function Products() {
	return (
		<div className='container_product_page'>
			<Row>
				<Col>
					<Categories />
				</Col>
				<Col>
					<ContainerProducts className='products_container' />
				</Col>
			</Row>
		</div>
	);
}

export default Products;
