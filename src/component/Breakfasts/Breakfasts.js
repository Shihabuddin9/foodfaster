import React, { useEffect, useState } from 'react';
import Breakfast from '../Breakfast/Breakfast';

const Breakfasts = () => {
    const [breakfasts, setBareakfasts] = useState([])

    useEffect(() => {
        fetch('breakfast.json')
            .then(res => res.json())
            .then(data => setBareakfasts(data))
    }, [])
    return (
        <div className='grid grid-cols-3 mx-28 ml-44 mt-6 pb-28'>
            {
                breakfasts.map(breakfast => <Breakfast
                    key={breakfast.id}
                    breakfast={breakfast}
                ></Breakfast>)
            }
        </div>
    );
};

export default Breakfasts;