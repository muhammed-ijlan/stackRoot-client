import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../../redux/userSlice";

function Header() {
    const dispatch = useDispatch()
    const navRef = useRef();
    const navigate = useNavigate()

    const { currentUser } = useSelector((state) => state.user)

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    const handleLogout = () => {
        dispatch(logout())
        navigate("/signin")

    }

    return (
        <header>
            <img className="logo" src="https://icon-library.com/images/movie-icon-app/movie-icon-app-25.jpg" alt="logo" />
            <h3>Movie Man</h3>
            <nav ref={navRef}>
                <Link to='/' style={{ textDecoration: "none" }}>
                    <p>Home</p>
                </Link>
                {currentUser ?

                    <React.Fragment>
                        <p >Movies</p>
                        <p>Series</p>

                        <div className="navAuthBtn">
                            <button onClick={() => handleLogout()}>Logout</button>
                        </div>
                    </React.Fragment>

                    :
                    <React.Fragment>
                        <div className="navAuthBtn">
                            <Link to="signin">
                                <button>SignIn</button>
                            </Link>
                            <Link to="register">
                                <button >SignUp</button>
                            </Link>
                        </div>

                    </React.Fragment>

                }

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