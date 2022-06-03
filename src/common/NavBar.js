import { useEffect, useState } from "react";
import logoDilla from "./logoD.PNG";
import "./NavBar.css";

function NavBar() {
	// use span to display the count of the products in the wishlist
	const [count, setCount] = useState(null);
	// create a function to get the count of the products in the wishlist
	const getCount = () => {
		const productsListStorage = localStorage.getItem("productList");
		if (productsListStorage) {
			const productArray = JSON.parse(productsListStorage);
			setCount(productArray.length);
		}
	};
	// use useEffect hook to get the count of the products in the wishlist
	useEffect(() => {
		getCount();
	}, [count]);

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
