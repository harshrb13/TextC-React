import React from 'react'

function AlertBox(props) {
    return (
        props.alertBox && <div className={`alert alert-${props.alertBox.Type} alert-dismissible fade show`}  role="alert" >
            <strong>{props.alertBox.Type}:</strong>{props.alertBox.msg}
        </div>
    )
}

export default AlertBox