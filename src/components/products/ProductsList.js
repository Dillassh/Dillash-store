import React, { useEffect, useState } from "react";
import Loading from "../../common/Loading";
import Card from "../../common/Card";
import "./ProductList.css";
import { addToWishlist } from "../../helpers";
import { Button } from "reactstrap";

const ProductList = () => {
	const [data, setData] = useState([]);
	const [filter, setFilter] = useState(null);

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
	};
	let counterSize = 6;
	const ShowProducts = ({ products }) => {
		const [q, setQ] = useState("");
		const [postCounter, setPostCounter] = useState(counterSize);

		const searchText = (e) => {
			setQ(e.target.value);
		};

		const dataSearch = data.filter((item) => {
			return Object.keys(item).some((key) =>
				item[key].toString().toLowerCase().includes(q.toString().toLowerCase())
			);
		});

		return (
			<>
				<div className='container-fluid '>
					<div className='row mt-5 '>
						<div className='col-md-3'>
							<input
								className='w-100 mb-4'
								type='text'
								value={q}
								onChange={searchText.bind(this)}
							/>
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
								<Button
									className='mx-auto mb-5 mt-5 '
									style={{ width: "200px" }}
									onClick={() => {
										setPostCounter(postCounter + counterSize);
									}}>
									Show more!
								</Button>
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
