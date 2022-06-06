import React from "react";
import UserHeadNav from "./UserHeadNav";
import styles from "../styles/UserHead.module.css";
import { useLocation } from "react-router-dom";

const UserHead = () => {
  const [titulo, setTitulo] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/conta/postar":
        setTitulo("Poste Sua Foto");
        break;
      case "/conta/estatisticas":
        setTitulo("Estatisticas");
        break;
      default:
        setTitulo("Minha Conta");
    }
  }, [location]);

  return (
    <section className={styles.header}>
      <h1 className="tittle">{titulo}</h1>
      <UserHeadNav />
    </section>
  );
};

export default UserHead;
