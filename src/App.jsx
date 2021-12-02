import { useEffect, Suspense, lazy} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import AppBar from './components/AppBar';
import { fetchCurrentUser } from './redux/auth/auth-operations';
import { getIsRefreshing } from './redux/auth/auth-selectors';


const HomePage = lazy(()=> import ('./views/HomeViews'))
const ContactsPage = lazy(() => import('./views/Contacts'));
const RegisterPage = lazy(() => import('./views/RegisterView'));
const LoginPage = lazy(() => import('./views/LoginViews'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);
  
  useEffect(() => {

    dispatch(fetchCurrentUser());

  }, [dispatch]);



  return (
  !isRefreshing && (
  <div>
    <AppBar />
    
    <Switch>
      <Suspense fallback={<p>Loading...</p>}>
        <PublicRoute exact path="/">
          <HomePage/>
        </PublicRoute>
        <PublicRoute exact path="/register" restricted>
          <RegisterPage />
        </PublicRoute>
        <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
          <LoginPage />
        </PublicRoute>
        <PrivateRoute path="/contacts" redirectTo="/login">
          <ContactsPage/>
        </PrivateRoute>
       </Suspense>
      </Switch>       
      </div>)
    
    );

  
}


