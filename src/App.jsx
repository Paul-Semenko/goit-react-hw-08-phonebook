
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import AppBar from './components/AppBar';
import { fetchCurrentUser } from './redux/auth/auth-operations';
import { getIsRefreshing } from './redux/auth/auth-selectors';
import HomePage from './views/HomeViews';
import ContactsPage from './views/Contacts';
import RegisterPage from './views/RegisterView';
import LoginPage from './views/LoginViews';


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
        <Routes>
          <Route path="/" element={<PublicRoute component={HomePage} />}
          />
          <Route path="/register"   element={<PublicRoute  restricted component={RegisterPage} />}
          />
          <Route path="/login"  element={<PublicRoute redirectTo="/contacts" restricted component={LoginPage} />}
          />
          <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={ContactsPage} />}
          />
        </Routes>
        <ToastContainer autoClose={3000} />
      </div>)
    
    );

  
}


