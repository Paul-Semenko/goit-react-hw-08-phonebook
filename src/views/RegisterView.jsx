import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import { register } from '../redux/auth/auth-operations';
import style from '../components/UserMenu/style.module.css';



export default function RegisterView() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default: return;
        }
        
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
            toast.info('Please, fill in all the fields!')
            return
        }
        dispatch(register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    };
    

    return (
        
        <div className={style.registerWrap}>
            <h1 className={style.registerTitle}>Register</h1>
            <p className={style.registerText}>online phone-book</p>
            
            <form onSubmit={handleSubmit}
                autoComplete="off"
                className={style.registerForm}>
                <label className={style.registerLabel}>Name                
                    <input className={style.registerInput}
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange} />
               </label>
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
                        onChange={handleChange} />
                </label>
                <button type="submit" className={style.registerButton}>Register</button>
            </form>
        </div>
    )

    
};
