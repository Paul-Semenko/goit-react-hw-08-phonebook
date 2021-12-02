import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsLoggedIn } from '../redux/auth/auth-selectors';

const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <nav>
            <NavLink to='/' exact>Home</NavLink>

            {isLoggedIn && (<NavLink to="/contacts" exact>Phonebook</NavLink>)}
            
        </nav>
    );
}

export default Navigation;