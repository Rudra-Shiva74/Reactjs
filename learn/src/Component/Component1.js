import React, { useState, createContext } from 'react';
import Component2 from './Component2';
export default function Component1() {
    const [name, setName] = useState('Abhishek Tiwari');
    const namecontext = createContext();
    // setName("Abhi")
    return (
        <div>
            <>
                <namecontext.Provider value={name}></namecontext.Provider>
                <h1>Comp1</h1>
                <Component2 name={name} />
            </>
        </div>
    )
}
