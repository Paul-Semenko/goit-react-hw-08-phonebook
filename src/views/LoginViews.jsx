import { useState } from "react";
import { useDispatch} from 'react-redux';
import { toast } from "react-toastify";
import { logIn } from '../redux/auth/auth-operations';
import style from '../components/UserMenu/style.module.css';


export default function LoginView() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleChange = ({target:{name, value}}) => {
        switch (name) {
            case 'email': setEmail(value);
                break;
            case 'password': setPassword(value);
                break;
            
            default: return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (email.trim() === '' || password.trim() === ''){
            toast.info('Please, fill in all the fields correctly!')
            return
        }
        dispatch(logIn({ email, password }));
        setEmail('');
        setPassword('');
    };

    return (
        <div className={style.registerWrap}>
            <h1 className={style.registerTitle}>Login</h1>
            <p className={style.registerText}>online phone-book</p>

            
            <form onSubmit={handleSubmit}
                autoCorrect="off"
            className={style.registerForm}>
                <label className={style.registerLabel}>Email
                    <input className={style.registerInput}
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange} />
                </label>
                <label className={style.registerLabel}>Password
                    <input className={style.registerInput}
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit" className={style.registerButton}>Login</button>
            </form>
        </div>
    );
}

