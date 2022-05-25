import logoDilla from "./logoD.PNG";
import "./NavBar.css";

function NavBar() {
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
				Wishlist<span className='pill badge badge-pill bg-danger '>0</span>
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
