import React from 'react'

const Button = ({title, color}) => {
  return (
    <button style={{backgroundColor: color, }}>{title}</button>
  )
}

export default Button