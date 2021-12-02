import { useState } from "react";
import { useDispatch } from "react-redux";
import { register} from '../redux/auth/auth-operations';


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
        dispatch(register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <h1>Registration</h1>
            <form onSubmit={handleSubmit}
                autoComplete="off">
                <label>Name
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange} />
                </label>
                <label>Email
                    <input
                        type="email"
                        name="name"
                        value={email}
                        onChange={handleChange} />
                </label>
                <label>Password
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange} />
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    )

    
};
