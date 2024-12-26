import React from 'react'
import { NavLink } from 'react-router-dom'

const Navlink = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <a href='about'>about3</a>
            <br />
            <NavLink to="about">About</NavLink>
            <NavLink to="contact2" >Contact</NavLink>
        </div>
    )
}

export default Navlink