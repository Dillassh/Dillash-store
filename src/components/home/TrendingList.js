import "./TrendingList.css";
import Card from "../../common/Card";
import { addToWishlist } from "../../helpers";

function TrendingList({ trendings }) {
	return (
		<div className='trending_cards'>
			{trendings.map((trending, index) => {
				return (
					<div className='card_trending mx-2 mb-2' key={"trending_" + index}>
						<Card
							img={trending.image}
							title={trending.title}
							price={trending.price}
							addToWish={() => {
								addToWishlist(trending);
							}}></Card>
					</div>
				);
			})}
		</div>
	);
}

export default TrendingList;
