import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu/UserMenu';
import AuthNav from './AuthNav';
import { getIsLoggedIn } from '../redux/auth/auth-selectors';
import style from '../components/UserMenu/style.module.css'

export default function AppBar() {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        <header className={style.header}>
            <Navigation />
            {isLoggedIn?<UserMenu /> : <AuthNav />}          
            
        </header>
    );
    
};
