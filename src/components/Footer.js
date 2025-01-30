import { Col, Container, Row } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import footerLogo from '../assets/img/Damazo Logo-PhotoRoom.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-icon5-PhotoRoom.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className='align-items-center'>
          <MailchimpForm />
          <Col xs={12} sm={6} className="text-center text-sm-start">
            <img src={footerLogo} alt='logo' />
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/raul-hernan-damazo-chang/">
                <img src={navIcon1} alt="LinkedIn Icon" />
              </a>
              <a href="https://github.com/raulclassico7">
                <img className="git-icon" src={navIcon2} alt="Github Icon" />
              </a>
            </div>
            <p>CopyRight 2022. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};