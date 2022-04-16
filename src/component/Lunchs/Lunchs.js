import React, { useEffect, useState } from 'react';
import Lunch from '../Lunch/Lunch';

const Lunchs = () => {
    const [lunchs, setLunchs] = useState([])
    useEffect(() => {
        fetch('lunchs.json')
            .then(res => res.json())
            .then(data => setLunchs(data))
    }, [])
    return (
        <div className='grid grid-cols-3 mx-28 ml-44 mt-6'>
            {
                lunchs.map(lunch => <Lunch
                    key={lunch.id}
                    lunch={lunch}
                ></Lunch>)
            }
        </div>
    );
};

export default Lunchs;