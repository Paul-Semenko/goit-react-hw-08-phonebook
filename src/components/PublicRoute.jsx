import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { getIsLoggedIn } from '../redux/auth/auth-selectors';

export default function PublicRoute({component:Component, restricted=false }) {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;
    return (
        <>
            {shouldRedirect ? <Navigate to={"/contacts" || "/"}/> : <Component/>}
        </>);
    
}
