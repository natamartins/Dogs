import React from 'react'
import { Link } from 'react-router-dom'
import style from '../components/styles/Header.module.css'

import  {ReactComponent as Dogs} from "../components/img/Assets/dogs.svg"
const Header = () => {
  return (
    <header className={style.header}>
      <nav className={`${style.nav} container`} >
      <Link to="/" className={style.logo}>
        <Dogs/>
      </Link>
      <Link to="login" className={style.loagin}>Login / Criar Conta</Link>
    </nav>
    </header>
  )
}

export default Header