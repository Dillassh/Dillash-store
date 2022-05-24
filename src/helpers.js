export const addToWishlist = (product) => {
	console.log(product);
	const productsListStorage = localStorage.getItem("productList");
	// console.log(productsListStorage);

	if (productsListStorage === null) {
		const productList = [];
		productList.push(product);
		localStorage.setItem("productList", JSON.stringify(productList));
	} else {
		const storageArray = JSON.parse(productsListStorage);
		if (
			!storageArray.find((productStorage) => {
				return productStorage.id === product.id;
			})
		) {
			storageArray.push(product);
			localStorage.setItem("productList", JSON.stringify(storageArray));
		}
	}
};
