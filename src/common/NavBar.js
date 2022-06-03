import { useEffect, useState } from "react";
import logoDilla from "./logoD.PNG";
import "./NavBar.css";

function NavBar() {
	// use span to display the count of the products in the wishlist
	const [count, setCount] = useState(null);

	// here I use useEffect hook to get the data from the local storage and unstringify it
	// with parseJSON and set the count to the state hook setCount with the length of the array
	useEffect(() => {
		const productsListStorage = localStorage.getItem("productList");
		if (productsListStorage) {
			const productArray = JSON.parse(productsListStorage);
			setCount(productArray.length);
		}
	}, []);

	return (
		<div className='topNav'>
			<div className='left-menu'>
				<a className='menu_links nav_link' href='./'>
					Home{" "}
				</a>
				<a className='menu_links nav_link' href='./products'>
					Products
				</a>
			</div>

			<a className='wish menu_links nav_link' href='./wishlist'>
				Wishlist
				<span className='pill badge badge-pill bg-danger ' id='counter'>
					{count}
				</span>
			</a>

			<div className='logo_positioning'>
				<a href='./'>
					<img src={logoDilla} alt='Logo' />
				</a>
			</div>
		</div>
	);
}

export default NavBar;
