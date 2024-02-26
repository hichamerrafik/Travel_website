import React, {useState} from 'react'
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button} from 'reactstrap'
const Booking = ({tour, avgRating}) => {

    const {price, reviews} = tour

    const handleChange = e =>{



    };

  return (<div className="booking">
        <div className="booking__top d-flex align-items-center justify-content-between">
            <h3>${price} <span>/per person</span></h3>
            <span className='tour__rating d-flex align-items-center gap-1'>
                <i class="ri-star-line" style={{color: "var(--secondary-color)"}}></i>{avgRating === 0 ? null : avgRating}({reviews?.length})
            </span>
        </div>
        {/* ======== Booking form ======= */}
            <div className="booking__form">
                <h5>Information</h5>
                <Form className='booking__info-form'>
                    <FormGroup>
                        <input type="text" placeholder='Full Name' id='fullName' required on onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <input type="number" placeholder='Phone' id='phone' required on onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup className='d-flex align-items-center gap-3'>
                        <input type="date" placeholder='' id='bookAt' required on onChange={handleChange}/>
                        <input type="number" placeholder='Guest' id='guestSize' required on onChange={handleChange}/>

                    </FormGroup>

                </Form>
            </div>
        {/* ======== Booking end ======= */}

        {/* ======== Booking Bottom ======= */}
        <div className="booking__bottom">
            <ListGroup>
            <ListGroupItem className='border-0 px-0'>
                    <h5 className='d-flex align-items-center gap-1'>${price}<i class="ri-close-fill"></i> 1 person</h5>
                    <span> ${price}</span>
                </ListGroupItem>
                <ListGroupItem className='border-0 px-0'>
                    <h5>Service charge</h5>
                    <span> $10</span>
                </ListGroupItem>
                <ListGroupItem className='border-0 px-0 total'>
                    <h5>Total</h5>
                    <span>$109</span>
                </ListGroupItem>
            </ListGroup>
            <Button className='btn primary__btn w-100 mt-4'> Book now</Button>
        </div>
        
  </div>
  )
}

export default Booking