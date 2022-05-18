import logoDilla from "./logo-dillash.png";
import "./NavBar.css";

function NavBar() {
	return (
		<div className='topNav'>
			<div className='left-menu'>
				<a className='nav_link' href='./'>
					Home{" "}
				</a>
				<a className='nav_link' href='./products'>
					Products
				</a>
			</div>
			<a href='./'>
				<img src={logoDilla} alt='Logo' />
			</a>
			<a className='wish nav_link' href='./wishlist'>
				Wishlist(1)
			</a>
		</div>
	);
}

export default NavBar;
