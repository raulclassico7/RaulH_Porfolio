import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from '../assets/img/Contact-IMG.png';
import 'animate.css';
import TrackVisibility from "react-on-screen";


export const Contact = () => {
    const initialDetails = {
        firstname: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
    }

    const [ formDetails, setFormDetails ] = useState(initialDetails);
    const [ buttonText, setButtonText ] = useState('Send');
    const [ status, setStatus ] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]:value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        const response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(formDetails)
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(initialDetails);
        if(result.code === 200) {
            setStatus({ success: true, message: 'Message sent succesfully' });
        } else {
            setStatus({ success: false, message: 'Error, try again later' });
        }
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <img className="contact-img" src={contactImg} alt="contact-img"/>
                    </Col>
                    <Col size={12} md={6}>
                        <h2>Contact Me</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col size={12} sm={6} className='px-1'>
                                    <input type='text' value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
                                </Col>
                                <Col size={12} sm={6} className='px-1'>
                                    <input type='text' value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                                </Col>
                                <Col size={12} sm={6} className='px-1'>
                                    <input type='email' value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)}/>
                                </Col>
                                <Col size={12} sm={6} className='px-1'>
                                    <input type='tel' value={formDetails.phoneNumber} placeholder="Phone Number" onChange={(e) => onFormUpdate('phoneNumber', e.target.value)}/>
                                </Col>
                                <Col size={12} className='px-1'>
                                    <textarea rows='6' value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                    <button type='submit'><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message && 
                                    <Col>
                                    <p className={status.success === false ? 'danger' : 'success' }>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}