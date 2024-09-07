import InputForm from "./InputForm/index";
import styles from "./styles.module.css";

interface InputProps {
  name: string;
  placeholder: string;
}

interface FormProps {
  inputs: InputProps[];  // Agora o Form recebe uma lista de inputs
}

function Form({ inputs }: FormProps) {
  return (
    <div>
      <form className={styles.formContainer} action="">
        {inputs.map((input, index) => (
          <InputForm 
            key={index}  // Chave única para cada input
            name={input.name} 
            placeholder={input.placeholder} 
          />
        ))}

        <button type="button">Enviar</button>
      </form>
    </div>
  );
}

export default Form;
