import React from "react";
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import Logo from '../../assets/images/logo1.png'
const quick__links=[
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'/about',
        display:'About'
    },
    {
        path:'/tour',
        display:'Tours'
    }
];
const quick__links2=[
    {
        path:'/gallery',
        display:'Gallery'
    },
    {
        path:'/login',
        display:'Login'
    },
    {
        path:'/register',
        display:'Register'
    }
]
const Footer = () => {
    const years = new Date().getFullYear();
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col lg='3'>
                    <div className="logo1">
                        <img src={Logo} className="logo-img1" alt="" />
                    <p>Your gateway to unforgettable journeys! Join us to explore the world's wonders and create lasting memories through exceptional adventures.</p>
                    </div>
                    <div className="social__links d-flex align-items-center gap-4">
                        <span>
                        <Link to='#'>
                        <i class="ri-facebook-circle-fill"></i>
                        </Link>
                    </span>
                    <span>
                        <Link to='#'>
                        <i class="ri-instagram-line"></i> 
                        </Link>
                    </span>
                    <span>
                        <Link to='#'>
                        <i class="ri-linkedin-box-fill"></i>
                        </Link>
                    </span>
                    <span>
                        <Link to='#'>
                        <i class="ri-youtube-fill"></i> 
                        </Link>
                    </span>
                    </div>
                    
                    
                    </Col>
                    <Col lg='3'>
                        <h5 className="footer__link-title"> Discover</h5>
                        <ListGroup className="footer__quick-links">
                            {
                                quick__links.map((item,index) =>(
                                <ListGroupItem key={index} className="ps-0 border-0">
                                    <Link to={item.path}>{item.display}</Link>
                                </ListGroupItem>))
                            }
                        </ListGroup>
                    </Col>
                    <Col lg='3'>
                        <h5 className="footer__link-title"> Quick Links</h5>
                        <ListGroup className="footer__quick-links">
                            {
                                quick__links2.map((item,index) =>(
                                <ListGroupItem key={index} className="ps-0 border-0">
                                    <Link to={item.path}>{item.display}</Link>
                                </ListGroupItem>))
                            }
                        </ListGroup>
                    </Col>
                    <Col lg='3'>
                    <h5 className="footer__link-title">Contact</h5>
                        <ListGroup className="footer__quick-links">
                            
                            <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                                <h6 className="mb-0 d-flex align-items-center gap-2">
                                    <span>
                                    <i class="ri-map-pin-fill"></i> Address:
                                    </span>
                                </h6>
                                <p className="mb-0">Rabat Maroc</p>
                            </ListGroupItem>
                            <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                                <h6 className="mb-0 d-flex align-items-center gap-2">
                                    <span>
                                    <i class="ri-mail-fill"></i> Email:
                                    </span>
                                </h6>
                                <p className="mb-0">Errafikhicham@gmail.com</p>
                            </ListGroupItem>
                            <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                                <h6 className="mb-0 d-flex align-items-center gap-2">
                                    <span>
                                    <i class="ri-phone-fill"></i> Phone:
                                    </span>
                                </h6>
                                <p className="mb-0">+212-604-030-874</p>
                            </ListGroupItem>
                            
                            
                        </ListGroup>
                    </Col>
                    <Col lg="12" className="text-center pt-5">
                        <div className="copyright">Copyright {years}, design and develop by <span>Errafik Hicham</span>. All rights reserved </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};
export default Footer ;