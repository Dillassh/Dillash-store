import React, { useEffect, useState } from "react";
import Loading from "../../common/Loading";
import Card from "../../common/Card";
import Search from "./Search";
import "./ProductList.css";
import { addToWishlist } from "../../helpers";
import { Button } from "reactstrap";

const ProductList = () => {
	const [data, setData] = useState([]);
	const [filter, setFilter] = useState(null);
	const [inputValue, setInputValue] = useState("");

	const getProducts = async () => {
		const response = await fetch("https://fakestoreapi.com/products");
		const productsFromAPI = await response.json();
		setData(productsFromAPI);
		setFilter(productsFromAPI);
	};

	useEffect(() => {
		getProducts(setData);
	}, []);

	const filterResult = (catItem) => {
		const result = filter.filter((item) => {
			return item.category === catItem;
		});
		setData(result);
		result.filter(inputValue);
	};

	const onSearch = (input) => {
		setInputValue(input);
	};

	console.log(inputValue);

	const filterByInput = (arrayProducts, value) => {
		if (value === null) return arrayProducts;
		return arrayProducts.filter((products) => {
			return products.title.toLowerCase().includes(value.toLowerCase());
		});
	};

	const ShowProducts = ({ products }) => {
		return (
			<>
				<div className='container-fluid mx-2'>
					<div className='row mt-5 mx-2'>
						<div className='col-md-3'>
							<button
								className='btn btn-dark w-100 mb-4'
								onClick={() => filterResult("men's clothing")}>
								Men
							</button>
							<button
								className='btn btn-dark w-100 mb-4'
								onClick={() => filterResult("women's clothing")}>
								Women's clothing
							</button>
							<button
								className='btn btn-dark w-100 mb-4'
								onClick={() => filterResult("electronics")}>
								Electronics
							</button>
							<button
								className='btn btn-dark w-100 mb-4'
								onClick={() => filterResult("jewelery")}>
								Jewerly
							</button>
							<button className='btn btn-dark w-100 mb-4' onClick={getProducts}>
								All
							</button>
						</div>
						<div className='col-md-9'>
							<div className='row'>
								{data.map((product, index) => {
									return (
										<>
											<div className='col-sm-6 col-md-6 col-lg-4 mb-4'>
												<Card
													key={"product_" + index}
													img={product.image}
													category={product.category}
													title={product.title}
													price={product.price}></Card>
												<button
													onClick={() => {
														addToWishlist(product);
													}}
													className='button_wish btn btn-dark'>
													Add to Wishlist!
												</button>
											</div>
										</>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</>
		);
	};
	return (
		<>
			{/* <Search handleSearch={onSearch} /> */}
			{filter ? <ShowProducts /> : <Loading />}
		</>
	);
};

export default ProductList;
