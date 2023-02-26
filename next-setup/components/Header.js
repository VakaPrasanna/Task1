import React from "react"
import Navbar from "../components/Navbar"
function Header() {
    // <header> should contain a <nav> element

    // links
    //     Homepage
    //     Cities - Dropdown
    //     About
    //     Contact
    //     Blog
    
    // Make sure the header is fully responsive in mobile device and visually appealing
    return (
        <div>
            <div className="Header">
               <Navbar />
            </div>
        </div>
    )
}
export default Header