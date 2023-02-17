import { useEffect, useState } from "react";

export default function Produto({ product, amount }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    product !== null &&
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${product}`)
        .then((res) => res.json())
        .then((json) => setData(json));
  }, [product]);

  if (data === null) {
    return null;
  }
  return (
    <>
      <h2>{data.nome}</h2>
      <h3>{data.preco * amount}</h3>
    </>
  );
}
