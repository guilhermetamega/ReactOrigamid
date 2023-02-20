import useForm from "../../Hooks/UseFormCustomHook";
import Input from "./Input";

export default function CustomForm() {
  const cep = useForm("cep");

  function handleSubmit(e) {
    e.preventDefault();
    if (cep.validate()) {
      console.log("Send data");
    } else {
      console.log("Dont send data");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Custom Form</h1>
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <button>Send</button>
      <hr />
    </form>
  );
}
