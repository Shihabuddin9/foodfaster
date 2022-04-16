import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo2 from '../../images/logo2.png'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [notUserMessage, setNotUserMessage] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()

    const handelEmailBlur = e => {
        setEmail(e.target.value)
    }

    const handelPasswordBlur = e => {
        setPassword(e.target.value)
    }

    if (user) {
        navigate('/')
    }

    const handelUserSummit = e => {
        e.preventDefault()
        if (!user) {
            setNotUserMessage('Please, Sign Up')
            return;
        }
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='w-1/4 mx-auto mt-14'>
            <img style={{ width: '200px', margin: '0 auto' }} src={logo2} alt="" />
            <form onSubmit={handelUserSummit} className='flex-none mt-20 mb-3'>
                <input onBlur={handelEmailBlur} className='w-full bg-slate-200 pl-2 py-2 font-semibold	 rounded text-black' type='email' id='email' placeholder='Email' required />

                <input onBlur={handelPasswordBlur} className='w-full bg-slate-200 pl-2 py-2 font-semibold	 rounded text-black  my-3' type='password' id='password' placeholder='password' required />

                <input className='w-full bg-red-600 hover:bg-red-700 text-yellow-100 p-2 rounded' type="submit" value="Login" />
            </form>
            <small className=' ml-20 cursor-pointer font-semibold	'> New User?
                <Link className='ml-2 text-red-600 underline  ' to='/signup'>Sign up</Link>
            </small>
            <p className='mt-12 text-red-600 ml-20'>{notUserMessage}</p>
        </div>
    );
};

export default Login;