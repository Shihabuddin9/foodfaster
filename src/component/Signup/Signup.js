import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import logo2 from '../../images/logo2.png'
import auth from '../../firebase.init'
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    // const [successMessage, setSuccessMessage] = useState('')
    const [wrongPassword, setWrongPassword] = useState('')
    const [
        createUserWithEmailAndPassword,
        user
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()

    // get email value
    const handelEmailBlur = e => {
        setEmail(e.target.value)
    }

    // get password value
    const handelPasswordBlur = e => {
        setPassword(e.target.value)
    }

    // get confirmPassword value
    const handelConfirmPasswordBlur = e => {
        setConfirmPassword(e.target.value)
    }

    if (user) {
        navigate('/')
    }

    // get submit result
    const handelUserSubmit = e => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setWrongPassword('Your two Password did not match')
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }


    // if (user) {
    //     setSuccessMessage('Your account has been successful')
    //     return;
    // }

    return (
        <div className='w-1/4 mx-auto'>
            <img style={{ width: '200px', margin: '0 auto' }} src={logo2} alt="" />
            <form onSubmit={handelUserSubmit} className='flex-none mt-20 mb-2'>
                <input className='w-full bg-slate-200 pl-2 py-2 font-semibold	 rounded text-black' type='text' id='name' placeholder='Name' />

                <input onBlur={handelEmailBlur} className='w-full bg-slate-200 pl-2 py-2 font-semibold	 rounded text-black my-3' type='email' id='email' placeholder='Email' required />

                <input onBlur={handelPasswordBlur} className='w-full bg-slate-200 pl-2 py-2 font-semibold	 rounded text-black' type='password' id='password' placeholder='password' required />

                <input onBlur={handelConfirmPasswordBlur} className='mt-3 w-full bg-slate-200 pl-2 py-2 font-semibold rounded text-black' type='password' id='comfirm-password' placeholder='password' required />
                {/* Wrong password message */}
                <small className=' text-red-600 font-semibold'>{wrongPassword}</small>

                <input className='w-full bg-red-600 hover:bg-red-700 text-yellow-100 p-2 rounded mt-3' type="submit" value="SignUp" />
            </form>
            <small className=' ml-14 cursor-pointer font-semibold	'>Already have an account ?
                <Link className='ml-2 text-red-600 underline  ' to='/login'>Login</Link>
            </small>

            {/* <small className='text-green-800 ml-20 cursor-pointer font-semibold'>{successMessage}</small> */}
        </div>
    );
};

export default Signup;