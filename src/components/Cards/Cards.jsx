import React from 'react'
import"./Cards.scss"
import Apartment from "./Apartment/Apartment"
import {  NavLink } from 'react-router-dom'
function Cards() {
  return (
    <div className='grid'>
      <NavLink to="/Cards"><Apartment /></NavLink>
      <NavLink to="/Cards"><Apartment /></NavLink>
      <NavLink to="/Cards"><Apartment /></NavLink>
      <NavLink to="/Cards"><Apartment /></NavLink>
      <NavLink to="/Cards"><Apartment /></NavLink>
      <NavLink to="/Cards"><Apartment /></NavLink>
    </div>
  )
}

export default Cards
