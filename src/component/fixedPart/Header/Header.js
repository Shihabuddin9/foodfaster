import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../../images/logo2.png'

const Header = () => {
    return (
        <nav className='flex justify-between items-center mx-12 mt-6'>
            <img style={{ width: '150px' }} src={logo2} alt="" />
            <div>
                <Link className='mr-8 text-black font-semibold' to='/login'>Login</Link>
                <Link className='bg-red-600 hover:bg-red-700	p-1 rounded-full px-3 text-yellow-100 text-sm' to='/signup'>Sign Up</Link>
            </div>
        </nav>
    );
};

export default Header;