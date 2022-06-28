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

const testimonialsData = [
	{
		"img": "assets/images/testimonials-image/nikita-lokande.jpeg",
		"name": "Nikita lokande",
		"university": "Hebei Medical University, China",
		"info": "Thanks New-Lyf for helping me in choosing the Hebei Medical University to study Medicine. I feel happy here. I made friends with many other Indian medicos here."
	},
	{
		"img": "assets/images/testimonials-image/sarik-khan.jpeg",
		"name": "Sarik Khan",
		"university": "Yerevan State Medical University, Armenia",
		"info": "New-Lyf not only guided me for admission but also helped me and my family throughout in visa processing in very minimal time. Their team helped us all the way round in."
	},
	{
		"img": "assets/images/testimonials-image/Ithiga - Georgia.png",
		"name": "Ithiga",
		"university": "Akaki Tsereteli State University, Georgia",
		"info": "New-Lyf Consultants have given us a beautiful exposure to the Akaki Tsereteli State University. I'm really enjoying the immaculate ambiance and friendly people here in Georgia."
	},
	{
		"img": "assets/images/testimonials-image/Firoz - Georgia.png",
		"name": "Firoz",
		"university": "University of Georgia, Georgia",
		"info": "I had a dream to become a doctor and study abroad for that...both my dreams are being fulfilled by New-Lyf consultants. They were very helpful and I had no difficulty to reach my destination, I'm living my dream here in Georgia!!!"
	},
	{
		"img": "assets/images/testimonials-image/Sam Rohith - Malaysia.png",
		"name": "Sam Rohith",
		"university": "Manipal University, Malaysia",
		"info": "New-Lyf consultants have given us a whole new exposure to studying abroad, otherwise, in our city we had no clue we can go to study abroad. The best education consultants facilitated everything for us in Malaysia. Thank u so much for your guidance..."
	},
	{
		"img": "assets/images/testimonials-image/Sidharth - Malaysia.png",
		"name": "Sidharth",
		"university": "Manipal University, Malaysia",
		"info": "I was not getting admission to my own country to study medicine so I approached New-Lyf consultants. They told me about the Manipal University in Malaysia. I took no time to think again for i wanted to become a doctor."
	},
	{
		"img": "assets/images/testimonials-image/Usha - Nursing.png",
		"name": "Usha",
		"university": "St.Anna Hospital, Germany",
		"info": "My personal experience with New-Lyf has always been positive. They are professional, caring and considerate."
	},
	{
		"img": "assets/images/testimonials-image/Ranjitha - Nursing.png",
		"name": "Ranjitha",
		"university": "St.Martin's Hospital, Germany",
		"info": "Thanks to New-Lyf, I have a fantastic job where I can work hours to suit my busy life. I have enjoyed working in many areas of the aged care and the disability industry. "
	},
	{
		"img": "assets/images/testimonials-image/Dr. Genuka - PG Germany.jpg",
		"name": "Dr. Genuka.",
		"university": "PG Residency in Dusseldorf, Germany",
		"info": "Studying in another country was a big concern for me and my parents, but New-Lyf consultants removed all our doubts by assuring us for safety and explained to us as to how much Germany."
	},
	{
		"img": "assets/images/testimonials-image/Dr. Aaditya - PG Germany.jpg",
		"name": "Dr. Aaditya",
		"university": "PG Residency in Berlin, Germany",
		"info": "Being a single child of my parents, it was really difficult for me to convince my parents to send me abroad. But after having talks with New-Lyf consultants my parents allowed me to study PG Residency in Germany."
	}
]


function HomeCarousel() {
	return (
		<div className="home__carousel">
			<Carousel breakPoints={breakPoints}>
				{
					testimonialsData.map((data, i) => {
						return(
							<Item key={i}>
								<div>
									<img className="home__carousel__img" src={data.img} alt={data.name} />
									<p className="home__carousel__stuname">{data.name}</p>
									<p className="home__carousel__uni">{data.university}</p>
									<p className="home__carousel__info">{data.info}</p>
								</div>
							</Item>
						)
					})
				}
			</Carousel>
		</div>
	)
}

export default HomeCarousel;
