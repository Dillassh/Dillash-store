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
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
							<button>DISCOVER MORE</button>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block w-100' src={lamp} alt='Second slide' />

						<Carousel.Caption id='carousel-content'>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							<button>DISCOVER MORE</button>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block w-100' src={boombox} alt='Third slide' />

						<Carousel.Caption id='carousel-content'>
							<h3>Third slide label</h3>
							<p>
								Praesent commodo cursus magna, vel scelerisque nisl consectetur.
							</p>
							<button>DISCOVER MORE</button>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		</>
	);
}

export default CarouselComp;
