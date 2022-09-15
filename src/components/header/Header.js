import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <img className="logo" src="https://icon-library.com/images/movie-icon-app/movie-icon-app-25.jpg" alt="logo" />
            <h3>Movie Man</h3>
            <nav ref={navRef}>
                <Link to='/' style={{ textDecoration: "none" }}>
                    <p>Home</p>
                </Link>
                <p >Movies</p>
                <p>Series</p>

                <div className="navAuthBtn">
                    <Link to="signin">
                        <button>SignIn</button>
                    </Link>
                    <Link to="register">
                        <button >SignUp</button>
                    </Link>

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
        </header >
    );
}

export default Header;