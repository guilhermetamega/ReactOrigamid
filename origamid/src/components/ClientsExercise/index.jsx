export default function ClientsExercise() {
  const mario = {
    nome: "Mario",
    idade: 31,
    compras: [
      { produto: "Notebook", valor: 2500 },
      { produto: "Geladeira", valor: 3000 },
      { produto: "Smartphone", valor: 1500 },
      { produto: "Guitarra", valor: 3500 },
    ],
    ativo: false,
  };

  // eslint-disable-next-line no-unused-vars
  const neida = {
    nome: "Neida",
    idade: 28,
    compras: [
      { produto: "Notebook", valor: 2500 },
      { produto: "Geladeira", valor: 3000 },
      { produto: "Smartphone", valor: 1500 },
    ],
    ativo: true,
  };

  const data = mario;

  const total = data.compras.map((item) => item.valor).reduce((a, b) => a + b);

  return (
    <>
      <hr />
      <h2>{data.nome}</h2>
      <h2>Idade: {data.idade}</h2>
      <h2>
        Situação:{" "}
        <span style={{ color: data.ativo ? "green" : "red" }}>
          {data.ativo ? "Ativo" : "Inativo"}
        </span>
      </h2>
      <h2>Gastos Totais: R$ {total}</h2>
      {total >= 10000 && <h2>Diminua seus gastos</h2>}
      <hr />
    </>
  );
}
