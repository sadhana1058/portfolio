import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { BsArrowRightCircle } from 'react-icons/bs';

// import {ArrowRightCircle  } from 'react-bootstrap-icons';
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';
import { useInView } from "react-intersection-observer";

export const Banner: React.FC = () => {
    const [loopNum, setLoopNum] = useState<number>(0);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const [text, setText] = useState<string>('');
    const [delta, setDelta] = useState<number>(300 - Math.random() * 100);
    const [index, setIndex] = useState<number>(1);
    
  const toRotate : string[] = [ "Full Stack Developer", "AI Engineer", "Software Engineer" ];
  const period = 2000;

  // NEW: Intersection observer hooks
  const { ref: leftRef, inView: leftVisible } = useInView({ triggerOnce: true });
  const { ref: rightRef, inView: rightVisible } = useInView({ triggerOnce: true });


  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            {/* <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Judy`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <BsArrowRightCircle  size={25} /></button>
              </div>}
            </TrackVisibility> */}
            <div 
              ref={leftRef}
              className={leftVisible ? "animate__animated animate__fadeIn" : ""}
            >
              <span className="tagline">Welcome to my Portfolio</span>

              <h1>
                {`Hi! I'm Sadhana ,`}
                <span className="txt-rotate">
                  <span className="wrap">{text}</span>
                </span>
              </h1>

              <p>A masters student at University at Buffalo explorng new things like agents,MCP...</p>

              <button onClick={() => console.log('connect')}>
                Let’s Connect <BsArrowRightCircle size={25} />
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            {/* <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility> */}
            <div
              ref={rightRef}
              className={rightVisible ? "animate__animated animate__zoomIn" : ""}
            >
              <img src={headerImg} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}