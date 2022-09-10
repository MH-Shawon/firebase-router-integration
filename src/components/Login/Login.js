import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {

    const { signInWithGoogle } = useFirebase();

    return (

        <div>
            <h2>
                Please Login
            </h2>
            <div style={{ margin: '16px' }}>
                <button onClick={signInWithGoogle}>Google Sign In</button>
            </div>
            <input type="email" placeholder='Your email' />
            <br />
            <input type="password" name="" id="" placeholder='Your password' />
            <br />
            <input type="submit" value="Login" />
        </div>
    );
};

export default Login;