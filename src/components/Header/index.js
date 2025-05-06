import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BsHouse, BsPersonCircle, BsCollection, BsClipboard2Data, BsBack } from "react-icons/bs";

function Header() {

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between">

                        <ul class="nav col-12 mx-auto justify-content-center mb-md-0 p-1">
                            <NavLink to="/" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}><BsHouse size={16} />  Home</NavLink>
                            <NavLink to="/about" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}><BsPersonCircle size={16} /> About</NavLink>
                            <NavLink to="/work" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}><BsCollection size={16} /> Work</NavLink>
                            <NavLink to="/skills" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}><BsClipboard2Data size={16} /> Skills</NavLink>
                            <NavLink to="/gallery" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}><BsBack size={16} /> Gallery</NavLink>
                        </ul>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header