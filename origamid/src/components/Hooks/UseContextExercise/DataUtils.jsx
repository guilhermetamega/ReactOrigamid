import { useContext } from "react";
import { GlobalContext } from "./Global";

export default function DataUtils() {
  const global = useContext(GlobalContext);

  function handleClickFetch() {
    global.fetchData();
  }

  function handleClickClear() {
    global.clearData();
  }
  return (
    <>
      <button onClick={handleClickFetch}>Buscar produtos</button>
      <button onClick={handleClickClear}>Limpar</button>
    </>
  );
}
