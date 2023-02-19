import { useContext, useState } from "react";
import { GlobalContext } from "./Global";

export default function Products() {
  const global = useContext(GlobalContext);
  const [amount, setAmount] = useState([]);
  if (global.data === null) return null;

  function handleClickAdd() {
    setAmount(amount + 1);
  }

  function handleClickRemove() {
    setAmount(amount - 1);
  }

  return (
    <>
      <h2>Produto:</h2>
      {global.data.map((product, productAmount) => (
        <p key={product.id}>
          <button onClick={handleClickRemove}>-</button>
          {product.nome} - R$ {product.preco} : {(productAmount = amount)}
          <button onClick={handleClickAdd}>+</button>
        </p>
      ))}
      {
        //pedir ajuda para fazer funcionar a adição de quantidade individual
      }
    </>
  );
}
