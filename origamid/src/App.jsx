import "./App.css";
import ArrayClass from "./components/ArraysClass";
import ArrayExercise from "./components/ArraysExercise";
import ClientsExercise from "./components/ClientsExercise";
import EventsClass from "./components/EventsClass";
import UseStateClass from "./components/Hooks/UseStateClass";
import PropertiesClass from "./components/PropertiesClass";
import UseStateExercise from "./components/Hooks/UseStateExercise";
import UseEffectClass from "./components/Hooks/UseEffectClass";
import UseEffectExercise from "./components/Hooks/UseEffectExercise";
import UseContextClass from "./components/Hooks/UseContextClass";
import UseContextExercise from "./components/Hooks/UseContextExercise";
import InputClass from "./components/Forms/InputClass";
import FormUtils from "./components/Forms/FormUtils";
import FormComponents from "./components/Forms/FormComponents";
import CustomForm from "./components/Forms/CustomForm";
import CustomFormExercise from "./components/Forms/CustomFormExercise";
const App = () => {
  const active = false;

  const styleH1 = {
    color: "red",
    fontSize: 20,
    fontFamily: "Roboto",
  };

  return (
    <main style={{ textAlign: "center" }}>
      <h1>{active ? "Texto ativo" : "Texto inativo"}</h1>
      <h1 style={styleH1}>H1 estilizado</h1>
      <ClientsExercise />
      <ArrayClass />
      <ArrayExercise />
      <EventsClass />
      <PropertiesClass />
      <UseStateClass />
      <UseStateExercise />
      <UseEffectClass />
      <UseEffectExercise />
      <UseContextClass />
      <UseContextExercise />
      <InputClass />
      <FormUtils />
      <FormComponents />
      <CustomForm />
      <CustomFormExercise />
    </main>
  );
};

export default App;
