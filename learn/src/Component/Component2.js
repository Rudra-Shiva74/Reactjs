import React from 'react'
import Component3 from './Component3';
export default function Component2({ name }) {
    return (
        <div>
            <>
            <Component3 name={name} />
            <h1>Component2</h1>
            {/* <h1>Hello {name}</h1> */}
            </>
        </div>
    )
}
