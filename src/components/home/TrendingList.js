import "./TrendingList.css";
import Card from "../Card";

function CategotyList({ categories }) {
	return (
		<div className='list_container'>
			<div className='card_list'>
				{categories.map((category, index) => {
					return (
						<Card
							key={"category_" + index}
							img={category.image}
							title={category.title}
							price={category.price}></Card>
					);
				})}
			</div>
		</div>
	);
}

export default CategotyList;
