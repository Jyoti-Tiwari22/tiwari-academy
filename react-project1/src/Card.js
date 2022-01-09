import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/math.png';
import './index.css'



const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto hero-container">
                <div className="card main-container " >
                    <div className="poster-container">
                        <img src={props.imgsrc} className="card-img-top" alt="{props.imgsrc}" />
                    </div>
                    <div className="card-body ticket-container">
                        <div className="ticket__content">
                            <h5 className="card-title font-weight-bold">{props.title}</h5>
                            <p className="card-text ">{props.text}</p>
                            <NavLink to="#" className="btn-get-started">Go somewhere</NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Card;