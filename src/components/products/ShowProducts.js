export const ShowProducts = ({ products }) => {
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
												price={product.price}
												onClick={() => addToWishlist(filter)}></Card>
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
