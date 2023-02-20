import { useState } from "react";

export default function FormUtils() {
  const [message, setMessage] = useState("");
  const [select, setSelect] = useState("");
  return (
    <>
      <form>
        <textarea
          id="message"
          rows="5"
          value={message}
          onChange={({ target }) => setMessage(target.value)}
        ></textarea>
        <p>{message}</p>
        <hr />
        <select
          value={select}
          onChange={({ target }) => setSelect(target.value)}
        >
          <option value="" disabled>
            Selecione
          </option>
          <option value="notebook">Notebook</option>
          <option value="smartphone">Smartphone</option>
          <option value="tablet">Tablet</option>
        </select>
        <p>{select}</p>
      </form>
      <hr />
    </>
  );
}
