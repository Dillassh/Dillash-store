import { Button } from "reactstrap";
import category1 from "./category1.PNG";
import category2 from "./category2.PNG";
import category3 from "./category3.PNG";
import category4 from "./category4.PNG";
import "./CategoryCards.css";

function CategoryCards() {
	return (
		<div className='category_container'>
			<div className='cards_category'>
				<img alt='cat' src={category1} />
				<div className='cards_text'>
					<h3>Men's clothing</h3>
					<Button href='./products' outline size='sm'>
						DISCOVER MORE
					</Button>
				</div>
			</div>
			<div className='cards_category'>
				<img alt='cat' src={category2} />
				<div className='cards_text'>
					<h3>Women's clothing</h3>
					<Button href='./products' outline size='sm'>
						DISCOVER MORE
					</Button>
				</div>
			</div>
			<div className='cards_category'>
				<img alt='cat' src={category3} />
				<div className='cards_text'>
					<h3>Electronics</h3>
					<Button href='./products' outline size='sm'>
						DISCOVER MORE
					</Button>
				</div>
			</div>
			<div className='cards_category'>
				<img alt='cat' src={category4} />
				<div className='cards_text'>
					<h3>Jewelery</h3>
					<Button href='./products' outline size='sm'>
						DISCOVER MORE
					</Button>
				</div>
			</div>
		</div>
	);
}

export default CategoryCards;
