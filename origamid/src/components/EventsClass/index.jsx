export default function EventsClass() {
  function handleClick(e) {
    alert("Comprou " + e.target.innerText);
  }
  return (
    <>
      <h1>Eventos</h1>
      <button onClick={handleClick}>Camisa</button>
      <button onClick={(e) => alert("Comprou " + e.target.innerText)}>
        Blusa
      </button>
      <hr />
    </>
  );
}
