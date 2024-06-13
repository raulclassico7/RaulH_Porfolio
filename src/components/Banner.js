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
                        <a href='https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=bfed26da6c&attid=0.1&permmsgid=msg-a:r367852063906153814&th=1900f82649391f71&view=att&disp=inline&realattid=f_lxcnyvsd0&saddbat=ANGjdJ8-JpR38AXT8EqXDDk0XhpiAtKJp8DkWNvYjbXa_yI7Ny8NjKHYGeMkvpnMzrm5B__gMqdaquZ5z6DJSo9xikc72TO5iaBGTesZ3adrYYNwjCXGnU4RZZN55X4mJ3UvNiLW8wi3hsrXlTAtPFTHEpeCChTUuseqaA3B8zyQLM4RABpA8TMTatzAHusCWcJTmQkGsQ57W7A9Id90OwJRjhs6Kq_07HjQH-oTLV8hT1Gbn37bBWdqI_rmkzmcKFAwYXKceNyV_rzR4Whn-CGZVcJ84iINXkDcc07Ffy9Yzs0lhEiImg9HlYzlNsUO6ndjHZdkYHl6oxOxuwHBt4NL_ejI6BOMMimkZGREF1H9IVTTQK1HOUeksgA8Y38dejh_b474PAPmJhDTpMOenmZhWx7_CItAIC9v6s6Bhw_WAaCZUnvDOIVqSmCwnbQJt4SXZUDoPzeu1cgVtW0FjsAJIUQrFETDJFxSjq490Gkdz66zZtafrNmRxcYASpQ9wa04D0oC954jwNSsWnkV6d8h4grblkmr9XPWFBcoNcdGtUzHod93lhHHu6WqaGjkI30Xy6t6wwZT7ULOd7hFqoPcIwLGd3VhQupgtsnO0jE-_pOkw5q2lwyb1u-6AnDtV8h3QozR44g2-t2CyQ8YHq3z-fwpledSfPs_6rPxTkyv_VV9BF2zAh9qm275cG3DCKQqLiAZLLInyOW6B4NX6gZoJOjMlxGk6j0JdptCjOuUTkQnfqZeT6wlFMAFqBYB-art2zaSo5d5ZBxqssCQgDS7_bT3rt3k4004Ue10-Sq16pVrnagvvFtu-jTZXTjNbWYKEr9ddiGgu6skC5qlrA3hyY_lBXI2yP4I5fRG45TsgywBkNry1yj8nJsO9Y2Ek4IMgiBi3xugXC8UvLaQfsIbmy1ZYdz89NmlRpxU1iqZik5DmRzLk5ptNdatMFYsy-1UjNdMDcEP1QBy_v1Go0bThbndPhKLPf-Pnon9Q1RAR684K8oiviiHnVaKOZPB4z-LO6m1BbOfOq0t7xwa'
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