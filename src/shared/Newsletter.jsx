import React from 'react'
import './newsletter.css'
import { Container, Row, Col } from 'reactstrap'
import maletourist from '../assets/images/male-tourist.png'


const Newsletter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsletter__content ">
                        <h2>Subcribe now to get useful traveling information </h2>
                        <div className="newsletter__input">
                            <input type="mail" placeholder='Enter your email' />
                            <button className='btn newsletter__btn'>Subscribe</button>
                        </div>
                        <p>Join our community for exclusive travel tips, insider insights, and special offers. Subscribe now and embark on your next adventure armed with valuable information.</p>
                    </div>
                </Col>
                <Col lg='6'> 
                <div className="newsletter__img ">
                    <img src={maletourist} alt="" />
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Newsletter