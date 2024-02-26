import React from 'react'
import Servicecard from './Servicecard'
import {Col} from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData=[
    {
        imgUrl: weatherImg,
        title: "Calculate weather",
        desc: "Stay informed with accurate, real-time weather forecasts. Get updates on temperature, precipitation, wind speed, and more for better planning.",
    },
    {
        imgUrl: guideImg,
        title: "Best tour guide",
        desc: "Explore with expert guides for personalized journeys and insider perspectives. Uncover hidden gems and dive into local culture.",
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Create a unique journey that matches your preferences. Personalized planning for an unforgettable adventure.",
    },
]

const ServiceList = () => {
return (
    <>
    {
    servicesData.map((item, index)=><Col lg='3' key={index}> <Servicecard item={item}/></Col>)
    }
    </>
)
}

export default ServiceList