import { getAuth } from 'firebase/auth';
import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import app from '../../firebase.init';

const auth = getAuth(app)

const Login = () => {

    const [signInWithGoogle] =useSignInWithGoogle(auth)

    return (

        <div>
            <h2>
                Please Login
            </h2>
            <div style={{ margin: '16px' }}>
                <button onClick={()=>signInWithGoogle()}>Google Sign In</button>
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