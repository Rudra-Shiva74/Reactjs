import React, { useState, useEffect } from 'react'

export default function Effect() {
    const [data, setData] = useState(0);
    const [calculation, setcalculation] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setData(data + 2);
        }, [1000])
        // return ()=>
    }, [])
    return (
        <div>
            <button className='btn btn-primary' onClick={() => setcalculation(calculation + 1)}>{calculation}</button>
            {data}
        </div>
    )
}
