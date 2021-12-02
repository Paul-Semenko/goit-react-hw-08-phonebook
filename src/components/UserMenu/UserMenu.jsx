import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import { logOut } from '../../redux/auth/auth-operations';

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);
    // const avatar = defaultAvatar;

    return (
        <div>
            <img src="" alt="" />
            <span>Welcome, {name}</span>
            <button type="button" onClick={()=>dispatch(logOut)}>Log out</button>
    </div>
)
    
};
