import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    return (
        <div className='mt-6 '>
            <nav className='w-1/5 mx-auto flex'>
                <CustomLink className='text-xl font-medium' to='/'>Breakfast</CustomLink>
                <CustomLink className='mx-5 text-xl font-medium' to='/lunchs'>Lunch</CustomLink>
                <CustomLink className='text-xl font-medium' to='/dinners'>Dinner</CustomLink>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Navbar;