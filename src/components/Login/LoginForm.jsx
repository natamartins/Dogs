import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import Button from "../Forms/Button";
import Input from "../Forms/input";
import Error from "../Help/Error";
import styles from "../styles/LoginForm.module.css";
import styleBtn from "../Forms/Button.module.css";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <section className="animeLeft">
      <h1 className="tittle">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link to="/login/perdeu" className={styles.perdeu}>Perdeu a Senha ?</Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtittle}>Cadastre-se</h2>
        <p>Ainda não possui uma conta ? Cadastre-se já no site.</p>
        <Link to="/login/criar" className={styleBtn.button}>Cadastro</Link>
      </div>
    </section>
  );
};
export default LoginForm;
