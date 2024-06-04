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
                        <p> I am the Full Stack Engineer you need! My fervent for creating innovative and methodical applications push my drive of crafting responsive, user-centric 
                            web designs, full-featured mobile apps and desktop applications. The attention to detail I deliver for the UI/UX is exceptional. 
                            I optimize both frontend and backend code to ensure high performance through components and scalability in Databases SQL or NoSQL. My expertise 
                            spans a diverse range of technologies, enabling me to build cohesive, robust applications that exceed user expectations and drive business success. 
                        </p>
                        <a href='https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=bfed26da6c&attid=0.1&permmsgid=msg-a:r-8286573009576831483&th=18ea63572fea7ee9&view=att&disp=inline&realattid=f_lukf1etp0&saddbat=ANGjdJ86M1-ZDVLHja2MhVS6MgNCfQgYulceneOB-CiFPRdKOoUfMpvFUkk1DeyIfzPAMfGD_gmE-C94aFms-pZz6Nhc2iNJ5x0lPfQhJvhVTvtE6L7EkzTJbDGKeM-WVOjiqnaUzV4tf5prJYjHXkG8Hx0i48Sm336J_ZPY5AD7A8WRDiQPMOQhyvj2CzrW67cz_pfM0bXpmqIIoYIQ-qj-AcUkwLlZr0XBXP01yKg3Lx47jV72_OYmhLClFFgUli86W0G6DByb5MpJAmxJOQ-j6x9Qz0ZPpxbZQ0PHUVDR2DKxLm_fFaWa6y_H11ufxQ8snmmac2gNthkVNDHKxMVIEy2qJyy6I8iHmgirSCzVgATsSg10Wc8q41bb333rjg4XC2jGHRKBCNXVC8-vuIluf_MpzKZ0L558ijGDDOFrt8rSig1pC6r0o6EL2OivijG6HO2sSb2-2sZCGtBRvhbRCIuD06CJn97gwvpY21z9ElOSscJ6Y-ax8baj3bSWeqGnk_Zs0Q137xws9yHdq0DZGifxViw7whoBdufOjGIwUXloXYxChOp-fb1zCAVFTp68iONPMUyd_6QkEUQxY-srEJR7GTTcEhc7QGQHfGVPV9TeBwAVVtsGEr4s_t2fQFz8_vqCjCfQqonEu0iESg7iES-viEaKWurVfnAjPYSiOYgpTFjpCClkyLpr8YMIDLV6SBxpDTyZRVtYLBG4FLG-eorf8v01g6SQ8k353-GSMWfv0lkj4eRICOrGBZZVjBs-Pc4MUVVTRgxx0Mu2gSRyOZIDUfPQTXExCudKZCvPdrqiOxW9kTWpd-cHT_ne923OAeNf8JkvJloTqGYu1-J7HKmn4QCR5f_uFxKq-NG8WNDU2ige-Xr2zLccOrU57mXuJnrmhbNl0_FutC0lSSI35cuZ-hNFSwNyKb-XbtNGl5F5UI-So8I5pGGwWHIGU1GbtuOfUT5e5jOCsD9bXBK14Csqo5fi3rdI8AM6pVl8XfRidPcZjz5o1J-H-4Nc5JGIQfSL8A1krIazEEzv'
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