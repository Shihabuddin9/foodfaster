import React from 'react';
import '../Breakfast/breakfast.css'

const Lunch = ({ lunch }) => {
    const { img, name, price, body } = lunch
    return (
        <div className='breakfast rounded-lg my-8'>
            <img className='py-3' src={img} alt="" />
            <div className='text-center'>
                <p className='font-bold'>{name}</p>
                <small className=''>{body}</small>
                <p className='font-bold pb-2'>${price}</p>
            </div>
        </div>
    );
};

export default Lunch;