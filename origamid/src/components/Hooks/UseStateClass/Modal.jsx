export default function Modal({ modal, setModal }) {
  modal ? (
    <div>
      Modal Experimental <button onClick={() => setModal(false)}>Fechar</button>
    </div>
  ) : (
    <></>
  );
}
