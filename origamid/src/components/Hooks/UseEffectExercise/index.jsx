import Produto from "./Produto";
import { useState, useEffect } from "react";

export default function UseEffectExercise() {
  const [product, setProduct] = useState(null);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    const localProduct = window.localStorage.getItem("product");
    if (localProduct !== "null") setProduct(localProduct);
  }, []);

  useEffect(() => {
    if (product !== null) window.localStorage.setItem("product", product);
  }, [product]);

  function handleClick({ target }) {
    setProduct(target.innerText);
  }
  return (
    <>
      <h1>Use Effect Exercise</h1>
      <h2>Preferência: {product}</h2>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      <Produto product={product} amount={amount} />
      <button onClick={() => setAmount(amount + 1)}>+</button>
      <button onClick={() => setAmount(amount - 1)}>-</button>
      <hr />
    </>
  );
}
