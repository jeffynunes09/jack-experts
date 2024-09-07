import React from "react";

interface InputFormProps {
  name: string;
  placeholder: string;
}

function InputForm({ name, placeholder }: InputFormProps) {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input type="text" name={name} id={name} placeholder={placeholder} />
    </>
  );
}

export default InputForm;
