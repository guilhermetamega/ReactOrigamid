import { useState } from "react";

export default function UseStateClass() {
  const [active, setActive] = useState(true);
  return (
    <>
      <button onClick={() => setActive(!active)}>
        {active ? "Botão ligado" : "Botão desligado"}
      </button>
      <hr />
    </>
  );
}
