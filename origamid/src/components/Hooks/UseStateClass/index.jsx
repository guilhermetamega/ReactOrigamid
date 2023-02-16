import { useState } from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

export default function UseStateClass() {
  const [active, setActive] = useState(true);
  const [list, setList] = useState(["Item A", "Item B"]);
  const [modal, setModal] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([
    { user: "Pedro", name: "Pedro Romero", age: 16 },
    { user: "Luiz", name: "Luiz Romero", age: 19 },
  ]);

  function closeModal() {
    setModal(false);
  }

  function openModal() {
    setModal(true);
  }

  function handleClickReative() {
    setList([...list, "Item adicionado A", "Item adicionado B"]); //Mais de um item pode ser adicionado à lista utilizando o spread pegando os itens anteriormentes adicionados à lista principal
  }

  console.log(list);
  return (
    <>
      <h3>Auto invert</h3>
      <button onClick={() => setActive(!active)}>
        {active ? "Botão ligado" : "Botão desligado"}
      </button>

      <h3>Setando lista com useState</h3>
      <button onClick={handleClickReative}>Adicionar Itens</button>

      <h3>Pegando dados de um array no useState e Filtrando</h3>
      {data
        .filter(({ age }) => age < 18)
        .map(({ user, name, age }) => (
          <p>
            <b>{user} - </b>
            {name},{age}
          </p>
        ))}

      <h3>Modal com useState</h3>
      <div>
        <Modal isOpen={modal} closeModal={closeModal} />
        <ButtonModal openModal={openModal} />
      </div>
      <hr />
    </>
  );
}
