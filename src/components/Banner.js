import { Col, Container,Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/portfolio_pic-Photoroom.png';
import { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router
} from 'react-router-dom';

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
        <Router>
        <section className="banner" id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my Portfolio!</span>
                        <h1>{`Hi I'm Raul Damazo, `}<span className='wrap'>{text}</span></h1>
                        <p> I am a Full Stack Engineer driven to create innovative and immersive applications. My focus is crafting responsive, user-centric 
                            web designs, full-featured mobile apps and desktop applications. The attention to detail I implement into my work delivers an exceptional UI/UX. 
                            I optimize both frontend and backend code to ensure high performance through components and scalability in SQL or NoSQL databases. My expertise 
                            spans a diverse range of technologies, empowering me to develop cohesive, high-performing applications that surpass user expectations and contribute 
                            to business growth. 
                        </p>
                        <a href='https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=bfed26da6c&attid=0.1&permmsgid=msg-a:r2769538363689624060&th=1936a8d6c4bca8da&view=att&disp=inline&realattid=f_m3z0p9oy0&zw&saddbat=ANGjdJ-lv2kSecyo7GN3s7RWI5Us3QNaDHxt3h0qtUsMuAu8ndx4q4M241OLDikeG4mrdOAjmp_L5qPk9nciiD4AETVTUyPSzDBJtwwkK7XF8EHQ1kC1O7wZ0ytsgX57CAz_Z_IrH-RGIpN593hztIZxlZEJf9ik_Z71zEGfbyQWrt1rYn5P_H3yh3yITDdikpvvg-05si78waSQjF6BM_Onk39ekTjZpiU0n3X1Ry2WLjNw3fwu5WVUAnZx22S9DI3EiTRw5vWL2qRa8xDcNsgsdvOA7TDHmLJ4ollRnaW61kJCQ2OiuDqWk4dthJ3yjnuIC7WqcWc78DxQmGQM-rUOWtuHC1ew6zzj1Da9CckJnbiYbikiSsIDFA7TbWR7q1ugtWSklm9rw1xxSp_XVUDD8sDz19TW1KBKHd72VdYDnyQ6vpFH5S79Jiu8tKL3WnywTeyNrKwMnhQoJh5cBlll7tTK6ZbWngY7LhIgvqpe63j2FwjECrogZ5KiC1ceuv7CXpoBPIXwYbRkGU1gUg1tOf2oe8M3qyDSMaSQT624XxBHpZu-SLsK4G8DAAwYbx4zTGnE6DNtV_3KGue7Dt1FwUnnthd1vX4-kx_UmhzUK9_OrV89TmHmLfSc0YOb8ezbZFIgm-OoZR9BBB8XwH9Akn10v9jSBX-SCvVQPQbQDN2zTMbJnMck-DhT0zW6HFUfO7hYT4rfNhN4_BD_HjQYwKCzy0WnnL1gwwSdr4Ou3aC1e7_bCUwybUe9Iy3N6mTkiz0xOqlE26XrzgWVIh7zxUZjfjEmowK7voqkiPec3KSGhHw7OC_IjewqEwqMMpy1i37n1ssmDfqYzuVq4gJCjEwepBQ8DarFXPdAFvbVEQNdYceT839agngQkLQYr_rgTCN2SxUoL0_7VShCBpY-NFMVl0vQih1MvURyv1kJjIIoJ7PD8CxUfDUXm-PqlqJP1ETbxE4tdSRp52fijJ_Wkcb1w25yDkd-YRkE6Oj-Id1AvxUg2j4XqvDp_mtW1uIlAsR6TkIv_ivf1BGM'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button onClick={() => console.log('connect')}>Check out my Resume!<ArrowRightCircle size={40} /></button>
                    </a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
        </Router>
    )
}