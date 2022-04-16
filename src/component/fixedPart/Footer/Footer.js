import React from 'react';
import logo2 from '../../../images/logo2.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='bg-slate-800	 h-64 w-full absolute bottom-0'>
            <div className='flex justify-between items-center pt-10 px-20'>
                <div>
                    <img className='w-48 cursor-pointer' src={logo2} alt="" />
                </div>
                <div className='flex'>
                    <div className='text-white  mr-24 text-sm font-light leading-6 cursor-pointer'>
                        <p className='hover:text-gray-400'>About Online Food</p>
                        <p className='hover:text-gray-400'>read our blog</p>
                        <p className='hover:text-gray-400'>Sign up to deliver</p>
                        <p className='hover:text-gray-400'>Add your restaurent</p>
                    </div>

                    <div className='text-white text-sm font-light leading-6 cursor-pointer'>
                        <p className='hover:text-gray-400'>Get help</p>
                        <p className='hover:text-gray-400'>Read FAQs</p>
                        <p className='hover:text-gray-400'>View all sities</p>
                        <p className='hover:text-gray-400'>Restaurent near me</p>
                    </div>
                </div>
            </div>
            <div className='pt-20 px-20'>
                <div className='flex justify-between items-center '>
                    <div className='text-white text-sm	font-light'>
                        <p>Copyright &#169; {new Date().getFullYear()} online food</p>
                    </div>
                    <div className='text-white text-sm'>
                        <span className='hover:text-gray-400 cursor-pointer'>Privacy policy</span>
                        <span className='mx-12 hover:text-gray-400 cursor-pointer'>Trems of use</span>
                        <span className='hover:text-gray-400 cursor-pointer'>pricing</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;