import React from 'react'
import "./home.css"
import { Col, Container, Row } from 'reactstrap'

function Appoinment() {
  
  return (
   <section className='appoinment'>
    <Container fluid>
        <Row className='p-5'>
            <Col lg="4">
                <div className='social-card'>
                <i class="ri-whatsapp-fill"></i>
                <span>Doubts? WhatsApp Us</span>
                <span>Whatever queries you want to add for it you can add here and get it.</span>
                <button>Get Free Legal Advice</button>
                </div>
            </Col>
            <Col lg="4">
            <div  className='social-card'>
            <i class="ri-phone-fill"></i>
                <span>Doubts? WhatsApp Us</span>
                <span>Whatever queries you want to add for it you can add here and get it.</span>
                <button>Get Free Legal Advice</button>
                </div>
            </Col>
            <Col lg="4">
            <div  className='social-card'>
            <i class="ri-briefcase-fill"></i>
                <span>Doubts? WhatsApp Us</span>
                <span>Whatever queries you want to add for it you can add here and get it.</span>
                <button>Get Free Legal Advice</button>
                </div>
            </Col>
        </Row>
    </Container>
    <div className='services-lane'>
        <Container>
        <Row className='pt-3 pb-3'>
            <Col lg="3">Buy IP's</Col>
            <Col lg="3">View IP’s for Sale</Col>
            <Col lg="3">Become a IP seller</Col>
            <Col lg="3">Register for Being Agent</Col>
        </Row>
        </Container>
    </div>
   </section>
  )
}

export default Appoinment