import React from 'react'
import Logo from '../assets/imgs/LOGO header.svg'
import './styles/Header.css'
// import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="Header">
            <img src={Logo} alt="" />
            <div className="NavbarMain">
            <Navbar  expand="md">
                <Navbar.Toggle/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Link to="/align-systems"><span>Inicio</span></Link>
                        {/* <Link to="/services"><span>Servicios</span></Link>
                        <Link to="/about"><span>Acerca de nosotros</span> </Link> */}
                        <Link to="/blog"><span>Blog</span></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        </div>
    )
}

export default Header
