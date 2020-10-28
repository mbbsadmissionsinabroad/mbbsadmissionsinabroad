import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./Slider-animation.css";
import "./Slide.css";

const content = [
  {
    title: "Study MBBS In Abroad",
    description:
      "Select Different Universities in Various countries around the World",
    link: "https://www.mbbsadmissionsinabroad.com/",
    image: "/assets/images/slider-image/study-mbbs-in-abroad.png",
    button:"Apply Now"
  },
  {
    title: "Study MBBS In Russia",
    description:
      "Join the Top Universities at Russia and fullfill your dream with us",
    link: "https://www.mbbsadmissionsinabroad.com/",
    image: "/assets/images/slider-image/russia.png",
    button: "Apply Now"
  },
  {
    title: "Study MBBS In Ukraine",
    description:
      "Join the Top Universities at Ukraine and fullfill your dream with us",
    button: "Apply now",
    link: "https://www.mbbsadmissionsinabroad.com/",
    image: "/assets/images/slider-image/ukraine.png"
  },
  {
    title: "Study MBBS In Georgia",
    description:
      "Join the Top Universities at Georgia and fullfill your dream with us",
    button: "Apply now",
    link: "https://www.mbbsadmissionsinabroad.com/",
    image: "/assets/images/slider-image/georgia.png"
  }

];

const Slide = () => (
  <div>
    <Slider className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat` }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button><a href={item.link}>{item.button}</a></button>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

export default Slide
