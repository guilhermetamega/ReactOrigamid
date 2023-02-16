import { useState } from "react";
import Produto from "./Produto";

export default function UseStateExercise() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);

  async function handleClick(e) {
    setLoading(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${e.target.innerText}`
    );

    const json = await response.json();

    console.log(json);

    setData(json);
    setLoading(false);
  }

  return (
    <>
      <button onClick={handleClick}>tablet</button>
      <button onClick={handleClick}>smartphone</button>
      <button onClick={handleClick}>notebook</button>
      {loading && <p>Carregando...</p>}
      {!loading && data && <Produto data={data} />}
      <hr />
    </>
  );
}
