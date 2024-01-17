import { Col, Container, Row, Nav, TabContainer, TabContent, TabPane } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard'; 
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg3 from '../assets/img/Reactype-webShot1.png';
import projImg4 from '../assets/img/Reactype-webshot2.png';
import projImg1 from '../assets/img/Reactype-webshot3.png';
import projImg2 from '../assets/img/Reactype-webshot4.png';


export const Projects = () => {
    const projects = [
      {
        title: "React Prototyping Tool",
        description: "Allows users to visualize their application architecture dynamically in real time",
        imgUrl: projImg1,
      },
      {
        title: "Component Tree",
        description: "Review your component tree structure to keep track of parent and child components",
        imgUrl: projImg2,
      },
      {
        title: "Live Code Preview",
        description: "See your code preview update in real time as you build your application and export code",
        imgUrl: projImg3,
      },
      {
        title: "State Management",
        description: "React Hooks are enabled to handle your state across components",
        imgUrl: projImg4,
      }
    ]

    return (
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>All of my projects have been designed with a fully functional front-end and back-end.</p>
                    <TabContainer id="project-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                        <Nav.Item>
                            <Nav.Link eventKey="first">ReacType</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Stacked Squad</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">
                                Trivia Game Night
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <TabContent>
                        <TabPane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard key={index}{...project}/>
                                        )
                                    })
                                }
                            </Row>
                        </TabPane>
                        <TabPane eventKey="second">Currently updating the server...</TabPane>
                        <TabPane eventKey="third">Currently updating the server..</TabPane>
                    </TabContent>
                    </TabContainer>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} alt='second-back-img'/>
        </section>
    )
}