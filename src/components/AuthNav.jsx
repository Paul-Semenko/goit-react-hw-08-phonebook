import { NavLink } from 'react-router-dom';
import style from '../components/UserMenu/style.module.css'
export default function AuthNav() {
    return (
        <div className={style.container}>
            <NavLink to="/register" className={style.authlink} >Get Started</NavLink>
            <NavLink to='/login' className={style.authlink}>Log in</NavLink>
        </div>
    )
}