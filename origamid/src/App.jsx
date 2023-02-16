import "./App.css";
import ArrayClass from "./components/ArraysClass";
import ArrayExercise from "./components/ArraysExercise";
import ClientsExercise from "./components/ClientsExercise";
import EventsClass from "./components/EventsClass";
import UseStateClass from "./components/Hooks/UseStateClass";
import PropertiesClass from "./components/PropertiesClass";
import UseStateExercise from "./components/UseStateExercise";
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
    </main>
  );
};

export default App;
