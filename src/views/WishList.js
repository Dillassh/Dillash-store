import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "reactstrap";
import "./WishList.css";
import wish from "../components/wishlist/wish.png";
import Footer from "../common/Footer";

function WishList() {
	//take data from the local storage and set it to the state of the component
	const [products, setProducts] = useState([]);

	// here I use useEffect hook to get the data from the local storage and unstringify it with parseJSON
	useEffect(() => {
		const productsListStorage = localStorage.getItem("productList");
		if (productsListStorage) {
			const productArray = JSON.parse(productsListStorage);
			setProducts(productArray);
		}
	}, []);

	// onDelete is a function that will be used to delete the product from the wishlist
	const onDelete = (id) => {
		// here I use filter to filter the products by the id and return the products that are not the id
		const filterdArray = products.filter((product) => {
			return product.id !== id;
		});
		// I set the filterdArray to the state hook setProducts
		setProducts(filterdArray);
		// I set the filterdArray to the local storage with stringify
		localStorage.setItem("productList", JSON.stringify(filterdArray));
	};

	return (
		<>
			<img src={wish} alt='wish_bg' className='bg_wishlist' />
			<h1 className='wishlist_title'>WishList.</h1>

			<Container className='wishlist_container'>
				<Row>
					{products.map((product) => {
						return (
							<div className='table_row' key={"product_wishlist_" + product.id}>
								<img className='img_wish mx-2' src={product.image} alt='img' />
								<h3 className='title_product mx-2'>{product.title}</h3>
								<h3 className='price mx-2'>{product.price} $</h3>
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
