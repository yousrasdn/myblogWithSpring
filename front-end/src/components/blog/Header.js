import React from 'react'
import {Link} from 'react-router-dom'

const Header = ()=>(
    <div id="blog-header">
        <nav className="navbar navbar-expand-md navbar-light bg-light ">
            <div className="container">
                <Link className="navbar-brand" to="/">YS<span>.</span></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto" id="nav-items">
                <li className="nav-item">
                     
                </li>
               
                 
                </ul>

            </div>
            </div>
        </nav>

    </div>
);

export default Header; 