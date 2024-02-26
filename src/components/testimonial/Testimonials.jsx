import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import ava04 from '../../assets/images/ava-4.jpg'

const Testimonials = () => {
    const settings ={
        dots:true,
        Infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow: 3,

        responsive:[
            {
                breakpoint: 992,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll:1,
                    Infinite:true,
                    dots:true,
            },
            },
            {
                breakpoint: 576,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll:1,
                }
            }
        ]

    }
return (
    <Slider {...settings}>
    <div className="testimonial py-4 px-3">
    <p>"I had an incredible experience with this service! The team was highly professional and accommodating, making my trip unforgettable. I'll definitely be back for more adventures!"</p>
    <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
        <div>
            <h6 className='mb-0 mt-3'>Jhon Doe</h6>
            <p>Customer</p>
        </div>
    </div>
    </div>
    <div className="testimonial py-4 px-3">
    <p>"I couldn't have asked for a better travel experience. The attention to detail and personalized care made my journey truly exceptional. Thank you for creating unforgettable memories!"</p>    <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
        <div>
            <h6 className='mb-0 mt-3'>Lia Franklin</h6>
            <p>Customer</p>
        </div>
    </div>
    </div>
    <div className="testimonial py-4 px-3">
    <p>"This service exceeded my expectations! The team went above and beyond to ensure an incredible experience. I highly recommend their expertise."</p>    <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
        <div>
            <h6 className='mb-0 mt-3'>Ali Zabadi</h6>
            <p>Customer</p>
        </div>
    </div>
    </div>
    <div className="testimonial py-4 px-3">
    <p>"I couldn't be happier with the service provided. The attention to detail and personalized care made my journey unforgettable. Thank you for such an amazing experience!"</p>    <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava04} className='w-25 h-25 rounded-2' alt="" />
        <div>
            <h6 className='mb-0 mt-3'>Roberta Hankar</h6>
            <p>Customer</p>
        </div>
    </div>
    </div>
   </Slider>
  )
}

export default Testimonials