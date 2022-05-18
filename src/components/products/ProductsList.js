import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import Card from "../Card";

const ProductList = () => {
	const [data, setData] = useState([]);
	const [filter, setFilter] = useState([data]);
	const [loading, setLoading] = useState(false);
	let responseValid = true;

	useEffect(() => {
		const getProducts = async () => {
			setLoading(true);
			const response = await fetch("https://fakestoreapi.com/products");
			if (responseValid) {
				setData(await response.clone().json());
				setFilter(await response.json());
				setLoading(false);
			}
			return () => {
				responseValid = false;
			};
		};
		getProducts();
	}, []);

	const filterProduct = (cat) => {
		const updatedList = data.filter((x) => x.category === cat);
		setFilter(updatedList);
	};

	const ShowProducts = () => {
		return (
			<>
				<div className='container-fluid '>
					<div className='row mt-5'>
						<div className='col-md-3 mt-5  '>
							<button
								className='btn btn-outline-dark w-100 mb-4'
								onClick={() => setFilter(data)}>
								All
							</button>
							<button
								className='btn btn-outline-dark w-100 mb-4'
								onClick={() => filterProduct("men's clothing")}>
								Men's clothing
							</button>
							<button
								className='btn btn-outline-dark w-100 mb-4'
								onClick={() => filterProduct("women's clothing")}>
								Women's clothing
							</button>
							<button
								className='btn btn-outline-dark w-100 mb-4'
								onClick={() => filterProduct("electronics")}>
								Electronics
							</button>
							<button
								className='btn btn-outline-dark w-100 mb-4'
								onClick={() => filterProduct("jewelery")}>
								Jewelery
							</button>
						</div>
						<div className='col-md-9'>
							<div className='row'>
								{filter.map((product, index) => {
									return (
										<>
											<div className='col-md-4 mb-4'>
												<Card
													key={"product_" + index}
													img={product.image}
													category={product.category}
													title={product.title}
													price={product.price}></Card>
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

	return <div className='mt-5'>{loading ? <Loading /> : <ShowProducts />}</div>;
};

export default ProductList;
