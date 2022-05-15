import logoDilla from "./logo-dillash.png";
import "./NavBar.css";

function NavBar() {
	return (
		<div className='topNav'>
			<div className='left-menu'>
				<a href='./'>Home </a>
				<a href='./products'>Products</a>
			</div>
			<a href='./'>
				<img src={logoDilla} alt='Logo' />
			</a>
			<a className='wish' href='./wishlist'>
				Wishlist(1)
			</a>
		</div>
	);
}

export default NavBar;
