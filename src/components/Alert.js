import React from 'react'

export default function Alert(props) {
  return (
    <div className="alert alert-success" role="alert">
  <strong>{props.alert.type}</strong> : {props.alert.msg}
</div>
  )
}
