import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function NavBar() {
    const [navActive, setNavActive] = useState(false); /* tracks whether nav menu is open or not open */

    const toggleNav = () => {
        setNavActive(!navActive); /* toggles nav active state when icon is clicked */
    };

    const closeMenu = () => {
        setNavActive(false); /* closes menu/sets to false when menu item is clicked or if screen size is changed */
    };

    useEffect(() => { /* closes menu when screen width is smaller than 500px */
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu();
            }
        };
        window.addEventListener("resize", handleResize); /* adds resize listener */

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu();
        }
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
                <h1>Alex Li</h1>
                <h4>Full Stack Software Engineer</h4>
            </div>
            <a
                className={`nav__hamburger ${navActive ? "active" : ""}`}
                onClick={toggleNav}
            >
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link /* other menu items */
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="heroSection"
                            className="navbar--content"
                        >
                            Home
                        </Link>
                    </li>
                    {/* <li>
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="MyPortfolio"
                            className="navbar--content"
                        >
                            Portfolio
                        </Link>
                    </li> */}
                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="mySkills"
                            className="navbar--content"
                        >
                            Qualifications
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="testimonial"
                            className="navbar--content"
                        >
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="Projects"
                            className="navbar--content"
                        >
                            Projects
                        </Link>
                    </li>
                </ul>
            </div>
            <Link /* contact button */
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="btn btn-outline-primary"
            >
                Contact Me
            </Link>
        </nav>
    );
}

export default NavBar;
