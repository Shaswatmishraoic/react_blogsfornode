import React from 'react'
import Home from './Home';
import Bollywood from './Bollywood';
import Hollywood from './Hollywood';
import Technology from './Technology';
import Fitness from './Fitness';
import Food from './Food';
import { Routes, Route } from 'react-router-dom';


function RouteCompo() {
  return (
    <>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bollywood' element={<Bollywood/>}/>
        <Route path='/technology' element={<Technology/>}/>
        <Route path='/hollywood' element={<Hollywood/>}/>
        <Route path='/fitness' element={<Fitness/>}/>
        <Route path='/food' element={<Food/>}/>
        </Routes>
    </>
  )
}

export default RouteCompo
