import "./TrendingList.css";
import Card from "../Card";

function TrendingList({ trendings }) {
	return (
		<div className='trending_cards'>
			{trendings.map((trending, index) => {
				return (
					<div className='card_trending'>
						<Card
							key={"trending_" + index}
							img={trending.image}
							title={trending.title}
							price={trending.price}></Card>
					</div>
				);
			})}
		</div>
	);
}

export default TrendingList;
