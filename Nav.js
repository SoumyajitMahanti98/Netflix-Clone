import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" src="https://brand.netflix.com/static/assets/icons/netflix_logo.svg" alt="Netflix Logo" />

            <img className="nav__avatar" src="https://pbs.twimg.com/media/DlKNEufWsAAgr2E.jpg" alt="Netflix Logo" />
        </div>
    )
}
export default Nav
