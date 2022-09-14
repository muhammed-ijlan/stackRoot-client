import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css"

function Header() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <img src="https://www.stackroots.in/img/stacklogox.png" alt="logo" />
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">Company</a>
                <a href="/#">Product</a>
                <a href="/#">Services</a>

                <div className="navAuthBtn">
                    <button className="">SignIn</button>
                    <button className="">SignUp</button>
                </div>

                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Header;