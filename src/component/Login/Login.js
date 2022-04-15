import React from 'react';
import logo2 from '../../images/logo2.png'

const Login = () => {
    return (
        <div className='w-1/4 mx-auto mt-14'>
            <img style={{ width: '200px', margin: '0 auto' }} src={logo2} alt="" />
            <form className='flex-none mt-20'>
                <input className='w-full bg-slate-200 pl-2 py-2 font-semibold	 rounded text-black' type='email' id='email' placeholder='Email' />

                <input className='w-full bg-slate-200 pl-2 py-2 font-semibold	 rounded text-black  my-3' type='password' id='password' placeholder='password' />

                <input className='w-full bg-red-600 hover:bg-red-700 text-yellow-100 p-2 rounded' type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;