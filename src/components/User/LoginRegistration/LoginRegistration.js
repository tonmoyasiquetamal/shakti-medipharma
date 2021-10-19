import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

/*<-----Login & Registration are Both Here With Google-----> */
const LoginRegistration = () => {
    const { signInUsingGoogle, signInUsingEmailPassword, registerNewUser } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    /*<-----Handling Data Target For Show Value In Console-----> */
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleNamedChanged = e => {
        setDisplayName(e.target.value);
    }

    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }

/*<-----Handling Login & Registration For Set Error Warn Atleast 6 Char.-----> */
    const handleLoginRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.');
            return;
        }

        /*<-----Password Strength are added-----> */
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Password must contains a Upper case latter')
            return;
        }

        /*<-----Optional Chainning Use for Sign in User Email & 
        Register if Allready Registered-----> */
        isLogin ? signInUsingEmailPassword(email, password) : registerNewUser(email, password);

    }

    return (
        <div>

            {/* Form Are Include For User With OnSubmit & OnBlur */}
            <form onSubmit={handleLoginRegistration} className='w-25 border mx-auto m-5 p-5 rounded'>

                {/* Conditional Rendering Optional Chaining */}
                <h3 className='text-primary'>Please {isLogin ? 'Login' : 'Register'}</h3>
                {!isLogin && <div className="row mb-3">
                    <label htmlFor="displayName" className="col-sm-2 col-form-label">Name: </label>
                    <input onBlur={handleNamedChanged} type="text" className="form-control" id="displayName" placeholder="Enter Your Name" />
                </div>}
                <br />
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email: </label>
                    <div onBlur={handleEmailChange} className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <br />
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Pass: </label>
                    <div onBlur={handlePasswordChange} className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Already Registered?
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-1 text-danger">
                    {error}
                </div>
                {/* Conditional Rendering Optional Chaining */}
                <button type="submit" className="btn btn-primary">{isLogin ? 'Login' : 'Register'}</button>
            </form>

            <div className="text-center mb-2 text-muted">-----Instead Using By Google Authentication -----</div>
            <div className="text-center mb-5 ">
                
                <button onClick={signInUsingGoogle} className="btn btn-success">Google Sign In</button>
            </div>

        </div>
    );
};

export default LoginRegistration;