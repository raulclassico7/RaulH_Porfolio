import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import logo from '../assets/img/Damazo Logo-PhotoRoom.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-icon5-PhotoRoom.png';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [showToggle, setShowToggle] = useState(false); // Toggle button visibility

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
        setShowToggle(true); // Show toggle button when scrolled down
      } else {
        setScrolled(false);
        setShowToggle(false); // Hide toggle button when at the top
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateLink = (linkStr) => {
    setActiveLink(linkStr);
  };

  return (
    <Router>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} className="logo-nav" alt="Logo" />
          </Navbar.Brand>
          
          {/* Conditionally render Navbar.Toggle */}
          {showToggle && (
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-navbar-toggle">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
          )}

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/raul-hernan-damazo-chang/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn Icon" /></a>
                <a href="https://github.com/raulclassico7" target="_blank" rel="noopener noreferrer"><img className="git-icon" src={navIcon2} alt="Github Icon" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd" onClick={() => console.log('connect')}>
                  <span>Let's Connect!</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
