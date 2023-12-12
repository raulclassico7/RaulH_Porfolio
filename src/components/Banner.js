import { Col, Container,Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/self-Porfolio.png'
import { useEffect, useState } from 'react';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleted, setIsDeleted] = useState(false);
    const toRotate = ['Web Developer', 'Web Designer', 'UI/UX Perfectionist'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleted ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        
        setText(updatedText);

        if(isDeleted) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if(!isDeleted && fullText === updatedText) {
           setIsDeleted(true);
           setDelta(period);
        } else if(isDeleted && updatedText === '') {
            setIsDeleted(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my Porfolio!</span>
                        <h1>{`Hi I'm Raul Damazo, `}<span className='wrap'>{text}</span></h1>
                        <p> I am a full stack developer, specializing in the development of the frontend of applications implementing React and React Native, 
                            always taking into consideration responsive web design and attention to detail, due to the high variety of devices being used today. 
                            As well as assembling code using problem solving skills efficiently and optimizing, to deliver a UI/UX that meets the expectations of its users. 
                        </p>
                        <button onClick={() => console.log('connect')}>Let's Connect!<ArrowRightCircle size={40} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}