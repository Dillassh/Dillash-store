import "./Card.css";
import { Button } from "reactstrap";

function Card(props) {
	return (
		// <div className='container-card'>

		<div className='card  '>
			<img alt='pic2' src={props.img} className='card-img-top mx-auto my-2' />
			<div className='card-body'>
				<h3 className='card-title'>{props.title}</h3>
				<div>
					<p className='price'>{props.price} $</p>
					<div className='footer-card'>
						<p className='card-text'>{props.category}</p>
						<Button onClick={props.addToWish} outline>
							Add to wishlist!
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
