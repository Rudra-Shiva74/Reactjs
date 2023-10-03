import React, { useState, useContext } from 'react'
export default function Component3({ name }) {
    const use = useContext(namecontext);
    return (
        <div>
            <>
                <h1>Hello {name}</h1>
                <h1>{use}</h1>

            </>
        </div>
    )
}
