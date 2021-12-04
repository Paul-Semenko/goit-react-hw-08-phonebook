import React from "react";
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../redux/auth/auth-selectors';
import style from '../components/UserMenu/style.module.css'

const HomeView = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (<div className={style.homeWrap}>
        <h1 className={style.homeTitle}>Welcome to the Phone-book app!</h1>
        <h2 className={style.homeText}>You would't loose your contacts anymore </h2>
        {!isLoggedIn && (<>
                <span role="img" aria-label="Greeting icon"></span>
                <p className={style.homeText}>Please, fill in the <b>Registration form</b>  or <b>Log in</b> to have an access to the app </p>
                </>
        )
        }
        </div>
    );
};
export default HomeView;
