import { createContext, useContext, useState } from "react";

//Criação de contexto
export const UserContext = createContext();

//Pegando o contexto de usuário e aplicando ao produto
export const Produto = () => {
  const user = useContext(UserContext);

  return <p>Product by: {user.name}</p>;
};

export const ProdutoGlobal = () => {
  const global = useContext(GlobalContext);

  function handleClick() {
    global.setCar((car) => car + 1);
  }

  return (
    <p>
      Total: {global.car} <button onClick={handleClick}>+</button>
    </p>
  );
};

//Criando contexto global
export const GlobalContext = createContext();

//Função que pode envolver todos os dados da aplicação
export function GlobalStorage({ children }) {
  const [car, setCar] = useState(0);

  return (
    <GlobalContext.Provider value={{ car, setCar }}>
      {children}
    </GlobalContext.Provider>
  );
}

//Aplicando o produto e provendo o contexto de usuário ao mesmo
export default function UseContextClass() {
  return (
    <>
      <h1>Use Context</h1>
      <UserContext.Provider value={{ name: "Paulo" }}>
        <Produto />
      </UserContext.Provider>
      {
        //Utilizando o contexto global para alterar dados de outros locais e utilizando outras variáveis e funções
      }
      <GlobalStorage>
        <ProdutoGlobal />
      </GlobalStorage>
      <hr />
    </>
  );
}
