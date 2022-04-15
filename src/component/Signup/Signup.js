import React from 'react';
import logo2 from '../../images/logo2.png'

const Signup = () => {
    return (
        <div className='w-1/4 mx-auto mt-14'>
            <img style={{ width: '200px', margin: '0 auto' }} src={logo2} alt="" />
            <form className='flex-none mt-20 mb-2'>
                <input className='w-full bg-slate-200 pl-2 py-2 font-semibold	 rounded text-black' type='text' id='name' placeholder='Name' />

                <input className='w-full bg-slate-200 pl-2 py-2 font-semibold	 rounded text-black my-3' type='email' id='email' placeholder='Email' />

                <input className='w-full bg-slate-200 pl-2 py-2 font-semibold	 rounded text-black' type='password' id='password' placeholder='password' />

                <input className='my-3 w-full bg-slate-200 pl-2 py-2 font-semibold	 rounded text-black' type='password' id='comfirm-password' placeholder='password' />

                <input className='w-full bg-red-600 hover:bg-red-700 text-yellow-100 p-2 rounded' type="submit" value="SignUp" />
            </form>
            <small className='text-red-600 ml-20 cursor-pointer font-semibold	'>Already have an account</small>
        </div>
    );
};

export default Signup;