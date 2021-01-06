import React from 'react'
import { NavLink, Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" href="#">maeseProperties</Link>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink exact activeClassName="active" to="/venta" className="nav-link" >Venta</NavLink>
                        <NavLink exact activeClassName="active" to="/arriendo" className="nav-link" >Arriendo</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}
