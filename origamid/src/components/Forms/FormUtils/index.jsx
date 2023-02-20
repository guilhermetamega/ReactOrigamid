import { useState } from "react";

export default function FormUtils() {
  const [message, setMessage] = useState("");
  const [select, setSelect] = useState("");
  const [radio, setRadio] = useState("");

  function handleChangeRadio({ target }) {
    setRadio(target.value);
  }

  //CheckBox
  const [checkbox, setCheckbox] = useState(false);
  const [checkboxColors, setCheckboxColors] = useState([]);

  function handleChangeCheckbox({ target }) {
    setCheckbox(target.checked);
  }

  function handleChangeCheckboxColors({ target }) {
    target.checked
      ? setCheckboxColors([...checkboxColors, target.value])
      : setCheckboxColors(
          checkboxColors.filter((color) => color !== target.value)
        );
    console.log(checkboxColors);
  }
  //Dados sendo atualizados apenas após a próxima ação, problema do useState
  function handleChecked(color) {
    return checkboxColors.includes(color);
  }

  return (
    <>
      <h1>Form Utils</h1>
      <form>
        <h3>Text Area</h3>
        <textarea
          id="message"
          rows="5"
          value={message}
          onChange={({ target }) => setMessage(target.value)}
        ></textarea>
        <p>{message}</p>
        <hr />
        <h3>Select</h3>
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
        <hr />
        <h3>Radio</h3>
        <label>
          <input
            type="radio"
            value="notebook"
            checked={radio === "notebook"}
            onChange={handleChangeRadio}
          />
          Notebook
        </label>
        <label>
          <input
            type="radio"
            value="smartphone"
            checked={radio === "smartphone"}
            onChange={handleChangeRadio}
          />
          Smartphone
        </label>
        <label>
          <input
            type="radio"
            value="tablet"
            checked={radio === "tablet"}
            onChange={handleChangeRadio}
          />
          Tablet
        </label>
        <hr />
        <h3>Checkbox</h3>
        <label>
          <input
            type="checkbox"
            value="termos"
            checked={checkbox}
            onChange={handleChangeCheckbox}
          />
          Li os termos e os aceito.
        </label>

        <label>
          <input
            type="checkbox"
            value="azul"
            checked={handleChecked("azul")}
            onChange={handleChangeCheckboxColors}
          />
          Azul
        </label>
        <label>
          <input
            type="checkbox"
            value="vermelho"
            checked={handleChecked("vermelho")}
            onChange={handleChangeCheckboxColors}
          />
          Vermelho
        </label>
        <label>
          <input
            type="checkbox"
            value="verde"
            checked={handleChecked("verde")}
            onChange={handleChangeCheckboxColors}
          />
          Verde
        </label>
        <label>
          <input
            type="checkbox"
            value="amarelo"
            checked={handleChecked("amarelo")}
            onChange={handleChangeCheckboxColors}
          />
          Amarelo
        </label>
        <label></label>
      </form>
      <hr />
    </>
  );
}
