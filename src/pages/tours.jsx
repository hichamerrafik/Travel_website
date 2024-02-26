import{useState, useEffect} from 'react'
import React from "react";
import CommonSection from "../shared/commonSection";
import { Container, Row, Col } from "reactstrap";
import '../styles/tour.css'
import Newsletter from '../shared/Newsletter'
import TourCard from "../shared/TourCard";
import SearchBar from '../shared/SearchBar'
import tourData from '../assets/data/tours'

const Tours = () => {
    const [pageCount, setPageCount] = useState(0)
    const[page, setPage] = useState(0)

    useEffect(()=>{
        const pages = Math.ceil(5/ 4) //later we will make it in backend
            setPageCount(pages)
    }, [page])

    return <>
    
    <CommonSection title={'All tours'} />
    <section>
    <Container>
        <Row>
            <SearchBar/>
        </Row>
    </Container>
    </section>
    <section className="pt-0 ">
        <Container>
            <Row>
                {
                    tourData?.map(tour=>( <Col lg='3' className="mb-4" key={tour.id}><TourCard tour={tour}/></Col>))
                }
                <Col lg='12'> <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3"> 
                {[...Array(pageCount).keys()].map(number=>(
                    <span key={number} onClick={() => setPage(number)} className={page===number ? 'active__page' : '' }>
                        {number + 1}
                    </span>
                ))}
                </div></Col>
            </Row>
        </Container>
    </section>
    <Newsletter/>
    </>
};
export default Tours ;