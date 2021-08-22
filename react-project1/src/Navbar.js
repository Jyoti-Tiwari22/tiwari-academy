import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <div className="container-fluid pt-2">
            <div className='row'>
                <div className="col-10 mx-auto">

             

                    <nav className="navbar navbar-expand-lg">
                        <NavLink className="navbar-brand" href="#" to="/">Tiwari Academy</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className=" navbar-toggler-icon"></span>
                        </button>   

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <NavLink activeClassName='menu_active' exact className="nav-link" href="#" to="/">Home <span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName='menu_active' className="nav-link" href="#" to="/service">Service</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName='menu_active' className="nav-link" href="#" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName='menu_active' className="nav-link" href="#" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </>);
};

export default Navbar;



