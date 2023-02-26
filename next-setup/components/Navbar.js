import React from "react";
const Navbar = () =>{
    return(
        <div className="nav-menu">
            <div className="logo">
                <strong>
                    <a href="">

                    </a>
                </strong>
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <a href="#headernavbar">Header(Navbar)-</a>
                    </li>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#drop-down">Drop-Down</a>
                    </li>
                    <li>
                        <a href="#about">About Us</a>
                    </li>
                    <li>
                        <a href="#termsandconditions">Terms and Conditions</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar
