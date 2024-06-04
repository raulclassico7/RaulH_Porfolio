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
                        <p> I am a Full Stack Engineer driven to create innovative and immersive applications. My focus is crafting responsive, user-centric 
                            web designs, full-featured mobile apps and desktop applications. The attention to detail I implement into my work delivers an exceptional UI/UX. 
                            I optimize both frontend and backend code to ensure high performance through components and scalability in SQL or NoSQL databases. My expertise 
                            spans a diverse range of technologies, enabling me to build cohesive, robust applications that exceed user expectations and drive business success. 
                        </p>
                        <a href='https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=bfed26da6c&attid=0.1&permmsgid=msg-a:r5130085593718019871&th=18fe245ccfc381cb&view=att&disp=inline&realattid=f_lx043v600&saddbat=ANGjdJ8NE7naJU7cFMaYQq3Lauja8nfVxXM94jPkSORkbXAdUc_RETP4Rp4sVrD-RSDfkFvhk-mmPkNT8aetueFnH9JxLWd3GiIysg5qnAWeMbwjbS5DyYPQ3BEibsa9khdmzHX9E5mHxg5GL-i4xpYqoXNvs17G4wEuPjnQY7spZATrsNMAi18TNa7B2s7XNU1mB3jH73r7gSHAPX7b6G9dxwE4dyAyCDDix4q6Ke5gEBXvbSLgxV4bv8y4DIhDPzdngeH_dhzUbW98dxCatLMuPBFIDKpRYgFy9uvxSWZeTmtQbCjK3mgKUecW97MMT9n7WEbHG_QKp380XAini-NjDzJ0B8-ljkhLXJyl3Ek9pEpeQHNp9ps1uhYbibneoaSuVDRQiAr8quKVrtx2xL8opbMlbQtGsXU_-P5zbTEjTvEXYg7djpqYE8gnVHSphfaZgYpH_gQncJCU9sbLUImsvDyFBI0x0KJvihpDHhI1MvFETYcKA3TF_qEEUpa9aOdmUDXAQ5upz6EsRLzGCDD9Ak636KiKWPaBCiOrFEMtuYhnP93JYmt68iFjOqw1J3nSsTghV4-6VT6gqMvElz0sJ81irrQOVC30ARHt49G1sGh6g5AUB5XAJCPi011N90vIgdIH7B40wGtxT511nxUfcIDPaU1I-Ls7deDBGU2lC4b9WnmG9QWeVi3GDPyVP7aKa3ilNmo7Q8qf5LWEavcjvbdLREYj8FmhZeEO8kk3PZNVMVaL7Q7HC3XECnaG0EznxHffbjLlU_3zvH6po6Qe-zPEZyueb-gl5fFWLGHy5BOALMGCb54ubA8WKAH43LWRPh7rGHNRyk9XnSmVt9MjPf7ReuOjcNxpX4CgmwSBMUmXYj42h9TRWo62oVNrUw04M0hdU6J1K1lNVvdC-1aOvT7LlBYXP1exMrB8ZXe2hzusAWrSYFnBa3fjw1tnCkSJc250xEnKGaqx56Z8skD_IAMKi26AvIZYVcjO1C0rcMQ5rfsfG5tgR8QaD3RF2mx3XDsecV-WI_R430Mj'
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