import React from 'react'

import style from './Input.module.css'

const Input = ({label}) => {
  return (
   <div>
     <label htmlFor="">{label}</label>
      <input className={style.Input} />
   </div>
  )
}

export default Input