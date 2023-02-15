export default function ArraysExercise() {
  const produtos = [
    {
      id: 1,
      nome: "Smartphone",
      preco: "R$ 2000",
      cores: ["#29d8d5", "#252a34", "#fc3766"],
    },
    {
      id: 2,
      nome: "Notebook",
      preco: "R$ 3000",
      cores: ["#ffd045", "#d4394b", "#f37c59"],
    },
    {
      id: 3,
      nome: "Tablet",
      preco: "R$ 1500",
      cores: ["#365069", "#47c1c8", "#f95786"],
    },
  ];
  return (
    <>
      <ul style={{ listStyle: "none" }}>
        {produtos.map(({ nome, preco, cores }) => (
          <li key={nome}>
            <h1>{nome}</h1>
            <h2>Preço: {preco}</h2>
            {cores.map((cor) => (
              <h3 style={{ backgroundColor: cor, color: "white" }}>{cor}</h3>
            ))}
            <hr />
          </li>
        ))}
      </ul>
      <hr />
    </>
  );
}
