import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Card from "../components/Card";

const Products = () => {
	const [data, setData] = useState([]);
	const [filter, setFilter] = useState([data]);
	const [loading, setLoading] = useState(false);
	let componentMounted = true;

	useEffect(() => {
		const getProducts = async () => {
			setLoading(true);
			const response = await fetch("https://fakestoreapi.com/products");
			if (componentMounted) {
				setData(await response.clone().json());
				setFilter(await response.json());
				setLoading(false);
			}
			return () => {
				componentMounted = false;
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
				<div className='buttons'>
					<button
						className='btn btn-outline-dark me-2'
						onClick={() => setFilter(data)}>
						All
					</button>
					<button
						className='btn btn-outline-dark me-2'
						onClick={() => filterProduct("men's clothing")}>
						Men's clothing
					</button>
					<button
						className='btn btn-outline-dark me-2'
						onClick={() => filterProduct("women's clothing")}>
						Women's clothing
					</button>
					<button
						className='btn btn-outline-dark me-2'
						onClick={() => filterProduct("electronics")}>
						Electronics
					</button>
					<button
						className='btn btn-outline-dark me-2'
						onClick={() => filterProduct("jewelery")}>
						Jewelery
					</button>
				</div>
				{filter.map((product, index) => {
					return (
						<>
							<Card
								key={"product_" + index}
								img={product.image}
								category={product.category}
								title={product.title}
								price={product.price}></Card>
						</>
					);
				})}
			</>
		);
	};

	return (
		<div>
			<div className='container'>
				<div className='row'>
					<div className='col-12 mb-5'>
						<h1 className='display-6 fw-bolder text-center'>latest products</h1>
					</div>
				</div>
				<div className='row justify-content-center'>
					{loading ? <Loading /> : <ShowProducts />}
				</div>
			</div>
		</div>
	);
};

export default Products;
