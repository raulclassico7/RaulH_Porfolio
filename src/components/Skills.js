import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import skillsLogo from '../assets/img/skills-logos-outline-PhotoRoom.png'
import colorSharp from '../assets/img/color-sharp.png';
import reactLogo from '../assets/img/React-logo-edit-PhotoRoom.png';
import tsLogo from '../assets/img/TypeScript-logo.png';
import nodeLogo from '../assets/img/Node-js-logo.png';
import expressLogo from '../assets/img/express-logo-3-PhotoRoom.png';
import cLogo from '../assets/img/c-sharp-logo-2-PhotoRoom.png';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>Tech Skills</h2>
                            <p> TypeScript, React, React Hooks, Redux, Node.js, Express, RESTful API, SQL,  NoSQL, MongoDB, Webpack, Electron, Git,  Jest, Supertest, bcrypt, OOP, HTML5, CSS/SCSS, SASS.
                                Experienced: HighCharts, Websockets, AWS, C#, Bootstrap, Enzyme, Mocha, React Native
                            </p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={reactLogo} alt='skill-logo' className='react-logo'></img>
                                    <h5>React & React Native</h5>
                                </div>
                                <div className='item'>
                                    <img src={skillsLogo} alt='skill-logo'></img>
                                    <h5>HTML/JavaScript/CSS</h5>
                                </div>
                                <div className='item'>
                                    <img src={tsLogo} alt='skill-logo' className='ts-logo'></img>
                                    <h5>TypeScript</h5>
                                </div>
                                <div className='item'>
                                    <img src={nodeLogo} alt='skill-logo' className='node-logo'></img>
                                    <h5>Node.JS</h5>
                                </div>
                                <div className='item'>
                                    <img src={expressLogo} alt='skill-logo' className='express-logo'></img>
                                    <h5>Express.JS</h5>
                                </div>
                                <div className='item'>
                                    <img src={cLogo} alt='skill-logo' className='c-logo'></img>
                                    <h5>C#</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} alt='bg-img-left'/>
        </section>
    )
}