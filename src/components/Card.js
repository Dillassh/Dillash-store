import "./Card.css";

function Card(props) {
	return (
		// <div className='container-card'>

		<div className='card mx-3 '>
			<img src={props.img} className='card-img-top mx-auto my-2' />
			<div className='card-body'>
				<h3 className='card-title'>{props.title}</h3>
				<div>
					<p className='price'>{props.price} $</p>
					<div className='footer-card'>
						<p className='card-text'>{props.category}</p>
						<button className='btn btn-dark'>Add to Wishlist!</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
