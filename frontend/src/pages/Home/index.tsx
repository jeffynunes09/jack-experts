import styles from "./styles.module.css";
import home from "../../assets/home.png";
import Form from "../../components/Form";
import { useState } from "react";

function Home() {
  const [login, setLogin] = useState(false);

  const changeLayout = () => {
    setLogin(true); // Quando o botão for clicado, altera para o formulário de login
  };
  const inputFields = [
    { name: "Email", placeholder: "Digite seu email" },
    { name: "Senha", placeholder: "Digite sua senha" },
    { name: "Confirmar Senha", placeholder: "Confirme sua senha" },
  ];
  return (
    <div className={styles.ContainerPrincipal}>
      <img src={home} alt="Foto pagina home" />
      
      {login ? (
         <Form inputs={inputFields} />
      ) : (
        <button onClick={changeLayout}>Login</button>
      )}
    </div>
  );
}

export default Home;
