import { Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'




export const ProjectCard = ({ title, description, imgUrl }) => {

    return (
        <Col sm={4} md={6}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt='project Img'></img>
                <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
                    <div>
                        <a href="https://www.reactype.dev/" target="_blank" rel='noopener noreferrer'><button className="project-link" onClick={() => console.log('connect')}>View Project<ArrowRightCircle size={20} /></button></a>
                    </div>
                </div>
            </div>
        </Col>
    )
}