import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export default function GlobalStorage({ children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function fetchData() {
    fetch("https://ranekapi.origamid.dev/json/api/produto/")
      .then((res) => res.json())
      .then((json) => setData(json));
  }

  function clearData() {
    setData(null);
  }
  return (
    <GlobalContext.Provider value={{ data, setData, clearData, fetchData }}>
      {children}
    </GlobalContext.Provider>
  );
}
