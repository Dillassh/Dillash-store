import "./Card.css";

function Card(props) {
	return (
		<div className='container-card'>
			<img src={props.img} />
			<h3>{props.title}</h3>
			<div className='price_wishlist'>
				<p>{props.price} $</p>
				<p>{props.category}</p>
				<button>Add to Wishlist!</button>
			</div>
		</div>
	);
}

export default Card;
