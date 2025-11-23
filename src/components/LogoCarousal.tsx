import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./LogoCarousal.css"; // We'll create this

// Dummy icons for now
import { FaReact, FaFigma, FaNodeJs } from "react-icons/fa";

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

export const LogoCarousel = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite
      autoPlay
      autoPlaySpeed={2000}
      arrows={false}
      showDots={false}
      keyBoardControl={true}
      customTransition="transform 1s ease" // slow & smooth
      transitionDuration={1000}
      className="logo-carousel"
    >
      <div className="logo-item">
        <FaReact size={80} color="#61DAFB" />
        <h5>React</h5>
      </div>

      <div className="logo-item">
        <FaFigma size={80} color="#F24E1E" />
        <h5>Figma</h5>
      </div>

      <div className="logo-item">
        <FaNodeJs size={80} color="#68A063" />
        <h5>Node.js</h5>
      </div>
    </Carousel>
  );
};
