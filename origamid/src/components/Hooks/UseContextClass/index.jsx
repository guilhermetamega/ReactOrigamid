import { createContext, useContext } from "react";

//Criação de contexto
export const UserContext = createContext();

//Pegando o contexto de usuário e aplicando ao produto
export const Produto = () => {
  const user = useContext(UserContext);

  return <p>Product by: {user.name}</p>;
};

//Aplicando o produto e provendo o contexto de usuário ao mesmo
export default function UseContextClass() {
  return (
    <>
      <UserContext.Provider value={{ name: "Paulo" }}>
        <Produto />
      </UserContext.Provider>
      <hr />
    </>
  );
}
