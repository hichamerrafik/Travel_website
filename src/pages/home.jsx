import React from "react";
import "../styles/home.css"
import {Container, Row, Col} from 'reactstrap';
import homeimg1 from '../assets/images/homeimg1.jpg';
import homevid1 from '../assets/images/homevid1.mp4';
import homeimg3 from '../assets/images/homeimg3.jpg';
import experienceImg from '../assets/images/experience.png'
import Subtitle from "../shared/Subtitle";
import Worldimg from "../assets/images/world.png"
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";
const Home = () => {
    return (
<><section>
    {/*========= hero section start ========*/}
    <Container>
        <Row>
            <Col lg='6'>
            <div className="hero__content">
                <div className="hero__subtitle d-flex align-item-center"> <Subtitle Subtitle={'Know Befor You Go'}/>
                <img src={Worldimg} alt="" /></div> 
                <h1>Traveling opens the door to creating <span className="highlight">memories</span></h1>
                <p>Explore the world with us! From iconic landmarks to hidden gems, Travel the World offers unforgettable journeys tailored just for you. Discover new cultures, breathtaking landscapes, and create memories that last a lifetime. Let's make your travel dreams a reality!</p>
            </div>
            </Col>
            <Col lg="2">
                <div className="hero__img-box">
                    <img src={homeimg1} alt="" />
                </div>
            </Col>
            <Col lg="2">
                <div className="hero__img-box mt-4">
                    <video src={homevid1} alt="" controls />
                </div>
            </Col>
            <Col lg="2">
                <div className="hero__img-box mt-5">
                    <img src={homeimg3} alt="" />
                </div>
            </Col>
            <SearchBar/>
        </Row>
    </Container>
</section>
    {/*========= hero section end ========*/}
    <section>
        <Container>
            <Row>
                <Col lg='3'>
                    <h5 className="services__subtitle"> What we serve </h5>
                    <h2 className="services__title">We offer our best services</h2>
                </Col>
                <ServiceList/>
            </Row>
        </Container>
    </section>
    {/*========== featured tour section start==========*/}
        <section>
            <Container>
                <Row>
                    <Col lg='12' className="mb-5">
                        <Subtitle Subtitle={'Explore'}/>
                        <h2 className="featured__tour-title"> Our featured tours</h2>
                    </Col>
                    <FeaturedTourList/>
                </Row>
            </Container>
        </section>
    {/*========== featured tour section end==========*/}
    {/*========== experience section start==========*/}

        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="experience__content">
                            <Subtitle Subtitle={'Experience'}/>
                            <h2>With our all experiences <br/> we will serve you </h2>
                            <p>Explore a world of unforgettable moments. Our expertise ensures exceptional service, guiding you through unique experiences that create lasting memories. Let us craft your perfect journey, tailored to exceed your expectations.</p>
                        </div>
                        <div className="counter__wrapper d-flex align-items-center gap-5">
                            <div className="counter__box">
                                <span>12k+</span>
                                <h6>Successful trip</h6>
                            </div>
                            <div className="counter__box">
                                <span>2k</span>
                                <h6>Regular clients</h6>
                            </div>
                            <div className="counter__box">
                                <span>15</span>
                                <h6>Years experience</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="experience__img">
                            <img src={experienceImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>




    {/*========== experience section end==========*/}
    {/*========== gallery section start==========*/}

<section>
    <Container>
        <Row>
            <Col lg='12'>
            <Subtitle Subtitle={'Gallery'}/>
                <h2 className="gallery__title">
                    Visit our customers tour gallery
                </h2>
            </Col>
            <Col lg='12'>
            <MasonryImagesGallery/>
            </Col>
        </Row>
    </Container>
</section>




    {/*========== gallery section end==========*/}
    {/*========== testimonial section start==========*/}
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <Subtitle Subtitle={'Fans love'}/>
                        <h2 className="testimonial__title">What our fans say about us </h2>
                    </Col>
                    <Col lg="12">
                    <Testimonials/>
                    </Col>
                </Row>
            </Container>
        </section>
    {/*========== testimonial section end==========*/}
    <Newsletter/>
</>
    )
}; 
export default Home ;