import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "reactstrap";
import "./WishList.css";

function WishList() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const productsListStorage = localStorage.getItem("productList");
		if (productsListStorage) {
			const productArray = JSON.parse(productsListStorage);
			setProducts(productArray);
		}
	}, []);

	const onDelete = (id) => {
		const filterdArray = products.filter((product) => {
			return product.id !== id;
		});
		setProducts(filterdArray);
		localStorage.setItem("productList", JSON.stringify(filterdArray));
	};

	return (
		<>
			<Container className='wishlist_container'>
				<Row>
					{products.map((product) => {
						return (
							<div className='table_row' key={"product_wishlist_" + product.id}>
								<h3 className='mx-2'>{product.title}</h3>
								<Button
									onClick={() => {
										onDelete(product.id);
									}}
									className='mx-2'
									color='danger'>
									Delete
								</Button>
							</div>
						);
					})}
				</Row>
			</Container>
		</>
	);
}

export default WishList;
