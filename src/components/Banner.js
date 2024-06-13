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
                        <a href='https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=bfed26da6c&attid=0.1&permmsgid=msg-a:r-6106778826629663151&th=1900ddfad2d2a0a8&view=att&disp=inline&realattid=f_lxc7mqa60&saddbat=ANGjdJ_aJpRe-GKLY7of9im6TzPxbCypeXHEVlJCxaWhrlWXPOrusYPdbDrIPcIOw63hh98hpZW_vt5n-a8IztVzvXOnMfIuF60FrbRFOpIsH7eCELxi-MRKkuahz6MiiCCSIqD8t2sswd1n1iTrxswT4_HND3LMMBtT9n7Zhr94MXeOmqXAGXYfS63q6tFpFc9TQ9a6npSR1OP4VWonIotDGnxqlzX9N_w-md8lz3R_0EXTQ8cfn5hJ0yYE_ixJFpQhrIG7YIy7Fr9NPCafBAJ_5k_Vl0tA8Y63_aKwsQPUGDGZbNIVsw-Gbk5pISqyTti4qsaF7gWYZreM8qITFEiEmst605k5ghVdcdAh1NTtH4JfQ0lcDHpaBe_jDLelCVVFpqtipVvXxNXBaWU6yVTttruvMUyEsSWJtzu1IcmM33Nms8_O7xVmVTRB7OV1OTcShSIo-weWncLsGyc6h0BpmObhl0VbwnbjJGhemArApMAtcDGRSNxqnhFZHRT8Yy4ZiCcA8wCvEE4c-Itc5hdFlWRHuuDmqdhJnkqIU_tPuG683ukO-ZnXBn5s3xiYJRSk3AZ08l61wISPnMBqbIaC3wF7n8gjX886eykX_g-KF6YR_wO9DgJFg9TGuWZco5SuMxwS5zMJgi4O3zSpTrQNX9nNvGGucK8IsvAqBp4CRRHFsO3gXO6nzYl9hJ0h8l7-TXvQw3SCDKvMFkKVba7Tso-PfWr54MPFCs2ZdvDJIMJ2smbdNQ8HLUSjEhsF8ylvi0nhvc5Fo0BmdqGHrwFmlFPKlbo78pu6Pc-G6IrJmIRb79g4ZxCewjsgd6rGIGWQUK4m7iVpVixNLKvACfw_d-SUUJXfRqBpP-tqJZ0_DAkOWnRNc8al6mACN1K2IDsaUIwCtu_JBfyDdkgq-R1Vg4-FKmi1s_MmNrcBCqAwrGBrg8bP0ddjwuAR7UE1x8lcraCZsXwPnIQT7b4aRlt6GGVugTVdtEheBMXBbgK5cWV6kAcSt7I-tcD4IxA4_y36J15zSFS1tBYrbKwh'
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