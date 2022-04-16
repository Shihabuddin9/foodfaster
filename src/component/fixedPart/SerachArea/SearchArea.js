import React from 'react';
import { Outlet } from 'react-router-dom';
import bgPhoto from '../../../images/bannerbackground.png'
const SearchArea = () => {
    return (
        <div className='mx-auto'>
            <img src={bgPhoto} alt="" />
            <Outlet></Outlet>
        </div>
    );
};

export default SearchArea;