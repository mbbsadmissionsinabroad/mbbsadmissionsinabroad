import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./HomeCarousel.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 }
];


function HomeCarousel() {
	return (
		<div className="home__carousel">
			<Carousel breakPoints={breakPoints}>
				<Item>
					<div>
						<img className="home__carousel__img" src="assets/images/testimonials-image/ashish-kumar.jpeg" alt="Ashish Kumar"/>
						<p className="home__carousel__stuname">Ashish Kumar</p>
						<p className="home__carousel__uni">V.N. Karazin Kharkiv National University, Ukraine</p>
						<p className="home__carousel__info">New-Lyf Consultants have given us a beautiful exposure to the Kharkiv National University. I am really enjoying the immaculate ambiance and friendly people here in Ukraine.</p>
					</div>
				</Item>
				<Item>
					<div>
						<img className="home__carousel__img" src="assets/images/testimonials-image/saurav-kumar.jpeg" alt="Saurav Kumar"/>
						<p className="home__carousel__stuname">Saurav Kumar</p>
						<p className="home__carousel__uni">Dnipropetrovsk National University, Ukraine</p>
						<p className="home__carousel__info">I had a dream to become a doctor and study abroad for that..both my dreams are being fulfilled by New-Lyf consultants. They were very helpful and I had no difficulty to reach my destination, I am living my dream here in Ukraine!!!</p>
					</div>
				</Item>
				<Item>
					<div>
						<img className="home__carousel__img" src="assets/images/testimonials-image/kuldeep-kumar.jpeg" alt="Kuldeep Kumar"/>
						<p className="home__carousel__stuname">Kuldeep Kumar</p>
						<p className="home__carousel__uni">Dnipropetrovsk National University, Ukraine</p>
						<p className="home__carousel__info">New-Lyf consultants have given us a whole new exposure to studying abroad, otherwise, in our city we had no clue we can go to study abroad. The best education consultants facilitated everything for us in Ukraine. Thank u so much for your guidance...</p>
					</div>
				</Item>
				<Item>
					<div> 
						<img className="home__carousel__img" src="assets/images/testimonials-image/bambam-chaurasiya.jpeg" alt="Bambam Chaurasiya"/>
						<p className="home__carousel__stuname">Bambam Chaurasiya</p>
						<p className="home__carousel__uni">Dnipropetrovsk National University, Ukraine</p>
						<p className="home__carousel__info">I was not getting admission to my own country to study medicine so I approached New-Lyf consultants. They told me about the universities in Ukraine. I took no time to think again for I wanted to become a doctor.</p>
					</div>
				</Item>
				<Item>
					<div>
						<img className="home__carousel__img" src="assets/images/testimonials-image/nikita-lokande.jpeg" alt="Nikita lokande"/>
						<p className="home__carousel__stuname">Nikita lokande</p>
						<p className="home__carousel__uni">Hebei Medical University, China</p>
						<p className="home__carousel__info">Thanks New-Lyf for helping me in choosing the Hebei Medical University to study Medicine. I feel happy here. I made friends with many other Indian medicos here.</p>
					</div>
				</Item>
				<Item>
					<div>
						<img className="home__carousel__img" src="assets/images/testimonials-image/sarik-khan.jpeg" alt="Sarik Khan"/>
						<p className="home__carousel__stuname">Sarik Khan</p>
						<p className="home__carousel__uni">Yerevan State Medical University, Armenia</p>
						<p className="home__carousel__info">New-Lyf not only guided me for admission but also helped me and my family throughout in visa processing in very minimal time. Their team helped us all the way round in.</p>
					</div>
				</Item>
				<Item>
					<div>
						<img className="home__carousel__img" src="assets/images/testimonials-image/snehil.jpeg" alt="Snehil"/>
						<p className="home__carousel__stuname">Snehil</p>
						<p className="home__carousel__uni">Odessa National Medical University, Ukraine</p>
						<p className="home__carousel__info">Studying in another country was a big concern for me and my parents, but New-Lyf Consultants removed all our doubts by assuring us for safety and explained to us as to how much Ukraine.</p>
					</div>
				</Item>
			</Carousel>
		</div>
	)
}

export default HomeCarousel;
