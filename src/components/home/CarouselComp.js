import hairDry from "./hairdry.PNG";
import lamp from "./lamp.PNG";
import boombox from "./boombox.PNG";
import "./CarouselComp.css";
import { Carousel } from "react-bootstrap";

function CarouselComp() {
	return (
		<>
			<div className='carousel'>
				<Carousel id='carousel' style={{ marginTop: -95 }}>
					<Carousel.Item>
						<img className='d-block w-100' src={hairDry} alt='First slide' />
						<Carousel.Caption id='carousel-content'>
							<h1>
								High beam <br /> by Tom Chung
							</h1>
							<p>
								High beam is an adjustable desk or shelf light that offers a
								wide variety of lighting possibilities
							</p>
							<a href='./products'>DISCOVER MORE</a>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block w-100' src={lamp} alt='Second slide' />

						<Carousel.Caption id='carousel-content'>
							<h1>
								Handmade <br /> Hand carved coffee
							</h1>
							<p>
								As rich and unique as the coffee beans it is intended for, this
								little scoop will make yur morning ritual a specil occasionevery
								day.
							</p>

							<a href='./products'>DISCOVER MORE</a>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block w-100' src={boombox} alt='Third slide' />

						<Carousel.Caption id='carousel-content'>
							<h1>
								Think different and <br /> Do otherwise
							</h1>
							<p>
								Praesent commodo cursus magna, vel scelerisque nisl consectetur.
							</p>
							<a href='./products'>DISCOVER MORE</a>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		</>
	);
}

export default CarouselComp;
