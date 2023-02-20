import { useState } from "react";

export default function FormUtils() {
  const [message, setMessage] = useState("");
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
      </form>
      <hr />
    </>
  );
}
