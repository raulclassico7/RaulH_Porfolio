import { Col, Container,Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/Portfolio-New-IMG-Photoroom.png'
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
                        <span className='tagline'>Welcome to my Porfolio!</span>
                        <h1>{`Hi I'm Raul Damazo, `}<span className='wrap'>{text}</span></h1>
                        <p> I am a Full Stack Engineer, passionate in the development of the frontend and backend for all types of applications, but my specialty lies within the frontend.
                            Always taking into consideration responsive web design and attention to detail.
                            As well as assembling code using problem solving skills efficiently and optimizing, to deliver a UI/UX that meets the expectations of its users. 
                        </p>
                        <a href='https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=bfed26da6c&attid=0.1&permmsgid=msg-a:r-7531041397616095382&th=18d9f4756e36cfc4&view=att&disp=inline&realattid=f_lsjgpcll0&saddbat=ANGjdJ-5ZD4vemVLgP-mnVon5FaLhrkhO8ZIa_1bIwQypoumBDAcABABfpHsS5oSYSn5g-xyqGT-vO9250VOv7DHPqZDJ55AjS-dL74BG_KETA56IKteihZJuSoIciwA7coLpSMDU2EgwXxMJorqgq2D5SMbCKPOcjeluEtFpvo5sjK2dkQlN0Xj55ZWbx7jXvbzgekUCaJwkfP0UlL0I-AmVJAsUnCciCN-1GF667yBCr1uY6YvTK2K6PYtJzMR-tgNa8tXVCizKBAcVeHQKoZwMRs7pc_fvjNLPkaVdpYfRPzyXwif9Aox5lvCsBo_Dx1_UdiOXP_wiYfOcORiu2-R94dGJSoQ4E7iRMJYfcih6oC7wHWfQBzBySmh5kGlCcEYT12i8qdT8hWAQbO1YT1WfM1swFil0ybiQBQuVnlmOQW2LIeXEMW3ZzoGZhSEbJpF1B_cRtssEEHEgntzUVFrWTG0DD20bYYSP68aCPGwNhRFeyXt6J_kL74ner0nBILQwrkqFZiZjIlr7O4KcyirTgsKfkL6gpjcYA1tnKj4BXrkk1Caq0Oa6ZLSRo71K0z69pT8IOxftTuuZgAKWS7UPCY2gQkTqktD1Y6bu2yrL_1N4gJHXXr_9t_Bl82IHxSywcdlC21Kr2WiIAKs0-h500_86fVMNLmbZOfGuDtUxko6x0KbKl-HdRYdRfGVWHIqlfdqycYM8lu-oXfuVepWs43K10g8qUSOI94dnopkxLjTemXw4NvoI3kXTwTFRbR-EDPFUZnpvfX3dHLvvIW7Izx1SEUOKNw39A6PnVemRuD9bc5vZ__bouiKDbJVa_ItvCtHS7ATMop-WeraofhylM5Avwq-7EOLvy6fasug5usE4Jo9-tglJRwMABqbQJ_g5bvpa7AI9iUsyvB73ZBstUtjEGoAnvzoyh3tmA7E2-u3PipGTPAzcdujoW3EXj-F9Aw2hCq6JvS-4RWtmDOnNDDVcsi4whqZr2j4LPkSJ6gO0RhQ0eY-0Lk2MQA'
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