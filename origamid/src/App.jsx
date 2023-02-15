import "./App.css";
import ArrayClass from "./components/ArraysClass";
import ArrayExercise from "./components/ArraysExercise";
import ClientsExercise from "./components/ClientsExercise";
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
    </main>
  );
};

export default App;
