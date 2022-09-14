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
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="logo" />
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">Movies</a>
                <a href="/#">Series</a>

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
            {/* <img className="avatar" src="https://i.pinimg.com/736x/db/70/dc/db70dc468af8c93749d1f587d74dcb08.jpg" alt="avatar"></img> */}
        </header>
    );
}

export default Header;