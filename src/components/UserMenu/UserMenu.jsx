import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "../../redux/auth/auth-selectors";
import { logOut } from '../../redux/auth/auth-operations';
import defaultAvatar from "../../img/big-smile.png";
import style from '../../components/UserMenu/style.module.css'

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(getUserName);
    const avatar = defaultAvatar;

    return (
        <div className={style.container}>
            <img src={avatar} alt="" width='40' height="40" className={style.userAvatar }/>
            <span className={style.userMenu}>Welcome, {name}</span>
            <button type="button" onClick={() => dispatch(logOut())} className={style.logOutButton}>Log out</button>
    </div>
)
    
};
