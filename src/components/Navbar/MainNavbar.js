import React, { useState } from 'react'
import { BiMenu, BiX } from 'react-icons/bi'
import './mainnavbar.css'
export default function MainNavbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <header className="header">
                <div className="logo"><h1>LOGO</h1></div>
                <div className="toggle" onClick={handleClick}>
                    <span>{click ? <BiX /> : <BiMenu />}</span>
                </div>
                <ul className={click ? "menu active" : "menu"}>
                    <li className="menu_items">Home</li>
                    <li className="menu_items">About</li>
                    <li className="menu_items">Contact</li>
                </ul>
            </header>
        </>
    )
}
