import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {

    return (
        <>
            <footer className="page-footer pt-4">
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <NavLink to="https://mdbootstrap.com/"> MDBootstrap.com</NavLink>
                </div>
            </footer>
        </>
    );
};

export default Footer;