import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import useMedia from "../../Hooks/useMedia";
import { ReactComponent as MinhasFotos } from "../img/Assets/feed.svg";
import { ReactComponent as Estatisticas } from "../img/Assets/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "../img/Assets/adicionar.svg";
import { ReactComponent as Sair } from "../img/Assets/sair.svg";
//
import styles from "../styles/UserHeadNav.module.css";
//
const UserHeadNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);
  //
  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);
  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobilButton} ${
            mobileMenu && styles.mobilButtonAtivo
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMenuActive
        }`}
      >
        <NavLink to="/conta" end>
          <MinhasFotos />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Estatisticas />
          {mobile && "Estatisticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <AdicionarFoto />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeadNav;
