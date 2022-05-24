import React from "react";
import { Link } from "react-router-dom";
import style from "../components/styles/Header.module.css";
import { UserContext } from "../UserContext";
import { ReactComponent as Dogs } from "../components/img/Assets/dogs.svg";

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className={style.header}>
      <nav className={`${style.nav} container`}>
        <Link to="/" aria-label="Dogs - Home" className={style.logo}>
          <Dogs />
        </Link>
        {data ? (
          <Link to="/Conta" className={style.login}>
           {data.nome}
          </Link>
        ) : (
          <Link to="/login" className={style.login}>
            Login / Criar Conta
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
