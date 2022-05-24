import "./Card.css";
import { Button } from "reactstrap";
import { addToWishlist } from "../helpers";

function Card(props) {
	return (
		// <div className='container-card'>

		<div className='card  '>
			<img src={props.img} className='card-img-top mx-auto my-2' />
			<div className='card-body'>
				<h3 className='card-title'>{props.title}</h3>
				<div>
					<p className='price'>{props.price} $</p>
					<div className='footer-card'>
						<p className='card-text'>{props.category}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;