import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/portfolio_pic-Photoroom.png';
import { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleted, setIsDeleted] = useState(false);
  const toRotate = ['Software Engineer', 'Web Developer', 'UI/UX Perfectionist'];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleted ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleted) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleted && fullText === updatedText) {
      setIsDeleted(true);
      setDelta(period);
    } else if (isDeleted && updatedText === '') {
      setIsDeleted(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <Router>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to my Portfolio!</span>
              <h1>
                {`Hi I'm Raul Damazo, `}
                <span className="wrap">{text}</span>
              </h1>
              <p>
                I am a Full Stack Engineer driven to create innovative and immersive applications. My focus is crafting
                responsive, user-centric web designs, full-featured mobile apps, and desktop applications. The attention
                to detail I implement into my work delivers an exceptional UI/UX. I optimize both frontend and backend
                code to ensure high performance through components and scalability in SQL or NoSQL databases. My
                expertise spans a diverse range of technologies, empowering me to develop cohesive, high-performing
                applications that surpass user expectations and contribute to business growth.
              </p>
              <a
                href="https://www.linkedin.com/in/raul-hernan-damazo-chang/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button onClick={() => console.log('connect')}>
                  Check out my Resume! <ArrowRightCircle size={40} />
                </button>
              </a>
            </Col>
            <Col xs={12} md={6} xl={5} className="text-center">
              <img src={headerImg} alt="Header Img" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  );
};