import React from 'react'
import styles from './Input.module.css'

const Input = ({label , type , name, value, onChange , error , onBlur}) => {
  return (
   <div className={styles.wrapper}>
     <label htmlFor={name} className={styles.lab