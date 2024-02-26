import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import Home from '../pages/home';
import Tours from '../pages/tours';
import ToursDetails from '../pages/ToursDetails';
import Login from '../pages/Login';
import Register from '../pages/register';
import SearchResultList from "../pages/SearchResultList";
const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/Home' />} />
            <Route path='/home' element={<Home/>} />
            <Route path='/tour' element={<Tours/>} />
            <Route path='/tour/:id' element={<ToursDetails/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/tour/search' element={<SearchResultList/>} />
        </Routes>
    );
};
export default Routers ;