import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome} from '@fortawesome/free-solid-svg-icons'
import '../Navbar.css'

function Navbar() {
    return (
<div>
    <div className='first-navbar w-100'>
        <nav className="w-100 navbar navbar-expand-lg bg-dark p-2 m-0 justify-content-between gap-2" >
            {/* Collapse button  */}
            <button className="navbar-toggler bg-white shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "><FontAwesomeIcon icon={faBars} className="mt-1" /></span>
            </button>

            <div className=" nav-item collapse navbar-collapse" id="navbarNavDropDown">
                <ul className="navbar-nav navbar-collapse justify-content-between p-0" >
                    <div className='d-flex g-5'>
                        <li className='nav-item '>
                            <Link className='nav-link mx-5 text-white' to=""><FontAwesomeIcon icon={faHome} className='fa-lg' /> Home</Link>
                        </li>
                        {/* <li className="nav-item ">
                            <Link className="nav-link mx-1 text-white" to="about">About</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link mx-5 text-white" to="contactus">ContactUs</Link>
                        </li> */}
                    </div>
                    <div className='d-flex g-5'>
                        <li>
                            <Link className='nav-link text-white me-4' to="login">Login / SignUp</Link>
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
    </div>
</div>
    );
}
export default Navbar;