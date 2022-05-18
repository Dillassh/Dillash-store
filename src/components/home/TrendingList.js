import "./TrendingList.css";
import Card from "../Card";

function TrendingList({ trendings }) {
	return (
		<div>
			{trendings.map((trending, index) => {
				return (
					<Card
						key={"trending_" + index}
						img={trending.image}
						title={trending.title}
						price={trending.price}></Card>
				);
			})}
		</div>
	);
}

export default TrendingList;
