import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./LogoCarousal.css"; // We'll create this



// Dummy icons for now
import { FaReact, FaFigma, FaNodeJs ,

  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaDatabase,
} from "react-icons/fa";

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 6 },
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
        <FaHtml5 size={80} color="#E34F26" />
        <h5>HTML</h5>
      </div>

      <div className="logo-item">
        <FaCss3Alt size={80} color="#1572B6" />
        <h5>CSS</h5>
      </div>

      <div className="logo-item">
        <FaJs size={80} color="#F7DF1E" />
        <h5>JavaScript</h5>
      </div>

      <div className="logo-item">
        <FaReact size={80} color="#61DAFB" />
        <h5>React</h5>
      </div>

      <div className="logo-item">
        <FaNodeJs size={80} color="#68A063" />
        <h5>Node.js</h5>
      </div>

      <div className="logo-item">
        <FaPython size={80} color="#3776AB" />
        <h5>Python</h5>
      </div>

      <div className="logo-item">
        <FaJava size={80} color="#ED8B00" />
        <h5>Java</h5>
      </div>

      <div className="logo-item">
        <FaDatabase size={80} color="#4479A1" />
        <h5>SQL</h5>
      </div>

      <div className="logo-item">
        <FaGitAlt size={80} color="#F05032" />
        <h5>Git</h5>
      </div>

      <div className="logo-item">
        <FaGithub size={80} color="#FFFFFF" />
        <h5>GitHub</h5>
      </div>

      <div className="logo-item">
        <FaBootstrap size={80} color="#7952B3" />
        <h5>Bootstrap</h5>
      </div>

      <div className="logo-item">
        <FaFigma size={80} color="#F24E1E" />
        <h5>Figma</h5>
      </div>
   
    </Carousel>
  );
};
