import Card from "./products/Card";
import "./ProductList.css";

function ProductList({ products }) {
	return (
		<div className='list_container'>
			<div className='card_list'>
				{products.map((product, index) => {
					return (
						<Card
							key={"product_" + index}
							img={product.image}
							title={product.title}
							price={product.price}></Card>
					);
				})}
			</div>
		</div>
	);
}

export default ProductList;
