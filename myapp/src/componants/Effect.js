import React, { useEffect, useState } from 'react'

export default function Effect() {
    const [data, setData] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setData(data + 1)
        }, 1000)
    },[])
    return (
        <div>
            {data}
        </div>
    )
}
