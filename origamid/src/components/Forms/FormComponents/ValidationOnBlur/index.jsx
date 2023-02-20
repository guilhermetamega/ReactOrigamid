import { useState } from "react";

export default function ValidationOnBlur() {
  const [cep, setCep] = useState("");
  const [error, setError] = useState(null);

  function validateCep(value) {
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      //Verifica se existem 5 caracteres para a esquerda e 3 para a direita, dando também direito a colocar ou não o traço separador
      setError("Preencha um cep válido");
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    validateCep(target.value);
  }

  function handleChange({ target }) {
    if (error) validateCep(target.value);
    setCep(target.value);
  }
  return (
    <form>
      <input
        type="text"
        id="cep"
        placeholder="CEP"
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && <p>{error}</p>}
      <button>Send</button>
    </form>
  );
}
