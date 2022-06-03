import React, { useEffect, useState } from "react";
import Loading from "../../common/Loading";
import Card from "../../common/Card";
import "./ProductList.css";
import { addToWishlist } from "../../helpers";
import { Button } from "reactstrap";

const ProductList = () => {
	//take data from the api with a useState hook
	const [data, setData] = useState([]);
	// create a filter to filter the products by the category
	const [filter, setFilter] = useState(null);

	// get products from the api with fetch and useEffect hook
	// use async await to make the api call and set the data to the state hook, this way the function will tell react to run the function asynchronously from the rest of the page
	const getProducts = async () => {
		const response = await fetch("https://fakestoreapi.com/products");
		const productsFromAPI = await response.json();
		//productsFromAPI is an array of objects, so we need to set the data to the state hook
		setData(productsFromAPI);

		setFilter(productsFromAPI);
	};

	useEffect(() => {
		//we set the data to the state hook with the getProducts function
		getProducts(setData);
	}, []);

	// filter the products by category, this will be used in the filter onclick button
	// catItem is a variable that will be used to filter the products
	const filterResult = (catItem) => {
		// result will show the filtered products by category
		const result = filter.filter((item) => {
			return item.category === catItem;
		});
		//result is the filtered products and we set it to the state hook setData
		setData(result);
	};
	// counterSize is a variable that will be used to count the products shown on the page
	let counterSize = 6;

	// I created ShowProducts function to list the products on the page
	const ShowProducts = () => {
		// q is the input value from the search bar which will be used to filter the products, first we set it to null
		const [q, setQ] = useState("");
		// postCounter is a variable that will be used to count the products shown on the page
		const [postCounter, setPostCounter] = useState(counterSize);

		//searchText is a function that will set the input value to the state hook setQ
		const searchText = (e) => {
			setQ(e.target.value);
		};
		// dataSearch is a variable that will be used to filter the products by the input value
		const dataSearch = data.filter((item) => {
			return Object.keys(item).some((key) =>
				item[key].toString().toLowerCase().includes(q.toString().toLowerCase())
			);
		});

		// if the dataSearch is empty, we will show the message "No products found" and add button to clear the input value
		if (dataSearch.length === 0) {
			return (
				<div className='mt-5 no_products'>
					<h1>No products found</h1>
					<Button
						color='secondary'
						className='d-flex justify-content-center mx-auto mt-2 clear_search_btn'
						onClick={() => {
							setQ("");
						}}>
						Back to products
					</Button>
				</div>
			);
		}

		return (
			<>
				<div className='container-fluid '>
					<div className='row mt-5 '>
						<div className='col-md-3'>
							<form>
								<input
									className='w-100 mb-4'
									type='text'
									value={q}
									onChange={searchText.bind(this)}
								/>
							</form>
							<button
								className='btn btn-dark w-100 mb-4'
								onClick={() => filterResult("men's clothing")}>
								Men
							</button>
							<button
								className='btn btn-dark w-100 mb-4'
								onClick={() => filterResult("women's clothing")}>
								Women
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
							{/* the All products button will render again all the products from the API */}
							<button className='btn btn-dark w-100 mb-4' onClick={getProducts}>
								All
							</button>
						</div>
						<div className='col-md-9'>
							<div className='row'>
								{/* here I used slice to set the number of the products visible on the page from 0 to counterSize*/}

								{dataSearch.slice(0, postCounter).map((product, index) => {
									return (
										<>
											<div
												className='card_container col-sm-12 col-md-6 col-lg-4 mb-3 '
												key={"product_" + index}>
												<Card
													img={product.image}
													title={product.title}
													price={product.price}
													addToWish={() => {
														addToWishlist(product);
													}}
												/>
											</div>
										</>
									);
								})}
								<div className='col-md-12 d-flex justify-content-center'>
									<Button
										className='mx-auto mb-5 mt-5 row'
										style={{ width: "200px" }}
										onClick={() => {
											// here I used setPostCounter to set the number of the products visible on the page from 0 to counterSize
											setPostCounter(postCounter + counterSize);
										}}>
										Show more!
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	};
	// to return the component I used an if statement to check if the data is loaded
	return <>{filter ? <ShowProducts /> : <Loading />}</>;
};

export default ProductList;
