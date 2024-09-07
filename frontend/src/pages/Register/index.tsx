
import Form from "../../components/Form/index.tsx"
function Register() {

    const inputFields = [
        { name: "Email", placeholder: "Digite seu email" },
        { name: "Senha", placeholder: "Digite sua senha" },
        { name: "Confirmar Senha", placeholder: "Confirme sua senha" },
      ];
  return (
    <div>
     <Form inputs={inputFields} />
    </div>
  )
}

export default Register