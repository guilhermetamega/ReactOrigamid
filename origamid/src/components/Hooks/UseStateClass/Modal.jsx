export default function Modal({ isOpen, closeModal }) {
  return (
    <>
      {isOpen ? (
        <div>
          Modal Experimental <button onClick={closeModal}>Fechar</button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
