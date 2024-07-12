import React, { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import { motion } from "framer-motion";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import { Container, Row } from "reactstrap";

const navLinks = [
    {
        path: "/home",
        display: "Inicio"
    },
    {
        path: "/shop",
        display: "Tienda"
    },
    {
        path: "/cart",
        display: "Carrito"
    }
];

const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const [menuActive, setMenuActive] = useState(false);

    const stickyHeaderFunc = () => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add("sticky__header");
            } else {
                headerRef.current.classList.remove("sticky__header");
            }
        });
    };

    useEffect(() => {
        stickyHeaderFunc();
        return () => window.removeEventListener("scroll", stickyHeaderFunc);
    }, []);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const closeMenu = () => {
        setMenuActive(false);
    };

    useEffect(() => {
        if (menuRef.current) {
            if (menuActive) {
                menuRef.current.style.display = "flex";
            } else {
                menuRef.current.style.display = "none";
            }
        }
    }, [menuActive]);

    return (
        <header className="header" ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav__wrapper">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                            <h1>WorkSpace</h1>
                        </div>
                        {/* Navigation visible on mobile */}
                        <div className="navigation" ref={menuRef}>
                            <span className="close__menu" onClick={closeMenu}>
                                <i className="ri-close-line"></i>
                            </span>
                            <ul className={`menu ${menuActive ? 'active__menu' : ''}`}>
                                {navLinks.map((item, index) => (
                                    <li className="nav__item" key={index}>
                                        <NavLink
                                            exact
                                            to={item.path}
                                            activeClassName="nav__active"
                                            className="nav__link"
                                        >
                                            {item.display}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Icons section */}
                        <div className="nav__icons">
                            <span className="fav__icon">
                                <i className="ri-heart-3-line"></i>
                                <span className="badge">1</span>
                            </span>
                            <span className="cart__icon">
                                <i className="ri-shopping-bag-line"></i>
                                <span className="badge">1</span>
                            </span>
                            <span onClick={toggleMenu}>
                                <motion.img whileTap={{ scale: 1.5 }} src={userIcon} alt="ícono de usuario" />
                            </span>
                            {/* Mobile menu toggle */}
                            <div className="mobile__menu" onClick={toggleMenu}>
                                <span>
                                    <i className="ri-menu-line"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
