import { useEffect, useState } from "react";

export default function UseEffectClass() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  useEffect(() => {
    document.title = "Clicou " + count;
  }, [count]); //Uma função anônima que atualiza os dados de count toda vez que é atualizado e altera o título da página automaticamente

  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/notebook")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <h1>Use Effect</h1>

      {data && (
        <div>
          <h1>{data.nome}</h1>
          <button onClick={() => setCount(count + 1)}>+</button>
          <p>{count}</p>
          <button onClick={() => setCount(count - 1)}>-</button>
          <p>R$ {data.preco * count}</p>
        </div>
      )}
      <hr />
    </>
  );
}
