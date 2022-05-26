import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "reactstrap";
import "./WishList.css";
import wish from "../components/wishlist/wish.png";
import Footer from "../common/Footer";

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
			<img src={wish} alt='wish_bg' className='bg_wishlist' />

			<Container className='wishlist_container'>
				<Row>
					{products.map((product) => {
						return (
							<div className='table_row' key={"product_wishlist_" + product.id}>
								<img className='img_wish mx-2' src={product.image} alt='img' />
								<h3 className='mx-2'>{product.title}</h3>
								<Button
									onClick={() => {
										onDelete(product.id);
									}}
									className='btn_wish'
									color='danger'>
									Delete
								</Button>
							</div>
						);
					})}
				</Row>
			</Container>

			<Footer className='footer_wish' />
		</>
	);
}

export default WishList;
