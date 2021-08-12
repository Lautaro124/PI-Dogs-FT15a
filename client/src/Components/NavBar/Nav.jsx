import React from "react"
import { NavLink } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

export default function Nav() {
    return(
        <div>
            <NavLink exact to= '/'>Home</NavLink>
            <NavLink to='/details'> Details</NavLink>
        </div>
    )
}