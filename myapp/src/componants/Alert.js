import React from 'react'
export function Alert(props) {
    return (
        <div style={{height:'60px'}}>
            <div className={`alert alert-${props.msg[0] === "Success" ? "success" : "danger"} alert-dismissible fade show text-start`} role="alert">
                <strong>{props.msg[0] === "Success" ? "Success" : "Sorry"}:</strong> {props.msg[1]}
            </div>
        </div>
    )
}