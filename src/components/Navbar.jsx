import React from 'react';
import { Link } from 'react-router-dom';
import { FaAddressBook, FaHeart } from 'react-icons/fa';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">CONTACTOS</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse me-auto" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link btn-icon-nav" to="/"><FaAddressBook className='icon-navbar'/></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn-icon-nav" to="/addcontact"><FaHeart className='icon-navbar'/></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;