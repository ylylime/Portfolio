import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import './navbar.css';

import Routes from "./Routes";

import PersonalData from "../../Data/PersonalData";

const Navbar = () => {

    const menuRef = useRef();
    const dispatch = useDispatch();
    const activeNavRoute = useLocation();
    
    const [isDropDownVisible, setIsDropDownVisible] = useState(false);
    function handleDropDown() {
        setIsDropDownVisible((prevState) => !prevState);
    }

    useEffect(() => {
        handleDropDown();
        menuRef.current.checked = false;
    }, [activeNavRoute])

    return (
        <div className="main">
            <div className="navbar" >
                <div className="logoContainer">
                    <div id="logo">
                        {PersonalData.firstName}&nbsp;&nbsp;{PersonalData.lastName}
                    </div>
                </div>
                <div className="navsContainer">
                    <Routes />
                </div>
                <div className="selectTheme">
                    <input type="checkbox" onClick={handleDropDown} ref={menuRef} id="burger-toggle" />
                    <label htmlFor="burger-toggle" className="burger-menu">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </label>
                </div>
            </div>
            {isDropDownVisible && <div className="mob-nav" >
                <Routes />
            </div>}
        </div>
    )
}

export default Navbar;