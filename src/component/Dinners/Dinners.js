import React, { useEffect, useState } from 'react';
import Dinner from '../Dinner/Dinner';

const Dinners = () => {
    const [dinners, setDinners] = useState([])
    useEffect(() => {
        fetch('dinner.json')
            .then(res => res.json())
            .then(data => setDinners(data))
    }, [])
    return (
        <div className='grid grid-cols-3 mx-28 ml-44 mt-6'>
            {
                dinners.map(dinner => <Dinner
                    key={dinner.id}
                    dinner={dinner}
                ></Dinner>)
            }
        </div>
    );
};

export default Dinners;