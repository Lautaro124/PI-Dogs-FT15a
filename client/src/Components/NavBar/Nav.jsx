import React from "react"
import { NavLink } from 'react-router-dom';
import SearchBar from '../NavBar/SearchBar'
export default function Nav() {
    return (
        <div>
            <NavLink>Home</NavLink>
            <NavLink>Add</NavLink>
            <SearchBar/>
        </div>
    )
}