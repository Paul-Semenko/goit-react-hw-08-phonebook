import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsLoggedIn } from '../redux/auth/auth-selectors';
import style from '../components/UserMenu/style.module.css'


const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (        
        <nav>            
            <NavLink to='/' className={(navData)=> navData.isActive ? style.activeLink : style.homelink}>Home</NavLink>
            {isLoggedIn && (<NavLink to="/contacts" className={(navData)=> navData.isActive ? style.activeLink : style.homelink}>Phone-book</NavLink>)}            
        </nav>
    );
}

export default Navigation;