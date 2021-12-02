import { useState } from "react";
import { useDispatch} from 'react-redux';
import { logIn } from '../redux/auth/auth-operations';


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
        dispatch(logIn({ email, password }));
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit} autoCorrect="off">
                <label >Email
                    <input type="email"
                        name="email"
                        value={email}
                        onChange={handleChange} />
                </label>
                <label >Password
                    <input type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

