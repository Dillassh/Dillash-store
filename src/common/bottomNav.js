import "./bottomNav.css";
import logoDilla from "./logo-dillash.png";

function BotomNav() {
	return (
		<>
			<div className='footer'>
				<div className='left-footer'>
					<div className='menu-footer'>
						<a href='./'>Home</a>
						<span>-</span>
						<a href='./products'>Products</a>
					</div>
					<p className='brand-registered'> Dillash Store &reg; 2023</p>
				</div>
				<div className='right-footer'>
					<img src={logoDilla} alt='Logo' />
					<img src={logoDilla} alt='Logo' />
					<img src={logoDilla} alt='Logo' />
					<img src={logoDilla} alt='Logo' />
				</div>
			</div>
		</>
	);
}

export default BotomNav;
