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
                            spans a diverse range of technologies, enabling me to build cohesive, robust applications that exceed user expectations and drive business success. 
                        </p>
                        <a href='https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=bfed26da6c&attid=0.1&permmsgid=msg-a:r804026620861235266&th=190a066b01bca8eb&view=att&disp=inline&realattid=f_lygv94q90&saddbat=ANGjdJ9nF_gmgxNlVxQr9c4tydHIJP7YB5-RTJAGp53r4R8o4XOXZ7_9FheRrhG6z_WfijjJ-KnrJLk7L9J31rrgZEyuHkiEzRhGO0DjkNrJpFhYJ_UzZNKoGQXEKCaeCKseMWeikW6ZTXODV03JY2wicXMe6Zj1KaeV76qLC-NY5t1G43l4CFq7FvAy7Qg_4un_mRJpVQEqwILWs4iJujBl88lTtObEgOMutD8nqJo6cRo1W8no92mOMxfqhIcnFwlMKC22Vbblxovm3R352hu3Jl_UAqEeUztwLWRy1S0PszmrdO_eKB7Hb5MQ301JPMwXM-wVHJeU2h17l0icth8mrEWBFlto-DJ1-PPwyb7-IU7jFyHq0ClbXxig2o_QByccQggXxWIvm-ExHmb2KwVvTnFcGgB19Ad0VzkAY2lZSMjf-L735A1mYA2_rk8-BVbCAw--i8QBEOREJ55qeDPTcIz2GTAS0qRoRjY5KC1f57lqLytC1nNKHVZ60V7GT_1gXvyebPP0GX0JJEXo9RGJdMPbpM6mDZKt01ddbyq6dDVvT8iyf24DarT25Vdp6paOzR3CRPv8CT4HZOw9-5qApZFJ9Bvvvrwx_ILIEFDZyj9JJmxDQhgsjNMbPEBNc3dTU2gYHgtLCEWjvr_Wva8az7rpM9xJQZ1SBtsFBYCWiRLuUA4YPktS-qy6InQGJ74KuFNszQ59ZtKsl4ra96gIwtDebfdgn9570dAU28dWSgjC_auf5zabrpVQejqMelQvSHmet_ShdQCSrmG18kl3YgYPUtbkOD-axgpmsxvOcUhZY8F88Rlv0UhdMGjxMYqeOEHFsiz5c3SEeBTMX9EN-WZ6bTVxYx0wekrShajllyRovRGvYCxa0T5GZbMAMajrQCqthmb9hIQCefO_k1iyAcIOPpJQYR2Q_sexKbFrg4jZdtLY7uY9MU1T-fd1YWlfYmAfCaT5LJoHR-4PfAoVYNENvVQnzE8MiCYIPHOuWGXVmWG7IaoM3ve_fBA'
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