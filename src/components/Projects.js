import { Col, Container, Row, Nav, TabContainer, TabContent, TabPane } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard'; 
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg3 from '../assets/img/thirdReactImg.png';
import projImg4 from '../assets/img/fourthReactImg.png';
import projImg1 from '../assets/img/firstReactype1Img.png';
import projImg2 from '../assets/img/secondReactImg.png';
import projImg5 from '../assets/img/SJ-Landing.png';
import projImg6 from '../assets/img/SJ-Services.png';
import projImg7 from '../assets/img/SJ-About.png';
import projImg8 from '../assets/img/SJ-Appointment.png';
import projImg9 from '../assets/img/Doka-ScreenShot-Img1.png';
import projImg10 from '../assets/img/Doka-ScreenShot-Img3.png';
import projImg11 from '../assets/img/Doka-ScreenShot-Img4.png';
import projImg12 from '../assets/img/Doka-ScreenShot-Img2.png';



export const Projects = () => {
    const reacTypeProjects = [
      {
        title: "React Prototyping Tool",
        description: "Allows users to visualize their application architecture dynamically in real time",
        imgUrl: projImg1,
        project: "Reactype",
      },
      {
        title: "Component Tree",
        description: "Review your component tree structure to keep track of parent and child components",
        imgUrl: projImg2,
        project: "Reactype",
      },
      {
        title: "Live Code Preview",
        description: "See your code preview update in real time as you build your application and export code",
        imgUrl: projImg3,
        project: "Reactype",
      },
      {
        title: "State Management",
        description: "React Hooks are enabled to handle your state across components",
        imgUrl: projImg4,
        project: "Reactype",
      }
    ]

    const dokaAiProjects = [
        {
            title: "Ai Chatbot & File Access ",
            description: "Allows users to ask any questions about their stores files and get quick answers",
            imgUrl: projImg9,
            project: "Doka",
          },
          {
            title: "File Preview Mode",
            description: "Doka will provide the page number and highlight the information where it go the answer",
            imgUrl: projImg10,
            project: "Doka",
          },
          {
            title: "Chat With Your Images",
            description: "Upload your image, then ask Doka any creative questions about your image",
            imgUrl: projImg11,
            project: "Doka",
          },
          {
            title: "Youtube Video Upload",
            description: "Upload a youtube link, Doka will find the information you need and provide time-stamps",
            imgUrl: projImg12,
            project: "Doka",
          }
    ]

    const sanJuanProjects = [
        {
            title: "Home Page Display",
            description: "Landing page with navbar, Social Media links, calling and setting appointment functionality",
            imgUrl: projImg5,
            project: "SJ",
        },
        {
            title: "Business Services Collection",
            description: "Collection of services the business provides",
            imgUrl: projImg6,
            project: "SJ",
        },
        {
            title: "Business About Section",
            description: "The About Section diplays information about the business and a call button functionality",
            imgUrl: projImg7,
            project: "SJ",
        },
        {
            title: "Set-up Appointment Form",
            description: "Appointment input form to schedule your next visit and contact the business directly",
            imgUrl: projImg8,
            project: "SJ",
        },
    ]

    return (
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>My most up to date contract projects have been designed with a fully functional front-end and back-end using the most up to date technologies. </p>
                    <TabContainer id="project-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                        <Nav.Item>
                            <Nav.Link eventKey="first">ReacType</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Doka Ai</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">San Juan Automotive</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <TabContent>
                        <TabPane eventKey="first">
                            <Row>
                                {
                                    reacTypeProjects.map((project, index) => {
                                        return (
                                            <ProjectCard key={index}{...project}/>
                                        )
                                    })
                                }
                            </Row>
                        </TabPane>
                        <TabPane eventKey="third">
                            <Row>
                                {
                                    sanJuanProjects.map((project, index) => {
                                        return (
                                            <ProjectCard key={index}{...project} />
                                        )
                                    })
                                }
                            </Row>
                        </TabPane>
                        <TabPane eventKey="second">
                            <Row>
                                {
                                    dokaAiProjects.map((project, index) => {
                                        return (
                                            <ProjectCard key={index}{...project}/>
                                        )
                                    })
                                }
                            </Row>
                        </TabPane>
                    </TabContent>
                    </TabContainer>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} alt='second-back-img'/>
        </section>
    )
}