import "./WishList.css";
import wish from "../components/wishlist/wish.png";
import { Button } from "reactstrap";

function WishList() {
	return (
		<div className='wishlist_container'>
			<img src={wish} />

			<table className='col-md-9'>
				<tr>
					<td>1</td>
					<td>img</td>
					<td>product name</td>
					<td>
						<Button outline>DELETE</Button>
					</td>
				</tr>
				<tr>
					<td>2</td>
					<td>img</td>
					<td>product name</td>
					<td>
						<Button outline>DELETE</Button>
					</td>
				</tr>
			</table>
		</div>
	);
}

export default WishList;
