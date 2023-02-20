import { useState } from "react";

const formFields = [
  //Cria os campos de formulário para serem utilizados posteriormente, um tipo de template para os campos
  {
    id: "nome",
    label: "Nome",
    type: "text",
  },
  {
    id: "email",
    label: "E-mail",
    type: "email",
  },
  {
    id: "senha",
    label: "Senha",
    type: "password",
  },
  {
    id: "cep",
    label: "Cep",
    type: "text",
  },
];

export default function InputClass() {
  const [form, setForm] = useState(
    formFields.reduce((acc, field) => {
      return { ...acc, [field.id]: "" };
    }, {})
  );

  const [response, setResponse] = useState(null);

  function handleSubmit(e) {
    e.preventDefault(); //questionar o que é (?)
    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((res) => setResponse(res));
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        {formFields.map(({ id, label, type }) => (
          <div key={id}>
            <label htmlFor={id}>{label}</label>
            <input
              type={type}
              id={id}
              value={form[id]}
              onChange={handleChange}
              placeholder={label}
            />
          </div>
        ))}
        <button>Criar</button>
        {response && response.ok ? (
          <p>Usuário Criado</p>
        ) : (
          <p>Erro ao criar usuário</p>
        )}
      </form>
      <hr />
    </>
  );
}
