import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo2 from '../../../images/logo2.png'
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='bg-slate-200 fixed w-full'>
            <header className='flex justify-between items-center mx-24'>
                <Link to='/'> <img className='my-2 cursor-pointer' style={{ width: '150px' }} src={logo2} alt="" /></Link>
                <div className='py-2'>

                    {
                        user ?
                            <Link onClick={() => signOut(auth)} className='mr-8 text-black font-semibold' to='/login'>Log Out</Link>
                            :
                            <Link className='mr-8 text-black font-semibold' to='/login'>Login</Link>
                    }

                    <Link className='bg-red-600 hover:bg-red-700	p-1 rounded-full px-3 text-yellow-100 text-sm' to='/signup'>Sign Up</Link>
                </div>
            </header>
        </div>
    );
};

export default Header;