import "./TrendingList.css";
import Card from "../Card";

function TrendingList({ categories }) {
	return (
		<div className='list_container'>
			<div className='card_list'>
				{categories.map((trending, index) => {
					return (
						<Card
							key={"trending_" + index}
							img={trending.image}
							title={trending.title}
							price={trending.price}></Card>
					);
				})}
			</div>
		</div>
	);
}

export default TrendingList;
